import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import {
	clearItem,
	addItem,
	subtractItem,
	updateTotals,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ id, title, price, img, amount }) => {
	const dispatch = useDispatch();
	const removeItem = (id) => {
		dispatch(clearItem(id));
		dispatch(updateTotals());
	};
	const add = (id) => {
		dispatch(addItem(id));
		dispatch(updateTotals());
	};
	const subtract = (id) => {
		dispatch(subtractItem(id));
		dispatch(updateTotals());
	};
	return (
		<article className='cart-item'>
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				<button className='remove-btn' onClick={() => removeItem(id)}>
					remove
				</button>
			</div>
			<div>
				<button className='amount-btn' onClick={() => add(id)}>
					<ChevronUp />
				</button>
				<p className='amount'>{amount}</p>
				<button className='amount-btn' onClick={() => subtract(id)}>
					<ChevronDown />
				</button>
			</div>
		</article>
	);
};

export default CartItem;
