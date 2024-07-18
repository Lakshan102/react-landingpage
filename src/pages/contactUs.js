import React,{useState} from 'react'
import './contactUs.css'
function ContactUs() {

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



  return (
    <div className='content'>
        <div className='Form'>
            <h1>Contact Us</h1>
            
            <form onSubmit={handleSubmit}>
                
                <label for="name">Name:</label><br/>
                <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/><br/>

                <label for="email">Email:</label><br/>
                <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}/><br/>

                <label for="message">Message:</label><br/>
                <textarea id="message" name="message"value={message} onChange={handleMessageChange}/><br/>

                <input type="submit" value="Submit"/>
            </form>
            {error && (
            <p className="error">{error}</p>
            )}
            {submit && !error && (
                <p>Thank you, for your feedback...!</p>
            )} 

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

export default ContactUs
