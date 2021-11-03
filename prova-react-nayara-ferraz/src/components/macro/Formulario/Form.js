import { Button } from 'bootstrap'
import React, { Component } from 'react'
import Input from '../../micro/Forms/Input/Input'
import './Form.css'


class Form extends Component {
    render() {
        return (
            <>
    <body class="sidebar-menu-collapsed">
     <div class="main-content">
                <section className="forms">
                    {/* Primeiro Form */}
                    <div className="card card_border py-2 mb-4">
                        <div className="cards__heading">
                       
                           <h3>Forms <span></span></h3>
                        </div>
                        <div className="card-body">
                            <form action="#" method="post">
                                <div className="form-group">
                                    <Input label="Email Address" type="text" placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                        anyone else.</small>
                                </div>
                                <div className="form-group">
                                <Input label="Password" type="password" placeholder="Password"/>
                                   
                                </div>
                                <div className="form-check check-remember check-me-out">

                                    <input type="checkbox" className="form-check-input checkbox" id="exampleCheck1" />
                                    <label className="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                     {/* Segundo Form */}
                    <div className="card card_border py-2 mb-4">
                        <div className="card-body">
                            <form action="#" method="post">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <Input label="E-mail" type="text" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                    <Input label="Password" type="password" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                <Input label="Address" type="text" placeholder="1234 Main St"/>
                                    
                                </div>
                                <div className="form-group">
                                <Input label="Address 2" type="text" placeholder="Apartment, studio, or floor"/>
                                   
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <Input label="City" type="text"/>
                                       
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputState" className="input__label">State</label>
                                        <select id="inputState" className="form-control input-style">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                    <Input label="Zip" type="text"/>
                                        
                                    </div>
                                </div>
                                <div className="form-check check-remember check-me-out">
                                    <input className="form-check-input checkbox" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label checkmark" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                                
                                <button type="submit" className="btn btn-primary btn-style mt-4">Sign in</button>
                            </form>
                        </div>
                    </div>




                </section>

                </div>
                </body>

            </>
        )
    }
}

export default Form