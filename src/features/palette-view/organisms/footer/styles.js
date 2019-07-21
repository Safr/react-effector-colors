import media from '@lib/media';

export default {
  PaletteFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '8px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    [media.down('xs')]: {
      justifyContent: 'space-between',
    },
  },
  emoji: {
    fontSize: '1.5rem',
    margin: '0 1rem',
  },
  goBack: {
    display: 'none',
    [media.down('xs')]: {
      display: 'block',
    },
    color: '#222',
    textDecoration: 'none',
  },
};
