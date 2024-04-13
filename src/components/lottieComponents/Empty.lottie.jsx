import React from 'react'
import Lottie from "lottie-react";
import EmptyJson from "../../lottie/emptylist.json"

const EmptyLottie = () => {
  return (
    <div className='w-[300px] h-[300px]'>
        <Lottie className='' animationData={EmptyJson} loop size={50} />
    </div>
  )
}

export default EmptyLottie