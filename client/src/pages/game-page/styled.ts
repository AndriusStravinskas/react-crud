import { styled, Box, Typography } from '@mui/material';

export const GamePageFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const SwiperBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '200px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '300px',
  },
  [theme.breakpoints.up('md')]: {
    width: '300px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '500px',
  },
}));

export const TitleSmall = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const TitleBig = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    marginBottom: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 50,
  },
}));
