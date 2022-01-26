import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { useEffect, useState } from 'react';
import { Paper, Stack } from '@mui/material';
import axios from 'axios';

import * as React from 'react';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  elevation:0,
//   color: theme.palette.text.secondary,
}));

export default function DisplayItem(props){
    const {listItem, setEdit, setData, setListChanged} = props;

    const changeCompleted = ()=>{
        axios({
            method:"PATCH",
            url:`${process.env.REACT_APP_BACKEND_URL}/${listItem.id}`,
        })
        .then(()=>{
            console.log("Successful");
            listItem.isCompleted = !listItem.isCompleted ;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const editItem = ()=>{
        setData(listItem);
        setEdit(prevState =>!prevState);
    }
    const deleteItem = ()=>{
        setListChanged(prevState =>!prevState);
    }
    return <Item>
        <Stack spacing={2} sx={{alignContent:'center'}}>
            <h3> {listItem.title} </h3>
            <h3> {listItem.description} </h3> 
        </Stack>
        <br/>
        <Stack spacing={2} sx={{alignContent:'center', display: 'flex'}}>
            <Stack spacing={1} direction="row">
                <Button variant="outlined" onClick={editItem} startIcon={<EditIcon />}> Edit </Button>
                <Button variant="outlined" onClick={deleteItem} startIcon={<DeleteIcon />}> Delete </Button>
    
                <Button variant="outlined" onClick={changeCompleted} startIcon={<PlaylistAddIcon/>} disabled={!listItem.isCompleted}> Mark as Completed </Button>
                <Button variant="outlined" onClick={changeCompleted} startIcon={<PlaylistAddCheckIcon/>} disabled={listItem.isCompleted}> Task Completed </Button>
            </Stack>
        </Stack>
    </Item>
}