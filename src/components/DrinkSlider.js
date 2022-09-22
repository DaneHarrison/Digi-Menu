import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [ //use dependency injection here
  {
    value: 0,
    label: '0x',
  },
  {
    value: 25,
    label: '0.5x',
  },
  {
    value: 50,
    label: '1x',
  },
  {
    value: 100,
    label: '2x',
  },
];

export default function DrinkSlider() {
  return (
    <Box sx={{ width: 300 }}>
        <Slider defaultValue={50} step={null} marks={marks} />
    </Box>
  );
}
