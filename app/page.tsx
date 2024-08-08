import Head from "next/head"
import { Component } from "react"
import { attributes, react as HomeContent } from "../content/home.md"

const Home = () => {
  let { title } = attributes
  return (
    <>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul></ul>
      </article>
    </>
  )
}

export default Home
