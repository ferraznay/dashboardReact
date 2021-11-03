import React, { Component } from 'react'
import './Sidebar.css'
import Logo from '../../../assets/images/logo.png'
import Tachometer from '../../../assets/images/tachometer.png'
import Cogs from '../../../assets/images/cogs.png'
import Table from '../../../assets/images/table.png'
import Tablet from '../../../assets/images/tablet.png'
import Text from '../../../assets/images/file-text.png'
import Right from '../../../assets/images/direita.png'
import Left from '../../../assets/images/esquerda.png'

class Sidebar extends Component {
    render(){
  
        

    return(
     <>

     
            <body class="sidebar-menu-collapsed">

                <section>

                    <div className='sidebar-menu sticky-sidebar-menu'>


                        <div className='logo'>
                            <h1><a href='home.html'>Collective</a></h1>
                        </div>


                        <div className='logo'>
                            <a href='home.html'>
                                <img src={Logo} alt='Your logo' title='Your logo' className='img-fluid' styles={{ height: '10px' }} />
                            </a>
                        </div>


                        <div className='logo-icon text-center'>
                            <a href='home' title='logo'><img src={Logo} alt='logo-icon' /> </a>
                        </div>


                        <div className='sidebar-menu-inner'>


                            <ul className='nav nav-pills nav-stacked custom-nav'>
                                <li><a href='home'><img src={Tachometer} width="30px" /><span> Dashboard</span></a>
                                </li>
                                <li><a href='cards'><img src={Cogs} width="30px"/> <span>Default cards</span></a></li>
                                <li><a href='pricing'><img src={Table} width="30px" /> <span>Pricing tables</span></a></li>
                                <li><a href='blocks'><img src={Tablet} width="30px"/> <span>Content blocks</span></a></li>
                                <li><a href='forms'><img src={Text} width="30px" /> <span>Forms</span></a></li>
                            </ul>


                            {/* <a className='toggle-btn' onClick={toggleMenu}> */}
                            <a class="toggle-btn" onclick="toggleMenu()">
                                <i className=' menu-collapsed__left'><span><img src={Left} width="20px"/>Collapse Sidebar</span></i>
                                <i className=' menu-collapsed__right'></i><img src={Right} width="20px"/>
                            </a>

                        </div>
                    </div>
                </section>

            </body>
    

     </>
    )
    } 
}



export default Sidebar