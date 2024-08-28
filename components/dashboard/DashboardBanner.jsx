'use client'
import { GlobeLock, XIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

export default function DashboardBanner() {
    const [hidden, setHidden] = useState(false)
  return (
    <div className={`${hidden ? "hidden" : 'flex items-center py-3 px-5 bg-blue-50 gap-8 relative'}`}>
        <GlobeLock className='w-12 h-12 text-slate-500'/>
        <div className='mr-5 max-w-[550px]'>
            <h2 className='font-bold text-2xl'>Start accepting online payments.</h2>
            <p>Businesses are moving towards online payments as they are easy, secure and fast. Try them for your business today.</p>
        </div>
        <button className='py-2 px-8 uppercase bg-blue-600 text-white rounded-lg'>Enable</button>
        <button onClick={() => setHidden(true)} className='absolute top-4 right-8 text-slate-600'><XIcon/></button>
    </div>
  )
}
