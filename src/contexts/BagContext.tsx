import { ReactNode, createContext, useState } from 'react'
import { IProduct } from '../interfaces/product'
import { toast } from 'react-toastify'

interface BagContextData {
  bagProducts: IProduct[]
  bagProductsQuantity: number
  addToBag: (product: IProduct) => void
  removeFromBag: (product: IProduct) => void
  summaryPrice: number
}

interface BagProviderProps {
  children: ReactNode
}

export const BagContext = createContext({} as BagContextData)

export function BagProvider({ children }: BagProviderProps) {
  const [bagProducts, setBagProducts] = useState<IProduct[]>([])

  const bagProductsQuantity = bagProducts.length

  function addToBag(product: IProduct) {
    const isTshirtAlreadyInBag = bagProducts.findIndex((index) => {
      return index.id === product.id
    })

    if (isTshirtAlreadyInBag < 0) {
      setBagProducts((state) => [...state, product])
      toast.success('Camiseta adicionada ao carrinho!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } else {
      setBagProducts((state) => [...state])
      toast.error('Apenas um item disponível já adicionado a sacola!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }

  function removeFromBag(product: IProduct) {
    const filteredProducts = bagProducts.filter(
      (item) => item.id !== product.id,
    )
    setBagProducts(filteredProducts)
  }

  const summaryPrice = bagProducts.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  return (
    <BagContext.Provider
      value={{
        bagProducts,
        bagProductsQuantity,
        addToBag,
        removeFromBag,
        summaryPrice,
      }}
    >
      {children}
    </BagContext.Provider>
  )
}
