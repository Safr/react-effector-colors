import media from '@lib/media';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
  heading: {
    fontSize: '2rem',
    [media.down('xs')]: {
      fontSize: '1.3rem',
    },
  },
  container: {
    maxWidth: '1200px',
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [media.down('xl')]: {
      width: '80%',
    },
    [media.down('xs')]: {
      width: '75%',
    },
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [media.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
    [media.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem',
    },
  },
};
