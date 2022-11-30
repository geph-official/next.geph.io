import React, { Component } from "react";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@reach/router";
import { Footer } from "./common/footer.jsx";
import { Header } from "./common/header.jsx";
import { toLangCode, l10n } from "./common/l10n";
import "./Main.l10n";
import { useRouteData } from "react-static";
import { Helmet } from "react-helmet";
import logo from "./logo.png";

const lin64tar = (version) =>
  "https://f001.backblazeb2.com/file/geph4-dl/geph-releases/linux-stable/" +
  version +
  "/Geph-x86_64.flatpak";

const win32exe = (version) =>
  "https://f001.backblazeb2.com/file/geph4-dl/geph-releases/windows-stable/" +
  version +
  "/geph-windows-setup.exe";

const mac64dmg = (version) =>
  "https://f001.backblazeb2.com/file/geph4-dl/geph-releases/macos-stable/" +
  version +
  "/geph-macos.dmg";

const androidapk = (version) =>
  "https://f001.backblazeb2.com/file/geph4-dl/geph-releases/android-stable/" +
  version +
  "/geph-android.apk";

const VERSIONS = require("versions.json");

const WINVER = VERSIONS["windows-stable"].version;
const MACVER = VERSIONS["macos-stable"].version;
const LINVER = VERSIONS["linux-stable"].version;
const ANDVER = VERSIONS["android-stable"].version;

const defaultDownload = () => {
  try {
    const platform = window.navigator.userAgent;
    if (/Android/.test(platform)) {
      return ["Android APK", androidapk, ANDVER];
    } else if (/Linux/.test(platform)) {
      return ["Linux amd64 (flatpak)", lin64tar, LINVER];
    } else if (/Mac/.test(platform)) {
      return ["macOS 10.10+ (dmg)", mac64dmg, MACVER];
    } else {
      return ["Windows 7+ (installer)", win32exe, WINVER];
    }
  } catch (e) {
    return ["Windows 7+ (installer)", win32exe, WINVER];
  }
};

export default (props) => {
  const localize = l10n(props.lang);
  const [downDesc, downLinkGen, downVer] = defaultDownload();
  return (
    <>
      <Helmet htmlAttributes={{ lang: toLangCode(props.lang) }}>
        <meta charset="UTF-8" />
        <title>{localize("geph")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="alternate" hreflang="en" href="https://geph.io/en/" />
        <link rel="alternate" hreflang="zh-TW" href="https://geph.io/zht/" />
        <link rel="alternate" hreflang="zh-CN" href="https://geph.io/zhs/" />
        <link rel="alternate" hreflang="zh" href="https://geph.io/zht/" />
        <meta name="description" content={localize("hero-text")} />
      </Helmet>
      <Header lang={props.lang} />
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md hero-left">
              <h1>{localize("blast-through-censorship")}</h1>
              <p className="hero-text">{localize("geph-connects")}</p>
              <a
                href={downLinkGen(downVer)}
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-lg"
              >
                {localize("download-now")}
              </a>
              <br />
              <small>
                {downDesc + " v" + downVer}&ensp;&middot;&ensp;
                <a href="#download-links">{localize("other-platforms")}</a>
              </small>
            </div>
            <div className="col-md">
              <img
                src={require("./assets/screenshot-en.png")}
                className="hero-img"
                alt="Screenshot"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="darkback">
        <div className="container">
          <div className="row">
            <div className="col-md"></div>
            <div className="col-md-8">{localize("hero-text")}</div>
            <div className="col-md"></div>
          </div>
        </div>
      </section>
      <section className="whiteback">
        <div className="container">
          <div className="row">
            <div className="col-md">{localize("robust-privacy")}</div>
            <div className="col-md">
              {localize("resilient-anti-censorship")}
            </div>
            <div className="col-md">{localize("easy-to-afford")}</div>
          </div>
        </div>
      </section>
      <section className="lightback" id="download-links">
        <div className="container">
          <div className="row mb-3">
            <div className="col">
              <h2>{localize("download-links")}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md card text-center">
              <div class="card-body">
                <img
                  alt="Windows"
                  src={require("./assets/windows.svg")}
                  className="oslogo"
                />
                <p class="card-text">
                  <a href={win32exe(WINVER)}>
                    <b>Windows 7+</b> (installer)
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md card text-center">
              <div class="card-body">
                <img
                  alt="Mac"
                  src={require("./assets/apple.svg")}
                  className="oslogo"
                />
                <p class="card-text">
                  <a href={mac64dmg(MACVER)}>
                    <b>macOS 10.10+</b> (dmg)
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md card text-center">
              <div class="card-body">
                <img
                  alt="Linux"
                  src={require("./assets/tux.svg")}
                  className="oslogo"
                />
                <p class="card-text">
                  <a href={lin64tar(LINVER)}>
                    <b>Linux amd64</b> (flatpak)
                  </a>
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md card text-center">
              <div class="card-body">
                <img
                  alt="Android"
                  src={require("./assets/android.svg")}
                  className="oslogo"
                />
                <p class="card-text">
                  <a href={androidapk(ANDVER)}>
                    <b>Android 5.0+</b> (APK)
                  </a>
                  <br />
                  <a href="https://play.google.com/store/apps/details?id=io.geph.android">
                    <b>Android 5.0+</b> (Google Play)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
