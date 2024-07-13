import "./Home.css";

import React from "react";

function Home() {
  return (
    <>
      <div className="johninfo">
        <div className="aboutjohn">
          <h1 className="heading" id="heading">
            Hi, I am John, <br />
            Creative Technologist
          </h1>

          <p id="heading">
            Amet minim mollit non deserunt ulliamco est sit aliqua dolor do amet{" "}
            <br /> Amet minim mollit non deserunt ulliamco est sit aliqua dolor
            do amet <br />
            consequat sunt nonstrud amet
          </p>

          <button className="download">Download Resume</button>
        </div>

        <img
          src="https://res.cloudinary.com/dukptptve/image/upload/v1720798459/nost2u1thpsv62ewjisr.png   "
          alt="john"
          className="john"
        />
      </div>

      <section className="post">
        <div className="titles">
          <h2 className="johnheadingtitle">Recent posts</h2>
          <p>View all</p>
        </div>

        <div className="postsdesign">
          <div className="makingdesign">
            <h2 className="designsheadings">
              Making a design system from scratch
            </h2>

            <div className="designdetails">
              <p>12 Feb 2020</p> <p>|</p> <p>Design,pattern</p>
            </div>

            <p className="designcontent">
              Amet minium mollit non deserut uliaamco est sit <br /> aliqua
              dolor do amet sint. Velit officia consequat <br /> duis enim velit
              mollit.Exerciaation veniam <br />
              consequat sunt nonstrud amet.
            </p>
          </div>

          <div className="makingdesign">
            <h2 className="designsheadings">
              Creating pixel perfect icons in Figma
            </h2>
            <div className="designdetails">
              <p>12 Feb 2020</p> <p>|</p> <p>Figma Icon Design</p>
            </div>

            <p className="designcontent">
              Amet minium mollit non deserut uliaamco est sit <br /> aliqua
              dolor do amet sint. Velit officia consequat <br /> duis enim velit
              mollit.Exerciaation veniam <br />
              consequat sunt nonstrud amet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Featured works</h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex">
            <img
              className="w-32 h-32 object-cover rounded-lg mr-4"
              src="https://res.cloudinary.com/dgn62le6w/image/upload/v1720860598/el7tftyhpqdtzh38czg0.png"
              alt="Designing Dashboards"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Designing Dashboards</h2>
              <p className="text-gray-600">
                <span className="font-bold">2020</span> - Dashboard
              </p>
              <p className="mt-2">
                Amet minim deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt sunta.
              </p>
            </div>
          </div>

          <div className="mb-8 flex">
            <img
              className="w-32 h-32 object-cover rounded-lg mr-4"
              src="https://res.cloudinary.com/dgn62le6w/image/upload/v1720873210/dwksimg2boi9pe5aq0ts.png"
              alt="Vibrant Portraits of 2020"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Vibrant Portraits of 2020</h2>
              <p className="text-gray-600">
                <span className="font-bold">2018</span> - Illustration
              </p>
              <p className="mt-2">
                Amet minim deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt sunta.
              </p>
            </div>
          </div>

          <div className="mb-8 flex">
            <img
              className="w-32 h-32 object-cover rounded-lg mr-4"
              src="https://res.cloudinary.com/dgn62le6w/image/upload/v1720873340/cbkstuslplyc8pldolt5.png"
              alt="36 Days of Malayalam type"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">36 Days of Malayalam type</h2>
              <p className="text-gray-600">
                <span className="font-bold">2020</span> - Typography
              </p>
              <p className="mt-2">
                Amet minim deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt sunta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
