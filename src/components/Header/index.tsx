import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../assets/logo.svg'

import { HeaderContainer } from '../../styles/header'
import { Bag } from '../Bag'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/" prefetch={false}>
        <div>
          <Image src={logoImg} alt="" />
        </div>
      </Link>

      <Bag />
    </HeaderContainer>
  )
}
