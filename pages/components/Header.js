import React from 'react'
import Navbar from './Navbar'


function Header() {
  return (
    <header className="index relative text-zinc-200">
      <Navbar></Navbar>
      <div
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
        className="flex h-[calc(100vh-200px)] min-h-[400px] flex-col items-center justify-center bg-cover bg-fixed bg-center"
      >
        <div className="rounded-xl items-center bg-white/30 py-2 px-4 text-center backdrop-blur-md">
          <img src="/images/logo1.png" width="175" />

          <div className="font-bold">
            Brasil Rock &<span className="text-sky-900"> Roll Fest</span>
          </div>
        </div>

        <div className="mt-3 text-sm font-bold">
          Mantenha-me atualizado com novidades e promoções
        </div>

        <div className="mt-3 flex gap-2">
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border-white/40 bg-white/30 p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 backdrop-blur-md"
          />

          <div className="cursor-pointer rounded-lg bg-yellow-600 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg">
            Inscrever-se
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;