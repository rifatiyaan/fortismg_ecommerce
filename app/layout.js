import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import NoticeTop from "./components/NoticeTop/page";
import SearchNav from "./components/SeachNav/page";
import NavDropDown from "./components/NavDropDown/page";
import Banner from "./components/Banner/page";
import Motto from "./components/Motto/page";
import Advertise from "./components/Advertise/page";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body className={inter.className}>
        <div className="px-1 md:p-0">
          <div className="">
        <NoticeTop/>
        <Header/>
        <SearchNav/>
        <NavDropDown/>
        <Banner/>
        <Motto/>
        </div>
        <Advertise/>
       
        
       
        {children}
        </div>
        </body>
    </html>
  );
}
