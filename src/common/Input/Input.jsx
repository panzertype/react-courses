import React from 'react';

const Input = (props) => {
	return (
		<div style={{ minWidth: 0 }}>
			{props.inputName && (
				<label style={{ display: 'block' }} htmlFor={props.inputName}>
					{props.inputName}
				</label>
			)}
			{props.type === 'textarea' ? (
				<textarea
					id={props.inputName}
					value={props.value}
					onChange={props.onChange}
					className={
						props.className ? props.className + ' textarea p-2' : 'textarea p-2'
					}
					style={{ width: '100%' }}
					rows='5'
					placeholder={props.placeholder}
					aria-label={props.ariaLabel}
				/>
			) : (
				<input
					id={props.inputName}
					style={props.style ? { ...props.style } : {}}
					type={props.type}
					value={props.value}
					onChange={props.onChange}
					className={
						props.className
							? props.className +
							  ' course-search border border-warning border-2 p-2'
							: 'course-search border border-warning border-2 p-2'
					}
					placeholder={props.placeholder}
					aria-label={props.ariaLabel}
				/>
			)}
		</div>
	);
};

export default Input;
