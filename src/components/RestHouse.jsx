import React from 'react'
import ok from "../assets/ok.png"
import ok2 from "../assets/ok2.png"

const RestHouse = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center gap-10 px-4 py-10">
      <img className="h-[600px] max-w-full object-contain sm:h-[500px] xs:h-[300px]" src={ok} alt="Image 1" />
      <img className="h-[600px] max-w-full object-contain sm:h-[500px] xs:h-[300px]" src={ok2} alt="Image 2" />
    </div>
    </>
  )
}

export default RestHouse
