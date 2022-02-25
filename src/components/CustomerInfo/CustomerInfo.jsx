import { useState } from "react";
import Header from "../Header/Header";
import { useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom';



function CustomerInfo() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');
    // const [customerInfo, setCustomerInfo] = useState();
    const dispatch = useDispatch();

    

    const handleSubmit = (event) => {
        event.preventDefault();

        // setCustomerInfo({name, address, city, zip, type});
        dispatch({
            type: 'ADD_CUSTOMER_INFO',
            payload: {
                name: name,
                address: address,
                city: city,
                zip: zip,
                type: type
            },
            
        })
        history.push("/checkout");
    }

    // reducer to put onto index.js for adding customer info from the second page.


    const history = useHistory();


    return(
        <>
            <Header/>

            <h2>Customer Info</h2>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input 
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                
                    <input 
                    placeholder="Street Address"
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    />
                    
                    <input 
                    placeholder="City"
                    type="text"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    />
                
                    <input 
                    placeholder="Zip"
                    type="text"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                    />

                   <input 
                   type="radio" 
                   name="type"
                   onChange={() => setType('Delivery')}
                   value={type}
                   />
                   <label>Delivery</label>
                   
                   <input 
                   type="radio" 
                   name="type"
                   onChange={() => setType('Pickup')}
                   value={type}
                   />
                   <label>Pickup</label> 
                </form>
                <button
                className='next-button'
                value={'Customer Info'}
                onClick={handleSubmit}
                // onClick={()=>(history.push("/checkout"))}
            >Next</button>
        </>

    )
}
export default CustomerInfo;




