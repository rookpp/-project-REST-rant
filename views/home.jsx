const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
      </main>
      <body>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
        <div>
          <img src="/images/kyle-johnson-TEZZzuQTt8g-unsplash.jpg"/>
        </div>
      </body>
    </Def>
  )
}

module.exports = home