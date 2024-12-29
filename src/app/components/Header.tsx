import React from 'react'
import styles from '../styles/header.module.css'
import Link from 'next/link'
import { auth } from '@/app/auth'
import { SignOut } from './AuthComponents'

// ここから定数
const topPagePath = '/'
const loginPagePath = '/login'
const signupPagePath = '/signin'

const logoText = 'Todo App'
const loginText = 'ログイン'
const signinText = 'サインイン'

const Header = async() => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* ログインしていたら、/todoに遷移させる */}
        <Link href={topPagePath}>
          {logoText}
        </Link>
      </div>
      <div className={styles.nav}>
        {session ? (
          <SignOut />
        ) : (
          <>
            <Link href={loginPagePath}>
              {loginText}
            </Link>
            <Link href={signupPagePath}>
              {signinText}
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header