// import logo from './logo.svg';
import './App.scss';
import Slider from "react-slick";
import prueba2  from './assets/prueba2.jpg'
import facebook from './assets/facebook.svg'
import google from './assets/google.svg'
import linkedin from './assets/linkedin.svg'

const App = () => {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };
	return (
		<div className="styles">
			{/* <Slider {...settings}>
				<div>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylc_IRJie4twKLlpjdPd8X92YrauJmY_yRA&usqp=CAU" alt=""/>
				</div>
				<div>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylc_IRJie4twKLlpjdPd8X92YrauJmY_yRA&usqp=CAU" alt=""/>
				</div>
				<div>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylc_IRJie4twKLlpjdPd8X92YrauJmY_yRA&usqp=CAU" alt=""/>
				</div>
				<div>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylc_IRJie4twKLlpjdPd8X92YrauJmY_yRA&usqp=CAU" alt=""/>
				</div>
				<div>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylc_IRJie4twKLlpjdPd8X92YrauJmY_yRA&usqp=CAU" alt=""/>
				</div>
				<div>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylc_IRJie4twKLlpjdPd8X92YrauJmY_yRA&usqp=CAU" alt=""/>
				</div>
			</Slider> */}
			<div className="styles__left">
				<img src={prueba2} alt=""/>
			</div>
			<div className="styles__right">
				<div className="styles__right__content">	
					<h1>Iniciar Sesión</h1>
					<h4>Selecciona como deseas ingresar a la plataforma</h4>
					<div className="styles__right__content--buttons">
						<img src={facebook} alt=""/>
						<img src={google} alt=""/>
						<img src={linkedin} alt=""/>
					</div>
					<input type="text" placeholder="Correo electronico"/>
					<input type="password" name="" id=""placeholder="Contraseña"/>
					<p>¿Olvidaste tu contraseña?</p>
					<button>Iniciar sesión</button>
					<span>¿Aún no tienes cuenta? <strong>Regístrate</strong></span>
				</div>
			</div>
		</div>
  );
}

export default App;
