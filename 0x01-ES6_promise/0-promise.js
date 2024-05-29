export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = true;

			if (success) {
				resolve("API response received successfully");
			}
			else {
				reject("Failed to receive API response");
			}
		});
	});
}
