interface Bird {
	fly(): void;
	eat(): void;
	run(): void;
	swim(): void;
}

class Tucan implements Bird {
	public fly() {}
	public eat() {}
	public run() {}
	public swim() {
		throw new Error('This bird does not swim')
	}
}

class Humminbird implements Bird {
	public fly() {}
	public eat() {}
	public run() {}
	public swim() {
		throw new Error('This bird does not swim')
	}
}

class Ostrich implements Bird {
	public eat() {}
	public run() {}
	public fly() {
		throw new Error('This bird does not fly')
	}
	public swim() {
		throw new Error('This bird does not swim')
	}
}

class Penguin implements Bird {
	public eat() {}
	public run() {}
	public fly() {
		throw new Error('This bird does not fly')
	}
	public swim() {
		throw new Error('This bird does not swim')
	}
}