import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
    <div className="Home">
       <div className= "home__container">
           <img className="home__img" src="https://m.media-amazon.com/images/I/71ZBHazSvIL._SX3000_.jpg" alt="home img">
           </img>

           <div className="home__row">
           <Product 
            id="01"
            title="See U in C by Ali Karim Sayed (Author)"
            price={4424}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
           />
           <Product 
           id="02"
           title="2020 Apple MacBook Pro (13.3-inch/33.78 cm) "
           price={10999000}
           image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg"
           />
           <Product
           id="03"
           title="Apple iPhone 13 (512GB) - Midnight"
           price={109900}
           image="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg"
           />
           <Product 
           id="01"
           title="See U in C by Ali Karim Sayed (Author)"
           price={4424}
           image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
           />
           </div>

           <div className="home__row">
           <Product/>
           <Product/>
           <Product/>
           </div>

           <div className="home__row">
           <Product/>
           <Product/>
           <Product/>
           </div>



        </div>
    </div>
    
    )
}

export default Home
