export default function Calculator() {
  return (
    <div className="calcWrap"> 
      <div className="calcRow">
        <span className="titleCalc">Storage</span>
        <select className="sel">
          <option>Choose</option>
          <option>Pallet</option>
          <option>Cell</option>
        </select>
        <input type="text" className="inputCalc"/>
      </div>
      <div className="calcRow">
        <span className="titleCalc">Days of storage</span>
        <select className="sel">
          <option>Days</option>
        </select>
        <input type="text" className="inputCalc"/>
      </div>
      <div className="calcRow">
        <span className="titleCalc">Receiving goods to the warehouse</span>
        <select className="sel">
          <option>Choose</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input type="text" className="inputCalc"/>
      </div>
      <div className="calcRow">
        <span className="titleCalc">Complete set of goods in the order</span>
        <select className="sel">
          <option>Choose</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input type="text" className="inputCalc"/>
      </div>
      <div className="calcRow">
        <span className="titleCalc">Shipment of goods from the warehouse</span>
        <select className="sel">
          <option>Choose</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input type="text"  className="inputCalc"/>
      </div>
      <div className="whiteBtnWrap">
      <button className='btnWhite'><span className='spnBtn1White'>Calculate</span><span className='spnBtn2White'>Calculate</span></button>
      </div>
    </div>
  );
}
