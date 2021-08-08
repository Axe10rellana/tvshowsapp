(this.webpackJsonptvshowsapp = this.webpackJsonptvshowsapp || []).push([
  [0],
  {
    35: function (e, t, a) {},
    42: function (e, t, a) {},
    62: function (e, t, a) {
      "use strict";
      a.r(t);
      var c = a(1),
        s = a(29),
        n = a.n(s),
        i = (a(35), a(9)),
        r = a(2),
        l = a(0),
        o = function () {
          return Object(l.jsx)("div", {
            className: "navbar",
            children: Object(l.jsx)("div", {
              className: "container",
              children: Object(l.jsxs)("nav", {
                className: "navbar__nav",
                children: [
                  Object(l.jsx)("h3", {
                    className: "nav__brand",
                    children: Object(l.jsxs)(i.b, {
                      to: "https://Axe10rellana.github.io/tvshowsapp/tvshowsapp",
                      children: [
                        Object(l.jsx)("i", { className: "fas fa-video" }),
                        " Shows de TV",
                      ],
                    }),
                  }),
                  Object(l.jsxs)("ul", {
                    className: "nav__links",
                    children: [
                      Object(l.jsx)("li", {
                        className: "links__link",
                        children: Object(l.jsx)(i.b, {
                          to: "https://Axe10rellana.github.io/tvshowsapp/tvshowsapp",
                          children: "Inicio",
                        }),
                      }),
                      Object(l.jsx)("li", {
                        className: "links__link",
                        children: Object(l.jsx)(i.b, {
                          to: "https://Axe10rellana.github.io/tvshowsapp/tvshowsapp/acerca",
                          children: "Acerca",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        j = Object(c.createContext)(),
        d = a(12),
        h = function (e) {
          var t = e.type,
            a = e.message;
          return Object(l.jsxs)("div", {
            className: "alert alert-".concat(t),
            children: [
              Object(l.jsx)("i", { className: "fas fa-info-circle" }),
              " ",
              a,
            ],
          });
        },
        u = Object(c.createContext)(),
        b = function () {
          var e = Object(c.useState)(""),
            t = Object(d.a)(e, 2),
            a = t[0],
            s = t[1],
            n = Object(c.useContext)(j).searchShows,
            i = Object(c.useContext)(u),
            r = i.alert,
            o = i.setAlert;
          return Object(l.jsxs)("div", {
            className: "searchbar",
            children: [
              r ? Object(l.jsx)(h, { message: r.message, type: r.type }) : null,
              Object(l.jsxs)("form", {
                className: "searchbar__form",
                children: [
                  Object(l.jsx)("input", {
                    type: "text",
                    placeholder: "Buscar shows de TV",
                    autoComplete: "off",
                    value: a,
                    onChange: function (e) {
                      return s(e.target.value);
                    },
                  }),
                  Object(l.jsx)("button", {
                    className: "btn btn-block",
                    onClick: function (e) {
                      e.preventDefault(),
                        "" === a
                          ? o("Por favor escribe algo", "danger")
                          : "." === a ||
                            "," === a ||
                            ";" === a ||
                            "_" === a ||
                            "{" === a ||
                            "[" === a ||
                            "]" === a ||
                            "}" === a ||
                            "`" === a ||
                            "\xb4" === a ||
                            "\xa8" === a ||
                            "+" === a ||
                            "*" === a ||
                            "'" === a ||
                            "?" === a ||
                            "\\" === a ||
                            "\xbf" === a ||
                            "\xa1" === a ||
                            ")" === a ||
                            "(" === a ||
                            "&" === a ||
                            "$" === a ||
                            "#" === a ||
                            '"' === a ||
                            "!" === a ||
                            "\xb0" === a ||
                            "\xac" === a ||
                            "<" === a ||
                            ">" === a ||
                            " " === a
                          ? (o("No hay datos", "warning"), s(""))
                          : (n(a), s(""));
                    },
                    children: "Buscar",
                  }),
                ],
              }),
            ],
          });
        },
        O = function (e) {
          var t = e.image,
            a = e.name,
            c = e.rating,
            s = e.id;
          return Object(l.jsxs)(i.b, {
            to: "https://Axe10rellana.github.io/tvshowsapp/tvshowsapp/singleshow/".concat(
              s
            ),
            className: "listitem",
            children: [
              Object(l.jsx)("img", { src: t, alt: a }),
              Object(l.jsxs)("div", {
                className: "listitem__info",
                children: [
                  Object(l.jsx)("h4", { className: "info__name", children: a }),
                  Object(l.jsx)("h4", {
                    className: "info__rating",
                    children: c,
                  }),
                ],
              }),
            ],
          });
        },
        p =
          (a(42), a.p + "tvshowsapp/tvshowsapp/static/media/oval.6fe072e3.svg"),
        m = function () {
          return Object(l.jsx)("div", {
            children: Object(l.jsx)("img", {
              className: "loader",
              src: p,
              alt: "Cargando...",
            }),
          });
        },
        x = function () {
          var e = Object(c.useContext)(j),
            t = e.defaultShows,
            a = e.loading,
            s = e.shows;
          return (
            Object(c.useEffect)(function () {
              t();
            }, []),
            Object(l.jsxs)("div", {
              className: "homepage",
              children: [
                Object(l.jsx)(b, {}),
                a
                  ? Object(l.jsx)(m, {})
                  : Object(l.jsx)("div", {
                      className: "homepage__list",
                      children: s.map(function (e) {
                        return Object(l.jsx)(
                          O,
                          {
                            id: e.show.id,
                            image: e.show.image
                              ? e.show.image.medium
                              : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
                            name: e.show.name,
                            rating: e.show.rating.average
                              ? e.show.rating.average
                              : "Sin rating",
                          },
                          e.show.id
                        );
                      }),
                    }),
              ],
            })
          );
        },
        g = function () {
          return Object(l.jsxs)("div", {
            className: "about",
            children: [
              Object(l.jsx)("h3", {
                className: "about__title",
                children: "Pagina de Acerca",
              }),
              Object(l.jsxs)("div", {
                className: "about__info",
                children: [
                  Object(l.jsx)("p", {
                    children: "Aplicaci\xf3n Buscador de shows de TV (v0.1)",
                  }),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsx)("p", {
                        children:
                          "Cosas aprendidas con la creacion de la Aplicaci\xf3n",
                      }),
                      Object(l.jsxs)("ul", {
                        children: [
                          Object(l.jsx)("li", {
                            children: "React (create-react-app)",
                          }),
                          Object(l.jsx)("li", {
                            children: "HTML Y CSS basico",
                          }),
                          Object(l.jsx)("li", {
                            children: "Peticiones con Axios y AJAX",
                          }),
                          Object(l.jsxs)("li", {
                            children: [
                              "Uso de la API de TVMAZE:",
                              " ",
                              Object(l.jsx)("a", {
                                href: "https://www.tvmaze.com/api",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "https://www.tvmaze.com/api",
                              }),
                            ],
                          }),
                          Object(l.jsx)("li", { children: "React router" }),
                          Object(l.jsx)("li", {
                            children: "React Context API",
                          }),
                          Object(l.jsx)("li", {
                            children:
                              "Despliegue de la Aplicaci\xf3n a GitHub Pages",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        f = function (e) {
          var t = e.match,
            a = Object(c.useContext)(j),
            s = a.getSimgleShow,
            n = a.singleShow,
            i = a.loading;
          Object(c.useEffect)(function () {
            s(t.params.id);
          }, []);
          var r;
          return Object(l.jsx)("div", {
            className: "singlepage",
            children: i
              ? Object(l.jsx)(m, {})
              : Object(l.jsxs)("div", {
                  className: "singleshow",
                  children: [
                    Object(l.jsx)("img", {
                      src: n.image
                        ? n.image.medium
                        : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
                      alt: n.name,
                    }),
                    Object(l.jsxs)("div", {
                      className: "singleshow__info",
                      children: [
                        Object(l.jsx)("h1", { children: n.name }),
                        Object(l.jsx)("strong", { children: "Generos: " }),
                        " ",
                        n.genres &&
                          n.genres.map(function (e) {
                            return Object(l.jsx)(
                              "span",
                              { className: "singleshow__genre", children: e },
                              e
                            );
                          }),
                        Object(l.jsxs)("p", {
                          children: [
                            Object(l.jsx)("strong", { children: "Estado: " }),
                            " ",
                            n.status && n.status,
                          ],
                        }),
                        Object(l.jsxs)("p", {
                          children: [
                            Object(l.jsx)("strong", { children: "Rating: " }),
                            " ",
                            n.average ? n.rating.average : "Sin Rating",
                          ],
                        }),
                        Object(l.jsxs)("p", {
                          children: [
                            Object(l.jsx)("strong", {
                              children: "Sitio Official: ",
                            }),
                            " ",
                            n.officialSite
                              ? Object(l.jsx)("a", {
                                  href: n.officialSite,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: n.officialSite,
                                })
                              : "Sin Sitio Oficial",
                          ],
                        }),
                        Object(l.jsxs)("p", {
                          children: [
                            Object(l.jsx)("strong", {
                              children: "Descripci\xf3n: ",
                            }),
                            " ",
                            n.summary &&
                              ((r = n.summary),
                              null !== r &&
                                "" !== r &&
                                (r = r.toString()).replace(
                                  /(<([^>]+)>)/gi,
                                  ""
                                )),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          });
        },
        v = a.p + "tvshowsapp/tvshowsapp/static/media/error404.4861ae77.svg",
        w = function () {
          return Object(l.jsxs)("div", {
            children: [
              Object(l.jsx)("img", {
                className: "img404",
                src: v,
                alt: "Error404",
              }),
              Object(l.jsxs)("div", {
                className: "wrapper",
                children: [
                  Object(l.jsx)("h1", { children: "P\xe1gina No Encontrada" }),
                  Object(l.jsx)("p", {
                    className: "message404",
                    children:
                      "Esta p\xe1gina est\xe1 perdida en el limbo. Lo sentimos no hemos podido encontrar la p\xe1gina que buscas.",
                  }),
                  Object(l.jsx)("p", {
                    className: "copyRights",
                    children: "\xa9 2021 Axe10rellana",
                  }),
                ],
              }),
            ],
          });
        },
        S = function () {
          return Object(l.jsxs)(i.a, {
            children: [
              Object(l.jsx)(o, {}),
              Object(l.jsx)("div", {
                className: "container",
                children: Object(l.jsxs)(r.c, {
                  children: [
                    Object(l.jsx)(r.a, {
                      exact: !0,
                      path: "https://Axe10rellana.github.io/tvshowsapp/tvshowsapp",
                      component: x,
                    }),
                    Object(l.jsx)(r.a, {
                      exact: !0,
                      path: "https://Axe10rellana.github.io/tvshowsapp/tvshowsapp/acerca",
                      component: g,
                    }),
                    Object(l.jsx)(r.a, {
                      path: "https://Axe10rellana.github.io/tvshowsapp/tvshowsapp/singleshow/:id",
                      component: f,
                    }),
                    Object(l.jsx)(r.a, { path: "*", component: w }),
                  ],
                }),
              }),
            ],
          });
        },
        _ = a(11),
        N = a.n(_),
        y = a(14),
        A = a(15),
        E = a.n(A),
        k = a(8),
        C = "SEARCH_SHOWS",
        R = "SET_LOADING",
        T = "SET_SINGLE_SHOW",
        P = "CLEAR_SINGLE_SHOW",
        L = "SET_ALERT",
        I = "REMOVE_ALERT",
        H = function (e, t) {
          switch (t.type) {
            case R:
              return Object(k.a)(Object(k.a)({}, e), {}, { loading: !0 });
            case C:
              return Object(k.a)(
                Object(k.a)({}, e),
                {},
                { shows: t.payload, loading: !1 }
              );
            case T:
              return Object(k.a)(
                Object(k.a)({}, e),
                {},
                { singleShow: t.payload, loading: !1 }
              );
            case P:
              return Object(k.a)(Object(k.a)({}, e), {}, { singleShow: {} });
            default:
              return e;
          }
        },
        z = function (e) {
          var t = Object(c.useReducer)(H, {
              shows: [],
              singleShow: {},
              loading: !1,
            }),
            a = Object(d.a)(t, 2),
            s = a[0],
            n = a[1],
            i = (function () {
              var e = Object(y.a)(
                N.a.mark(function e() {
                  var t, a;
                  return N.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n({ type: R }),
                            (e.next = 3),
                            E.a.get(
                              "https://api.tvmaze.com/search/shows?q=robots"
                            )
                          );
                        case 3:
                          (t = e.sent),
                            (a = t.data),
                            n({ type: C, payload: a });
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            r = (function () {
              var e = Object(y.a)(
                N.a.mark(function e(t) {
                  var a, c;
                  return N.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n({ type: R }),
                            (e.next = 3),
                            E.a.get(
                              "https://api.tvmaze.com/search/shows?q=".concat(t)
                            )
                          );
                        case 3:
                          (a = e.sent),
                            (c = a.data),
                            n({ type: C, payload: c });
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            o = (function () {
              var e = Object(y.a)(
                N.a.mark(function e(t) {
                  var a, c;
                  return N.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n({ type: R }),
                            (e.next = 3),
                            E.a.get("https://api.tvmaze.com/shows/".concat(t))
                          );
                        case 3:
                          (a = e.sent),
                            (c = a.data),
                            n({ type: T, payload: c });
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsx)(j.Provider, {
            value: {
              shows: s.shows,
              singleShow: s.singleShow,
              loading: s.loading,
              searchShows: r,
              getSimgleShow: o,
              clearSingleShow: function () {
                n({ type: P });
              },
              defaultShows: i,
            },
            children: e.children,
          });
        },
        G = function (e, t) {
          switch (t.type) {
            case L:
              return t.payload;
            case I:
              return null;
            default:
              return e;
          }
        },
        V = function (e) {
          var t = Object(c.useReducer)(G, null),
            a = Object(d.a)(t, 2),
            s = a[0],
            n = a[1];
          return Object(l.jsx)(u.Provider, {
            value: {
              alert: s,
              setAlert: function (e, t) {
                n({ type: L, payload: { message: e, type: t } }),
                  setTimeout(function () {
                    n({ type: I });
                  }, 3e3);
              },
            },
            children: e.children,
          });
        };
      n.a.render(
        Object(l.jsx)(z, {
          children: Object(l.jsx)(V, { children: Object(l.jsx)(S, {}) }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.756dcf4a.chunk.js.map
