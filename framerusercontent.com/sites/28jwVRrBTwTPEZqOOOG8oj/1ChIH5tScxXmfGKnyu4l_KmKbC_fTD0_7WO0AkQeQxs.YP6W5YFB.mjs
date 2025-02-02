import { a as C } from "./chunk-BERVMVSX.mjs";
import { a as N, b as E } from "./chunk-QCBR5Y6I.mjs";
import { a as B } from "./chunk-ACKUBLVB.mjs";
import "./chunk-BKUGFBCH.mjs";
import "./chunk-GUMYZLKL.mjs";
import { a as ne } from "./chunk-KUFIRSKR.mjs";
import { a as I } from "./chunk-YJXVH4X7.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as J,
  C as k,
  Ea as K,
  Fa as $,
  Ja as ee,
  La as re,
  N as S,
  Pa as A,
  R as T,
  Ra as te,
  S as M,
  Va as ae,
  Wa as g,
  Xa as F,
  c as b,
  da as L,
  h as R,
  ha as x,
  ia as y,
  ka as Q,
  la as H,
  m as Y,
  ma as W,
  n as _,
  p as z,
  pa as Z,
  r as O,
  sa as q,
  ta as G,
  u as V,
  v as e,
  va as d,
  w as u,
  wa as X,
} from "./chunk-J3542FLR.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-CFBX7QZ7.mjs";
import "./chunk-RIUMFBNJ.mjs";
A.loadFonts(["GF;OffBit Trial-700"]);
var le = [{ explicitInter: !0, fonts: [] }],
  me = [
    '.framer-7AhDB .framer-styles-preset-ady2v4:not(.rich-text-wrapper), .framer-7AhDB .framer-styles-preset-ady2v4.rich-text-wrapper h1 { --framer-font-family: "OffBit Trial", "OffBit Trial Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 99px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: 3.8px; --framer-line-height: 99px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  fe = "framer-7AhDB";
A.loadFonts(["CUSTOM;OffBit Bold"]);
var de = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "OffBit Bold",
          source: "custom",
          url: "https://framerusercontent.com/assets/byNsyKaHfMRCMezpf2TDAuhdARs.woff2",
        },
      ],
    },
  ],
  ce = [
    `.framer-QiD02 .framer-styles-preset-1cuwkna:not(.rich-text-wrapper), .framer-QiD02 .framer-styles-preset-1cuwkna.rich-text-wrapper h1 { --framer-font-family: "OffBit Bold", "OffBit Bold Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'frac' on, 'sups' on; --framer-font-size: 59px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-cd557a17-8032-4786-9ae5-abc593b0239d, #ececec); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
  ],
  pe = "framer-QiD02";
var Ue = g(I),
  ke = g(N),
  Le = g(E),
  Fe = g(B),
  Be = {
    BxpkA9Jek: "(min-width: 810px) and (max-width: 1439px)",
    kY7lBUABd: "(min-width: 1440px)",
    wEc28aYaA: "(max-width: 809px)",
  };
var he = "framer-C4UAL",
  Ie = {
    BxpkA9Jek: "framer-v-1y1a0az",
    kY7lBUABd: "framer-v-1wclp7k",
    wEc28aYaA: "framer-v-jf6o1h",
  },
  Ne = {
    filter: "blur(4px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10,
  },
  Ee = { damping: 13, delay: 0.05, mass: 1, stiffness: 407, type: "spring" },
  Pe = {
    effect: Ne,
    tokenization: "word",
    transition: Ee,
    trigger: "onMount",
    type: "appear",
  },
  je = (r, a = {}, s) => {
    if (typeof r != "string") return "";
    let n = new Date(r);
    if (isNaN(n.getTime())) return "";
    let i = a.display ? a.display : "date",
      l = {
        dateStyle: i !== "time" ? a.dateStyle : void 0,
        timeStyle: i === "date" ? void 0 : "short",
        timeZone: "UTC",
      },
      f = "en-US",
      U = a.locale || s || f;
    try {
      return n.toLocaleString(U, l);
    } catch {
      return n.toLocaleString(f, l);
    }
  },
  De = (r) =>
    typeof r == "object" && r !== null && typeof r.src == "string"
      ? r
      : typeof r == "string"
      ? { src: r }
      : void 0,
  Re = (r, a, s) => {
    var n;
    if (r.currentPage >= r.totalPages)
      return (n = a.disabled) !== null && n !== void 0 ? n : s;
    var i;
    return r.isLoading && (i = a.loading) !== null && i !== void 0 ? i : s;
  },
  Ye = ({ query: r, pageSize: a, children: s }) => {
    let {
        paginatedQuery: n,
        paginationInfo: i,
        loadMore: l,
      } = re(r, a, "EdjOJdwCJ"),
      f = ee(n);
    return s(f, i, l);
  },
  P = C(),
  _e = { Desktop: "kY7lBUABd", Phone: "wEc28aYaA", Tablet: "BxpkA9Jek" },
  ze = ({ height: r, id: a, width: s, ...n }) => {
    var i, l;
    return {
      ...n,
      variant:
        (l = (i = _e[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && l !== void 0
          ? l
          : "kY7lBUABd",
    };
  },
  Oe = R(function (r, a) {
    let { activeLocale: s, setLocale: n } = T(),
      {
        style: i,
        className: l,
        layoutId: f,
        variant: U,
        L1iBMdfsREdjOJdwCJ: Je,
        CYMUg9poiEdjOJdwCJ: Se,
        ZjxAfpTG8EdjOJdwCJ: Te,
        fjyD0O7DyEdjOJdwCJ: Me,
        idEdjOJdwCJ: Qe,
        ...ue
      } = ze(r);
    Y(() => {
      let t = C(void 0, s);
      if (t.robots) {
        let o = document.querySelector('meta[name="robots"]');
        o
          ? o.setAttribute("content", t.robots)
          : ((o = document.createElement("meta")),
            o.setAttribute("name", "robots"),
            o.setAttribute("content", t.robots),
            document.head.appendChild(o));
      }
    }, [void 0, s]),
      z(() => {
        let t = C(void 0, s);
        if (((document.title = t.title || ""), t.viewport)) {
          var o;
          (o = document.querySelector('meta[name="viewport"]')) === null ||
            o === void 0 ||
            o.setAttribute("content", t.viewport);
        }
        let h = t.bodyClassName;
        if (h) {
          let m = document.body;
          m.classList.forEach(
            (w) => w.startsWith("framer-body-") && m.classList.remove(w)
          ),
            m.classList.add(`${t.bodyClassName}-framer-C4UAL`);
        }
        return () => {
          h &&
            document.body.classList.remove(`${t.bodyClassName}-framer-C4UAL`);
        };
      }, [void 0, s]);
    let [c, He] = $(U, Be, !1),
      We = void 0,
      { activeVariantCallback: xe, delay: Ze } = K(void 0),
      ye = ({ overlay: t, loadMore: o }) =>
        xe(async (...h) => {
          o();
        }),
      ge = O(null),
      qe = S(),
      we = M(),
      be = _(),
      j = [fe, pe];
    return (
      H({}),
      e(W.Provider, {
        value: { primaryVariantId: "kY7lBUABd", variantClassNames: Ie },
        children: u(k, {
          id: f ?? be,
          children: [
            u(J.div, {
              ...ue,
              className: L(he, ...j, "framer-1wclp7k", l),
              ref: a ?? ge,
              style: { ...i },
              children: [
                e(X, {
                  links: [
                    {
                      href: { webPageId: "Amk9wYzB8" },
                      implicitPathVariables: void 0,
                    },
                    {
                      href: { webPageId: "Amk9wYzB8" },
                      implicitPathVariables: void 0,
                    },
                    {
                      href: { webPageId: "Amk9wYzB8" },
                      implicitPathVariables: void 0,
                    },
                  ],
                  children: (t) =>
                    e(x, {
                      height: 60,
                      width: "100vw",
                      y: 0,
                      children: e(y, {
                        className: "framer-5mra7y-container",
                        children: e(d, {
                          breakpoint: c,
                          overrides: {
                            BxpkA9Jek: {
                              l1eqwcE2J: t[1],
                              variant: "zJ9Webhjb",
                            },
                            wEc28aYaA: {
                              l1eqwcE2J: t[2],
                              style: { height: "100%", width: "100%" },
                              variant: "zJ9Webhjb",
                            },
                          },
                          children: e(I, {
                            height: "100%",
                            id: "pwCbJs5i5",
                            iZi8qKt32: "WHITEPAPER222",
                            l1eqwcE2J: t[0],
                            LaH9x4U3E: "https://cli.swarmnetwork.ai/",
                            layoutId: "pwCbJs5i5",
                            r1EhaTm5O: "FOLLOW ON X",
                            R8xsnH7Ho: "PUBLICATIONS",
                            style: {
                              height: "100%",
                              maxWidth: "100%",
                              width: "100%",
                            },
                            tQF8kjABj: "JOIN COMMUNITY",
                            V6qgaZbOb: "https://t.me/swarmnetwork_aiSwarmNews",
                            variant: "zYKZsxXaq",
                            width: "100%",
                            yI3s_0yAI: "https://x.com/swarmnetwork_ai",
                          }),
                        }),
                      }),
                    }),
                }),
                u("div", {
                  className: "framer-bhr4f0",
                  "data-framer-name": "Content",
                  name: "Content",
                  children: [
                    e(d, {
                      breakpoint: c,
                      overrides: {
                        BxpkA9Jek: {
                          children: e(b, {
                            children: e("h1", {
                              className: "framer-styles-preset-1cuwkna",
                              "data-styles-preset": "WcQGxGZV4",
                              style: { "--framer-text-alignment": "center" },
                              children: "Publications",
                            }),
                          }),
                        },
                        wEc28aYaA: {
                          children: e(b, {
                            children: e("h1", {
                              className: "framer-styles-preset-1cuwkna",
                              "data-styles-preset": "WcQGxGZV4",
                              style: { "--framer-text-alignment": "center" },
                              children: "Publications",
                            }),
                          }),
                        },
                      },
                      children: e(te, {
                        __fromCanvasComponent: !0,
                        children: e(b, {
                          children: e("h1", {
                            className: "framer-styles-preset-ady2v4",
                            "data-styles-preset": "jH0UqTKDD",
                            style: { "--framer-text-alignment": "center" },
                            children: "Publications",
                          }),
                        }),
                        className: "framer-1yi5sr1",
                        effect: Pe,
                        fonts: ["Inter"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e("div", {
                      className: "framer-8bt7d3",
                      "data-hide-scrollbars": !0,
                      children: e(Z, {
                        children: e(Ye, {
                          pageSize: 4,
                          query: {
                            from: {
                              alias: "EdjOJdwCJ",
                              data: ne,
                              type: "Collection",
                            },
                            limit: { type: "LiteralValue", value: 10 },
                            select: [
                              {
                                collection: "EdjOJdwCJ",
                                name: "L1iBMdfsR",
                                type: "Identifier",
                              },
                              {
                                collection: "EdjOJdwCJ",
                                name: "CYMUg9poi",
                                type: "Identifier",
                              },
                              {
                                collection: "EdjOJdwCJ",
                                name: "ZjxAfpTG8",
                                type: "Identifier",
                              },
                              {
                                collection: "EdjOJdwCJ",
                                name: "fjyD0O7Dy",
                                type: "Identifier",
                              },
                              {
                                collection: "EdjOJdwCJ",
                                name: "id",
                                type: "Identifier",
                              },
                            ],
                          },
                          children: (t, o, h) =>
                            u(V, {
                              children: [
                                t.map(
                                  (
                                    {
                                      CYMUg9poi: m,
                                      fjyD0O7Dy: w,
                                      id: D,
                                      L1iBMdfsR: p,
                                      ZjxAfpTG8: Ae,
                                    },
                                    Ge
                                  ) => (
                                    p ?? (p = ""),
                                    m ?? (m = ""),
                                    e(
                                      k,
                                      {
                                        id: `EdjOJdwCJ-${D}`,
                                        children: e(q.Provider, {
                                          value: { L1iBMdfsR: p },
                                          children: e(G, {
                                            href: {
                                              pathVariables: { L1iBMdfsR: p },
                                              webPageId: "joaQDxtRc",
                                            },
                                            nodeId: "J9PCawtPn",
                                            children: e("a", {
                                              className:
                                                "framer-85mdaz framer-14jmy7g",
                                              children: e(d, {
                                                breakpoint: c,
                                                overrides: {
                                                  BxpkA9Jek: {
                                                    width: void 0,
                                                    y: 204.9,
                                                  },
                                                  wEc28aYaA: {
                                                    width: void 0,
                                                    y: 204.9,
                                                  },
                                                },
                                                children: e(x, {
                                                  height: 380,
                                                  width: "600px",
                                                  y: 239,
                                                  children: e(y, {
                                                    className:
                                                      "framer-1x47g0v-container",
                                                    children: e(d, {
                                                      breakpoint: c,
                                                      overrides: {
                                                        BxpkA9Jek: {
                                                          style: {
                                                            height: "100%",
                                                          },
                                                          variant: "rIpLOO6nx",
                                                        },
                                                        wEc28aYaA: {
                                                          style: {
                                                            height: "100%",
                                                          },
                                                          variant: "rIpLOO6nx",
                                                        },
                                                      },
                                                      children: e(N, {
                                                        E6gkodI6E: je(
                                                          Ae,
                                                          {
                                                            dateStyle: "medium",
                                                            locale: "",
                                                          },
                                                          we
                                                        ),
                                                        et8Rj5Joa: "Read More",
                                                        height: "100%",
                                                        id: "LT1qF335P",
                                                        layoutId: "LT1qF335P",
                                                        style: {
                                                          height: "100%",
                                                          width: "100%",
                                                        },
                                                        UF0jT3iD0: "Blog Post",
                                                        UJMMl2sFZ: De(w),
                                                        variant: "K5BShkXQM",
                                                        width: "100%",
                                                        yARvWjsuA: m,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      D
                                    )
                                  )
                                ),
                                e(d, {
                                  breakpoint: c,
                                  overrides: {
                                    BxpkA9Jek: { y: 1024.9 },
                                    wEc28aYaA: { width: void 0, y: 624.9 },
                                  },
                                  children: e(x, {
                                    height: 40,
                                    width:
                                      "max((min(100vw, 1200px) - 20px) / 2, 50px)",
                                    y: 1059,
                                    children: e(y, {
                                      className: "framer-sj2v28-container",
                                      children: e(E, {
                                        height: "100%",
                                        id: "zCtjHPD3b",
                                        layoutId: "zCtjHPD3b",
                                        variant: Re(
                                          o,
                                          {
                                            disabled: "g6c6kRzkr",
                                            loading: "dY_CjyBPl",
                                          },
                                          "Byr84vzuh"
                                        ),
                                        width: "100%",
                                        Wld3NDzSj: ye({ loadMore: h }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                        }),
                      }),
                    }),
                  ],
                }),
                e(d, {
                  breakpoint: c,
                  overrides: {
                    BxpkA9Jek: { width: "100vw", y: 1016.9 },
                    wEc28aYaA: { width: "100vw", y: 616.9 },
                  },
                  children: e(x, {
                    height: 400,
                    width: "1440px",
                    y: 1051,
                    children: e(y, {
                      className: "framer-7hgwbd-container",
                      children: e(d, {
                        breakpoint: c,
                        overrides: {
                          BxpkA9Jek: { variant: "R6RhuT669" },
                          wEc28aYaA: { variant: "kYHiPvVEI" },
                        },
                        children: e(B, {
                          height: "100%",
                          id: "OdQN_YkL5",
                          layoutId: "OdQN_YkL5",
                          style: { width: "100%" },
                          variant: "Yvg3RqtYF",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: L(he, ...j), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ve = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${P.bodyClassName}-framer-C4UAL { background: rgb(0, 0, 0); }`,
    ".framer-C4UAL.framer-14jmy7g, .framer-C4UAL .framer-14jmy7g { display: block; }",
    ".framer-C4UAL.framer-1wclp7k { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }",
    ".framer-C4UAL .framer-5mra7y-container { bottom: 3px; flex: none; height: 60px; max-width: 100%; position: sticky; width: 100%; will-change: transform; z-index: 5; }",
    ".framer-C4UAL .framer-bhr4f0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-C4UAL .framer-1yi5sr1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-C4UAL .framer-8bt7d3 { display: grid; flex: none; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: auto; padding: 0px; position: relative; width: 100%; }",
    ".framer-C4UAL .framer-85mdaz { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }",
    ".framer-C4UAL .framer-1x47g0v-container { flex: none; height: 380px; position: relative; width: 600px; }",
    ".framer-C4UAL .framer-sj2v28-container { bottom: -80px; flex: none; height: auto; position: absolute; right: 0px; width: auto; z-index: 1; }",
    ".framer-C4UAL .framer-7hgwbd-container { flex: none; height: auto; position: relative; width: 1440px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-C4UAL.framer-1wclp7k, .framer-C4UAL .framer-bhr4f0, .framer-C4UAL .framer-85mdaz { gap: 0px; } .framer-C4UAL.framer-1wclp7k > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-C4UAL.framer-1wclp7k > :first-child, .framer-C4UAL .framer-bhr4f0 > :first-child { margin-top: 0px; } .framer-C4UAL.framer-1wclp7k > :last-child, .framer-C4UAL .framer-bhr4f0 > :last-child { margin-bottom: 0px; } .framer-C4UAL .framer-bhr4f0 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-C4UAL .framer-85mdaz > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-C4UAL .framer-85mdaz > :first-child { margin-left: 0px; } .framer-C4UAL .framer-85mdaz > :last-child { margin-right: 0px; } }",
    ...me,
    ...ce,
    '.framer-C4UAL[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-C4UAL [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '.framer-C4UAL[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-C4UAL [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
    `@media (min-width: 810px) and (max-width: 1439px) { .${P.bodyClassName}-framer-C4UAL { background: rgb(0, 0, 0); } .framer-C4UAL.framer-1wclp7k { width: 810px; } .framer-C4UAL .framer-1x47g0v-container { width: auto; } .framer-C4UAL .framer-sj2v28-container { right: 40px; } .framer-C4UAL .framer-7hgwbd-container { width: 100%; }}`,
    `@media (max-width: 809px) { .${P.bodyClassName}-framer-C4UAL { background: rgb(0, 0, 0); } .framer-C4UAL.framer-1wclp7k { width: 390px; } .framer-C4UAL .framer-5mra7y-container { max-width: unset; } .framer-C4UAL .framer-1yi5sr1 { --framer-text-wrap-override: balance; } .framer-C4UAL .framer-8bt7d3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; } .framer-C4UAL .framer-85mdaz { align-self: unset; width: min-content; } .framer-C4UAL .framer-1x47g0v-container { width: auto; } .framer-C4UAL .framer-sj2v28-container { right: 145px; } .framer-C4UAL .framer-7hgwbd-container { width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-C4UAL .framer-8bt7d3 { gap: 0px; } .framer-C4UAL .framer-8bt7d3 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-C4UAL .framer-8bt7d3 > :first-child { margin-top: 0px; } .framer-C4UAL .framer-8bt7d3 > :last-child { margin-bottom: 0px; } }}`,
  ],
  v = Q(Oe, Ve, "framer-C4UAL"),
  dr = v;
v.displayName = "Page";
v.defaultProps = { height: 1451.5, width: 1440 };
ae(
  v,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Ue,
    ...ke,
    ...Le,
    ...Fe,
    ...F(le),
    ...F(de),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var cr = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerAmk9wYzB8",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerIntrinsicWidth: "1440",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"BxpkA9Jek":{"layout":["fixed","auto"]},"wEc28aYaA":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "1451.5",
        framerResponsiveScreen: "",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { cr as __FramerMetadata__, dr as default };
//# sourceMappingURL=1ChIH5tScxXmfGKnyu4l_KmKbC_fTD0_7WO0AkQeQxs.YP6W5YFB.mjs.map
