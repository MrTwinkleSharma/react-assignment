//3rd Party Modules
import Paper from '@mui/material/Paper';

//This is the most simple window, here we are going to render some content 
export default function Window1() {
  return <>
    <Paper elevation={6} sx={{textAlign:'center'}}>
        <h3  style={{color:'#0000ff'}}>A SIMPLE WEB APP TO TRACK THE TODO ITEMS</h3>
    </Paper>
    
    <p style={{marginLeft:'4px', marginTop:'35px', marginBottom:'-1px'}}> How to Use?</p>
    
    <Paper elevation={6} sx={{textAlign:'center', margin:'5px', padding:'1px 5px 1px 5px'}}>
      <h5 style={{color:'#000'}}>ADD the New Item from the Form given in the Right side of the Application by entering the Title and Description of the Item.</h5>
      <h5 style={{color:'#000'}}> Then the Item will be shown in the Window given below.</h5>
      <h5 style={{color:'#000'}}> If you click on the EDIT icon from any Item the form at the right side will automatically be filled up with the Content of that Item
      and now you can edit the Content.</h5>
      <h5 style={{color:'#000'}}> To Delete any item just click on the DELETE Icon corresponding to the Item.</h5>
    </Paper>
</>
}
