
import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-josefin font-bold mb-8 text-center">About Us</h1>
          <div className="space-y-6 text-lg font-josefin text-gray-300">
            <p>
              We are a cutting-edge music label dedicated to discovering and promoting the next generation of independent artists. Our mission is to bridge the gap between talented musicians and music lovers worldwide.
            </p>
            <p>
              Founded in 2020, we have grown from a small collective of music enthusiasts to a recognized force in the independent music industry. We specialize in electronic, alternative, and experimental genres.
            </p>
            <p>
              Our team consists of experienced producers, sound engineers, marketing specialists, and music industry veterans who are passionate about nurturing artistic talent and bringing innovative sounds to global audiences.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
