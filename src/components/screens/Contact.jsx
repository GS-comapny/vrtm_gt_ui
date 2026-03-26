import { FadeInSection } from "../utils/FadeInSection";
import { ContactForm } from "./ContactForm";
import { FooterSection } from "./Home";

export default function Contact(props) {
  return (
    <div className="font-sans text-gray-800 h-[85vh]">
     <FadeInSection><ContactUsIntroPage /></FadeInSection> 
      <FadeInSection> <HeadOfficeAddress /></FadeInSection>
      <FadeInSection><BranchOfficeAddress /></FadeInSection>
      <FadeInSection><ContactForm /></FadeInSection>
      <FadeInSection><FooterSection /></FadeInSection>
    </div>
  );
}

const ContactUsIntroPage = () => {
  return (
       <section className="relative bg-[#F2F0FE] w-full min-h-[85vh] h-fit flex flex-col items-center justify-center">

       <div className="absolute inset-0 h-[85vh]">
        <img
          src={require("../../assets/contact_us_bg_img.png")}
          alt="about"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0"></div> */}
      </div>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>
      </div>
    </section>
  );
};
const HeadOfficeAddress = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-8">
      {/* Info */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Head Office</h2>

        <p className="mb-2">
          📍 D No.9, 2nd Floor, Tiruchanoor Rd, Beside Rahul Convention Center,
          Yogimallavaram, Tirupati, AP - 517503
        </p>

        <p className="mb-2">📧 info@vrglobaltechnology.com</p>
        <p>📞 +91 99898 93225</p>
      </div>

      {/* Map */}
      <iframe
        title="tirupati-map"
        className="w-full h-[250px] rounded-lg border"
          src="https://www.google.com/maps?q=13.6094216,79.4387223&z=15&output=embed">
</iframe>
    </div>
  );
};
const BranchOfficeAddress = () => {
  return (
    <div className="bg-[#F2F0FE] grid md:grid-cols-2 gap-6 p-8">
      {/* Info */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Branch Office</h2>

        <p className="mb-2">
          📍 H.No. 58-1-217/1, FF2, Old Karasa, NAD Cross Roads, Revenue Ward
          42, Visakhapatnam, AP - 530009
        </p>

        <p className="mb-2">📧 info@vrglobaltechnology.com</p>
        <p>📞 +91 99898 93225</p>
      </div>

      {/* Map */}
      <iframe
        title="vizag-map"
        className="w-full h-[250px] rounded-lg border"
        src="https://www.google.com/maps?q=17.7403095,83.2422544&z=15&output=embed"></iframe>
    </div>
  );
};
