import React, { useState, useEffect } from "react";
import { addl10n, l10n } from "../common/l10n";
import "../app.css";
import "./PlanPicker.css";
import "./PlanPicker.l10n";
import detectNearestBrowserLocale from "detect-nearest-browser-locale";

const getLang = () => {
  try {
    const lang = detectNearestBrowserLocale(["en-US", "zh-CN", "zh-TW"]);
    if (lang === "zh-CN") {
      return "zhs";
    }
    if (/zh/.test(navigator.language)) {
      return "zht";
    }
    return "en";
  } catch (e) {
    return "en";
  }
};

const Success = (props) => {
  const localize = l10n(getLang());
  return (
    <>
      <section className="whiteback">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col">
              <h3>{localize("payment-successful")}!</h3>
              <p className="hero-text">
                {localize("payment-successful-blurb")}
              </p>
              <img class="img-fluid" src={require("../assets/refresh.png")} />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
