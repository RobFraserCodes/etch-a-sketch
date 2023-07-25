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
    <div className='flex flex-col justify-center items-center'>
      <div className={`border-8 border-red-700 bg-zinc-900 m-8 rounded-lg ${shake ? 'animate-shake' : ''}`}>
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
          <div className='grid grid-cols-3 -gap-2'>
            <button className='w-8 h-8 rounded-full bg-black' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-white' onClick={changeColor}></button>
            <button className='w-8 h-8 border-red-700 border-2 rounded-full bg-red-500' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-yellow-400' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-blue-500' onClick={changeColor}></button>
            {/* make a random colour button */}
            {/* <button className='w-8 h-8 rounded-full' onClick={changeColor}></button> */}
          </div>
          <h1 className='text-4xl text-center font-black bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent p-8'>Etch a Sketch</h1>
          <div className='space-x-4'>
            <button className='bg-zinc-100 p-2 w-16 h-16 rounded-full shadow-md text-center font-black text-zinc-300 border-4' onClick={clearGrid}>Clear</button>
          </div>
        </div>
        <div className='flex space-x-4 absolute left -z-10'>
          <div className='bg-white rounded-lg p-4 shadow-md font-semibold text-zinc-400 border-4 ml-8'>8 x 8</div>
          <div className='bg-white rounded-lg p-4 shadow-md font-semibold text-zinc-400 border-4'>16 x 16</div>
          <div className='bg-white rounded-lg p-4 shadow-md font-semibold text-zinc-400 border-4'>32 x 32</div>
          <div className='bg-white rounded-lg p-4 shadow-md font-semibold text-zinc-400 border-4'>64 x 64</div>
        </div>
      </div>
      <footer className='text-center font-thin mt-16 text-zinc-100'>
        <p>Created by <a href="www.robfraser.dev"><span className='font-semibold'>Rob Fraser</span> </a>
        as part of the <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/rock-paper-scissors"><span className='font-semibold'>Odin Project</span></a>
        </p>
      </footer>
    </div>
  )
}