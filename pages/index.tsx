import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../src/components/auth/Login'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Login></Login>
    </>
  )
}

export default Home
