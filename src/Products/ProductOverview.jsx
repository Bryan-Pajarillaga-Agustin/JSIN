const database = firebase.database()
export default function FruitOverView({EachFruit, index, name, rate, onRatingChange, price, image, description, sold_items, isShown, handleShow, onHandleAddToCart, setActive, itemNum}){
	function checkIsLoggedIn(){
		if(localStorage.getItem("LoginDevices") == null){
			alert("Log In First!")
			setActive(0)
		}
	}
	return(
		<div className={EachFruit == index ? "EachContent" : "notPicked"}>
			<div className="WrapUpperActions">
				<img src={image} width={10} height={10}/>
				<div className="Wrap">
					<h1>{name}</h1>
					<h2>{price} PHP/1-set</h2>

					<p>Items Sold: {sold_items}</p>
					<div className="Actions">
					<img src="./Images/cart.png" width={30} height={30} alt="" /><h4>Add To Cart</h4><button className="stars" onClick={()=>{onHandleAddToCart(name, price, image), checkIsLoggedIn(), itemNum()}}>+</button>
					</div>
					<div className="rate">
						<button className="stars" onClick={()=>onRatingChange(0)}> <img src={rate >= 0 ? "Images/gold_star.png" : "Images/gray_star.png"} /></button>
						<button className="stars" onClick={()=>onRatingChange(1)}> <img src={rate >= 1 ? "Images/gold_star.png" : "Images/gray_star.png"} /></button>
						<button className="stars" onClick={()=>onRatingChange(2)}> <img src={rate >= 2 ? "Images/gold_star.png" : "Images/gray_star.png"} /></button>
						<button className="stars" onClick={()=>onRatingChange(3)}> <img src={rate >= 3 ? "Images/gold_star.png" : "Images/gray_star.png"} /></button>
						<button className="stars" onClick={()=>onRatingChange(4)}> <img src={rate >= 4 ? "Images/gold_star.png" : "Images/gray_star.png"} /></button>
					</div>
				</div>
			</div>
			
			<div className={isShown == "true" ? "product-review" : "hide"}>
				<div className="show">
					<h1>Small Description</h1>
					<input type="submit" onClick={()=>{handleShow()}} value={isShown == "true" ? "show" : "hide"}/>
				</div>
				<h3>{description}</h3>
			</div>
		</div>
	)
}