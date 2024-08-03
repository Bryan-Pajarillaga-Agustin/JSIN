import { useEffect, useState, useRef } from "react"

const database = firebase.database()
export default function Buttons({buttons, setActive, checkCart, TotalItems}){
	const SwitchTab = (par) => {
		setActive(par)
	}

	return(
		<>
			<li><span id="TotalItems">{TotalItems}</span><button onClick={()=>checkCart(1)}><img src="./Images/cart.png" width={30} height={30} alt="" /></button></li>
			<li><button className={buttons == 0 ? 'activeButt' : 'notActive'} onClick={()=>SwitchTab(0)}>Homepage <span></span></button></li>
			<li><button className={buttons == 1 ? 'activeButt' : 'notActive'} onClick={()=>SwitchTab(1)}>Products <span></span></button></li>
			<li><button className={buttons == 2 ? 'activeButt' : 'notActive'} onClick={()=>SwitchTab(2)}>Developer <span></span></button></li>
		</>
	)
}