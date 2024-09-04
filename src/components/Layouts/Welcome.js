import hamberger from "../../assets/delicious-burger-with-fresh-ingredients.png";
import pizza from "../../assets/pizza-pizza-filled-with-tomatoes-salami-olives.png";
import icon1 from "../../assets/icons/hamburger.png";
import icon2 from "../../assets/icons/french-fries.png";
import icon3 from "../../assets/icons/pizza.png";
import handmade from "../../assets/Remove-bg.ai_1724842097394.png";
import face3 from "../../assets/face-3.png";
import { useState } from "react";

const Welcome = (props) => {
  const [hambergerPic, setHambergerPic] = useState();
  const [tacosPic, setTacosPic] = useState();
  const [handRight, setHandRight] = useState(-250);
  const [userEat, setUserEat] = useState();

  document.addEventListener("scroll", (event) => {
    const currentPosition = window.scrollY;
    const maxScrollPosition = document.body.scrollHeight - window.innerHeight;
    const normalizedScrollPosition = parseInt(
      (currentPosition / maxScrollPosition) * 100
    );
    if (normalizedScrollPosition > 30 && normalizedScrollPosition < 40) {
      setHandRight(60);
      setUserEat(-60);
      setHambergerPic(0);
    } else if (
      parseInt(normalizedScrollPosition) > 45 &&
      parseInt(normalizedScrollPosition) < 55
    ) {
      setHandRight(-250);
      setHambergerPic(-650);
      setUserEat(-250);
      setTacosPic(-600);
    } else if (normalizedScrollPosition > 55 && normalizedScrollPosition < 60) {
      setUserEat(-60);
      setHandRight(10);
      setTacosPic(0);
    } else if (normalizedScrollPosition > 70) {
      setUserEat(-600);
      setHandRight(-250);
    }

    if (normalizedScrollPosition === 0) {
      setHandRight(-250);
      setHambergerPic(0);
      setUserEat(-250);
      setTacosPic(-600);
    }
  });
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-center h-screen">
        <div className="w-full md:w-6/12 lg:w-5/12 p-5 md:p-0">
          <section className="text-white">
            <div className="flex flex-row gap-2 mt-8 md:mb-5">
              <img src={icon1} className="w-12" alt="icons" />
              <img src={icon2} className="w-12" alt="icons" />
              <img src={icon3} className="w-12" alt="icons" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Order <strong className="text-green-500">Healthy</strong> and{" "}
              <p className="mt-4">Fresh Food Any Time</p>
            </h1>
            <p className="mt-12 text-lg ">
              Italian food makes people think of big family dinners. So you may
              want to position your restaurant as a place to bring the whole
              family.
            </p>

            {/*React Search Form*/}
            <form className="w-full mx-auto mt-20">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Search
                </button>
              </div>
            </form>
            {/*React Search Form*/}
          </section>
        </div>
        <div className="w-full md:w-5/12 flex justify-end">
          <img
            alt="handel bg food"
            src={face3}
            className="w-56 transition-all duration-500 fixed top-44 transform z-50 -right-64"
            style={{ transform: "rotateY(156deg)", right: userEat }}
          />
          <img
            alt="handel bg food"
            src={handmade}
            className="w-36 transition-all duration-500 fixed top-72 -right-64 transform -rotate-90"
            style={{ right: handRight }}
          />
          <img
            alt="handel bg food"
            src={handmade}
            className="w-36 transition-all duration-500 fixed top-92 -right-64 transform -rotate-90 z-10"
            style={{ right: handRight }}
          />
          <img
            alt="handel bg food"
            src={hamberger}
            className="w-5/12 transition-all duration-500 fixed top-16 -right-5"
            style={{ right: hambergerPic }}
          />
          <img
            alt="handel bg food"
            src={pizza}
            className="w-5/12 transition-all duration-500 fixed top-16 -right-[600px]"
            style={{ right: tacosPic }}
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
