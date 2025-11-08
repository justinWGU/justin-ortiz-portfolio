import './App.css'

function App() {

  return (
    <div className=''>
      <div className='border border-gray-300 max-w-[600px] mx-auto my-5 p-5 rounded-xl shadow-lg'>
        <h1 className='text-3xl mb-5'>Justin Ortiz</h1>
        <p className='mb-5'>Software Engineer with a B.S. in Computer Science and hands-on experience delivering full stack web applications using React, Django, and PostgreSQL. Specialized in building intelligent, data-driven web applications that integrate AI and computer vision, and extending them to interface with embedded systems. Passionate about clean architecture, thorough testing, and user-focused design.</p>
        <p className='mb-2'>Email: <a className='underline text-blue-400' href='mailto:justino9921@gmail.com'>justino9921@gmail.com</a></p>
        <p className='mb-2'>LinkedIn: <a className='underline text-blue-400' href='https://www.linkedin.com/in/justinortiz21/'>/justin21</a></p>
        <p className='mb-2'>GitHub: <a className='underline text-blue-400' href='https://github.com/justinWGU'>/justinWGU</a></p>
      </div>
      <div className='border border-gray-300 max-w-[600px] mx-auto my-5 p-5 rounded-xl shadow-lg'>
        <h2 className='text-2xl mb-5'>Projects</h2>

        <h3 className='text-xl mb-2'><a className='underline text-blue-400' href='http://codscoretracker.netlify.app'>Call of Duty Scoreboard</a><span> 🔗</span></h3>
        <a className='inline-block underline text-blue-400 mb-2' href='https://github.com/justinWGU/cod-score-tracker'>Repo</a><span> ↗️</span>
        <p className='mb-1'>React(TS), Django, PostgreSQL, Netlify, Render</p>
        <p className='mb-2'>Developed and deployed a full stack web app to display real-time Call of Duty scores. Used OpenCV to extract scores from live stream frames and an LLM API to convert data to structured output for a Django REST API. </p>

        <h3 className='text-xl mb-2 mt-5'><a className='w-min underline text-blue-400 mb-2' href='https://github.com/justinWGU/ai-rc-robot'>AI Robot</a><span> ↗️</span></h3>
        <p className='mb-2'>React(TS), Django, C </p>
        <p className='mb-2'>Built a web app for manual and autonomous robot control. Backend runs on a Raspberry Pi using Django, OpenCV, and a local LLM to generate movement commands sent via UART to an STM32 microcontroller. </p>
        
        <h3 className='text-xl mb-2 mt-5'><a className='w-min underline text-blue-400 mb-2' href='https://github.com/justinWGU/hotel-booking-app'>Hotel Booking Web App and Dockerization (Academic)</a><span> ↗️</span></h3>
        <p className='mb-2'>Spring Boot, Angular, Docker</p>
        <p className='mb-2'>Enhanced an app with multi-threading, timezone messaging, and real-time currency exchange.</p>

        <h3 className='text-xl mb-2 mt-5'><a className='w-min underline text-blue-400 mb-2' href='https://github.com/justinWGU/student-roster'>Student Roster System</a><span> ↗️</span></h3>
        <p className='mb-2'>C++, CMAKE</p>
        <p className='mb-2'>Developed a CLI app made with C++ to manage a roster of students, demonstrating OOP skills.</p>

      </div>
    </div>
  )
}

export default App
