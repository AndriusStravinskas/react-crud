import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

type LocationFieldProps = {
  defaultCountry?: string,
  defaultCity?: string
};

const LocationField: React.FC<LocationFieldProps> = ({
  defaultCountry,
  defaultCity,
}) => (
  <Box>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Location</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Country"
        fullWidth
        variant="filled"
        name="country"
        required
        defaultValue={defaultCountry}
      />
      <TextField
        label="City"
        fullWidth
        variant="filled"
        name="city"
        required
        defaultValue={defaultCity}

      />
    </Box>
  </Box>
);

export default LocationField;
