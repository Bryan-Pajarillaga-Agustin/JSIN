import { useEffect, useRef, useState } from "react"
import FruitOverView from "./ProductOverview"
import './ProductOverview.css'
export default function Products({buttons, setActive, onhandleItems, itemNum}){	
	const [FruitProducts, setFruitProducts] = useState([])
	const [EachFruit, setEachFruit] = useState(0)
	useEffect(() => {
		 const savedFruits = JSON.parse(localStorage.getItem("Fruits"))
		 if(savedFruits){
			  setFruitProducts(savedFruits)
		 } else {
			  const initialFruits = [
					{
						 name: "Apple",
						 rating: -1,
						 isShown: "true",
						 price: 20,
						 sold_items: 0,
						 image: "Images/apple.jpg",
						 description: "A popular fruit with a crisp texture and sweet or tart flavor, available in various colors like red, green, and yellow."
					},
					{
						name: "Pineapple",
						rating: -1,
						isShown: "true",
						price: 36,
						sold_items: 0,
						image: "Images/Pineapple.jpg",
						description: " A tropical fruit with a spiky outer skin and sweet, juicy yellow flesh, known for its tangy-sweet taste."
						
					},
					{
						name: "Grapes",
						rating: -1,
						isShown: "true",
						price: 24,
						image: "Images/Grapes.jpg",
						description: "Small, juicy fruits that grow in clusters, coming in different colors like red, green, and purple, often used to make wine or eaten fresh."
					},
					{
						name: "Cherry",
						rating: -1,
						isShown: "true",
						price: 16,
						sold_items: 0,
						image: "Images/Cherry.jpg",
						description: "Small, round fruits with a juicy flesh and a single hard seed inside, known for their sweet and tart flavors."
					},
					{
						name: "Strawberry",
						rating: -1,
						isShown: "true",
						price: 18,
						sold_items: 0,
						image: "Images/Strawberry.jpg",
						description: "Bright red, heart-shaped fruits with a sweet and slightly tart taste, commonly used in desserts, jams, and smoothies."
					},
					{
						name: "Banana",
						rating: -1,
						isShown: "true",
						price: 14,
						sold_items: 0,
						image: "Images/Banana.jpg",
						description: "Long, curved fruits with a yellow skin and creamy flesh, rich in potassium and a popular snack worldwide."
					},
					{
						name: "Dragon Fruit",
						rating: -1,
						isShown: "true",
						price: 40,
						sold_items: 0,
						image: "Images/Dragon_fruit.jpg",
						description: "A vibrant fruit with a pink or yellow skin and white or red flesh speckled with black seeds, known for its mild, sweet flavor."
					},
					{
						name: "Mango",
						rating: -1,
						isShown: "true",
						price: 36,
						sold_items: 0,
						image: "Images/Mango.jpg",
						description: "A tropical fruit with a smooth, golden skin and juicy, sweet flesh, often called the king of fruits for its rich flavor and aroma."
					}
			  ]
			  setFruitProducts(initialFruits)
			  localStorage.setItem("Fruits", JSON.stringify(initialFruits))
		 }
	}, [])

	function handleAddToCart(name, price, image){
		const items = {
			name: name,
			price: price,
			image: image
		}
		onhandleItems(items)
	}

	const handleRating = (index, newRating) => {
		 const updatedProducts = [...FruitProducts];
		 updatedProducts[index].rating = newRating;
		 setFruitProducts(updatedProducts);
		 localStorage.setItem("Fruits", JSON.stringify(updatedProducts))
	}

	const handleShow = (index) => {
		 const updatedProducts = [...FruitProducts];
		 updatedProducts[index].isShown = updatedProducts[index].isShown === "true" ? "false" : "true";
		 setFruitProducts(updatedProducts)
		 localStorage.setItem("Fruits", JSON.stringify(updatedProducts))
	}

	const Fruit = (par) => {
		setEachFruit(par)
	}

	return(
		 <>
			  <div className={buttons === 1 ? "Container-body" : "none"}>
					<div className="Left-bar">
						 <ul className="Lists">
							  <h1>Fruits Lists</h1>
							  {FruitProducts.map((item, index) => (
									<li key={index} className="li_buttons">
										 <button onClick={() => Fruit(index)}>{item.name}</button>
									</li>
							  ))}
						 </ul>
					</div>
					
					<div className="Right-Contents">
						 {FruitProducts.map((item, index) => (
							  <FruitOverView 
									key={item.name}
									index={index}
									EachFruit={EachFruit}
									description={item.description}
									rate={item.rating}
									name={item.name}
									price={item.price}
									image={item.image}
									sold_items={item.sold_items}
									isShown={item.isShown}
									onRatingChange={(newRating) => handleRating(index, newRating)}
									onHandleAddToCart={(name, price, image)=>handleAddToCart(name, price, image)}
									handleShow={() => handleShow(index)}
									setActive={setActive}
									itemNum={()=>itemNum()}
							  />
						 ))}
					</div>
			  </div>
		 </>
	)
}





