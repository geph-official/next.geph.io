import React, { Component } from "react";

import "../app.css";
import "./PlanPicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Planner = props => (
  <section className="lightback">
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col">
          <h3>
            <span className="badge badge-secondary">Step 1</span> &nbsp; Choose
            a plan length
          </h3>
          <p className="hero-text">
            We offer a flat rate of{" "}
            <b>€5/month regardless of subscription length</b>. <br />
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  </section>
);

export default Planner;
