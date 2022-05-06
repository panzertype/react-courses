const getTime = (minutes) => {
	if (minutes % 60 === 0) {
		return minutes / 60 + ':00';
	}

	if (minutes < 60) {
		if (minutes < 10) {
			return '00:0' + minutes;
		}
		return '00:' + minutes;
	}

	let hours = Math.floor(minutes / 60);
	let leftMinutes = minutes % 60;

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (leftMinutes < 10) {
		leftMinutes = '0' + leftMinutes;
	}
	return hours + ':' + leftMinutes;
};

export default getTime;
