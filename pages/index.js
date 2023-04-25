import Image from "next/image";


export default function Home() {
  return (
      <>
        <div className="">
         
          <main>
            <div className="flex flex-col items-center">
          <h1 className="text-[#f8f6f5] text-6xl text-center my-10 font-bold">Code Catalyst</h1>
          <Image  src={"/heroPoster.jpg"} width={559} height={100}/>
            </div>
          </main>
        </div>
      </>
  )
}
