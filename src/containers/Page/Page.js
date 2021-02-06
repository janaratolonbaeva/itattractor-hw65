import React, {useState, useEffect} from 'react';
import axiosOrders from "../../axiosOrders";
import Content from "../../components/Content/Content";

const Page = ({match}) => {
	const [pages, setPages] = useState([]);
	const id = match.params.id;

	useEffect(() => {
		const fetchData = async () => {
			let url = ".json";

			if (id) {
				url = id + url;
			}
			const pagesResponse = await axiosOrders.get(url);
			setPages(pagesResponse.data);
		};

		fetchData().then(console.error)
	}, [id]);


	return (
		<Content title={pages.title} content={pages.content}/>
	);
};

export default Page;