import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem'
import { useHistory } from 'react-router-dom';



function PizzaOptions() {

    const dispatch = useDispatch();
    const menuList = useSelector(store => store.menuList)


    useEffect(() => {
        getMenu();
    }, []);

    const getMenu = () => {
        console.log('getMenu');
        axios.get('/api/pizza')
            .then(response => {
                console.log('response', response.data);
                dispatch({
                    type: 'APPEND_MENU',
                    payload: response.data
                })
            }).catch(error => {
                console.log('GET menu error:', error);
            })
    }

    const history = useHistory();

    let nextPage = () => {
      console.log('nextPage');
      history.push("/customer-info");
  }



    return (
        <>
            <div className='menu'>
                {menuList.map((menuItem, index) =>
                    <MenuItem
                        key={index}
                        menuItem={menuItem} />
                )}
            </div>
            <button
                className='next-button'
                // value={'CustomerInfo'}
                onClick={()=> nextPage()}
            >Next</button>
        </>
    )
}
export default PizzaOptions;