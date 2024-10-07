import styled from '@emotion/styled'
import icon_add from '../assets/imgs/circulary_icon_add.svg'
import useUserStore from '../store'
import { useRef, useState } from 'react'
import { Modal } from './Modal'
import { TempNameModal } from './TempNameModal'

const BottomContainer = styled.div`
  position: absolute;
  bottom: 57px;
  z-index: 99;
`

const Input = styled.input`
  position: relative;
  width: 774px;
  height: 58px;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 0.5px solid #fff;
  border-radius: 30px;
  color: white;
  padding: 18px 60px 18px 34px;
  font-weight: 400;

  :focus::placeholder {
    color: transparent;
  }
`

const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 4px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    filter: brightness(0) invert(100%);
  }
`

export const BottomInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false)

  const { setUsername } = useUserStore()

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value !== '') {
      setIsModalOpen(true)
    }
  }

  const handleModalClick = () => {
    if (inputRef.current && inputRef.current.value !== '') {
      setUsername(inputRef.current.value)
      setIsNameModalOpen(true)
    }
  }

  const handleClose = () => {
    setIsNameModalOpen(false)
    inputRef.current!.value = ''
  }

  return (
    <BottomContainer>
      <Input
        ref={inputRef}
        type='text'
        className='ko'
        placeholder='닉네임을 입력하세요.'
        maxLength={10}
      />
      <Image src={icon_add} alt='+' onClick={handleClick} />
      <Modal
        username={inputRef.current?.value ?? ' '}
        onClick={handleModalClick}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <TempNameModal
        username={inputRef.current?.value ?? ' '}
        isOpen={isNameModalOpen}
        onClose={handleClose}
      />
    </BottomContainer>
  )
}
