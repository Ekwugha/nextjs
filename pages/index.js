import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum autem ad quam cum laboriosam ex, magnam rem voluptas neque modi.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quidem, accusantium quaerat aperiam quos optio voluptates nihil laboriosam saepe aliquam?</p>
      <Link href="/ninja">
        <a> See Ninja Listing </a>  
      </Link>
    </div>
  )
}
