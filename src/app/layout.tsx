import { Inter } from "next/font/google"; 
import { Header } from "./componentes/shared/Header";
import { Footer } from "./componentes/shared/Header/Footer"
import 'app/sass/globals.sass'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>

        {children}
        
        <Footer/>
        </body>
    </html>
  );
}
