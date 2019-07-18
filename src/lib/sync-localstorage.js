export const syncLocalStorage = ({ key, data }) => {
  // save palettes to local storage
  window.localStorage.setItem(key, JSON.stringify(data));
};
