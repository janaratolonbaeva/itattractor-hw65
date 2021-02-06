import axios from "axios";

const axiosOrders = axios.create({
	baseURL: 'https://pages-ed19f-default-rtdb.firebaseio.com/'
});

export default axiosOrders;