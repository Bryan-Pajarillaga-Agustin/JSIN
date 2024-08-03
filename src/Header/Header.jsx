
import "./Header.css"
import Buttons from "./Buttons";
export default function Header({buttons, setActive, handleCheckCart, TotalItems}) {
	
	return (
		<>
			<header id={"Header"}>
				<div className="wrap-header">
					<h1 id="title"> Johny's S.I.N!</h1>
					<ul className="links">
						<Buttons 
						buttons={buttons} 
						checkCart={(par)=>handleCheckCart(par)} 
						setActive={setActive}
						TotalItems={TotalItems}
						/>
					</ul>
				</div>
			</header>	
		</>
	)
}



