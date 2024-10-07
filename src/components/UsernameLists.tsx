import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import useUserStore from '../store'
import logo from '../assets/imgs/circulary_logo.svg'
import { useState } from 'react'

const scrollAnimation = keyframes`
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  width: 1000px;
  height: 100vh;
  position: relative;
  color: #ddd;

  span {
    flex-shrink: 0;
    font-size: 32px;
    font-weight: 900;
    line-height: 44.8px;
    display: inline-block;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
`

const Image = styled.img`
  width: 226.96px;
`

const Scroller = styled.div<{ animationDuration: number }>`
  display: flex;
  flex-direction: column;
  animation: ${scrollAnimation} ${({ animationDuration }) => animationDuration}s
    linear infinite;
`

const UserLists = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 100px;
`

export const UsernameLists = () => {
  const { username } = useUserStore()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [baseDuration, setBaseDuration] = useState<number>(15)

  const additionalDuration = Math.floor(username.length / 4)
  const animationDuration = baseDuration + additionalDuration

  return (
    <Wrapper className='ko'>
      <Scroller animationDuration={animationDuration}>
        {[...Array(5)].map((_, index) => (
          <UserLists key={index}>
            <ImageWrapper>
              <Image src={logo} alt='' />
            </ImageWrapper>
            {username.map((item, idx) => (
              <span key={`${item}-${idx}`}>{item}</span>
            ))}
          </UserLists>
        ))}
        {[...Array(5)].map((_, index) => (
          <UserLists key={`copy-${index}`}>
            <ImageWrapper>
              <Image src={logo} alt='' />
            </ImageWrapper>
            {username.map((item, idx) => (
              <span key={`${item}-${idx}`}>{item}</span>
            ))}
          </UserLists>
        ))}
      </Scroller>
    </Wrapper>
  )
}
