import React, { useState, useEffect } from "react";

import "../app.css";
import "./PlanPicker.css";
import { addl10n, l10n } from "../common/l10n";
import "./PlanPicker.l10n";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useDebounce } from "use-debounce";
import detectNearestBrowserLocale from "detect-nearest-browser-locale";

const STRIPEKEY = "pk_live_Wk781YzANKGuLBl2NzFkRu5n00YdYjObFY";

const getLang = () => {
  try {
    const lang = detectNearestBrowserLocale(["en-US", "zh-CN", "zh-TW"]);
    if (lang === "zh-CN") {
      return "zhs";
    }
    if (lang === "zhh-TW") {
      return "zht";
    }
    return "en";
  } catch (e) {
    return "en";
  }
};

const toCNY = (eur) => 7.67 * eur;
const toUSD = (eur) => 1.19 * eur;

// Component for picking
const Selector = (props) => (
  <div className="card" onClick={props.onClick}>
    <div
      className="card-body"
      style={{
        display: "flex",
        alignItems: "center",
        borderStyle: props.selected ? "solid" : "none",
        borderColor: "#007bff",
        borderWidth: "2px",
      }}
    >
      <ion-icon
        name={props.selected ? "radio-button-on" : "radio-button-off"}
        size="large"
        style={{
          verticalAlign: "middle",
          marginRight: "12px",
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

const toQueryString = (params) => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
};

const getUserInfo = async (sessid) => {
  const response = await axios.post("https://web-backend.geph.io/userinfo", {
    sessid: sessid,
  });
  return response.data;
};

const getNewStripeSession = async (sessid, promo, months) => {
  const response = await axios.post(
    "https://web-backend.geph.io/new-stripe",
    {
      sessid: sessid,
      promo: promo,
      months: months,
    },
    { responseType: "text" }
  );
  return response.data;
};

const Payer = (props) => {
  const [payMethod, setPayMethod] = useState("card");
  const [euroCents, setEuroCents] = useState(0);
  const months = props.months;
  const [loaded, setLoaded] = useState(false);
  const [cryptoCurrency, setCryptoCurrency] = useState("BTC");
  const [promo, setPromo] = useState("");
  const [debouncedPromo] = useDebounce(promo, 500);

  const updatePrice = async () => {
    setLoaded(false);
    try {
      try {
        const eurocents = await getCost();
        setEuroCents(eurocents);
        return;
      } catch (e) {
        console.log(e);
      }
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    console.log(debouncedPromo);
    updatePrice();
  }, [payMethod, months, debouncedPromo]);

  const getCost = async () => {
    const response = await axios.get(
      "https://web-backend.geph.io/calculate-price?" +
        toQueryString({
          promo: promo,
          months: months,
          method: payMethod,
        }),
      { responseType: "text" }
    );
    return response.data;
  };

  const stripeCheckout = async () => {
    const stripe = window.Stripe(STRIPEKEY);
    const sid = await getNewStripeSession(props.sessid, promo, months);
    console.log(sid);
    const { error } = await stripe.redirectToCheckout({
      sessionId: sid,
    });
    if (error) {
      alert(error);
    }
  };

  const getAlipayUrl = async () => {
    const response = await axios.post("https://web-backend.geph.io/alipay", {
      sessid: props.sessid,
      promo: promo,
      months: months,
    });
    return response.data.url;
  };

  const getCryptoUrl = async (currency) => {
    const response = await axios.post(
      "https://web-backend.geph.io/coinpayments",
      {
        sessid: props.sessid,
        promo: promo,
        months: months,
        currency: currency,
      }
    );
    return response.data;
  };

  const checkout = async () => {
    if (payMethod === "card") {
      await stripeCheckout();
    } else if (payMethod == "alipay") {
      window.location.href = await getAlipayUrl();
    } else if (payMethod == "crypto") {
      window.location.href = await getCryptoUrl(cryptoCurrency);
    }
  };
  return (
    <>
      <Helmet>
        <script src="https://js.stripe.com/v3/"></script>
      </Helmet>
      <nav className="nav nav-tabs">
        <a
          className={payMethod === "card" ? "nav-link active" : "nav-link"}
          onClick={(_) => setPayMethod("card")}
        >
          <img src={require("../assets/visa.jpg")} className="cardbrand" />
          <img
            src={require("../assets/mastercard.svg")}
            className="cardbrand"
          />
          {props.localize("credit-debit")}
        </a>

        <a
          className={payMethod === "crypto" ? "nav-link active" : "nav-link"}
          onClick={(_) => {
            setPayMethod("crypto");
          }}
        >
          <img src={require("../assets/bitcoin.png")} className="cardbrand" />
          {props.localize("crypto")}&nbsp;
          <span className="badge badge-success">
            20%&nbsp;{props.localize("discount")}
          </span>
        </a>
        <a
          className={payMethod === "alipay" ? "nav-link active" : "nav-link"}
          onClick={(_) => {
            setPayMethod("alipay");
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
              fontSize: "150%",
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
              maxLength="10"
              style={{
                width: "128px",
                fontFamily: "monospace",
                fontSize: "80%",
              }}
              onChange={(ev) => {
                setPromo(ev.target.value.toUpperCase());
              }}
              value={promo}
            />
          </div>
          <hr />
          <div class="form-inline">
            {payMethod == "crypto" ? (
              <div class="input-group mb-2 mr-sm-2">
                <select
                  class="form-control"
                  onChange={(event) => setCryptoCurrency(event.target.value)}
                  value={cryptoCurrency}
                >
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>XMR</option>
                  <option>USDT.ERC20</option>
                  <option>USDC</option>
                  <option>DAI</option>
                </select>
              </div>
            ) : (
              ""
            )}
            <button
              type="normal"
              className="btn btn-primary mb-3 mt-2"
              disabled={!loaded}
              onClick={(_) => checkout()}
            >
              {props.localize("check-out")}
            </button>
          </div>
          <small>{props.localize("no-renew-blurb")(months)}</small>
        </div>
      </div>
    </>
  );
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Planner = (props) => {
  const [months, setMonths] = useState(1);
  const [userInfo, setUserInfo] = useState(false);
  const sessid = (() => {
    if (typeof window !== "undefined") {
      return window.sessionStorage.getItem("session-id");
    } else {
      return "NULL";
    }
  })();
  // const sessid = "sess-207633440935381486337334519777625254460";
  const localize = l10n(getLang());
  try {
    const toGo = async () => {
      if (typeof window !== "undefined" && window.sessionStorage) {
        try {
          if (sessid) {
            const info = await getUserInfo(sessid);
            console.log("INFO");
            console.log(info);
            setUserInfo(info);
          }
        } catch (e) {
          alert(e);
        }
      }
    };
    if (!userInfo) {
      toGo();
    }
  } catch (e) {}

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
      </Helmet>
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
                (userInfo.plan === "plus" ? "Plus" : localize("free"))}
            </div>
            {userInfo && userInfo.expires && (
              <div className="col-md">
                <b>{localize("expires")}</b> <br />
                {new Date(userInfo.expires).toISOString().substring(0, 10)}
              </div>
            )}
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col">
              <hr></hr>
              <p>{userInfo && localize("extend-blurb")}</p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      {userInfo && (
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
                    onClick={(_) => setMonths(1)}
                  />
                  <Selector
                    localize={localize}
                    selected={months === 3}
                    description={"3 " + localize("months")}
                    months={3}
                    onClick={(_) => setMonths(3)}
                  />
                  <Selector
                    localize={localize}
                    selected={months === 12}
                    description={"12 " + localize("months")}
                    months={12}
                    onClick={(_) => setMonths(12)}
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
                    sessid={sessid}
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
