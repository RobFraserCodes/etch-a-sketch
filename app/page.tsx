'use client'

import { useState } from 'react';

export default function Home() {
  const [gridSize, setGridSize] = useState(16); 
  const grid = Array.from({ length: gridSize }, (_, i) => i + 1);
  const [color, setColor] = useState('bg-red-500');
  const [shake, setShake] = useState(false);

  const handleMouseOver = (e) => {
    e.target.className = `cell ${color}`;
  }

  function changeColor(e) {
    const classes = e.target.className.split(' ');
    const colorClass = classes[classes.length - 1];
    setColor(colorClass);
  }

  function clearGrid(e) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.className = `cell`;
      setShake(true);
      setTimeout(() => setShake(false), 600);
    })
  }

  function changeGridSize() {
    const size = prompt('Enter a new grid size (1-100):');
    setGridSize(size);
  }

  return (
    <div className='flex justify-center items-center'>
      <div className={`container border-8 border-red-700 w-[600px] h-[600px] bg-zinc-900 m-8 rounded-lg ${shake ? 'animate-shake' : ''}`}>
        {grid.map((_, rowIndex) => (
          <div key={rowIndex} className='flex justify-center text-center items-center'>
            {grid.map((_, cellIndex) => (
              <div 
                key={`${rowIndex}-${cellIndex}`} 
                className={`cell`}
                onMouseOver={handleMouseOver}
              />
            ))}
          </div>
        ))}
        <div className='flex justify-between shadow-md bg-red-600 items-center p-8'>
          <div className='grid grid-cols-3 gap-2 lg:grid-cols-6'>
            <button className='w-8 h-8 rounded-full bg-black' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-white' onClick={changeColor}></button>
            <button className='w-8 h-8 border-red-700 border-2 rounded-full bg-red-500' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-yellow-400' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-blue-500' onClick={changeColor}></button>
            {/* make a random colour button */}
            {/* <button className='w-8 h-8 rounded-full' onClick={changeColor}></button> */}
          </div>
          <h1 className='text-4xl text-center text-red-700 font-black'>Etch a Sketch</h1>
          <div className='space-x-4'>
            <button className='bg-zinc-100 p-2 w-16 h-16 rounded-full text-center' onClick={clearGrid}>Clear</button>
            <button className='bg-zinc-100 p-2 rounded-md' onClick={changeGridSize}>Grid Size</button>
          </div>
        </div>
      </div>
    </div>
  )
}