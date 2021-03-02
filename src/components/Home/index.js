import React from 'react'
import Navbar from '../Navbar'

// STYLES
import './index.scss'

// ASSETS
import calendary from '../../assets/icons/calendary.png'
import students from '../../assets/icons/students.png'
import graph from '../../assets/icons/graph.png'
import video from '../../assets/icons/video.png'
import rule from '../../assets/icons/rule.png'
import jet from '../../assets/icons/jet.png'
import person from '../../assets/icons/person.png'
import embudo from '../../assets/icons/embudo.png'


const Home = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <div className='container__calendar'>
                    <div>
                        <h2>¡Hola Liliana, así van tus programas!</h2>
                        <h1>Vista general</h1>
                    </div>
                    <div className='container__calendar--calendar'>
                        <img src={calendary} alt="icons"/>
                        <h3> <strong>Curso de fotografía de alimentos</strong> <br/> Calificar actividad del módulo 2</h3>
                    </div>
                </div>
                <div className='container__information'>
                    <div>
                        <h1>08</h1>
                        <h2>Cursos <br/> activos</h2>
                    </div>
                    <div>
                        <h1>123</h1>
                        <h2>Nuevas <br/> Oportunidades</h2>
                    </div>
                    <div>
                        <h1>45</h1>
                        <h2>Estudiantes <br/> registrados</h2>
                    </div>
                    <div>
                        <h1>20</h1>
                        <h2>Certificados <br/> entregados</h2>
                    </div>
                    
                    <div className='container__information--information'>
                        <h3> Tus Estudiantes </h3>
                        <img src={students} alt="icons"/>
                    </div>
                </div>
                <div className="container__general ">
                    <div className='container__stats'>
                        <div>
                            <h1>Ganancias reportadas:</h1>
                        </div>
                        <div>
                            <select>
                                <option value="6 meses" selected>Últimos 6 meses</option>
                            </select>
                        </div>
                        <div className='container__stats--stats'>
                            <div>
                                <h1>$5863</h1>
                                <h2>Ganancias totales</h2>
                            </div>
                            <div>
                                <img src={graph} alt="image"/>
                            </div>
                        </div>        
                    </div>
                    
                    <div className="container__tools">
                        <div className="container__tools--tools">
                            <img src={video} alt=""/>
                            <h2>Tus cursos</h2>
                        </div>
                        <div className="container__tools--tools">
                            <img src={rule} alt=""/>
                            <h2>Personaliza tus sitios</h2>
                        </div>
                        <div className="container__tools--tools">
                            <img src={jet} alt=""/>
                            <h2>Crea una campaña</h2>
                        </div>
                        <div style={{ marginBottom: '0'}} className="container__tools--tools">
                            <img src={person} alt=""/>
                            <h2>Conoce tus clientes</h2>
                        </div>
                    </div>
                </div>
                <div className='container__embudo'>
                    <h2>Conoce como crear…</h2>
                    <div className="container__embudo--embudo">
                        <div>
                            <img src={embudo} alt=""/>
                        </div>
                        <div>
                            <h3>Embudos de conversión</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            </p>
                            <button>Inicia ahora</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;