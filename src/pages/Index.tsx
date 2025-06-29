
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Additional content sections */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-josefin font-bold text-white mb-8">
            Featured Artists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black/50 p-6 rounded-lg">
                <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
                <h3 className="text-xl font-josefin font-semibold text-white mb-2">
                  Artist {i}
                </h3>
                <p className="text-gray-400 font-josefin">
                  Genre: Electronic/Alternative
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
