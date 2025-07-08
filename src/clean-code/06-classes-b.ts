(() => {
	type Gender = 'M' | 'F' | 'O';

	interface PersonProps {
		name: string
		gender: Gender
		birthdate: Date
	}

	class Person {
		public name: string;
		public gender: Gender;
		public birthdate: Date;

		constructor({ name, gender, birthdate }: PersonProps) {
			this.name = name;
			this.gender = gender;
			this.birthdate = birthdate;
		}
	}

	interface UserProps extends PersonProps {
		email: string;
		role: string;
	}

	class User extends Person {
		public lastAccess: Date;
		public email: string;
		public role: string;

		constructor({
			email,
			role,
			name,
			gender,
			birthdate
		} : UserProps) {
			super({ name, gender, birthdate });
			this.email = email;
			this.role = role;
			this.lastAccess = new Date();
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	interface UserSettingsProps extends UserProps {
		workingDirectory: string,
		lastOpenFolder: string,
	}

	class UserSettings extends User {
		public workingDirectory: string;
		public lastOpenFolder: string;

		constructor({
			workingDirectory,
			lastOpenFolder,
			email,
			role,
			name,
			gender,
			birthdate,
		} : UserSettingsProps) {
			super({email, role, name, gender, birthdate});
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const newPerson = new Person({
		birthdate: new Date('2002-10-08'),
		gender: 'M', 
		name: 'Alejandro Ivan Lizarraga Rojas', 
	});

	const newUserSettings = new UserSettings({
		birthdate: new Date('2002-10-08'),
		email: 'alejandroivanliza@gmail.com',
		gender: 'M',
		lastOpenFolder: '/home',
		name: 'Alejandro Ivan Lizarraga Rojas',
		role: 'Admin',
		workingDirectory: '/usr/home',
	})

	console.log({ 
		newUserSettings, 
		isCredentialsValid: newUserSettings.checkCredentials() 
	});

	console.log({ newPerson });
})()