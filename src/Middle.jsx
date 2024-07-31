import React from 'react';
import svg_first from '../src/images/images/svg_frst.gif';
import svg_wedding from '../src/images/images/svg_wedding.gif';
import svg_last from '../src/images/images/svg_last.jpg';
import svg_candles from '../src/images/images/svg_candles.gif';
import svg_home from '../src/images/images/svg_home.png';

export default function Middle() {
  return (
    <div>

<div class="port_link">
        <div class="port_lnk_1">
            <br/><br/><br/>
                <marquee width="100%" direction="left" height="90px"  >
                    <div class="mar_text" style={{fontSize: '60px', fontFamily: 'Playfair Display', fontWeight:'400px', letterSpacing: '2.5px'}}> Design that delivers Brand & website design for female-led businesses who are ready to GROW</div>
                </marquee>
        </div>
        <div class="port_link_2">
            <div class="port_top">

                <div class="octagon-container port_top_item">
                    <img class="octagon-image" src={svg_first} alt="Octagon Image"/>
                  </div>
                <div class="middle_section port_top_item">
                    <div class="featured_projects">Featured <i>Projects</i></div>
                    <button class="port_btn">view portfolio</button>
                </div>
                  <div class="rabbet-container port_top_item">
                    <img class="rabbet-image" src={svg_wedding} alt="Rabbet Image"/>
                  </div>


            </div>
            
        <div class="port_bot">
            <div class="inset-container">
                <img class="inset-image" src={svg_last} alt="Inset Image"/>
              </div> 
            
              <div class="width-container">
                <img class="width-image" src={svg_candles} alt="Width Image"/>
              </div> 
              
              
              <div class="ellipse-container">
                <img class="ellipse-image" src={svg_home} alt="Ellipse Image"/>
              </div> 




        </div>

        </div>
        <div class="port_link_3"></div>
    </div>

    <div class="bg_section">
        <div class="bg_content">
            <h2 class="bg_h2">“Cathrin did a wonderful job of understanding my business and being able to transform that into a look and feel that was perfect for my branding.</h2>
            <div class="bg_center">Cathrin is such a pleasure to work with. She took the time to talk things through and always made sure I was 100% happy with every step. When I launched my new website I had an overwhelmingly positive response, which made me very happy! Cathrin took all the stress & pain out of the process”</div>
            <div class="bg_name">STEPH HARDEN, YOUR SOCIAL BEE</div>
        </div>
</div>
    

    <div class="work_tog">
        <h2 class="work_tog_h2">Interested in working <i>together</i>?
        </h2>
        <button class="work_tog_btn" >Let's get talking</button>
    </div>


    </div>
  )
}
