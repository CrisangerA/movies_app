import { Movie } from "./store/slices/movies";

export type RootStackParams = {
  Home: undefined;
  Details: { movie: Movie } ;
};
