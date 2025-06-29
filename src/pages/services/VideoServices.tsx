
import React from "react";
import Layout from "../../components/Layout";

const VideoServices = () => {
  const services = [
    {
      title: "Music Videos",
      description: "Creative music video production from concept to final cut"
    },
    {
      title: "Live Performance Recording",
      description: "Multi-camera live performance capture and production"
    },
    {
      title: "Video Editing",
      description: "Professional video editing and post-production services"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic motion graphics and visual effects for your content"
    },
    {
      title: "Promotional Content",
      description: "Marketing videos and promotional content creation"
    }
  ];

  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-josefin font-bold mb-8 text-center">Video Services</h1>
          <p className="text-xl font-josefin text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive video production services to showcase your music with stunning visual storytelling and professional quality.
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

export default VideoServices;
