import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

function Header() {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        totalCounter();
    }, []);

    const pizzaList = useSelector(store => store.selectedPizzas)
    const totalCounter = () =>{
        let count = 0
        for (let pizza of pizzaList) {
            count += Number(pizza.price);
        }
        setTotal(count)
    }

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <h2>Total: {total}</h2>
        </header>
    )
}
export default Header;

