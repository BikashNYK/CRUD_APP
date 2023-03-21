import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { deletes } from './Action/delete.action';
import { toast } from 'react-toastify'
import './Home.css'
const Home = () => {

  const contacts = useSelector((state)=>{
    return state.contactReducer
  })
  const dispatch = useDispatch();
  const deleteData = (id) => {

    
    dispatch(deletes(id));
    toast.success("Data Deleted Successfully");
  }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 my-5 text-right'>
                <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
            </div>
            <div className='col-md-6 mx-auto'>
              <table className='table table-hover'>
                <thead className='text-white bg-dark text-center'>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Number</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts?.map((e,id)=>{
                    return (
                      <tr key={id} >
                        <td>{id+1}</td>
                        <td>{e.name}</td>
                        <td>{e.number}</td>
                        <td>{e.email}</td>
                        <td>
                          <Link to={`/edit/${e.id}`} className="btn btn-smaill btn-primary mr-2">Edit</Link>
                          <button className='btn btn-small btn-danger my-1' onClick={()=>{deleteData(e.id)}}>Delete</button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            </div>
    </div>
  )
}

export default Home