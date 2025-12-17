import './App.css'

function App() {

  return (
    <div className='bg-black'>

      {/* Hero Section */}
      <section id='intro' className='py-24 px-6 flex flex-col max-w-5xl mx-auto text-white'>
        <h1 className='text-5xl md:text-7xl font-semibold tracking-tight'>Justin Ortiz</h1>
        <p className='leading-relaxed max-w-3xl mt-4 text-white/70'>
          Entry-level Software Engineer focused on full-stack web development, AI integration, and embedded systems.        </p>
        <div className='flex gap-8 mt-10 text-sm text-white/60 hover:cursor-pointer'>
          <a className='transition hover:text-white underline' target='_blank' href='https://www.linkedin.com/in/justinortiz21/'>LinkedIn</a>
          <a className='transition hover:text-white underline' target='_blank' href='https://github.com/justinWGU'>GitHub</a>
          <a className='transition hover:text-white underline' target='_blank' href='/public/JustinOrtizResume2025.pdf'>Resume (PDF)</a>
        </div>
      </section>

      {/* Projects */}
      <section id='projects' className='max-w-5xl mx-auto px-6 py-24 gap-4 flex flex-col'>
        <h2 className='text-sm mb-12 uppercase tracking-widest text-white/60'>Projects</h2>
        
          {/* Proj 1 */}
          <div className='flex flex-col gap-2 p-6 border border-white/10 bg-white/5 rounded-xl transition hover:bg-white/10'>
              <h4 className='text-lg text-white font-medium'>Live Video Game Scoreboard</h4>
              <p className='leading-relaxed text-white/60'>
                A live scoreboard that quickly displays Call of Duty competitive match scores without the need to sign in or join a live stream.
              </p>
              <div className='flex gap-2 text-sm text-white/50'>
                <p>React •Django • Google Genai • OpenCV</p>
              </div>
              <ul className='text-white/65 mt-2 leading-relaxed space-y-2 list-disc list-inside'>
                <li>Leveraged computer vision to capture a snapshot from a live stream</li>
                <li>Utilized an LLM API to extract the scores from the snapshot</li>
                <li>Developed a RESTful API to expose the captured scores for consumption</li>
              </ul>
              <a target='_blank' href='https://github.com/justinWGU/cod-score-tracker' className='underline text-white/50 hover:text-white hover:cursor-pointer'>GitHub</a>
          </div>
          
          {/* Proj 2 */}
          <div className='flex flex-col p-6 gap-2 border border-white/10 bg-white/5 rounded-xl transition hover:bg-white/10'>
              <h4 className='text-lg text-white'>Intelligent RC Robot</h4>
              <p className='leading-relaxed text-white/60'>
                An intelligent robot operated manually or autonomously, serving to demonstrate the capabilities of interfacing advanced AI technologies with real hardware control.
              </p> 
              <div className='flex gap-2 text-sm text-white/50'>
                <p>React • Django • Llama3 • OpenCV • C • Raspberry Pi • STM32</p>
              </div>
              <ul className='text-white/65 mt-2 leading-relaxed space-y-2 list-disc list-inside'>
                <li>Leveraged computer vision to access camera connected to Raspberry Pi</li>
                <li>Developed RESTful API to expose video data for a visual interface</li>
                <li>Built an inteface to display an interactive POV of the robot and control its peripherals</li>
                <li>Established UART-based communication between an STM32 microcontroller and a Raspberry Pi</li>
              </ul>
              <a target='_blank' href='https://github.com/justinWGU/ai-rc-robot' className='underline text-white/50 hover:text-white hover:cursor-pointer'>GitHub</a>
          </div>

          {/* Proj 3 */}
          <div className='flex flex-col p-6 border gap-2 border-white/10 bg-white/5 rounded-xl transition hover:bg-white/10'>
              <h4 className='text-lg text-white'>Developer Portfolio Website</h4>
              <p className='leading-relaxed text-white/60'>
                My comprehensive personal website serving to showcase my range of skills in fullstack web development, AI integration, and embedded systems.
              </p>
              <div className='flex gap-2 text-sm text-white/50'>
                <p>React • TailwindCSS • Netlify</p>
              </div>
              <ul className='text-white/65 mt-2 leading-relaxed space-y-2 list-disc list-inside'>
                <li>Applied modern tools to design and develop a polished frontend</li>
                <li>Utilized Netlify to publicy display the frontend from a custom URL</li>
              </ul>
              <a target='_blank' href='https://github.com/justinWGU/justin-ortiz-portfolio' className='underline text-white/50 hover:text-white hover:cursor-pointer'>GitHub</a>
          </div>        
      </section>

      {/* About */}
      <section id='about' className='flex flex-col gap-4 max-w-5xl mx-auto px-12 py-24'>
        <h3 className='max-w-3xl text-sm text-white/60 uppercase tracking-widest'>About</h3>
        <p className='text-white/70'>
          I am a computer science graduate with a strong interest in web development and embedded systems. I focus on building web applications that integrate Artificial intelligence and interface with MCUs to create innovative solutions. I am currently seeking an entry-level software engineering role where I can apply my skills and continue developing production-ready systems.
        </p>
      </section>

      {/* Back to Top */}
      <section id='back-to-top' className='py-24 px-12 max-w-5xl mx-auto'>
        <a href='#intro' className='p-5 m-2 border text-white/50 border-white/30 hover:bg-white hover:text-black'>Back to top</a>
        <a href='mailto:justino9921@gmail.com' className='p-5 m-2 border text-white/50 border-white/30 transition hover:bg-white hover:text-black'>Email</a>
      </section>

      {/* Footer */}
      <section id='footer' className='text-white/40 max-w-xs text-xs px-12 pb-5 pt-24 mx-auto'>
        © {new Date().getFullYear()} Justin Ortiz
      </section>
    </div>
  )
}

export default App;