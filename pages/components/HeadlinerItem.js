
import React from 'react'

function HeadlinerItem({artist, imageUrl, date }) {
  return (
    <div className="min-w-[80%] md:min-w-[40%] ">
      <div
        className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 " 
        style={{ backgroundImage: `url('${imageUrl}')`}}
      ></div>
      <h5 className="mt-2">{artist}</h5>
      <h6>{date}</h6>
    </div>
  );
}

export default HeadlinerItem;