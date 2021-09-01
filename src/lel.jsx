import React from "react";
import detectNearestBrowserLocale from "detect-nearest-browser-locale";
import { Redirect } from "react-router";

export default class Component extends React.Component {
  componentDidMount() {
    const locale = detectNearestBrowserLocale(["en", "zh-TW", "zh-CN"]);
    this.setState({ userLanguage: locale });
  }

  render() {
    if (this.state) {
      const { userLanguage } = this.state;
      if (userLanguage === "en") {
        window.location.href = "/en";
      } else if (userLanguage == "zh-TW") {
        window.location.href = "/zht";
      } else if (userLanguage == "zh-CN") {
        window.location.href = "/zhs";
      }
      return <h1></h1>;
    } else {
      return <h1></h1>;
    }
  }
}
