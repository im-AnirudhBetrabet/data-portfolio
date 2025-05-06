import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <React.Fragment>
        <section id="skills" data-aos="zoom-in">
            <h2 className="section-title">Skills</h2>
            <div className="skill">
                <div className="skill-label">
                    Python <span>85%</span>
                </div>
                <div className="skill-bar">
                    <div className="skill-progress" style={{'--fill': '85%', "animation-delay": "0.2s"}}/>
                </div>
            </div>
            {/* <div className="skill">
            <div className="skill-label">SQL <span>80%</span></div>
            <div className="skill-bar"><div className="skill-progress" style="--fill: 80%; animation-delay: 0.4s;"></div></div>
            </div>
            <div className="skill">
            <div className="skill-label">Pandas <span>75%</span></div>
            <div className="skill-bar"><div className="skill-progress" style="--fill: 75%; animation-delay: 0.6s;"></div></div>
            </div>
            <div className="skill">
            <div className="skill-label">Excel <span>70%</span></div>
            <div className="skill-bar"><div className="skill-progress" style="--fill: 70%; animation-delay: 0.8s;"></div></div>
            </div>
            <div className="skill">
            <div className="skill-label">Power BI <span>65%</span></div>
            <div className="skill-bar"><div className="skill-progress" style="--fill: 65%; animation-delay: 1s;"></div></div>
            </div>
            <div className="skill">
            <div className="skill-label">Tableau <span>60%</span></div>
            <div className="skill-bar"><div className="skill-progress" style="--fill: 60%; animation-delay: 1.2s;"></div></div> */}
            {/* </div> */}
        </section>
    </React.Fragment>
  )
}

export default Skills