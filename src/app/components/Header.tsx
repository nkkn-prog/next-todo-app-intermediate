import React from 'react'
import styles from '../styles/header.module.css'
import Link from 'next/link'

// ここから定数
const topPagePath = '/'
const loginPagePath = '/login'
const logoutPagePath = '/'
const signupPagePath = '/signup'

const logoText = 'Todo App'
const loginText = 'ログイン'
const logoutText = 'ログアウト'
const signupText = 'サインアップ'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* ログインしていたら、/todoに遷移させる */}
        <Link href={topPagePath}>
          {logoText}
        </Link>
      </div>
      <div className={styles.nav}>
        {/* ログインしていたら、ログインボタンは出さない */}
        <Link href={loginPagePath}>
          {loginText}
        </Link>
        {/* ログインしていたら、ログアウトボタンを出す */}
        <Link href={logoutPagePath}>
          {logoutText}
        </Link>
        {/* ログインしていたら、サインアップボタンを出さない */}
        <Link href={signupPagePath}>
          {signupText}
        </Link>
      </div>
    </div>
  )
}

export default Header