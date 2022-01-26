import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Window1 from '../src/Windows/Window1';
import Window2 from '../src/Windows/Window2';
import Window3 from '../src/Windows/Window3';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  elevation:12,
  color: theme.palette.text.secondary,
  borderLeft: "5px solid blue",

}));

export default function App() {
  const [editingMode, setEditingMode] = React.useState(false);
  const [dataForEdit, setDataForEdit] = React.useState({
    title:'',
    description:''
  });
  const [window2Changed, setWindow2Changed] = React.useState(false);

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
