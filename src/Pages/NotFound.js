import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function NotFound() {
  const history = useHistory()
  console.log("his:",history);
  useEffect(() => {
    setTimeout(() => {history.push('/')}, 3000)
  }, [])
  return (
    <div class="alert alert-danger" role="alert">
      404 Page not found !
    </div>
  )
}

export default NotFound