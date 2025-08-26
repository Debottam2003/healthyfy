import React from 'react'

function Profile() {
  return (
    <div className='P'>
      <div className='Pimg'> 
        <div className='h'>USER</div>
        <br/>
        <div>INDIAN</div>
      </div>
      <div className='likes-container'>
        <h3>Liked Recipes</h3>
        <div className='liked'>
           {/* dynamic liked ones  */}
        </div>
      </div>
      <div className='logout-container'>
        <button className='logout'>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Profile