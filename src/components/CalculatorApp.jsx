import React from 'react'

const CalculatorApp = () => {
  return (
      <section>
        <div className='bg-gray-600 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-10 '>
          <div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>
            <p>Calculator</p>
          </div>

          <div className='w-full h-20 '>
            <input
              type='text'
              placeholder='0'
              className=' w-full h-full border border-white text-white bg-gray-900 text-4xl text-right pr-5 '
            />
          </div>

          {/* keypad */}
          <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>
            <button className='text-white  bg-gray-900 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
            <button className='text-white  bg-gray-900 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>

            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>9</button>
            <button className='text-white w-20 h-20 bg-gray-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>

            <button className='text-gray-900  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>x</button>
            <button className='text-gray-900  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>÷</button>
            <button className='text-gray-900  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>–</button>
            <button className='text-gray-900  bg-white w-20 h-40 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'>+</button>

            <button className='text-gray-900  bg-white w-42 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button>

          </div>
        </div>
      </section>
  )
}

export default CalculatorApp