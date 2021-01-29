const API_URL = "https://api.punkapi.com/v2/beers/111";


const error = (err) => {
    console.log(err);
}

const render = (data) => {
    let beer = data[0];
    console.log(data[0]);
    beer = {
        id: beer.id,
        name: beer.name,
        tagline: beer.tagline,
        description: beer.description,
        abv: beer.abv,
        ibu: beer.ibu,
        ebc: beer.ebc,
    }
    let {id, name, description, tagline, abv, ebc, ibu} = data[0];
    console.log(name, id, description, tagline, abv);
    console.log(beer);

}

const getBeers = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.message} (${response.status})`);
        render(data);

    } catch (err) {
        console.log(err);
    }
}
getBeers();