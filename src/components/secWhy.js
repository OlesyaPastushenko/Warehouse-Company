import { useState } from "react";

export default function Why() {
  const [location, setLocation] = useState(false)
  const [security, setSecurity] = useState(false)
  const [fast, setFast] = useState(false)
  const [trace, setTrace] = useState(false)

  return (
    <div className="section white">
      <div className="photoAndWhy">
        <div className="whyWrap">
          <div className="h2">Why choose us?</div>
          <div className="whyDesc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </div>
          <div>
            <div className="nameAndCross">
              <div>Location</div>
              <div className="cross1" onClick={()=>setLocation(!location)}></div>
            </div>
            <div className={ location ? "whyInfo" : "whyInfoClose"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </div>
          </div>
          <div>
            <div className="nameAndCross">
              <div>Security</div>
              <div className="cross1" onClick={()=>setSecurity(!security)}></div>
            </div>
            <div className={ security ? "whyInfo" : "whyInfoClose"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </div>
          </div>
          <div className="nameAndCross">
            <div>Fast fullfilment</div>
            <div className="cross1" onClick={()=>setFast(!fast)}></div>
          </div>
          <div className={ fast ? "whyInfo" : "whyInfoClose"}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </div>
          <div className="nameAndCross">
            <div>Traceble marking</div>
            <div className="cross1" onClick={()=>setTrace(!trace)}></div>
          </div>
          <div className={ trace ? "whyInfo" : "whyInfoClose"}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </div>
        </div>
        <div className="aurimas"></div>
      </div>
    </div>
  );
}
