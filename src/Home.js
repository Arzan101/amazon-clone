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
            title="Kids Soccer Shoes Cleats Athletic Outdoor Light Weight Football"
            price={11456}
            image="https://m.media-amazon.com/images/I/61vElzZzAQL._AC_UL320_.jpg"
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
           id="04"
           title="Apple AirPods Pro"
           price={20000}
           image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg" />
         
           </div>

           <div className="home__row">
           <Product
            id="06"
            title="
            Sponsored 
            Da leather villa
            LV Genuine Leather |Cross Body Laptop Bag| for Men & Women"
            price={8000}
            image="https://m.media-amazon.com/images/I/A1POd2fFQ7S._AC_UL320_.jpg"/>
           
           <Product
           id="06"
           title="Men's Cotton Hooded Neck Sweatshirt"
           price={8000}
           image="https://m.media-amazon.com/images/I/51YEfk8Pt-L._AC_UL320_.jpg"
           />
           <Product
           id="07"
           title="OnePlus 9 5G (Arctic Sky,12GB RAM, 256GB Storage)"
           price={54999}
           image="https://m.media-amazon.com/images/I/61fy+u9uqPL._AC_UY218_.jpg"
           />
           
           </div>

           <div className="home__row">
           <Product
           id="08"
           title="Traditions Bazaar
           Women's Velvet Gota Patti Dupatta"
           price={6000}
           image="https://m.media-amazon.com/images/I/81zIxYntCgL._AC_UL320_.jpg"
           />
           <Product
           id="09"
           title="Bajaj New Shakti Neo 15L Metal Body 4 Star Water Heater with Multiple Safety System"
           price={4500}
           image="https://images-eu.ssl-images-amazon.com/images/I/31U-ACCgQ1L._AC_SX184_.jpg"
           />
           <Product
           id="10"
           title="KENT 16025 Sandwich Grill 700W | Non-Toxic Ceramic Coating |"
           price={1599}
           image="https://m.media-amazon.com/images/I/71C3psw4rzS._AC_UL320_.jpg"
           />
           </div>



        </div>
    </div>
    
    )
}

export default Home
