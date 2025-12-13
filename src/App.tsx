import './App.css'

function App() {

  return (
    <div className='bg-black'>

      {/* Hero Section */}
      <div className='flex flex-col items-center justify-center min-h-screen text-white'>
        <h1 className='text-7xl font-semibold tracking-tight'>Justin Ortiz</h1>
        <p className='text-sm mt-6 tracking-[0.3em] uppercase'>Fullstack Software Engineer</p>
        <nav className='flex gap-8 mt-6 text-gray-300 hover:text-white hover:cursor-pointer transition'>
          <a href='#projects'>Projects</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div>

      {/* Projects */}
      <div id='projects' className='min-h-screen px-30 gap-4 flex flex-col justify-center'>
        <h2 className='text-sm uppercase tracking-widest text-gray-400'>Projects</h2>
        
          {/* Proj 1 */}
          <div className='flex flex-col gap-4'>

          <div className='flex flex-col p-6 border border-white/10 bg-white/5 rounded-xl'>
              <h4 className='text-lg text-white'>Call of Duty Scoreboard</h4>
              <p className='mt-4 text-gray-200'>Developed and deployed a full stack web app to display real-time Call of Duty scores. Used OpenCV to extract scores from live stream frames and an LLM API to convert data to structured output for a Django REST API.</p>
              <div className='flex gap-2 mt-4 text-gray-400'>
                <p>React •</p>                
                <p>Django •</p>
                <p>Google Genai •</p>
                <p>OpenCV</p>
                <p></p>
              </div>
          </div>
          
          {/* Proj 2 */}
          <div className='flex flex-col p-6 border border-white/10 bg-white/5 rounded-xl'>
              <h4 className='text-lg text-white'>Intelligent RC Robot</h4>
              <p className='mt-4 text-gray-200'>Built a web app for manual and autonomous robot control. Backend runs on a Raspberry Pi using Django, OpenCV, and a local LLM to generate movement commands sent via UART to an STM32 microcontroller. </p> 
              <div className='flex gap-2 mt-4 text-gray-400'>
                <p>React •</p>                
                <p>Django •</p>
                <p>C •</p>
                <p>OpenCV</p>
                <p></p>
              </div>
          </div>

          {/* Proj 3 */}
          <div className='flex flex-col p-6 border border-white/10 bg-white/5 rounded-xl'>
              <h4 className='text-lg text-white'>Hotel Booking App Enhancement and Dockerization</h4>
              <p className='mt-4 text-gray-200'>Enhanced an app with multi-threading, timezone messaging, and real-time currency exchange.</p>
              <div className='flex gap-2 mt-4 text-gray-400'>
                <p>Spring Boot •</p>                
                <p>Angular •</p>           
                <p>Docker</p>
              </div>
          </div>      
        </div>
      </div>

      {/* About */}
      <div id='about' className='flex flex-col justify-center px-30 mt-6 min-h-[40vh]'>
        <h3 className='text-sm text-gray-400 uppercase tracking-widest'>About</h3>
        <p className='mt-6 max-w-lg text-gray-300'>I create intelligent full-stack web apps that integrate AI like LLMs and computer vision. I also bring embedded systems expertise, connecting these advanced technologies with hardware to create innovative solutions.</p>
      </div>

      {/* Contact */}
      <div id='contact' className='flex flex-col justify-center mt-6 px-30 min-h-[40vh]'>
        <h3 className='text-sm text-gray-400 uppercase tracking-widest'>Contact</h3>
        <p className='mt-6 text-gray-300'>Interested in working together or just want to say hello?</p>
        <div className='flex gap-8 mt-6 text-gray-300'>
          <a className='transition hover:text-white' href='mailto:justino9921@gmail.com'>Email</a>
          <a className='transition hover:text-white' href='https://www.linkedin.com/in/justinortiz21/'>LinkedIn</a>
          <a className='transition hover:text-white' href='https://github.com/justinWGU'>GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default App;