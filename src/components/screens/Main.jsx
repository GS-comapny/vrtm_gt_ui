import { useRef, useEffect } from "react";
import { NavBar } from "../utils/NavBar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn,FaRegEdit ,FaRegObjectGroup , FaCloud,FaTelegramPlane ,FaNetworkWired,FaUserSecret ,FaServicestack,FaProjectDiagram    } from "react-icons/fa";
import { Route, Routes, useLocation } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import EmailResponse from "./EmailResponse";


export default function Main() {
 const scrollRef = useRef(null);
  const location = useLocation();

  // Scroll to top of container on route change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <div className={`w-screen  h-fit overflow-hidden grid ${location.pathname==="/form-success-view"?"grid-rows-[100vh]":"grid-rows-[15vh_85vh]"}  `}>
     <div className={`${location.pathname==="/form-success-view"?"hidden":"block"} h-full`}>
         <NavBar />
     
     </div>
     <div ref={scrollRef} className="h-full overflow-auto no-scrollbar">
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/form-success-view" element={<EmailResponse />} />
          </Routes>
        </div>
    </div>
  );
}
export const companyName="VRTM Global Technology"
export const comapanyContactNumber="99898 93225"
export const comapanyContactEmail="info@vrglobaltechnology.com"
export const navOptions = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const businessOptions=[
  "Project",
"Our Team",
"Facts",
"Customers"
]

export const services = [ "Website Design", "Web Development", "E-commerce Solutions", "UI/UX Design", "Software Development", "Mobile App Development", "Digital Marketing", "IT Infrastructure & Support", "Cloud Services", "Cybersecurity Solutions", "IT Consulting & Managed Services", "Graphic Designing" ]; 
 
// export const industries = [
//     {
//       title: "Food & Restaurants",
//       desc: `vrtm global Technology revolutionizes your restaurant with a smooth ordering system that delights your customers from click to delivery.`,
//     },
//     {
//       title: "Tourism",
//       desc: "vrtm global Technology inspires wanderlust with a travel platform that makes bookings easy and experiences unforgettable.",
//     },
//     {
//       title: "Automobile",
//       desc: "vrtm global Technology drives your automotive business forward with a smart, easy-to-navigate platform that brings buyers and dealers together.",
//     },
//     {
//       title: "Real Estate",
//       desc: "vrtm global Technology empowers your real estate business with an intuitive platform that connects buyers and sellers effortlessly.",
//     },
//     {
//       title: "Online Shopping",
//       desc: "vrtm global Technology elevates your E-Store experience with a user-friendly platform that drives sales and customer satisfaction.",
//     },
//     {
//       title: "Events",
//       desc: "vrtm global Technology simplifies event planning with a seamless platform that ensures memorable experiences for organizers and attendees.",
//     },
//     {
//       title: "Banking & Finance",
//       desc: "vrtm global Technology transforms your financial services with a secure, user-friendly platform that builds trust and enhances customer experience.",
//     },
//     {
//       title: "Health & Fitness",
//       desc: "vrtm global Technology grows your fitness business with a digital platform that keeps your clients engaged and committed.",
//     },
//     {
//       title: "E-Commerce",
//       desc: "Grow your business with vrtm global Technology—an easy-to-use e-commerce platform that keeps your customers happy.",
//     },
//   ];
  export const socialMediaIcons = [
    { icon: <FaFacebookF />, link: "https://vrglobaltechnology.com/" },
    { icon: <FaTwitter />, link: "https://vrglobaltechnology.com/" },
    { icon: <FaGoogle />, link: "https://vrglobaltechnology.com/" },
    { icon: <FaInstagram />, link: "https://vrglobaltechnology.com/" },
    { icon: <FaLinkedinIn />, link: "https://vrglobaltechnology.com/" },
  ];

  export const processes_6d = [
  {
    num: "01",
    title: "Discover",
    desc: "We begin by understanding your business goals, challenges, and requirements. This helps us discover what truly matters — so we can design solutions that make an impact.",
  },
  {
    num: "02",
    title: "Define",
    desc: "In this phase, we define the project scope, objectives, and deliverables. We create a clear roadmap that ensures alignment between your vision and our execution.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Our creative and technical teams collaborate to design visually appealing and user-friendly interfaces, ensuring your digital presence looks great and performs even better.",
  },
  {
    num: "04",
    title: "Develop",
    desc: "We turn designs into functional, high-performing solutions using the latest technologies. Our focus is on building secure, scalable, and efficient systems.",
  },
  {
    num: "05",
    title: "Deploy",
    desc: "Once development and testing are complete, we deploy the solution in a live environment with seamless launch and zero downtime.",
  },
  {
    num: "06",
    title: "Deliver",
    desc: "After deployment, we continue to support and monitor performance. We believe delivery isn’t the end — it’s the beginning of a long-term partnership.",
  },
];

export const featuresWhyToChooseUs = [
  {
    title: "Best Quality Designs",
    content:"We craft modern, responsive, and visually stunning designs that not only look great but also deliver seamless user experiences. Every project is built with precision, creativity, and attention to detail.",
  },
  {
    title: "24x7 Live Support",
    content:
      "We provide round-the-clock support to ensure your systems run smoothly, issues are resolved quickly, and your business stays uninterrupted — anytime, anywhere.",
  },
  {
    title: "Result Oriented Projects",
    content:
      "We focus on delivering projects that create measurable impact for your business. Every solution we build is designed to improve efficiency, enhance performance, and generate real results.",
  },
   {
    title: "Experienced Professionals",
    content:
      "Our team consists of highly skilled and experienced IT professionals who bring deep knowledge, innovative thinking, and practical solutions to every project.",
  },
];

export const serviceCards = [
  {icon:<FaRegEdit  />, title: "Website Design", desc: "We create modern, responsive, and SEO-friendly websites that represent your brand and drive results from simple business websites to complex web applications." },
  { icon:<FaRegObjectGroup  />,title: "Software Development", desc: "Our team develops software applications that simplify processes, enhance productivity, and add value to your business. Whether it’s a CRM, ERP, or custom business tool." },
  {icon:<FaCloud />, title: "Mobile App Development", desc: "Reach your customers anytime, anywhere with powerful Android and iOS mobile apps. We design intuitive, high-performing apps that boost engagement and business visibility in the digital space." },
  {icon:<FaTelegramPlane  />, title: "Digital Marketing", desc: "Grow your brand online with our complete digital marketing solutions. From SEO and Google Ads to social media marketing and content strategy — we help you attract, engage, and convert your target audience effectively." },
  { icon:<FaNetworkWired  />,title: "IT Infrastructure & Support", desc: "We provide comprehensive IT infrastructure setup and maintenance, including network management, hardware support, system security, and data backup solutions. Our goal is to ensure smooth, secure, and uninterrupted operations for your business." },
  {icon:<FaCloud />, title: "Cloud Services", desc: "Leverage the power of the cloud to scale and secure your business operations. We offer cloud migration, storage, and management services using platforms like AWS, Microsoft Azure, and Google Cloud — ensuring flexibility, accessibility, and reliability." },
  { icon:<FaUserSecret />,title: "Cybersecurity Solutions", desc: "Protect your digital assets with our advanced cybersecurity services. We help secure your network, data, and systems through firewall implementation, threat monitoring, and proactive risk management." },
  {icon:<FaServicestack  />, title: "IT Consulting & Managed Services", desc: "Our experienced consultants guide you through every step of your digital journey — from planning IT strategies to managing day-to-day operations. With Niyan IT Services, you get complete peace of mind and dependable technical support." },
  {icon:<FaProjectDiagram  />, title: "Graphic Designing", desc: "We create impactful visual content to communicate your brand’s message effectively. From designing logos to crafting eye-catching posters and more." },
];
export const industriesWeServe = [
  {title: "FOOD & RESTAURANTS", desc: `${companyName+" Pvt Ltd"}  Revolutionize your restaurant with a smooth ordering system that delights your customers from click to delivery.`},
  {title: "TOURISM", desc: `${companyName+" Pvt Ltd" } Inspire wanderlust with a travel platform that makes bookings easy and experiences unforgettable.`},
  { title: "AUTOMOBILE",desc: `${companyName+" Pvt Ltd"} Drive your automotive business forward with a smart, easy-to-navigate platform that brings buyers and dealers together.`},
  { title: "REAL ESTATE", desc: `${companyName+" Pvt Ltd"} Empower your real estate business with an intuitive platform that connects buyers and sellers effortlessly.`},
  {title: "ONLINE SHOPPING", desc: `${companyName+" Pvt Ltd"} Elevate your E-Store experience with a user-friendly platform that drives sales and customer satisfaction.`},
  {title: "EVENTS", desc: `${companyName+" Pvt Ltd"} Simplify event planning with a seamless platform that ensures memorable experiences for organizers and attendees.`},
  {title: "BANKING & FINANCE", desc: `${companyName+" Pvt Ltd"} Transform your financial services with a secure, user-friendly platform that builds trust and enhances customer experience.`},
  {title: "HEALTH & FITNESS", desc: `${companyName+" Pvt Ltd"} Grow your fitness business with a digital platform that keeps your clients engaged and committed.`},
   {title: "E-COMMERCE", desc: `Grow your business with Nioyan IT Solutions—an easy-to-use e-commerce platform that keeps your customers happy.`},
];