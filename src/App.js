//3rd Party Modules
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Local Modules
import Window1 from '../src/Windows/Window1';
import Window2 from '../src/Windows/Window2';
import Window3 from '../src/Windows/Window3';

//Creating A Styled Component For Our Grids
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  elevation:12,
  color: theme.palette.text.secondary,
  borderLeft: "5px solid blue",
}));

export default function App() {

  //This state will be used to set Editing Mode On inside the Window2 
  //So that we Can determine whether the Window2 will work as a updater or adder
  const [editingMode, setEditingMode] = useState(false);

  //This State is to pass to Window2 as initial state because according to assignment the Window2 and Window3
  //are at same level so, App.js will beused to communicate between them
  const [dataForEdit, setDataForEdit] = useState({
    title:'',
    description:''
  });

  //This state will indicate the Window3 so that when some change in window2 occur it can be reflected to window3
  const [window2Changed, setWindow2Changed] = useState(false);

  //There is a simple griding in the return Statement
  
  //The details of props passed will be discussed in each window
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item>
            <Window1/>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            <Window2 editingMode={editingMode} setEditingMode={setEditingMode}  data={dataForEdit} setWindow2Changed={setWindow2Changed}/>
          </Item>
        </Grid>
        <Grid item xs={12} md={12}>
          <Item>
            <Window3 setEdit={setEditingMode} setData={setDataForEdit} window2Changed={window2Changed}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
