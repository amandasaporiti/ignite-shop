import Image from 'next/image'
import { IProduct } from '../../interfaces/product'
import { BagOrderContainer, ImageContainer } from './styles'
import { useBag } from '../../hooks/useBag'

interface BagOrderProps {
  product: IProduct
}

export function BagOrder({ product }: BagOrderProps) {
  const { removeFromBag } = useBag()

  function handleRemoveFromBag(product: IProduct) {
    removeFromBag(product)
  }
  return (
    <BagOrderContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={95}
          height={95}
        />
      </ImageContainer>
      <div>
        <p>{product.name}</p>
        <strong>{product.price}</strong>
        <button type="button" onClick={() => handleRemoveFromBag(product)}>
          Remover
        </button>
      </div>
    </BagOrderContainer>
  )
}
