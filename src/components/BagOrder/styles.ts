import { styled } from '../../styles'

export const BagOrderContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  '& > div': {
    marginBottom: '1.5rem',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    p: {
      color: '$gray300',
      fontSize: '$md',
      lineHeight: 1.6,
    },

    strong: {
      color: '$gray100',
      fontSize: '$md',
      fontWeight: 'bold',
      lineHeight: 1.6,
    },

    button: {
      color: '$green500',
      fontWeight: 'bold',
      background: 'transparent',
      border: 0,
      marginTop: '0.5rem',
      lineHeight: 1.6,
      transition: 'color 0.2s',

      '&:hover': {
        color: '$green300',
      },
    },
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
})
