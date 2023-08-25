import { styled } from '../../styles'

export const BagContainerButton = styled('button', {
  padding: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: 6,
  cursor: 'pointer',
  transition: 'all 0.2s',
  border: 0,

  span: {
    position: 'absolute',
    right: '-7px',
    top: '-7px',
    width: '1.625rem',
    height: '1.625rem',
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid $gray900',
    backgroundColor: '$green500',
    color: '$white',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: 0,
  },

  variants: {
    color: {
      gray: {
        background: '$gray800',

        svg: {
          height: 24,
          width: 24,
          color: '$gray300',
        },

        '&:hover': {
          opacity: 0.6,
        },
      },
      green: {
        background: '$green500',

        svg: {
          height: 32,
          width: 32,
          color: '$white',
        },

        '&:hover': {
          background: '$green300',
        },

        span: {
          display: 'none',
        },
      },
    },
  },
  defaultVariants: {
    color: 'gray',
  },
})
