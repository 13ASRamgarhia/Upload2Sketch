import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  document.title = "Page not found | Cinesense"
  const navigate = useNavigate()

  const handleBackBtn = () => {
    navigate("/")
  }

  return (
    <div className='pt-14 h-screen w-screen'>
      <div className="flex flex-col items-center justify-center text-headingColor h-full space-y-10">
        <div className='flex flex-col items-center justify-center text-headingColor space-y-2'> 
          <p className="text-4xl font-drglitch">ERROR 404</p>
          <p className="text-xl font-inter font-bold">PAGE NOT FOUND</p>
        </div>
        <button onClick={handleBackBtn} className="text-xl bg-headingColor px-6 py-3 text-center text-white rounded-xl">Back to homepage</button>

      </div>
    </div>
  )
}

export default ErrorPage
