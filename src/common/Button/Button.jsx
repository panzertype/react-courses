import React from 'react';

const Button = (props) => {
	return (
		<button
			style={props.style ? { ...props.style } : {}}
			onClick={props.onClick}
			className={
				props.className ? props.className + ' border-button' : 'border-button'
			}
		>
			{props.title}
		</button>
	);
};

export default Button;
