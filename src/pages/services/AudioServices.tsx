
import React from "react";
import Layout from "../../components/Layout";

const AudioServices = () => {
  const services = [
    {
      title: "Music Production",
      description: "Full-scale music production from concept to final master"
    },
    {
      title: "Recording Studio",
      description: "State-of-the-art recording facilities with professional equipment"
    },
    {
      title: "Mixing & Mastering",
      description: "Professional mixing and mastering services for pristine sound quality"
    },
    {
      title: "Sound Design",
      description: "Custom sound design for unique sonic experiences"
    },
    {
      title: "Audio Post-Production",
      description: "Complete audio post-production for various media formats"
    }
  ];

  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-josefin font-bold mb-8 text-center">Audio Services</h1>
          <p className="text-xl font-josefin text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Professional audio services to bring your musical vision to life with industry-standard quality and creative excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-josefin font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 font-josefin">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AudioServices;
