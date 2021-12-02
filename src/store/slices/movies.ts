import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Actor {
  id: string;
  name: string;
  profile_path: string;
}
export interface Movie {
  id: string;
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  actors: Actor[] | undefined;
}
// -------------------------------------------------------------------------------
interface MovieState {
  loaded: boolean;
  movies: Movie[];
}
interface MovieSelected {
  movie: Movie | null;
  actors: Actor[] | null;
}
interface MoviesState {
  recomended: MovieState;
  topRated: MovieState;
  selected: MovieSelected
}

const initialState: MoviesState = {
  recomended: {
    loaded: false,
    movies: [],
  },
  topRated: {
    loaded: false,
    movies: [],    
  },
  selected: {
    actors: null,
    movie: null
  }
}

export const counterSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setRecomended: (state, action: PayloadAction<MovieState>) => {
      state.recomended.loaded = action.payload.loaded;
      state.recomended.movies = action.payload.movies;
    },
    setTopRated: (state, action: PayloadAction<MovieState>) => {
      state.topRated.loaded = action.payload.loaded;
      state.topRated.movies = action.payload.movies;
    },
    setMovieSelected: (state, action: PayloadAction<Movie>) => {
      state.selected.movie = action.payload;
    },
    setActorsMovie: (state, action: PayloadAction<Actor[]>) => {
      state.selected.actors = action.payload;
    }
  },
});
export const { setMovieSelected } = counterSlice.actions

export default counterSlice.reducer;

const API_KEY = 'bdeeba2f37e3b915bba65a658be1b1d9';
export const getRecomended = () => async (dispatch: any) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
    const data = await res.json();
    dispatch(counterSlice.actions.setRecomended({ 
      loaded: true, 
      movies: data.results as Movie[]
    }));
  } catch (e) {
    throw e;
  }
}

export const getCredits = (movie_id: string) => async (dispatch: any) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`);
    const data = await res.json();    
    dispatch(counterSlice.actions.setActorsMovie(data.cast as Actor[]));
  } catch (e) {
    throw e;
  }
}

// export const setMovieSelected = (movie: Movie) => async (dispatch: any) => {
//   try {
    
//   } catch (e) {
    
//   }
// }