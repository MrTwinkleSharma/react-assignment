import { useEffect, useState } from 'react';
import axios from 'axios';

import DisplayItem from './DisplayItem';

export default function Window3(props){
    const [list, setList] = useState([]);
    const [window3Changed, setWindow3Changed] = useState(false);

    useEffect(()=>{        
        axios.get(process.env.REACT_APP_BACKEND_URL)
        .then((response)=>{
            setList(response.data.data);
       }).catch((err)=>{
       });
    },[window3Changed, props.window2Changed]);
    
    return <>
        <h2  style={{color:'#0000ff'}}>List of the Items</h2>
        { 
            list && list.map(listItem =>{
                return <DisplayItem key={listItem.id} listItem={listItem} setData={props.setData} setEdit={props.setEdit} setWindow3Changed={setWindow3Changed}/>
            })
        }
    </>
}
