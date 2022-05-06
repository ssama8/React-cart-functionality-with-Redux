import { useDispatch } from "react-redux";
import { clearCart, updateTotals } from "../features/cart/cartSlice";
import { closeModal, hideModal } from "../features/modal/modalSlice";

const Modal = () => {
	const dispatch = useDispatch();
	return (
		<aside className='modal-container'>
			<div className='modal'>
				<h4>remove all items from your shopping cart?</h4>
				<div className='btn-container'>
					<button
						type='button'
						className='btn confirm-btn'
						onClick={() => {
							dispatch(clearCart());
							dispatch(updateTotals());
							dispatch(hideModal());
						}}>
						confirm
					</button>
					<button
						type='button'
						className='btn clear-btn'
						onClick={() => {
							dispatch(hideModal());
						}}>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
};
export default Modal;
