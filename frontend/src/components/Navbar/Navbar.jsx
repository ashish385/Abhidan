import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
<<<<<<< HEAD
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"#"}>
            <img src="/" alt="" />
            Abhidan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
              <Link className="nav-link" to={"#"}>
                NGO's
              </Link>
              <Link className="nav-link" to={"#"}>
                Blog
              </Link>
              <Link className="nav-link" to={"#"}>
                News & Update
              </Link>
              <Link className="nav-link" to={"/login"}>
                Log In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
=======
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
				<div className='container-fluid'>
					<Link
						className='navbar-brand'
						to={'#'}>
						{/* <img src="/" alt="" /> */}
						Abhidan
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon' />
					</button>
					<div
						className='collapse navbar-collapse justify-content-center'
						id='navbarNavAltMarkup'>
						<div className='navbar-nav'>
							<Link
								className='nav-link active'
								aria-current='page'
								to={'/'}>
								Home
							</Link>
							<Link
								className='nav-link'
								to={'/about'}>
								About
							</Link>
							<Link
								className='nav-link'
								to={'#'}>
								NGO's
							</Link>
							<Link
								className='nav-link'
								to={'#'}>
								Blog
							</Link>
							<Link
								className='nav-link'
								to={'#'}>
								News & Update
							</Link>
							<Link
								className='nav-link'
								to='/Sign'>
								Sign
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
}

export default Navbar