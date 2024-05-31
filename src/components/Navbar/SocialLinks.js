import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { ImInstagram } from "react-icons/im";

export const SocialLinks = () => {
    return(
        <div className="social-links">
        <a href="https://www.twitter.com/"  aria-label="link to twitter" target="_blank" rel="noreferrer">
            <RiTwitterXFill alt="twitter" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/" aria-label="link to instagram" target="_blank" rel="noreferrer">
            <ImInstagram alt="instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/"  aria-label="link to facebook" target="_blank" rel="noreferrer">
            <SlSocialFacebook alt="facebook" className="social-icon" />
        </a>
        </div>
    )
}