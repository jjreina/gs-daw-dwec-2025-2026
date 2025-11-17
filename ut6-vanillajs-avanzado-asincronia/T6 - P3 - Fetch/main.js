import { fetchCarData } from './utils.js';

let cars
const run = async () => {
	cars = await fetchCarData();
	console.log(cars);
}

run();