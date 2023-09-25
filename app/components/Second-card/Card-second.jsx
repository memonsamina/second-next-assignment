import React from 'react'
import './Card-second.css'
import Image from 'next/image'
import shadoww from '../../images/assets/Ellipse 1.svg'
import shadOw from '../../images/assets/Ellipse 5.svg'
import image from '..//..//images/assets/pic.svg'
import pic from '..//..//images/assets/Rectangle 5.svg'
import img from '..//..//images/assets/rectangle.svg'
import logo from '..//..//images/assets/NFT.market.png'
import arrow from '..//..//images/assets/Arrow 1.svg'
import star from '..//..//images/assets/star.svg'
import shadd from '..//..//images/assets/Ellipse 3.svg'
import line from '..//..//images/assets/Line.svg'

const Card = () => {
  return (
    <div className="bg-color">
      <div className="container">
        <nav className="navbar navbar-expand-lg">

          <Image src={logo} alt="" />
          <a className="navbar-brand " href="#">

          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li>
                <a href="#" className="nav-clour nav-link text-white px-3 ">
                  Collection</a></li>
              <li>
                <a href="#" className="nav-clour nav-link text-white px-3">
                  Community </a> </li>
              <li>
                <a href="#" className="nav-clour nav-link text-white px-3">
                  create </a> </li>
              <li>
                <a href="#" className="nav-clour nav-link text-white px-3">
                  About </a>  </li>
            </ul>

            <div className="navbar-icons justify-content-between d-flex ">
              <div className="decorative-space px-2 d-flex">
                <button class="button rounded-3">
                  <span className="button-text rounded-3 "> Sign In</span>
                </button>
                <span className='text-white mt-4'>Sing Up</span>

              </div>
            </div>
          </div>
        </nav>
        <Image src={star} className='set' width={45} />
        <div className="row mt-3">
          <div className="col-md-7 hero-section mt-5">
            <Image src={shadoww} className='shadow' />
            <h1 className="text-white">
              Be one of the first 3 <br />
              people to buy this <br />
              <span className='span-title heading'>NFT</span> <Image src={shadd} className='shAd' />
            </h1>
            <p className='peragraph'>
              and get a 10$ bonus along with the <br /> purchase
            </p>
            <div className='d-flex '>
              <h5 className='price'>the price of <br /> this NFT : 23 $ <Image src={line} className='setting ' width={45} />
                <Image src={arrow} className='mx-2' width={15} /> 18 $</h5>
              <div className="decorative-space px-5 ">
                <button class="button rounded-3">
                  <span className="button-text rounded-3"> Buy Now </span>
                </button>
              </div>
            </div>

            <div className="color-carrd mt-3 px-4 py-4 rounded-4 text-white">
              <div className="d-flex justify-content-between fw-bold">
                <h6>Collections</h6>
                <h6>Artist</h6>
                <h6>Communlty</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className='fw-bold px-1'>450K+</h4>
                <h4 className='fw-bold'>320K+</h4>

                <h4 className='fw-bold'>15K+</h4>
              </div>
            </div>


          </div>
          <div className="col-md-5 ">
            <Image src={img} className='mt-5' alt="image" height={385} />
            <Image src={image} className='margin' alt='image' width={360} />
            <Image src={pic} className='marginn' alt='image' width={325} />

          </div>
        </div>
      </div>
    </div>
  );
};


export default Card