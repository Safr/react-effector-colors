import { combine, createEvent, createStore, sample } from 'effector';
import { generatePalette } from '@lib/color-fns';
import { $palettesList } from './list';

// Events
export const getPalette = createEvent('get palette');

// Stores
export const $palette = createStore(null);

// export const $id = createStore(null);
// export const $palette = combine($palettesList, $id, (list, paletteId) =>
//   list.find(({ id }) => paletteId === id),
// ).map(palette => generatePalette(palette));

// $palette.on(getPalette, (_, params) => {
//   return generatePalette(
//     $palettesList.getState().find(item => item.id === params.id),
//   );
// });

// $id.on(getPalette, (_, params) => {
//   return params.id;
// });

sample({
  source: $palettesList,
  clock: getPalette,
  target: $palette,
  fn: (list, params) => {
    console.log('list', list);
    console.log('id', params);
    return generatePalette(list.find(palette => palette.id === params.id));
  },
});

$palette.watch(data => console.log('data', data));
