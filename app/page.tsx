'use client'

import { useState } from 'react';

const gridSize = 16;

export default function Home() {
  const grid = Array.from({ length: gridSize }, (_, i) => i + 1);
  const [color, setColor] = useState('bg-red-500');

  const handleMouseOver = (e) => {
    e.target.className = `flex-1 h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 ${color}`;
  }

  function changeColor(e) {
    setColor('bg-black');
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      <div className='max-w-4xl bg-zinc-100 border-red-500 border-8 rounded-md m-8'>
        {grid.map((_, rowIndex) => (
          <div key={rowIndex} className='flex justify-center text-center items-center'>
            {grid.map((_, cellIndex) => (
              <div 
                key={`${rowIndex}-${cellIndex}`} 
                className={`flex-1 h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 bg-zinc-100`}
                onMouseOver={handleMouseOver}
              />
            ))}
          </div>
        ))}
        <div className='flex justify-between shadow-md bg-red-500 text-white items-center font-extrabold p-8'>
          <div className='flex space-x-2'>
            <button className='w-8 h-8 bg-black rounded-full' onClick={changeColor}></button>
            <div className='w-8 h-8 bg-white rounded-full'></div>
            <div className='w-8 h-8 bg-red-600 rounded-full'></div>
            <div className='w-8 h-8 bg-yellow-500 rounded-full'></div>
            <div className='w-8 h-8 bg-gradient-conic from-green-400 to-purple-500 rounded-full'></div>
          </div>
          <h1 className='text-4xl'>Etch a Sketch</h1>
          <div className='space-x-4'>
            <button className='bg-zinc-900 p-2 rounded-md'>Clear</button>
            <button className='bg-zinc-900 p-2 rounded-md'>Grid Size</button>
          </div>
        </div>
      </div>
    </div>
  )
}
