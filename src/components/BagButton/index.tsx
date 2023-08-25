import { Handbag } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

import { BagContainerButton } from './styles'

import { useBag } from '../../hooks/useBag'

type BagButtonProps = ComponentProps<typeof BagContainerButton>

export function BagButton({ ...rest }: BagButtonProps) {
  const { bagProductsQuantity } = useBag()

  return (
    <BagContainerButton type="button" {...rest}>
      <Handbag />
      {bagProductsQuantity > 0 && <span>{bagProductsQuantity}</span>}
    </BagContainerButton>
  )
}
