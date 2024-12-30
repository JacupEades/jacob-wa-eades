import './styles/globals.css';
import Providers from './redux/provider';
import type { Metadata } from 'next';
import HeaderPageNav from './components/Header/HeaderPageNav';

export const metadata: Metadata = {
  title: "Jacob's Website",
  description: "Jacob's Website for all the next coding tech practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <HeaderPageNav />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
