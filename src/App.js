import React from 'react';


const Navbar = () => {
  return (
    <nav className="fnav">
      <div className="left">
        <div className="logo">
         
            <img className="logo-main" src="path/to/your/logo.png" alt="BookMyShow Logo" />
       
          <svg viewBox="0 0 88 26" height="33.9" width="115" padding="100px" xmlns="http://www.w3.org/2000/svg">
            <title>BookMyShow</title>
            <g fill="none">
              <path
                d="M55.433 7.383l-1.444-2.43-2.583 1.213-1.444-2.43L47.38 4.95l-1.445-2.43-2.582 1.212L37.88.087 35.3 1.3l-5.476 17.591 6.643 2.005a3.516 3.516 0 0 1 3.363-2.45c1.944 0 3.52 1.557 3.52 3.478l-.001.07c.016.315-.021.634-.118.946l6.756 2.042 5.446-17.6"
                fill="#C4242B"
              />
            </g>
          </svg>
        </div>
        {/* Add search functionality here (consider using a search bar component) */}
      </div>
      {/* Add navigation links here (consider using a separate navigation component) */}
    </nav>
  );
};
//hiiii

export default Navbar;
