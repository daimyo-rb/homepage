import guyComputer from './img/guy_on_computer.jpg'
import githubIcon from './icons/github-original.svg'
import linkedinIcon from './icons/linkedin-plain.svg'
import xTwitterIcon from './icons/x-twitter.svg'

export function buildAboutTablet() {
  const content = `
    <div class="about">
      <div class="about-background-color"></div>
      <div class="about-content-tablet-container">
        <div class="about-content-tablet">
          <img class="image-wrap" src=${guyComputer}/>
          <div class="portrait-name-text-tablet">Ashley Williams</div>
          <h1 class="about-me-title-tablet">About me</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt voluptatem eius dicta commodi libero pariatur, magnam, ducimus suscipit atque esse deleniti fuga officiis fugit voluptatibus nobis nihil nulla sint totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt voluptatem eius dicta commodi libero pariatur, magnam, ducimus suscipit atque esse deleniti fuga officiis fugit voluptatibus nobis nihil nulla sint totam.</p>  
        </div>
      </div>
    </div>
  `;
  // 
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content;
  const element = wrapper.firstElementChild;
  document.body.appendChild(element);
}
export function buildAbout(){
  const content = `
    <div class="about">
      <div class="about-background-color"></div>
      <div class="about-content">
        <div class="portrait-and-name">
          <img class="portrait" src=${guyComputer}/>
          <div class="portrait-name-text">Ashley Williams</div>
        </div>
        <div class="about-card">
          <h1 class="about-me-title">About me</h1>
          <div class="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div class="about-icons">
            <img class="about-github-icon" src="${githubIcon}"/>
            <img class="about-linkedin-icon" src="${linkedinIcon}"/>
            <img class="about-twitter-icon" src="${xTwitterIcon}"/>
          </div>
        </div>
      </div>
    </div>
  `;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content;
  const element = wrapper.firstElementChild;
  document.body.appendChild(element);
}