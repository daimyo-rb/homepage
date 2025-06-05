export function buildPortfolio(){
  const content = `
    <div class="portfolio">
      <h1>My work</h1>
      <div class="projects-container">
        <div class="project">
          <div class="project-screenshot">
            <p>screenshot of project</p>
          </div>
          <div class="project-info">
            <div class="project-upper">
              <div class="project-name">Project name</div>
              <div class="project-links">
                <div class="project-github"></div>
                <div class="project-link"></div>
              </div>
            </div>
            <div class="project-description">Short description of the project. Just a couple sentences will do.</div>
          </div>
        </div>
        <div class="project">
          <div class="project-screenshot">
            <p>screenshot of project</p>
          </div>
          <div class="project-info">
            <div class="project-upper">
              <div class="project-name">Project name</div>
              <div class="project-links">
                <div class="project-github"></div>
                <div class="project-link"></div>
              </div>
            </div>
            <div class="project-description">Short description of the project. Just a couple sentences will do.</div>
          </div>
        </div>
        <div class="project">
          <div class="project-screenshot">
            <p>screenshot of project</p>
          </div>
          <div class="project-info">
            <div class="project-upper">
              <div class="project-name">Project name</div>
              <div class="project-links">
                <div class="project-github"></div>
                <div class="project-link"></div>
              </div>
            </div>
            <div class="project-description">Short description of the project. Just a couple sentences will do.</div>
          </div>
        </div>
        <div class="project">
          <div class="project-screenshot">
            <p>screenshot of project</p>
          </div>
          <div class="project-info">
            <div class="project-upper">
              <div class="project-name">Project name</div>
              <div class="project-links">
                <div class="project-github"></div>
                <div class="project-link"></div>
              </div>
            </div>
            <div class="project-description">Short description of the project. Just a couple sentences will do.</div>
          </div>
        </div>
        <div class="project">
          <div class="project-screenshot">
            <p>screenshot of project</p>
          </div>
          <div class="project-info">
            <div class="project-upper">
              <div class="project-name">Project name</div>
              <div class="project-links">
                <div class="project-github"></div>
                <div class="project-link"></div>
              </div>
            </div>
            <div class="project-description">Short description of the project. Just a couple sentences will do.</div>
          </div>
        </div>
        <div class="project">
          <div class="project-screenshot">
            <p>screenshot of project</p>
          </div>
          <div class="project-info">
            <div class="project-upper">
              <div class="project-name">Project name</div>
              <div class="project-links">
                <div class="project-github"></div>
                <div class="project-link"></div>
              </div>
            </div>
            <div class="project-description">Short description of the project. Just a couple sentences will do.</div>
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