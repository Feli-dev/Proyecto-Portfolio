import Image from 'next/image'

//Footer
import Footer from '@/components/Footer'
import Experiments from '@/components/Experiments'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-screen flex-col items-center justify-end bg-stone-100 overflow-clip`}
    >

      <div className='w-screen px-10 py-10'>
        <Experiments />
        <Footer />
      </div>
    </main>
  )
}
