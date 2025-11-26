import { Input } from "../components/input";

import { useState } from "react";
import { Button } from "../components/button";
import { RefundItem } from "../components/refundItem";

import searchSvg from "../assets/search.svg";
import { CATEGORIES } from "../utils/categories";

const REFUND_EXEMPLE = {
	id: "123",
	username: "Matheus",
	category: "Transporte",
	amount: "34,50",
	categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
	const [name, setName] = useState("");

	function fetchRefunds(e: React.FormEvent) {
		e.preventDefault();

		console.log(name);
	}

	return (
		<div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
			<h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

			<form
				onSubmit={fetchRefunds}
				className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
			>
				<Input
					placeholder="Pesquisar pelo nome"
					onChange={(e) => setName(e.target.value)}
				/>

				<Button type="submit" variant="icon">
					<img src={searchSvg} alt="icone de pesquisa" className="w-5" />
				</Button>
			</form>

			<div>
				<RefundItem data={REFUND_EXEMPLE} />
			</div>
		</div>
	);
}
