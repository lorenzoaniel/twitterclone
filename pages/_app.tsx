import Layout from "@/components/layout/Layout";
import LoginModal from "@/components/modal/LoginModal";
import Modal from "@/components/modal/Modal";
import RegisterModal from "@/components/modal/RegisterModal";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			{/* <Modal
				onClose={function (): void {
					throw new Error("Function not implemented.");
				}}
				onSubmit={function (): void {
					throw new Error("Function not implemented.");
				}}
				actionLabel={"Submit"}
				isOpen
				title="Test Modal"
			/> */}
			<LoginModal />
			<RegisterModal />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
