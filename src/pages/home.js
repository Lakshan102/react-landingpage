import React, { useState, useEffect } from 'react'
import './home.css'
import './contactUs.css'
import slide1 from '../img/slide01.png'
import slide2 from '../img/slide02.png'
import slide3 from '../img/slide03.png'
import slide4 from '../img/slide04.png'
import slide5 from '../img/slide05.png'
import contact from '../img/contact.png'

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
                    <img id='slid1' alt='slide1' src={slide1} />
                    <img id='slid2' alt='slide2' src={slide2} />
                    <img id='slid3' alt='slide3' src={slide3} />
                    <img id='slid4' alt='slide4' src={slide4} />
                    <img id='slid5' alt='slide5' src={slide5} />
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

            <div className='contact'>
                <div className='contact-img'>
                    <img src={contact} alt='contact'/>
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

    )
}

export default Home



