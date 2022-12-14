import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'


export default function Home() {
  return (
    <div className="bg-[#393939]  text-white snap-y snap-mandatory overflow-scroll z-0 h-screen " >
      <Head>
        <title>Emmanuels Portfolio</title>
        
      </Head>
      <Header/>

      <section id="hero" className=" snap-start"  >
        <Hero/>
        </section>

        <section id="about"  className=" snap-center" >
          <About/>
        </section>

        <section  id="experience" className="snap-center" >
          <WorkExperience/>
        </section>

        <section id="skill" className=" snap-start" >
          <Skills/>

        </section>

      
    </div>
  )
}
