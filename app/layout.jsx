import Pulse from '@components/Pulse';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import { Abril_Fatface, Inter} from 'next/font/google';
import localIcons from 'next/font/local';
import '@styles/globals.css';

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
});
const inter = Inter({ subsets: ["latin"] });
const icons = localIcons({
  src: [{
    path: '../public/fonts/Icon.ttf',
  }],
});

export const metadata = {
  title: 'knznsmn | Julius Cinco Cesar',
  description: 'JCC Creative Concepts: Julius Cinco Cesar&apos;s portfolio homepage.',
};

function Layout({children}) {
  return (
    <html lang="en">
      <body>
        <Pulse />
        <div className="container">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Layout

