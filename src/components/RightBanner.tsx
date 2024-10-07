import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import icon_menu from '../assets/imgs/circulary_menu.svg'
import icon_delete_big from '../assets/imgs/circulary_delete_big.svg'
import icon_delete_small from '../assets/imgs/circulary_delete_small.svg'
import icon_delete_gray from '../assets/imgs/circulary_delete_gray.svg'
import useUserStore from '../store'

const Wrapper = styled.div`
  position: absolute;
  top: 102px;
  right: 41px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-left: auto;
  cursor: pointer;
`

const Banner = styled.div<{ isVisible: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 714px;
  height: 100vh;
  background-color: #d9d9d9;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? 'translateX(0)' : 'translateX(100%)'};
  padding-top: 95px;
  z-index: 999;
`

const BannerHeader = styled.div`
  margin: 0 29px 15.06px 41px;
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
    cursor: pointer;
    line-height: none;
    display: flex;
    height: fit-content;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    img,
    span {
      transition: 0.3s ease-in-out;
    }

    :hover {
      img {
        filter: brightness(0);
      }

      span {
        color: #000;
      }
    }

    span {
      display: inline-block;
      margin-bottom: 2px;
      font-size: 16px;
      line-height: 22.4px;
      font-weight: 500;
      color: #909090;
    }
  }
`

const BannerContent = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  padding: 17px 41px 30px 41px;
  gap: 20px;
`

const UsernameCard = styled.div`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }

  span {
    font-weight: 500;
    font-size: 24px;
    line-height: 33.6px;
  }
`

export const RightBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  const { username, removeUsername, clearUsernames } = useUserStore()

  const toggleBanner = () => {
    setIsBannerVisible(!isBannerVisible)
  }

  const handleClickOutside = (event: MouseEvent) => {
    console.log('outside clicked!')
    if (
      bannerRef.current &&
      !bannerRef.current.contains(event.target as Node)
    ) {
      setIsBannerVisible(false)
    }
  }

  useEffect(() => {
    if (isBannerVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isBannerVisible])

  return (
    <>
      <Wrapper>
        <Image src={icon_menu} alt='Menu' onClick={toggleBanner} />
      </Wrapper>
      <Banner isVisible={isBannerVisible} ref={bannerRef}>
        <BannerHeader>
          <div onClick={clearUsernames}>
            <img src={icon_delete_gray} alt='' />
            <span className='ko'>전체삭제</span>
          </div>
          <button onClick={() => setIsBannerVisible(false)}>
            <img src={icon_delete_big} alt='x' />
          </button>
        </BannerHeader>
        <BannerContent>
          {username.map(
            (item, idx) =>
              item !== ' ' && (
                <UsernameCard key={idx}>
                  <img
                    src={icon_delete_small}
                    alt=''
                    onClick={() => removeUsername(item)}
                  />
                  <span>{item}</span>
                </UsernameCard>
              )
          )}
        </BannerContent>
      </Banner>
    </>
  )
}
