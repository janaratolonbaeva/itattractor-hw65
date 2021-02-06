import React from 'react';
import PAGES from "../../constans";
import axiosOrders from "../../axiosOrders";

const Admin = ({history}) => {
	const [option, setOption] = React.useState('');
	const [onePage, setOnePage] = React.useState({
		title: '',
		content: ''
	});

	const chooseSelect = async e => {
		const id = e.target.value;
		console.log(id);
		setOption(id);
		let url = '.json'

		if (id) {
			url = id + url;
		}

		try {
			const response = await axiosOrders.get(url);
			setOnePage(response.data);
		} catch (e) {
			console.log(e);
		}
	}

	const changeText = e => {
		const {name, value} = e.target;

		setOnePage(prev => ({
			...prev,
			[name]: value
		}))
	};

	const postData = async e => {
		e.preventDefault();

		try {
			await axiosOrders.put(option + '.json', {...onePage});

			if (option === 'home') {
				history.push('/');
			} else {
				history.push('/pages/' + option);
			}

		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="mt-3" style={{width: '30rem'}}>
			<h1>Edit Page</h1>
			<div className="mt-5">
				<form onSubmit={postData}>
					<div className="mb-3">
						<select className="form-select" aria-label="Default select example" onChange={chooseSelect}>
							<option defaultValue>Open this select menu</option>
							<option value="home">Home</option>
							{PAGES.map(page => (
								<option key={page.id} value={page.id}>{page.name}</option>
							))}
						</select>
					</div>
					<div className="mb-3">
						<label className="form-label">Title</label>
						<input type="text" className="form-control"
									 value={onePage.title} name="title"
									 onChange={changeText}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Content</label>
						<textarea className="form-control" rows="3"
											value={onePage.content} name="content"
											onChange={changeText}
						/>
					</div>
					<div className="mb-3">
						<button type="submit" className="btn btn-primary">Save</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Admin;