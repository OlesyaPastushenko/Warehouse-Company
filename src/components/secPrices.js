import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Prices() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="section white">
      <div className="secWrap">
        <div className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="priceInfo">
          <div className="h2">
            Foundational Warehouse of Tomorrow. Delivered Today.
          </div>
          <div className="priseList">
            <div className="raw" data-aos="fade-up">
              <div className="item margin-right-30">
                <div className="num">1</div>
                <div className="service">Powered Automatisation</div>
                <div className="servDesc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </div>
                <div className="price">Price: 25 &euro; per pallet</div>
              </div>
              <div className="item">
                <div className="num">2</div>
                <div className="service">Powered Automatisation</div>
                <div className="servDesc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </div>
                <div className="price">Price: 25 &euro; per pallet</div>
              </div>
            </div>
            <div className="raw" data-aos="fade-up">
              <div className="item margin-right-30">
                <div className="num">3</div>
                <div className="service">Powered Automatisation</div>
                <div className="servDesc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </div>
                <div className="price">Price: 25 &euro; per pallet</div>
              </div>
              <div className="item">
                <div className="num">4</div>
                <div className="service">Powered Automatisation</div>
                <div className="servDesc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </div>
                <div className="price">Price: 25 &euro; per pallet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
