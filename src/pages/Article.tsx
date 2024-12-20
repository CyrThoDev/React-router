import { useLoaderData } from "react-router-dom";
export default function Article() {
	const dataArticle = useLoaderData();
	console.log(dataArticle);

	return (
		<>
			<h1>Voici l' article numéro {dataArticle.id}</h1>
			<p>{dataArticle.title}</p>
		</>
	);
}
