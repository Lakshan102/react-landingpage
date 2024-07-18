import React,{ useState, useEffect } from 'react'
import './home.css'


function Home() {
    const [dateTime, setDateTime] = useState(new Date());
    const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");
    const [userName, setUserName] = useState("");
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

        const handleInputChange = (event) => {
        const name = event.target.value;
        setUserName(name);
        setWelcomeMessage(`Welcome, ${name}!`);
  };
  return (
    <div className='container'>
        
        <div className='welcome'>
            <h2 >{getGreetingMessage()}</h2>
            <div className='type-name'>
                <h3>{welcomeMessage}</h3>
                <input className="name-input" type="text" value={userName} onChange={handleInputChange} placeholder=" Enter your name here"/>
            </div>
            <div className='content-home'>
                <h1>Welcome to EduLearn!</h1>
                <p>Your one-stop destination for quality educational resources. Dive into a world of knowledge with our comprehensive collection of school papers, engaging educational videos, and concise short notes. Empower your learning journey with EduLearn, where education meets excellence!</p>
            </div>
            
        </div>
            
           
        <div>

        </div>
    </div>
  )
}

export default Home
