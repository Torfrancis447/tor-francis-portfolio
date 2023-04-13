import Head from 'next/head'
import NavBar from '../../components/NavBar'
import { Main } from '../../components/Main'
import React,{useState} from 'react'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import SkillsList from '../../components/SkillsList'
import AboutMe from '../../components/AboutMe'




export default function Home() {

  const [isClicked, setIsClicked] = useState(false)
  
  const handleClick = () => {
    setIsClicked(true);
  };



  return (
    <>
      <Head>
        <title>Tor Software Engineer </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />        
      </Head>
      <NavBar isClicked={isClicked} handleClick={handleClick}/>
      <Main isClicked={isClicked} handleClick={handleClick}/>
      <AboutMe />
      <SkillsList />
      <Projects />
      <Contact />      
    </>
  )
}
