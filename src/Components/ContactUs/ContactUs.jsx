import { useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
    

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = (event) => {
        event.preventDefault(); // Prevents form submission

        if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
            toast.success("Message sent");
        } else {
            toast.error("Please fill in all fields");
        }
    };
    return (
        <section className="p-6 dark:text-gray-800 lg:mt-20 min-h-[610px]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>EastTour-Contact Us</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form onSubmit={handleSend} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50 border">
                <h2 className="w-full text-3xl font-bold leading-tight text-center">Contact us</h2>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                    <input id="name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                    <input id="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                    <textarea id="message" placeholder="Message..." value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-green-400 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Send</button>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;