import React from 'react'

export default function Contact() {
  return (
    <section id="Contact">
                
    <div class="container">
     <h1 class="text-center"><i>CONTACT</i></h1>
 <p class="text-center"><small>Fan? Drop a Note!</small></p>
     <div class="row">
         <div>
         <div class="address-line">
             <i class="fa fa-location-arrow" aria-hidden="true"></i>
              chicago , us
         </div>
         <div class="address-line">
             <i class="fa fa-phone" aria-hidden="true"></i>
                 Phone : + 6577845155
         </div>
         <div class="address-line">
             <i class="fa fa-envelope" aria-hidden="true"></i>
             Email : mail@gmail.com
         </div> 
         </div>
         <div>
             <form action="">
                 <div class="d-flex">
                     <input type="text" placeholder="Name" />
                     <input type="email" placeholder="Email" />
                     </div>
                     <input type="message" placeholder="Message" />
                     <button type="submit">SEND</button>
                     
             </form>
         </div>
         </div>
         </div>
     
 </section>
  )
}
