import styled from '@emotion/styled'
import logo from '../assets/imgs/circulary_logo.svg'
import { Colors } from '../styles/colors'

const Wrapper = styled.div`
  position: absolute;
  top: 111px;
  left: 68px;
  z-index: 99;
`

const Text = styled.span`
  display: block;
  margin-top: 12.53px;
  font-size: 32px;
  font-weight: 300;
  line-height: 44.8px;
  color: ${Colors.GREEN_100};
`

export const LeftBanner = () => {
  return (
    <Wrapper>
      <img src={logo} alt='' />
      <Text className='ko'>멤버 명예의 전당</Text>
    </Wrapper>
  )
}
