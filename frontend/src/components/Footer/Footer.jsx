import React from "react";
import "../Style/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="col">
            <h4>ABHIDAN</h4>
            <p>
              ABHIDAN is web-based application for managing the execces of food
              in resturant,hotel,hostal and wedding. It is intermediate between
              two peoples and provide fast and secure service. It's build on
              MREN technology, which more affecting the fast rendering and
              working. It is not stop at food but its work on extra donation
              services .
            </p>
          </div>

          <div className="col">
            <h4>Supportus</h4>
            <p>Donate now</p>
            <p>Donate now</p>
            <p>Donate now</p>
          </div>
          <div className="col">
            <h4>QuickLinks</h4>
            <p>HOme</p>
            <p>HOme</p>
            <p>HOme</p>
          </div>
          <div className="col">
            <h4>News Letter</h4>
            <form>
              <input
                type="email"
                placeholder="Enter your email id"
              
                required
              />
              <button type="submit" className="btn btn-danger">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;