import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalOpen: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showModal: (state) => {
			state.modalOpen = true;
		},
		hideModal: (state) => {
			state.modalOpen = false;
		},
	},
});

export default modalSlice.reducer;
export const { showModal, hideModal } = modalSlice.actions;
