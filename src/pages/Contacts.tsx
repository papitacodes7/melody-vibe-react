
import React from "react";
import Layout from "../components/Layout";

const Contacts = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-josefin font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-josefin font-semibold">Get In Touch</h2>
              <div className="space-y-4 font-josefin text-gray-300">
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p>contact@musiclabel.com</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p>123 Music Street<br />Sound City, SC 12345</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-josefin font-semibold mb-6">Send us a message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg font-josefin"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg font-josefin"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg font-josefin"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg font-josefin font-semibold hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
