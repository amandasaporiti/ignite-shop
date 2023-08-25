import Image from 'next/image'
import {
  ImageContainer,
  ImagesWrapper,
  SuccessContainer,
} from '../styles/pages/success'
import Head from 'next/head'

import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

interface SuccessProps {
  customerName: string
  productsImage: string[]
}

export default function Success({ customerName, productsImage }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada - Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesWrapper>
          {productsImage.map((image, index) => (
            <ImageContainer key={index}>
              <Image src={image} alt="" width={115} height={106} />
            </ImageContainer>
          ))}
        </ImagesWrapper>
        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>{productsImage.length}</strong> camisetas já está a caminho da
          sua casa..
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const productsImage = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productsImage,
    },
  }
}
