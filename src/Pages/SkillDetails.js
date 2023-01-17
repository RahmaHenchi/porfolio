import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SkillDetails() {
  const params =  useParams()
  console.log("params:", params)
  const technologyId = params.identifier

  const [technologies, setTechnologies] = useState([])
  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then(response => setTechnologies(response.data))
      .catch(error => console.log(error))
  }, [])
  
  const [technology, setTechnology] = useState(null)
  useEffect(() => {
    if (technologies.length > 0) {
      const foundTechnology = technologies.find(item => item.id === technologyId)
      setTechnology(foundTechnology)
    }
  }, [technologies])
  return (
    <div>
      {/* {technology ? <h1>{technology.name}</h1> : <h2>Technology not found</h2>} */}
      {technology ? (
        <div style={{ textAlign: 'center' }}>
          <h1>{technology.name}</h1>
          <img src={technology.image} style={{width: 80 }} />
          <p>{technology.description}</p>
        </div>
        ) : <h2>Technology not found</h2>}
    </div>
  )
}

export default SkillDetails