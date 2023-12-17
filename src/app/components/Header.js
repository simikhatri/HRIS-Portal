"use client";
import Link from "next/link";
import React, { useState } from 'react';
import SuperAdmin from "./SuperAdmin";
import Image from 'next/image'


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
    return (
        <>
            <header id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="logo">
                                <Link className="logoH" href="/"></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-6">
                            <ul>
                                <li>
                                <form action="" autoComplete="on">
                                    <input id="search" name="search" type="text" placeholder="What're we looking for ?" />
                                    <input id="search_submit" value="Rechercher" type="submit" />
                                </form>
                                </li>
                                <li className="notification">
                                    <button className="notification-icon" onClick={toggleDropdown}>
                                        <i>3</i>
                                    </button>
                                    {isDropdownOpen && (
                                    <div className="user-dropdown notification-dropdown">
                                        <h4>You have 3 Messages</h4>
                                        <div className="notification-wrap">
                                            <div className="notifications clearfix">
                                                <div className="img-wrap">
                                                    <Link href="#"><Image src="/images/profile-img.png" width={100} height={100} alt=""/></Link>
                                                </div>
                                                <div className="notification-detail">
                                                    <Link href="#">
                                                        <h5>Kamran Naeem</h5>
                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="notification-wrap">
                                            <div className="notifications clearfix">
                                                <div className="img-wrap">
                                                    <Link href="#"><Image src="/images/profile-img.png" width={100} height={100} alt=""/></Link>
                                                </div>
                                                <div className="notification-detail">
                                                    <Link href="#">
                                                        <h5>Kamran Naeem</h5>
                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="notification-wrap">
                                            <div className="notifications clearfix">
                                                <div className="img-wrap">
                                                    <Link href="#"><Image src="/images/profile-img.png" width={100} height={100} alt=""/></Link>
                                                </div>
                                                <div className="notification-detail">
                                                    <Link href="#">
                                                        <h5>Kamran Naeem</h5>
                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )} 
                                </li>
                                <li>
                                   <SuperAdmin/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
