import { registerModalReducer, registerModalState } from "@/redux/features/registerModalSlice";
import { loginModalReducer, loginModalState } from "@/redux/features/loginModalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useCallback, useState } from "react";
import Input from "../input/Input";
import Modal from "./Modal";

const RegisterModal = () => {
	const dispatch = useAppDispatch();
	const loginModal = useAppSelector(loginModalState);
	const registerModal = useAppSelector(registerModalState);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) {
			return;
		}

		dispatch(registerModalReducer.handleClose());
		dispatch(loginModalReducer.handleOpen());
	}, [dispatch, isLoading]);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);
			//TODO ADD LOG IN

			dispatch(registerModalReducer.handleClose());
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}, [dispatch]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				disabled={isLoading}
			/>

			<Input
				placeholder="Name"
				onChange={(e) => setName(e.target.value)}
				value={name}
				disabled={isLoading}
			/>

			<Input
				placeholder="Username"
				onChange={(e) => setUsername(e.target.value)}
				value={username}
				disabled={isLoading}
			/>

			<Input
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				disabled={isLoading}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p className="flex justify-center gap-x-1">
				Already have an account?
				<span onClick={onToggle} className="text-white cursor-pointer hover:underline">
					Sign in
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Create an Account"
			actionLabel="Register"
			onClose={() => dispatch(registerModalReducer.handleClose())}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
