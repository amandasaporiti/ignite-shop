import { ComponentProps } from 'react'
import { SkeletonContainer, SkeletonItem } from './styles'

type SkeletonProps = ComponentProps<typeof SkeletonContainer>

export function Skeleton({ ...props }: SkeletonProps) {
  return (
    <SkeletonContainer {...props}>
      <SkeletonItem />
      <footer>
        <SkeletonItem />
        <SkeletonItem />
      </footer>
    </SkeletonContainer>
  )
}
