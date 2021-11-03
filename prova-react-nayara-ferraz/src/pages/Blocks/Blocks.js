import React from 'react'
import './Blocks.css'
import Template from '../../assets/images/template2.jpg'
import Template1 from '../../assets/images/template1.jpg'
import Laptop from '../../assets/images/laptop.png'
import Paint from '../../assets/images/paint.png'
import Signal from '../../assets/images/signal.png'

function Blocks(props){

    return(
     <>

            <body className="sidebar-menu-collapsed">
                <div className="main-content">


                    <div className="container-fluid content-top-gap">


                        <nav aria-label="breadcrumb" className="mb-4">
                            <ol className="breadcrumb my-breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Elements</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Content Blocks</li>
                            </ol>
                        </nav>

                        <div className="cards__heading">
                            <h3>Content Blocks</h3>
                        </div>

                        <div className="card card_border p-lg-5 p-3 mb-4">
                            <div className="card-body py-3 p-0">
                                <div className="row">
                                    <div className="col-lg-6 align-self pr-lg-4">
                                        <h3 className="block__title mb-lg-4">About Content Block</h3>
                                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                            neque sunt labore veritatis. </p>
                                        <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                            neque sunt
                                            praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                                            praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                                        <a href="#read" className="btn btn-style btn-primary"> Read More</a>
                                    </div>
                                    <div className="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
                                        <img src={Template} alt="" className="img-fluid rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card_border p-lg-5 p-3 mb-4">
                            <div className="card-body py-3 p-0">
                                <div className="row">
                                    <div className="col-lg-6 pr-lg-4">
                                        <img src={Template1} alt="" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-lg-6 align-self pl-lg-4 mt-lg-0 mt-4">
                                        <h3 className="block__title mb-lg-4">Content Block with 2 buttons</h3>
                                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti neque
                                            sunt
                                            praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                                            praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                                        <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                            neque sunt labore veritatis.</p>
                                        <a href="#read" className="btn btn-style btn-primary mr-2"> Read More</a>
                                        <a href="#more" className="btn btn-style border-btn"> Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card_border p-lg-5 p-3 mb-4">
                            <div className="card-body py-3 p-0">
                                <h3 className="block__title mb-lg-4">Content Block Features</h3>
                                <div className="row feature-3 text-center">
                                    <div className="col-md-4 three-grids-columns mt-5">
                                        <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                        <a href="#">

                                            <h4>Web Design</h4>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>

                                        <a href="#" className="actionbg">Read More</a>
                                    </div>
                                    <div className="col-md-4 three-grids-columns mt-5">
                                        <span className="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                                        <a href="#">

                                            <h4>Graphic Design</h4>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                                        <a href="#" className="actionbg">Read More</a>
                                    </div>
                                    <div className="col-md-4 three-grids-columns mt-5">
                                        <span className="fa fa-signal icon-fea" aria-hidden="true"></span>
                                        <a href="#">

                                            <h4>Web Development</h4>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                                        <a href="#" className="actionbg">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w3l-about1 card card_border p-lg-5 p-3 mb-4">
                            <div className="card-body py-3 p-0">
                                <h3 className="block__title mb-lg-4">Content Block Features with photo</h3>
                                <div className="row cwp23-content">
                                    <div className="col-md-6 cwp23-text">
                                        <div className="row cwp23-text-cols">
                                            <div className="col-md-6 column mt-4">
                                                <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                                <a href="#url">Web design</a>
                                                <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                            </div>
                                            <div className="col-md-6 column mt-4">
                                                <span className="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                                                <a href="#url">Graphic design</a>
                                                <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                            </div>
                                            <div className="col-md-6 column mt-4">
                                                <span className="fa fa-signal icon-fea" aria-hidden="true"></span>
                                                <a href="#url">Web development</a>
                                                <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                            </div>
                                            <div className="col-md-6 column mt-4">
                                                <span  aria-hidden="true"><img src={Laptop} width="40px" /></span>
                                                <a href="#url">Webdesign</a>
                                                <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-5 cwp23-img">
                                        <img src={Template} className="img-fluid rounded" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            
        </body>
     </>
    
    )
}

export default Blocks