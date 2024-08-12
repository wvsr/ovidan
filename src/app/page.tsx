import { words } from '@/data/words'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import BackgroundDoddle from '@/svg/bg.svg'
export default function Home() {
  return (
    <main className='w-full'>
      <div className='flex justify-center items-center w-full px-4 py-8'>
        <h1 className='text-4xl'>বাংলা অভিধান</h1>
      </div>

      <div className='h-32 md:max-h-64 md:h-full overflow-hidden'>
        <img className='w-full' src={BackgroundDoddle.src} />
      </div>

      <div className='px-5 py-10'>
        <section className='container mx-2 sm:mx-auto max-w-screen-xl'>
          <div className='grid gap-4 grid-col-span-1 sm:grid-cols-2 md:grid-cols-3'>
            {words.map((wordItem, idx) => {
              return (
                <>
                  <Dialog>
                    <DialogTrigger>
                      <div
                        key={idx}
                        className='space-y-3 bg-[#2e2e2e] px-3 py-4 rounded-xl h-32 flex justify-center items-center hover:scale-95 transition-all duration-200'
                      >
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
                </>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
