import React, { useState } from "react";
import { addl10n, l10n } from "./common/l10n.js";

const mizaruURL = "https://github.com/geph-official/geph2/wiki/Mizaru";
const slaURL =
  "https://github.com/geph-official/geph2/wiki/Service-SLA-(%E5%B0%81%E4%B8%80%E5%A4%A9%E8%B3%A0%E4%B8%80%E5%A4%A9%E6%94%BF%E7%AD%96)";

const policyEnURL =
  "https://github.com/geph-official/geph2/wiki/Policies-and-terms";
const policyZhURL =
  "https://github.com/geph-official/geph2/wiki/%E6%9C%8D%E5%8B%99%E6%A2%9D%E6%AC%BE%EF%BC%88%E5%8F%83%E8%80%83%E7%BF%BB%E8%AD%AF%EF%BC%89";

const githubURL = "https://github.com/geph-official/";

addl10n({
  "blast-through-censorship": {
    en: (
      <>
        <b>Blast</b> <span className="shade">through censorship!</span>
      </>
    ),
    zht: (
      <>
        <b>衝破</b>網絡封鎖
      </>
    ),
    zhs: (
      <>
        <b>冲破</b>网络封锁
      </>
    )
  },
  "geph-connects": {
    en: (
      <>
        Geph connects you with the censorship-free Internet, <br />
        <b>even when nothing else works.</b>
      </>
    ),
    zht: "其它軟件都失靈時，用迷霧通連接自由的網絡！",
    zhs: "其它软件都失灵时，用迷雾通连接自由的网络！"
  },
  "download-now": {
    en: "Download now",
    zht: "現在下載",
    zhs: "现在下载"
  },
  "other-platforms": {
    en: "Other platforms",
    zht: "其他平台",
    zhs: "其他平台"
  },
  "hero-text": {
    en: (
      <>
        <h2 className="center">Far surpassing VPNs</h2>
        <p className="hero-text">
          Most VPNs and anti-censorship tools only rely on keeping a low profile
          to avoid blocking. Even worse, you never know which providers you can
          trust.
        </p>
        <p className="hero-text">
          <b>Geph is different.</b> We built Geph from the ground up with
          cutting-edge technology designed to break through powerful government
          censorship like that in China and Iran. Telling all your friends about
          us won't make Geph any easier to block. For paid accounts, a day that
          Geph doesn't work is <a href={slaURL}>a day's money back</a>.
        </p>
        <p className="hero-text">
          We take your privacy extremely seriously. We{" "}
          <a href={policyEnURL}>won't</a> and <a href={mizaruURL}>can't</a> spy
          on you. Take a look at our code yourself &mdash; our entire software
          stack is <a href={githubURL}>open source</a>.
        </p>
      </>
    ),
    zht: (
      <>
        <h2 className="center">完勝VPN</h2>
        <p className="hero-text">
          大多數VPN和翻牆工具免被封殺只靠保持低調。
          更糟糕的是，誰也不知道哪些提供商值得信任。
        </p>
        <p className="hero-text">
          <b>迷霧通與眾不同。</b>
          我們設計迷霧通針對突破中國、伊朗等地的國家級網絡封鎖。迷霧通翻牆靠技術，不靠躲藏！我們也提供業界唯一的
          <a href={slaURL}>封幾天賠幾天</a>政策。
        </p>
        <p className="hero-text">
          我們極其重視您的隱私。我們<a href={policyZhURL}>不會</a>，並且
          <a href={mizaruURL}>根本不能</a>監視您的瀏覽記錄。迷霧通的代碼更是全部
          <a href={githubURL}>開源</a>的。
        </p>
      </>
    ),
    zhs: (
      <>
        <h2 className="center">完胜VPN</h2>
        <p className="hero-text">
          大多数VPN和翻墙工具免被封杀只靠保持低调。
          更糟糕的是，谁也不知道哪些提供商值得信任。
        </p>
        <p className="hero-text">
          <b>迷雾通与众不同。 </b>
          我们设计迷雾通针对突破中国、伊朗等地的国家级网络封锁。迷雾通翻墙靠技术，不靠躲藏！我们也提供业界唯一的
          <a href="#">封几天赔几天</a>政策。
        </p>
        <p className="hero-text">
          我们极其重视您的隐私。我们<a href={policyZhURL}>不会</a>，并且
          <a href={mizaruURL}>根本不能</a>监视您的浏览记录。迷雾通的代码更是全部
          <a href={githubURL}>开源</a>的。
        </p>
      </>
    )
  },
  "robust-privacy": {
    en: (
      <>
        <h5 className="center mb-3">Robust privacy</h5>
        <p>
          We are based in Estonia, an EU jurisdiction with strong privacy laws.
          We <a href={policyEnURL}>never log your browsing activity</a> when
          using Geph, and we &nbsp;
          <a href={policyEnURL}>never voluntarily share</a> any user information
          to third parties.
        </p>
        <p>
          Better yet, we can't sell you out even if we're hacked or coerced. We
          invented <a href={mizaruURL}>Mizaru</a>, a revolutionary
          zero-knowledge authentication scheme that prevents our servers from
          associating users with browsing activity.
        </p>
        <p>
          <b>
            No other VPN or proxy provider comes close to Geph's level of
            privacy.
          </b>
        </p>
      </>
    ),
    zht: (
      <>
        <h5 className="center mb-3">高度私密</h5>
        <p>
          迷霧通公司註冊在愛沙尼亞，受歐盟嚴格的隱私法保護。我們
          <a href={policyZhURL}>從不會記錄您的瀏覽信息</a>
          ，也絕不會向第三方主動交出任何用戶資料。
        </p>
        <p>
          更重要的是，我們即使被黑客入侵或受外力脅迫，也無法出賣我們的用戶。我們使用先進的密碼學算法開發了
          <a href={mizaruURL}>Mizaru</a>
          用戶認證協議。這獨特的技術保證用戶和瀏覽記錄之間沒有任何聯繫。
        </p>
        <p>
          <b>市場上沒有任何其他翻牆軟件提供迷霧通給您的私密性。</b>
        </p>
      </>
    ),
    zhs: (
      <>
        <h5 className="center mb-3">高度私密</h5>
        <p>
          迷雾通公司注册在爱沙尼亚，受欧盟严格的隐私法保护。我们
          <a href={policyZhURL}>从不会记录您的浏览信息</a>
          ，也绝不会向第三方主动交出任何用户资料。
        </p>
        <p>
          更重要的是，我们即使被黑客入侵或受外力胁迫，也无法出卖我们的用户。我们使用先进的密码学算法开发了
          <a href={mizaruURL}>Mizaru</a>
          用户认证协议。这独特的技术保证用户和浏览记录之间没有任何联系。
        </p>
        <p>
          <b>市场上没有任何其他翻墙软件提供迷雾通给您的私密性。 </b>
        </p>
      </>
    )
  },
  "resilient-anti-censorship": {
    en: (
      <>
        <h5 className="center mb-3">Resilient anti-censorship</h5>
        <p>
          Geph is designed for more than existing firewalls. We use
          state-of-the-art circumvention tech to make blocking Geph incredibly
          difficult, for both current and future censors.
        </p>
        <p>
          Geph is the only circumvention service with{" "}
          <b className="text-primary">
            <a href={slaURL}>
              SLA-guaranteed reliability for all paid accounts
            </a>
          </b>
          . We get you across the harshest national firewalls at the highest
          speeds, or we'll give your money back.
        </p>
      </>
    ),
    zht: (
      <>
        <h5 className="center mb-3">難以封鎖</h5>
        <p>
          迷霧通不僅僅針對已有的封鎖技術。我們使用最前沿的反封鎖技術，不管是現在還是未來的封鎖系統都難以屏蔽迷霧通。
        </p>
        <p>
          迷霧通更是目前市面上唯一為
          <b className="text-primary">
            <a href={slaURL}>一切付費用戶提供服務保證</a>
          </b>
          的翻牆軟件。迷霧通被封殺幾天，我們就賠款幾天！
        </p>
      </>
    ),
    zhs: (
      <>
        <h5 className="center mb-3">难以封锁</h5>
        <p>
          迷雾通不仅仅针对已有的封锁技术。我们使用最前沿的反封锁技术，不管是现在还是未来的封锁系统都难以屏蔽迷雾通。
        </p>
        <p>
          迷雾通更是目前市面上唯一为
          <b className="text-primary">
            <a href={slaURL}>一切付费用户提供服务保证</a>
          </b>
          的翻墙软件。迷雾通被封杀几天，我们就赔款几天！
        </p>
      </>
    )
  },
  "easy-to-afford": {
    en: (
      <>
        <h5 className="center mb-3">Easy to afford and use</h5>
        <p>
          We believe that Internet freedom and privacy is a basic right. So we
          offer <b>entirely free basic browsing</b> at moderate speeds.
          Unlimited Plus accounts provide greatly enhanced speeds at a flat
          price of
          <b> €5/month</b>.
        </p>
        <p>
          Whether you use Windows, Mac, Linux, or Android, no complicated setup
          is involved. A censorship-free Internet is just one click away.
        </p>
      </>
    ),
    zht: (
      <>
        <h5 className="center mb-3">實惠、簡單</h5>
        <p>
          我們視網絡自由和隱私為基本權利。所以我們提供<b>完全免費</b>
          的中速瀏覽，夠瀏覽新聞、查郵件、看標清視頻等。超快速度的付費Plus賬號僅需
          <b>€5/月</b>。
        </p>
        <p>
          不管您用Windows、Mac、Linux、還是Android，安裝使用迷霧通並不繁瑣。一鍵就可連接自由的互聯網。
        </p>
      </>
    ),
    zhs: (
      <>
        <h5 className="center mb-3">实惠、简单</h5>
        <p>
          我们视网络自由和隐私为基本权利。所以我们提供<b>完全免费</b>
          的中速浏览，够浏览新闻、查邮件、看标清视频等。超快速度的付费Plus账号仅需
          <b>€5/月</b>。
        </p>
        <p>
          不管您用Windows、Mac、Linux、还是Android，安装使用迷雾通并不繁琐。一键就可连接自由的互联网。
        </p>
      </>
    )
  },
  "download-links": {
    en: "Download links",
    zht: "下載鏈接",
    zhs: "下载链接"
  }
});
