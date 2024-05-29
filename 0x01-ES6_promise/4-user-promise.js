export default function signUpUser(firstName, lastName) {
	return new Promise((resolve, reject) => {
		const nameObject = {
			"firstName": firstName,
			"lastName": lastName
		};
		resolve(nameObject)
	});
}
