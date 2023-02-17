import { styled, Box } from '@mui/material';

export const AdminActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  gap: theme.spacing(1),
  top: theme.spacing(1),
  right: theme.spacing(1),
}));
