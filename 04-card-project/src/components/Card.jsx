import React from 'react'
import { Bookmark } from 'lucide-react' 

const Card = (props) => {

  console.log(props.company)
  return (
    <div>
        <div className="card">

        <div>
          <div className="top">
          <img src="data:image/png;base64,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" alt="" />
          <button>Save<Bookmark size={14}/></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>5 days ago</span></h3>
          <h2>{props.post}</h2>
        <div className='tag'>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
        </div>
        </div>

        <div className="bottom">
          <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
          </div>

            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
