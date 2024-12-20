import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import { createBrowserRouter } from "react-router-dom";

const articles = [
	{
		id: 1,
		title: "Les bases de React",
		content:
			"Découvrez les fondamentaux de React, une bibliothèque JavaScript puissante pour créer des interfaces utilisateur interactives.",
		author: "Aline Dupont",
		image: "react-basics.jpg",
		tags: ["React", "JavaScript", "Frontend"],
	},
	{
		id: 2,
		title: "Introduction à l'algorithmique",
		content:
			"Plongez dans le monde fascinant de l'algorithmique avec des concepts simples et des exemples pratiques.",
		author: "Jean Martin",
		image: "algorithm-intro.jpg",
		tags: ["Algorithmique", "Développement", "Apprentissage"],
	},
	{
		id: 3,
		title: "Optimiser votre site avec Next.js",
		content:
			"Apprenez à tirer parti des fonctionnalités de Next.js pour améliorer les performances et le SEO de vos sites.",
		author: "Marie Laurent",
		image: "nextjs-optimization.jpg",
		tags: ["Next.js", "SEO", "Performance"],
	},
	{
		id: 4,
		title: "Guide complet sur TypeScript",
		content:
			"Un guide détaillé pour commencer avec TypeScript et renforcer la robustesse de vos projets JavaScript.",
		author: "Jeanne Marchand",
		image: "typescript-guide.jpg",
		tags: ["TypeScript", "JavaScript", "Typage"],
	},
];

const getArticleById = (params) => {
	// console.log(params)
	// const { id } = params;
	// console.log(id);

	if (!id) {
		throw new Response("artcle not oound", { status: 400 });
	}
	return articles.find((article) => article.id === Number(id));
};

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/article/:id",
				element: <Article />,
				loader: ({ params }) => getArticleById(params),
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
