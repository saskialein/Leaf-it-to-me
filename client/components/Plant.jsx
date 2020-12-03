import React from 'react'


const Plant = () => {
  return (
    <div>
   
    <h1>Plant</h1>
    <p>Show a small card of the plant</p>

 
    <div className='polaroid-wrapper'>
         <div className='each-polaroid'>
          <div className= 'polaroid-image-and-title'>
              <img src='https://www.doc.govt.nz/globalassets/images/places/northland/waipoua-forest/te-matua-ngahere-walk/walkway-1200.jpg' alt="description"/>

              <div className= 'polaroid-title-div'>
              <span className= 'polaroid-title'>TITLE WITH DROP SHADOW</span>
              <div><h5>h5 subtitle & border</h5></div>
              </div>
          </div>
          <div className='polaroid-info'>
              <div className='polaroid-detail'><h4>h4 text</h4></div>
              <button>Button</button>
          </div>
         </div> {/*end of each walk div*/}
          
      </div>{/*end of walk wrapper vdiv*/}
   
    </div>
  )
}

export default Plant
