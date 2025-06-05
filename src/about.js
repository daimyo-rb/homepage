export function buildAbout(){
  const content = `
    <div class="about">
      <div class="about-background-color"></div>
      <div class="about-content">
        <div class="portrait-and-name">
          <div class="portrait">
            <div class="portrait-name-text">Ashely Williams</div>
          </div>
        </div>
        <div class="about-card">
          <h1 class="about-me-title">About me</h1>
          <div class="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div class="about-icons">
            
            <div class="about-linkedin-icon"></div>
            <div class="about-twitter-icon"></div>
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
  // <img class="about-github-icon" src="./icons/github-original.svg"/>