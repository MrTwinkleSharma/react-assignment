//3rd Party Modules
import { useEffect, useState } from 'react';
import { Paper, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

//This window2 is the most responsible and heaviest component
export default function Window2(props){
    //The data is came from the App, either from initals or after manipulation of setData from window3
    //The EditingMode is to determine whether the Window2 is on editingMode or Adding Mode
    //The setWindow2Changed is used to set that window2 has changed so that window3 can re render
    const {data, editingMode, setWindow2Changed, setEditingMode} = props;

    //This count will be used to store the number of times user uses the Add or Update API,
    //And will be stored in the localStorage for Data Persistence, 
    //otherwise we have to use another collection in Database
    const [count, setCount] = useState(0);

    //Setting Inital Value of Form 
    const [value, setValue] = useState({
        title: '',
        description: ''
    });
    
    //To set the value if form is going to be on editing mode, by the data which came from the Window3 
    //And storage of Count in Local Storage
    useEffect(()=>{
        setValue({
            title: data.title,
            description: data.description
        })
        const initialCount = localStorage.getItem('count');
        setCount(initialCount);
    }, [data]);
    
    //This is used for controlled input
    const inputChangeHandler = (event)=>{
        if(event.target.name=='title'){
            setValue({
                ...value, title:event.target.value
            })
        }
        if(event.target.name=='description'){
            setValue({
                ...value, description:event.target.value
            })
        }
    }
    //To refresh input fields
    const refreshInput = ()=>{
        setValue({title:'', description:''});
    }

    //To discard the editing of The existing item and setting editing mode to false again 
    //and refreshing input
    const discardHandler = ()=>{
    	if(editingMode){
    	    setEditingMode(prevState=>!prevState);
		}
		refreshInput();
    }

    //To submit the POST request on the server
    const submitHandler = async(event) => {
        event.preventDefault();
        if(editingMode)
            axios({
                method:"PATCH",
                url: `${process.env.REACT_APP_BACKEND_URL}/${data.id}`,
                data:JSON.stringify({
                    title:value.title,
                    description:value.description,
                }),
                headers: { "Content-Type": "application/json" }
            })
            .then(()=>{
                refreshInput();
                setWindow2Changed(prevState=>!prevState);
                setCount(prevState=>prevState+1);
                setEditingMode(prevState=>!prevState);

                let tempCount = count + 1;
                localStorage.setItem('count', tempCount);

            })
            .catch((err)=>{
            })

        else
            axios({
                method:"POST",
                url:process.env.REACT_APP_BACKEND_URL,
                data:JSON.stringify({
                    title:value.title,
                    description:value.description,
                }),
                headers: { "Content-Type": "application/json" }
            })
            .then(()=>{
                refreshInput();
                setWindow2Changed(prevState=>!prevState);
                setCount(prevState=>prevState+1);
                
                let tempCount = count + 1;
                localStorage.setItem('count', tempCount);
            })
            .catch((err)=>{
            })
    }
    return <>
    <h2 style={{color:'#0000ff'}}>Add the Item</h2>
    <form>
        <Stack spacing={2}>
            <TextField id="outlined-basic" label="Title" name="title" value={value.title} onChange={inputChangeHandler} variant="outlined" />
            <TextField id="outlined-basic" label="Description" name="description" value={value.description} onChange={inputChangeHandler} variant="outlined" />
            <Stack spacing={1} direction="row">
                <Button style={{color:'#0000ff', border:'1px solid #0000ff'}} onClick={submitHandler} fullWidth variant="outlined" startIcon={ editingMode ? <ArrowUpwardIcon/> : <AddIcon /> }>{ editingMode ?  'Update' : 'Add' }</Button>
                <Button style={{color:'#0000ff', border:'1px solid #0000ff'}} onClick={discardHandler} fullWidth variant="outlined" startIcon={editingMode ? <ClearIcon/> : <RefreshIcon />}> {editingMode ? 'Discard' : 'Clear Input'}</Button>
            </Stack>
            <Paper sx={{textAlign:'center'}} elevation={4}> <h4>Number of Times the User called Add & Update API: {count} </h4></Paper>
        </Stack>
    </form>
    </>
}
