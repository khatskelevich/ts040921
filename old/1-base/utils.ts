/* eslint-enable */
Object.defineProperty(window, 'MySweetApp', { value: 'v1.0.0', writable: true });

function deliveryMethod() {
	// TODO
	return 'overnight';
}

function shipWeight() {
	return parseInt(document.getElementById('weight')!.innerHTML);
}

function sendUpdates(emailAddr:string) {
	/**
	 * @param {string} addr
	 */
	function sendEmail(addr:string) {
		console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

		if (shipWeight() > 100) {
			console.log('WARNING: Oversize package');
		}
	}
	if (Array.isArray(emailAddr)) {
		emailAddr.forEach((val) => {
			sendEmail(val.trim());
		});
	} else {
		sendEmail(emailAddr.trim());
	}
}

sendUpdates('me@pb.com')