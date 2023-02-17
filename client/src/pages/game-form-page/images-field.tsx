import React from 'react';
import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import uniqid from 'uniqid';

const initImagesIds: string[] = [uniqid()];

type ImagesFieldProps = {
  defaultImages?: string[],
};

const ImagesField: React.FC<ImagesFieldProps> = ({
  defaultImages,
}) => {
  const imgMap = React.useMemo(() => (defaultImages !== undefined
    ? defaultImages.reduce<{ [key in string]: string }>((prevMap, defaultImg) => ({
      ...prevMap,
      [uniqid()]: defaultImg,
    }), {})
    : undefined), [defaultImages]);

  const [imagesIds, setImagesIds] = React.useState<string[]>(imgMap !== undefined
    ? Object.keys(imgMap)
    : initImagesIds);

  const addImageField = () => setImagesIds([...imagesIds, uniqid()]);

  const deleteImageField = (id: string) => {
    setImagesIds(imagesIds.filter((imgIds) => imgIds !== id));
  };

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ pl: 1 }}>Images</Typography>
      <Stack spacing={2}>
        {imagesIds.map((id) => (
          <TextField
            defaultValue={imgMap && imgMap[id]}
            required
            key={id}
            name="images"
            label="Images"
            fullWidth
            variant="filled"
            InputProps={imagesIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => deleteImageField(id)}>
                    <DeleteIcon color="error" sx={{ fontSize: 27 }} />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Stack>
      <IconButton onClick={addImageField}>
        <AddCircleIcon color="success" sx={{ fontSize: 35 }} />
      </IconButton>
    </Box>
  );
};

export default ImagesField;
