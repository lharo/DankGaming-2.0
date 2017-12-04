import React from 'react'
import './style.css'
import FontAwesome from 'react-fontawesome';

const Footer = props => (
    <footer>
    <div className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4  col-md-4 col-sm-6 col-xs-6">
                    <h3> Mapa del Sitio </h3>
                    <ul>
                        <li> <a href="#"> Comprar </a> </li>
                        <li> <a href="#"> Contacto </a> </li>
                        <li> <a href="#"> Indice </a> </li>
                    </ul>
                </div>
                <div className="col-lg-4  col-md-4 col-sm-6 col-xs-6">
                    <h3> Conoce Más </h3>
                    <ul>
                        <li> <a href="#"> Nuestra Misión </a> </li>
                        <li> <a href="#"> Masselia y Tú </a> </li>
                        <li> <a href="#"> Nuestra Historia en México </a> </li>
                    </ul>
                </div>
                <div className="col-lg-3  col-md-3 col-sm-6 col-xs-12 ">
                    <h3> Redes Sociales </h3>
                    
                    <ul className="social">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                        <li> <a href="#"> <i className=" fa fa-facebook">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-twitter">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-google-plus">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-pinterest">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-youtube">   </i> </a> </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>    
    <div className="footer-bottom">
        <div className="container">
            <p className="pull-right"> Copyright © Masselia 2017 C.A de C.V. Todos los derechos reservados. </p>
        </div>
    </div>
</footer>

)

export default Footer