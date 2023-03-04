import Calculator from "./Calculator"
export default function Calc () {
    return(
        <div className="section">
            <div className="frostedGlass">
                <div className="h3">Our platforms is used throughout the public, private, and non-profit sectors</div>
                {/* <div className="calcDisc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </div> */}
                <p className="titleCalc small margin-top">Pallet: size(cm) 120*120*300 weight(kg) 120</p>
                <p className="titleCalc small">Cell: size(cm) 42*42*42 weight(kg)</p>
                <p className="titleCalc small margin-bottom">Box: size(cm) up to 100*100*100 weight(kg) 35</p>
                <Calculator/>
                <div className="totalWrap">
                    <span>Total amount:</span>
                    <span>0.00 &euro;</span>
                </div>
            </div>
            <div className="calcContactWrap"> 
            <div className="CalcContact">If your have not standard oreder, please contact our menager for calculation.</div>
            <button className='btn'><span className='spnBtn1'>Contact Us</span><span className='spnBtn2'>Contact Us</span></button>
            </div>
        </div>
    )
}