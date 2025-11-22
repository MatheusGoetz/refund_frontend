import { useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";

export function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();

		console.log(name, email, password, passwordConfirm);
	}

	return (
		<form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
			<Input
				required
				legend="Nome"
				placeholder="Seu Nome"
				onChange={(e) => setName(e.target.value)}
			/>

			<Input
				required
				legend="E-mail"
				type="email"
				placeholder="seuemail@email.com"
				onChange={(e) => setEmail(e.target.value)}
			/>

			<Input
				required
				legend="Senha"
				type="password"
				placeholder="123456"
				onChange={(e) => setPassword(e.target.value)}
			/>

			<Input
				required
				legend="Confirme a Senha"
				type="password"
				placeholder="123456"
				onChange={(e) => setPasswordConfirm(e.target.value)}
			/>

			<Button type="submit" isLoading={isLoading}>
				Cadastrar
			</Button>

			<a
				href="/"
				className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 trasition ease-linear"
			>
				já tenho uma conta
			</a>
		</form>
	);
}
