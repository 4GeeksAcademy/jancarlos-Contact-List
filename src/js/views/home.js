import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context)

	console.log(store.contact)
	useEffect(() => {
		actions.GetContact()
	}, [])

	return (
		<div className="text-center mt-5">
{store.contact.map((item,index)=>(
			<div key={index} className="card mb-3" style={{maxWidth: "540px"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://lapi.com.mx/web/image/product.template/5138/image_1024?unique=ba3c5a9" className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{item.full_name}</h5>
							<p className="card-text">{item.email}</p>
							<p className="card-text">{item.phone}</p>
							<p className="card-text"><i class="fa-solid fa-location-dot"></i>{item.address}</p>
						</div>
					</div>
				</div>
			</div>
)
)}
		</div>
	)
};
