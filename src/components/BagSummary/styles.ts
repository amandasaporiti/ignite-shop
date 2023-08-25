import { styled } from '../../styles'

export const SummaryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: 'auto',
})

export const Summary = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100%',

  div: {
    p: {
      color: '$gray100',
      lineHeight: 1.6,
      textAlign: 'left',
    },

    strong: {
      color: '$gray100',
      lineHeight: 1.6,
      fontWeight: 'bold',
      fontSize: '$md',
      textAlign: 'left',
      marginTop: '7px',
      display: 'block',
    },

    span: {
      color: '$gray300',
      lineHeight: 1.6,
      fontSize: '$md',
      display: 'block',
      textAlign: 'right',
    },

    h3: {
      color: '$gray100',
      lineHeight: 1.4,
      fontWeight: 'bold',
      fontSize: '$xl',
      textAlign: 'right',
    },
  },
})

export const CheckoutButton = styled('button', {
  width: '100%',
  background: '$green500',
  border: 0,
  borderRadius: 8,
  padding: '1.25rem 2rem',
  textAlign: 'center',
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: 1.6,
  transition: 'background-color 0.2s',
  marginTop: '3.5625rem',

  '&:hover': {
    background: '$green300',
  },
})
