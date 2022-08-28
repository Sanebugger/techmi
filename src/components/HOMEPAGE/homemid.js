import React from 'react'
import graphic from '../img/graphic.jpg'
import webdev from '../img/webdev.jpg'
import digmar from '../img/digmar.jpg'
export default function Homemid() {
    return (
        <>


            <div className="conatiner-fluid homemid ">
                <div className="container-fluid">
                    <div className='container  mx-auto  d-flex  justify-content-center pt-5 mb-3 '>
                        <h2 className='serv'>Our Top Services</h2>
                    </div>
                </div>
                <div className="container pt-2 pb-5">
                    <div className="row pt-2 pb-5">
                        <div className="col-md-4 col-11 mx-auto  px-5 py-3 homemidimg">
                            <h2> web development</h2>
                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum nihil provident rem quae, ipsa voluptates quibusdam minus explicabo, dignissimos consequatur eligendi doloribus dolorem porro perferendis, earum molestias! Nam exercitationem expedita sed amet animi repudiandae totam voluptatem accusamus inventore cum!</p>
                            <img src={webdev} className="img-fluid " alt="" />
                        </div>
                        <div className="col-md-4 col-11 mx-auto  px-5 py-3 homemidimg">
                            <h2>  graphic designing</h2>
                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum nihil provident rem quae, ipsa voluptates quibusdam minus explicabo, dignissimos consequatur eligendi doloribus dolorem porro perferendis, earum molestias! Nam exercitationem expedita sed amet animi repudiandae totam voluptatem accusamus inventore cum!</p>
                            <img src={graphic} className="img-fluid " alt="" />
                        </div>
                        <div className="col-md-4 col-11 mx-auto px-5 py-3 homemidimg">
                            <h2>  digital marketing</h2>
                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum nihil provident rem quae, ipsa voluptates quibusdam minus explicabo, dignissimos consequatur eligendi doloribus dolorem porro perferendis, earum molestias! Nam exercitationem expedita sed amet animi repudiandae totam voluptatem accusamus inventore cum!</p>
                            <img src={digmar} className="img-fluid " alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
