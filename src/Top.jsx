import React from 'react';
import top from '../src/images/images/top.gif';
import middle from '../src/images/images/middle.jpg'

export default function() {
  return (
    <div>

<div class="top">
        <div class="top_left">
            <img src={top} class="top_img" />
        </div>
        <div class="top_right">
          <h2 class="top_text">  Brand <span class="and">&</span> website <i>design</i> for <span class="top_spcl">female-led businesses</span> who are ready to GROW</h2>
        </div>
    </div>
    <div class="top_2">
            <h2 class="top_2_spcl">You are in the right place if you are looking for</h2>
            <h2 class="top_2_main">
                Timeless BRAND and WEBSITE DESIGN that not only looks <i>good</i> but communicates what is at the <i>heart</i> of your business in an <i>authentic</i> and <i>memorable</i> way AND helps your business <i>grow</i>. 
            </h2>
            <button class="top_btn">TELL ME MORE</button>
    </div>
    <div class="middle">
        <div class="middle_left">
            <h2 class="hello">HELLO, I’M CATHRIN</h2>
            <h2 class="middle_left_main">I <i>help</i> female founders and entrepreneurs bring their unique visions to life through <i>memorable</i> brand identities and websites that elevate their offerings and connect them with their dream audience.</h2>
            <button class="middle_left_btn">THAT SOUNDS LIKE ME !</button>
        </div>
        <div class="middle_right">
            <h2 class="middle_right_1">Come say hi !</h2>
            <img src={middle} class="middle_img" />
        </div>
    </div>

    </div>
  )
}
