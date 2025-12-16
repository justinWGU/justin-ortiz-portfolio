import './App.css'

function App() {

  return (
    <div className='bg-black'>

      {/* Hero Section */}
      <section id='intro' className='flex flex-col items-center justify-center h-screen text-white'>
        <h1 className='text-5xl md:text-7xl font-semibold tracking-tight'>Justin Ortiz</h1>
        <p className='text-xs md:text-sm mt-4 tracking-[0.3em] uppercase text-white/70'>Fullstack Software Engineer</p>
        <nav className='flex gap-8 mt-10 text-sm text-white/60 hover:cursor-pointer'>
          <a className='transition hover:text-white' href='#projects'>Projects</a>
          <a className='transition hover:text-white' href='#about'>About</a>
          <a className='transition hover:text-white' href='#contact'>Contact</a>
        </nav>
      </section>

      {/* Projects */}
      <section id='projects' className='min-h-screen max-w-3xl mx-auto px-6 py-24 gap-4 flex flex-col'>
        <h2 className='text-sm mb-12 uppercase tracking-widest text-white/60'>Projects</h2>
        
          {/* Proj 1 */}
          <div className='flex flex-col gap-2 p-6 border border-white/10 bg-white/5 rounded-xl transition hover:bg-white/10'>
              <h4 className='text-lg text-white font-medium'>Call of Duty Scoreboard</h4>
              <p className='leading-relaxed text-white/65'>Developed and deployed a full stack web app to display real-time Call of Duty scores. Used OpenCV to extract scores from live stream frames and an LLM API to convert data to structured output for a Django REST API.</p>
              <div className='flex gap-2 text-white/50'>
                <p>React •</p>                
                <p>Django •</p>
                <p>Google Genai •</p>
                <p>OpenCV</p>
                <p></p>
              </div>
          </div>
          
          {/* Proj 2 */}
          <div className='flex flex-col p-6 gap-2 border border-white/10 bg-white/5 rounded-xl transition hover:bg-white/10'>
              <h4 className='text-lg text-white'>Intelligent RC Robot</h4>
              <p className='leading-relaxed text-white/65'>Built a web app for manual and autonomous robot control. Backend runs on a Raspberry Pi using Django, OpenCV, and a local LLM to generate movement commands sent via UART to an STM32 microcontroller. </p> 
              <div className='flex gap-2 text-white/50'>
                <p>React •</p>                
                <p>Django •</p>
                <p>C •</p>
                <p>OpenCV</p>
              </div>
          </div>

          {/* Proj 3 */}
          <div className='flex flex-col p-6 border gap-2 border-white/10 bg-white/5 rounded-xl transition hover:bg-white/10'>
              <h4 className='text-lg text-white'>Hotel Booking App Enhancement and Dockerization</h4>
              <p className='leading-relaxed text-white/65'>Enhanced an app with multi-threading, timezone messaging, and real-time currency exchange.</p>
              <div className='flex gap-2 text-white/50'>
                <p>Spring Boot •</p>                
                <p>Angular •</p>           
                <p>Docker</p>
              </div>
          </div>      
      </section>

      {/* About */}
      <section id='about' className='flex flex-col gap-4 max-w-3xl mx-auto px-12 py-24'>
        <h3 className='text-sm text-white/60 uppercase tracking-widest'>About</h3>
        <p className='max-w-lg text-white/70'>I create intelligent full-stack web apps that integrate AI like LLMs and computer vision. I also bring embedded systems expertise, connecting these advanced technologies with hardware to create innovative solutions.</p>
      </section>

      {/* Contact */}
      <section id='contact' className='flex flex-col gap-4 mx-auto max-w-3xl px-12 py-24'>
        <h3 className='text-sm text-white/60 uppercase tracking-widest'>Contact</h3>
        <p className='text-white/70'>Interested in working together or just want to say hello?</p>
        <div className='flex gap-8 text-white/60'>
          <a className='transition hover:text-white' href='mailto:justino9921@gmail.com'>Email</a>
          <a className='transition hover:text-white' href='https://www.linkedin.com/in/justinortiz21/'>LinkedIn</a>
          <a className='transition hover:text-white' href='https://github.com/justinWGU'>GitHub</a>
        </div>
      </section>
    </div>
  )
}

export default App;