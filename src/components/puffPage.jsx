import React, {useState} from "react";
import { useForm, ValidationError } from '@formspree/react';
import "../components/puffPage.css";
import Welcome from "../images/welcomepuff.jpg";
import Rain from "../images/umbrella.jpg";
import Puff from "../images/puff.jpg";
import Cart from "../images/groceryBag.jpg";
import Pillow from "../images/pillow.jpg";
import Logo from "../images/logo.png";
import sleepIcon from "../images/sleepIcon.png";
import PufIcon from "../images/pufIcon.png";
import UmbrellaIcon from "../images/umbrellaIcon.png";
import BagIcon from "../images/bagWhite.png";
import Collage from "../images/collage.jpg";
import Flechita from "../images/flecha-correcta.png";
import Logonegro from "../images/logoNegro.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import RedUmbrella from "../images/redUmbrella.png";
import ColorBag from "../images/bolsas-colores.png";
import Fuf from "../images/puf-sin-fondo.png";
import PufPillow from "../images/pufipuff.png";


export function Login () {

    const [state, handleSubmit] = useForm("mgeqvarw");
    if (state.succeeded) {
        return <p>Gracias por tu subcripción!</p>;
    }
    

    return(
        <body>
        <header className="welcome">
        <img className="welcomeImg" src={Welcome} alt=""/>
        <img className="logo" src={Logo} alt=""/>

            <div className="navBar">
            <button className="btnNavBar">
            <img className="pufIcon" src={PufIcon} alt=""/>
            <p className="txtBtn">Pufi Puf</p>
            </button>

            <button className="btnNavBar">
            <img className="umbrellaIcon" src={UmbrellaIcon} alt=""/>
            <p className="txtBtn">Pufi Rain</p>
            </button>

            <button className="btnNavBar">
            <img className="bagIcon" src={BagIcon} alt=""/>
            <p className="txtBtn">Pufi Cart</p>
            </button>

            <button className="btnNavBar">
            <img className="sleepIcon" src={sleepIcon} alt=""/>
            <p className="txtBtn">Pufi Nap</p>
            </button>
            </div>

            <div className="userBar">
            <button className="btnUser">Mi Cuenta</button>
            <button className="btnBuy">Mi compra</button>
            </div>

            <h1 className="welcomeTxt">Estár cómodo, nunca fue tan fácil.</h1>
            <button className="shopWelcome">SHOP</button>
        </header>

        <main>
            <section className="pufType">
            <div className="divRain">
                <img className="rainImg" src={Rain} alt=""/>
                <button className="btnShopRain">SHOP</button>
                <div className="infoProd">
                <img className="redUmbrella" src={RedUmbrella} alt=""/>
                <h2 className="textDesc">Pufi RAIN</h2>
                <hr></hr>
                <p>Descripción del producto. Este es un texto simulado.</p>
                <button className="more">Ver más</button>
                </div>
            </div>

            <div className="divPuffy">
                <div className="infoProd">
                <img className="pufpuf" src={Fuf} alt=""/>
                <h2 className="textDesc">Pufi PUFF</h2>
                <hr></hr>
                <p>Descripción del producto. Este es un texto simulado.</p>
                <button className="more">Ver más</button>
                </div>
                <img className="puffImg" src={Puff} alt=""/>
                <button className="btnShopPuff">SHOP</button>
            </div>

            <div className="divCart">
                <img className="cartImg" src={Cart} alt=""/>
                <button className="btnShopCart">SHOP</button>
                <div className="infoProd">
                <img className="colorBag" src={ColorBag} alt=""/>
                <h2 className="textDesc">Pufi CART</h2>
                <hr></hr>
                <p>Descripción del producto. Este es un texto simulado.</p>
                <button className="more">Ver más</button>
                </div>
            </div>

            <div className="divPillow">
                <div className="infoProd">
                <img className="pufPillow" src={PufPillow} alt=""/>
                <h2 className="textDesc">Pufi NAP</h2>
                <hr></hr>
                <p>Descripción del producto. Este es un texto simulado.</p>
                <button className="more"> Ver más</button>
                </div>
                <img className="pillowImg" src={Pillow} alt=""/>
                <button className="btnShopPillow">SHOP</button>
            </div>
            </section>

            <section className="RRSS">
                <p>Instagram</p>
                <p className="esPufi">#espufi</p>
            </section>
            <img className="collage" src={Collage} alt=""/>
            <section className="sub">
                <p>Newsletter</p>
                <p className="subcribete">Suscribete</p>
                <p>y enterate de todas las novedades</p>
            </section>
            <div className="form">
            <form onSubmit={handleSubmit}>
      
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Inserta tu email"
        className="inputEmail"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <button className="submitBtn" type="submit" disabled={state.submitting}>
      <img className="flecha" src={Flechita} alt=""/>
      </button>
    </form>
            </div>
            <hr className="separador"></hr>
            <footer className="footer">
            <img className="logoNegro" src={Logonegro} alt=""/>
                <div className="typeFooter">
                <p>Puff RAIN</p>
                <p>puff CART</p>
                <p>puff NAP</p>
                <p>puff NAP</p>
                </div>
                <div className="infoFooter">
                <p>Contacto</p>
                <p>Ayuda</p>
                <p>Como Comprar</p>
                <p>Terminos y condiciones</p>
                </div>
                <div className="paySave">
                <p>Compra 100% segura</p>
                </div>
                <div className="rrssFooter">
                <p>Siguenos en</p>
                <img className="facebook" src={Facebook} alt=""/>
                <img className="twitter" src={Twitter} alt=""/>
                <img className="insta" src={Instagram} alt=""/>
                </div>
                
            </footer>
        </main>
        </body>
    );
   
}
