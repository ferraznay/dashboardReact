import React from 'react'
import Form from '../../components/macro/Formulario/Form'
import './Forms.css'



function Forms(props){

    return(
     <>
     <body class="sidebar-menu-collapsed">
     <div class="main-content">


    <div class="container-fluid content-top-gap">
        <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb my-breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Forms</li>
        </ol>
        </nav>
       </div>
       </div> 

     </body>
       <Form/>
     </>
    )
}

export default Forms