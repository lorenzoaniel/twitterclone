import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import type { RootState, AppDispatch } from "./store";

// This is a custom hook that provides a typed version of the useDispatch() function from react-redux.
export const useAppDispatch: () => AppDispatch = useDispatch;

// This is a custom hook that provides a typed version of the useSelector() function from react-redux.
// It takes a RootState as a generic parameter to ensure type safety.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
