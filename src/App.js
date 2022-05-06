import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";
import RemovedItems from "./Components/RemovedItems";
import { useSelector } from "react-redux";
function App() {
	const { modalOpen } = useSelector((state) => state.modal);
	const { cartItems } = useSelector((state) => state.cart);

	const emptyItems = cartItems.filter((item) => item.amount === 0);
	return (
		<main>
			<Navbar />
			<CartContainer />
			{modalOpen && <Modal />}
			{emptyItems.length > 0 && <RemovedItems items={emptyItems} />}
		</main>
	);
}
export default App;
