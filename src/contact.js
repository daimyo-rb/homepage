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
                <div class="phone-icon"></div>
                <div class="phone-number">555-555-5555</div>
              </div>
              <div class="email-contact">
                <div class="email-icon"></div>
                <div class="email-address">ashleywilliams.is.not.real@gmail.com</div>
              </div>
            </div>
          </div>
          <div class="contact-social-media">
            <div class="contact-github"></div>
            <div class="contact-linkedin"></div>
            <div class="contact-twitter"></div>
          </div>
        </div>
        <div class="contact-image"></div>
      </div>
    </div>
  `;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content; 
  const element = wrapper.firstElementChild;
  document.body.appendChild(element);
}