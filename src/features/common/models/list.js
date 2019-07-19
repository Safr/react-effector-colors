import { createEvent, createStore } from 'effector';
import { syncLocalStorage } from '@lib/sync-localstorage';
import { seedColors } from '@features/common/data';
import { removePalette } from './delete';
import { savePalette } from './save';

// Events
export const getPalettesList = createEvent('get palettes list');

// Stores
export const $palettesList = createStore([]);

// Side Effects
$palettesList.on(
  getPalettesList,
  () => JSON.parse(window.localStorage.getItem('palettes')) || seedColors,
);
$palettesList.on(removePalette, (state, params) =>
  state.filter(palette => palette.id !== params.id),
);
$palettesList.on(savePalette, (state, params) => {
  return state.concat(params.palette);
});

$palettesList.watch(removePalette, store => {
  syncLocalStorage({ key: 'palettes', data: store });
});
$palettesList.watch(savePalette, store => {
  syncLocalStorage({ key: 'palettes', data: store });
});
