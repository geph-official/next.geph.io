import React, { useState } from "react";

import "../app.css";
import "./PlanPicker.css";
import { addl10n, l10n } from "../common/l10n";
import "./PlanPicker.l10n";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Helmet } from "react-helmet";

const STRIPEKEY = "pk_live_Wk781YzANKGuLBl2NzFkRu5n00YdYjObFY";

const toCNY = eur => 7.8 * eur;
const toUSD = eur => 1.1 * eur;

const Selector = props => (
  <div className="card" onClick={props.onClick}>
    <div
      className="card-body"
      style={{
        display: "flex",
        alignItems: "center",
        borderStyle: props.selected ? "solid" : "none",
        borderColor: "#007bff",
        borderWidth: "2px"
      }}
    >
      <ion-icon
        name={props.selected ? "radio-button-on" : "radio-button-off"}
        size="large"
        style={{
          verticalAlign: "middle",
          marginRight: "12px"
        }}
      />
      <b>{props.description}</b>
      <span className="text-muted" style={{ marginLeft: "auto" }}>
        <b>€{5 * props.months}</b> / {30 * props.months}{" "}
        {props.localize("days")} <br />
        <small></small>
      </span>
    </div>
  </div>
);

const toQueryString = params => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&");
};

const getUserInfo = async (uname, pwd) => {
  const response = await axios.get(
    "/billing/userinfo?" +
      toQueryString({
        username: uname,
        password: pwd
      })
  );
  return response.data;
};

const cancelStripe = async (uname, pwd) => {
  const response = await axios.get(
    "/billing/stripe-cancel?" +
      toQueryString({
        username: uname,
        password: pwd
      })
  );
  return response.data;
};

const getStripeID = (months, autoRenew) => {
  if (months === 1) {
    return autoRenew ? "plan_GIE5voityP0f9u" : "sku_GIE7Nx2J7ZhXI8";
  } else if (months === 3) {
    return autoRenew ? "plan_GIE5eNXYZsLlMX" : "sku_GIE8CZ6qSEzd0t";
  } else {
    return autoRenew ? "plan_GIE5JhURW2fFND" : "sku_GIE8iScbw4grMT";
  }
};

const Payer = props => {
  const [payMethod, setPayMethod] = useState("card");
  const euroCents = 500 * props.months * (payMethod === "alipay" ? 1.05 : 1);
  const months = props.months;
  const renewable =
    !(props.userInfo && props.userInfo.expires) && payMethod !== "alipay";
  const [autoRenew, setAutoRenew] = useState(renewable);

  const stripeCheckout = async () => {
    const stripe = window.Stripe(STRIPEKEY);
    const { error } = await stripe.redirectToCheckout({
      items: [
        {
          [autoRenew ? "plan" : "sku"]: getStripeID(months, autoRenew),
          quantity: 1
        }
      ],
      successUrl: window.location.href,
      cancelUrl: window.location.href,
      customerEmail: props.userInfo.username + "@receipts.geph.io"
    });
    if (error) {
      alert(error);
    }
  };
  const checkout = async () => {
    if (payMethod === "card") {
      await stripeCheckout();
    } else {
      window.location.href =
        "/billing/alipay?" +
        toQueryString({
          username: props.userInfo.username,
          password: props.userInfo.password,
          months: months
        });
    }
  };
  return (
    <>
      <Helmet>
        <script src="https://js.stripe.com/v3/"></script>
	<meta charset="UTF-8" />
      </Helmet>
      <nav className="nav nav-tabs">
        <a
          className={payMethod === "card" ? "nav-link active" : "nav-link"}
          onClick={_ => setPayMethod("card")}
        >
          <img src={require("../assets/visa.jpg")} className="cardbrand" />
          <img
            src={require("../assets/mastercard.svg")}
            className="cardbrand"
          />
          {props.localize("credit-debit")}
        </a>
        <a
          className={payMethod === "alipay" ? "nav-link active" : "nav-link"}
          onClick={_ => {
            setPayMethod("alipay");
            setAutoRenew(false);
          }}
        >
          <img src={require("../assets/alipay.svg")} className="cardbrand" />
          {props.localize("alipay")}&nbsp;
          <span className="badge badge-warning">
            5% {props.localize("fee")}
          </span>
        </a>
      </nav>
      <div className="card">
        <div className="card-body">
          <span
            style={{
              fontSize: "150%"
            }}
          >
            <b className="text-success">€{(euroCents / 100).toFixed(2)}</b>
            &nbsp;
            <span className="text-muted">
              {props.localize("for-X-months")(months)}
            </span>
          </span>
          <br />
          <span className="text-muted">
            ≈ <b>${(toUSD(euroCents) / 100).toFixed(1)} </b>
            USD&nbsp;&nbsp;·&nbsp;&nbsp;≈{" "}
            <b>¥{(toCNY(euroCents) / 100).toFixed(0)}</b> RMB
          </span>
          <hr />
          <div className="input-group input-group-sm">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {props.localize("discount-code")}
              </span>
            </div>
            <input
              type="text"
              maxlength="10"
              style={{
                width: "128px",
                fontFamily: "monospace",
                fontSize: "80%"
              }}
              disabled
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mb-3 mt-2"
            onClick={_ => checkout()}
          >
            {props.localize("check-out")}
          </button>
          <div
            className="form-check"
            style={{ visibility: renewable ? "visible" : "hidden" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="inputAutoRenew"
              checked={autoRenew}
              disabled={!renewable}
              onClick={_ => setAutoRenew(!autoRenew)}
            />
            <label className="form-check-label" htmlFor="inputAutoRenew">
              &nbsp;{props.localize("automatically-renew")}
            </label>
          </div>
          <small>
            {autoRenew
              ? props.localize("automatically-renew-blurb")(euroCents, months)
              : props.localize("no-renew-blurb")(months)}
          </small>
        </div>
      </div>
    </>
  );
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Planner = props => {
  const [months, setMonths] = useState(1);
  const [userInfo, setUserInfo] = useState(false);
  const getLang = () => {
    try {
      if (navigator.language === "zh-CN") {
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
  const localize = l10n(getLang());
  try {
    const toGo = async () => {
      try {
        const info = await getUserInfo(
          sessionStorage.getItem("username"),
          sessionStorage.getItem("password")
        );
        console.log("INFO");
        console.log(info);
        info.password = sessionStorage.getItem("password");
        setUserInfo(info);
      } catch (e) {
        console.log(e);
      }
    };
    if (!userInfo) {
      toGo();
    }
  } catch (e) {}

  return (
    <>
      <section className="whiteback">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col">
              <h3>{localize("account-overview")}</h3>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md">
              <b>{localize("username")}</b> <br />
              {userInfo && userInfo.username}
            </div>
            <div className="col-md">
              <b>{localize("subscription")}</b> <br />
              {userInfo &&
                (userInfo.type === "free" ? localize("free") : "Plus")}
            </div>
            {userInfo && userInfo.expires && (
              <div className="col-md">
                <b>{localize("expires")}</b> <br />
                {new Date(userInfo.expires * 1000)
                  .toISOString()
                  .substring(0, 10)}
              </div>
            )}
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col">
              <hr></hr>
              <p>
                {userInfo &&
                  (userInfo.subscription
                    ? localize("subscription-blurb")(async _ => {
                        await cancelStripe(
                          userInfo.username,
                          userInfo.password
                        );
                        window.location.reload();
                      })
                    : localize("extend-blurb"))}
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      {userInfo && !userInfo.subscription && (
        <>
          <section className="lightback">
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col">
                  <h3>
                    <span className="badge badge-secondary">
                      {localize("step1")}
                    </span>{" "}
                    &nbsp;
                    {localize("choose-a-plan-length")}
                  </h3>
                  <p className="hero-text">{localize("flat-rate-blurb")}</p>
                  <Selector
                    localize={localize}
                    selected={months === 1}
                    description={"1 " + localize("month")}
                    months={1}
                    onClick={_ => setMonths(1)}
                  />
                  <Selector
                    localize={localize}
                    selected={months === 3}
                    description={"3 " + localize("months")}
                    months={3}
                    onClick={_ => setMonths(3)}
                  />
                  <Selector
                    localize={localize}
                    selected={months === 12}
                    description={"12 " + localize("months")}
                    months={12}
                    onClick={_ => setMonths(12)}
                  />
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </section>
          <section className="lightback">
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col">
                  <h3>
                    <span className="badge badge-secondary">
                      {localize("step2")}
                    </span>{" "}
                    &nbsp; {localize("pay-for-plan")}
                  </h3>
                  <Payer
                    userInfo={userInfo}
                    localize={localize}
                    months={months}
                  />
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Planner;
