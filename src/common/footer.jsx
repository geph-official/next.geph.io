import React, { Component } from "react";

export const Footer = (props) => (
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
