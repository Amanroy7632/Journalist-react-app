import React from 'react'
import image from './google.png'
function Login() {
  return (
    <div className=' flex justify-center items-center dark:bg-black dark:text-white mt-[10vh] py-10'>
        <div className='flex flex-col py-14 px-3 sm:px-8 gap-y-8 items-start bg-slate-200 dark:bg-[#19191A] border dark:border-[rgba(255,255,255,0.10)] rounded-3xl'>
           <div className='login-by-google'>
            <div className='flex flex-col items-start gap-y-2'>
             <p className='font-semibold text-3xl'>Secure Access Made Simple</p>
             <p className='text-base font-normal  max-w-lg' >For accessing your account. Pick your preferred login method.</p>
            </div>
            <div className='w-full flex flex-col gap-y-8 items-start px-4 sm:px-20 mx-auto'>
                <div className='w-full flex flex-col items-start gap-4 self-stretch cursor-pointer'>
                    <p className='flex items-center justify-center gap-x-3 text-base font-medium px-3 border border-black dark:border-[rgba(255,255,255,0.10)] rounded-3xl py-2 duration-500 hover:bg-slate-800 hover:text-white'>
                        <span><img className=' w-5' src={image} alt="" /></span> Continue with google
                    </p>
                </div>
                <div className='flex items-center gap-3 self-stretch'>
                    <div className='w-full h-[1px] bg-black dark:bg-gray-300'></div>
                    <p className='text-sm font-normal dark:text-gray-300 min-w-fit'>or register with email</p>    
                    <div className='w-full h-[1px] bg-black dark:bg-gray-300'></div>
                </div>
                <form action="" onSubmit={(e)=>{e.preventDefault()
                console.log(document.getElementById('email').value);}} className='flex flex-col items-center gap-y-4 self-stretch'>
                    <div className='w-full flex flex-col gap-2 items-center'>
                        <div className='w-full rounded-btn flex gap-3 items-center px-4 py-3 border border-black dark:border-[rgba(244,238,238,0.1)] rounded-[5rem]  '>

                          <label htmlFor="email">📧</label>
                          <input type="text" id='email' name='email' placeholder='Enter your Email' className='dark:text-white focus:outline-none w-full font-medium text-base placeholder:font-medium dark:placeholder:text-white bg-transparent' />
                        </div>
                        <button>Don't have an account ?</button>
                    </div>
                    <button className=' max-md:hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-xl mr-4 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-6 py-2 disabled:pointer-events-none disabled:opacity-50 text-white h-auto bg-indigo-600 hover:bg-indigo-700'>Get Started</button>
                </form>
            </div>

           </div>
        </div>
      
    </div>
  )
}

export default Login
