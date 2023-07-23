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
    const classes = e.target.className.split(' ');
    const colorClass = classes[classes.length - 1];
    setColor(colorClass);
  }

  function clearGrid(e) {
    const cells = document.querySelectorAll('.flex-1');
    cells.forEach(cell => {
      cell.className = `flex-1 h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 bg-zinc-100`;
    })
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
            <button className='w-8 h-8 rounded-full bg-black' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-white' onClick={changeColor}></button>
            <button className='w-8 h-8 border-red-700 border-2 rounded-full bg-red-500' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-yellow-400' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-blue-500' onClick={changeColor}></button>
            {/* make a random colour button */}
            {/* <button className='w-8 h-8 rounded-full' onClick={changeColor}></button> */}
          </div>
          <h1 className='text-4xl'>Etch a Sketch</h1>
          <div className='space-x-4'>
            <button className='bg-zinc-900 p-2 rounded-md' onClick={clearGrid}>Clear</button>
            <button className='bg-zinc-900 p-2 rounded-md'>Grid Size</button>
          </div>
        </div>
      </div>
    </div>
  )
}