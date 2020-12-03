import React from 'react'


const Plant = () => {
  return (
    <div>
   
    <h1>Plant</h1>
    <p>Show a small card of the plant</p>
    <>
    <h1>Profile</h1>
      <div className='profile-wrapper'>
      <div className='each-profile'>
      <div className='profile-picture'>
          <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png`}/>
        <div className='profile-name-plate'>
          <p className='profile-name'>Plant!</p>
          <p className='profile-sign'>feeling fabulous</p>
          <button>button</button>
        </div>
        </div>
        </div>
    </div>
    </>
   
    </div>
  )
}

export default Plant
