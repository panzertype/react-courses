const getCurrentDate = () => {
	var today = new Date();
	var d = today.getDate();
	var m = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	return d + '/' + m + '/' + yyyy;
};

export default getCurrentDate;
