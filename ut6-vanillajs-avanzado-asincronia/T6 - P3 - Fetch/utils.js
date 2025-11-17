const url = 'https://car-data.p.rapidapi.com/cars?limit=5&page=0';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6185a78aa2mshb04ae8991085691p1d093bjsnae8623070f4a',
		'x-rapidapi-host': 'car-data.p.rapidapi.com'
	}
};

export const fetchCarData = async () => {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
};

