import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Window1() {
  return <>
    <Paper elevation={6} sx={{textAlign:'center'}}>
        <h3  style={{color:'#1976d2'}}>A SIMPLE WEB APP TO TRACK THE TODO ITEMS</h3>
    </Paper>
    <p> How to Use?</p>
    <Paper elevation={6} sx={{textAlign:'center', margin:'5px'}}>
    ADD the New Item from the Form given in the Right side of the Application by entering the Title and Description of the Item.
    <br/>
    Then the Item will be shown in the Window given below.
    <br/>
    If you click on the EDIT icon from any Item the form at the right side will automatically be filled up with the Content of that Item
    and now you can edit the Content.
    <br/>
    To Delete any item just click on the DELETE Icon corresponding to the Item and Confirm when the modal appears.
    </Paper>
    {/* <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: inherit,
          height: inherit,
        },
      }}
    >
    </Box> */}
</>
}
