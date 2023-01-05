import React from 'react'
import './skills.css'

function Skills() {
  return (
    <div className='skills'>

      <div className='skill'>
        <h2>Languages</h2>  
        <div className='image-grid'> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt='C'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt='Python' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt='Java'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JavaScript'/>
        </div>
        <p>My favorite general-purpose languages for software development and machine learning.</p>
      </div>

      <div className='skill'>
        <h2>Front-End</h2>
        <div className='image-grid'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='HTML5'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS3'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='Figma'/>
        </div>
        <p>Familiar tools I use for front-end web development and user interface design.</p>
      </div>
      
      <div className='skill'>
        <h2>Back-End</h2> 
        <div className='image-grid'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='NodeJS'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='Express'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='MySQL'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='MongoDB'/>
        </div>
        <p>My preferred technologies for back-end web programming and database architecture.</p>
      </div>

      <div className='skill'>
        <h2>Tools</h2>    
        <div className='image-grid'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt='Visual Studio Code'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt='Unity'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='Github'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='Git'/>
        </div>
        <p>Some software I use for writing code, version control, and game development.</p>
      </div>

    </div>
  )
}

export default Skills