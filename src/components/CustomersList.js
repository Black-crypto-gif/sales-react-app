import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default class CustomersList extends Component {

    state = {
        customers: []
    }

    async componentDidMount() {

        const res = await Axios.get("http://localhost:4000/api/customers");
        this.setState({ customers: res.data });
        console.log(res);
    }

    render() {
        return (
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-12">
                        <div className="page-header">
                            <h4 className="my-4 ml-4" >Customer List</h4>
                        </div>
                    </div>
                </div>
                

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col-sm-4">
                                        <Link className="btn btn-primary" to="/createCustomer" >Create Customer</Link>
                                    </div>
                                    <div className="col-sm-8">
                                        
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <div className="row">
                                        <div className="col-sm-12">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">FirstName</th>
                                                    <th scope="col">LastName</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.customers.map( customer =>
                                                    <tr key={customer._id} >
                                                        <th scope="row">{customer.uniqueId}</th>
                                                        <td>{customer.firstName}</td>
                                                        <td>{customer.lastName}</td>
                                                        <td>{customer.email}</td>
                                                        <td><Link to={"/customers/"+customer._id} >Edit</Link></td>
                                                    </tr>
                                                    )
                                                }   
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

            </div>

        )
    }
}
