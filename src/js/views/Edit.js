// import React, { useState, useContext } from 'react'
// import { Link, useParams, useNavigate } from "react-router-dom";
// import { Context } from '../store/appContext';
// import { useLocation } from 'react-router-dom';

// const Edit = () => {
//     const { store, actions } = useContext(Context);
//     const params = useParams()
//     const location = useLocation()
//     const { contacts } = location.state
//     const [updateName, setUpdateName] = useState(contacts.full_name)
//     const [updateEmail, setUpdateEmail] = useState(contacts.email)
//     const [updatePhone, setUpdatePhone] = useState(contacts.phone)
//     const [updateAddress, setUpdateAddress] = useState(contacts.address)

//     const navigate = useNavigate()

//     const handlerEdit = async () => {
//         try {
//             if (updateName === "" || updateEmail === "" || updatePhone === "" || updateAddress === "") {
//                 alert("no se aceptan espacios vacios")
//                 return;
//             }

//             const updatedContact = {
//                 full_name: updateName,
//                 email: updateEmail,
//                 phone: updatePhone,
//                 address: updateAddress,
//                 agenda_slug: "Jancarlos"
//             };
//             await actions.editContact(updatedContact, contacts.id);
//             navigate("/")
//         }

//         catch (error) {
//             console.log(error)
//         }

//         return (
//             <div>
//                 <div className="addContainer">

//                     <div className="mb-3">
//                         <label className="form-label">Full name:</label>
//                         <input type="text" className="form-control" name='full_name' value={updateName} onChange={(e) => setUpdateName(e.target.value)} id="formGroupExampleInput" placeholder="Full name" />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Email:</label>
//                         <input type="text" className="form-control" name='email' value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} id="formGroupExampleInput" placeholder="Enter Email" />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Phone:</label>
//                         <input type="text" className="form-control" name='phone' value={updatePhone} onChange={(e) => setUpdatePhone(e.target.value)} id="formGroupExampleInput" placeholder="Enter Phone" />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Adress:</label>
//                         <input type="text" className="form-control" name='address' value={updateAddress} onChange={(e) => setUpdateAddress(e.target.value)} id="formGroupExampleInput" placeholder="Enter Address" />
//                     </div>

//                     <div className="d-grid gap-2">
//                         <button className="btn btn-primary large-buttom" onClick={handlerEdit} type="button">Save</button>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default Edit
import React, { useState, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';
import { useLocation } from 'react-router-dom';

const Edit = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    const location = useLocation()
    const { contacts } = location.state
    const [updateName, setUpdateName] = useState(contacts.full_name)
    const [updateEmail, setUpdateEmail] = useState(contacts.email)
    const [updatePhone, setUpdatePhone] = useState(contacts.phone)
    const [updateAddress, setUpdateAddress] = useState(contacts.address)

    const navigate = useNavigate()

    const handlerEdit = async () => {
        try {
            if (updateName === "" || updateEmail === "" || updatePhone === "" || updateAddress === "") {
                alert("no se aceptan espacios vacios")
                return;
            }

            const updatedContact = {
                full_name: updateName,
                email: updateEmail,
                phone: updatePhone,
                address: updateAddress,
                agenda_slug: "Jancarlos"
            };
            await actions.editContact(updatedContact, contacts.id);
            navigate("/")
        }

        catch (error) {
            console.log(error)
        }

    }

    return (

        <div>

            <div className="centro">
                <div className="mb-3">
                    <label className="form-label">Full name:</label>
                    <input type="text" className="form-control" name='full_name' value={updateName} onChange={(e) => setUpdateName(e.target.value)} id="formGroupExampleInput" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" name='email' value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} id="formGroupExampleInput2" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone:</label>
                    <input type="number" className="form-control" name='phone' value={updatePhone} onChange={(e) => setUpdatePhone(e.target.value)} id="formGroupExampleInput" placeholder="Enter phone" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Adress:</label>
                    <input type="email" className="form-control" name='address' value={updateAddress} onChange={(e) => setUpdateAddress(e.target.value)} id="formGroupExampleInput2" placeholder="Enter address" />
                </div>
                <button type="button" className="btn btn-primary" onClick={handlerEdit}>
                    Save
                </button>
            </div>

        </div>
    )
}

export default Edit