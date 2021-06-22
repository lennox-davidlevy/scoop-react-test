import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('displays image for each scoop from the server', async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('display image for each toppings from the server', async () => {
  render(<Options optionType="toppings" />);

  const toppingsImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingsImages).toHaveLength(3);

  const altText = toppingsImages.map((el) => el.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
