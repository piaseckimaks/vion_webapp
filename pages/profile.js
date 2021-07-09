import React from 'react'
import Layout from '../layouts/_Layout'
import useUser from '../util/useUser'

export default function profile() {
    const { user, mutateUser } = useUser({ redirectTo: true, redirectIfFound: false })

    

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
                                <i className="bi bi-person-circle" style={{fontSize: 100}}></i>
                            </div>
                            <h5 className="text-capitalize user-name" onMouseOver={()=> console.log('onmouseover')} >{user?.name}</h5>
                            <h6 className="user-email">maksym.piasecki@vionfood.com</h6>
                        </div>
                        <div className="about">
                            <h5>About</h5>
                            <p>I'm Maksym. Full Stack Developer and Field Service Engneer. I enjoy solving problems, in software as in hardware.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card bg-black h-100">
                <div className="card-body">
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-between">
                            <h6 className="mb-2 text-primary">Personal Details</h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                            <div className="form-group">
                                <label for="fullName">Full Name</label>
                                <input type="text" className="form-control bg-dark border-secondary text-white" id="fullName" placeholder={user?.name}></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="eMail">Email</label>
                                <input type="email" className="form-control bg-dark border-secondary text-white" id="eMail" placeholder="Enter email ID"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" className="form-control bg-dark border-secondary text-white" id="phone" placeholder="Enter phone number"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="website">Website URL</label>
                                <input type="url" className="form-control bg-dark border-secondary text-white" id="website" placeholder="Website url"></input>
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
                                <input type="name" className="form-control bg-dark border-secondary text-white" id="Street" placeholder="Enter Street"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="ciTy">City</label>
                                <input type="name" className="form-control bg-dark border-secondary text-white" id="ciTy" placeholder="Enter City"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="sTate">State</label>
                                <input type="text" className="form-control bg-dark border-secondary text-white" id="sTate" placeholder="Enter State"></input>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="zIp">Zip Code</label>
                                <input type="text" className="form-control bg-dark border-secondary text-white" id="zIp" placeholder="Zip Code"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="my-2 p-1 text-right d-flex justify-content-between">
                                <button type="button" id="submit" name="submit" className="btn btn-danger">Cancel</button>
                                <button type="button" id="submit" name="submit" className="btn btn-success">Save</button>
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