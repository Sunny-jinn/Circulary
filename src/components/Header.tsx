import styled from '@emotion/styled'
import { Colors } from '../styles/colors'

const Wrapper = styled.header`
  width: 100%;
  height: 65px;
  background-color: ${Colors.GREEN_100};
  overflow: hidden;
  display: flex;
  align-items: center;
`

const MovingText = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: moveText 20s linear infinite;
  width: max-content;

  @keyframes moveText {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  span {
    margin-right: 30px;
  }
`

export const Header = () => {
  return (
    <Wrapper>
      <MovingText>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>

        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
        <span>Member's Hall of Fame</span>
      </MovingText>
    </Wrapper>
  )
}
