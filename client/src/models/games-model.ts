type GamesModels = {
  id: number,
  title: string,
  price: string,
  images: string[],
  description: string,
  category: string,
  condition: string,
  location: {
    city: string,
    country: string,
  },
  onDelete: () => void
};

export default GamesModels;
