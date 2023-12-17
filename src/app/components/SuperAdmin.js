"use client";
import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image'

const SuperAdmin = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="dropdown">
                <Link href="#" onClick={toggleDropdown}>
                    <em>Super Admin</em>
                    <span>
                        <Image className="HeadImage" src="/images/profile-img.png" width={100} height={100} alt="" />
                    </span>
                </Link>
                {isDropdownOpen && (
                <div className="dropdown-menu">
                    <Link className="dropdown-item" href="#">Profile</Link>
                    <Link className="dropdown-item" href="#">Another action</Link>
                    <Link className="dropdown-item" href="#">Something else here</Link>
                </div>
                )}
            </div>
        </>
    )
}

export default SuperAdmin
