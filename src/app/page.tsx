'use client'

import { words } from '@/data/words'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import BackgroundDoddle from '@/svg/bg.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Home() {
  const sortedWords = words.sort((a, b) => {
    return a.word.localeCompare(b.word)
  })

  const [textInput, setTextInput] = useState('')
  const [filteredList, setFilteredList] = useState(sortedWords)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setTextInput(value)
    setFilteredList(
      sortedWords
        .filter((wordItem) => wordItem.word.toLowerCase().includes(value))
        .sort((a, b) => a.word.localeCompare(b.word))
    )
  }

  return (
    <main className='w-full'>
      <div className='flex justify-center items-center w-full px-4 py-8'>
        <h1 className='text-4xl text-center'>
          বাংলা GenZ <br /> অভিধান
        </h1>
      </div>

      <div className='h-32 md:max-h-64 md:h-full overflow-hidden'>
        <img className='w-full' src={BackgroundDoddle.src} />
      </div>

      <div className='px-2 py-10'>
        <div className='flex gap-3 max-w-lg mx-auto py-10 px-6'>
          <Input
            onChange={handleSearch}
            value={textInput}
            className='bg-[#2e2e2e] py-3 focus:outline-none h-12'
          />
          <Button size={'lg'}>Search</Button>
        </div>
        <section className='container sm:mx-auto md:max-w-screen-xl'>
          <div className='grid gap-2 md:gap-4 grid-col-span-1 sm:grid-cols-2 md:grid-cols-3'>
            {filteredList.map((wordItem, idx) => (
              <Dialog key={idx}>
                <DialogTrigger>
                  <div className='space-y-3 bg-[#2e2e2e] px-3 py-4 rounded-xl h-32 flex justify-center items-center hover:scale-95 transition-all duration-200'>
                    <div>
                      <p className='text-2xl font-bold'>{wordItem.word}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className='max-w-[90vw] md:max-w-lg'>
                  <DialogTitle>{wordItem.word}</DialogTitle>
                  <p
                    className='text-base'
                    style={{
                      whiteSpace: 'pre-wrap',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      margin: 0,
                    }}
                  >
                    {wordItem.explanation}
                  </p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
