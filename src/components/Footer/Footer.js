import React from 'react';
import Clogo from './clogo.png';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube, } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-dark text-white p-2'>
            <div className='d-flex justify-content-between'>
                <div>
                    <div className='d-flex'>
                        <img className='me-1' style={{ height: 20 }} src={Clogo} alt="" />
                        <p className='m-0'>Fun With Programming</p>
                    </div>
                    <div>
                        <HiOutlineLocationMarker className='me-1'></HiOutlineLocationMarker>
                        <small>House # 24, Road # 02, Sector # 03, Uttara, Dhaka, Bangladesh</small>
                    </div>
                    <div>
                        <HiOutlineMail className='me-1'></HiOutlineMail>
                        <small>info@fun-with-programming.com</small>
                    </div>
                    <div>
                        <HiOutlinePhone className='me-1'></HiOutlinePhone>
                        <small>HelpLine: +8801725353614</small>
                    </div>
                    <div>
                        <small>(Available : Mon - Thu, 10:00 AM to 7:00 PM)</small>
                    </div>
                </div>
                <div className='ms-4'>
                    <p className='mb-1'>Courses</p>
                    <p className='mb-1'>FAQ</p>
                    <p className='mb-1'>Blog</p>
                    <p className='mb-1'>About Us</p>
                    <p className='mb-1'>Terms and Conditions</p>
                </div>
            </div>
            <div className='text-center mt-3'>
                <FaFacebook></FaFacebook>
                <FaTwitter className='ms-2'></FaTwitter>
                <FaYoutube className='ms-2'></FaYoutube>
                <FaLinkedin className='ms-2'></FaLinkedin>
                <FaInstagram className='ms-2'></FaInstagram>
            </div>
            <div className='text-center mt-0'>
                <small><small><small>Copyright © 2022 Fun With Programming</small></small></small>
            </div>
        </div>
    );
};

export default Footer;