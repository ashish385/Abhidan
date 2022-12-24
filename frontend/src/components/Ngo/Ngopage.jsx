import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ReactSlick from "../Slide/ReactSlick";
import { Link } from "react-router-dom";

const Ngopage = () => {
  const ngoback = {
    background: `url('https://kodesolution.com/html/2017/fundpro-html/demo/images/pattern/p26.png')`,
    border: "1px solid black",
  };
  const ngoName = {
    fontFamily: "monospace",
    fontSize: "30px",
  };
  const ngoP = {
    fontFamily: "Open sans serif",
    fontSize: "18px",
    color: "#666666",
    margin: "10px 0px",
  };
  const ngoimg = {
    width: "100%",
    borderRadius: "20px 20px",
  };

  const data = {
    "id":1,
    "title":"ngo name",
    "description":" Charitable giving is the act of giving money, goods or time to the unfortunate, either directly or by means of a charitable trust or other worthy cause. Charitable giving as a religiousact or duty is referred to as almsgiving or alms. Theimpoverished, particularly those widowed or orphaned,the ailing or injured, are generally regarded as the proper recipients of charity"
    ,
    "location":"Lucknow",
    "contact":"3535647575",


  }
  console.log(data)
  return (
    <>
      <Navbar />
      <ReactSlick />
      {/* <div className="container" style={{background:`url('https://kodesolution.com/html/2017/fundpro-html/demo/images/pattern/p26.png')`,border:'1px solid black'}}>
        <div className="row" style={{border:'1px solid black'}}>
          <div className="col-lg-12 mb-50" style={{border:'1px solid black',display:"flex",}}>
            <div className="col-lg-4" >
              <img src={'https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg'} style={{width:'100%'}} />
            </div>
            <div className="col-lg-8" style={{border:'1px solid black',boxSizing:"border-box"}}>
              <h3>Ngo name</h3>
              <span>Location</span>
              <p>Charitable giving is the act of giving money, goods or time to the unfortunate,
                 either directly or by means of a charitable trust or other worthy cause. 
                 Charitable giving as a religious act or duty is referred to as almsgiving or alms. 
                 The impoverished, particularly those widowed or orphaned,the ailing or injured, 
                are generally regarded as the proper recipients of charity.</p>
                <button type="submit">Donate</button>
            </div>
          
           </div>
        </div>
      </div> */}

      <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="3000">
        <div className="container mt-5" style={ngoback}>
          <div className="row mb-50">
            <div className="col-md-4" style={{ marginTop: "15px " }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoName}>
                Ngo Name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>
              <a href="#">
                <button type="submit" className="btn btn-danger ">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="3000">
      
        <div className="container mt-5" style={ngoback}>
          <div className="row mb-50">
            <div className="col-md-4" style={{ marginTop: "15px" }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoName}>
                Ngo name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>
              <a href="#">
                <button type="submit" className="btn btn-primary">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="3000">
        {" "}
        <div className="container mt-5" style={ngoback}>
          <div className="row mb-50">
            <div className="col-md-4" style={{ marginTop: "15px  " }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoName}>
                Ngo name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>
              <a href="#">
                <button type="submit" className="btn btn-danger">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="3000">
        {" "}
        <div className="container mt-5" style={ngoback}>
          <div className="row mb-50">
            <div className="col-md-4" style={{ marginTop: "15px  " }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoName}>
                Ngo name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>

              <a href="#">
                <button type="submit" className="btn btn-primary">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="3000">
        {" "}
        <div className="container mt-5" style={ngoback}>
          <div className="row mb-50">
            <div className="col-md-4" style={{ marginTop: "15px  " }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoimg}>
                Ngo name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>

              <a href="#">
                <button type="submit" className="btn btn-danger">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="3000">
        {" "}
        <div className="container mt-5" style={ngoback}>
          <div className="row mb-50">
            <div className="col-md-4" style={{ marginTop: "15px  " }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoName}>
                Ngo name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>

              <a href="#">
                <button type="submit" className="btn btn-primary">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="3000">
        <div className="container mt-5" style={ngoback}>
          <div className="row mb-50">
            <div className="col-md-4" style={{ marginTop: "15px  " }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoName}>
                Ngo name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>

              <a href="#">
                <button type="submit" className="btn btn-danger">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="3000">
        {" "}
        <div className="container mt-5" style={ngoback}>
          <div className="row mb-50">
            <div className="col-md-4" style={{ marginTop: "15px  " }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoName}>
                Ngo name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>

              <a href="#">
                <button type="submit" className="btn btn-primary">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* import "./styles.css";

export default function App() {
  const data=[{ 
    "id":1,
    "name":"NGO",
    "dees":"fdhdgdgfdhg",
    "location":"Lucknow"
      
    
  },
{
  "id":2,
    "name":"NGO 2",
    "dees":"hellofsdfsd",
    "location":"Mumbai"

}]
console.log(data)
  return (
<>

{
  data.map((data,index)=>{
    return(<>
    <div key={index}>
    <h1>{data.name}</h1>
    <p>{data.dees}</p>
    <button >Request</button>
    </div>
    
    </>)
  })
} */}





{/* </>                                    
  );
} */}

      <Footer />
    </>
  );
};

export default Ngopage;
