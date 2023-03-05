import Image from "next/image";
import { useState } from "react";
import electronics from "../styles/assets/electronics.jpg";
import carspareparts from '../styles/assets/carspareparts.jpg';
import clothesmen from '../styles/assets/cloth.jpg';
import cosmetics from '../styles/assets/cosmetics.jpg';
import industrial from "../styles/assets/industrial-goods.jpg";
import kidsgoods from '../styles/assets/toys.jpeg';
import marketplace from '../styles/assets/marketplace.jpg';
import ecommerce from '../styles/assets/e-commerce.jpg';


export default function Carousel() {
    const [mar, setMar] = useState(100)
    const onNext = () => {
        mar >-1700 && setMar(mar-440)
    }
    const onPrev = () => {
         mar < 30 && setMar(mar+440)
    }
  return (
    <div className="lightGrey">
       <button className="nextBtn" onClick={onNext}><i className ="arrow right"></i></button>
       {mar < 30 && <button className="prevBtn" onClick={onPrev}><i className ="arrow left"></i></button>}
    <div className="sliderWrap lightGrey">
      <div className="slider" style={{marginLeft: mar }}>
        <div className="card">
          
          <div className="cardText">Spare parts for cars:</div>
          <div className="servDesc margin-top">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className="img">SP</div>
        </div>
        <div className="card">
          <div className="cardText">Clothes & shoes</div>
          <div className="servDesc margin-top">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className="img">C&S</div>
        </div>
        <div className="card">
          <div className="cardText">Cosmetics</div>
          <div className="servDesc margin-top">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className="img">C</div>
        </div>
        <div className="card">
          <div className="cardText">Industrial products</div>
          <div className="servDesc margin-top">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className="img">IP</div>
        </div>
        <div className="card">
          <p className="cardText">Goods for children</p>
          <div className="servDesc margin-top">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className="img">CH</div>
        </div>
        <div className="card">
          <div className="cardText">Electro goods</div>
          <div className="servDesc margin-top">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className="img">EG</div>
        </div>
        <div className="card">
          <p className="cardText">E-commerce goods</p>
          <div className="servDesc margin-top">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className="img">EC</div>
        </div>
      </div>
    </div>
    </div>
  );
}
