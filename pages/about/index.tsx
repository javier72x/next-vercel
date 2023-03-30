import { Inter } from 'next/font/google'
import {MainLayout} from '../../components/layouts/MainLayout'
import {DarkLayout} from '../../components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>

          <h1>About Page</h1>
       
    </>
  )
}


About.getLayout = function getLayout( page: JSX.Element ) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}