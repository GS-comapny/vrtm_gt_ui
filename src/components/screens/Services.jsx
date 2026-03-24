import { FadeInSection } from "../utils/FadeInSection";
import { WhyChooseUs } from "./About";
import { ContactSection, FooterSection } from "./Home";
import { industriesWeServe, serviceCards } from "./Main";

export default function Services(props) {
    

    return (
         <div className="w-full relative">
             <FadeInSection> <ServicesSection /></FadeInSection>
              <FadeInSection>  <IndustriesWeServe /></FadeInSection>
               <FadeInSection>   <WhyChooseUs /></FadeInSection>
                <FadeInSection> <ContactSection /></FadeInSection>
               <FadeInSection>  <FooterSection /></FadeInSection>
        </div>
    );
}
 const ServicesSection = () => {
  return (
    <section className="relative bg-[#F2F0FE] w-full min-h-[85vh] h-fit flex flex-col items-center justify-center">

      {/* Background */}
      <div className="absolute inset-0 h-[85vh]">
        <img
          src={require("../../assets/about_us_bg_img.png")}
          alt="about"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* Heading */}
      <div className="relative text-white  flex flex-col gap-4 z-10 text-center mt-[15%] mb-10">
        <h1 className="text-4xl md:text-6xl font-bold">
         Our Services
        </h1>
        <h1>Our goal is to provide customized, end-to-end services that fit your business requirements, budget, and vision.</h1>
      </div>

      {/* Cards (OVERLAP EFFECT) */}
      <div className="relative  z-10 w-full max-w-6xl grid md:grid-cols-3 gap-8 px-6 mt-12 md:-mb-40 -mb-16">

        {serviceCards.map((item, index) => (
          <div
            key={index}
 className="bg-white p-8 cursor-pointer min-h-[300px] hover:bg-[#F2F0FE] rounded-md shadow-xl h-fit hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <span className="text-[40px] text-[#6528F7]">{item.icon}</span>
            <h2 className="text-lg font-semibold  mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>
      
    </section>
  );
};
const IndustriesWeServe = () => {
  return (
    <section className="bg-[#F2F0FE] lg:pt-[20%] md:pt-[25%] pt-[25%] p-10 h-full px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
      <h1>Our goal is to provide customized, end-to-end services that fit your business requirements, budget, and vision.</h1>
       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-4 mt-10">
        
          {industriesWeServe.map((item, index) => (
          <div
            key={index}
 className="bg-white p-8  text-left cursor-pointer min-h-[200px] hover:bg-[#F2F0FE] rounded-lg shadow-xl hover:border-2 h-fit hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-lg font-bold  mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
        </div>
    </section>
  );
};