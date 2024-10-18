import Image from "next/image";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

export default function Home() {
  return (
    <>
     <div className='relative w-full h-screen bg-zinc-800'>
      
        <Background></Background>
        <Foreground></Foreground>

        </div>
        
    </>
  );
}
