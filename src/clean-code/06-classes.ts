(() => {
	type Gender = 'M' | 'F' | 'O';

	class Person {
		public name: string;
		public gender: Gender;
		public birthdate: Date;

		constructor(name: string, gender: Gender, birthdate: Date) {
			this.name = name;
			this.gender = gender;
			this.birthdate = birthdate;
		}
	}

	const newPerson = new Person('Alejandro Ivan Lizarraga Rojas', 'M', new Date('2002-10-08'));
	console.log({ newPerson });
})()