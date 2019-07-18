import { combine, createEvent, createStore } from 'effector';
import { generatePalette } from '@lib/color-fns';
import { $palettesList } from './list';

// Events
export const getPalette = createEvent('get palette');

export const $id = createStore(null);
export const $palette = combine($palettesList, $id, (list, paletteId) =>
  list.find(({ id }) => paletteId === id),
).map(palette => generatePalette(palette));

// $palette.on(getPalette, (_, params) => {
//   return generatePalette(
//     $palettesList.getState().find(item => item.id === params.id),
//   );
// });

$id.on(getPalette, (_, params) => {
  return params.id;
});
