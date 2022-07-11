import React from 'react'
import { useParams } from 'react-router-dom'

function EditUser() {
  let params = useParams()
  return (
    

    <div className='container'>{params.id}
      <form >

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
            <input type={"number"} className="form-control" />
          </div>
          <div className='col-lg-6'>
            <input type={"submit"} className="btn btn-primary" />

          </div>


        </div>

      </form>
    </div>
  

  )
}

export default EditUser