import {useState} from 'react'

function MenuItem({menuItem}){

    const [status,setStatus] = useState(false)

    const changeStatus = () => {
        setStatus(!status)
    }

    console.log(`Status of ${menuItem.name} is ${status}`);
    return(
        <>
        <div className="card">
            <img src={menuItem.image_path} height={100} width={100}/>
            <h3>{menuItem.name}</h3>
            <p className="description">{menuItem.description}</p>
            <p className="priceTag">{menuItem.price}</p>
            <button onClick={changeStatus}>Add</button>
        </div>
        </>
    )
}
export default MenuItem;