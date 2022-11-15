import React  from 'react'
import './NavBar.scss'
import Brand from '../../Assets/Brand.png'
import SecondBrand from '../../Assets/SecondBrand.png'

function NavBar() {

	const handleLogOut = () => {
		console.log('boton oprimidio')
		window.location.href= "/"
	}

   
  return (
     <nav className="navbar">
		<div className="navbar-container">
			<div className="navbar-containerResponsive">
				<div className="navbar-containerFluid">
					
					<div >
						<a href="/Main" className="navbar-brand-link">
							<img src={Brand} alt="Logo" className=" navbar-brand " />
							
						</a>
					</div>

                    

					<div className="hidden navbar-right">
						<a
							href="/Main"
							className=" navbar-firstItem"
							>Inicio</a
						>
						
					


    
					</div>
				</div>

                <div className='navbar-left'>

                        <button onClick={() => handleLogOut ()} className='navbar-LogOut'>SALIR</button>
                        <button className='text-white'><img  className="navbar-secondBrand"src={SecondBrand} alt=""/></button>

                </div>
			</div>
		</div>
	</nav>
  )
}

export default NavBar