import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component{
    render(){
    return(
     <>
            <section>

                <div className='sidebar-menu sticky-sidebar-menu'>


                    <div className='logo'>
                        <h1><a href='#'>Collective</a></h1>
                    </div>


                    <div className='logo'>
                        <a href='#'>
                            <img src='image-path' alt='Your logo' title='Your logo' className='img-fluid' styles={{ height: '10px' }} />
                        </a>
                    </div>


                    <div className='logo-icon text-center'>
                        <a href='#' title='logo'><img src='assets/images/logo.png' alt='logo-icon' /> </a>
                    </div>


                    <div className='sidebar-menu-inner'>


                        <ul className='nav nav-pills nav-stacked custom-nav'>
                            <li><a href='#'><i className='fa fa-tachometer'></i><span> Dashboard</span></a>
                            </li>
                            <li><a href='cards.html'><i className='fa fa-cogs'></i> <span>Default cards</span></a></li>
                            <li><a href='pricing.html'><i className='fa fa-table'></i> <span>Pricing tables</span></a></li>
                            <li><a href='blocks.html'><i className='fa fa-th'></i> <span>Content blocks</span></a></li>
                            <li><a href='forms.html'><i className='fa fa-file-text'></i> <span>Forms</span></a></li>
                        </ul>


                        <a className='toggle-btn' onclick='toggleMenu()'>
                            <i className='fa fa-angle-double-left menu-collapsed__left'><span>Collapse Sidebar</span></i>
                            <i className='fa fa-angle-double-right menu-collapsed__right'></i>
                        </a>

                    </div>
                </div>
            </section>

     </>
    )
    }
}

export default Sidebar