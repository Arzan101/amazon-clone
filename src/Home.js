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
            title="Noise ColorFit Pro 2 Full Touch Control Smart Watch "
            price={1999.00}
            image="https://images-eu.ssl-images-amazon.com/images/I/41UD9vNsIjS._AC_SX184_.jpg"
           />
           <Product 
           id="02"
           title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
           price={29999 }
           image="https://m.media-amazon.com/images/I/71KVeQql77S._AC_UY218_.jpg"
           />
           <Product
           id="03"
           title="Apple iPhone 13 (512GB) - Midnight"
           price={109900}
           image="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg"
           />
           <Product 
           id="04"
           title="Up to 65% off | TVs & appliances"
           price={125000}
           image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Jupiter21/LATV/R01_CC_379X304._SY304_CB639977399_.jpg"
           />
           </div>

           <div className="home__row">
           <Product
           id="05"
           title="HP Chromebook x360 14-inch (35.56 cms) Thin & Light Touchscreen Laptop"
           price={ 29990}
           image="https://m.media-amazon.com/images/I/81hoonPUdxL._AC_UY218_.jpg" 
           
           />
           <Product
           id="06"
           title="2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8‑core "
           price={102000}
           image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg" 
           
           />
           <Product
           id="07"
           title="HP 15 (2021) Thin & Light 11th Gen Core i3 Laptop, 8 GB RAM, 1TB HDD, M.2 Slot"
           price={40000}
           image="https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_UY218_.jpg"
           />
           </div>

           <div className="home__row">
           <Product
           id="08"
           title="Up to 30% off | Kitchen tools and cookware"
           price={2000}
           image="https://m.media-amazon.com/images/I/71LIhRwiZBL._AC_UY218_.jpg" 
           txt="Measuring Cups & 5 Measuring Spoons (Multicolors)"
           />
           <Product
           id="09"
           title="Up to 80% off | Headphones and Speakers"
           price={329.00}
           image="https://m.media-amazon.com/images/I/719elVA3FvL._AC_SY175_.jpg"
           
           />
           <Product
           id="0"
           title=""
           price={111}
           image=""
           />
           </div>



        </div>
    </div>
    
    )
}

export default Home
