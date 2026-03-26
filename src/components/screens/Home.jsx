import { NavLink } from "react-router-dom";
import ConnectButton from "../buttons/ConnectButton";
import { FadeInSection } from "../utils/FadeInSection";
import { LogoSectionFooter } from "../utils/LogoSection";
import {
  businessOptions,
  comapanyContactEmail,
  comapanyContactNumber,
  companyName,
  industries,
  industriesWeServe,
  navOptions,
  services,
  socialMediaIcons,
} from "./Main";

export default function Home() {
  return (
    <div className="w-full h-full">
      <WelcomeSection />
      <CeoTalks />
      <OurServices />
      <OurServes />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
const WelcomeSection = () => {
  return (
    <section id="welcome_section" className="h-full">
      <div className="font-sans text-white h-full w-full text-wrap text-center  p-4 flex justify-center bg-gray-900/20 items-center flex-col">
        <FadeInSection>
          {" "}
          <div className="text-[40px] text-center  font-semibold">
            Empowering Your Business <br /> Through Technology
          </div>
          <div className="text-[22px]">
            we specialize in delivering <strong>end-to-end IT solutions</strong>{" "}
            that empower businesses to grow, perform, and innovate.
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

const CeoTalks = () => {
  return (
    <section id="ceo_talk" className="h-fit w-full ">
      <FadeInSection>
        {" "}
        <div className="p-2 h-full max-w-6xl mx-auto grid md:grid-cols-2 justify-center lg:gap-10 items-center">
          {/* Image */}
          <div className="flex h-[90%] justify-center">
            <img
              src={require("../../assets/ceoImg.png")}
              alt="CEO"
              className="w-[200px] md:w-[250px] lg:w-[320px] rounded-2xl shadow-lg object-cover"
            />
          </div>
          <FadeInSection delay={1}>
            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CEO Talk</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We believe technology should empower businesses — not complicate
                them. We are a team of passionate professionals dedicated to
                delivering customized, reliable, and affordable IT solutions
                that help companies achieve their goals efficiently and
                effectively.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                From website design and development to software solutions, IT
                infrastructure setup, cloud integration, and digital marketing,
                we provide everything your business needs to stay ahead in the
                digital world. Our focus is on understanding your business
                challenges and transforming them into smart, scalable, and
                secure IT solutions.
              </p>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Vijay Kumar
                </h3>
                <p className="text-blue-600 font-medium">Founder & CEO</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>
    </section>
  );
};

const OurServices = () => {
  return (
    <section id="our_services" className="h-fit w-full bg-slate-200">
      <FadeInSection>
        <div className="max-w-6xl mx-auto p-4 w-full">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our goal is to provide customized, end-to-end services that fit
              your business requirements, budget, and vision.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
const OurServes = () => {
  return (
    <section id="our_serves" className="h-it w-full p-4 py-6">
      <FadeInSection>
        <div className="max-w-6xl mx-auto w-full">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our goal is to provide customized, end-to-end services that fit
              your business requirements, budget, and vision.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industriesWeServe.map((item, index) => (
              <div
                key={index}
                className="p-6 cursor-pointer border rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-2 bg-gray-50"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export const ContactSection = () => {
  return (
    <section
      id="connect_section"
      className="h-fit min-h-[200px]  text-[16px] text-center grid place-items-center p-8 w-100 bg-[#F2F0FE] bg-slate-200"
    >
      <FadeInSection>
        <div className="w-full px-10 grid md:grid-cols grid-rows place-items-center gap-10">
            <div className="text-center md:w-[100%]">
          <div className="md:text-[40px] text-[20px] text-wrap text-[#6528F7] font-semibold">
            Would you like to start a project with us?
          </div>
          <div className="w-100 text-center">
            We’re passionate about building smart, scalable, and result-driven
            IT solutions tailored to your business goals.Let’s collaborate and
            create something extraordinary together!
          </div>
        </div>
        <div className="block md:hidden"><ConnectButton /></div>
        </div>
      </FadeInSection>
    </section>
  );
};
export const FooterSection = () => {
  return (
    <section id="footer_section" className="h-fit w-full text-white bg-bue-900">
      <FadeInSection>
        {" "}
        <footer className="bg-gray-900 text-white">
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 h-fit gap-8 p-4 pt-8">
            <div className="w-full flex flex-col gap-6 items-start h-full">
              <div>
                <LogoSectionFooter />
              </div>
              <div>
                {companyName+""} Empowering Your Business Through Technology
              </div>
              <div>
                <div className="flex gap-4 w-full justify-center items-bottom ">
                  {socialMediaIcons.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl hover:text-blue-700 hover:border rounded-full p-2  transition"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] font-bold">Company</h1>
              <div className="flex flex-col gap-2">
               {navOptions.map((item, index) => (
  <NavLink
    key={index}
    to={item.path}
    className={({ isActive }) =>
      `transition-all duration-300 cursor-pointer hover:text-blue-600
       ${isActive ? "text-blue-800 font-bold underline" : ""}`
    }
  >
    {item.name}
  </NavLink>
))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] font-bold">Business</h1>
              <div className="flex flex-col gap-2">
                {businessOptions.map((nav, index) => (
                  <span
                    title={`Click here to view our ${nav}`}
                    className="w-fit hover:underline hover:cursor-pointer hover:text-blue-600"
                    key={index}
                  >
                    {nav}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] font-bold">Business</h1>
             <HeadOfficeAddress />
            </div>
          </div>

          {/* Copyright */}

          <div className="text-center  w-full text-gray-400 font-semibold text-sm">
            <hr />
            <div className="p-2">
              © {new Date().getFullYear()}
              {" " + companyName}
            </div>
          </div>
        </footer>
      </FadeInSection>
    </section>
  );
};


const HeadOfficeAddress=()=>{
  return(
 <>
   <div className="flex flex-col">
        <h4 className="font-semibold text-lg mb-2">Address</h4>
        <p>
          D No.9, 2nd Floor, Tiruchanoor Rd, Beside Rahul Convention Center,
          Yogimallavaram
        </p>
        <p>Tirupati, Andhra Pradesh – 517503</p>
      </div>
      <div className="flex flex-col">
        <h4 className="font-semibold text-lg mb-2">Email</h4>
        <a
          href="mailto:info@vrglobaltechnology.com"
          className="hover:text-blue-400 transition"
        >
          info@vrglobaltechnology.com
        </a>
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <h4 className="font-semibold text-lg mb-2">Phone</h4>
        <a
          href="tel:+919989893225"
          className="hover:text-blue-400 transition"
        >
          +91 99898 93225
        </a>
      </div>
 </>
  )
}
const BranchOfficeAddress=()=>{
  return(
    <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg mb-2">Address</h4>
                  <p>
                    H.No. 58-1-217/1, FF2, Old Karasa, NAD Cross Roads, Revenue
                    Ward 42
                  </p>
                  <p>Visakhapatnam, AP – 530009</p>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <a
                    href={`mailto:${comapanyContactEmail}`}
                    className="hover:text-blue-400 transition"
                  >
                    {comapanyContactEmail}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg mb-2">Phone</h4>
                  <a
                    href={`tel:+91${comapanyContactNumber}`}
                    className="hover:text-blue-400 transition"
                  >
                    +91 {comapanyContactNumber}
                  </a>
                </div>
              </div>
  )
}