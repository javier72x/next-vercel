import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className={styles.main}>
          <Navbar/>
    
            { children }
    
            <div className={styles.center}>
              <Image 
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
              <div className={styles.thirteen}>
                <Image
                  src="/thirteen.svg"
                  alt="13"
                  width={40}
                  height={31}
                  priority
                />
              </div>
            </div>
    
          
          </main>
      )
}

