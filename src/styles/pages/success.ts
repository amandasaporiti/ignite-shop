import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 656,

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    fontWeight: 'regular',
    maxWidth: 590,
    textAlign: 'center',
    marginBottom: 88,
    lineHeight: 1.4,

    strong: {
      fontWeight: 'bold',
    },
  },

  a: {
    color: '$green500',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'block',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImagesWrapper = styled('section', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',

  'div + div': {
    marginLeft: -55,
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  height: 140,
  width: 140,
  boxShadow: '0px 0px 60px rgba(0,0,0,0.8)',

  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
})
