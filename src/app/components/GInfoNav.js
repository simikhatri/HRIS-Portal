"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const GInfoNav = () => {
    const pathname = usePathname()
    return (
        <>
           <section id="submenu">
    <div class="container-fluid">
        <div class="inner-nav">
            <ul>
                <li><Link className={`nav-link ${pathname === '/generalInfo/employee' || pathname.startsWith('/generalInfo/employee/')? 'active' : ''}`} href="/generalInfo/employee">Employee</Link></li>
                <li><Link className={`nav-link ${pathname === '/generalInfo/personal' ? 'active' : ''}`} href="/generalInfo/personal">Personal</Link></li>
                <li><Link className={`nav-link ${pathname === '/generalInfo/qualification' ? 'active' : ''}`} href="/generalInfo/qualification">Qualification</Link></li>
                <li><Link className={`nav-link ${pathname === '/generalInfo/experience' ? 'active' : ''}`} href="/generalInfo/experience">Experience</Link></li>
                <li><Link className={`nav-link ${pathname === '/generalInfo/salaryBank' ? 'active' : ''}`} href="/generalInfo/salaryBank">Salary Bank</Link></li>
                <li><Link className={`nav-link ${pathname === '/generalInfo/family' ? 'active' : ''}`} href="/generalInfo/family">Family</Link></li>
                <li><Link className={`nav-link ${pathname === '/generalInfo/separation' ? 'active' : ''}`} href="/generalInfo/separation">Separation</Link></li>
                <li><Link className={`nav-link ${pathname === '/generalInfo/references' ? 'active' : ''}`} href="/generalInfo/references">References</Link></li>
            </ul>
        </div>
    </div>
</section>
        </>
    )
}

export default GInfoNav
