import React, { useEffect } from "react";
import Aos from "aos";

const LandingIntro = () => {

  useEffect(() => {
    Aos.init();
  })

  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3" data-aos="fade-up">
              <i className="bg-color-2 i-boxed icon_wallet"></i>
              <div className="text">
                <h4 className="" data-aos="fade-up">Set up your wallet</h4>
                <p data-aos="fade-up">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_wallet" ></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3" data-aos="fade-up">
              <i className="bg-color-2 i-boxed icon_cloud-upload_alt" data-aos="fade-up"></i>
              <div className="text">
                <h4 className="" data-aos="fade-up">Add your NFT's</h4>
                <p data-aos="fade-up">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_cloud-upload_alt"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3" data-aos="fade-up">
              <i className="bg-color-2 i-boxed icon_tags_alt" data-aos="fade-up"></i>
              <div className="text">
                <h4 className="" data-aos="fade-up">Sell your NFT's</h4>
                <p data-aos="fade-up">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_tags_alt" ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
