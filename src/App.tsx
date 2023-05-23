import React, { useState } from 'react';
import arrayOfValues from './values';



function App(): JSX.Element {


  const [items, setItems] = useState<(number | null)[]>(arrayOfValues)



  return (
    <>
      <div className='container'>{items?.map((elem) => (
        <span
          style={{ backgroundColor: `rgb(${255 * (elem! / -100)}, ${255 * (elem! / 100)}, 0)` }}
          className='item'
        >
          {elem}
        </span>
      ))}
      </div>

      <div className='buttonBar'>
        <button
          className='button'
          style={{ backgroundColor: 'green' }}
          type='button'
          onClick={() => { setItems(arrayOfValues.map((elem) => elem > 0 ? elem : null)) }}
        >
          Filter {'>'} 0
        </button>
        <button
          className='button'
          type='button'
          onClick={() => { setItems(arrayOfValues) }}
        >
          All
        </button>
        <button
          className='button'
          style={{ backgroundColor: 'red' }}
          type='button'
          onClick={() => { setItems(arrayOfValues.map((elem) => elem < 0 ? elem : null)) }}
        >
          Filter {'<'} 0
        </button>
      </div>
    </>
  );
}

export default App;
