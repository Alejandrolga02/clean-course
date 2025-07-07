type Size = 'S' | 'M' | 'L' | 'XL' | ''

class Product {
	constructor (
		public name: string,
		public price: number,
		public size: Size = '',
	){}

	toString() {
		// No DRY
		if (this.name.length <= 0) throw new Error('name is empty')
		if (this.price <= 0) throw new Error('price is invalid')
		if (this.size.length <= 0) throw new Error('size is empty')

		return `${ this.name } (${this.price}), ${this.size}`
	}
}

(() => {
	const bluePants = new Product('Blue Large Pants', 25, 'XL')
	console.log(bluePants.toString());
})();