import { useState, useEffect } from "react";

interface Category {
	id: number;
	name: string;
}
const categories: Category[] = [
	{
		id: 1,
		name: "Vacances",
	},
	{
		id: 2,
		name: "Bons plans",
	},
	{
		id: 3,
		name: "Food",
	},
];

export default function Home() {
	const [categoriesList, setCategoriesList] = useState<Category[]>([]);

	const getCategories = () => {
		console.log(categories);
		setCategoriesList(categories);
	};

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<>
			<h1>Hello from Home</h1>

			{/* <button type="button" onClick={getCategories}>
				Afficher les categories
			</button> */}
			{
				<ul>
					{categoriesList.map((category) => (
						<li key={category.id}>{category.name}</li>
					))}
				</ul>
			}
		</>
	);
}
