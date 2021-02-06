import React, {useEffect} from 'react';
import axiosOrders from "../../axiosOrders";
import Content from "../../components/Content/Content";

const Home = () => {
	const [home, setHome] = React.useState({});

	useEffect(() => {
		const fetchData = async () => {
			const pagesResponse = await axiosOrders.get('home.json');
			setHome(pagesResponse.data);
		};

		fetchData().then(console.error)
	}, []);

	return (
		<Content title={home.title} content={home.content}/>
	);
};

export default Home;