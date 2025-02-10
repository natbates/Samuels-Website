import "../styles/contact.css";

const Contact = () => {
    return (
        <div id="contact-me">
            <div id="contact-container">
                <form action="https://formspree.io/f/movjwlkg" method="POST">
                    <h2>Contact Me</h2>
                    <div className="name-container">
                        <input placeholder="First name" type="text" name="first_name" required />
                        <input placeholder="Last name" type="text" name="last_name" required />
                    </div>

                    <input placeholder="Email" type="email" name="email" required />

                    <textarea placeholder="Write your message" name="message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>

                <div className="container-text">
                    <img id="shuttle-worth-logo" src="svgs/shuttleworth.svg" alt="Shuttleworth" />
                    <h4>Let's talk about everything.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <a className = "read-more" href="#">Read more</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
