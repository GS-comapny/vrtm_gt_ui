import { useState } from "react";
import { featuresWhyToChooseUs, processes_6d } from "./Main";
import { ContactSection, FooterSection } from "./Home";
import { FadeInSection } from "../utils/FadeInSection";

export default function About() {
  return (
    <div className="w-full relative">
     <FadeInSection> <AboutSection /></FadeInSection>
      <FadeInSection>  <Processes_6D /></FadeInSection>
       <FadeInSection>   <WhyChooseUs /></FadeInSection>
        <FadeInSection> <ContactSection /></FadeInSection>
       <FadeInSection>  <FooterSection /></FadeInSection>
      
           
    </div>
  );
}

 const AboutSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] h-fit flex flex-col items-center justify-center">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={require("../../assets/about_us_bg_img.png")}
          alt="about"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mt-[20%] mb-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          About Us
        </h1>
      </div>

      {/* Cards (OVERLAP EFFECT) */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-3 gap-8 px-6 mt-12 md:-mb-40 -mb-16">

        {/* Card 1 */}
        <div className="bg-white p-8 cursor-pointer hover:bg-[#F2F0FE] rounded-md shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <div className="w-12 h-1 bg-purple-600 mb-6"></div>
          <h2 className="text-2xl font-bold mb-4">Who Are We</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a team of passionate technologists, creative thinkers, and
            problem-solvers committed to delivering <b>innovative IT solutions</b> 
            that empower businesses to succeed in the digital world.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 cursor-pointer hover:bg-[#F2F0FE] rounded-md shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <div className="w-12 h-1 bg-purple-600 mb-6"></div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to <b>empower businesses through innovative and reliable IT solutions</b> 
            that simplify operations, enhance performance, and drive sustainable growth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 cursor-pointer hover:bg-[#F2F0FE] rounded-md shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <div className="w-12 h-1 bg-purple-600 mb-6"></div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to become a <b>trusted global leader in IT solutions</b>, 
            recognized for delivering innovation, reliability, and customer satisfaction.
          </p>
        </div>

      </div>
      
    </section>
  );
};

const Processes_6D = () => {
  return (
    <section className="bg-[#F2F0FE] lg:pt-[20%] md:pt-[25%] pt-[25%] p-10 h-full px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 6-D Process</h2>
       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 gap-6 mt-4">
        
        {processes_6d.map((item, index) => (
          <div key={index} className="float-left text-left">
            
            {/* Big Number */}
            <span className=" top-6 left-0  text-[40px] md:block hidden font-bold text-gray-300 opacity-90">
              {item.num}.
            </span>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
              {item.desc}
            </p>

          </div>
        ))}
        </div>
    </section>
  );
};

export const WhyChooseUs=()=>{
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full h-fit flex flex-col md:flex-row">
      
      {/* Left Image */}
      <div className="md:w-1/2 w-full h-[300px] md:h-auto">
        <img
          src={require('../../assets/tech_bg_img.png')}
          alt="Tech"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full bg-gray-100 p-8 md:p-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Why Choose Us?
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
         Choosing the right IT partner can make all the difference — and at , we make that choice easy.
We don’t just deliver projects; we deliver <strong>Peace of mind, Performance, and Long-Term value.</strong>
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {featuresWhyToChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className={`text-lg font-semibold ${activeIndex === index && "text-indigo-600"} `}>
                  {item.title}
                </span>
                <span className={`text-xl  ${activeIndex === index && "text-indigo-600 font-bold"} `}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}