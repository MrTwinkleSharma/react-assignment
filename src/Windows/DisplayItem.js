import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Paper, Stack } from '@mui/material';
import axios from 'axios';

import * as React from 'react';
import { styled } from '@mui/material/styles';


import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  elevation:0,
//   color: theme.palette.text.secondary,
}));

export default function DisplayItem(props){
    const {listItem, setEdit, setData} = props;
    
    const editItem = ()=>{
        setData({
            id:listItem.id,
            title:listItem.title,
            description:listItem.description            
        });
        setEdit(prevState =>!prevState);
    }
    const deleteItem = ()=>{
            axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_BACKEND_URL}/${listItem.id}`,
            headers: { "Content-Type": "application/json" }
          }).then(()=>{
            props.setWindow3Changed(prevState=>!prevState);
          }).catch((err)=>{
            console.log(err);
          })
    }

    return <>
    <Item>

        <Grid container spacing={2}>
        <Grid item xs={8} md={10}>
        <Stack spacing={1} sx={{alignContent:'left'}}>
            <h3 style={{textDecoration:'underline'}} > {listItem.title} </h3>
            <h4 style={{color:'#454444'}}> {listItem.description} </h4> 
        </Stack>
      </Grid>
      <Grid item xs={4} md={2} style={{marginTop:'auto', marginBottom:'auto'}}>

        <Stack spacing={0.5} sx={{alignContent:'center', display: 'flex'}}>
                <Button  style={{color:'#0000ff', border:'1px solid #0000ff'}} variant="outlined" onClick={editItem} startIcon={<EditIcon />} > Edit </Button>
                <Button  style={{color:'#0000ff', border:'1px solid #0000ff'}} variant="outlined" onClick={deleteItem} startIcon={<DeleteIcon />}> Delete </Button>
        </Stack>
        </Grid>
        </Grid>
        
    </Item>
    <br/>
    </>
}