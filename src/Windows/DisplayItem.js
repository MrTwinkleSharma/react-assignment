//3rd Party Modules
import { styled } from '@mui/material/styles';
import { Paper, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';

//Item Component to display each item
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  elevation:0,
}));

//This Component will be used to display the each component of window3 
//It has direct relationship with window3 only
export default function DisplayItem(props){
  
    //ListItem is the item to be rendered
    //setEdit is to set Editing mode on in the window2 when user press edit button inside window3 
    //setData is the data to send to window2 for edit
    const {listItem, setEdit, setData} = props;
    
    //The function to handle the edit button press
    const editItem = ()=>{
      //Set Data and its id to be manipulated in the window2
        setData({
            id:listItem.id,
            title:listItem.title,
            description:listItem.description            
        });

        //Setting editingMode to true
        setEdit(prevState =>!prevState);
    }

    //Delete an Item, Simple send a request to backend
    const deleteItem = ()=>{
      axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_BACKEND_URL}/${listItem.id}`,
        headers: { "Content-Type": "application/json" }
      }).then(()=>{
        props.setWindow3Changed(prevState=>!prevState);
      }).catch((err)=>{
      })
    }

    //Simple return statement to return some jsx content
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