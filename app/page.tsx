import Image from "next/image"
import { caladea } from "./fonts"

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col px-4 lg:mx-20">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="bg-white">
          <div className="mt-48">
            <span className={`${caladea.className} text-6xl font-bold`}>Nottingham Panthers IHC</span>
          </div>
          <div className="relative h-80 w-full">
            <Image src={'/images/panthersihc-home.webp'} style={{objectFit: 'cover'}} fill />
          </div>
        </div>

        <div className="bg-white">
          <div className="mt-24">
            <span className={`${caladea.className} text-6xl font-bold`}>Nottingham Forest FC</span>
          </div>
          <div className="relative h-96 w-full">
            <Image src={'/images/nffc-home.webp'} style={{objectFit: 'cover'}} fill />
          </div>
        </div>
        
        <div className="bg-white">
          <div className="mt-48">
            <span className={`${caladea.className} text-4xl font-bold`}>Southampton FC</span>
          </div>
          <div className="relative h-80 w-full">
            <Image src={'/images/saintsfc-home.webp'} style={{objectFit: 'cover'}} fill />
          </div>
        </div>
</div>
    </main>
  )
}
