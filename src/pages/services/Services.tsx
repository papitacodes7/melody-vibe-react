
import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-josefin font-bold mb-8 text-center">Our Services</h1>
          <p className="text-xl font-josefin text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive music production and video services to bring your creative vision to life with professional quality and industry expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Audio Services Section */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
              <h2 className="text-3xl font-josefin font-bold mb-6 text-white">Audio Services</h2>
              <p className="text-gray-300 font-josefin mb-8">
                Professional audio services to bring your musical vision to life with industry-standard quality and creative excellence.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-josefin">Music Production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-josefin">Recording Studio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-josefin">Mixing & Mastering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-josefin">Sound Design</span>
                </div>
              </div>
              <Link 
                to="/services/audio" 
                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-josefin font-semibold hover:bg-gray-200 transition-colors"
              >
                Explore Audio Services
              </Link>
            </div>

            {/* Video Services Section */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
              <h2 className="text-3xl font-josefin font-bold mb-6 text-white">Video Services</h2>
              <p className="text-gray-300 font-josefin mb-8">
                Comprehensive video production services to showcase your music with stunning visual storytelling and professional quality.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-josefin">Music Videos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-josefin">Live Performance Recording</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-josefin">Video Editing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-josefin">Motion Graphics</span>
                </div>
              </div>
              <Link 
                to="/services/video" 
                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-josefin font-semibold hover:bg-gray-200 transition-colors"
              >
                Explore Video Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
