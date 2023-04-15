import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the shape of the initial state for the loginModal slice.
interface InitialState {
	isOpen: boolean;
}

// Set the initial state for the loginModal slice.
const initialState: InitialState = {
	isOpen: false,
};

// Create the loginModal slice using the createSlice() function from Redux Toolkit.
const loginModalSlice = createSlice({
	name: "loginModal", // Specify the name of the slice.
	initialState, // Specify the initial state for the slice.
	reducers: {
		// Define a reducer function to handle the "handleOpen" action.
		handleOpen: (state) => {
			state.isOpen = true;
		},
		// Define a reducer function to handle the "handleClose" action.
		handleClose: (state) => {
			state.isOpen = false;
		},
	},
});

// Export the action creators for the "handleOpen" and "handleClose" actions.
export const loginModalReducer = loginModalSlice.actions;

// Export a selector function that selects the loginModal slice from the Redux store.
export const loginModalState = (state: RootState) => state.loginModal;

// Export the reducer function for the loginModal slice.
export default loginModalSlice.reducer;
