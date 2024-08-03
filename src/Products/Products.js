import Products from "./Products.jsx"
export default function renderLocal(){

	if(localStorage.length == 1){
		setFruitProducts(JSON.parse(localStorage.getItem("fruits")))
	} else {
		setFruitProducts(newFruits)
	   localStorage.setItem("fruit" ,JSON.stringify(newFruits))
		setFruitProducts(JSON.parse(localStorage.getItem("fruits")))
		console.log(newFruits)
	}
}