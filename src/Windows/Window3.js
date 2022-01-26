import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { useEffect, useState } from 'react';
import { Grid, Paper, Stack } from '@mui/material';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  elevation:0,
//   color: theme.palette.text.secondary,
}));

export default function Window3(){
    const [list, setList] = useState();
    const [changed, setChanged] = useState(false);

    useEffect(()=>{

    },[changed]);
    return <>
        <h2  style={{color:'#1976d2'}}>    List of the Items</h2>

          <Item>
            <Stack spacing={2} sx={{alignContent:'center'}}>
                <h3> Title </h3>
                <h3> Description </h3> 
            </Stack>
            <br/>
          <Stack spacing={2} sx={{alignContent:'center', display: 'flex'}}>
            <Stack spacing={1} direction="row">
                <Button variant="outlined" startIcon={<DeleteIcon />}> Delete </Button>
                <Button variant="outlined" startIcon={<EditIcon />}> Edit </Button>
                <Button variant="outlined" startIcon={<PlaylistAddIcon/>}> Mark as Completed </Button>
                <Button variant="outlined" startIcon={<PlaylistAddCheckIcon/>}> Task Completed </Button>
            </Stack>
            </Stack>

        </Item>
    </>
}