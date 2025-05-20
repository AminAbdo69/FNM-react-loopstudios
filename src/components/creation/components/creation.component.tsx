import deep_earth from "../../../assets/desktop/image-deep-earth.jpg";
import night_arcade from "../../../assets/desktop/image-night-arcade.jpg";
import soccer_team from "../../../assets/desktop/image-soccer-team.jpg";
import grid from "../../../assets/desktop/image-grid.jpg";
import from_above from "../../../assets/desktop/image-from-above.jpg";
import pocket_borealis from "../../../assets/desktop/image-pocket-borealis.jpg";
import curiosity from "../../../assets/desktop/image-curiosity.jpg";
import fisheye from "../../../assets/desktop/image-fisheye.jpg";

import deep_earth_mobile from "../../../assets/mobile/image-deep-earth.jpg";
import night_arcade_mobile from "../../../assets/mobile/image-night-arcade.jpg";
import soccer_team_mobile from "../../../assets/mobile/image-soccer-team.jpg";
import grid_mobile from "../../../assets/mobile/image-grid.jpg";
import from_above_mobile from "../../../assets/mobile/image-from-above.jpg";
import pocket_borealis_mobile from "../../../assets/mobile/image-pocket-borealis.jpg";
import curiosity_mobile from "../../../assets/mobile/image-curiosity.jpg";
import fisheye_mobile from "../../../assets/mobile/image-fisheye.jpg";
import { useMemo } from "react";

const creations = [
  {
    title: "DEEP EARTH",
    image: deep_earth,
    image_mobile: deep_earth_mobile,
  },
  {
    title: "NIGHT ARCADE",
    image: night_arcade,
    image_mobile: night_arcade_mobile,
  },
  {
    title: "SOCCER TEAM VR",
    image: soccer_team,
    image_mobile: soccer_team_mobile,
  },
  {
    title: "THE GRID",
    image: grid,
    image_mobile: grid_mobile,
  },
  {
    title: "FROM UP ABOVE VR",
    image: from_above,
    image_mobile: from_above_mobile,
  },
  {
    title: "POCKET BOREALIS",
    image: pocket_borealis,
    image_mobile: pocket_borealis_mobile,
  },
  {
    title: "THE CURIOSITY",
    image: curiosity,
    image_mobile: curiosity_mobile,
  },
  {
    title: "MAKE IT FISHEYE",
    image: fisheye,
    image_mobile: fisheye_mobile,
  },
];

export const Creation = () => {
  const memoizedCreations = useMemo(() => creations, []);

  return (
    <section aria-labelledby="creations-heading max-w-[1440px] mx-auto px-6 pb-20 lg:px-36 lg:pb-40">
      <div className="flex justify-center items-center mb-10 lg:justify-between lg:mb-22">
        <h2
          id="creations-heading"
          className="text-center text-3xl uppercase font-light lg:text-left lg:text-4xl"
        >
          Our creations
        </h2>
        <button className="text-center px-10 py-3 hidden cursor-pointer tracking-[5px] text-lg font-light border-1  hover:bg-black hover:text-white lg:block">
          See all
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {memoizedCreations.map((creation) => (
          <div className="relative">
            <img
              src={creation.image}
              alt={creation.title}
              className="hidden  w-full object-cover lg:block"
            />
            <img
              src={creation.image_mobile}
              alt={creation.title}
              className="w-full aspect-10/4 object-cover object-[0%_5%] lg:hidden"
            />
            <div className="inset-0 bg-black/50 absolute cursor-pointer hover:bg-white/70 transition-all duration-300 text-white hover:text-black">
              <h3 className="absolute bottom-0 left-0  uppercase text-2xl w-1/2 font-light pl-6 py-6 lg:pl-10 lg:py-10 lg:w-4/5 lg:text-4xl">
                {creation.title}
              </h3>
            </div>
            <div className="flex justify-center items-center mt-10 lg:hidden">
              <button className="  uppercase text-lg border-1 px-10 py-3 tracking-[5px] cursor-pointer hover:bg-black hover:text-white lg:hidden">
                SEE ALL
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
