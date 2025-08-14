import { Tesla, Audi, Toyota, Honda, Car, ICar, Volvo } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: ICar[] ) => {
        for (const car of cars) {
			if (car instanceof Car) {
				console.log(`${car.getBrand()} ${car.getNumberOfSeats()}`)
                continue;
			}
        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(4),
    ];


    printCarSeats( cars );

})();