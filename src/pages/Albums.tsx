
import React from "react";
import Layout from "../components/Layout";

const Albums = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-josefin font-bold mb-8 text-center">Albums</h1>
          <p className="text-xl font-josefin text-gray-300 text-center mb-12">
            Discover our latest releases and catalog of exceptional music.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="w-full h-64 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-josefin font-semibold mb-2">Album Title {i}</h3>
                  <p className="text-gray-400 font-josefin mb-2">Artist Name</p>
                  <p className="text-gray-500 font-josefin text-sm">Released 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Albums;
