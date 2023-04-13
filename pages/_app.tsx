import Layout from "@/components/layout/Layout";
import Modal from "@/components/modal/Modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Modal
				onClose={function (): void {
					throw new Error("Function not implemented.");
				}}
				onSubmit={function (): void {
					throw new Error("Function not implemented.");
				}}
				actionLabel={"Submit"}
				isOpen
				title="Test Modal"
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
