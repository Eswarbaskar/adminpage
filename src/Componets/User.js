import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


function User() {

    let User = [
        {
            Id:1,
            Name:"Eswar",
            Position:"CAO",
            Age:"24",
            Date:"20/06/200",
            Salary:"40000",
            state:"TamilNadu"
        },
        {
            Id:2,
            Name:"Aarthy",
            Position:"CAT",
            Age:"23",
            Date:"20/06/200",
            Salary:"70000",
            state:"TamilNadu"
        },
        {
            Id:3,
            Name:"BILLA",
            Position:"DEVELOPER",
            Age:"27",
            Date:"20/06/200",
            Salary:"60000",
            state:"Mumbai"
        }
    ]

    return (
        <>
             <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User-List</h1>
                <Link to={"/createuser"} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Create-list</Link>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th> Name</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>Date</th>
                        <th>Salary</th>
                        <th>state</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            User.map((user,id)=>{
                                return( <tr>
                                    <td>{id+1}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Position}</td>
                                    <td>{user.Age}</td>
                                    <td>{user.Date}</td>
                                    <td>{user.Salary}</td>
                                    <td>{user.state}</td>
                                    <td>
                                        <Link to={`/viewuser/${id+1}`} className="btn btn-primary btn-sm">Viwe</Link>
                                        <Link to={`/edituser/${id+1}`} className="btn btn-warning btn-sm">Edit</Link>
                                        <button className="btn btn-danger btn-sm">Delet</button>
                                    </td>
                                    </tr>)
                       

                            })

                        }
                    
                    
                </tbody>
            </Table>
    


            

        </>
    )
}

export default User