import React from "react";
import Product from "./components/Product";
import './App.css'

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      price: 120,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363"
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track your fitness and notifications.",
      price: 80,
      image: "https://tse1.mm.bing.net/th?id=OIP.Rm1EhVRgl-orrh87sYJK3AHaHa&pid=Api&P=0&h=180"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      description: "Ergonomic design with RGB lighting.",
      price: 50,
      image: "https://tse3.mm.bing.net/th?id=OIP.IRrrR2PPbvZTYF8BgGY8pwHaHa&pid=Api&P=0&h=180"
    }
  ];

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold text-center mb-6">Product Listings</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((props) => (
          <Product 
            key={props.id} 
            name={props.name} 
            description={props.description} 
            price={props.price} 
            image={props.image} 
            
            />
        ))}
      </div>
    </div>

  

    </>
  )
}

export default App
