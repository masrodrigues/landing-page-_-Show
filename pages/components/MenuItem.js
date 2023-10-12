import React from 'react'

function MenuItem({text, subMenus}) {
  return (
    <div className="group relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
      <span>{text}</span>
      <div className="absolute top-full right-0 hidden whitespace-nowrap rounded-l-md bg-yellow-500 group-hover:block">
        {subMenus &&
          subMenus.map((subMenu) => {
            return (
              <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
                {subMenu}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MenuItem