"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const QDropdown = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <div className="tabledropdown" onClick={toggleDropdown}>
                <Link href="#" className="dots dropbtn">
                    <Image src="/images/dots.png" width={7} height={24} alt="" />
                </Link>
                {dropdownVisible && (
                    <div className="dropdown">
                        <div className="dropdown-content">
                            <Link href="#">Edit</Link>
                            <Link href="#">Remove</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default QDropdown
