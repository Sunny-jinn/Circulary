import styled from '@emotion/styled'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  width: 411px;
  height: 207px;
  background-color: #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 32px;
  }
`

const ModalContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 24px;

  .center {
    line-height: 44.8px;
    font-size: 32px;
  }
`

const ModalButtons = styled.div`
  display: flex;
  flex-shrink: 0;
  width: calc(100% - 10px);
  align-items: center;
  margin-top: auto;
  height: 73px;
  border-top: 1px solid #c0c0c0;
`

const ModalButton = styled.button`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
`

const Div = styled.div`
  height: calc(100% - 14px);
  border-right: 0.8px solid #c0c0c0;
`

interface ModalProps {
  isOpen: boolean
  onClick: () => void
  onClose: () => void
  username: string
}

export const Modal = ({ isOpen, onClick, onClose, username }: ModalProps) => {
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleOnClick = () => {
    onClick()
    onClose()
  }

  return (
    <>
      {isOpen && (
        <Overlay onClick={handleClickOutside}>
          <Wrapper className='ko'>
            <ModalContent>
              <ModalHeader>
                <div>“</div>
                <div className='center'>{username}</div>
                <div>”</div>
              </ModalHeader>
              <span>정말 등록하시겠습니까?</span>
            </ModalContent>
            <ModalButtons>
              <ModalButton className='ko' onClick={handleOnClick}>
                예
              </ModalButton>
              <Div />
              <ModalButton className='ko' onClick={onClose}>
                아니오
              </ModalButton>
            </ModalButtons>
          </Wrapper>
        </Overlay>
      )}
    </>
  )
}
