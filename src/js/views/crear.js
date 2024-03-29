import React, { useState, useContext } from 'react'
import "../../styles/form.css"
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'

const FormAddNewContact = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context);

    const [data, setData] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "Jancarlos"
    })

    const handlerInput = (e) => {
        e.preventDefault();
        actions.addContact(data);
        navigate("/")
    }

    const info = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className="centro">
                <div className="mb-3">
                    <label className="form-label">Full name:</label>
                    <input type="text" className="form-control" name='full_name' onChange={info} value={data.full_name} id="formGroupExampleInput" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" name='email' onChange={info} value={data.email} id="formGroupExampleInput2" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone:</label>
                    <input type="number" className="form-control" name='phone' onChange={info} value={data.phone} id="formGroupExampleInput" placeholder="Enter phone" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Adress:</label>
                    <input type="email" className="form-control" name='address' onChange={info} value={data.address} id="formGroupExampleInput2" placeholder="Enter address" />
                </div>
                <button type="button" className="btn btn-primary" onClick={handlerInput}>
                    Save
                </button>
            </div>
        </div>
    );
}



//     const [data, setData] = useState({
//         full_name: "",
//         address: "",
//         email: "",
//         phone: "",
//         agenda_slug: "Jancarlos"
//     })

//     const handlerInput = (e) => {
//         e.preventDefault();
//         actions.addContact(data);
//         // navigate("/")
//     }

//     const info = (e) => {
//         setData({
//             ...data, [e.target.name]: e.target.value
//         })
//     }

//     return (
//         <div>
//             <div className="centro">
//                 <div className="mb-3">
//                     <label className="form-label">Full Name</label>
//                     <input type="text" className="form-control" onChange={info} value={data.full_name} id="formGroupExampleInput" placeholder="Full Name" />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Address</label>
//                     <input type="text" className="form-control" onChange={info} value={data.address} id="formGroupExampleInput" placeholder="Address" />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input type="text" className="form-control" onChange={info} value={data.email} id="formGroupExampleInput" placeholder="Email" />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Phone</label>
//                     <input type="text" className="form-control" onChange={info} value={data.phone} id="formGroupExampleInput" placeholder="Phone" />
//                 </div>
//                 <button type="button" className="btn btn-primary" onClick={handlerInput}>Save</button>
//             </div>
//         </div>
//     )
// }

export default FormAddNewContact
