import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

function MenuItem({menuItem}){
    const dispatch = useDispatch();

    const [status,setStatus] = useState(false)
  

    const changeStatus = (boolean) => {
        setStatus(boolean)    
        if (boolean === true) {
            // console.log('its true', !status);
            dispatch({
                type: 'ADD_PIE',
                payload: {name: menuItem.name,
                    price: menuItem.price},
            });
           
        } else {
            // dispatch({
            //     type: 'REMOVE_PIE',
            //     payload: {name: menuItem.name,
            //         price: menuItem.price},
            // });
            // console.log('is false')
        }
    }

    // console.log(`Status of ${menuItem.name} is ${status}`);
    return(
        <>
        <div className="card">
            <img src={menuItem.image_path} height={100} width={100}/>
            <h3>{menuItem.name}</h3>
            <p className="description">{menuItem.description}</p>
            <p className="priceTag">{menuItem.price}</p>
            <button onClick={()=>changeStatus(!status)}>Add To Cart</button>
        </div>
        </>
    )
}
export default MenuItem;