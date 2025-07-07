type Size = 'S' | 'M' | 'L' | 'XL' | ''

class Product {
	constructor (
		public name: string = '',
		public price: number = 0,
		public size: Size = '',
	){}

	isProductValid(): boolean {
		for (const key in this) {
			switch (typeof this[key]) {
				case 'string':
					if (this[key].length <= 0) throw new Error(`${key} is empty`)
				break;

				case 'number':
					if (this[key] <= 0) throw new Error(`${key} is zero`)
				break;

				default:
					throw new Error(`${key} is not supported`)
			}
		}

		return true;
	}

	toString() {
		if (!this.isProductValid()) {
			throw new Error('Invalid product');
		}

		return `${ this.name } (${this.price}), ${this.size}`
	}
}

(() => {
	const bluePants = new Product('Blue Large Pants', 25, 'XL')
	console.log(bluePants.toString());
})();