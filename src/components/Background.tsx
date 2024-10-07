import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Input = styled.input`
  position: absolute;
  bottom: 200px;
  width: 50%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.1)
  );
  border-radius: 30px;
  height: 50px;
  color: white;
  padding: 10px 30px;
`

export const Background = () => {
  return (
    <Wrapper>
      <Input type='text' placeholder='닉네임을 입력하세요.' />
    </Wrapper>
  )
}
