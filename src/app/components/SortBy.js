"use client"
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

const SortBy = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="dropdown">
                <Link href="#" onClick={toggleDropdown}>
                    <em>Date</em> <span className="icon"><Image src="/images/date-icon.png" width={100} height={24} alt="" /></span>
                </Link>
                {isOpen && (
                <div className="dropdown-menu">
                    <Link className="dropdown-item" href="#">
                        <em>Date</em> <span className="icon"><Image src="/images/date-icon.png" width={100} height={24} alt="" /></span>
                    </Link>
                    <Link className="dropdown-item" href="#">
                        <em>Date</em> <span className="icon"><Image src="/images/date-icon.png" width={100} height={24} alt="" /></span>
                    </Link>
                    <Link className="dropdown-item" href="#">
                        <em>Date</em> <span className="icon"><Image src="/images/date-icon.png" width={100} height={24} alt="" /></span>
                    </Link>
                </div>
                )}
            </div>
        </>
    )
}

export default SortBy
