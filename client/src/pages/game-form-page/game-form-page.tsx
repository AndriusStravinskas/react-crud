import {
  Stack,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import React from 'react';
import ApiService from 'services/api-service';
import { useNavigate, useParams } from 'react-router-dom';
import useGame from 'hooks/useGames';
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

  const { id } = useParams();
  const game = useGame(id);

  if (game === undefined) return null;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);

      if (mode === 'create') {
        console.log('daromas sukurimas');
        await ApiService.createGame(values);
        navigate('/');
      } else {
        console.log('daromas atnaujinimas id:', id);
        console.log(values);
        await ApiService.updateGame(game?.id, values);
        navigate('/');
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  if (mode === 'update' && game === undefined) return null;

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>{titleModeMap[mode]}</Typography>
        <Stack sx={{ gap: 2, my: 2 }}>

          <TextField
            label="Title"
            fullWidth
            variant="filled"
            name="title"
            required
            defaultValue={game?.title}
          />
          <LocationField
            defaultCountry={game?.location.country}
            defaultCity={game?.location.city}
          />
          <ImagesField defaultImages={game?.images} />
          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
            defaultValue={game?.price.slice(0, -1)}

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
            defaultValue={game?.description}
          />
          <TextField
            label="Category"
            fullWidth
            variant="filled"
            name="category"
            required
            defaultValue={game?.category}
          />
          <TextField
            label="Condition"
            fullWidth
            variant="filled"
            name="condition"
            required
            defaultValue={game?.condition}
          />

          <Stack alignItems="center">
            <Button type="submit" color={btnColorModeMap[mode]} variant="contained">{btnModeMap[mode]}</Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default GameFormPage;
