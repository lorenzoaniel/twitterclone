import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the shape of the initial state for the registerModal slice.
interface InitialState {
	isOpen: boolean;
}

// Set the initial state for the registerModal slice.
const initialState: InitialState = {
	isOpen: false,
};

// Create the registerModal slice using the createSlice() function from Redux Toolkit.
const registerModalSlice = createSlice({
	name: "registerModal", // Specify the name of the slice.
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
export const registerModalReducer = registerModalSlice.actions;

// Export a selector function that selects the registerModal slice from the Redux store.
export const registerModalState = (state: RootState) => state.registerModal;

// Export the reducer function for the registerModal slice.
export default registerModalSlice.reducer;
