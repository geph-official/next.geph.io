import React, { Component } from "react";

export const Footer = props => (
  <>
    <section className="whiteback">
      <div class="container">
        <div class="row">
          <div class="col-lg" id="contact">
            <p class="text-muted">© 2019- Gephyra OÜ</p>
            <p>
              Sakala 7-2, Tallinn
              <br />
              Estonia 10141
            </p>
            <p>
              <a href="mailto:contact@geph.io">contact@geph.io</a>
              <br />
              <a
                href="https://t.me/joinchat/Pc6C1hMBREf-8_TZM5z6_g"
                target="_blank"
                rel="noopener"
              >
                Telegram
              </a>
            </p>
            <p>
              +372 5486 2187
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="statcounter">
      <img
        className="statcounter"
        src="https://c.statcounter.com/12155608/0/044606fb/1/"
      />
    </div>
  </>
);
