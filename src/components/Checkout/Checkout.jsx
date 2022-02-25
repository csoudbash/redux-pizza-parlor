import {useSelector} from 'react-redux';
import Header from "../Header/Header";
import React from 'react-dom';





function Checkout(){



    // const menuList = useSelector(store => store.menuList);
    const customerReducer = useSelector(store => store.customerReducer);



    return(
        <>
        <Header />
        <h1>Checkout</h1>

        <ul>
            {customerReducer.map((customer, i) => {
                return  <p key={i}>
                    {customer.name}
                </p>
            })}
        </ul>
            
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* {menuList.map((pizza, i) => {
                            return <td key={i}>{pizza.name}</td>
                        })}
                        {menuList.map((pizza, i) => {
                            return <td key={i}>{pizza.price}</td>
                        })} */}
                    </tr>
                </tbody>

            </table>
            

        </>
    )
}
export default Checkout;