import Link from 'next/link';
export default function Navigation() {
  return (
    <div>
      <ul className="ul">
        <div className="linkwrapLog">
          <Link className="menuItem log" href="/logistics">
            Warehouse Logistics
          </Link>
          <div className="submenuLog">
            <Link className="subMenuItem" href="/logistics">
              Long-term storage
            </Link>
            <Link className="subMenuItem" href="/logistics">
              Traceable marking
            </Link>
            <Link className="subMenuItem" href="/logistics">
              Sorting and repackaging
            </Link>
            <Link className="subMenuItem" href="/logistics">
              Order mailing
            </Link>
            <Link className="subMenuItem" href="/logistics">
              Returns of orders
            </Link>
          </div>
        </div>
        <div className="linkwrapFul">
          <Link className="menuItem ful" href="/logistics">
            Fullfilment
          </Link>
          <div className="submenuFul">
            <Link className="subMenuItem" href="/logistics">
              E-shops
            </Link>
            <Link className="subMenuItem" href="/logistics">
              Marketplaces
            </Link>
          </div>
        </div>
        <div className="linkwrapCross">
          <Link className="menuItem cross" href="/logistics">
            Cross docking
          </Link>
          <div className="submenuCross">
            <Link className="subMenuItem" href="/logistics">
              Pallet
            </Link>
            <Link className="subMenuItem" href="/logistics">
              Box
            </Link>
            <Link className="subMenuItem" href="/logistics">
              Piece
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
}
