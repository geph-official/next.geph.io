import React, { useState } from "react";
import { addl10n, l10n } from "../common/l10n.js";

addl10n({
  "account-overview": {
    en: "Account overview",
    zht: "用戶信息",
    zhs: "用户信息"
  },
  username: {
    en: "Username",
    zht: "用戶名",
    zhs: "用户名"
  },
  subscription: {
    en: "Subscription",
    zht: "用戶等級",
    zhs: "用户等级"
  },
  expires: {
    en: "Expiry date",
    zht: "截止日期",
    zhs: "截止日期"
  },
  free: {
    en: "Free",
    zht: "免費",
    zhs: "免费"
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
    )
  },
  days: { en: "days", zht: "天" },
  fee: { en: "fee", zht: "手續費" },
  step1: { en: "Step 1", zht: "第一步" },
  step2: { en: "Step 2", zht: "第二步" },
  "choose-a-plan-length": { en: "Choose a plan length", zht: "選擇時長" },
  month: { en: "month", zht: "個月" },
  months: { en: "months", zht: "個月" },
  "pay-for-plan": { en: "Pay for plan", zht: "付款" },
  "credit-debit": { en: "Credit/debit cards", zht: "國際信用卡/借記卡" },
  alipay: { en: "Alipay", zht: "支付寶" },
  "for-X-months": {
    en: x => "for " + x + " months",
    zht: x => "（" + x + "個月）"
  },
  "discount-code": { en: "Discount code", zht: "優惠碼" },
  "check-out": { en: "Check out", zht: "結賬" },
  "automatically-renew": {
    en: "Automatically renew subscription",
    zht: "自動續訂"
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
    )
  },
  "no-renew-blurb": {
    en: months => (
      <>
        Your subscription will <b>expire in {months * 30} days</b> unless
        manually renewed
      </>
    ),
    zht: months => (
      <>
        若不手動續費，將於<b>{months * 30}天</b>後自動取消
      </>
    )
  }
});
