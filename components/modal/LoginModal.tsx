import { loginModalReducer, loginModalState } from "@/redux/features/loginModalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useCallback, useState } from "react";
import Input from "../input/Input";
import Modal from "./Modal";
import { registerModalReducer } from "@/redux/features/registerModalSlice";

const LoginModal = () => {
	const dispatch = useAppDispatch();
	const loginModal = useAppSelector(loginModalState);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) {
			return;
		}

		dispatch(loginModalReducer.handleClose());
		dispatch(registerModalReducer.handleOpen());
	}, [dispatch, isLoading]);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);
			//TODO ADD LOG IN

			dispatch(loginModalReducer.handleClose());
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
				First time using twitterclone?
				<span onClick={onToggle} className="text-white cursor-pointer hover:underline">
					Create an account
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title="Login"
			actionLabel="Sign in"
			onClose={() => dispatch(loginModalReducer.handleClose())}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
