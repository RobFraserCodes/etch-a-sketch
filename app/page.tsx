'use client'
import { useState } from 'react';

export default function Home() {
  const [gridSize, setGridSize] = useState(16); 
  const grid = Array.from({ length: gridSize }, (_, i) => i + 1);
  const [color, setColor] = useState('bg-red-500');
  const [shake, setShake] = useState(false);

  const handleMouseOver = (e) => {
    e.target.className = `flex-1 h-1/${gridSize}-screen w-1/${gridSize}-screen ${color}`;
  }

  function changeColor(e) {
    const classes = e.target.className.split(' ');
    const colorClass = classes[classes.length - 1];
    setColor(colorClass);
  }

  function clearGrid(e) {
    const cells = document.querySelectorAll('.flex-1');
    cells.forEach(cell => {
      cell.className = `flex-1 h-1/${gridSize}-screen w-1/${gridSize}-screen bg-zinc-100`;
      setShake(true);
      setTimeout(() => setShake(false), 600);
    })
  }

  const handleGridSizeChange = () => {
    const newSize = parseInt(prompt('Enter a new grid size (1-100): '));
    if (newSize && newSize <= 100) {
      setGridSize(newSize);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className={` bg-zinc-600 m-8 border-8 border-red-500 rounded-lg ${shake ? 'animate-shake' : ''}`}>
        {grid.map((_, rowIndex) => (
          <div key={rowIndex} className='flex justify-center text-center items-center'>
            {grid.map((_, cellIndex) => (
              <div 
                key={`${rowIndex}-${cellIndex}`} 
                className={`flex-1 h-1/${gridSize}-screen w-1/${gridSize}-screen bg-zinc-100`}
                onMouseOver={handleMouseOver}
              />
            ))}
          </div>
        ))}
        <div className='flex justify-between shadow-md bg-red-500 items-center p-8'>
          <div className='grid grid-cols-3 gap-4 lg:grid-cols-6'>
            <button className='w-8 h-8 rounded-full bg-black' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-white' onClick={changeColor}></button>
            <button className='w-8 h-8 border-red-700 border-2 rounded-full bg-red-500' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-yellow-400' onClick={changeColor}></button>
            <button className='w-8 h-8 rounded-full bg-blue-500' onClick={changeColor}></button>
            {/* make a random colour button */}
            {/* <button className='w-8 h-8 rounded-full' onClick={changeColor}></button> */}
          </div>
          <h1 className='text-4xl text-center text-red-600 font-black'>Etch a Sketch</h1>
          <div className='space-x-4'>
            <button className='bg-zinc-100 p-2 w-16 h-16 rounded-full text-center' onClick={clearGrid}>Clear</button>
            <button className='bg-zinc-100 p-2 rounded-md' onClick={handleGridSizeChange}>Grid Size</button>
          </div>
        </div>
      </div>
    </div>
  )
}