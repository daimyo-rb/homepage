import happyGuy from './img/happy_guy_computer.jpg'
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
        <img class="contact-image" src=${happyGuy}>
      </div>
    </div>
  `;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content; 
  const element = wrapper.firstElementChild;
  document.body.appendChild(element);
}