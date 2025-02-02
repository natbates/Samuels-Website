import "../styles/contact.css";

const Contact = () => {
    return (
        <div id="contact-me">
            <h2>Contact Me</h2>
            <form action="https://formspree.io/f/movjwlkg" method="POST">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>

                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>

                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
