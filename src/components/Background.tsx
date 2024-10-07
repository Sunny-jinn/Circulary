import styled from '@emotion/styled'
import { keyframes } from '@emotion/react' // keyframes는 @emotion/react에서 가져와야 합니다
import { UsernameLists } from './UsernameLists'
import { RightBanner } from './RightBanner'
import { LeftBanner } from './LeftBanner'
import { BottomInput } from './BottomInput'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #1b1b1b;
  overflow: hidden; /* 별들이 벗어나지 않게 함 */
`

const moveStars = keyframes`
  from {
    transform: translateY(0) translateX(0);
  }
  to {
    transform: translateY(-100vh) translateX(50vw);
  }
`

const Star = styled.div<{ size: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: white;
  border-radius: 50%;
  top: 100%;
  left: ${() => Math.random() * 100}vw;
  animation: ${moveStars} ${() => Math.random() * 10 + 15}s linear infinite;
  opacity: ${() => Math.random()};
  z-index: 9;
`

const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 2 + 2
    return <Star key={i} size={size} />
  })
}

export const Background = () => {
  return (
    <Wrapper>
      {generateStars(50)}
      <LeftBanner />
      <UsernameLists />
      <RightBanner />
      <BottomInput />
    </Wrapper>
  )
}
