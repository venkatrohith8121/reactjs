import React, { Component } from 'react'

class Prefered extends Component {
    state = {
        citybanglore: false,
        citychennai: false,
        citynewyork: false,
    }
    upadatePreffered = (event) => {
        this.setState({
            [event.target.value]: event.target.checked
        })
    }
    render() {
        return (
            <div>
                <div className="conatiner mt-5">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="form-check">
                                <input 
                                type="checkbox"
                                className="form-check-input" 
                                onClick={this.upadatePreffered}
                                name='citybanglore'
                                />
                                <label className="form-check-label">banglore</label>
                            </div>
                            <div className="form-check">
                                <input 
                                type="checkbox"
                                className="form-check-input" 
                                onClick={this.upadatePreffered}
                                name='citychennai'
                                />
                                <label className="form-check-label">chennai</label>
                            </div>

                            <div className="form-check">
                                <input 
                                type="checkbox"
                                className="form-check-input" 
                                onClick={this.upadatePreffered}
                                name='citynewyork'
                                />
                                <label className="form-check-label">newyork</label>
                            </div>
                            
                            <div className="col-md-10">
                                {this.state.citybanglore ?(<>
                                <div className="card">
                                    <div className="card-body bg-primary">

                                    </div>
                                </div>
                                </> ):null}
                                {this.state.citychennai ?(<>
                                <div className="card">
                                    <div className="card-body bg-primary">

                                    </div>
                                </div>
                                </> ):null}
                                {this.state.citynewyork ?(<>
                                <div className="card">
                                    <div className="card-body bg-primary">
                                        <p>hi</p>
                                    </div>
                                </div>
                                </> ):null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prefered