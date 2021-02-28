// TOOLS
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade} from "swiper/core";

// STYLES
import './index.scss';
import "swiper/swiper-bundle.css";

// ASSETS
import prueba2  from '../.././assets/prueba2.jpg'
import facebook from '../.././assets/facebook.svg'
import google from '../.././assets/google.svg'
import linkedin from '../.././assets/linkedin.svg'
import logo from '../.././assets/logo.svg'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const App = () => {
	
	return (
		<div className="styles">
			<img  className="styles__logo" src={logo} alt=""/>
			<div className="styles__left">
				<Swiper autoplay={{ delay: 3000 }} loop={true} pagination>
					<SwiperSlide>
						<img src={prueba2} alt=""/>
					</SwiperSlide>
					
					<SwiperSlide>
						<img src={prueba2} alt=""/>
					</SwiperSlide>
					
					<SwiperSlide>
						<img src={prueba2} alt=""/>
					</SwiperSlide>
					
					<SwiperSlide>
						<img src={prueba2} alt=""/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="styles__right">
				<div className="styles__right__content">	
					<h1>Iniciar Sesión</h1>
					<h4>Selecciona como deseas ingresar a la plataforma</h4>
					<div className="styles__right__content--buttons">
						<img src={facebook} style={{backgroundColor: "#3A559F"}} alt=""/>
						<img className="styles__right__content--border" src={google} alt=""/>
						<img src={linkedin} style={{backgroundColor: '#0077B7'}} alt=""/>
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
