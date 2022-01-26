//3rd Party Modules
import { useEffect, useState } from 'react';
import axios from 'axios';

//Local Modules
import DisplayItem from './DisplayItem';

export default function Window3(props){
    //List is the List of Items to be rendered on Window3
    const [list, setList] = useState([]);
    
    //This state will indicate whether there is any change in the window3, due to delete or edit 
    //so that it can re render with updated List 
    const [window3Changed, setWindow3Changed] = useState(false);

    //To fetch the data whenever the window2 or window3 changes
    useEffect(()=>{        
        axios.get(process.env.REACT_APP_BACKEND_URL)
        .then((response)=>{
            setList(response.data.data);
       }).catch((err)=>{
       });
    },[window3Changed, props.window2Changed]);
    
    //Simple rendering of List with the Map function
    //The details of props will be discussed in the Child Component
    return <>
        <h2  style={{color:'#0000ff'}}>List of the Items</h2>
        { 
            list && list.map(listItem =>{
                return <DisplayItem 
                key={listItem.id} 
                listItem={listItem} 
                setData={props.setData} 
                setEdit={props.setEdit} 
                setWindow3Changed={setWindow3Changed}
                />
            })
        }
    </>
}
