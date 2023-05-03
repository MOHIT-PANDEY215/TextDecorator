import Image from 'next/image'
import { Inter } from 'next/font/google'
import TextSelectionToolbar from '@/components/TextSelectionToolbar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [text,setText]=useState('The textarea text is selectable. You can remove this text,write your own and even make it bolder, italicized or underlined');

  const setNewText=(newText,startIndex,lastIndex)=>{
   let a=text;
   let n=a.slice(0,startIndex)+newText+a.slice(lastIndex);
   setText(n);
  }

  return (
    <div className='h-screen flex flex-col items-center'>
      <h1>Text Decorator</h1>

      <textarea className='flex m-auto w-10/12 h-2/4 p-2 resize-none'>
      {text}
      </textarea>
      <TextSelectionToolbar text={text} setNewText={setNewText}/>
    </div>
  )
}
