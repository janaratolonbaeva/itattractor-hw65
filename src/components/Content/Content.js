import React from 'react';

const Content = ({title, content}) => {
	return (
		<div className="mt-3">
			<h1>{title}</h1>
			<div className="mt-5 card p-2">
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Content;