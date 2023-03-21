import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import {toast} from 'react-toastify'
import { addData } from './Action/add.action';
import { useNavigate } from 'react-router-dom'
const Add = () => {

  const [name, setname] = useState("")
  const [number, setnumber] = useState("")
  const [email, setemail] = useState("")
  const contacts = useSelector ((State)=>{
    return State.contactReducer
  })
  // console.log(contacts);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()


    const checkEmail = contacts.find((e) => {
      return e.email === email && email
    } )
    const contactNumber = contacts.find((e) => {
      return e.number === parseInt(number)
    } )
    // console.log(checkEmail);
    
    // console.log(contactNumber);
    
    // the && email is to ensure that there is values in email
    // const checkEmail = contacts.find((e) => e.email === email && email )

    if(!email || !name || !number){
      return toast.warning("Please fill in all fields!")
    }

    if(checkEmail){
      return toast.error("This email is already Exists")
    }
    if(contactNumber){
      return toast.error("This number is already exists")
    }

    const data = {
      id :  contacts[contacts.length-1].id + 1,
      name,
      number,
      email,
    }
    // console.log(data);
    // 

    dispatch(addData(data))
    toast.success("Student Added Successfully")
    setemail('')
    setname('')
    setnumber('')
    navigate('/')
  }

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='display-3 my-5 text-center'>
          Add Contact
        </h1>
        <div className='col-md-6 shadow mx-auto p-2'>
          <form>
            <div className='form-group p-2'>
              <input type="text" placeholder='Name' className='form-control' 
               value={name} onChange={(e)=>setname(e.target.value)}   />
            </div>
            <div className='form-group p-2'>
              <input type="text" placeholder='Email' className='form-control' 
                value={email} onChange={(e) => setemail(e.target.value)} />
            </div>
            <div className='form-group p-2'>
              <input type="number" placeholder='Phone number' className='form-control' 
                value={number} onChange={(e) => setnumber(e.target.value)} />
            </div>
            <div className='form-group p-2'>
              <input type="submit" value="Add Student" className='btn btn-block btn-dark' onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add