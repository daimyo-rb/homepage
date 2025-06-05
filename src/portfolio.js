import githubIcon from './icons/github-original.svg'
import externalPageIcon from './icons/open-in-new.svg'

function buildProjectCard(){
  const content = `
    <div class="project">
      <div class="project-screenshot">
        <p>screenshot of project</p>
      </div>
      <div class="project-info">
        <div class="project-upper">
          <div class="project-name">Project name</div>
          <div class="project-links">
            <img class="project-github" src="${githubIcon}"/>
            <img class="project-link" src="${externalPageIcon}"/>
          </div>
        </div>
        <div class="project-description">Short description of the project. Just a couple sentences will do.</div>
      </div>
    </div>
  `
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content; 
  const element = wrapper.firstElementChild;
  return element
}

export function buildPortfolio(){
  const content = `
    <div class="portfolio">
      <h1>My work</h1>
      <div class="projects-container"></div>
    </div>
  `;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content;
  const element = wrapper.firstElementChild;
  const projectsContainer = wrapper.getElementsByClassName('projects-container')[0];
  for (let i=0; i < 6; i++){
    let curProject = buildProjectCard();
    projectsContainer.appendChild(curProject);
  }
  document.body.appendChild(element);
}