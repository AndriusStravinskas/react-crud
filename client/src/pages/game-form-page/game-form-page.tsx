import {
  Stack,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import React from 'react';
import ApiService from 'services/api-service';
import { useNavigate } from 'react-router-dom';
import ImagesField from './images-field';
import LocationField from './location-field';
import * as Styled from './styled';
import { btnColorModeMap, btnModeMap, titleModeMap } from './data';
import { formatValues } from './helpers';

type GameFormPageProps = {
  mode?: 'create' | 'update'
};

const GameFormPage: React.FC<GameFormPageProps> = ({
  mode = 'create',
}) => {
  const navigate = useNavigate();
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      console.log(values);
      await ApiService.createGame(values);
      navigate('/');
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>{titleModeMap[mode]}</Typography>
        <Stack sx={{ gap: 2, my: 2 }}>

          <TextField label="Title" fullWidth variant="filled" name="title" required />
          <LocationField />
          <ImagesField />
          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
          />
          <TextField
            id="filled-multiline-static"
            label="Description"
            multiline
            fullWidth
            rows={4}
            variant="filled"
            name="description"
            required
          />
          <TextField label="Category" fullWidth variant="filled" name="category" required />
          <TextField label="Condition" fullWidth variant="filled" name="condition" required />

          <Stack alignItems="center">
            <Button type="submit" color={btnColorModeMap[mode]} variant="contained">{btnModeMap[mode]}</Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default GameFormPage;
