import React from "react";
import StickyFooter from 'react-sticky-footer';
import { u1F429 } from 'react-icons-kit/noto_emoji_regular/u1F429'
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { glass } from "react-icons-kit/iconic/glass";
import { paperclip } from "react-icons-kit/iconic/paperclip";
import { profile } from "react-icons-kit/icomoon/profile";

const Footer = () => {
    return (
        <StickyFooter className="StickyFooter"
            bottomThreshold={50}
            normalStyles={{
                backgroundColor: "linen",
                padding: "2rem"
            }}
            stickyStyles={{
                backgroundColor: "rgba(255,255,255,.8)",
                padding: "2rem"
            }}
        >
            <div className="footerIcon">
                <div>
                    <Link to="/pets">
                        <Icon className="iconButton" size={40} icon={u1F429} />
                    </Link>
                    <br />
                </div>
                <div>
                    < Link to="/find">
                        <Icon className="iconButton3" size={25} icon={glass} />
                    </Link>
                    <br />
                </div>
                <div>
                    <Link to="/new">
                        <Icon className="iconButton1" size={25} icon={paperclip} />
                    </Link>
                    <br />
                </div>
                <div>
                    <Link to="/organizations">
                        <Icon className="iconButton5" size={25} icon={profile} />
                    </Link>
                    <br />
                </div>
            </div>
        </StickyFooter>
    );
}

export default Footer;