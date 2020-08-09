import React, { Component } from 'react'
import axios from 'axios'

export default class CreateCustomer extends Component {


    state = {
        otro: 'algomas',
        customer: {}
    }

    async componentDidMount() {
        //const custumerId = params.id;
        const customerId = 234;
        //const customer = await axios.get("http://localhost:4000/api/customers/"+customerId);
        //this.setState()
    }

    saveCustomer = async (e) => {

        e.preventDefault();

        const newCustomer = await axios.post("http://localhost:4000/api/customers",this.state.customer);
        console.log("createdCustomer",newCustomer);

        this.setState({customer:{}});
        
    }


    printState = () => {
        console.log("printing state",this.state);
    }
    
    

    render() {
        return (
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-12">
                        <div className="page-header">
                            <h4 className="my-4 ml-4" >Create Customer</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="container">
                                            <form onSubmit={this.saveCustomer} >
                                                <div className="form-group">
                                                    <label htmlFor="uniqueId">Unique ID</label>
                                                    <input type="text" className="form-control" id="uniqueId" value={this.state.customer.uniqueId || ''} required  onChange={(e) => {
                                                            let newValue = e.target.value;
                                                            this.setState(prevState => ({
                                                                    customer: {                   
                                                                        ...prevState.customer,    
                                                                        uniqueId: newValue       
                                                                    }
                                                                })
                                                            );
                                                        }
                                                        
                                                    } />
                                                </div>
                                                {/*
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="firstName">First Name</label>
                                                        <input type="text" className="form-control" id="firstName"  />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="lastName">Last Name</label>
                                                        <input type="text" className="form-control" id="lastName"  />
                                                    </div>
                                                </div>
                                                */}
                                                <div className="form-group">
                                                        <label htmlFor="firstName">First Name</label>
                                                        <input type="text" className="form-control" id="firstName" value={this.state.customer.firstName || ''} onChange={(e) => {
                                                            let value = e.target.value;
                                                            this.setState( prevState => ({
                                                            
                                                                customer: {
                                                                    ...prevState.customer,
                                                                    firstName: value
                                                                }
                                                            })) 
                                                        }
                                                    } />
                                                </div>
                                                    <div className="form-group">
                                                        <label htmlFor="lastName">Last Name</label>
                                                        <input type="text" className="form-control" id="lastName" value={this.state.customer.lastName || ''} onChange={(e) => {
                                                            let value = e.target.value;
                                                            this.setState( prevState => ({
                                                                customer: {
                                                                    ...prevState.customer,
                                                                    lastName: value
                                                                }
                                                            }))
                                                        } } />
                                                    </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={this.state.customer.email || ''} onChange={(e) => {
                                                        let value = e.target.value;
                                                        this.setState( prevState => ({
                                                            customer: {
                                                                ...prevState.customer,
                                                                email: value
                                                            }
                                                        }))
                                                    }} />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                                <button type="button" className="btn btn-primary" onClick={this.printState} >Print State</button>
                                                
                                            </form>
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
