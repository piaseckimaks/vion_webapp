import React from 'react'
import Layout from '../layouts/_Layout'

export default function profile() {
    return (
        <Layout>
            <div className="container text-white my-5">
            <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card bg-black h-100">
                <div className="card-body">
                    <div className="account-settings">
                        <div className="user-profile">
                            <div className="user-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"></img>
                            </div>
                            <h5 className="user-name">Yuki Hayashi</h5>
                            <h6 className="user-email">yuki@Maxwell.com</h6>
                        </div>
                        <div className="about">
                            <h5>About</h5>
                            <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card bg-black h-100">
                <div className="card-body">
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h6 className="mb-2 text-primary">Personal Details</h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="fullName">Username</label>
                                <input type="text" className="form-control bg-dark border-secondary" id="fullName" placeholder="Enter full name"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="eMail">Email</label>
                                <input type="email" className="form-control bg-dark border-secondary" id="eMail" placeholder="Enter email ID"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" className="form-control bg-dark border-secondary" id="phone" placeholder="Enter phone number"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="website">Website URL</label>
                                <input type="url" className="form-control bg-dark border-secondary" id="website" placeholder="Website url"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h6 className="mt-3 mb-2 text-primary">Address</h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="Street">Street</label>
                                <input type="name" className="form-control bg-dark border-secondary" id="Street" placeholder="Enter Street"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="ciTy">City</label>
                                <input type="name" className="form-control bg-dark border-secondary" id="ciTy" placeholder="Enter City"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="sTate">State</label>
                                <input type="text" className="form-control bg-dark border-secondary" id="sTate" placeholder="Enter State"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="zIp">Zip Code</label>
                                <input type="text" className="form-control bg-dark border-secondary" id="zIp" placeholder="Zip Code"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="my-2 p-1 text-right d-flex justify-content-between">
                                <button type="button" id="submit" name="submit" className="btn btn-danger">Cancel</button>
                                <button type="button" id="submit" name="submit" className="btn btn-success">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </Layout>
    )
}


{/* <div className="mt-4 w-100 h-75">
                <div className="border border-white w-50 h-100 mx-auto">
                    
                </div>
            </div> */}