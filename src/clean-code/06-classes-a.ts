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

	class User extends Person {
		public lastAccess: Date;

		constructor(
			public email: string,
			public role: string,
			name: string,
			gender: Gender,
			birthdate: Date
		){
			super(name, gender, birthdate);
			this.lastAccess = new Date();
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	class UserSettings extends User {
		constructor(
			public workingDirectory: string,
			public lastOpenFolder: string,
			email: string,
			role: string,
			name: string,
			gender: Gender,
			birthdate: Date,
		) {
			super(email, role, name, gender, birthdate);
		}
	}

	const newPerson = new Person('Alejandro Ivan Lizarraga Rojas', 'M', new Date('2002-10-08'));

	const newUserSettings = new UserSettings(
		'/usr/home',
		'/home',
		'alejandroivanliza@gmail.com',
		'Admin',
		'Alejandro Ivan Lizarraga Rojas',
		'M',
		new Date('2002-10-08')
	)

	console.log({ 
		newUserSettings, 
		isCredentialsValid: newUserSettings.checkCredentials() 
	});

	console.log({ newPerson });
})()