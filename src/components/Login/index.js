// TOOLS
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade} from "swiper/core";

// STYLES
import './index.scss';
import "swiper/swiper-bundle.css";

// ASSETS
import slide1  from '../.././assets/slide1.jpg'
import slide2  from '../.././assets/slide2.jpg'
import slide3  from '../.././assets/slide3.jpg'
import slide4  from '../.././assets/slide4.jpg'
import facebook from '../.././assets/facebook.svg'
import google from '../.././assets/google.svg'
import linkedin from '../.././assets/linkedin.svg'
import logo from '../.././assets/logo.svg'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const useStyles = makeStyles((theme) => ({
	root: {
	  "& > *": {
		width: "100%"
	  }
	}
  }));
const App = () => {
	const classes = useStyles();

	return (
		<div className="styles">
			<div className="styles__logo">
				<img src={logo} alt=""/>
			</div>
			<div className="styles__left">
				<Swiper autoplay={{ delay: 3000 }} loop={true} pagination>
					<SwiperSlide>
						<h1>Citizen developers dolor, sit amet consectetur adipisicing elit </h1>
						<img src={slide1} alt=""/>
					</SwiperSlide>
					
					<SwiperSlide>
						<h1>Startups developers dolor, sit amet consectetur adipisicing elit </h1>
						<img src={slide2} alt=""/>
					</SwiperSlide>
					
					<SwiperSlide>
						<h1>Startups developers dolor, sit amet consectetur adipisicing elit </h1>
						<img src={slide3} alt=""/>
					</SwiperSlide>
					
					<SwiperSlide>
						<h1>Startups developers dolor, sit amet consectetur adipisicing elit </h1>
						<img src={slide4} alt=""/>
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
					<form className={classes.root} noValidate autoComplete="off">
      					<TextField style={{marginBottom: '2rem'}}  label="Correo electronico" variant="outlined" />
						<TextField style={{marginBottom: '.5rem'}} type='password' label="Contraseña" variant="outlined" />
    				</form>
					<p>¿Olvidaste tu contraseña?</p>
					<Link style={{margin: '0 auto', height: '50px'}} to='/home'>
						<button>Iniciar sesión</button>
					</Link>
					<span>¿Aún no tienes cuenta? <strong>Regístrate</strong></span>
				</div>
			</div>
		</div>
  	);
}

export default App;
