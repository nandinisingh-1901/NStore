import "./Footer.css";
import paymet from "../../Assets/Footer/payment-method_69e7ec.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="Footer">
      <div className="footer-section">
        <div className="footer-section-top">
          <div className="footer-section-top-left">
            <div className="footer-section-top-left-title footer-link" onClick={()=>{navigate('/')}}>NStore</div>
            <div className="footer-section-top-left-content footer-items">
            NStore is your one-stop destination for all your shopping needs,
             ensuring a seamless shopping experience for our customers.
            </div>
          </div>
          <div className="footer-section-top-right">
            <div className="footer-section-top-right-section-one">
                <div className="footer-section-top-right-section-one-title ">Shop</div>
                <div className="footer-section-top-right-section-one-title footer-items footer-link">All Collections</div>
                <div className="footer-section-top-right-section-one-title footer-items footer-link">Winter Edition</div>
                <div className="footer-section-top-right-section-one-title footer-items footer-link">Discount</div>
            </div>
            <div className="footer-section-top-right-section-two">
                <div className="footer-section-top-right-section-two-title ">Company</div>
                <div className="footer-section-top-right-section-two-title footer-items footer-link">About Us</div>
                <div className="footer-section-top-right-section-two-title footer-items footer-link">Contact Us</div>
                <div className="footer-section-top-right-section-two-title footer-items footer-link">Affilates</div>
            </div>
            <div className="footer-section-top-right-section-three">
                <div className="footer-section-top-right-section-three-title ">Support</div>
                <div className="footer-section-top-right-section-three-title footer-items footer-link">FAQs</div>
                <div className="footer-section-top-right-section-three-title footer-items footer-link">Cookie Policy</div>
                <div className="footer-section-top-right-section-three-title footer-items footer-link">Term of Use</div>
            </div>
            <div className="footer-section-top-right-section-four">
                <div className="footer-section-top-right-section-four-title ">Payment Methods</div>
                <div className="footer-section-top-right-section-four-title footer-items">
                    <img src={paymet} alt={"payment"} />
                </div>
            </div>
          </div>
        </div>
        <div className="footer-section-bottom">
          © {new Date().getFullYear()} NStore. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
