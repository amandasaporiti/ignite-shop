import * as Dialog from '@radix-ui/react-dialog'
import { BagClose, BagContent, BagItens, CheckoutButton } from './styles'
import { BagButton } from '../BagButton'
import { X } from '@phosphor-icons/react'

import { BagSummary } from '../BagSummary'

import { useBag } from '../../hooks/useBag'
import axios from 'axios'
import { useState } from 'react'
import { BagOrder } from '../BagOrder'

export function Bag() {
  const [isCreatingSessionCheckout, setIsCreatingSessionCheckout] =
    useState(false)

  const { bagProducts, bagProductsQuantity } = useBag()

  async function handleCheckout() {
    try {
      setIsCreatingSessionCheckout(true)

      const response = await axios.post('/api/checkout', {
        products: bagProducts,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingSessionCheckout(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BagButton color="gray" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <BagContent>
          <BagClose>
            <X size={24} weight="bold" color="#8D8D99" />
          </BagClose>
          <h2>Sacola de compras</h2>

          {bagProductsQuantity > 0 ? (
            <BagItens>
              {bagProducts.map((item) => {
                return <BagOrder product={item} key={item.id} />
              })}
            </BagItens>
          ) : (
            <span>Sacola vazia</span>
          )}

          <BagSummary />
          <CheckoutButton
            onClick={handleCheckout}
            disabled={isCreatingSessionCheckout || bagProductsQuantity <= 0}
          >
            Finalizar compra
          </CheckoutButton>
        </BagContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
