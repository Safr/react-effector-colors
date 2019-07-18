import { createBrowserHistory } from 'history';
import { createEvent, createStore } from 'effector';

export const history = createBrowserHistory();

const changeLocation = createEvent('location changed');

/**
 * Current location effector store
 */
export const $location = createStore(history.location).on(
  changeLocation,
  (_, location) => location,
);

history.listen(changeLocation);
