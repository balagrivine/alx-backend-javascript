export default function handleResponseFromAPI(promise) {
	return promise
		.then(response => {console.log('Got a response from the API');
		return {
			"satus": 200,
			"body": "succes"
		};
		})
		.catch(() => {console.log('Got a response from the API');
			return new Error();
		});
}
