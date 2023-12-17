"use client"
import Link from "next/link"
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { FaAngleDown } from "react-icons/fa"

const Navbar = () => {
    const pathname = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <section id="menuwrap">
                <div className="container-fluid">
                    <div className="mobiledropdown" onClick={toggleMobileMenu}>
                        <Link className="nav-link" href="/">My Home <FaAngleDown className="float-end"/></Link>
                    </div>
                    <ul className={`menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                        <li className={`${pathname === '/' ? 'active' : '/'}`}><Link className="nav-link" href="/">My Home</Link></li>
                        <li className={`${pathname === '/generalInfo' || pathname.startsWith('/generalInfo/') ? 'active' : ''}`}>
                            <Link className="nav-link" href="/generalInfo">General Info</Link>
                            <div className="inner-nav mobile-submenu">
                                <ul>
                                    <li><Link className='nav-link' href="employee">Employee</Link></li>
                                    <li><Link className='nav-link' href="separation">Separation</Link></li>
                                    <li><Link className='nav-link' href="personal">Personal</Link></li>
                                    <li><Link className='nav-link' href="qualification">Qualification</Link></li>
                                    <li><Link className='nav-link' href="salaryBank">Salary Bank</Link></li>
                                    <li><Link className='nav-link' href="family">Family-Next of Kin</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${pathname === '/manage' || pathname.startsWith('/manage/') ? 'active' : ''}`}>
                            <Link className="nav-link" href="/manage">Manage</Link>
                            <div className="inner-nav mobile-submenu">
                                <ul>
                                    <li><Link className={`nav-link ${pathname === '/manage' ? 'active' : ''}`} href="/manage">Employee</Link></li>
                                    <li><Link className='nav-link' href="#">Salaries</Link></li>
                                    <li><Link className='nav-link' href="#">Galleries</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${pathname === '/attendance' ? 'active' : ''}`}>
                            <Link className="nav-link" href="/attendance">Attendences</Link>
                        </li>
                        <li className={`${pathname === '/expense' ? 'active' : ''}`}>
                            <Link className="nav-link" href="/expense">Expense</Link>
                        </li>
                        <li className={`${pathname === '/medical' ? 'active' : ''}`}>
                            <Link className="nav-link" href="/medical">Medical</Link>
                        </li>
                        <li className={`${pathname === '/clearance' ? 'active' : ''}`}>
                            <Link className="nav-link" href="/clearance">Clearance</Link>
                        </li>
                        <li className={`${pathname === '/travel' ? 'active' : ''}`}>
                            <Link className="nav-link" href="/travel">Travel</Link>
                        </li>
                        <li className={`${pathname === '/recruitment' ? 'active' : ''}`}>
                            <Link className="nav-link" href="/recruitment">Recruitment</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Navbar
