"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GIDropdown = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <div className="tabdropdown float-end" onClick={toggleDropdown}>
                <Link href="#" className="dots dropbtn">
                    <Image src="/images/dots.png" width={8} height={25} alt="" />
                </Link>
                {dropdownVisible && (
                <div className="dropdown">
                    <div className="dropdown-content">
                        <Link href="#">Link 1</Link>
                        <Link href="#">Link 2</Link>
                        <Link href="#">Link 3</Link>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}

export default GIDropdown
