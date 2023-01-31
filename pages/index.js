import { useState } from "react";
import data from "../components/data"

export default function Home(){
  const [clicked, setClicked] = useState(data);
  const [on, setOn] = useState(true);

  return(      
    <section className="flex justify-center mt-12">
        <div className="grid grid-cols-3 gap-4">
          {
            clicked.map((w,i)=><div key={i} onClick={
              ()=>{
                w.bg = !w.bg;
                setOn(current => !current)
              }
            } className={`h-32 w-32 rounded-xl border-2 border-black ${w.bg === true ? "bg-fuchsia-500" :"bg-fuchsia-100" }`}>{w.text}</div>)
          }
        </div>
      </section>
  )
}
 