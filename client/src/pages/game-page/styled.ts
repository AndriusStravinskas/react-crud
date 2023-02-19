import { styled, Box } from '@mui/material';

export const GamePageFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '300px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));
