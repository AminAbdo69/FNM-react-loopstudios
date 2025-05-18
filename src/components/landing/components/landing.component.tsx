// import { Header } from "../../header";

// export const Landing = () => {
//   return (
//     <section className="relative min-h-screen w-full bg-[url('../../../assets/desktop/image-hero.jpg')] md:bg-[url('../../../assets/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat px-10 py-5">
//       <Header />
//       <div className="container mx-auto px-6 pt-32 md:pt-40">
//         <div className="max-w-[650px] border-2 border-white p-6 md:p-10">
//           <h1 className="text-4xl md:text-7xl text-white uppercase font-light leading-tight">
//             Immersive experiences that deliver
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

import desktopHero from "../../../assets/desktop/image-hero.jpg";
import mobileHero from "../../../assets/mobile/image-hero.jpg";
import { useEffect, useState } from "react";
import { Header } from "../../header";

export const Landing = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    window.innerWidth >= 768 ? desktopHero : mobileHero
  );

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(window.innerWidth >= 768 ? desktopHero : mobileHero);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat "
    >
      <Header />
      <div className="container mx-auto my-auto px-30 pt-32 md:pt-40 md:px-5 md:m-0 max-md:m-0 max-md:px-5">
        <div className="max-w-[650px] border-2 border-white p-6  md:p-10">
          <h1 className="text-4xl md:text-7xl text-white uppercase font-light leading-tight">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
    </section>
  );
};
