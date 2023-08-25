import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const BagContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    marginBottom: '2rem',
    color: '$gray100',
    fontWeight: 'bold',
    lineHeight: 1.6,
    fontSize: '$lg',
  },
})

export const BagClose = styled(Dialog.Close, {
  width: 24,
  height: 24,
  background: 'none',
  border: 0,
  position: 'absolute',
  top: 24,
  right: 24,
  transition: 'opacity 0.2s',

  '&:hover': {
    opacity: '0.6',
  },
})

export const BagItens = styled('div', {
  maxHeight: 500,
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: '4px',
  },

  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray500',
    borderRadius: '40px',
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
  marginTop: '2.8125rem',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  },
})
