import axios from 'axios';
import {useEffect} from 'react';

function PizzaOptions(){

    useEffect(() => {
        getMenu();
      }, []);

    const getMenu = () => {
        console.log('getMenu');
        axios.get('/api/pizza').then(response => {
            console.log('response', response.data);
        })
    }


    return(
        <>

        </>
    )
}
export default PizzaOptions;