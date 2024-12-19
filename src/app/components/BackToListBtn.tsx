import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const backToListText = '一覧に戻る'

const submitBtnStyle = {
  color: '#0c3669',
  padding: '0.5rem',
  backgroundColor: '#fff',
  border: '2px solid #0c3669',
  borderRadius: '3px',
  width: '100px',
  fontWeight: 'bold',
  transition: 'ease 0.3s',
}

const submitBtnStyleHover = {
  color: '#fff',
  padding: '0.5rem',
  backgroundColor: '#0c3669',
  border: '2px solid #0c3669',
  borderRadius: '3px',
  width: '100px',
  fontWeight: 'bold',
  transition: 'ease 0.3s',
  cursor: 'pointer',
}

const BackToListBtn = () => {

  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onClick={() => router.push('/todo')}
      style={isHover ? submitBtnStyleHover : submitBtnStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {backToListText}
    </button>
  )
}

export default BackToListBtn