import { sortByItemCount, sortByDate, sortOrders, sortByItemNames } from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('order1.length > order2.length', () => {
		const order1 = {
			items: ['1', '2', '3'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('order2.length > order1.length', () => {
		const order1 = {
			items: ['1'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	it('non objects input', () => {
		const order1 = 'order1';
		const order2 = 'order2';

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('no field items in object', () => {
		const order1 = {
			kek1: 'kek1',
		};

		const order2 = {
			kek2: 'kek2',
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortByDate function', () => {
	it('non objects input', () => {
		const date1 = 'order1';
		const date2 = 'order2';

		const result = sortByDate(date1, date2);

		expect(result).toBe(0);
	});

	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('no field date in object', () => {
		const date1 = {
			kek1: 'kek1',
		};

		const date2 = {
			kek2: 'kek2',
		};

		const result = sortByDate(date1, date2);

		expect(result).toBe(0);
	});

	it('date1 > date2', () => {
		const date1 = {
			date: 15,
		};

		const date2 = {
			date: 1,
		};

		const result = sortByDate(date1, date2);

		expect(result).toBe(-1);
	});

	it('date2 > date1', () => {
		const date1 = {
			date: 1,
		};

		const date2 = {
			date: 15,
		};

		const result = sortByDate(date1, date2);

		expect(result).toBe(1);
	});

	it('date2 = date1', () => {
		const date1 = {
			date: 15,
		};

		const date2 = {
			date: 15,
		};

		const result = sortByDate(date1, date2);

		expect(result).toBe(0);
	});
});

describe('sortOrders function', () => {
	it('null order input', () => {
		const order = null;

		const sortType = null;

		const result = sortOrders(order, sortType);

		expect(result).toBeUndefined()
	});
});

describe('sortByItemNames function', () => {
	it('null order input', () => {
		const order1 = null;
		const order2 = null;

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('non object input', () => {
		const order1 = 'kek';
		const order2 = 'lul';

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('no field items in input', () => {
		const order1 = {
			kek: 'kek'
		};
		const order2 = {
			lul: 'lul'
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 > order2', () => {
		const order1 = {
			items: [10],
		};
		const order2 = {
			items: [1],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

	it('order2 > order1', () => {
		const order1 = {
			items: [1],
		};
		const order2 = {
			items: [10],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});
});