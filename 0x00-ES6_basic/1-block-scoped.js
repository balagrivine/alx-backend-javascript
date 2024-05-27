export default function taskBlock(trueOrfalse) {
	var task = false;
	var task2 = true;

	if (trueOrfalse) {
		const task = true;
		const task2 = false;
	}

	return [task, task2]
}
