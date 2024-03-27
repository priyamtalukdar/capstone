import React from "react"

import Featured from "./featured/Featured"
import Dietss from "./Dietss/Dietss"
import Hero from "./hero/Hero"

import Recent from "./recent/Recent"


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Dietss/>
    </>
  )
}

export default Home
