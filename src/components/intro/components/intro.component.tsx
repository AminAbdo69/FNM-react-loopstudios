import Intro_Img from "../../../assets/desktop/image-interactive.jpg";

export const Intro = () => {
  return (
    <section
      aria-labelledby="intro-heading"
      className="max-w-[1440px] mx-auto px-6 lg:px-36 py-16 lg:py-48 "
    >
      <div className="flex flex-col  lg:flex-row relative  ">
        <img src={Intro_Img} alt="a man in a VR headset" className="h-full" />
        <div className="flex flex-col gap-6 items-center bg-white lg:absolute lg:justify-end lg:min-w-[541px] px-6 py-12 lg:pl-24 lg:pt-24 lg:right-0 lg:bottom-0 lg:w-[541px]">
          <h2
            id="intro-heading"
            className=" uppercase font-light text-center lg:text-left text-[32px] lg:text-[48px]"
          >
            The leader in interactive VR
          </h2>
          <p className="text-center lg:text-left text-base  lg:text-lg  text-gray-400">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};
