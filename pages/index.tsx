import { Inter } from 'next/font/google'
import {MainLayout} from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>Home Page</h1>
      </MainLayout>
    </>
  )
}
