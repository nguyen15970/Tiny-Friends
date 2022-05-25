import {useState} from 'react';
import { Link } from "react-router-dom";
import { listMenu } from '../../fakeProducts';

const MobileItem = ({text,index,slug,active,onclick}) => {
    const [checkId, setcheckId] = useState(1);
    const handleMenuOnclick = () =>{
        for(let i = 0 ; i< listMenu.length ; i++){
            if(listMenu[i].id === index){
                active = !active
                setcheckId(index)
            }
           
        }
    }
    console.log(checkId)
    return (
        <div>
            <Link to={slug}>
                 <li onClick={handleMenuOnclick} className={checkId == index? 'menu-mobile-item menu-mobile-item-active ':'menu-mobile-item'} key={index}>{text}</li>
            </Link> 
        </div>
    );
}

export default MobileItem;
