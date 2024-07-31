import React from 'react';
import fot_logo from '../src/images/images/fot_logo.png';
import image_frst from '../src/images/images/image-asset (8) (1).jpeg';
import image_sec from '../src/images/images/image-asset (6).jpeg';
import image_third from '../src/images/images/image-asset (2) (2).jpeg';
import image_fourth from '../src/images/images/image-asset (3).jpeg';
import image_fifth from '../src/images/images/image-asset (7) (1).jpeg';
import image_six from '../src/images/images/image-asset (4).jpeg';
import image_seven from '../src/images/images/image-asset (5).jpeg';


export default function Footer() {
  return (
    <div>

<div class="fot">
    <div class="fot_left">
         <div class="fot_left_1">
            <h3 class="fot_left_title">Explore</h3>
            <a class="fot_left_link">Website Design</a>
            <a class="fot_left_link">Brand Design</a>
            <a class="fot_left_link">Portfolio</a>
        </div>
        <div class="fot_left_2">
            <h3 class="fot_left_title">Connect</h3>
            <a class="fot_left_link">Email</a>
            <a class="fot_left_link">Pinterest</a>
            <a class="fot_left_link">Instagram</a>
        </div>
        <div class="fot_left_3">
            <h3 class="fot_left_title">Information</h3>
            <a class="fot_left_link">Faq & Process</a>
            <a class="fot_left_link">Design Journal</a>
            <a class="fot_left_link">Privacy Policy</a>
        </div>
    </div>
    <div class="fot_right">
    <img src={fot_logo} class="fot_logo" alt="Social Magpie Design"/>
    <div class="fot_right_1">Thoughtful brand and website design for
        female founders & entrepreneurs</div>
    <div class="fot_right_2">&#169;	SOCIAL MAGPIE 2018-24  </div>
    </div>
   </div>

<footer class="footer">
    <div class="footer_item">
        <a href="https://www.instagram.com/reel/C9fW5pstO1z/embed/?autoplay=1">
            <img src={image_frst} class="footer_img" alt="SF" />
        </a>
    </div>
    <div class="footer_item">
        <a href="https://www.instagram.com/reel/C84bOFqNPdD/embed/?autoplay=1">
            <img src={image_sec} class="footer_img swan" alt="SF" />
            <i class="fa-solid fa-play fa-2xl" style={{color: 'white'}}></i> 
        </a>
    </div>
    <div class="footer_item">
        <a href="https://www.instagram.com/reel/C7UIxlWt6oM/embed/?autoplay=1">
            <img src={image_third} class="footer_img swan" alt="SF" />
            <i class="fa-solid fa-play fa-2xl" style={{color: 'white'}}></i> 
        </a>
    </div>
    <div class="footer_item four">
        <a href="https://www.instagram.com/p/C7MgRyZNMFw/?img_index=1">
            <img src={image_fourth} class="footer_img swan" alt="SF" />
        </a>
    </div>
    <div class="footer_item">
        <a href="https://www.instagram.com/reel/C1_yPCsNyFA/embed/?autoplay=1">
            <img src={image_fifth} class="footer_img swan" alt="SF" />
        </a>
    </div>
    <div class="footer_item">
        <a href="https://www.instagram.com/p/C0eDh4MtuFZ/?img_index=1">
            <img src={image_six} class="footer_img swan" alt="SF" />
        </a>
    </div>
    <div class="footer_item">
        <a href="https://www.instagram.com/p/C0CAh9Gt1Kp/?img_index=1">
            <img src={image_seven} class="footer_img swan" alt="SF" />
        </a>
    </div>
    
</footer>

    </div>
  )
}
