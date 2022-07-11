import React from 'react'

function CreateUser() {
    return (
        <>
        <h1>WELCOME</h1>
        <div className='container'>
            <form>

                <div className='row'>
                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input type={"text"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>Position</label>
                        <input type={"text"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>Age</label>
                        <input type={"number"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>date</label>
                        <input type={"date"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>Salary</label>
                        <input type={"number"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                        <label>State</label>
                        <input type={"text"} className="form-control" />
                    </div>
                    <div className='col-lg-6'>
                      <input type={"submit"} className="btn btn-primary" />

                    </div>


                </div>

            </form>
        </div>
    </>
    )
}

export default CreateUser