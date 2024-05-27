export default function taskBlock(trueOrfalse) {
	var task = false;
	var task2 = true;

	if (trueOrfalse) {
		let task = true;
		let task2 = false;
	}

	return [task, task2]
}
