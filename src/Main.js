import React, { Component } from "react";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@reach/router";
import logo from "./logo.png";

export default class Main extends Component {
  render() {
    return (
      <>
        <section className="nav-header">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="nav-brandwrap">
                  <img src={require("./assets/logo-naked.png")} />
                  <span className="nav-brand">
                    <b>Geph</b>
                  </span>
                </div>
              </div>
              <div className="col nav-linkwrap">
                <div className="nav-link">Help</div>
                <div className="nav-link">Blog</div>
                <div className="nav-link">Policies</div>
                <div className="nav-link">About</div>
                <div className="nav-link">
                  <Link className="btn btn-outline-primary" to="/billing/">
                    Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md hero-left">
                <h1>
                  <b>Smash</b>{" "}
                  <span className="shade">through censorship!</span>
                </h1>
                <p className="hero-text">
                  Geph connects you with the censorship-free Internet. <br />
                  <b>Even when nothing else works.</b>
                </p>
                <button className="btn btn-primary btn-lg">Download now</button>
              </div>
              <div className="col-md">
                <img
                  src={require("./assets/screenshot-en.png")}
                  className="hero-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="darkback">
          <div className="container">
            <div className="row">
              <div className="col-md"></div>
              <div className="col-md-8">
                <h2 className="center">
                  Just like a VPN, but<b> way better.</b>
                </h2>
                <p className="hero-text">
                  Most VPNs and anti-censorship tools simply rely on keeping a
                  low profile to avoid getting blocked. And you never know which
                  providers you can trust.
                </p>
                <p className="hero-text">
                  <b>We are different.</b> We built Geph from the ground up with
                  cutting-edge technology specifically to break through powerful
                  government censorship like in China and Iran. Go tell all your
                  friends about us! It won't make Geph any easier to block.
                </p>
                <p className="hero-text">
                  Geph takes your privacy extremely seriously. We are based in
                  Estonia, an EU jurisdiction with strong privacy laws, and we
                  have a <a href="#">strict no-logging policy</a>.
                </p>
                <p className="hero-text">
                  Don't take our word for it. We use{" "}
                  <a href="#">revolutionary zero-knowledge cryptography</a> to
                  make sure we can't associate your browsing activity with
                  sensitive information, even if we secretly work with the bad
                  guys. And our entire software stack is{" "}
                  <a href="#">open source</a>.
                </p>
              </div>
              <div className="col-md"></div>
            </div>
          </div>
        </section>
        <section className="whiteback">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <h5 className="center">Strict privacy</h5>
                <p>
                  We never log your browsing activity when using Geph, and we
                  operate under a <a href="#">strict policy</a> of never
                  voluntarily sharing any user information to third parties.
                </p>
                <p>
                  And we can't sell you out even if we're hacked or coerced. We
                  invented <a href="#">Mizaru</a>, a groundbreaking
                  authentication scheme that prevents our servers from
                  associating users with browsing activity.
                </p>
                <p>
                  No other VPN or proxy provider comes close to Geph's level of
                  privacy.
                </p>
              </div>
              <div className="col-md">
                <h5 className="center">Resilient anti-censorship</h5>
                <p>
                  Geph isn't designed just to circumvent existing firewalls. We
                  use state-of-the-art research in circumvention technologies to
                  make Geph incredibly difficult to block, whether for current
                  or future censors.
                </p>
                <p>
                  We're willing to put our money where our mouths are &mdash;
                  Geph is the only circumvention service with{" "}
                  <b className="text-primary">
                    <a href="#">
                      SLA-guaranteed reliability for all paid accounts
                    </a>
                  </b>
                  . We get you across the harshest national firewalls at the
                  highest speeds, or we'll give your money back.
                </p>
              </div>
              <div className="col-md">
                <h5 className="center">Easy to afford and use</h5>
                <p>
                  We believe that freedom and privacy on the Internet is a basic
                  right. So we offer{" "}
                  <b className="text-success">absolutely free basic browsing</b>{" "}
                  at moderate speeds. Unlimited Plus accounts cost a flat price
                  of
                  <b className="text-success"> €5/month</b>.
                </p>
                <p>
                  And no matter whether you use Windows, Mac, Linux, or Android,
                  a censorship-free Internet is just one click away. No
                  complicated setup is needed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="lightback">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Download links</h2>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
