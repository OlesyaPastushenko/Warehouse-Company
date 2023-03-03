import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Navigation(){
  const [opacity, setOpacity] = useState(1) 
  const [margin, setMargin] = useState(400)
  useEffect(()=>{
     setOpacity(0)
     setMargin(0)
  },[])
    return (
      <div>
      <div className='cover'>
        <div className='filter' style={{opacity: opacity}}></div>
      <nav className='nav'>
      <div className='logoNavWrap'>
      <div className='logo'>SWIFTSTORE</div>
      <ul className='ul'>
        <div className='linkwrapLog'>
        <Link  className='menuItem log' href="/logistics">Warehouse Logistics</Link>
        <div className='submenuLog'>
        <Link  className='subMenuItem' href="/logistics">Long-term storage</Link>
        <Link  className='subMenuItem' href="/logistics">Traceable marking</Link>
        <Link  className='subMenuItem' href="/logistics">Sorting and repackaging</Link>
        <Link  className='subMenuItem' href="/logistics">Order mailing</Link>
        <Link  className='subMenuItem' href="/logistics">Returns of orders</Link>
        </div>
        </div>
        <div className='linkwrapFul'>
        <Link  className='menuItem ful' href="/logistics">Fullfilment</Link>
        <div className='submenuFul'>
        <Link  className='subMenuItem' href="/logistics">E-shops</Link>
        <Link  className='subMenuItem' href="/logistics">Marketplaces</Link>
        </div>
        </div>
        <div className='linkwrapCross'>
        <Link  className='menuItem cross' href="/logistics">Cross docking</Link>
        <div className='submenuCross'>
        <Link  className='subMenuItem' href="/logistics">Pallet</Link>
        <Link  className='subMenuItem' href="/logistics">Box</Link>
        <Link  className='subMenuItem' href="/logistics">Piece</Link>
        </div>
        </div>
      </ul>
      </div> 
        <button className='btn'><span className='spnBtn1'>Contact us</span><span className='spnBtn2'>Contact us</span></button>
      </nav>
      <div className='sloganWrap'>
        <div className='slogan' style={{marginTop: margin}}>
        <h1 className='h1'>Warehouse solutions in Spain</h1>
        <p className='slogantext'>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
        </p>
        <button className='btn'><span className='spnBtn1'>What's App US</span><span className='spnBtn2'>What's App US</span></button>
        </div>
      </div>
      </div>
      </div>
    )
}