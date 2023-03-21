import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { updateData } from './Components/Action/update.action';

const Edit = () => {
    const [name, setname] = useState("");
    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const id = useParams();
    // console.log(parseInt(id.id) + 1);
    const contacts = useSelector((state) => {
        return state.contactReducer;
    });
    const currentContact = contacts.find((contact) => {
        return contact.id === parseInt(id?.id);
    });
    // console.log(currentContact);

    useEffect(() => {
        if (currentContact) {
            setname(currentContact.name);
            setemail(currentContact.email);
            setnumber(currentContact.number);
        }

    }, [currentContact]);


    const handleSubmit = (e) => {
        e.preventDefault();


        const checkEmail = contacts.find((e) => {
            return e.id !== parseInt(id?.id) && e.email === email ;
        });
        const contactNumber = contacts.find((e) => {
            return e.id !== parseInt(id?.id) && e.number === parseInt(number);
        });
        // console.log(checkEmail);

        // console.log(contactNumber);

        // the && email is to ensure that there is values in email
        // const checkEmail = contacts.find((e) => e.email === email && email )

        if (!email || !name || !number) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkEmail) {
            return toast.error("This email is already Exists");
        }
        if (contactNumber) {
            return toast.error("This number is already exists");
        }

        const data = {
            id: parseInt(id?.id),
            name,
            number,
            email,
        };
        // console.log(data);
        // 

        dispatch(updateData(data));
        toast.success("Student Updated Successfully");
        setemail('');
        setname('');
        setnumber('');
        navigate('/');
    }



    return (
        <div className='container'>

            {currentContact ? (
                <div className='row'>
                    <h1 className='display-3 my-5 text-center'>
                        Edit Contact {parseInt(id.id) + 1}
                    </h1>
                    <div className='col-md-6 shadow mx-auto p-2'>
                        <form>
                            <div className='form-group p-2'>
                                <input type="text" placeholder='Name' className='form-control' 
                                    value={name} onChange={(e) => setname(e.target.value)} />
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
                                <input type="submit" value="Update Student" className='btn btn-primary' onClick={handleSubmit} />
                                <Link to='/' className='btn btn-danger mx-2' >Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            ) :
                <h1>Student contact with id {id.id} not present</h1>
            }
        </div>
    );
};

export default Edit;