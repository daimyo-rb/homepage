import happyGuy480 from './img/happy_guy_computer_cropped_480.jpg'
import happyGuy800 from './img/happy_guy_computer_800_tablet.jpg'
import happyGuy1920 from './img/happy_guy_computer_1920_desktop.jpg'
import phoneIcon from './icons/phone-outline.svg'
import emailIcon from './icons/email-outline.svg'
import githubIcon from './icons/github-original.svg'
import linkedinIcon from './icons/linkedin-plain.svg'
import xTwitterIcon from './icons/x-twitter.svg'

export function buildContact(){
  const content = `
    <div class="contact">
      <div class="contact-wrapper">
        <div class="contact-card">
          <h1 class="contact-title">Contact me</h1>
          <div class="contact-body">
            <div class="contact-message">Please get in touch if you think our work could be mutually beneficial!</div>
            <div class="contact-address">1234 Random Road<br>Random Town, California 12345</div>
            <div class="contact-methods">
              <div class="phone-contact">
                <img class="phone-icon" src="${phoneIcon}"/>
                <div class="phone-number">555-555-5555</div>
              </div>
              <div class="email-contact">
                <img class="email-icon" src="${emailIcon}"/>
                <div class="email-address">ashleywilliams.is.not.real@gmail.com</div>
              </div>
            </div>
          </div>
          <div class="contact-social-media">
            <img class="contact-github" src="${githubIcon}"/>
            <img class="contact-linkedin" src="${linkedinIcon}"/>
            <img class="contact-twitter" src="${xTwitterIcon}"/>
          </div>
        </div>
        <picture>
          <source media="(max-width: 600px)" srcset=${happyGuy480}/>
          <source media="(max-width: 1199px)" srcset=${happyGuy800}/>
          <source media="(min-width: 1200px)" srcset=${happyGuy1920}/>
          <img class="contact-image" src=${happyGuy1920}/>
        </picture>
        
      </div>
    </div>
  `;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content; 
  const element = wrapper.firstElementChild;
  document.body.appendChild(element);
}