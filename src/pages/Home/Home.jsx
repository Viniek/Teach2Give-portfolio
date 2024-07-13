
import "./Home.css"

import React from 'react'

function Home() {
  return (
    <>
    <div className="johninfo">
    <div className="aboutjohn">
      <h1 className="heading" id="heading">Hi, I am John, <br />Creative Technologist</h1>

      <p  id="heading">Amet minim mollit non deserunt ulliamco est sit aliqua dolor do amet <br /> Amet minim mollit non deserunt ulliamco est sit aliqua dolor do amet <br />
      consequat sunt nonstrud amet
      </p> 

      <button className="download" >Download Resume</button>
    </div>

    <img src="https://res.cloudinary.com/dukptptve/image/upload/v1720798459/nost2u1thpsv62ewjisr.png   " alt="john"  className="john"/>
    </div>

<section className="post">  
<div className="titles">
  <h2 className="johnheadingtitle">Recent posts</h2>
  <p>View all</p>
</div>  

<div className="postsdesign"> 

<div className="makingdesign">
<h2 className="designsheadings">
  Making a design system from  scratch
</h2>

  <div className="designdetails">
<p>12 Feb 2020</p> <p>|</p> <p>Design,pattern</p>
  </div>

  <p className="designcontent">Amet minium mollit non deserut uliaamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br />  duis enim velit mollit.Exerciaation veniam <br />consequat sunt nonstrud amet.</p>
</div>


<div className="makingdesign">
<h2  className="designsheadings">Creating pixel perfect icons in Figma</h2>
  <div className="designdetails">
<p>12 Feb 2020</p> <p>|</p> <p>Figma Icon Design</p>
  </div>

  <p className="designcontent">Amet minium mollit non deserut uliaamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br />  duis enim velit mollit.Exerciaation veniam <br />consequat sunt nonstrud amet.</p>
</div>
</div>
</section>
    

    </>
  )
}

export default Home

