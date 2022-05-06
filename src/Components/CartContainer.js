import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../features/modal/modalSlice";
const CartContainer = () => {
	const { cartItems, total, amount } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const openModal = () => {
		dispatch(showModal());
	};
	if (amount < 1) {
		return (
			<section className='cart'>
				<header>
					<h2>your bag</h2>
					<h4 className='empty-cart'> is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<section className='cart'>
			<header>
				<h2>YOUR BAG</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					if (item.amount > 0) {
						return <CartItem key={item.id} {...item} />;
					}
				})}
			</div>
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						total <span>${total}</span>
					</h4>
				</div>
				<button className='btn clear-btn' onClick={openModal}>
					{" "}
					clear cart
				</button>
			</footer>
		</section>
	);
};

export default CartContainer;
