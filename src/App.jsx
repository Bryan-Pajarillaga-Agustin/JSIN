import { useEffect, useRef, useState } from "react"
import Header from './Header/Header.jsx'
import MainContent from './Homepage/body.jsx'
import Products from './Products/Products.jsx'
import "./Products/Products.css"
import Cart from "./Cart/Cart.jsx"
import './App.css'
const database = firebase.database()

export default function App(){ 
	let localBase = JSON.parse(localStorage.getItem("LoginDevices"))
	let someData = [{nothing: "null"}]
	let totalCosts = 0
	const [buttons, setActive] = useState(0)
	const [getUsers, setGetUsers] = useState()
	const [cartState, setCartState] = useState(0)
	const Total = useRef(true)
	function handleCheckCart(par){
		setCartState(par)
	}
	function handleItems(item){
		if(JSON.parse(localStorage.getItem("LoginDevices")) != null){
			console.log(item.name)
			let RenderData
			const user_ref = database.ref("users")
			user_ref.on("value", function(snapshot){
				var data = snapshot.val()
				RenderData = data
				
				for(let i = 0; i < RenderData.length; i++){
					if(RenderData[i].isLoggedin == true && RenderData[i].Cart[RenderData[i].Cart.length - 1].nothing == someData[0].nothing){
						RenderData[i].Cart.unshift(item)
						itemNum()
						RenderData[i].Cart.pop()
						break;
					} else if(RenderData[i].isLoggedin == true && RenderData[i].Cart != []){
						RenderData[i].Cart.unshift(item)
						itemNum()
					}
				}

			})
		database.ref("users").set(RenderData)
		}
	}
	function handleGetUsers(par){
		const RenderedUsers = par
		setGetUsers(RenderedUsers)
	}
	let Items = 0
	function itemNum(){
		let users, cartU
		const ref = database.ref("users")
		ref.on("value", function(snapshot){
			var data = snapshot.val()
			users = data
			Items = 0
			for(let i = 0; i < users.length; i++){
				if(users[i].isLoggedin == true && users[i].Cemail == localBase){
					Items = users[i].Cart.length
					setTotalItems(Items)
					break
				} else {
					setTotalItems(0)
				}
			}
		})
	}
	useEffect(()=>{
		let users
		const ref = database.ref("users")
		ref.on("value", function(snapshot){
			var data = snapshot.val()
			users = data
			Items = 0
			for(let i = 0; i < users.length; i++){
				if(users[i].isLoggedin == true && users[i].Cemail == localBase){
					Items = users[i].Cart.length
					setTotalItems(Items)
					break
				} else {
					setTotalItems(0)
				}
			}
		})
	}, [])
	const [TotalItems, setTotalItems] = useState()
	return(
		<>
			<Header buttons={buttons} setActive={setActive}  handleCheckCart={(par)=>handleCheckCart(par)}  TotalItems={TotalItems} Items={Items}></Header>
			<MainContent buttons={buttons} getUsers={getUsers} onHandleUsers={(par)=>handleGetUsers(par)} setActive={setActive}></MainContent>
			<Products buttons={buttons} setActive={setActive} getUsers={getUsers} onhandleItems={(item)=>{handleItems(item)}} itemNum={()=>itemNum()}></Products>
			{getUsers != null ? <Cart getUsers={getUsers} Total={Total} totalCosts={totalCosts} cartState={cartState} handleCartState={(par)=>handleCheckCart(par)}  />
			: console.log()}
   	</>
	)
	
}

