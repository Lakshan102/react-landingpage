import React from 'react'
import './Team.css'
import Mem1 from '../img/mem1.png'
import mem2 from '../img/mem2.png'
import mem3 from '../img/mem3.png'
import mem4 from '../img/mem4.png'
import mem5 from '../img/mem5.png'

function Team() {
  return (
    <div className='team'>
      <h1>Meet Our team</h1>
        <div className='team-member'>
            <div>
            <img src={Mem1} alt='mem1' />
            <h3>Jane Doe - CEO & Founder</h3>
            <p>Jane is an experienced educator and visionary leader who founded EduLearn with a dream to revolutionize education. With over 20 years in the field, she brings a wealth of knowledge and passion to the company.</p>
            </div>

            <div>
            <img src={mem2} alt='mem2' />
            <h3>John Smith - Chief Technology Officer</h3>
            <p>John is a tech guru with a background in software development and a knack for innovative solutions. He leads our tech team in building and maintaining the EduLearn platform.</p>
            </div>

            <div>
            <img src={mem3} alt='mem3' />
            <h3>Emily Johnson - Head of Content</h3>
            <p>Emily is an expert in curriculum development and educational content creation. She ensures that our resources are high-quality, up-to-date, and aligned with educational standards.</p>
            </div>

            <div>
            <img src={mem4} alt='mem4' />
            <h3>Michael Brown - Marketing Manager</h3>
            <p>Michael drives our outreach efforts, helping us connect with learners and educators worldwide. His strategic vision and creativity keep EduLearn at the forefront of educational marketing.</p>
            </div>

            <div>
            <img src={mem5} alt='mem5' />
            <h3>Sarah Wilson - Customer Support Lead</h3>
            <p>Sarah oversees our customer support team, ensuring that our users receive prompt and helpful assistance. Her dedication to customer satisfaction is unparalleled.</p>
            </div>
      </div>
    </div>
  )
}

export default Team
