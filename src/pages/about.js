import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
function about() {
  return (
    <div className='content'>
        <div className='history'>
            <h1>Our journey</h1>
            <p>EduLibrary was founded in 2024 by a group of passionate educators and tech enthusiasts who believed in the power of technology to transform education. Starting as a small online resource hub, we have grown into a comprehensive educational platform that serves thousands of students, teachers, and lifelong learners worldwide.</p><br/>

            <p>Over the years, we have continuously evolved, incorporating the latest educational trends and technologies to provide high-quality, accessible learning materials. Our commitment to innovation and excellence has made EduLearn a trusted name in the field of education.</p>
        </div>
        <div className='about'>
            <Link className="link" to='/Mission'>Our Mission</Link>
            <Link className="link" to='/Team'>Our Team</Link>
            <Link className="link" to='/Value'>Our Values</Link>
        </div>
        
      
    </div>
  )
}

export default about
