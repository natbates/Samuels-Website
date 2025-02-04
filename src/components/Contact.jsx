import "../styles/contact.css";

const Contact = () => {
    return (
        <div id="contact-me">
            
            <div id = "contact-container">
                <form action="https://formspree.io/f/movjwlkg" method="POST">
                    <h2>Contact Me.</h2>
                    <div className="name-container">
                        <input placeholder = "First name" type="text" name="name" required />
                        <input placeholder = "Last name" type="text" name="name" required />
                    </div>

                    <input placeholder = "Email" type="email" name="email" required />

                    <textarea placeholder = "Write your message" name="message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>

                <div className="container-text">
                    <h4>Lets talk about everything.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <a>Read more</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
