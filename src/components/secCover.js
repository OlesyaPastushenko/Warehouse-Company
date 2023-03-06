import Navigation from "./Navigation";
import { useEffect, useState } from "react";
export default function Cover() {
  const [opacity, setOpacity] = useState(1);
  const [margin, setMargin] = useState(400);
  useEffect(() => {
    setOpacity(0);
    setMargin(0);
  }, []);
  return (
      <div className="cover">
        <div className="filter" style={{ opacity: opacity }}></div>
        <nav className="nav">
          <div className="logoNavWrap">
            <div className="logo">SWIFTSTORE</div>
            <Navigation />
          </div>
          <button className="btn">
            <span className="spnBtn1">Contact us</span>
            <span className="spnBtn2">Contact us</span>
          </button>
        </nav>
        <div className="sloganWrap">
          <div className="slogan" style={{ marginTop: margin }}>
            <h1 className="h1">Warehouse solutions in Spain</h1>
            <p className="slogantext">
              A long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point.
            </p>
            <button className="btn">
              <span className="spnBtn1">What's App US</span>
              <span className="spnBtn2">What's App US</span>
            </button>
          </div>
        </div>
      </div>
  );
}
