import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
    <div className="Home">
       <div className= "home__container">
           <img className="home__img" src="https://media.gettyimages.com/id/1267173089/vector/illustration-of-a-donation-box-with-food-in-it.jpg?s=2048x2048&w=gi&k=20&c=8ckUDdnqtKXe-4g6ZKdUucwleZ3JhHXFacs7juORQJM=" alt="home img">
           </img>

           

           <div className="home__row">
           <Product 
            id="01"
            title="Vegetables Package"
            price={1456}
            image="https://media.gettyimages.com/id/1362787762/photo/details-of-volunteer-with-box-of-food-for-poor.jpg?s=612x612&w=0&k=20&c=q-eLXPRlCfDV2m8mRJt1GIoExrSQJFW1h8FiE6LoMc0="
           />
           <Product 
           id="02"
           title="Raw Food Package "
           price={1099}
           image="https://media.gettyimages.com/id/1223808546/photo/in-the-persons-hand-is-a-paper-bag-with-food-donation-and-home-delivery.jpg?s=612x612&w=0&k=20&c=2PyCX6pTnCrYD_TtVjmzhdL1aRzSMTI5ROxM-doD-ck="
           />
           <Product
           id="03"
           title="Dairy Products"
           price={1099}
           image="https://media.gettyimages.com/id/455450371/vector/icon-set-dairy-product-color.webp?s=2048x2048&w=gi&k=20&c=miTYIbZnuMjAc-doKyIrsJtd1pC-0cb9yTaUfFR3p5U="
           />
           <Product 
           id="04"
           title="Whole Grains"
           price={2000}
           image="https://media.gettyimages.com/id/664647131/photo/cropped-image-of-hands-preparing-food-on-table.jpg?s=612x612&w=0&k=20&c=StLRI7wBF_BCvNn1Y_7ZjR0aCYwPjFVIpcG43rcwCqA=" />
         
           </div>

           <div className="home__row">
           <Product
            id="06"
            title="
            Whole Grain protien Food.
           "
            price={800}
            image="https://media.gettyimages.com/id/628102266/photo/fruit-board-1.jpg?s=612x612&w=0&k=20&c=LVVaErnfFcQY2jW-hWob-5DRBeEvUzK-PY3IZ7wgM7E="/>
           
           <Product
           id="06"
           title="Spice's"
           price={1000}
           image="https://media.gettyimages.com/id/909032750/photo/ground-spices-background.jpg?s=612x612&w=0&k=20&c=S50OO-fYWQhwoEMkVdqsBV0zte2ufvZvaX5oyYGLWZg="
           />
           <Product
           id="07"
           title="Fruit's"
           price={999}
           image="https://media.gettyimages.com/id/1328110357/photo/fresh-summer-berry-fruit-colorful-background.jpg?s=612x612&w=0&k=20&c=3IpgewzuK3AKxDgIN726QygW6M5qoBYkeHsAd5A3ukk="
           />
           
           </div>

          

        </div>
    </div>
    
    )
}

export default Home
