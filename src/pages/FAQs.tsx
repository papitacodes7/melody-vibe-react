
import React from "react";
import Layout from "../components/Layout";

const FAQs = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive audio and video production services including recording, mixing, mastering, music video production, and artist development."
    },
    {
      question: "How can I submit my music?",
      answer: "You can submit your music through our contact form or email us directly at submissions@musiclabel.com with your demo and artist information."
    },
    {
      question: "Do you work with new artists?",
      answer: "Yes! We actively seek out talented new artists and provide them with the resources and support needed to develop their careers."
    },
    {
      question: "What are your rates?",
      answer: "Our rates vary depending on the project scope and requirements. Contact us for a personalized quote based on your specific needs."
    },
    {
      question: "How long does production take?",
      answer: "Production timelines vary by project complexity. Typically, a single track takes 2-4 weeks, while full albums may take 2-6 months."
    }
  ];

  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-josefin font-bold mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-josefin font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300 font-josefin">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 font-josefin mb-4">
              Don't see your question answered here?
            </p>
            <a
              href="/contacts"
              className="bg-white text-black px-6 py-3 rounded-lg font-josefin font-semibold hover:bg-gray-200 transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
