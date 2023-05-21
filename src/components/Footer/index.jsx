"use client"
import React from "react";
import "./footer.scss";
import Link from "next/link";
import { Button, Input } from "antd";
import { FolderOutlined, MailOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__up">
          <div className="footer__up__about">
            <span className="text--lg">About</span>
            <p className="text--base text--dark-03">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <span className="text--base-bold">Email: <p className="text--base"> info@mkt.com</p></span>
            <span className="text--base-bold">Phone: <p className="text--base"> 0 (555) 555 55 55</p></span>
          </div>
          <div className="footer__up__links">
            <div className="footer__up__links__quick-links">
              <span className="text--lg">Quick Link</span>
              <div>
              <Link href="/">Home</Link>
              <Link href="/">Blogs</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
              </div>
            </div>
            <div className="footer__up__links__categories">
            <span className="text--lg">Categories</span>
              <div>
              <Link href="/">Lifestyle</Link>
              <Link href="/">Technology</Link>
              <Link href="/">Travel</Link>
              <Link href="/">Business</Link>
              <Link href="/">Economy</Link>
              <Link href="/">Sports</Link>
              </div>
            </div>
          </div>
          <div className="footer__up__newsletter">
            <div>
                <span className="text--h4">Weekly Newsletter</span>
                <p className="text--base text--dark-03">Get blog articles and offers via email</p>
                <Input size="large" placeholder="Your Email" suffix={<MailOutlined/>} />
                <Button size="large" type="primary" block>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="footer__down">
          <div className="footer__down__left">
            <small className="text--sm">© MKT 2023. All Rights Reserved.</small>
          </div>
          <div className="footer__down__right">
            <Link href="/">Terms of Use</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
