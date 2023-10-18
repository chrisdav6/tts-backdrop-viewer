'use client';
import { useState } from 'react';

export default function Home() {
  const [left, setLeft] = useState('8footDesignLeft-1ver6.png');
  const [center, setCenter] = useState('3footDesign-4.png');
  const [right, setRight] = useState('8footDesignRight-3.png');

  return (
    <main className='flex min-h-screen flex-col items-center pt-10'>
      <h1 className='text-3xl font-bold'>Backdrop Viewer</h1>

      <nav className='flex gap-2 mt-10'>
        <select
          name='left'
          id='left'
          className='border-2 px-4 py-2'
          onChange={(e) => setLeft(e.target.value)}
        >
          <option value='8footDesignLeft-1ver4.png'>
            8footDesignLeft-1ver4.png
          </option>
          <option value='8footDesignLeft-1.png'>8footDesignLeft-1.png</option>
          <option value='8footDesignLeft-1ver2.png'>
            8footDesignLeft-1ver2.png
          </option>
          <option value='8footDesignLeft-1ver3.png'>
            8footDesignLeft-1ver3.png
          </option>
          <option value='8footDesignLeft-1ver5.png'>
            8footDesignLeft-1ver5.png
          </option>
          <option value='8footDesignLeft-1ver6.png'>
            8footDesignLeft-1ver6.png
          </option>
          <option value='8footDesignLeft-1ver7.png'>
            8footDesignLeft-1ver7.png
          </option>
        </select>

        <select
          name='center'
          id='center'
          className='border-2 px-4 py-2'
          onChange={(e) => setCenter(e.target.value)}
        >
          <option value='3footDesign-1.png'>3footDesign-1.png</option>
          <option value='3footDesign-2.png'>3footDesign-2.png</option>
          <option value='3footDesign-3.png'>3footDesign-3.png</option>
          <option value='3footDesign-4.png'>3footDesign-4.png</option>
        </select>

        <select
          name='right'
          id='right'
          className='border-2 px-4 py-2'
          onChange={(e) => setRight(e.target.value)}
        >
          <option value='8footDesignRight-1.png'>8footDesignRight-1.png</option>
          <option value='8footDesignRight-2.png'>8footDesignRight-2.png</option>
          <option value='8footDesignRight-3.png'>8footDesignRight-3.png</option>
          <option value='8footDesignRight-4.png'>8footDesignRight-4.png</option>
          <option value='8footDesignRight-5.png'>8footDesignRight-5.png</option>
        </select>
      </nav>

      <div className='flex items-center justify-center w-full gap-4 mt-10'>
        {/* Left */}
        <div className='w-[600px]'>
          <img src={left} alt='Left Image' />
        </div>

        {/* Center */}
        <div className='w-[259.5px]'>
          <img src={center} alt='Center Image' />
        </div>

        {/* Right */}
        <div className='w-[600px]'>
          <img src={right} alt='Right Image' />
        </div>
      </div>
    </main>
  );
}
