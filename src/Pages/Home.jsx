import React from "react";
import "../CSS/pages.css";
import logo from '../img/download.png'
import banner from "../img/man.422a052d.png";
import woman from "../img/woman.285f1a7d.png";
import woman2 from "../img/woman2.png"
import woman3 from "../img/woman3.png";
import h1 from "../img/h1.png";
import h2 from "../img/h2.png";
import h3 from "../img/h3.png";
import h4 from "../img/h4.png";
import h5 from "../img/h5.png";
import h6 from "../img/h6.png";
import h7 from "../img/h7.png";
import h8 from "../img/h8.png";
import foter from '../img/foter.png'
import { Link } from "react-router-dom";

const Home = (ele) => {
  return (
    <div>
      <container>
        <section className="banner-section">
          <div className="row">
            <div className="col-md-6">
              <h1 className="font-150 pt-5 ps-5 fw-lighter pb-0 margin-top-130px">
                LIVE FOR{" "}
                <span className="fw-bold text-white pb-0">FASHION</span>
              </h1>
              <h2 className="ps-5 text-white fw-semibold">SAVE UP TO 50%</h2>
              <div className="">
                <button className="ms-5 px-4 py-2 fs-fw-semibold navlink btn btn-outline-primary">
                  SHOP NOW
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <img src={banner} alt="" />
            </div>
          </div>
        </section>

        <section className="padding-60 ps-0 pe-0">
          <div class="container text-center">
            <div class="row sec-1-img">
              <div class="col-4"><img src={woman} alt="" /></div>
              <div class="col-4"><img src={woman2} alt="" /></div>
              <div class="col-4"><img src={woman3} alt="" /></div>
            </div>
          </div>
        </section>

        <section className="padding-60">
          <div>
            <h1 className="text-center fw-bold">HOT PRODUCT</h1>
            <p className="text-center fw-light fs-5 pb-4">
              Mauris luctus nisi sapien tristique dignissim ornare
            </p>
          </div>
          <Link to={`/SinglePage`} className="text-black text-decoration-none">
          <div className="row hp-img hp-p ">
            <div className="col-3 overflow-hidden shadow">
              <img src={h1} alt="" />{" "}
              <p className="text-center pt-3 fw-semibold">Blue Dress For Woman</p>
              <p className="text-center fs-5 fw-semibold">$38.00</p>
            </div>
            <div className="col-3 overflow-hidden shadow">
              <img src={h2} alt="" />
              <p className="text-center pt-3 fw-semibold">Blue Dress For Woman</p>
              <p className="text-center fs-5 fw-semibold">$39.00</p>
            </div>
            <div className="col-3 overflow-hidden shadow">
              <img src={h3} alt="" />
              <p className="text-center pt-3 fw-semibold">Blue Dress For Woman</p>
              <p className="text-center fs-5 fw-semibold">$18.00</p>
            </div>
            <div className="col-3 overflow-hidden shadow">
              <img src={h4} alt="" />
              <p className="text-center pt-3 fw-semibold">Blue Dress For Woman</p>
              <p className="text-center fs-5 fw-semibold">$38.00</p>
            </div>


            <div className="col-3 overflow-hidden shadow pt-5">
              <img src={h5} alt="" />{" "}
              <p className="text-center pt-3 fw-semibold">Blue Dress For Woman</p>
              <p className="text-center fs-5 fw-semibold">$88.00</p>
            </div>
            <div className="col-3 overflow-hidden shadow pt-5">
              <img src={h6} alt="" />
              <p className="text-center pt-3 fw-semibold">Blue Dress For Woman</p>
              <p className="text-center fs-5 fw-semibold">$48.00</p>
            </div>
            <div className="col-3 overflow-hidden shadow pt-5">
              <img src={h7} alt="" />
              <p className="text-center pt-3 fw-semibold">Blue Dress For Woman</p>
              <p className="text-center fs-5 fw-semibold">$34.00</p>
            </div>
            <div className="col-3 overflow-hidden shadow pt-5">
              <img src={h8} alt="" />
              <p className="text-center pt-3 fw-semibold">Blue Dress For Woman</p>
              <p className="text-center fs-5 fw-semibold">$38.00</p>
            </div>
          </div>
          </Link>
        </section>

        <footer className="padding-60">
          <div className="row">
            <div className="col-3">
              <div><img src={logo} alt="" /></div>
              <h5 className="fw-light pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati culpa assumenda voluptas placeat amet consectetur adipisicing elit. Obcaecati culpa assumenda voluptas placeat.</h5>
            </div>
            <div className="col-3">
              <h5 className="text-center pb-4">INFORMATION</h5>
              <div className="row text-center fs-5 ft">
              <span>Home</span>
              <span>Product</span>
              <span>Cart</span>
              <span>About Us</span>
              <span>Policy</span>
              </div>
            </div>

            <div className="col-3">
              <h5 className="text-center pb-4">SHOP</h5>
              <div className="row text-center fs-5 ft">
              <span>Cart View One</span>
              <span>Cart View Two</span>
              <span>Empty Cart</span>
              <span>Checkout View One Us</span>
              <span>Wishlist</span>
              </div>
            </div>
          </div>
        </footer>

        <section className="bg-dark">
          <div className="row">
            <div><h5 className="text-white">© CopyRight 2021 <span className="text-primary">AndShop</span></h5></div>
            <div>
            <img src={foter} alt="" />
            </div>
          </div>
        </section>
      </container>
    </div>
  );
};

export default Home