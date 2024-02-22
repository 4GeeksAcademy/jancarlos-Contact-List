const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contact: []
		},
		actions: {

			GetContact: () => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/Jancarlos`)
					.then((result) => result.json())
					.then((data) => {
						let store = getStore()
						setStore({ ...store, contact: data });
						console.log("Contacts obtained successfully: ", data);
					})
					.catch((error) => {
						console.log("Error getting contacts: ", error);
					});

			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
