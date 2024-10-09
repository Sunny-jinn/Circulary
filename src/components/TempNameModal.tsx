import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background: rgba(27, 27, 27, 0.6);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`

const Wrapper = styled.div`
  position: relative;
  height: 207px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 900;
    font-size: 64px;
    color: #fff;
  }
`

interface TempNameModalProps {
  isOpen: boolean
  username: string
  onClose: () => void
}

export const TempNameModal = ({
  isOpen,
  username,
  onClose,
}: TempNameModalProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        onClose()
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [isOpen, onClose])

  return (
    <Overlay isVisible={isVisible}>
      <Wrapper>
        <p>{username}</p>
      </Wrapper>
    </Overlay>
  )
}
