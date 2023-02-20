import { Inter } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
import styled from './styles.module.css';
import '../styles/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className={styled.container}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
