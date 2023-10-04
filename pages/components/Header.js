import React from 'react'
import Navbar from './Navbar'


function Header() {
  return (
    <>
      <Navbar></Navbar>
    <div 
    style={{ backgroundImage: "url(/images/hero.jpg)"}} 
    className="flex h-[calc(100vh-200px)] min-h-[400px] flex-col items-center justify-center bg-cover bg-fixed bg-center">
    </div>
    </>
  );
}

export default Header;