import MenuItem from './MenuItem';

import React from 'react'

function Navbar() {
  return (
    <header className="index relative text-zinc-200">
      <nav>
        <nav className="sticky top-0 z-10 flex bg-gradient-to-r from-rose-500 to-pink-500">
          <div className="logo flex items-center gap-2 p-2">
            <img
              className="logo"
              src="/images/logo-inverted.png"
              alt="site logo"
              width="50"
            />
            <div className="text-2x1 font-bold">
              tw:<span className="text-sky-900">mf</span>
            </div>
          </div>
          <div className="hidden flex-1 items-center justify-end md:flex">
            <MenuItem
              text="Home"
              subMenus={["Ticket de 1 dia", "Ticket de 7 dias"]}
            />
            <MenuItem
              text="Lineup"
              subMenus={["Ticket de 1 dia", "Ticket de 7 dias"]}
            />
            <MenuItem
              text="Ticket"
              subMenus={["Ticket de 1 dia", "Ticket de 7 dias"]}
            />
            <MenuItem
              text="Support"
              subMenus={["Ticket de 1 dia", "Ticket de 7 dias"]}
            />
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default Navbar