import React from 'react'

export default function BandMember() {
  return (
    <div class="row">
    <div class="band-col">
        <div> KING</div>
        <img src={require('../assets/images/bandmember.jpg')} width="100%" />
    </div>
    <div class="band-col">
        <div> QUEEN</div>
        <img src={require('../assets/images/bandmember.jpg')} alt="band" width="100%" />
    </div>
    <div class="band-col">
        <div> PRINCE</div>
        <img src={require('../assets/images/bandmember.jpg')} alt="band" width="100%" />
    </div>
</div>
 
  )
}
