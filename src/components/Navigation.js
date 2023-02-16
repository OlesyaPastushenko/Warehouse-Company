import Link from 'next/link';
export default function Navigation(){
    return (
      <div>
      <div className='cover'></div>
      <nav className='nav'> 
      <div className='logo'>SWIFTSTORE</div>
      <ul>
        <Link  className='menuItem' href="/logistics">Warehouse Logistics</Link>
        <Link  className='menuItem' href="/logistics">Warehouse Logistics</Link>
        <Link  className='menuItem' href="/logistics">Warehouse Logistics</Link>
      </ul>
      </nav>
      </div>
    )
}