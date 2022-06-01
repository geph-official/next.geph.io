import React, { Component } from "react";
import { Link } from "@reach/router";

import { addl10n, l10n } from "./l10n";

addl10n({
  geph: { en: "Geph", zht: "迷霧通", zhs: "迷雾通" },
  help: { en: "Help", zht: "幫助", zhs: "帮助" },
  policies: { en: "Policies", zht: "條款", zhs: "条款" },
  contact: { en: "Contact", zht: "聯繫", zhs: "联系" },
  mirror: { zht: "免翻牆鏡像", zhs: "免翻墙镜像" },
  forum: { en: "Forum", zht: "用戶論壇", zhs: "用户论坛" },
});

export const Header = (props) => {
  const localize = l10n(props.lang);
  return (
    <section className="nav-header">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="nav-brandwrap">
              <img src={require("../assets/logo-naked.png")} alt="Geph logo" />
              <span className="nav-brand">
                <b>{localize("geph")}</b>
              </span>
            </div>
          </div>
          <div className="col-md nav-linkwrap">
            <div className="nav-link">
              <a
                target="_blank"
                href="https://community.geph.io"
                style={{ color: "#19448e" }}
              >
                {localize("forum")}
              </a>
            </div>
            <div className="nav-link">
              <a
                target="_blank"
                rel="noopener"
                href={props.lang === "en" ? "/policies.html" : "/policies.html"}
                style={{ color: "#19448e" }}
              >
                {localize("policies")}
              </a>
            </div>
            <div className="nav-link">
              <a href="#contact" style={{ color: "#19448e" }}>
                {localize("contact")}
              </a>
            </div>

            {props.lang !== "en" && (
              <div className="nav-link">
                <a
                  href="https://is.gd/getmwt"
                  style={{ color: "#19448e" }}
                  target="_blank"
                  rel="noopener"
                >
                  {localize("mirror")}
                </a>
              </div>
            )}
            <div className="nav-link">
              <Link
                to="/en/"
                style={{ fontWeight: props.lang === "en" ? 600 : 400 }}
              >
                en
              </Link>
              /
              <Link
                to="/zhs/"
                style={{ fontWeight: props.lang === "zhs" ? 600 : 400 }}
              >
                简
              </Link>
              /
              <Link
                to="/zht/"
                style={{ fontWeight: props.lang === "zht" ? 600 : 400 }}
              >
                繁
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
