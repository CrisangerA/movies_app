import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  id: string;
  title: string;
  vote_average: number;
  poster_path: string;
}

interface MovieState {
  loaded: boolean;
  movies: Movie[];
}

export interface MoviesState {
  recomended: MovieState;
  topRated: MovieState;
  selected: Movie | null;
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
  selected: null
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
      state.selected = action.payload;
    }
  },
});
export const { setMovieSelected } = counterSlice.actions

export default counterSlice.reducer;

export const getRecomended = () => async (dispatch: any) => {
  try {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=bdeeba2f37e3b915bba65a658be1b1d9');
    const data = await res.json();
    dispatch(counterSlice.actions.setRecomended({ 
      loaded: true, 
      movies: data.results as Movie[]
    }));
  } catch (e) {
    throw e;
  }
}

// export const setMovieSelected = (movie: Movie) => async (dispatch: any) => {
//   try {
    
//   } catch (e) {
    
//   }
// }