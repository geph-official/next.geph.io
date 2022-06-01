import React, { useState } from "react";
import { addl10n, l10n } from "../common/l10n.js";

addl10n({
  "payment-successful": {
    en: "Payment successful",
    zht: "支付成功",
    zhs: "支付成功",
  },
  "payment-successful-blurb": {
    en:
      "You may need to manually refresh user status on newer versions of Geph.",
    zht: "較新版本的迷霧通可能需要手動刷新用戶狀態",
    zhs: "较新版本的迷雾通可能需要手动刷新用户状态",
  },
  "account-overview": {
    en: "Account overview",
    zht: "用戶信息",
    zhs: "用户信息",
  },
  username: {
    en: "Username",
    zht: "用戶名",
    zhs: "用户名",
  },
  subscription: {
    en: "Subscription",
    zht: "用戶等級",
    zhs: "用户等级",
  },
  expires: {
    en: "Expiry date",
    zht: "截止日期",
    zhs: "截止日期",
  },
  free: {
    en: "Free",
    zht: "免費",
    zhs: "免费",
  },
  "extend-blurb": {
    en: "You may purchase or extend a Plus account below:",
    zhs: "可在下方购买/续订Plus",
    zht: "可在下方購買/續訂Plus",
  },
  "subscription-blurb": {
    en: (onClick) => (
      <>
        Your subscription automatically renews when it expires.{" "}
        <button onClick={onClick} className="btn btn-secondary btn-sm">
          Cancel
        </button>
      </>
    ),
    zht: (onClick) => (
      <>
        將在過期時自動續訂迷霧通Plus。{" "}
        <button onClick={onClick} className="btn btn-secondary btn-sm">
          取消
        </button>
      </>
    ),
    zhs: (onClick) => (
      <>
        将在过期时自动续订迷雾通Plus。{" "}
        <button onClick={onClick} className="btn btn-secondary btn-sm">
          取消
        </button>
      </>
    ),
  },
  "flat-rate-blurb": {
    en: (
      <>
        We offer a flat rate of{" "}
        <b>€5/month regardless of subscription length</b>. <br />
        Please choose the length most convenient for you.
      </>
    ),
    zht: (
      <>
        無論訂閱時間長短，<b>每月的費率固定為€5。</b>
        <br />
        請選擇對您最方便的時長。
      </>
    ),
    zhs: (
      <>
        无论订阅时间长短，<b>每月的费率固定为€5。 </b>
        <br />
        请选择对您最方便的时长。
      </>
    ),
  },
  days: { en: "days", zht: "天", zhs: "天" },
  fee: { en: "fee", zht: "手續費", zhs: "手续费" },
  discount: { en: "discount", zht: "優惠", zhs: "优惠" },
  crypto: {
    en: "Crypto",
    zht: "加密貨幣",
    zhs: "加密货币",
  },
  step1: { en: "Step 1", zht: "第一步", zhs: "第一步" },
  step2: { en: "Step 2", zht: "第二步", zhs: "第二步" },
  "choose-a-plan-length": {
    en: "Choose a plan length",
    zht: "選擇時長",
    zhs: "选择时长",
  },
  month: { en: "month", zht: "個月", zhs: "个月" },
  months: { en: "months", zht: "個月", zhs: "个月" },
  "pay-for-plan": { en: "Pay for plan", zht: "付款", zhs: "付款" },
  "credit-debit": {
    en: "Bank cards",
    zht: "信用/借記卡",
    zhs: "信用/借记卡",
  },
  alipay: { en: "Alipay", zht: "支付寶", zhs: "支付宝" },
  "for-X-months": {
    en: (x) => "for " + x + " months",
    zht: (x) => "（" + x + "個月）",
    zhs: (x) => "（" + x + "个月）",
  },
  "discount-code": { en: "Discount code", zht: "優惠碼", zhs: "优惠码" },
  "check-out": { en: "Pay now", zht: "支付", zhs: "支付" },
  "automatically-renew": {
    en: "Automatically renew subscription",
    zht: "自動續訂",
    zhs: "自动续订",
  },
  "automatically-renew-blurb": {
    en: (euroCents, months) => (
      <>
        You'll be charged&nbsp;
        <b>
          €{(euroCents / 100).toFixed(2)} every {months * 30} days
        </b>{" "}
        until you cancel
      </>
    ),
    zht: (euroCents, months) => (
      <>
        <b>
          每{months * 30}天自動扣費€{(euroCents / 100).toFixed(2)}
        </b>
        ，直到您取消
      </>
    ),
    zhs: (euroCents, months) => (
      <>
        <b>
          每{months * 30}天自动扣费€{(euroCents / 100).toFixed(2)}
        </b>
        ，直到您取消
      </>
    ),
  },
  "no-renew-blurb": {
    en: (months) => (
      <>
        Your subscription will <b>expire in {months * 30} days</b> unless
        manually renewed
      </>
    ),
    zht: (months) => (
      <>
        若不手動續費，將於<b>{months * 30}天</b>後自動取消
      </>
    ),
    zhs: (months) => (
      <>
        若不手动续费，将于<b>{months * 30}天</b>后自动取消
      </>
    ),
  },
});
