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
        mar >-1360 && setMar(mar-340)
    }
    const onPrev = () => {
         mar < 30 && setMar(mar+340)
    }
  return (
    <div>
       <button className="nextBtn" onClick={onNext}><i className ="arrow right"></i></button>
       {mar < 30 && <button className="prevBtn" onClick={onPrev}><i className ="arrow left"></i></button>}
    <div className="sliderWrap">
      <div className="slider" style={{marginLeft: mar }}>
        <div className="card">
          <Image src={carspareparts} width={300} height={270} className="img" alt=''/>
          <p className="cardText">Spare parts for cars</p>
        </div>
        <div className="card">
          <Image src={clothesmen} width={300} height={270} className="img" alt=''/>
          <p className="cardText">Clothes & shoes</p>
        </div>
        <div className="card">
          <Image src={cosmetics} width={300} height={270} className="img" alt=''/>
          <p className="cardText">Cosmetics</p>
        </div>
        <div className="card">
          <Image src={industrial} width={300} height={270} className="img" alt=''/>
          <p className="cardText">Industrial products</p>
        </div>
        <div className="card">
          <Image src={kidsgoods} width={300} height={270} className="img" alt=''/>
          <p className="cardText">Goods for children</p>
        </div>
        <div className="card">
          <Image src={electronics} width={300} height={270} className="img" alt=''/>
          <p className="cardText">Electro goods</p>
        </div>
        <div className="card">
          <Image src={ecommerce} width={300} height={270} className="img" alt=''/>
          <p className="cardText">E-commerce goods</p>
        </div>
      </div>
    </div>
    </div>
  );
}
