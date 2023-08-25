import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import Image from 'next/image'

import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Head from 'next/head'
import { IProduct } from '../../interfaces/product'
import { useBag } from '../../hooks/useBag'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addToBag, bagProducts } = useBag()

  function handleAddToBag(product: IProduct) {
    addToBag(product)
  }

  const isAlreadyInBag = bagProducts.findIndex(
    (index) => index.id === product.id,
  )

  return (
    <>
      <Head>
        <title>{product.name} - Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt={product.name}
            height={520}
            width={480}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={isAlreadyInBag >= 0}
            onClick={() => handleAddToBag(product)}
          >
            {isAlreadyInBag >= 0 ? (
              <span>Já adicionado à sacola</span>
            ) : (
              <span>Colocar na sacola</span>
            )}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: 'prod_ORvIgCE2uEJd4D' } }]

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        numberPrice: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
