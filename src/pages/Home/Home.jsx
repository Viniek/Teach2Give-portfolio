
import "./Home.css"

import React from 'react'

function Home() {
  return (
    <>
    <div className="johninfo">
    <div className="aboutjohn">
      <h1 className="heading">Hi, I am John, <br />Creative Technologist</h1>

      <p>Amet minim mollit non deserunt ulliamco est sit aliqua dolor do amet <br /> Amet minim mollit non deserunt ulliamco est sit aliqua dolor do amet <br />
      consequat sunt nonstrud amet
      </p>

      <button className="download">Download Resume</button>
    </div>

    <img src="https://res.cloudinary.com/dukptptve/image/upload/v1720798459/nost2u1thpsv62ewjisr.png   " alt="john"  className="john"/>
    </div>

<section className="post">  
<div className="titles">
  <h2>Recent posts</h2>
  <p>View all</p>
</div>
<div className="postsdesign">
<div className="makingdesign">
  <h2>Making a design system from <br /> scratch</h2>
  <p className="designdate">12 Feb 2020   |   Design Pattern</p>

  <p className="designcontent">Amet minium mollit non deserut uliaamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br />  duis enim velit mollit.Exerciaation veniam <br />consequat sunt nonstrud amet.</p>
</div>


<div className="makingdesign">
  <h2>Creastin pixel perfect icons in <br />Figma</h2>
  <p className="designdate">12 Feb 2020   |   Design Pattern</p>

  <p className="designcontent">Amet minium mollit non deserut uliaamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br />  duis enim velit mollit.Exerciaation veniam <br />consequat sunt nonstrud amet.</p>
</div>
</div>
</section>
    

    </>
  )
}

export default Home
