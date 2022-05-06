import React from "react";
import reducer from "../features/cart/cartSlice";
import { addCart, updateTotals } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const RemovedItems = ({ items }) => {
	const dispatch = useDispatch();
	const handleClick = (id) => {
		// console.log(item);

		dispatch(addCart(id));
		dispatch(updateTotals());
	};
	return (
		<section className='cart'>
			<h2> Add Back Items</h2>
			{items.map((item) => {
				const { img, title, price, id } = item;

				return (
					<article className='cart-item-removed' key={id}>
						<img src={img} alt={title} />
						<div>
							<h4>{title}</h4>
							<h4 className='item-price'>${price}</h4>
							<button className='btn' onClick={() => handleClick(id)}>
								{" "}
								Add To Cart{" "}
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default RemovedItems;
