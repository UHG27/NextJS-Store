import { Roboto } from 'next/font/google'
import { Header } from "./componentes/shared/Header";
import { Footer } from "./componentes/shared/Header/Footer"
import 'app/sass/globals.sass'

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
