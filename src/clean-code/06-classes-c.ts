(() => {
	// Aplicando el principio de responsabilidad unica
	// Priorizar la composicion frenta la herencia

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

	interface UserProps {
		email: string;
		role: string;
	}

	class User {
		public lastAccess: Date;
		public email: string;
		public role: string;

		constructor({
			email,
			role,
		} : UserProps) {
			this.email = email;
			this.role = role;
			this.lastAccess = new Date();
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	interface SettingsProps {
		workingDirectory: string,
		lastOpenFolder: string,
	}

	class Settings {
		public workingDirectory: string;
		public lastOpenFolder: string;

		constructor({
			workingDirectory,
			lastOpenFolder,
		} : SettingsProps) {
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	type UserSettingsProps = PersonProps & SettingsProps & UserProps

	class UserSettings {
		public person: Person
		public settings: Settings
		public user: User

		constructor({
			birthdate,
			email,
			gender,
			lastOpenFolder,
			name,
			role,
			workingDirectory,
		} : UserSettingsProps) {
			this.person = new Person({ name, birthdate, gender });
			this.settings = new Settings({ workingDirectory, lastOpenFolder });
			this.user = new User({ email, role });
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
		isCredentialsValid: newUserSettings.user.checkCredentials() 
	});

	console.log({ newPerson });
})()