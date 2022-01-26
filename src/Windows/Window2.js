import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Paper, Stack } from '@mui/material';
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ClearIcon from '@mui/icons-material/Clear';

export default function Window2(props){
    const {data, editingMode, setWindow2Changed, setEditingMode} = props;
    const [count, setCount] = useState(0);

    const [value, setValue] = useState({
        title: '',
        description: ''
    });
    
    useEffect(()=>{
        setValue({
            title: data.title,
            description: data.description
        })
        const initialCount = localStorage.getItem('count');
        console.log("HERe");
        setCount(initialCount);
    }, [data]);
    
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
    const refreshInput = ()=>{
        setValue({title:'', description:''});
    }
    const discardHandler = ()=>{
    	if(editingMode){
    	setEditingMode(prevState=>!prevState);
		}
		refreshInput();
    }

    const submitHandler = async(event) => {
        event.preventDefault();
        // console.log(value);
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
            console.log("Successful");
            refreshInput();
            setWindow2Changed(prevState=>!prevState);
            setCount(prevState=>prevState+1);
            let tempCount = count + 1;
            localStorage.setItem('count', tempCount);
            setEditingMode(prevState=>!prevState);

        })
        .catch((err)=>{
            // console.log(err);
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
            console.log("Successful");
            refreshInput();
            setWindow2Changed(prevState=>!prevState);
            setCount(prevState=>prevState+1);
            let tempCount = count + 1;
            localStorage.setItem('count', tempCount);
        })
        .catch((err)=>{
            // console.log(err);
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
