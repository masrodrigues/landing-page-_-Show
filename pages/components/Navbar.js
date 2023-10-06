import MenuItem from './MenuItem';

import React from 'react'

function Navbar() {
  return (
    <nav>
      <nav className="sticky top-0 z-10 flex bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="logo flex ml-20 items-center -gap-6 ">
          <img
            className="logo m-2"
            src="/images/guitar_logo.png"
            alt="site logo"
            width="70"
          />
          <div className="text-2xl font-bold ">
            Brasil Rock &<span className="text-sky-900"> Roll Fest</span>
          </div>
        </div>
        <div className="hidden mr-10 flex-1 items-center justify-end md:flex">
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
  );
}

export default Navbar