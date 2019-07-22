import chroma from 'chroma-js';
import media from '@lib/media';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',

    alignItems: 'center',
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.2)',
    },
    [media.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [media.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [media.down('sm')]: {
      width: '100%',
    },
  },
  boxContent: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    padding: '10px',
    [media.down('md')]: {
      alignItems: 'center',
    },
    color: props =>
      chroma(props.color).luminance() <= 0.08
        ? 'rgba(255,255,255,0.8)'
        : 'rgba(0,0,0,0.6)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
  },
};

export default styles;
