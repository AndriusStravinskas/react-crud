export const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get('title');
  const country = formData.get('country');
  const city = formData.get('city');
  const images = formData.getAll('images');
  const price = formData.get('price');
  const description = formData.get('description');
  const category = formData.get('category');
  const condition = formData.get('condition');

  if (title === null || title instanceof File || title.length < 2) throw new Error('incorrect Title');
  if (country === null || country instanceof File || country.length < 2) throw new Error('incorrect country');
  if (city === null || city instanceof File || city.length < 2) throw new Error('incorrect city');
  if (price === null || price instanceof File || price.length < 1 || Number(price) < 0.5) throw new Error('incorrect price');
  if (description === null || description instanceof File || description.length < 2) throw new Error('incorrect description');
  if (category === null || category instanceof File || category.length < 2) throw new Error('incorrect category');
  if (condition === null || condition instanceof File || condition.length < 2) throw new Error('incorrect condition');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect images nr: ${i + 1}`);
  });

  return {
    title,
    price: `${Number(price).toFixed(2)}€`,
    images: images as string[],
    description,
    category,
    condition,
    location: {
      city,
      country,
    },
  };
};
