export interface ICar {
	getNumberOfSeats: () => number
	getBrand: () => string
}


export class Car implements ICar {

    constructor(private numberOfSeats: number, private readonly brand: string) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

	getBrand() {
		return this.brand;
	}
}

export class Tesla extends Car {
    constructor(numberOfSeats: number ) {
		super(numberOfSeats, 'Tesla')
	}
}

export class Audi extends Car {
    constructor(numberOfSeats: number ) {
		super(numberOfSeats, 'Audi')
	}
}

export class Toyota extends Car {
    constructor(numberOfSeats: number ) {
		super(numberOfSeats, 'Toyota')
	}
}

export class Honda extends Car {
    constructor(numberOfSeats: number ) {
		super(numberOfSeats, 'Honda')
	}
}

export class Volvo extends Car {
    constructor(numberOfSeats: number ) {
		super(numberOfSeats, 'Volvo')
	}
}