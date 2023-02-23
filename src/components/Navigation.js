import Link from 'next/link';
export default function Navigation(){
    return (
      <div>
      <div className='cover'></div>
      <nav className='nav'>
      <div className='logoNavWrap'>
      <div className='logo'>SWIFTSTORE</div>
      <ul className='ul'>
        <div className='linkwrapLog'>
        <Link  className='menuItem log' href="/logistics">Warehouse Logistics</Link>
        <div className='submenuLog'>
        <Link  className='subMenuItem' href="/logistics">Responsible storage</Link>
        <Link  className='subMenuItem' href="/logistics">Traceable marking</Link>
        <Link  className='subMenuItem' href="/logistics">Sorting and repackaging</Link>
        <Link  className='subMenuItem' href="/logistics">Order mailing</Link>
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
        <Link  className='menuItem' href="/logistics">Cross docking</Link>
        <div className='submenuCross'>
        <Link  className='subMenuItem' href="/logistics">E-shops</Link>
        <Link  className='subMenuItem' href="/logistics">Marketplaces</Link>
        </div>
        </div>
      </ul>
      </div> 
        <button className='btn'><span className='spnBtn1'>Contact us</span><span className='spnBtn2'>Contact us</span></button>
      </nav>
      </div>
    )
}