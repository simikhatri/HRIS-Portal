"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEllipsisV } from 'react-icons/fa';

const ADropdown = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    return (
        <>
            <div className="dropdown" >
                <Link href="#" data-toggle="dropdown" onClick={toggleDropdown}>
                    <FaEllipsisV size={17} color='black'/>
                </Link>
                {dropdownVisible && (
                <div className="dropdown-menu">
                    <Link className="dropdown-item" href="#">Edit</Link>
                    <Link className="dropdown-item" href="#">Delete</Link>
                </div>
                )}
            </div>
        </>
    )
}

export default ADropdown
