import React, {Fragment} from 'react';
import Logo from '../logo/logofooter';
import Menu from '../menus/menu';
import Whychoose from '../whychoose/whychoose';
import FooterMenu from '../menus/footerMenus';

const Footer = () => {
  return (
    <Fragment>

      <section className="bg-grey">
        <div className="flex justify-between max-w-6xl mx-auto gap-5 sm:flex-col sm:px-4 lg:flex-row">
          <div className="flex-none md:w-1/4 sm:w-9/12">
            <h3>Registered Address </h3>
            <p>
              #202, 88/1, Omega Aster Apt.,<br />
              Chokkanahalli, Yelahanka<br />
              Bengaluru, Karnataka - 560064<br />
              INDIA
              <br />
              <br />
              <b>Email:</b> contact@siliversal.com<br />
              <b>Phone:</b> +91 7483433274 <br />
            </p>
            <p className="copyrights">© Siliversal Copyrights</p>
          </div>

          <div className="flex-none md:w-1/6 sm:w-9/12">
            <h3>Company</h3>
            <ul className="flex-none footerLinks space-y-1">
              <Menu />
            </ul>
          </div>
          <div className="flex-none md:w-1/6 sm:w-9/12">
            <h3>Components</h3>
            <ul className="services space-y-1">
              <FooterMenu />
            </ul>
          </div>
          <div className="flex-none md:w-1/3 sm:w-9/12">
            <h3>Follow Us</h3>
            <div className="flex gap-2 md:w-1/6 sm:w-9/12">
              <a href="#">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#d0e3f3"
                    d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                  />
                </svg>
              </a>
              {/* <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="h-6 w-6 fill-current"
              >
                <path
                  fill="#FF3D00"
                  d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                />
                <path fill="#FFF" d="M20 31L20 17 32 24z" />
              </svg>
            </a> */}
            </div>
            <Logo />
          </div>

          

        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
