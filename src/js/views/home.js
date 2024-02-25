import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router";


export const Home = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	console.log(store.contacts);
	useEffect(() => {
		actions.getContacts();
	}, [])

	const handlerEdit = async (contacts) => {
		navigate("/edit", { state: { contacts } })
	}

	const handlerDelete = async (id) => {

		try {
			const updatedList = store.contacts.filter((contacts) => contacts.id !== id);
			store.contacts = updatedList;
			await actions.deleteContact(id);
		}
		catch (error) {
			console.log(error)
		}

	}

	return (

		<div className="text-center mt-6">

			{store.contacts.map((item, index) => (

				<div key={index} className="card mb-5" style={{ maxWidth: "540px" }}>
					<div className="Cartas">
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://lapi.com.mx/web/image/product.template/5138/image_1024?unique=ba3c5a9" className="img-fluid rounded-start" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">

									<div className="icons">
										<i className="fa-solid fa-trash" onClick={() => handlerDelete(item.id)}></i>
										<i className="fa-solid fa-pen-to-square" onClick={() => handlerEdit(item, item.id)}></i>
									</div>


									<h5 className="card-title">{item.full_name}</h5>
									<p className="card-text">{item.email}</p>
									<p className="card-text">{item.phone}</p>
									<p className="card-text"><i className="fa-solid fa-location-dot"></i>{item.address}</p>

								</div>
							</div>
						</div>
					</div>
				</div>

			)
			)}

		</div>

	)
};
