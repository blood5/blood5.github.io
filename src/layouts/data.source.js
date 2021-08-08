import React from "react";

export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo",
    children: "https://i.loli.net/2021/08/08/KyaEVtY3f8FGspu.png",
  },
  Menu: {
    className: "header0-menu",
    children: [
      { name: "item0", a: { children: "产品介绍", href: "/" } },
      { name: "item1", a: { children: "解决方案", href: "/page2" } },
      { name: "item2", a: { children: "行业应用", href: "/example" } },
      { name: "item3", a: { children: "快速上手", href: "" } },
      { name: "item3", a: { children: "关于我们", href: "" } },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
};

export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
