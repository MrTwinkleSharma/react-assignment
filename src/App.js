import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Window1 from '../src/Windows/Window1';
import Window2 from '../src/Windows/Window2';
import Window3 from '../src/Windows/Window3';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  elevation:12,
  color: theme.palette.text.secondary,
}));

export default function App() {
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
            <Window2/>
          </Item>
        </Grid>
        <Grid item xs={12} md={12}>
          <Item>
            <Window3/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
