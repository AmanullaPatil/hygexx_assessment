import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)

  return (
    <div className='bg-white overflow-x-hidden'>
      <header className=''>
        <div className='md:flex justify-between md:px-24 px-2 md:pt-8'>
          <div className='py-3.5'>
            <img src='/images/Hyggex.png' className=' md:w-[191px] h-[39px]' />
          </div>
          <div className='flex space-x-4 px-2 '>
            <ul className='flex  space-x-2 md:space-x-4 py-3'>
              <li>Home</li>
              <li>Flashcard</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
            <button className='bg-gradient-to-b from-[#06286E] to-[#164EC0] px-2 rounded-full  text-white md:w-[128px] md:h-[48px] '>Login</button>
          </div>
        </div>
      </header>
      <div className=''>
        <div className=' flex py-14 md:px-24 px-2'>
          <img className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] ' src='/images/Home.png' />
          <img className='md:w-[20.41px] w-10 h-[17px] md:h-[25px]  mt-[2px]' src='/images/greater.png ' />
          <h6 className='text-[rgb(105,102,113)] font-semibold md:text-lg text-sm '>Flashcard</h6>
          <img className='md:w-[20.41px] w-10 h-[17px] md:h-[25px]  mt-[2px]' src='/images/greater.png' />
          <h6 className='text-[#696671] font-semibold md:text-lg text-sm '>Mathematics</h6>
          <img className='md:w-[20.41px] w-10 h-[17px] md:h-[25px]  mt-[2px]' src='/images/greater.png' />
          <p className='text-[#06286E] md:text-lg text-sm  font-bold '>Relation and Functions</p>
        </div>
        <div className='md:px-24 px-2'>
          <h1 className='bg-gradient-to-t from-[#06286E] to-[#164EC0] bg-clip-text text-transparent md:text-4xl font-extrabold'>Relations and Functions (Mathematics)</h1>
        </div>
        <div className='md:grid md:place-items-center px-2'>
          <div className='pt-10 text-center flex md:space-x-14 space-x-4'>
            <h5 className='text-[#06286E] font-bold md:text-2xl underline-offset-8 underline'>Study</h5>
            <h5 className='text-[#696671] font-semibold md:text-2xl '>Quiz</h5>
            <h5 className='text-[#696671] font-semibold md:text-2xl '>test</h5>
            <h5 className='text-[#696671] font-semibold md:text-2xl'>Game</h5>
            <h5 className='text-[#696671] font-semibold md:text-2xl'>Others</h5>
          </div>
          <div className='flex justify-center'>
            <div className='bg-gradient-to-tr from-[#2284F1] to-[#051A91] md:w-[712px] md:h-[393.19px] w-screen  rounded-3xl mt-10 grid items-center '>
              <div className='flex justify-between py-8'>
                <img className='w-[19.84px] h-[28.34px]  ml-10' src='/images/bulb.png' />
                <img className='w-[30.5px] h-[30.85px]  mr-10' src='/images/sound.png' />
              </div>
              <div className='text-center mb-12'>
                <h3 className='font-semibold text-white md:text-4xl text-xl'>9 + 6 + 7x - 2x - 3</h3>
              </div>
            </div>
          </div>
          <div className='flex md:w-screen justify-center md:space-x-32 space-x-6 pt-4'>
            <img src='/images/reload.png' className='w-[30px] h-[30px]' />
            <img src='/images/l arrow.png' className='w-[30px] h-[30px]' />
            <h5 className='font-bold text-2xl'>1/10</h5>
            <img src='/images/r arrow.png' className='w-[30px] h-[30px]' />
            <img src='/images/landscape.png' className='w-[30px] h-[30px]' />
          </div>
        </div>

      </div>
      <div className='flex py-20 md:px-24 px-2 justify-between space-x-4'>
        <div className='flex '>
          <img src='/images/Group 1.png' className='w-[84.6px] h-[84.6px] ' />
          <img src='/images/Frame 40.png' className='w-[115px] h-[65px] pt-4' />

        </div>
        <div className='flex pt-4 pl-14'>
          <img src='/images/Vector.png' className='md:w-[50px] md:h-[50px] w-[25px] h-[25px] ' />
          <h3 className='font-semibold md:text-2xl text-xl text-[#06286E] md:py-1 px-2'>Create Flashcard</h3>
        </div>
      </div>
      <div className='md:px-24 px-2'>
        <h2 className='bg-gradient-to-t from-[#06286E] to-[#164EC0] bg-clip-text text-transparent text-5xl font-bold py-8'>FAQ</h2>
      </div>
      <div className='p-2 md:w-[60%] border border-[#164EC0] rounded-lg md:mx-24 '>
        <div className='flex justify-between'>
          <h5 className='font-semibold'>Can education flashcards be used for all age groups?</h5>
          <button className='' onClick={() => { setFaq1(!faq1) }}>
            <img src='/images/down.png' className={faq1 ? `rotate-180` : ''} />
          </button >


        </div>
        {
          faq1 ?
            <p className='font-semibold text-gray-700'>Yes,Education Flashcards can be tailored to different age groups and learning levels.There are Flashcards designed for preschoolers,elementry school students,elementary school students and even for college-level and adult learners</p>
            :
            null
        }
      </div>
      <div className='py-3'>
        <div className='p-2 md:w-[60%] border border-[#164EC0] rounded-lg md:mx-24 '>
          <div className='flex justify-between'>
            <h5 className='font-semibold'>How do education flashcards work?</h5>
            <button className='' onClick={() => { setFaq2(!faq2) }}>
              <img src='/images/down.png' className={faq2 ? `rotate-180` : ''} />
            </button >


          </div>
          {
            faq2 ?
              <p className='font-semibold text-gray-700'>Education Flashcards work by presenting a question or prompt by one side and the corresponding answer or information on the other.Users can review the cards repeatedly reinforcing their memory and enhancing learning throughrepetition.</p>
              :
              null
          }
        </div>
        <div className='py-3'>
          <div className='p-2 md:w-[60%] border border-[#164EC0] rounded-lg md:mx-24 '>
            <div className='flex justify-between'>
              <h5 className='font-semibold'>Can education flashcards be used for test preparation?</h5>
              <button className='' onClick={() => { setFaq3(!faq3) }}>
                <img src='/images/down.png' className={faq3 ? `rotate-180` : ''} />
              </button >


            </div>
            {
              faq3 ?
                <p className='font-semibold text-gray-700'>Absolutely.Flashcards are excellent for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.</p>
                :
                null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
