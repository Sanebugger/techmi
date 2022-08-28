import React from 'react'
import { Link } from 'react-router-dom'
import homepage from '../img2/homepage.png'
export default function Hometop() {
  return (
    <>
    <div className="container-fluid">

    <div className="container home-top ">
        <div className="row ">
            <div className="col-md-6 col-11 order-2 pt-md-5  mt-md-5  mt-0 mx-auto ">
                   <h2 className='mt-4 pt-5'>we the <strong>digi-serve</strong>  team ,providing best digital services over the yeaars</h2>
                   
                   <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, totam. 
                       Amet nihil ut non consequuntur illum vitae magnam ullam eveniet!
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti placeat 
                       as voluptatibus molestiae animi.
                  </p>
                  <div className="d-flex mt-3">
                    <Link name="" id="botn" class="btn btn-dark" to="/contactus" role="button">Conatct Us</Link>
                    <Link name="" id="botn" class="btn btn-dark mx-3" to="/services" role="button">our Services</Link>
                  
                   </div>

            </div>
            <div className="col-md-6 col-10 order-1 pt-3 mt-2 mx-auto hometopimg">
               <img src={homepage} alt="" className='img-fluid' />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
