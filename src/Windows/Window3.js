import { useEffect, useState } from 'react';
import axios from 'axios';

import DisplayItem from './DisplayItem';

export default function Window3(props){
    const [list, setList] = useState([]);
    const [changed, setChanged] = useState(false);

    useEffect(()=>{        
        axios.get(process.env.REACT_APP_BACKEND_URL)
        .then((response)=>{
            console.log(response.data)
            setList(response.data);
       }).catch((err)=>{
            console.log(err);
       });
    },[changed]);
    
    return <>
        <h2  style={{color:'#1976d2'}}>List of the Items</h2>
        { 
            list && list.map(listItem =>{
                return <DisplayItem listItem={listItem} props/>
            })
        }
    </>
}