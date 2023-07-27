const React = require('react')
function index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2><a href={`/places/${index}`}>{place.name}</a></h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <main>
            <h1>Index Page</h1>
            <div className="row">
                {placesFormatted}
            </div>
        </main>
    )
}

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
}]

module.exports = index