import React from 'react'
import Pdata from './Productdata.js'

export default function Services() {
    return (
        <>


            <div className="container-fluid">
                <div className='container  mx-auto  d-flex  justify-content-center mt-4 mb-3 '>
                    <h2>Our Services</h2>
                </div>
            </div>


            <div className="container-fluid">
                <div className="container mx-auto">
                    <div className="row">

                        
                          {Pdata.map((c) => {
                                return (
                                    <>
                                        <div className="col-md-4 col-9 mt-4 mx-auto">
                                            <div class="card text-start">
                                            <img class="card-img-top" src={c.imgsrc} alt="img" />
                                               <div class="card-body">
                                                <h4 class="card-title">{c.title}</h4>
                                              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit deleniti dolorem maiores!</p>
                                          </div>
                                      </div>
                                  </div>
                              </>
                          )
            })}


                    
                  </div>
              </div>
          </div>
      </>
  )
}
