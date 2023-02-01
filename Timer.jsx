
import  { useState, useEffect } from 'react';
import Box from "./Box";
import "./Box.css"
import Form from "./Form";


export default function Timer()
{
  const [isIdle, setIsIdle] = useState(false);
  let timeoutId;
  const startTimer = () => {
    timeoutId = setTimeout(() => setIsIdle(true), 5000);
  };

  const resetTimer = () => {
    clearTimeout(timeoutId);
    setIsIdle(false);
    startTimer();
  };


  useEffect(() => {
    setIsIdle(false);
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('mousedown', resetTimer);
    document.addEventListener('keydown', resetTimer);
    document.addEventListener('touchstart', resetTimer);

    // startTimer();

    // return () => {
    //   document.removeEventListener('mousemove', resetTimer);
    //   document.removeEventListener('mousedown', resetTimer);
    //   document.removeEventListener('keydown', resetTimer);
    //   document.removeEventListener('touchstart', resetTimer);
    //   // clearTimeout(timeoutId);
    // };
  }, []);



  return (
    <div class="content-center">
      {isIdle ?  <Box/>: <div> <Form/></div>  }


      <form class = "pr-0.5 mx-24 my-10">
    <label for="email" class="block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@gmail" required/>
    <label for="password" class="block m b-2text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  <div class="flex items-start mb-6">
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>











    </div>
  );
};

