import React, { useState, useEffect } from 'react'
import './home.css'
// import slide1 from '../img/slide01-light.png'
// import slide2 from '../img/slide02-light.png'
// import slide3 from '../img/slide03-light.png'
// import slide4 from '../img/slide04-light.png'
import slide5 from '../img/slide01-dark.png'
import slide6 from '../img/slide02-dark.png'
import slide7 from '../img/slide03-dark.png'
import slide8 from '../img/slide04-dark.png'
import contact from '../img/contact.png'
import mem1 from '../img/mem1.png'
import mem2 from '../img/mem2.png'
import mem3 from '../img/mem3.png'
import mem4 from '../img/mem4.png'
import mem5 from '../img/mem5.png'


function Home() {
    const [dateTime, setDateTime] = useState(new Date());
    // const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");
    // const [userName, setUserName] = useState("");
    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);


        return () => clearInterval(timer);
    }, []);

    const getGreetingMessage = () => {
        const hours = dateTime.getHours();
        if (hours < 12) {
            return "Good Morning...!";
        } else if (hours < 18) {
            return "Good Afternoon...!";
        } else {
            return "Good Evening...!";
        }
    };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            setError("All fields are required....!");
        } else {
            setError("");
            setSubmit(true);
        }
    };



    // const handleInputChange = (event) => {
    //     const name = event.target.value;
    //     setUserName(name);
    //     setWelcomeMessage(`Welcome, ${name}!`);






    return (
        <div>
            <div className='container'>
                <div className='slideshow'>
                    <img id='slid1' alt='slide1' src={slide5} />
                    <img id='slid2' alt='slide2' src={slide6} />
                    <img id='slid3' alt='slide3' src={slide7} />
                    <img id='slid4' alt='slide4' src={slide8} />
                </div>

                <div className='welcome'>
                    <h2 >{getGreetingMessage()}</h2>

                    {/* <div className='type-name'>
                <h3>{welcomeMessage}</h3>
                <input className="name-input" type="text" value={userName} onChange={handleInputChange} placeholder=" Enter your name here"/>
            </div> */}
                    <div className='content-home'>
                        <h1>Welcome to EduLearn!</h1>
                        <p>Your one-stop destination for quality educational resources. Dive into a world of knowledge with our comprehensive collection of school papers, engaging educational videos, and concise short notes. Empower your learning journey with EduLearn, where education meets excellence!</p>
                    </div>

                </div>

            </div>
            <hr/>
            <div className='ourTeam'>
                <h2>Our Team</h2>
                <div className='cards'>
                    <div className='card'>
                        <img src={mem1} alt='mem1' />
                        <div className='info'>
                            <p>Jane Doe - CEO & Founder</p>
                            <p>Jane is an experienced educator and visionary leader who founded EduLearn with a dream to revolutionize education. With over 20 years in the field, she brings a wealth of knowledge and passion to the company.</p>
                        </div>

                    </div>

                    <div className='card'>
                        <img src={mem2} alt='mem2' />
                        <div className='info'>
                            <p>John Smith - Chief Technology Officer</p>
                            <p>John is a tech guru with a background in software development and a knack for innovative solutions. He leads our tech team in building and maintaining the EduLearn platform.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={mem3} alt='mem3' />
                        <div className='info'>
                            <p>Emily Johnson - Head of Content</p>
                            <p>Emily is an expert in curriculum development and educational content creation. She ensures that our resources are high-quality, up-to-date, and aligned with educational standards.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={mem4} alt='mem4' />
                        <div className='info'>
                            <p>Michael Brown - Marketing Manager</p>
                            <p>Michael drives our outreach efforts, helping us connect with learners and educators worldwide. His strategic vision and creativity keep EduLearn at the forefront of educational marketing.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={mem5} alt='mem5' />
                        <div className='info'>
                            <p>Sarah Wilson - Customer Support Lead</p>
                            <p>Sarah oversees our customer support team, ensuring that our users receive prompt and helpful assistance. Her dedication to customer satisfaction is unparalleled.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='history'>
                <h1>Our journey</h1>
                <p>EduLibrary was founded in 2024 by a group of passionate educators and tech enthusiasts who believed in the power of technology to transform education. Starting as a small online resource hub, we have grown into a comprehensive educational platform that serves thousands of students, teachers, and lifelong learners worldwide.</p><br />
                <p>Over the years, we have continuously evolved, incorporating the latest educational trends and technologies to provide high-quality, accessible learning materials. Our commitment to innovation and excellence has made EduLearn a trusted name in the field of education.</p>
            </div>
            <hr/>
            <div className='contact'>
                <div className='contact-img'>
                    <img src={contact} alt='contact' />
                </div>
                <div className='Form'>
                    <form onSubmit={handleSubmit}>
                        <h1>Contact Us</h1>
                        <label for="name">Name:</label><br />
                        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} /><br />

                        <label for="email">Email:</label><br />
                        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} /><br />

                        <label for="message">Message:</label><br />
                        <textarea id="message" name="message" value={message} onChange={handleMessageChange} /><br />

                        <button type="submit" value="Submit" >Submit</button>
                    </form>
                    {error && (
                        <p className="error">{error}</p>
                    )}
                    {submit && !error && (
                        <p>Thank you, for your feedback...!</p>
                    )}

                </div>

            </div>
            
            <div className='footer'>

                <div className='contact-info'>
                    <strong>Company's Address:</strong>
                    <p>EduLearn Inc.
                        1234 Education Lane
                        Knowledge City, ED 56789</p>

                    <strong>Phone Number:</strong>
                    <p>+1 (800) 123-4567</p>

                    <strong>Email:</strong>
                    <p>support@edulearn.com</p>
                </div>
            </div>

        </div>

    )
}

export default Home



