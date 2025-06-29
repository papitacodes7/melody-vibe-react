
import React from "react";
import Layout from "../components/Layout";

const Clients = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-josefin font-bold mb-8 text-center">Our Clients</h1>
          <p className="text-xl font-josefin text-gray-300 text-center mb-12">
            We're proud to work with talented artists and industry professionals worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-josefin font-semibold mb-2">Client {i}</h3>
                <p className="text-gray-400 font-josefin text-sm">Independent Artist</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
