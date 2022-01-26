import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Paper, Stack } from '@mui/material';
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Window2(props){
    const {data, editingMode} = props;
    const [count, setCount] = useState(0);

    const [value, setValue] = useState({
        title: editingMode? data.title : '',
        description:editingMode? data.description : '',
    });

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

    const clickHandler = async(event) => {
        event.preventDefault();
        console.log(value);
        axios({
            method:"POST",
            url:`${process.env.REACT_APP_BACKEND_URL}`,
            data:{
                title:value.title,
                description:value.description,
                isCompleted:false
            }
        })
        .then(()=>{
            console.log("Successful");
            refreshInput();
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return <>
    <h2 style={{color:'#1976d2'}}>Add the Item</h2>
    <form>
        <Stack spacing={2}>
            <TextField id="outlined-basic" label="Title" name="title" value={value.title} onChange={inputChangeHandler} variant="outlined" />
            <TextField id="outlined-basic" label="Description" name="description" value={value.description} onChange={inputChangeHandler} variant="outlined" />
            <Stack spacing={1} direction="row">
                <Button onClick={clickHandler} fullWidth variant="outlined" startIcon={ editingMode ? <ArrowUpwardIcon/> : <AddIcon /> }>{ editingMode ?  'Update' : 'Add' }</Button>
                <Button onClick={refreshInput} fullWidth variant="outlined" startIcon={<RefreshIcon />}>Clear Input</Button>
            </Stack>
            <Paper sx={{textAlign:'center'}} elevation={4}> <h4>Number of Times the User called Add & Update API: {count} </h4></Paper>
        </Stack>
    </form>
    </>
}