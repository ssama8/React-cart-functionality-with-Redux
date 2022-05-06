import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const calculateMetrics = (cartItems) => {
	let amount = 0;
	let total = 0;
	cartItems.forEach((item) => {
		amount += item.amount;
		total += item.price * item.amount;
	});
	return [amount, total.toFixed(2)];
};

const initialState = {
	cartItems: cartItems,
	amount: calculateMetrics(cartItems)[0],
	total: calculateMetrics(cartItems)[1],
	isLoading: true,
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCart: (state, action) => {
			const id = action.payload;
			const item = state.cartItems.find((item) => item.id === id);
			item.amount++;
			// state.cartItems.push(action.payload);
		},
		clearCart: (state) => {
			state.cartItems = state.cartItems.map((item) => {
				item.amount = 0;
				return item;
			});
		},
		clearItem: (state, action) => {
			const id = action.payload;
			const item = state.cartItems.find((item) => item.id === id);
			item.amount = 0;
		},
		addItem: (state, action) => {
			const cartItem = state.cartItems.find((item) => {
				return item.id === action.payload;
			});
			cartItem.amount++;
		},
		subtractItem: (state, action) => {
			const cartItem = state.cartItems.find((item) => {
				return item.id === action.payload;
			});
			cartItem.amount--;
		},
		updateTotals: (state) => {
			const [amount, total] = calculateMetrics(state.cartItems);
			state.amount = amount;
			state.total = total;
		},
	},
});

console.log(cartSlice);

export default cartSlice.reducer;
console.log(cartSlice.actions);
export const {
	clearCart,
	clearItem,
	addItem,
	subtractItem,
	updateTotals,
	addCart,
} = cartSlice.actions;
