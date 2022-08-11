import React, { useState } from 'react'

const CalculatorApp = () => {


    // declaring state 
    const [number, setNumber] = useState('')

    // Click
    const Click = (e) => {
      setNumber(number.concat(e.target.value))
    }
  
    // Clear 
    const Clear = () => {
      setNumber('')
    }
  
    // Slice
    const Slice = () => {
      setNumber(number.slice(0, -1))
  
    }
  
    // Answer 
    const outputAnswer = () => {
      try {
        setNumber(eval(number).toString())
      } catch (error) {
        setNumber('Invalid')
      }
    }

  return (
    <section>
      <div className='bg-gray-600 w-96 h-screen mx-auto rounded-lg overflow-hidden'>
        <div className='text-white w-full font-bold text-4xl h-16 flex items-center pl-2'>
          <p>Calculator</p>
        </div>

        <div className='w-full h-20 '>
          <input
            type='text'
            placeholder='0'
            value={number}
            className=' w-full h-full border border-white text-white bg-gray-900 text-4xl text-right pr-5'
          />
        </div>

        {/* keypad */}
        <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>

          <button onClick={Clear} className='text-white  bg-gray-900 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center'>AC</button>
          <button onClick={Slice} className='text-white  bg-gray-900 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center'>C</button>
          <button value='÷' onClick={Click} className='text-gray-900  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center'>÷</button>
          <button value='+' onClick={Click} className='text-gray-900  bg-white w-20 h-40 rounded-lg font-bold text-3xl flex justify-center items-center row-span-2'>+</button>

          <button value='7' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>7</button>
          <button value='8' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>8</button>
          <button value='9' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>9</button>

          <button value='4' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>4</button>
          <button value='5' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>5</button>
          <button value='6' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>6</button>
          <button value='-' onClick={Click} className='text-gray-900  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center'>–</button>


          <button value='1' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>1</button>
          <button value='2' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>2</button>
          <button value='3' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>3</button>
          <button value='x' onClick={Click} className='text-gray-900 bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center'>x</button>

          <button value='.' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>.</button>
          <button value='0' onClick={Click} className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center'>0</button>
          <button onClick={outputAnswer} className='text-gray-900 bg-white w-42 h-20 rounded-lg font-bold text-3xl flex justify-center items-center col-span-2'>=</button>

        </div>
      </div>
    </section>
  )
}

export default CalculatorApp