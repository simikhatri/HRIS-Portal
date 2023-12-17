import Link from "next/link"
import { FaAngleDown } from "react-icons/fa"

const UserNav = () => {
  return (
    <>
   <section id="menuwrap">
    <div className="container-fluid">
        <div className="mobiledropdown">
            <Link className="nav-link" href="#">My Home <FaAngleDown/></Link>
        </div>
        <ul>
            <li className="active"><Link className="nav-link" href="#">My Home</Link></li>
            <li><Link className="nav-link" href="#">My HR</Link></li>
            <li><Link className="nav-link" href="#">My Role</Link></li>
        </ul>
    </div>
</section>
    </>
  )
}

export default UserNav
