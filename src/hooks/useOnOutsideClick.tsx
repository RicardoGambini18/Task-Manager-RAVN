import { useEffect, RefObject } from 'react'

interface OnOutsideClickProps {
  ref: RefObject<HTMLElement>
  onOutsideClick: () => void
}

const useOnOutsideClick = (params: OnOutsideClickProps): void => {
  useEffect(() => {
    const { ref, onOutsideClick } = params

    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Element)) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [params])
}

export default useOnOutsideClick
