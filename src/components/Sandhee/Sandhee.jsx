// import React from 'react';
// import { IoIosNotifications } from 'react-icons/io';
// import { Link, NavLink } from 'react-router-dom';

// const Sandhee = () => {
//   return (
//     <div className="hero_abs2 bg-red-400 overflow-hidden">
//       <div className='flex justify-end items-end w-full px-10 pt-10'>
//         <button className="
//       w-[165px] h-[56px] bg-[#FFFFFF] text-[#2D2D2D] font-[400]  font-[TT   Hoves] text-[20px] leading-[23.56px] rounded-[40px]
//       flex justify-center items-center 
//       ">Notify me
//           <span className='ml-2'>
//             <IoIosNotifications size={20} />
//             {/* <img src="./assets/icons/notify.png" alt="#" /> */}
//           </span>

//         </button>
//       </div>
//       <div className="hero-content">

//         {/* <img
//           src="#"
//           alt="Astronaut"
//           className="astronaut"
//         /> */}
//         <div className=' flex flex-col gap-4 '>
//           <h2 className='mt-[-229px]  font-extrabold text-[96px]  bg_textt ' >SANDHEE ADR </h2>
//           <h3 className=' text-[72px] font-[800] bg_textt '>Coming Soon</h3>

//         </div>

//       </div>
//       <footer className='flex justify-center px-10'>
//         <Link>
//         <p className='footer flex justify-start font-[Montserrat] font-medium text-[28px] items-start'> info@sandhee.com</p>
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default Sandhee;



import React from 'react'
import './sandhee.css'

const Sandhee = () => {

      return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sandhee ADR</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="styles.css" />
        <header className="hero-section text-white">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid hddd">
              <a className="logo" href="#">
                <img src="/public/logo.png" alt="Sandhee ADR" className="logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="" id="navbarNav">
                <ul className="navbar">
                  <li className="">
                    <a className=" active" href="#">Home</a>
                  </li>
                  <li className=""><a className="" href="#">About</a></li>
                  <li className="">
                    <a className="" href="#">Arbitration</a>
                  </li>
                  <li className="">
                    <a className="" href="#">Mediation</a>
                  </li>
                  <li className="">
                    <a className="" href="#">Conciliation</a>
                  </li>
                  <li className=""><a className="" href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid hero-content">
            <h1>
              A state of an art ODR <br />
              (Online Dispute Resolution) platform <br />
              empowered by cutting-edge <br />
              technology
            </h1>
            <p className="mb-5 mt-5">
              Businesses using Sandhee save significant time and money on legal
              cases <br />
              while also avoiding harmful adversarial processes that can damage
              <br />
              customer relationships.
            </p>
            <a href="https://www.odr.sandhee.com/" target="_blank" className="btttnnn_hero">Enroll Now</a>
          </div>
        </header>
        <div className="container-fluid bg__about">
          <div className="row justify-center" style={{ padding: '50px' }}>
            <div className="col-md-12 text-center">
              <h1 className="about-title">ABOUT <span className="highlight">US</span></h1>
            </div>
            <div className="col-md-7 mt-4">
              <p>Sandhee derives its meaning from the Hindi word संधि।</p>
              <p>
                It signifies an Accord between countries or groups of people.
                Sandhee is basically a formal agreement between two or more people,
                organization, or government.
              </p>
              <p>
                Sandhee aims to revolutionize dispute resolution by providing a
                timely, affordable, and fair platform; they encourage businesses to
                settle disagreements efficiently. Sandhee aspires to be India's
                leading dispute resolution center, recognized globally for its
                reliability, transparency, advanced technology, streamlined
                processes, excellent infrastructure, and top-notch administrative
                support.
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center my-5">
          <h1 className="mb-4">Our Services</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="service-card arbitration">
                <h3>Arbitration</h3>
                <p>Learn more</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card mediation">
                <h3>Mediation</h3>
                <p>Learn more</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card conciliation">
                <h3>Conciliation</h3>
                <p>Learn more</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-light">←</button>
            <button className="btn btn-light">→</button>
          </div>
        </div>
        <div className="container-fluid bgg__3 mt-5">
          <div className="row justify-center mb-5 mt-5">
            <div className="col-md-7 bgg_img mt-5" style={{ padding: '60px' }}>
              <div className="bgg_card">
                <div className="text-center mb-5">
                  <a href="#" className="button__1">ARBITRATION</a>
                </div>
                <div className="contents">
                  <p className="contents_text">
                    Arbitration is a private, consensual process where parties
                    resolve disputes outside of traditional courts. It involves
                    appointing one or more neutral arbitrators who hold hearings,
                    consider evidence, and issue a binding decision called an
                    arbitral award. This process is often preferred for its
                    flexibility, confidentiality, and potential for faster
                    resolution compared to litigation. Arbitration is commonly used
                    in commercial, construction, and international trade disputes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-center mb-5">
            <div className="col-md-7 bgg_img_2 mb-4" style={{ padding: '60px' }}>
              <div className="bgg_card">
                <div className="text-center mb-5">
                  <a href="#" className="button__1">MEDIATION</a>
                </div>
                <div className="contents">
                  <p className="contents_text">
                    Mediation is a voluntary, confidential process where a neutral
                    third party, the mediator, facilitates communication and
                    negotiation between disputing parties. The mediator does not
                    impose a solution but helps parties reach a mutually agreeable
                    settlement by exploring interests, options, and potential
                    compromises. Mediation is often faster and less expensive than
                    litigation, and it can preserve relationships by fostering
                    understanding and cooperation between the parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-md-7 bgg_img_3 mb-4" style={{ padding: '60px' }}>
              <div className="bgg_card">
                <div className="text-center mb-5">
                  <a href="#" className="button__1">CONCILIATION</a>
                </div>
                <div className="contents">
                  <p className="contents_text">
                    Conciliation is a voluntary, confidential process where a
                    neutral third party, the conciliator, assists disputing parties
                    in reaching a mutually agreeable settlement. Unlike mediation,
                    the conciliator may suggest solutions or propose terms of
                    settlement, but the final decision-making power rests with the
                    parties themselves. Conciliation is often used in labour
                    disputes, family law matters, and commercial disagreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer  text-center py-4" style={{ backgroundColor: '#0e1926' }}>
          <div className="container">
            <div className="row">
              {/* Menu Links */}
              <div className="col">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="pp">Programs</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="pp">Family</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="pp">Infrastructure</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="pp">Events</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="pp">Resources</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact Button */}
            <div className="my-3">
              <a href="#" className="footer_btn">Contact Us</a>
            </div>
            <div className="pt-3 text-center">
              <p>© 2022 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
      );

}

export default Sandhee