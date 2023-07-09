const React = require('react')
function index(data){
    let placesFormatted = data.places.map((place)=>{
        return(
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return(
            <main>
                <h1>Index Page</h1>
                {placesFormatted}
            </main>
    )
}


module.exports = index