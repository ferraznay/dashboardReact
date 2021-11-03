import React, { Component } from 'react'
import './Home.css'



class Home extends Component {
    render(){

    return(
     <>
     <section>
    
    <div className="sidebar-menu sticky-sidebar-menu">

   
      <div className="logo">
        <h1><a href="index.html">Collective</a></h1>
      </div>


    <div className="logo">
      <a href="index.html">
        <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
      </a>
    </div>


      <div className="logo-icon text-center">
        <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon"/> </a>
      </div>


      <div className="sidebar-menu-inner">

      
        <ul className="nav nav-pills nav-stacked custom-nav">
          <li><a href="index.html"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
          </li>
          <li><a href="cards.html"><i class="fa fa-cogs"></i> <span>Default cards</span></a></li>
          <li><a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
          <li><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
          <li><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
        </ul>
     
     
        <a className="toggle-btn" onclick="toggleMenu()">
          <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
          <i className="fa fa-angle-double-right menu-collapsed__right"></i>
        </a>
     
      </div>
    </div>
   </section>
       
     </>
    )
}
}

export default Home