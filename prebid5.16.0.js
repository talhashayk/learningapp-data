/* prebid.js v5.16.0
Updated : 2021-09-29*/
!(function (e) {
  var t = window.pbjsChunk;
  window.pbjsChunk = function (n, o, a) {
    for (var c, u, s, d = 0, f = []; d < n.length; d++)
      (u = n[d]), r[u] && f.push(r[u][0]), (r[u] = 0);
    for (c in o) Object.prototype.hasOwnProperty.call(o, c) && (e[c] = o[c]);
    for (t && t(n, o, a); f.length; ) f.shift()();
    if (a) for (d = 0; d < a.length; d++) s = i((i.s = a[d]));
    return s;
  };
  var n = {},
    r = { 362: 0 };
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function (e, t, n) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    (i.oe = function (e) {
      throw (console.error(e), e);
    }),
    i((i.s = 914));
})({
  0: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n.d(t, "internal", function () {
        return w;
      }),
      (t.getPrebidInternal = function () {
        return C;
      }),
      n.d(t, "bind", function () {
        return U;
      }),
      (t.getUniqueIdentifierStr = x),
      (t.generateUUID = function e(t) {
        return t
          ? (
              t ^
              ((window && window.crypto && window.crypto.getRandomValues
                ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                : 16 * Math.random()) >>
                (t / 4))
            ).toString(16)
          : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
      }),
      (t.getBidIdParameter = function (e, t) {
        if (t && t[e]) return t[e];
        return "";
      }),
      (t.tryAppendQueryString = function (e, t, n) {
        if (n) return e + t + "=" + encodeURIComponent(n) + "&";
        return e;
      }),
      (t.parseQueryStringParameters = function (e) {
        var t = "";
        for (var n in e)
          e.hasOwnProperty(n) &&
            (t += n + "=" + encodeURIComponent(e[n]) + "&");
        return (t = t.replace(/&$/, ""));
      }),
      (t.transformAdServerTargetingObj = function (e) {
        return e && Object.getOwnPropertyNames(e).length > 0
          ? ce(e)
              .map(function (t) {
                return "".concat(t, "=").concat(encodeURIComponent(ue(e, t)));
              })
              .join("&")
          : "";
      }),
      (t.getAdUnitSizes = function (e) {
        if (!e) return;
        var t = [];
        if (
          e.mediaTypes &&
          e.mediaTypes.banner &&
          Array.isArray(e.mediaTypes.banner.sizes)
        ) {
          var n = e.mediaTypes.banner.sizes;
          Array.isArray(n[0]) ? (t = n) : t.push(n);
        } else
          Array.isArray(e.sizes) &&
            (Array.isArray(e.sizes[0]) ? (t = e.sizes) : t.push(e.sizes));
        return t;
      }),
      (t.parseSizesInput = function (e) {
        var t = [];
        if ("string" == typeof e) {
          var n = e.split(","),
            r = /^(\d)+x(\d)+$/i;
          if (n) for (var i in n) Z(n, i) && n[i].match(r) && t.push(n[i]);
        } else if ("object" === h(e)) {
          var o = e.length;
          if (o > 0)
            if (2 === o && "number" == typeof e[0] && "number" == typeof e[1])
              t.push(D(e));
            else for (var a = 0; a < o; a++) t.push(D(e[a]));
        }
        return t;
      }),
      (t.parseGPTSingleSizeArray = D),
      (t.parseGPTSingleSizeArrayToRtbSize = function (e) {
        if (k(e)) return { w: e[0], h: e[1] };
      }),
      (t.getWindowTop = N),
      (t.getWindowSelf = P),
      (t.getWindowLocation = M),
      (t.logMessage = q),
      (t.logInfo = G),
      (t.logWarn = L),
      (t.logError = W),
      (t.hasConsoleLogger = function () {
        return S;
      }),
      (t.debugTurnedOn = z),
      (t.createInvisibleIframe = function () {
        var e = document.createElement("iframe");
        return (
          (e.id = x()),
          (e.height = 0),
          (e.width = 0),
          (e.border = "0px"),
          (e.hspace = "0"),
          (e.vspace = "0"),
          (e.marginWidth = "0"),
          (e.marginHeight = "0"),
          (e.style.border = "0"),
          (e.scrolling = "no"),
          (e.frameBorder = "0"),
          (e.src = "about:blank"),
          (e.style.display = "none"),
          e
        );
      }),
      (t.getParameterByName = function (e) {
        return me(M().search)[e] || "";
      }),
      (t.isA = V),
      (t.isFn = H),
      (t.isStr = K),
      (t.isArray = J),
      (t.isNumber = Y),
      (t.isPlainObject = Q),
      (t.isBoolean = function (e) {
        return V(e, "Boolean");
      }),
      (t.isEmpty = $),
      (t.isEmptyStr = function (e) {
        return K(e) && (!e || 0 === e.length);
      }),
      (t._each = X),
      (t.contains = function (e, t) {
        if ($(e)) return !1;
        if (H(e.indexOf)) return -1 !== e.indexOf(t);
        var n = e.length;
        for (; n--; ) if (e[n] === t) return !0;
        return !1;
      }),
      (t._map = function (e, t) {
        if ($(e)) return [];
        if (H(e.map)) return e.map(t);
        var n = [];
        return (
          X(e, function (r, i) {
            n.push(t(r, i, e));
          }),
          n
        );
      }),
      (t.hasOwn = Z),
      (t.insertElement = ee),
      (t.triggerPixel = te),
      (t.callBurl = function (e) {
        var t = e.source,
          n = e.burl;
        t === m.S2S.SRC && n && w.triggerPixel(n);
      }),
      (t.insertHtmlIntoIframe = function (e) {
        if (!e) return;
        var t = document.createElement("iframe");
        (t.id = x()),
          (t.width = 0),
          (t.height = 0),
          (t.hspace = "0"),
          (t.vspace = "0"),
          (t.marginWidth = "0"),
          (t.marginHeight = "0"),
          (t.style.display = "none"),
          (t.style.height = "0px"),
          (t.style.width = "0px"),
          (t.scrolling = "no"),
          (t.frameBorder = "0"),
          (t.allowtransparency = "true"),
          w.insertElement(t, document, "body"),
          t.contentWindow.document.open(),
          t.contentWindow.document.write(e),
          t.contentWindow.document.close();
      }),
      (t.insertUserSyncIframe = ne),
      (t.createTrackPixelHtml = function (e) {
        if (!e) return "";
        var t = encodeURI(e),
          n =
            '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
        return (n += '<img src="' + t + '"></div>');
      }),
      (t.createTrackPixelIframeHtml = re),
      (t.getValueString = ie),
      (t.uniques = oe),
      (t.flatten = ae),
      (t.getBidRequest = function (e, t) {
        if (!e) return;
        var n;
        return (
          t.some(function (t) {
            var r = c()(t.bids, function (t) {
              return ["bidId", "adId", "bid_id"].some(function (n) {
                return t[n] === e;
              });
            });
            return r && (n = r), r;
          }),
          n
        );
      }),
      (t.getKeys = ce),
      (t.getValue = ue),
      (t.getKeyByValue = function (e, t) {
        for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
      }),
      (t.getBidderCodes = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : pbjs.adUnits;
        return e
          .map(function (e) {
            return e.bids
              .map(function (e) {
                return e.bidder;
              })
              .reduce(ae, []);
          })
          .reduce(ae)
          .filter(oe);
      }),
      (t.isGptPubadsDefined = se),
      (t.isApnGetTagDefined = function () {
        if (window.apntag && H(window.apntag.getTag)) return !0;
      }),
      n.d(t, "getHighestCpm", function () {
        return de;
      }),
      n.d(t, "getOldestHighestCpmBid", function () {
        return fe;
      }),
      n.d(t, "getLatestHighestCpmBid", function () {
        return le;
      }),
      (t.shuffle = function (e) {
        var t = e.length;
        for (; t > 0; ) {
          var n = Math.floor(Math.random() * t);
          t--;
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        return e;
      }),
      (t.adUnitsFilter = function (e, t) {
        return s()(e, t && t.adUnitCode);
      }),
      (t.deepClone = ge),
      (t.inIframe = function () {
        try {
          return w.getWindowSelf() !== w.getWindowTop();
        } catch (e) {
          return !0;
        }
      }),
      (t.isSafariBrowser = function () {
        return /^((?!chrome|android|crios|fxios).)*safari/i.test(
          navigator.userAgent
        );
      }),
      (t.replaceAuctionPrice = function (e, t) {
        if (!e) return;
        return e.replace(/\$\{AUCTION_PRICE\}/g, t);
      }),
      (t.replaceClickThrough = function (e, t) {
        if (!e || !t || "string" != typeof t) return;
        return e.replace(/\${CLICKTHROUGH}/g, t);
      }),
      (t.timestamp = function () {
        return new Date().getTime();
      }),
      (t.getPerformanceNow = function () {
        return (
          (window.performance &&
            window.performance.now &&
            window.performance.now()) ||
          0
        );
      }),
      (t.hasDeviceAccess = function () {
        return !1 !== r.b.getConfig("deviceAccess");
      }),
      (t.checkCookieSupport = be),
      (t.delayExecution = function (e, t) {
        if (t < 1)
          throw new Error(
            "numRequiredCalls must be a positive number. Got ".concat(t)
          );
        var n = 0;
        return function () {
          ++n === t && e.apply(this, arguments);
        };
      }),
      (t.groupBy = function (e, t) {
        return e.reduce(function (e, n) {
          return (e[n[t]] = e[n[t]] || []).push(n), e;
        }, {});
      }),
      (t.getDefinedParams = function (e, t) {
        return t
          .filter(function (t) {
            return e[t];
          })
          .reduce(function (t, n) {
            return y(t, v({}, n, e[n]));
          }, {});
      }),
      (t.isValidMediaTypes = function (e) {
        var t = ["banner", "native", "video"];
        if (
          !Object.keys(e).every(function (e) {
            return s()(t, e);
          })
        )
          return !1;
        if (e.video && e.video.context)
          return s()(["instream", "outstream", "adpod"], e.video.context);
        return !0;
      }),
      (t.getBidderRequest = function (e, t, n) {
        return (
          c()(e, function (e) {
            return (
              e.bids.filter(function (e) {
                return e.bidder === t && e.adUnitCode === n;
              }).length > 0
            );
          }) || { start: null, auctionId: null }
        );
      }),
      (t.getUserConfiguredParams = function (e, t, n) {
        return e
          .filter(function (e) {
            return e.code === t;
          })
          .map(function (e) {
            return e.bids;
          })
          .reduce(ae, [])
          .filter(function (e) {
            return e.bidder === n;
          })
          .map(function (e) {
            return e.params || {};
          });
      }),
      (t.getOrigin = function () {
        return window.location.origin
          ? window.location.origin
          : window.location.protocol +
              "//" +
              window.location.hostname +
              (window.location.port ? ":" + window.location.port : "");
      }),
      (t.getDNT = function () {
        return (
          "1" === navigator.doNotTrack ||
          "1" === window.doNotTrack ||
          "1" === navigator.msDoNotTrack ||
          "yes" === navigator.doNotTrack
        );
      }),
      (t.isAdUnitCodeMatchingSlot = function (e) {
        return function (t) {
          return ve(e, t);
        };
      }),
      (t.isSlotMatchingAdUnitCode = ye),
      (t.getGptSlotInfoForAdUnitCode = function (e) {
        var t;
        se() && (t = c()(window.googletag.pubads().getSlots(), ye(e)));
        if (t)
          return { gptSlot: t.getAdUnitPath(), divId: t.getSlotElementId() };
        return {};
      }),
      (t.unsupportedBidderMessage = function (e, t) {
        var n = Object.keys(e.mediaTypes || { banner: "banner" }).join(", ");
        return "\n    "
          .concat(e.code, " is a ")
          .concat(n, " ad unit\n    containing bidders that don't support ")
          .concat(n, ": ")
          .concat(t, ".\n    This bidder won't fetch demand.\n  ");
      }),
      (t.isInteger = he),
      (t.convertCamelToUnderscore = function (e) {
        return e
          .replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
            return "_" + t.toLowerCase();
          })
          .replace(/^_/, "");
      }),
      (t.cleanObj = function (e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }),
      (t.pick = function (e, t) {
        if ("object" !== h(e)) return {};
        return t.reduce(function (n, r, i) {
          if ("function" == typeof r) return n;
          var o = r,
            a = r.match(/^(.+?)\sas\s(.+?)$/i);
          a && ((r = a[1]), (o = a[2]));
          var c = e[r];
          return (
            "function" == typeof t[i + 1] && (c = t[i + 1](c, n)),
            void 0 !== c && (n[o] = c),
            n
          );
        }, {});
      }),
      (t.transformBidderParamKeywords = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "keywords",
          n = [];
        return (
          X(e, function (e, r) {
            if (J(e)) {
              var i = [];
              X(e, function (e) {
                ((e = ie(t + "." + r, e)) || "" === e) && i.push(e);
              }),
                (e = i);
            } else {
              if (!K((e = ie(t + "." + r, e)))) return;
              e = [e];
            }
            n.push({ key: r, value: e });
          }),
          n
        );
      }),
      (t.convertTypes = function (e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            var r, i;
            t[n] &&
              (H(e[n])
                ? (t[n] = e[n](t[n]))
                : (t[n] =
                    ((r = e[n]),
                    (i = t[n]),
                    "string" === r
                      ? i && i.toString()
                      : "number" === r
                      ? Number(i)
                      : i)),
              isNaN(t[n]) && delete t.key);
          }),
          t
        );
      }),
      (t.isArrayOfNums = function (e, t) {
        return (
          J(e) &&
          (!t || e.length === t) &&
          e.every(function (e) {
            return he(e);
          })
        );
      }),
      (t.fill = function (e, t) {
        for (var n = [], r = 0; r < t; r++) {
          var i = Q(e) ? ge(e) : e;
          n.push(i);
        }
        return n;
      }),
      (t.chunk = function (e, t) {
        for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
          var i = r * t,
            o = i + t;
          n.push(e.slice(i, o));
        }
        return n;
      }),
      (t.getMinValueFromArray = function (e) {
        return Math.min.apply(Math, p(e));
      }),
      (t.getMaxValueFromArray = function (e) {
        return Math.max.apply(Math, p(e));
      }),
      (t.compareOn = function (e) {
        return function (t, n) {
          return t[e] < n[e] ? 1 : t[e] > n[e] ? -1 : 0;
        };
      }),
      (t.parseQS = me),
      (t.formatQS = Oe),
      (t.parseUrl = function (e, t) {
        var n = document.createElement("a");
        t && "noDecodeWholeURL" in t && t.noDecodeWholeURL
          ? (n.href = e)
          : (n.href = decodeURIComponent(e));
        var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
        return {
          href: n.href,
          protocol: (n.protocol || "").replace(/:$/, ""),
          hostname: n.hostname,
          port: +n.port,
          pathname: n.pathname.replace(/^(?!\/)/, "/"),
          search: r ? n.search : w.parseQS(n.search || ""),
          hash: (n.hash || "").replace(/^#/, ""),
          host: n.host || window.location.host,
        };
      }),
      (t.buildUrl = function (e) {
        return (
          (e.protocol || "http") +
          "://" +
          (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) +
          (e.pathname || "") +
          (e.search ? "?".concat(w.formatQS(e.search || "")) : "") +
          (e.hash ? "#".concat(e.hash) : "")
        );
      }),
      (t.deepEqual = je),
      (t.mergeDeep = function e(t) {
        for (
          var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
          i < n;
          i++
        )
          r[i - 1] = arguments[i];
        if (!r.length) return t;
        var o = r.shift();
        if (Q(t) && Q(o))
          for (var a in o)
            Q(o[a])
              ? (t[a] || y(t, v({}, a, {})), e(t[a], o[a]))
              : J(o[a]) && t[a]
              ? J(t[a]) && (t[a] = t[a].concat(o[a]))
              : y(t, v({}, a, o[a]));
        return e.apply(void 0, [t].concat(r));
      }),
      (t.cyrb53Hash = function (e) {
        for (
          var t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = function (e, t) {
              if (H(Math.imul)) return Math.imul(e, t);
              var n = (4194303 & e) * (t |= 0);
              return 4290772992 & e && (n += ((4290772992 & e) * t) | 0), 0 | n;
            },
            i = 3735928559 ^ n,
            o = 1103547991 ^ n,
            a = 0;
          a < e.length;
          a++
        )
          (t = e.charCodeAt(a)),
            (i = r(i ^ t, 2654435761)),
            (o = r(o ^ t, 1597334677));
        return (
          (i = r(i ^ (i >>> 16), 2246822507) ^ r(o ^ (o >>> 13), 3266489909)),
          (
            4294967296 *
              (2097151 &
                (o =
                  r(o ^ (o >>> 16), 2246822507) ^
                  r(i ^ (i >>> 13), 3266489909))) +
            (i >>> 0)
          ).toString()
        );
      });
    var r = n(3),
      i = n(167),
      o = n.n(i),
      a = n(11),
      c = n.n(a),
      u = n(12),
      s = n.n(u),
      d = n(168);
    n.d(t, "deepAccess", function () {
      return d.a;
    });
    var f = n(169);
    function l(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            i,
            o = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          }
          return o;
        })(e, t) ||
        g(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function p(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return b(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        g(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function g(e, t) {
      if (e) {
        if ("string" == typeof e) return b(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? b(e, t)
            : void 0
        );
      }
    }
    function b(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function v(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function y() {
      return (y =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function h(e) {
      return (h =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    n.d(t, "deepSetValue", function () {
      return f.a;
    });
    var m = n(5),
      O = Object.prototype.toString,
      j = Boolean(window.console),
      S = Boolean(j && window.console.log),
      E = Boolean(j && window.console.info),
      A = Boolean(j && window.console.warn),
      T = Boolean(j && window.console.error),
      I = n(10),
      w = {
        checkCookieSupport: be,
        createTrackPixelIframeHtml: re,
        getWindowSelf: P,
        getWindowTop: N,
        getWindowLocation: M,
        insertUserSyncIframe: ne,
        insertElement: ee,
        isFn: H,
        triggerPixel: te,
        logError: W,
        logWarn: L,
        logMessage: q,
        logInfo: G,
        parseQS: me,
        formatQS: Oe,
        deepEqual: je,
      },
      C = {};
    var _,
      R = {},
      U =
        function (e, t) {
          return t;
        }.bind(null, 1, R)() === R
          ? Function.prototype.bind
          : function (e) {
              var t = this,
                n = Array.prototype.slice.call(arguments, 1);
              return function () {
                return t.apply(
                  e,
                  n.concat(Array.prototype.slice.call(arguments))
                );
              };
            },
      B =
        ((_ = 0),
        function () {
          return ++_;
        });
    function x() {
      return B() + Math.random().toString(16).substr(2);
    }
    function D(e) {
      if (k(e)) return e[0] + "x" + e[1];
    }
    function k(e) {
      return J(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
    }
    function N() {
      return window.top;
    }
    function P() {
      return window.self;
    }
    function M() {
      return window.location;
    }
    function q() {
      z() && S && console.log.apply(console, F(arguments, "MESSAGE:"));
    }
    function G() {
      z() && E && console.info.apply(console, F(arguments, "INFO:"));
    }
    function L() {
      z() && A && console.warn.apply(console, F(arguments, "WARNING:")),
        I.emit(m.EVENTS.AUCTION_DEBUG, {
          type: "WARNING",
          arguments: arguments,
        });
    }
    function W() {
      z() && T && console.error.apply(console, F(arguments, "ERROR:")),
        I.emit(m.EVENTS.AUCTION_DEBUG, { type: "ERROR", arguments: arguments });
    }
    function F(e, t) {
      e = [].slice.call(e);
      var n = r.b.getCurrentBidder();
      return (
        t && e.unshift(t),
        n && e.unshift(i("#aaa")),
        e.unshift(i("#3b88c3")),
        e.unshift("%cPrebid" + (n ? "%c".concat(n) : "")),
        e
      );
      function i(e) {
        return "display: inline-block; color: #fff; background: ".concat(
          e,
          "; padding: 1px 4px; border-radius: 3px;"
        );
      }
    }
    function z() {
      return !!r.b.getConfig("debug");
    }
    function V(e, t) {
      return O.call(e) === "[object " + t + "]";
    }
    function H(e) {
      return V(e, "Function");
    }
    function K(e) {
      return V(e, "String");
    }
    function J(e) {
      return V(e, "Array");
    }
    function Y(e) {
      return V(e, "Number");
    }
    function Q(e) {
      return V(e, "Object");
    }
    function $(e) {
      if (!e) return !0;
      if (J(e) || K(e)) return !(e.length > 0);
      for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
      return !0;
    }
    function X(e, t) {
      if (!$(e)) {
        if (H(e.forEach)) return e.forEach(t, this);
        var n = 0,
          r = e.length;
        if (r > 0) for (; n < r; n++) t(e[n], n, e);
        else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
      }
    }
    function Z(e, t) {
      return e.hasOwnProperty
        ? e.hasOwnProperty(t)
        : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
    }
    function ee(e, t, n, r) {
      var i;
      (t = t || document),
        (i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head"));
      try {
        if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
          i = i[0];
          var o = r ? null : i.firstChild;
          return i.insertBefore(e, o);
        }
      } catch (e) {}
    }
    function te(e, t) {
      var n = new Image();
      t &&
        w.isFn(t) &&
        (n.addEventListener("load", t), n.addEventListener("error", t)),
        (n.src = e);
    }
    function ne(e, t) {
      var n = w.createTrackPixelIframeHtml(
          e,
          !1,
          "allow-scripts allow-same-origin"
        ),
        r = document.createElement("div");
      r.innerHTML = n;
      var i = r.firstChild;
      t &&
        w.isFn(t) &&
        (i.addEventListener("load", t), i.addEventListener("error", t)),
        w.insertElement(i, document, "html", !0);
    }
    function re(e) {
      var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return e
        ? (t && (e = encodeURI(e)),
          n && (n = 'sandbox="'.concat(n, '"')),
          "<iframe "
            .concat(n, ' id="')
            .concat(
              x(),
              '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
            )
            .concat(e, '">\n    </iframe>'))
        : "";
    }
    function ie(e, t, n) {
      return null == t
        ? n
        : K(t)
        ? t
        : Y(t)
        ? t.toString()
        : void w.logWarn(
            "Unsuported type for param: " + e + " required type: String"
          );
    }
    function oe(e, t, n) {
      return n.indexOf(e) === t;
    }
    function ae(e, t) {
      return e.concat(t);
    }
    function ce(e) {
      return Object.keys(e);
    }
    function ue(e, t) {
      return e[t];
    }
    function se() {
      if (
        window.googletag &&
        H(window.googletag.pubads) &&
        H(window.googletag.pubads().getSlots)
      )
        return !0;
    }
    var de = pe("timeToRespond", function (e, t) {
        return e > t;
      }),
      fe = pe("responseTimestamp", function (e, t) {
        return e > t;
      }),
      le = pe("responseTimestamp", function (e, t) {
        return e < t;
      });
    function pe(e, t) {
      return function (n, r) {
        return n.cpm === r.cpm
          ? t(n[e], r[e])
            ? r
            : n
          : n.cpm < r.cpm
          ? r
          : n;
      };
    }
    function ge(e) {
      return o()(e);
    }
    function be() {
      if (window.navigator.cookieEnabled || document.cookie.length) return !0;
    }
    var ve = function (e, t) {
      return e.getAdUnitPath() === t || e.getSlotElementId() === t;
    };
    function ye(e) {
      return function (t) {
        return ve(t, e);
      };
    }
    function he(e) {
      return Number.isInteger
        ? Number.isInteger(e)
        : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    }
    function me(e) {
      return e
        ? e
            .replace(/^\?/, "")
            .split("&")
            .reduce(function (e, t) {
              var n = l(t.split("="), 2),
                r = n[0],
                i = n[1];
              return (
                /\[\]$/.test(r)
                  ? ((e[(r = r.replace("[]", ""))] = e[r] || []), e[r].push(i))
                  : (e[r] = i || ""),
                e
              );
            }, {})
        : {};
    }
    function Oe(e) {
      return Object.keys(e)
        .map(function (t) {
          return Array.isArray(e[t])
            ? e[t]
                .map(function (e) {
                  return "".concat(t, "[]=").concat(e);
                })
                .join("&")
            : "".concat(t, "=").concat(e[t]);
        })
        .join("&");
    }
    function je(e, t) {
      if (e === t) return !0;
      if ("object" === h(e) && null !== e && "object" === h(t) && null !== t) {
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (var n in e) {
          if (!t.hasOwnProperty(n)) return !1;
          if (!je(e[n], t[n])) return !1;
        }
        return !0;
      }
      return !1;
    }
  },
  1: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n.d(t, "storage", function () {
        return T;
      }),
      (t.registerBidder = function (e) {
        var t = Array.isArray(e.supportedMediaTypes)
          ? { supportedMediaTypes: e.supportedMediaTypes }
          : void 0;
        function n(e) {
          var n = w(e);
          i.default.registerBidAdapter(n, e.code, t);
        }
        n(e),
          Array.isArray(e.aliases) &&
            e.aliases.forEach(function (t) {
              var r,
                o,
                a = t;
              Object(y.isPlainObject)(t) &&
                ((a = t.code), (r = t.gvlid), (o = t.skipPbsAliasing)),
                (i.default.aliasRegistry[a] = e.code),
                n(A({}, e, { code: a, gvlid: r, skipPbsAliasing: o }));
            });
      }),
      (t.newBidder = w),
      n.d(t, "registerSyncInner", function () {
        return C;
      }),
      (t.preloadBidderMappingFile = _),
      (t.getIabSubCategory = function (e, t) {
        var n = i.default.getBidAdapter(e);
        if (n.getSpec().getMappingFileInfo) {
          var r = n.getSpec().getMappingFileInfo(),
            o = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
            a = T.getDataFromLocalStorage(o);
          if (a) {
            try {
              a = JSON.parse(a);
            } catch (t) {
              Object(y.logError)(
                "Failed to parse ".concat(
                  e,
                  " mapping data stored in local storage"
                )
              );
            }
            return a.mapping[t] ? a.mapping[t] : null;
          }
        }
      }),
      (t.isValid = R);
    var r = n(81),
      i = n(8),
      o = n(3),
      a = n(43),
      c = n(60),
      u = n(38),
      s = n(24),
      d = n(5),
      f = n.n(d),
      l = n(10),
      p = n.n(l),
      g = n(12),
      b = n.n(g),
      v = n(4),
      y = n(0),
      h = n(2),
      m = n(9),
      O = n(7);
    function j(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            i,
            o = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          }
          return o;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return S(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return S(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function S(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function E(e) {
      return (E =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function A() {
      return (A =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var T = Object(O.a)("bidderFactory"),
      I = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];
    function w(e) {
      return A(new r.a(e.code), {
        getSpec: function () {
          return Object.freeze(e);
        },
        registerSyncs: t,
        callBids: function (r, i, c, u, s, d) {
          if (Array.isArray(r.bids)) {
            var l = {},
              g = [],
              b = r.bids.filter(n);
            if (0 !== b.length) {
              var v = {};
              b.forEach(function (e) {
                (v[e.bidId] = e),
                  e.adUnitCode || (e.adUnitCode = e.placementCode);
              });
              var h = e.buildRequests(b, r);
              if (h && 0 !== h.length) {
                Array.isArray(h) || (h = [h]);
                var m = Object(y.delayExecution)(d(O), h.length);
                h.forEach(function (e) {
                  return p.a.emit(f.a.EVENTS.BEFORE_BIDDER_HTTP, r);
                }),
                  h.forEach(function (t) {
                    switch (t.method) {
                      case "GET":
                        u(
                          "".concat(t.url).concat(
                            (function (e) {
                              if (e)
                                return "?".concat(
                                  "object" === E(e)
                                    ? Object(y.parseQueryStringParameters)(e)
                                    : e
                                );
                              return "";
                            })(t.data)
                          ),
                          { success: d(n), error: o },
                          void 0,
                          A({ method: "GET", withCredentials: !0 }, t.options)
                        );
                        break;
                      case "POST":
                        u(
                          t.url,
                          { success: d(n), error: o },
                          "string" == typeof t.data
                            ? t.data
                            : JSON.stringify(t.data),
                          A(
                            {
                              method: "POST",
                              contentType: "text/plain",
                              withCredentials: !0,
                            },
                            t.options
                          )
                        );
                        break;
                      default:
                        Object(y.logWarn)(
                          "Skipping invalid request from "
                            .concat(e.code, ". Request type ")
                            .concat(t.type, " must be GET or POST")
                        ),
                          m();
                    }
                    function n(n, o) {
                      s(e.code);
                      try {
                        n = JSON.parse(n);
                      } catch (e) {}
                      var c;
                      (n = {
                        body: n,
                        headers: { get: o.getResponseHeader.bind(o) },
                      }),
                        g.push(n);
                      try {
                        c = e.interpretResponse(n, t);
                      } catch (t) {
                        return (
                          Object(y.logError)(
                            "Bidder ".concat(
                              e.code,
                              " failed to interpret the server's response. Continuing without bids"
                            ),
                            null,
                            t
                          ),
                          void m()
                        );
                      }
                      function u(t) {
                        var n = v[t.requestId];
                        if (n) {
                          (t.originalCpm = t.cpm),
                            (t.originalCurrency = t.currency),
                            (t.meta = t.meta || A({}, t[n.bidder]));
                          var o = A(Object(a.a)(f.a.STATUS.GOOD, n), t);
                          !(function (e, t) {
                            (l[e] = !0), R(e, t, [r]) && i(e, t);
                          })(n.adUnitCode, o);
                        } else Object(y.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(t.requestId, ". Ignoring."));
                      }
                      c && (Object(y.isArray)(c) ? c.forEach(u) : u(c)), m(c);
                    }
                    function o(t) {
                      s(e.code),
                        Object(y.logError)(
                          "Server call for "
                            .concat(e.code, " failed: ")
                            .concat(t, ". Continuing without bids.")
                        ),
                        m();
                    }
                  });
              } else O();
            } else O();
          }
          function O() {
            c(),
              o.b.runWithBidder(e.code, function () {
                p.a.emit(f.a.EVENTS.BIDDER_DONE, r),
                  t(g, r.gdprConsent, r.uspConsent);
              });
          }
        },
      });
      function t(t, n, r) {
        C(e, t, n, r);
      }
      function n(t) {
        return (
          !!e.isBidRequestValid(t) ||
          (Object(y.logWarn)(
            "Invalid bid sent to bidder "
              .concat(e.code, ": ")
              .concat(JSON.stringify(t))
          ),
          !1)
        );
      }
    }
    var C = Object(m.b)(
      "async",
      function (e, t, n, r) {
        var a = o.b.getConfig("userSync.aliasSyncEnabled");
        if (e.getUserSyncs && (a || !i.default.aliasRegistry[e.code])) {
          var u = o.b.getConfig("userSync.filterSettings"),
            s = e.getUserSyncs(
              {
                iframeEnabled: !(!u || (!u.iframe && !u.all)),
                pixelEnabled: !(!u || (!u.image && !u.all)),
              },
              t,
              n,
              r
            );
          s &&
            (Array.isArray(s) || (s = [s]),
            s.forEach(function (t) {
              c.a.registerSync(t.type, e.code, t.url);
            }));
        }
      },
      "registerSyncs"
    );
    function _(e, t) {
      if (!o.b.getConfig("adpod.brandCategoryExclusion"))
        return e.call(this, t);
      t
        .filter(function (e) {
          return Object(y.deepAccess)(e, "mediaTypes.video.context") === h.a;
        })
        .map(function (e) {
          return e.bids.map(function (e) {
            return e.bidder;
          });
        })
        .reduce(y.flatten, [])
        .filter(y.uniques)
        .forEach(function (e) {
          var t = i.default.getBidAdapter(e);
          if (t.getSpec().getMappingFileInfo) {
            var n = t.getSpec().getMappingFileInfo(),
              r = n.refreshInDays ? n.refreshInDays : 1,
              o = n.localStorageKey ? n.localStorageKey : t.getSpec().code,
              a = T.getDataFromLocalStorage(o);
            try {
              (!(a = a ? JSON.parse(a) : void 0) ||
                Object(y.timestamp)() >
                  a.lastUpdated + 24 * r * 60 * 60 * 1e3) &&
                Object(v.a)(n.url, {
                  success: function (t) {
                    try {
                      t = JSON.parse(t);
                      var n = {
                        lastUpdated: Object(y.timestamp)(),
                        mapping: t.mapping,
                      };
                      T.setDataInLocalStorage(o, JSON.stringify(n));
                    } catch (t) {
                      Object(y.logError)(
                        "Failed to parse ".concat(
                          e,
                          " bidder translation mapping file"
                        )
                      );
                    }
                  },
                  error: function () {
                    Object(y.logError)(
                      "Failed to load ".concat(e, " bidder translation file")
                    );
                  },
                });
            } catch (t) {
              Object(y.logError)(
                "Failed to parse ".concat(e, " bidder translation mapping file")
              );
            }
          }
        }),
        e.call(this, t);
    }
    function R(e, t, n) {
      function r(e) {
        return "Invalid bid from "
          .concat(t.bidderCode, ". Ignoring bid: ")
          .concat(e);
      }
      return e
        ? t
          ? ((i = Object.keys(t)),
            I.every(function (e) {
              return b()(i, e) && !b()([void 0, null], t[e]);
            })
              ? "native" !== t.mediaType || Object(u.g)(t, n)
                ? "video" !== t.mediaType || Object(s.d)(t, n)
                  ? !(
                      "banner" === t.mediaType &&
                      !(function (e, t, n) {
                        if (
                          (t.width || 0 === parseInt(t.width, 10)) &&
                          (t.height || 0 === parseInt(t.height, 10))
                        )
                          return (
                            (t.width = parseInt(t.width, 10)),
                            (t.height = parseInt(t.height, 10)),
                            !0
                          );
                        var r = Object(y.getBidderRequest)(n, t.bidderCode, e),
                          i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                          o = Object(y.parseSizesInput)(i);
                        if (1 === o.length) {
                          var a = j(o[0].split("x"), 2),
                            c = a[0],
                            u = a[1];
                          return (
                            (t.width = parseInt(c, 10)),
                            (t.height = parseInt(u, 10)),
                            !0
                          );
                        }
                        return !1;
                      })(e, t, n)
                    ) ||
                    (Object(y.logError)(
                      r("Banner bids require a width and height")
                    ),
                    !1)
                  : (Object(y.logError)(
                      r(
                        "Video bid does not have required vastUrl or renderer property"
                      )
                    ),
                    !1)
                : (Object(y.logError)(
                    r("Native bid missing some required properties.")
                  ),
                  !1)
              : (Object(y.logError)(
                  r(
                    "Bidder ".concat(
                      t.bidderCode,
                      " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."
                    )
                  )
                ),
                !1))
          : (Object(y.logWarn)(
              "Some adapter tried to add an undefined bid for ".concat(e, ".")
            ),
            !1)
        : (Object(y.logWarn)("No adUnitCode was supplied to addBidResponse."),
          !1);
      var i;
    }
    Object(m.a)("checkAdUnitSetup").before(_);
  },
  10: function (e, t, n) {
    function r() {
      return (r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var i = n(0),
      o = n(5),
      a = Array.prototype.slice,
      c = Array.prototype.push,
      u = i._map(o.EVENTS, function (e) {
        return e;
      }),
      s = o.EVENT_ID_PATHS,
      d = [];
    e.exports = (function () {
      var e = {},
        t = {};
      function n(t, n) {
        i.logMessage("Emitting event for: " + t);
        var r = n[0] || {},
          o = r[s[t]],
          a = e[t] || { que: [] },
          u = i._map(a, function (e, t) {
            return t;
          }),
          f = [];
        d.push({
          eventType: t,
          args: r,
          id: o,
          elapsedTime: i.getPerformanceNow(),
        }),
          o && i.contains(u, o) && c.apply(f, a[o].que),
          c.apply(f, a.que),
          i._each(f, function (e) {
            if (e)
              try {
                e.apply(null, n);
              } catch (e) {
                i.logError("Error executing handler:", "events.js", e);
              }
          });
      }
      return (
        (t.on = function (t, n, r) {
          if (
            (function (e) {
              return i.contains(u, e);
            })(t)
          ) {
            var o = e[t] || { que: [] };
            r
              ? ((o[r] = o[r] || { que: [] }), o[r].que.push(n))
              : o.que.push(n),
              (e[t] = o);
          } else
            i.logError("Wrong event name : " + t + " Valid event names :" + u);
        }),
        (t.emit = function (e) {
          var t = a.call(arguments, 1);
          n(e, t);
        }),
        (t.off = function (t, n, r) {
          var o = e[t];
          i.isEmpty(o) ||
            (i.isEmpty(o.que) && i.isEmpty(o[r])) ||
            (r && (i.isEmpty(o[r]) || i.isEmpty(o[r].que))) ||
            (r
              ? i._each(o[r].que, function (e) {
                  var t = o[r].que;
                  e === n && t.splice(t.indexOf(e), 1);
                })
              : i._each(o.que, function (e) {
                  var t = o.que;
                  e === n && t.splice(t.indexOf(e), 1);
                }),
            (e[t] = o));
        }),
        (t.get = function () {
          return e;
        }),
        (t.getEvents = function () {
          var e = [];
          return (
            i._each(d, function (t) {
              var n = r({}, t);
              e.push(n);
            }),
            e
          );
        }),
        t
      );
    })();
  },
  100: function (e, t, n) {
    "use strict";
    (t.a = function (e, t) {
      if (e.labelAll)
        return { labelAll: !0, labels: e.labelAll, activeLabels: t };
      return { labelAll: !1, labels: e.labelAny, activeLabels: t };
    }),
      (t.c = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
          n = s(t);
        if (!n.shouldFilter) return !0;
        return !!n.sizesSupported[e];
      }),
      (t.b = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.labels,
          n = void 0 === t ? [] : t,
          r = e.labelAll,
          o = void 0 !== r && r,
          c = e.activeLabels,
          d = void 0 === c ? [] : c,
          f = arguments.length > 1 ? arguments[1] : void 0,
          l = arguments.length > 2 ? arguments[2] : void 0,
          p =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
          g = s(p);
        f = Object(i.isPlainObject)(f)
          ? Object(i.deepClone)(f)
          : l
          ? { banner: { sizes: l } }
          : {};
        var b = Object(i.deepAccess)(f, "banner.sizes");
        g.shouldFilter &&
          b &&
          (f.banner.sizes = b.filter(function (e) {
            return g.sizesSupported[e];
          }));
        var v = Object.keys(f),
          y = {
            active:
              v.every(function (e) {
                return "banner" !== e;
              }) ||
              (v.some(function (e) {
                return "banner" === e;
              }) &&
                Object(i.deepAccess)(f, "banner.sizes.length") > 0 &&
                (0 === n.length ||
                  (!o &&
                    (n.some(function (e) {
                      return g.labels[e];
                    }) ||
                      n.some(function (e) {
                        return a()(d, e);
                      }))) ||
                  (o &&
                    n.reduce(function (e, t) {
                      return e ? g.labels[t] || a()(d, t) : e;
                    }, !0)))),
            mediaTypes: f,
          };
        b &&
          b.length !== f.banner.sizes.length &&
          (y.filterResults = { before: b, after: f.banner.sizes });
        return y;
      });
    var r = n(3),
      i = n(0),
      o = n(12),
      a = n.n(o);
    function c(e) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var u = [];
    function s(e) {
      return e.reduce(
        function (e, t) {
          if (
            "object" === c(t) &&
            "string" == typeof t.mediaQuery &&
            t.mediaQuery.length > 0
          ) {
            var n = !1;
            try {
              n = Object(i.getWindowTop)().matchMedia(t.mediaQuery).matches;
            } catch (e) {
              Object(i.logWarn)(
                "Unfriendly iFrame blocks sizeConfig from being correctly evaluated"
              ),
                (n = matchMedia(t.mediaQuery).matches);
            }
            n &&
              (Array.isArray(t.sizesSupported) && (e.shouldFilter = !0),
              ["labels", "sizesSupported"].forEach(function (n) {
                return (t[n] || []).forEach(function (t) {
                  return (e[n][t] = !0);
                });
              }));
          } else
            Object(i.logWarn)(
              'sizeConfig rule missing required property "mediaQuery"'
            );
          return e;
        },
        { labels: {}, sizesSupported: {}, shouldFilter: !1 }
      );
    }
    r.b.getConfig("sizeConfig", function (e) {
      return (function (e) {
        u = e;
      })(e.sizeConfig);
    });
  },
  101: function (e, t, n) {
    "use strict";
    (t.b = function (e, t, n) {
      var o = { puts: e.map(a, n) };
      Object(r.a)(
        i.b.getConfig("cache.url"),
        (function (e) {
          return {
            success: function (t) {
              var n;
              try {
                n = JSON.parse(t).responses;
              } catch (t) {
                return void e(t, []);
              }
              n
                ? e(null, n)
                : e(
                    new Error(
                      "The cache server didn't respond with a responses property."
                    ),
                    []
                  );
            },
            error: function (t, n) {
              e(
                new Error(
                  "Error storing video ad in the cache: "
                    .concat(t, ": ")
                    .concat(JSON.stringify(n))
                ),
                []
              );
            },
          };
        })(t),
        JSON.stringify(o),
        { contentType: "text/plain", withCredentials: !0 }
      );
    }),
      (t.a = function (e) {
        return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e);
      });
    var r = n(4),
      i = n(3),
      o = n(0);
    function a(e) {
      var t,
        n,
        r,
        a = {
          type: "xml",
          value: e.vastXml
            ? e.vastXml
            : ((t = e.vastUrl),
              (n = e.vastImpUrl),
              (r = n ? "<![CDATA[".concat(n, "]]>") : ""),
              '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
                .concat(t, "]]></VASTAdTagURI>\n        <Impression>")
                .concat(
                  r,
                  "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
                )),
          ttlseconds: Number(e.ttl),
        };
      return (
        i.b.getConfig("cache.vasttrack") &&
          ((a.bidder = e.bidder),
          (a.bidid = e.requestId),
          (a.aid = e.auctionId),
          Object(o.isPlainObject)(this) &&
            this.hasOwnProperty("auctionStart") &&
            (a.timestamp = this.auctionStart)),
        "string" == typeof e.customCacheKey &&
          "" !== e.customCacheKey &&
          (a.key = e.customCacheKey),
        a
      );
    }
  },
  105: function (e, t, n) {
    n(106);
    var r = n(55);
    e.exports = r("Array", "find");
  },
  106: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(63).find,
      o = n(54),
      a = "find",
      c = !0;
    a in [] &&
      Array(1).find(function () {
        c = !1;
      }),
      r(
        { target: "Array", proto: !0, forced: c },
        {
          find: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      o(a);
  },
  107: function (e, t, n) {
    var r = n(33),
      i = n(108),
      o = n(44),
      a = n(49),
      c = n(62),
      u = n(31),
      s = n(83),
      d = Object.getOwnPropertyDescriptor;
    t.f = r
      ? d
      : function (e, t) {
          if (((e = a(e)), (t = c(t, !0)), s))
            try {
              return d(e, t);
            } catch (e) {}
          if (u(e, t)) return o(!i.f.call(e, t), e[t]);
        };
  },
  108: function (e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({ 1: 2 }, 1);
    t.f = o
      ? function (e) {
          var t = i(this, e);
          return !!t && t.enumerable;
        }
      : r;
  },
  109: function (e, t, n) {
    var r = n(29),
      i = /#|\.prototype\./,
      o = function (e, t) {
        var n = c[a(e)];
        return n == s || (n != u && ("function" == typeof t ? r(t) : !!t));
      },
      a = (o.normalize = function (e) {
        return String(e).replace(i, ".").toLowerCase();
      }),
      c = (o.data = {}),
      u = (o.NATIVE = "N"),
      s = (o.POLYFILL = "P");
    e.exports = o;
  },
  11: function (e, t, n) {
    var r = n(105);
    e.exports = r;
  },
  110: function (e, t, n) {
    var r = n(30),
      i = n(111),
      o = n(21)("species");
    e.exports = function (e, t) {
      var n;
      return (
        i(e) &&
          ("function" != typeof (n = e.constructor) ||
          (n !== Array && !i(n.prototype))
            ? r(n) && null === (n = n[o]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    };
  },
  111: function (e, t, n) {
    var r = n(50);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == r(e);
      };
  },
  112: function (e, t, n) {
    var r = n(27),
      i = n(32);
    e.exports = function (e, t) {
      try {
        i(r, e, t);
      } catch (n) {
        r[e] = t;
      }
      return t;
    };
  },
  113: function (e, t, n) {
    var r,
      i,
      o = n(27),
      a = n(114),
      c = o.process,
      u = c && c.versions,
      s = u && u.v8;
    s
      ? (i = (r = s.split("."))[0] < 4 ? 1 : r[0] + r[1])
      : a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (i = r[1]),
      (e.exports = i && +i);
  },
  114: function (e, t, n) {
    var r = n(26);
    e.exports = r("navigator", "userAgent") || "";
  },
  115: function (e, t, n) {
    var r = n(86);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  116: function (e, t, n) {
    n(117);
    var r = n(55);
    e.exports = r("Array", "includes");
  },
  117: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(87).includes,
      o = n(54);
    r(
      { target: "Array", proto: !0 },
      {
        includes: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      o("includes");
  },
  118: function (e, t, n) {
    var r = n(64),
      i = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      var n = r(e);
      return n < 0 ? i(n + t, 0) : o(n, t);
    };
  },
  119: function (e, t, n) {
    n(120), n(135), n(97), n(137);
    var r = n(45);
    e.exports = r.Set;
  },
  12: function (e, t, n) {
    var r = n(116);
    e.exports = r;
  },
  120: function (e, t, n) {
    "use strict";
    var r = n(121),
      i = n(126);
    e.exports = r(
      "Set",
      function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      i
    );
  },
  121: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(27),
      o = n(89),
      a = n(29),
      c = n(32),
      u = n(19),
      s = n(68),
      d = n(30),
      f = n(59),
      l = n(34).f,
      p = n(63).forEach,
      g = n(33),
      b = n(46),
      v = b.set,
      y = b.getterFor;
    e.exports = function (e, t, n) {
      var b,
        h = -1 !== e.indexOf("Map"),
        m = -1 !== e.indexOf("Weak"),
        O = h ? "set" : "add",
        j = i[e],
        S = j && j.prototype,
        E = {};
      if (
        g &&
        "function" == typeof j &&
        (m ||
          (S.forEach &&
            !a(function () {
              new j().entries().next();
            })))
      ) {
        b = t(function (t, n) {
          v(s(t, b, e), { type: e, collection: new j() }),
            null != n && u(n, t[O], { that: t, AS_ENTRIES: h });
        });
        var A = y(e);
        p(
          [
            "add",
            "clear",
            "delete",
            "forEach",
            "get",
            "has",
            "set",
            "keys",
            "values",
            "entries",
          ],
          function (e) {
            var t = "add" == e || "set" == e;
            !(e in S) ||
              (m && "clear" == e) ||
              c(b.prototype, e, function (n, r) {
                var i = A(this).collection;
                if (!t && m && !d(n)) return "get" == e && void 0;
                var o = i[e](0 === n ? 0 : n, r);
                return t ? this : o;
              });
          }
        ),
          m ||
            l(b.prototype, "size", {
              configurable: !0,
              get: function () {
                return A(this).collection.size;
              },
            });
      } else (b = n.getConstructor(t, e, h, O)), (o.REQUIRED = !0);
      return (
        f(b, e, !1, !0),
        (E[e] = b),
        r({ global: !0, forced: !0 }, E),
        m || n.setStrong(b, e, h),
        b
      );
    };
  },
  122: function (e, t, n) {
    var r = n(29);
    e.exports = !r(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  123: function (e, t, n) {
    "use strict";
    var r = n(67),
      i = n(58);
    e.exports = r
      ? {}.toString
      : function () {
          return "[object " + i(this) + "]";
        };
  },
  124: function (e, t, n) {
    var r = n(27),
      i = n(125),
      o = r.WeakMap;
    e.exports = "function" == typeof o && /native code/.test(i(o));
  },
  125: function (e, t, n) {
    var r = n(65),
      i = Function.toString;
    "function" != typeof r.inspectSource &&
      (r.inspectSource = function (e) {
        return i.call(e);
      }),
      (e.exports = r.inspectSource);
  },
  126: function (e, t, n) {
    "use strict";
    var r = n(34).f,
      i = n(70),
      o = n(93),
      a = n(25),
      c = n(68),
      u = n(19),
      s = n(72),
      d = n(134),
      f = n(33),
      l = n(89).fastKey,
      p = n(46),
      g = p.set,
      b = p.getterFor;
    e.exports = {
      getConstructor: function (e, t, n, s) {
        var d = e(function (e, r) {
            c(e, d, t),
              g(e, {
                type: t,
                index: i(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              f || (e.size = 0),
              null != r && u(r, e[s], { that: e, AS_ENTRIES: n });
          }),
          p = b(t),
          v = function (e, t, n) {
            var r,
              i,
              o = p(e),
              a = y(e, t);
            return (
              a
                ? (a.value = n)
                : ((o.last = a =
                    {
                      index: (i = l(t, !0)),
                      key: t,
                      value: n,
                      previous: (r = o.last),
                      next: void 0,
                      removed: !1,
                    }),
                  o.first || (o.first = a),
                  r && (r.next = a),
                  f ? o.size++ : e.size++,
                  "F" !== i && (o.index[i] = a)),
              e
            );
          },
          y = function (e, t) {
            var n,
              r = p(e),
              i = l(t);
            if ("F" !== i) return r.index[i];
            for (n = r.first; n; n = n.next) if (n.key == t) return n;
          };
        return (
          o(d.prototype, {
            clear: function () {
              for (var e = p(this), t = e.index, n = e.first; n; )
                (n.removed = !0),
                  n.previous && (n.previous = n.previous.next = void 0),
                  delete t[n.index],
                  (n = n.next);
              (e.first = e.last = void 0), f ? (e.size = 0) : (this.size = 0);
            },
            delete: function (e) {
              var t = this,
                n = p(t),
                r = y(t, e);
              if (r) {
                var i = r.next,
                  o = r.previous;
                delete n.index[r.index],
                  (r.removed = !0),
                  o && (o.next = i),
                  i && (i.previous = o),
                  n.first == r && (n.first = i),
                  n.last == r && (n.last = o),
                  f ? n.size-- : t.size--;
              }
              return !!r;
            },
            forEach: function (e) {
              for (
                var t,
                  n = p(this),
                  r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (t = t ? t.next : n.first);

              )
                for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
            },
            has: function (e) {
              return !!y(this, e);
            },
          }),
          o(
            d.prototype,
            n
              ? {
                  get: function (e) {
                    var t = y(this, e);
                    return t && t.value;
                  },
                  set: function (e, t) {
                    return v(this, 0 === e ? 0 : e, t);
                  },
                }
              : {
                  add: function (e) {
                    return v(this, (e = 0 === e ? 0 : e), e);
                  },
                }
          ),
          f &&
            r(d.prototype, "size", {
              get: function () {
                return p(this).size;
              },
            }),
          d
        );
      },
      setStrong: function (e, t, n) {
        var r = t + " Iterator",
          i = b(t),
          o = b(r);
        s(
          e,
          t,
          function (e, t) {
            g(this, { type: r, target: e, state: i(e), kind: t, last: void 0 });
          },
          function () {
            for (var e = o(this), t = e.kind, n = e.last; n && n.removed; )
              n = n.previous;
            return e.target && (e.last = n = n ? n.next : e.state.first)
              ? "keys" == t
                ? { value: n.key, done: !1 }
                : "values" == t
                ? { value: n.value, done: !1 }
                : { value: [n.key, n.value], done: !1 }
              : ((e.target = void 0), { value: void 0, done: !0 });
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          d(t);
      },
    };
  },
  127: function (e, t, n) {
    var r = n(33),
      i = n(34),
      o = n(16),
      a = n(128);
    e.exports = r
      ? Object.defineProperties
      : function (e, t) {
          o(e);
          for (var n, r = a(t), c = r.length, u = 0; c > u; )
            i.f(e, (n = r[u++]), t[n]);
          return e;
        };
  },
  128: function (e, t, n) {
    var r = n(129),
      i = n(92);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, i);
      };
  },
  129: function (e, t, n) {
    var r = n(31),
      i = n(49),
      o = n(87).indexOf,
      a = n(56);
    e.exports = function (e, t) {
      var n,
        c = i(e),
        u = 0,
        s = [];
      for (n in c) !r(a, n) && r(c, n) && s.push(n);
      for (; t.length > u; ) r(c, (n = t[u++])) && (~o(s, n) || s.push(n));
      return s;
    };
  },
  13: function (e, t, n) {
    "use strict";
    (t.a = u),
      (t.c = function (e) {
        return !(!e || !e.url);
      }),
      (t.b = function (e, t) {
        e.render(t);
      });
    var r = n(35),
      i = n(0),
      o = n(11),
      a = n.n(o),
      c = "outstream";
    function u(e) {
      var t = this,
        n = e.url,
        o = e.config,
        a = e.id,
        u = e.callback,
        d = e.loaded,
        f = e.adUnitCode;
      (this.url = n),
        (this.config = o),
        (this.handlers = {}),
        (this.id = a),
        (this.loaded = d),
        (this.cmd = []),
        (this.push = function (e) {
          "function" == typeof e
            ? t.loaded
              ? e.call()
              : t.cmd.push(e)
            : Object(i.logError)(
                "Commands given to Renderer.push must be wrapped in a function"
              );
        }),
        (this.callback =
          u ||
          function () {
            (t.loaded = !0), t.process();
          }),
        (this.render = function () {
          var e = this,
            t = arguments,
            o = function () {
              e._render
                ? e._render.apply(e, t)
                : Object(i.logWarn)(
                    "No render function was provided, please use .setRender on the renderer"
                  );
            };
          s(f)
            ? (Object(i.logWarn)(
                "External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(
                  f
                )
              ),
              o())
            : (this.cmd.unshift(o), Object(r.a)(n, c, this.callback));
        }.bind(this));
    }
    function s(e) {
      var t = pbjs.adUnits,
        n = a()(t, function (t) {
          return t.code === e;
        });
      if (!n) return !1;
      var r = Object(i.deepAccess)(n, "renderer"),
        o = !!(r && r.url && r.render),
        c = Object(i.deepAccess)(n, "mediaTypes.video.renderer"),
        u = !!(c && c.url && c.render);
      return !!((o && !0 !== r.backupOnly) || (u && !0 !== c.backupOnly));
    }
    (u.install = function (e) {
      return new u({
        url: e.url,
        config: e.config,
        id: e.id,
        callback: e.callback,
        loaded: e.loaded,
        adUnitCode: e.adUnitCode,
      });
    }),
      (u.prototype.getConfig = function () {
        return this.config;
      }),
      (u.prototype.setRender = function (e) {
        this._render = e;
      }),
      (u.prototype.setEventHandlers = function (e) {
        this.handlers = e;
      }),
      (u.prototype.handleVideoEvent = function (e) {
        var t = e.id,
          n = e.eventName;
        "function" == typeof this.handlers[n] && this.handlers[n](),
          Object(i.logMessage)(
            "Prebid Renderer event for id ".concat(t, " type ").concat(n)
          );
      }),
      (u.prototype.process = function () {
        for (; this.cmd.length > 0; )
          try {
            this.cmd.shift().call();
          } catch (e) {
            Object(i.logError)("Error processing Renderer command: ", e);
          }
      });
  },
  130: function (e, t, n) {
    var r = n(26);
    e.exports = r("document", "documentElement");
  },
  131: function (e, t, n) {
    var r = n(29);
    e.exports = !r(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    });
  },
  132: function (e, t, n) {
    var r = n(16),
      i = n(133);
    e.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, o) {
              return r(n), i(o), t ? e.call(n, o) : (n.__proto__ = o), n;
            };
          })()
        : void 0);
  },
  133: function (e, t, n) {
    var r = n(30);
    e.exports = function (e) {
      if (!r(e) && null !== e)
        throw TypeError("Can't set " + String(e) + " as a prototype");
      return e;
    };
  },
  134: function (e, t, n) {
    "use strict";
    var r = n(26),
      i = n(34),
      o = n(21),
      a = n(33),
      c = o("species");
    e.exports = function (e) {
      var t = r(e),
        n = i.f;
      a &&
        t &&
        !t[c] &&
        n(t, c, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  135: function (e, t) {},
  136: function (e, t, n) {
    var r = n(64),
      i = n(51),
      o = function (e) {
        return function (t, n) {
          var o,
            a,
            c = String(i(t)),
            u = r(n),
            s = c.length;
          return u < 0 || u >= s
            ? e
              ? ""
              : void 0
            : (o = c.charCodeAt(u)) < 55296 ||
              o > 56319 ||
              u + 1 === s ||
              (a = c.charCodeAt(u + 1)) < 56320 ||
              a > 57343
            ? e
              ? c.charAt(u)
              : o
            : e
            ? c.slice(u, u + 2)
            : a - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    e.exports = { codeAt: o(!1), charAt: o(!0) };
  },
  137: function (e, t, n) {
    n(98);
    var r = n(138),
      i = n(27),
      o = n(58),
      a = n(32),
      c = n(41),
      u = n(21)("toStringTag");
    for (var s in r) {
      var d = i[s],
        f = d && d.prototype;
      f && o(f) !== u && a(f, u, s), (c[s] = c.Array);
    }
  },
  138: function (e, t) {
    e.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  139: function (e, t, n) {
    n(15)({ target: "Set", stat: !0 }, { from: n(140) });
  },
  14: function (e, t, n) {
    "use strict";
    (t.a = function () {
      return window.pbjs;
    }),
      (window.pbjs = window.pbjs || {}),
      (window.pbjs.cmd = window.pbjs.cmd || []),
      (window.pbjs.que = window.pbjs.que || []),
      (window._pbjsGlobals = window._pbjsGlobals || []),
      window._pbjsGlobals.push("pbjs");
  },
  140: function (e, t, n) {
    "use strict";
    var r = n(23),
      i = n(25),
      o = n(19);
    e.exports = function (e) {
      var t,
        n,
        a,
        c,
        u = arguments.length,
        s = u > 1 ? arguments[1] : void 0;
      return (
        r(this),
        (t = void 0 !== s) && r(s),
        null == e
          ? new this()
          : ((n = []),
            t
              ? ((a = 0),
                (c = i(s, u > 2 ? arguments[2] : void 0, 2)),
                o(e, function (e) {
                  n.push(c(e, a++));
                }))
              : o(e, n.push, { that: n }),
            new this(n))
      );
    };
  },
  141: function (e, t, n) {
    n(15)({ target: "Set", stat: !0 }, { of: n(142) });
  },
  142: function (e, t, n) {
    "use strict";
    e.exports = function () {
      for (var e = arguments.length, t = new Array(e); e--; )
        t[e] = arguments[e];
      return new this(t);
    };
  },
  143: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(144);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        addAll: function () {
          return o.apply(this, arguments);
        },
      }
    );
  },
  144: function (e, t, n) {
    "use strict";
    var r = n(16),
      i = n(23);
    e.exports = function () {
      for (
        var e = r(this), t = i(e.add), n = 0, o = arguments.length;
        n < o;
        n++
      )
        t.call(e, arguments[n]);
      return e;
    };
  },
  145: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(146);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        deleteAll: function () {
          return o.apply(this, arguments);
        },
      }
    );
  },
  146: function (e, t, n) {
    "use strict";
    var r = n(16),
      i = n(23);
    e.exports = function () {
      for (
        var e,
          t = r(this),
          n = i(t.delete),
          o = !0,
          a = 0,
          c = arguments.length;
        a < c;
        a++
      )
        (e = n.call(t, arguments[a])), (o = o && e);
      return !!o;
    };
  },
  147: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(16),
      a = n(25),
      c = n(37),
      u = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        every: function (e) {
          var t = o(this),
            n = c(t),
            r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
          return !u(
            n,
            function (e, n) {
              if (!r(e, e, t)) return n();
            },
            { IS_ITERATOR: !0, INTERRUPTED: !0 }
          ).stopped;
        },
      }
    );
  },
  148: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(26),
      a = n(16),
      c = n(23),
      u = n(42),
      s = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        difference: function (e) {
          var t = a(this),
            n = new (u(t, o("Set")))(t),
            r = c(n.delete);
          return (
            s(e, function (e) {
              r.call(n, e);
            }),
            n
          );
        },
      }
    );
  },
  149: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(26),
      a = n(16),
      c = n(23),
      u = n(25),
      s = n(42),
      d = n(37),
      f = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        filter: function (e) {
          var t = a(this),
            n = d(t),
            r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
            i = new (s(t, o("Set")))(),
            l = c(i.add);
          return (
            f(
              n,
              function (e) {
                r(e, e, t) && l.call(i, e);
              },
              { IS_ITERATOR: !0 }
            ),
            i
          );
        },
      }
    );
  },
  15: function (e, t, n) {
    "use strict";
    var r = n(27),
      i = n(107).f,
      o = n(109),
      a = n(45),
      c = n(25),
      u = n(32),
      s = n(31),
      d = function (e) {
        var t = function (t, n, r) {
          if (this instanceof e) {
            switch (arguments.length) {
              case 0:
                return new e();
              case 1:
                return new e(t);
              case 2:
                return new e(t, n);
            }
            return new e(t, n, r);
          }
          return e.apply(this, arguments);
        };
        return (t.prototype = e.prototype), t;
      };
    e.exports = function (e, t) {
      var n,
        f,
        l,
        p,
        g,
        b,
        v,
        y,
        h = e.target,
        m = e.global,
        O = e.stat,
        j = e.proto,
        S = m ? r : O ? r[h] : (r[h] || {}).prototype,
        E = m ? a : a[h] || (a[h] = {}),
        A = E.prototype;
      for (l in t)
        (n = !o(m ? l : h + (O ? "." : "#") + l, e.forced) && S && s(S, l)),
          (g = E[l]),
          n && (b = e.noTargetGet ? (y = i(S, l)) && y.value : S[l]),
          (p = n && b ? b : t[l]),
          (n && typeof g == typeof p) ||
            ((v =
              e.bind && n
                ? c(p, r)
                : e.wrap && n
                ? d(p)
                : j && "function" == typeof p
                ? c(Function.call, p)
                : p),
            (e.sham || (p && p.sham) || (g && g.sham)) && u(v, "sham", !0),
            (E[l] = v),
            j &&
              (s(a, (f = h + "Prototype")) || u(a, f, {}),
              (a[f][l] = p),
              e.real && A && !A[l] && u(A, l, p)));
    };
  },
  150: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(16),
      a = n(25),
      c = n(37),
      u = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        find: function (e) {
          var t = o(this),
            n = c(t),
            r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
          return u(
            n,
            function (e, n) {
              if (r(e, e, t)) return n(e);
            },
            { IS_ITERATOR: !0, INTERRUPTED: !0 }
          ).result;
        },
      }
    );
  },
  151: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(26),
      a = n(16),
      c = n(23),
      u = n(42),
      s = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        intersection: function (e) {
          var t = a(this),
            n = new (u(t, o("Set")))(),
            r = c(t.has),
            i = c(n.add);
          return (
            s(e, function (e) {
              r.call(t, e) && i.call(n, e);
            }),
            n
          );
        },
      }
    );
  },
  152: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(16),
      a = n(23),
      c = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        isDisjointFrom: function (e) {
          var t = o(this),
            n = a(t.has);
          return !c(
            e,
            function (e, r) {
              if (!0 === n.call(t, e)) return r();
            },
            { INTERRUPTED: !0 }
          ).stopped;
        },
      }
    );
  },
  153: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(26),
      a = n(16),
      c = n(23),
      u = n(73),
      s = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        isSubsetOf: function (e) {
          var t = u(this),
            n = a(e),
            r = n.has;
          return (
            "function" != typeof r && ((n = new (o("Set"))(e)), (r = c(n.has))),
            !s(
              t,
              function (e, t) {
                if (!1 === r.call(n, e)) return t();
              },
              { IS_ITERATOR: !0, INTERRUPTED: !0 }
            ).stopped
          );
        },
      }
    );
  },
  154: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(16),
      a = n(23),
      c = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        isSupersetOf: function (e) {
          var t = o(this),
            n = a(t.has);
          return !c(
            e,
            function (e, r) {
              if (!1 === n.call(t, e)) return r();
            },
            { INTERRUPTED: !0 }
          ).stopped;
        },
      }
    );
  },
  155: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(16),
      a = n(37),
      c = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        join: function (e) {
          var t = o(this),
            n = a(t),
            r = void 0 === e ? "," : String(e),
            i = [];
          return c(n, i.push, { that: i, IS_ITERATOR: !0 }), i.join(r);
        },
      }
    );
  },
  156: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(26),
      a = n(16),
      c = n(23),
      u = n(25),
      s = n(42),
      d = n(37),
      f = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        map: function (e) {
          var t = a(this),
            n = d(t),
            r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
            i = new (s(t, o("Set")))(),
            l = c(i.add);
          return (
            f(
              n,
              function (e) {
                l.call(i, r(e, e, t));
              },
              { IS_ITERATOR: !0 }
            ),
            i
          );
        },
      }
    );
  },
  157: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(16),
      a = n(23),
      c = n(37),
      u = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        reduce: function (e) {
          var t = o(this),
            n = c(t),
            r = arguments.length < 2,
            i = r ? void 0 : arguments[1];
          if (
            (a(e),
            u(
              n,
              function (n) {
                r ? ((r = !1), (i = n)) : (i = e(i, n, n, t));
              },
              { IS_ITERATOR: !0 }
            ),
            r)
          )
            throw TypeError("Reduce of empty set with no initial value");
          return i;
        },
      }
    );
  },
  158: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(16),
      a = n(25),
      c = n(37),
      u = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        some: function (e) {
          var t = o(this),
            n = c(t),
            r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
          return u(
            n,
            function (e, n) {
              if (r(e, e, t)) return n();
            },
            { IS_ITERATOR: !0, INTERRUPTED: !0 }
          ).stopped;
        },
      }
    );
  },
  159: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(26),
      a = n(16),
      c = n(23),
      u = n(42),
      s = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        symmetricDifference: function (e) {
          var t = a(this),
            n = new (u(t, o("Set")))(t),
            r = c(n.delete),
            i = c(n.add);
          return (
            s(e, function (e) {
              r.call(n, e) || i.call(n, e);
            }),
            n
          );
        },
      }
    );
  },
  16: function (e, t, n) {
    var r = n(30);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(String(e) + " is not an object");
      return e;
    };
  },
  160: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(18),
      o = n(26),
      a = n(16),
      c = n(23),
      u = n(42),
      s = n(19);
    r(
      { target: "Set", proto: !0, real: !0, forced: i },
      {
        union: function (e) {
          var t = a(this),
            n = new (u(t, o("Set")))(t);
          return s(e, c(n.add), { that: n }), n;
        },
      }
    );
  },
  161: function (e, t, n) {
    n(97), n(162);
    var r = n(45);
    e.exports = r.Array.from;
  },
  162: function (e, t, n) {
    var r = n(15),
      i = n(163);
    r(
      {
        target: "Array",
        stat: !0,
        forced: !n(166)(function (e) {
          Array.from(e);
        }),
      },
      { from: i }
    );
  },
  163: function (e, t, n) {
    "use strict";
    var r = n(25),
      i = n(52),
      o = n(164),
      a = n(90),
      c = n(53),
      u = n(165),
      s = n(57);
    e.exports = function (e) {
      var t,
        n,
        d,
        f,
        l,
        p,
        g = i(e),
        b = "function" == typeof this ? this : Array,
        v = arguments.length,
        y = v > 1 ? arguments[1] : void 0,
        h = void 0 !== y,
        m = s(g),
        O = 0;
      if (
        (h && (y = r(y, v > 2 ? arguments[2] : void 0, 2)),
        null == m || (b == Array && a(m)))
      )
        for (n = new b((t = c(g.length))); t > O; O++)
          (p = h ? y(g[O], O) : g[O]), u(n, O, p);
      else
        for (l = (f = m.call(g)).next, n = new b(); !(d = l.call(f)).done; O++)
          (p = h ? o(f, y, [d.value, O], !0) : d.value), u(n, O, p);
      return (n.length = O), n;
    };
  },
  164: function (e, t, n) {
    var r = n(16),
      i = n(91);
    e.exports = function (e, t, n, o) {
      try {
        return o ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        throw (i(e), t);
      }
    };
  },
  165: function (e, t, n) {
    "use strict";
    var r = n(62),
      i = n(34),
      o = n(44);
    e.exports = function (e, t, n) {
      var a = r(t);
      a in e ? i.f(e, a, o(0, n)) : (e[a] = n);
    };
  },
  166: function (e, t, n) {
    var r = n(21)("iterator"),
      i = !1;
    try {
      var o = 0,
        a = {
          next: function () {
            return { done: !!o++ };
          },
          return: function () {
            i = !0;
          },
        };
      (a[r] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !i) return !1;
      var n = !1;
      try {
        var o = {};
        (o[r] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(o);
      } catch (e) {}
      return n;
    };
  },
  167: function (e, t) {
    e.exports = function e(t) {
      var n = Array.isArray(t) ? [] : {};
      for (var r in t) {
        var i = t[r];
        n[r] = i && "object" == typeof i ? e(i) : i;
      }
      return n;
    };
  },
  168: function (e, t, n) {
    "use strict";
    t.a = function (e, t, n, r, i) {
      for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
        e = e ? e[t[r]] : i;
      return e === i ? n : e;
    };
  },
  169: function (e, t, n) {
    "use strict";
    t.a = function (e, t, n) {
      t.split && (t = t.split("."));
      for (var r, i = 0, o = t.length, a = e; i < o; ++i)
        (r = a[t[i]]),
          (a = a[t[i]] =
            i === o - 1
              ? n
              : null != r
              ? r
              : !~t[i + 1].indexOf(".") && +t[i + 1] > -1
              ? []
              : {});
    };
  },
  170: function (e, t) {
    /*
     * @license MIT
     * Fun Hooks v0.9.10
     * (c) @snapwich
     */
    (c.SYNC = 1), (c.ASYNC = 2), (c.QUEUE = 4);
    var n = Object.freeze({ useProxy: !0, ready: 0 }),
      r = new WeakMap(),
      i =
        "2,1,0" ===
        [1]
          .reduce(function (e, t, n) {
            return [e, t, n];
          }, 2)
          .toString()
          ? Array.prototype.reduce
          : function (e, t) {
              var n,
                r = Object(this),
                i = r.length >>> 0,
                o = 0;
              if (t) n = t;
              else {
                for (; o < i && !(o in r); ) o++;
                n = r[o++];
              }
              for (; o < i; ) o in r && (n = e(n, r[o], o, r)), o++;
              return n;
            };
    function o(e, t) {
      return Array.prototype.slice.call(e, t);
    }
    var a =
      Object.assign ||
      function (e) {
        return i.call(
          o(arguments, 1),
          function (e, t) {
            return (
              t &&
                Object.keys(t).forEach(function (n) {
                  e[n] = t[n];
                }),
              e
            );
          },
          e
        );
      };
    function c(e) {
      var t,
        u = {},
        s = [];
      function d(e, t) {
        return "function" == typeof e
          ? g.call(null, "sync", e, t)
          : "string" == typeof e && "function" == typeof t
          ? g.apply(null, arguments)
          : "object" == typeof e
          ? f.apply(null, arguments)
          : void 0;
      }
      function f(e, t, n) {
        var r = !0;
        void 0 === t && ((t = Object.getOwnPropertyNames(e)), (r = !1));
        var i = {},
          o = ["constructor"];
        do {
          (t = t.filter(function (t) {
            return !(
              "function" != typeof e[t] ||
              -1 !== o.indexOf(t) ||
              t.match(/^_/)
            );
          })).forEach(function (t) {
            var r = t.split(":"),
              o = r[0],
              a = r[1] || "sync";
            if (!i[o]) {
              var c = e[o];
              i[o] = e[o] = g(a, c, n ? [n, o] : void 0);
            }
          }),
            (e = Object.getPrototypeOf(e));
        } while (r && e);
        return i;
      }
      function l(e) {
        var n = Array.isArray(e) ? e : e.split(".");
        return i.call(
          n,
          function (r, i, o) {
            var a = r[i],
              c = !1;
            return (
              a ||
              (o === n.length - 1
                ? (t ||
                    s.push(function () {
                      c ||
                        console.warn(
                          "fun-hooks: referenced '" +
                            e +
                            "' but it was never created"
                        );
                    }),
                  (r[i] = p(function (e) {
                    (r[i] = e), (c = !0);
                  })))
                : (r[i] = {}))
            );
          },
          u
        );
      }
      function p(e) {
        var t = [],
          n = [],
          i = function () {},
          o = {
            before: function (e, n) {
              return u.call(this, t, "before", e, n);
            },
            after: function (e, t) {
              return u.call(this, n, "after", e, t);
            },
            getHooks: function (e) {
              var r = t.concat(n);
              "object" == typeof e &&
                (r = r.filter(function (t) {
                  return Object.keys(e).every(function (n) {
                    return t[n] === e[n];
                  });
                }));
              try {
                a(r, {
                  remove: function () {
                    return (
                      r.forEach(function (e) {
                        e.remove();
                      }),
                      this
                    );
                  },
                });
              } catch (e) {
                console.error(
                  "error adding `remove` to array, did you modify Array.prototype?"
                );
              }
              return r;
            },
            removeAll: function () {
              return this.getHooks().remove();
            },
          },
          c = {
            install: function (r, o, a) {
              (this.type = r), (i = a), a(t, n), e && e(o);
            },
          };
        return r.set(o.after, c), o;
        function u(e, r, o, a) {
          var c = {
            hook: o,
            type: r,
            priority: a || 10,
            remove: function () {
              var r = e.indexOf(c);
              -1 !== r && (e.splice(r, 1), i(t, n));
            },
          };
          return (
            e.push(c),
            e.sort(function (e, t) {
              return t.priority - e.priority;
            }),
            i(t, n),
            this
          );
        }
      }
      function g(n, i, u) {
        var d = i.after && r.get(i.after);
        if (d) {
          if (d.type !== n)
            throw "fun-hooks: recreated hookable with different type";
          return i;
        }
        var f,
          g,
          b = u ? l(u) : p(),
          v = {
            get: function (e, t) {
              return b[t] || Reflect.get.apply(Reflect, arguments);
            },
          };
        return (
          t || s.push(y),
          e.useProxy && "function" == typeof Proxy && Proxy.revocable
            ? (g = new Proxy(i, v))
            : a(
                (g = function () {
                  return v.apply
                    ? v.apply(i, this, o(arguments))
                    : i.apply(this, arguments);
                }),
                b
              ),
          r.get(g.after).install(n, g, function (e, t) {
            var r,
              i = [];
            e.length || t.length
              ? (e.forEach(a),
                (r = i.push(void 0) - 1),
                t.forEach(a),
                (f = function (e, t, a) {
                  var c,
                    u = 0,
                    s =
                      "async" === n &&
                      "function" == typeof a[a.length - 1] &&
                      a.pop();
                  function d(e) {
                    "sync" === n ? (c = e) : s && s.apply(null, arguments);
                  }
                  function f(e) {
                    if (i[u]) {
                      var r = o(arguments);
                      return (f.bail = d), r.unshift(f), i[u++].apply(t, r);
                    }
                    "sync" === n ? (c = e) : s && s.apply(null, arguments);
                  }
                  return (
                    (i[r] = function () {
                      var r = o(arguments, 1);
                      "async" === n && s && (delete f.bail, r.push(f));
                      var i = e.apply(t, r);
                      "sync" === n && f(i);
                    }),
                    f.apply(null, a),
                    c
                  );
                }))
              : (f = void 0);
            function a(e) {
              i.push(e.hook);
            }
            y();
          }),
          g
        );
        function y() {
          !t &&
          ("sync" !== n || e.ready & c.SYNC) &&
          ("async" !== n || e.ready & c.ASYNC)
            ? "sync" !== n && e.ready & c.QUEUE
              ? (v.apply = function () {
                  var e = arguments;
                  s.push(function () {
                    g.apply(e[1], e[2]);
                  });
                })
              : (v.apply = function () {
                  throw "fun-hooks: hooked function not ready";
                })
            : (v.apply = f);
        }
      }
      return (
        (e = a({}, n, e)).ready
          ? (d.ready = function () {
              (t = !0),
                (function (e) {
                  for (var t; (t = e.shift()); ) t();
                })(s);
            })
          : (t = !0),
        (d.get = l),
        d
      );
    }
    e.exports = c;
  },
  18: function (e, t) {
    e.exports = !0;
  },
  19: function (e, t, n) {
    var r = n(16),
      i = n(90),
      o = n(53),
      a = n(25),
      c = n(57),
      u = n(91),
      s = function (e, t) {
        (this.stopped = e), (this.result = t);
      };
    e.exports = function (e, t, n) {
      var d,
        f,
        l,
        p,
        g,
        b,
        v,
        y = n && n.that,
        h = !(!n || !n.AS_ENTRIES),
        m = !(!n || !n.IS_ITERATOR),
        O = !(!n || !n.INTERRUPTED),
        j = a(t, y, 1 + h + O),
        S = function (e) {
          return d && u(d), new s(!0, e);
        },
        E = function (e) {
          return h
            ? (r(e), O ? j(e[0], e[1], S) : j(e[0], e[1]))
            : O
            ? j(e, S)
            : j(e);
        };
      if (m) d = e;
      else {
        if ("function" != typeof (f = c(e)))
          throw TypeError("Target is not iterable");
        if (i(f)) {
          for (l = 0, p = o(e.length); p > l; l++)
            if ((g = E(e[l])) && g instanceof s) return g;
          return new s(!1);
        }
        d = f.call(e);
      }
      for (b = d.next; !(v = b.call(d)).done; ) {
        try {
          g = E(v.value);
        } catch (e) {
          throw (u(d), e);
        }
        if ("object" == typeof g && g && g instanceof s) return g;
      }
      return new s(!1);
    };
  },
  2: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "a", function () {
        return a;
      });
    var r = "native",
      i = "video",
      o = "banner",
      a = "adpod";
  },
  20: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(3),
      i = n(0);
    var o = (function (e) {
      function t(e) {
        var t = r.b.getConfig("pageUrl");
        if (t) return t;
        try {
          var n = e.querySelector("link[rel='canonical']");
          if (null !== n) return n.href;
        } catch (e) {}
        return null;
      }
      return function () {
        var n,
          o,
          a,
          c = [],
          u = (function (e) {
            try {
              if (!e.location.ancestorOrigins) return;
              return e.location.ancestorOrigins;
            } catch (e) {}
          })(e),
          s = r.b.getConfig("maxNestedIframes"),
          d = !1,
          f = 0,
          l = !1,
          p = !1;
        do {
          var g = n,
            b = p,
            v = void 0,
            y = !1,
            h = null;
          (p = !1), (n = n ? n.parent : e);
          try {
            v = n.location.href || null;
          } catch (e) {
            y = !0;
          }
          if (y)
            if (b) {
              var m = g.context;
              try {
                (o = h = m.sourceUrl),
                  (l = !0),
                  n === e.top && (d = !0),
                  m.canonicalUrl && (a = m.canonicalUrl);
              } catch (e) {}
            } else {
              Object(i.logWarn)(
                "Trying to access cross domain iframe. Continuing without referrer and location"
              );
              try {
                var O = g.document.referrer;
                O && ((h = O), n === e.top && (d = !0));
              } catch (e) {}
              !h && u && u[f - 1] && (h = u[f - 1]), h && !l && (o = h);
            }
          else {
            if (v && ((o = h = v), (l = !1), n === e.top)) {
              d = !0;
              var j = t(n.document);
              j && (a = j);
            }
            n.context && n.context.sourceUrl && (p = !0);
          }
          c.push(h), f++;
        } while (n !== e.top && f < s);
        return (
          c.reverse(),
          {
            referer: o || null,
            reachedTop: d,
            isAmp: l,
            numIframes: f - 1,
            stack: c,
            canonicalUrl: a || null,
          }
        );
      };
    })(window);
  },
  21: function (e, t, n) {
    var r = n(27),
      i = n(85),
      o = n(31),
      a = n(66),
      c = n(86),
      u = n(115),
      s = i("wks"),
      d = r.Symbol,
      f = u ? d : (d && d.withoutSetter) || a;
    e.exports = function (e) {
      return (
        (o(s, e) && (c || "string" == typeof s[e])) ||
          (c && o(d, e) ? (s[e] = d[e]) : (s[e] = f("Symbol." + e))),
        s[e]
      );
    };
  },
  22: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    });
    var r = n(0),
      i = n(28),
      o = n(11),
      a = n.n(o),
      c = n(5);
    var u = (function () {
      var e = [],
        t = {};
      return (
        (t.addWinningBid = function (t) {
          var n = a()(e, function (e) {
            return e.getAuctionId() === t.auctionId;
          });
          n
            ? ((t.status = c.BID_STATUS.RENDERED), n.addWinningBid(t))
            : Object(r.logWarn)("Auction not found when adding winning bid");
        }),
        (t.getAllWinningBids = function () {
          return e
            .map(function (e) {
              return e.getWinningBids();
            })
            .reduce(r.flatten, []);
        }),
        (t.getBidsRequested = function () {
          return e
            .map(function (e) {
              return e.getBidRequests();
            })
            .reduce(r.flatten, []);
        }),
        (t.getNoBids = function () {
          return e
            .map(function (e) {
              return e.getNoBids();
            })
            .reduce(r.flatten, []);
        }),
        (t.getBidsReceived = function () {
          return e
            .map(function (e) {
              if (e.getAuctionStatus() === i.a) return e.getBidsReceived();
            })
            .reduce(r.flatten, [])
            .filter(function (e) {
              return e;
            });
        }),
        (t.getAllBidsForAdUnitCode = function (t) {
          return e
            .map(function (e) {
              return e.getBidsReceived();
            })
            .reduce(r.flatten, [])
            .filter(function (e) {
              return e && e.adUnitCode === t;
            });
        }),
        (t.getAdUnits = function () {
          return e
            .map(function (e) {
              return e.getAdUnits();
            })
            .reduce(r.flatten, []);
        }),
        (t.getAdUnitCodes = function () {
          return e
            .map(function (e) {
              return e.getAdUnitCodes();
            })
            .reduce(r.flatten, [])
            .filter(r.uniques);
        }),
        (t.createAuction = function (t) {
          var n = t.adUnits,
            r = t.adUnitCodes,
            o = t.callback,
            a = t.cbTimeout,
            c = t.labels,
            u = t.auctionId,
            s = Object(i.k)({
              adUnits: n,
              adUnitCodes: r,
              callback: o,
              cbTimeout: a,
              labels: c,
              auctionId: u,
            });
          return (
            (function (t) {
              e.push(t);
            })(s),
            s
          );
        }),
        (t.findBidByAdId = function (t) {
          return a()(
            e
              .map(function (e) {
                return e.getBidsReceived();
              })
              .reduce(r.flatten, []),
            function (e) {
              return e.adId === t;
            }
          );
        }),
        (t.getStandardBidderAdServerTargeting = function () {
          return Object(i.j)()[c.JSON_MAPPING.ADSERVER_TARGETING];
        }),
        (t.setStatusForBids = function (n, r) {
          var i = t.findBidByAdId(n);
          if (
            (i && (i.status = r), i && r === c.BID_STATUS.BID_TARGETING_SET)
          ) {
            var o = a()(e, function (e) {
              return e.getAuctionId() === i.auctionId;
            });
            o && o.setBidTargeting(i);
          }
        }),
        (t.getLastAuctionId = function () {
          return e.length && e[e.length - 1].getAuctionId();
        }),
        (t.clearAllAuctions = function () {
          e.length = 0;
        }),
        t
      );
    })();
  },
  220: function (e, t, n) {
    n(221);
    var r = n(55);
    e.exports = r("Array", "findIndex");
  },
  221: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(63).findIndex,
      o = n(54),
      a = "findIndex",
      c = !0;
    a in [] &&
      Array(1).findIndex(function () {
        c = !1;
      }),
      r(
        { target: "Array", proto: !0, forced: c },
        {
          findIndex: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      o(a);
  },
  228: function (e, t, n) {
    "use strict";
    t.a = function () {
      window.addEventListener("message", h, !1);
    };
    var r = n(10),
      i = n.n(r),
      o = n(38),
      a = n(5),
      c = n.n(a),
      u = n(0),
      s = n(22),
      d = n(11),
      f = n.n(d),
      l = n(13),
      p = n(12),
      g = n.n(p),
      b = n(3),
      v = c.a.EVENTS.BID_WON,
      y = c.a.EVENTS.STALE_RENDER;
    function h(e) {
      var t = e.message ? "message" : "data",
        n = {};
      try {
        n = JSON.parse(e[t]);
      } catch (e) {
        return;
      }
      if (n && n.adId) {
        var r = f()(s.a.getBidsReceived(), function (e) {
          return e.adId === n.adId;
        });
        if (r && "Prebid Request" === n.message) {
          if (
            r.status === c.a.BID_STATUS.RENDERED &&
            (Object(u.logWarn)(
              "Ad id ".concat(r.adId, " has been rendered before")
            ),
            i.a.emit(y, r),
            Object(u.deepAccess)(
              b.b.getConfig("auctionOptions"),
              "suppressStaleRender"
            ))
          )
            return;
          !(function (e, t) {
            var n = e.adId,
              r = e.ad,
              i = e.adUrl,
              o = e.width,
              a = e.height,
              c = e.renderer,
              s = e.cpm;
            Object(l.c)(c)
              ? Object(l.b)(c, e)
              : n &&
                (m(e),
                t.source.postMessage(
                  JSON.stringify({
                    message: "Prebid Response",
                    ad: Object(u.replaceAuctionPrice)(r, s),
                    adUrl: Object(u.replaceAuctionPrice)(i, s),
                    adId: n,
                    width: o,
                    height: a,
                  }),
                  t.origin
                ));
          })(r, e),
            s.a.addWinningBid(r),
            i.a.emit(v, r);
        }
        if (r && "Prebid Native" === n.message) {
          if ("assetRequest" === n.action) {
            var a = Object(o.d)(n, r);
            return void e.source.postMessage(JSON.stringify(a), e.origin);
          }
          if ("allAssetRequest" === n.action) {
            var d = Object(o.c)(n, r);
            e.source.postMessage(JSON.stringify(d), e.origin);
          } else
            "resizeNativeHeight" === n.action &&
              ((r.height = n.height), (r.width = n.width), m(r));
          if ("click" === Object(o.b)(n, r)) return;
          s.a.addWinningBid(r), i.a.emit(v, r);
        }
      }
    }
    function m(e) {
      var t = e.adId,
        n = e.adUnitCode,
        r = e.width,
        i = e.height;
      ["div", "iframe"].forEach(function (e) {
        var o = (function (e) {
          var r = (function (e, t) {
              return Object(u.isGptPubadsDefined)()
                ? (function (e) {
                    return f()(
                      window.googletag.pubads().getSlots(),
                      function (t) {
                        return f()(t.getTargetingKeys(), function (n) {
                          return g()(t.getTargeting(n), e);
                        });
                      }
                    ).getSlotElementId();
                  })(e)
                : Object(u.isApnGetTagDefined)()
                ? (function (e) {
                    var t = window.apntag.getTag(e);
                    return t && t.targetId;
                  })(t)
                : t;
            })(t, n),
            i = document.getElementById(r);
          return i && i.querySelector(e);
        })(e + ':not([style*="display: none"])');
        if (o) {
          var a = o.style;
          (a.width = r + "px"), (a.height = i + "px");
        } else Object(u.logWarn)("Unable to locate matching page element for adUnitCode ".concat(n, ".  Can't resize it to ad's dimensions.  Please review setup."));
      });
    }
  },
  229: function (e, t, n) {
    "use strict";
    t.a = function (e) {
      var t;
      try {
        (e = e || window.sessionStorage), (t = JSON.parse(e.getItem(u)));
      } catch (e) {}
      t && p(t, !0);
    };
    var r,
      i,
      o = n(3),
      a = n(0),
      c = n(28),
      u = "pbjs:debugging";
    function s(e) {
      Object(a.logMessage)("DEBUG: " + e);
    }
    function d(e) {
      Object(a.logWarn)("DEBUG: " + e);
    }
    function f(e) {
      (r = y.bind(e)), c.c.before(r, 5), (i = h.bind(e)), c.e.before(i, 5);
    }
    function l() {
      c.c.getHooks({ hook: r }).remove(), c.e.getHooks({ hook: i }).remove();
    }
    function p(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      o.b.setConfig({ debug: !0 }),
        l(),
        f(e),
        s("bidder overrides enabled".concat(t ? " from session" : ""));
    }
    function g(e, t, n) {
      return (
        !(!e.bidder || e.bidder === t) || !(!e.adUnitCode || e.adUnitCode === n)
      );
    }
    function b(e, t) {
      return Array.isArray(e) && -1 === e.indexOf(t);
    }
    function v(e, t, n) {
      return Object.keys(e)
        .filter(function (e) {
          return -1 === ["adUnitCode", "bidder"].indexOf(e);
        })
        .reduce(function (t, r) {
          return (
            s(
              "bidder overrides changed '"
                .concat(t.adUnitCode, "/")
                .concat(t.bidderCode, "' ")
                .concat(n, ".")
                .concat(r, " from '")
                .concat(t[r], ".js' to '")
                .concat(e[r], "'")
            ),
            (t[r] = e[r]),
            t
          );
        }, t);
    }
    function y(e, t, n) {
      var r = this;
      b(r.bidders, n.bidderCode)
        ? d(
            "bidder '".concat(
              n.bidderCode,
              "' excluded from auction by bidder overrides"
            )
          )
        : (Array.isArray(r.bids) &&
            r.bids.forEach(function (e) {
              g(e, n.bidderCode, t) || v(e, n, "bidder");
            }),
          e(t, n));
    }
    function h(e, t) {
      var n = this,
        r = t.filter(function (e) {
          return (
            !b(n.bidders, e.bidderCode) ||
            (d(
              "bidRequest '".concat(
                e.bidderCode,
                "' excluded from auction by bidder overrides"
              )
            ),
            !1)
          );
        });
      Array.isArray(n.bidRequests) &&
        r.forEach(function (e) {
          n.bidRequests.forEach(function (t) {
            e.bids.forEach(function (n) {
              g(t, e.bidderCode, n.adUnitCode) || v(t, n, "bidRequest");
            });
          });
        }),
        e(r);
    }
    function m(e) {
      if (e.enabled) {
        try {
          window.sessionStorage.setItem(u, JSON.stringify(e));
        } catch (e) {}
        p(e);
      } else {
        l(), s("bidder overrides disabled");
        try {
          window.sessionStorage.removeItem(u);
        } catch (e) {}
      }
    }
    o.b.getConfig("debugging", function (e) {
      return m(e.debugging);
    });
  },
  23: function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function");
      return e;
    };
  },
  24: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return u;
      }),
      (t.d = function (e, t) {
        var n = Object(r.getBidRequest)(e.requestId, t),
          i = n && Object(r.deepAccess)(n, "mediaTypes.video"),
          o = i && Object(r.deepAccess)(i, "context");
        return s(e, n, i, o);
      }),
      n.d(t, "c", function () {
        return s;
      });
    n(8);
    var r = n(0),
      i = n(3),
      o = n(12),
      a = (n.n(o), n(9)),
      c = "outstream",
      u = "instream";
    var s = Object(a.b)(
      "sync",
      function (e, t, n, o) {
        return !t || (n && o !== c)
          ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl
            ? !(!e.vastUrl && !e.vastXml)
            : (Object(r.logError)(
                '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
              ),
              !1)
          : o !== c || !!(e.renderer || t.renderer || n.renderer);
      },
      "checkVideoBidSetup"
    );
  },
  25: function (e, t, n) {
    var r = n(23);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  26: function (e, t, n) {
    var r = n(45),
      i = n(27),
      o = function (e) {
        return "function" == typeof e ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2
        ? o(r[e]) || o(i[e])
        : (r[e] && r[e][t]) || (i[e] && i[e][t]);
    };
  },
  27: function (e, t, n) {
    (function (t) {
      var n = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof t && t) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(t, n(40)));
  },
  28: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return E;
    }),
      n.d(t, "a", function () {
        return A;
      }),
      (t.k = function (e) {
        var t,
          n,
          o,
          a,
          s = e.adUnits,
          d = e.adUnitCodes,
          f = e.callback,
          p = e.cbTimeout,
          v = e.labels,
          U = e.auctionId,
          k = s,
          N = v,
          P = d,
          M = [],
          G = [],
          L = [],
          W = U || Object(r.generateUUID)(),
          F = f,
          z = p,
          V = [],
          H = new Set();
        function K() {
          return {
            auctionId: W,
            timestamp: t,
            auctionEnd: n,
            auctionStatus: o,
            adUnits: k,
            adUnitCodes: P,
            labels: N,
            bidderRequests: M,
            noBids: L,
            bidsReceived: G,
            winningBids: V,
            timeout: z,
          };
        }
        function J(e, t) {
          if ((t && clearTimeout(a), void 0 === n)) {
            var i = [];
            e &&
              (Object(r.logMessage)("Auction ".concat(W, " timedOut")),
              (c = H),
              (i = M.map(function (e) {
                return (e.bids || []).filter(function (e) {
                  return !c.has(e.bidder);
                });
              })
                .reduce(r.flatten, [])
                .map(function (e) {
                  return {
                    bidId: e.bidId,
                    bidder: e.bidder,
                    adUnitCode: e.adUnitCode,
                    auctionId: e.auctionId,
                  };
                })).length && j.emit(S.EVENTS.BID_TIMEOUT, i)),
              (o = A),
              (n = Date.now()),
              j.emit(S.EVENTS.AUCTION_END, K()),
              R(k, function () {
                try {
                  if (null != F) {
                    var t = P,
                      n = G.filter(
                        r.bind.call(r.adUnitsFilter, this, t)
                      ).reduce(q, {});
                    F.apply(pbjs, [n, e, W]), (F = null);
                  }
                } catch (e) {
                  Object(r.logError)(
                    "Error executing bidsBackHandler",
                    null,
                    e
                  );
                } finally {
                  i.length && O.callTimedOutBidders(s, i, z);
                  var o = u.b.getConfig("userSync") || {};
                  o.enableOverride || m(o.syncDelay);
                }
              });
          }
          var c;
        }
        function Y() {
          u.b.resetBidder(),
            Object(r.logInfo)(
              "Bids Received for Auction with id: ".concat(W),
              G
            ),
            (o = A),
            J(!1, !0);
        }
        function Q(e) {
          H.add(e);
        }
        function $(e) {
          var t = this;
          e.forEach(function (e) {
            var t;
            (t = e), (M = M.concat(t));
          });
          var n = {},
            s = {
              bidRequests: e,
              run: function () {
                var s, p;
                (s = J.bind(null, !0)),
                  (p = setTimeout(s, z)),
                  (a = p),
                  (o = E),
                  j.emit(S.EVENTS.AUCTION_INIT, K());
                var v = (function (e, t) {
                  var n = 0,
                    o = !1,
                    a = new Set(),
                    s = {};
                  function d() {
                    n--, o && 0 === n && e();
                  }
                  function f(e, o) {
                    var a = this;
                    (s[o.requestId] = !0), n++;
                    var f = (function (e) {
                      var t = e.adUnitCode,
                        n = e.bid,
                        o = e.bidderRequest,
                        a = e.auctionId,
                        s = o.start,
                        d = h({}, n, {
                          auctionId: a,
                          responseTimestamp: Object(r.timestamp)(),
                          requestTimestamp: s,
                          cpm: parseFloat(n.cpm) || 0,
                          bidder: n.bidderCode,
                          adUnitCode: t,
                        });
                      (d.timeToRespond =
                        d.responseTimestamp - d.requestTimestamp),
                        j.emit(S.EVENTS.BID_ADJUSTMENT, d);
                      var f =
                          o.bids &&
                          l()(o.bids, function (e) {
                            return e.adUnitCode == t && e.bidId == d.requestId;
                          }),
                        p = f && f.renderer,
                        g = d.mediaType,
                        b = f && f.mediaTypes && f.mediaTypes[g],
                        v = b && b.renderer,
                        m = null;
                      v &&
                      v.url &&
                      v.render &&
                      (!0 !== v.backupOnly || !n.renderer)
                        ? (m = v)
                        : p &&
                          p.url &&
                          p.render &&
                          (!0 !== p.backupOnly || !n.renderer) &&
                          (m = p);
                      m &&
                        ((d.renderer = c.a.install({ url: m.url })),
                        d.renderer.setRender(m.render));
                      var O = D(
                          n.mediaType,
                          f,
                          u.b.getConfig("mediaTypePriceGranularity")
                        ),
                        E = Object(i.a)(
                          d.cpm,
                          "object" === y(O)
                            ? O
                            : u.b.getConfig("customPriceBucket"),
                          u.b.getConfig("currency.granularityMultiplier")
                        );
                      return (
                        (d.pbLg = E.low),
                        (d.pbMg = E.med),
                        (d.pbHg = E.high),
                        (d.pbAg = E.auto),
                        (d.pbDg = E.dense),
                        (d.pbCg = E.custom),
                        d
                      );
                    })({
                      adUnitCode: e,
                      bid: o,
                      bidderRequest: a,
                      auctionId: t.getAuctionId(),
                    });
                    "video" === f.mediaType
                      ? (function (e, t, n, i) {
                          var o = !0,
                            a = Object(r.getBidRequest)(
                              t.originalRequestId || t.requestId,
                              [n]
                            ),
                            c =
                              a && Object(r.deepAccess)(a, "mediaTypes.video"),
                            s = c && Object(r.deepAccess)(c, "context");
                          u.b.getConfig("cache.url") &&
                            s !== b.b &&
                            (!t.videoCacheKey ||
                            u.b.getConfig("cache.ignoreBidderCacheKey")
                              ? ((o = !1), x(e, t, i, a))
                              : t.vastUrl ||
                                (Object(r.logError)(
                                  "videoCacheKey specified but not required vastUrl for video bid"
                                ),
                                (o = !1)));
                          o && (B(e, t), i());
                        })(t, f, a, d)
                      : (B(t, f), d());
                  }
                  function p() {
                    var i = this,
                      c = t.getBidRequests(),
                      d = u.b.getConfig("auctionOptions");
                    if ((a.add(i), d && !Object(r.isEmpty)(d))) {
                      var f = d.secondaryBidders;
                      f &&
                        !c.every(function (e) {
                          return g()(f, e.bidderCode);
                        }) &&
                        (c = c.filter(function (e) {
                          return !g()(f, e.bidderCode);
                        }));
                    }
                    (o = c.every(function (e) {
                      return a.has(e);
                    })),
                      i.bids.forEach(function (e) {
                        s[e.bidId] ||
                          (t.addNoBid(e), j.emit(S.EVENTS.NO_BID, e));
                      }),
                      o && 0 === n && e();
                  }
                  return { addBidResponse: f, adapterDone: p };
                })(Y, t);
                O.callBids(
                  k,
                  e,
                  function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    C.apply(
                      { dispatch: v.addBidResponse, bidderRequest: this },
                      t
                    );
                  },
                  v.adapterDone,
                  {
                    request: function (e, t) {
                      f(T, t),
                        f(n, e),
                        I[e] || (I[e] = { SRA: !0, origin: t }),
                        n[e] > 1 && (I[e].SRA = !1);
                    },
                    done: function (e) {
                      T[e]--, w[0] && d(w[0]) && w.shift();
                    },
                  },
                  z,
                  Q
                );
              },
            };
          function d(e) {
            var t = !0,
              n = u.b.getConfig("maxRequestsPerOrigin") || 4;
            return (
              e.bidRequests.some(function (e) {
                var r = 1,
                  i =
                    void 0 !== e.src && e.src === S.S2S.SRC
                      ? "s2s"
                      : e.bidderCode;
                return (
                  I[i] &&
                    (!1 === I[i].SRA && (r = Math.min(e.bids.length, n)),
                    T[I[i].origin] + r > n && (t = !1)),
                  !t
                );
              }),
              t && e.run(),
              t
            );
          }
          function f(e, t) {
            void 0 === e[t] ? (e[t] = 1) : e[t]++;
          }
          d(s) ||
            (Object(r.logWarn)(
              "queueing auction due to limited endpoint capacity"
            ),
            w.push(s));
        }
        return {
          addBidReceived: function (e) {
            G = G.concat(e);
          },
          addNoBid: function (e) {
            L = L.concat(e);
          },
          executeCallback: J,
          callBids: function () {
            (o = "started"), (t = Date.now());
            var e = O.makeBidRequests(k, t, W, z, N);
            Object(r.logInfo)(
              "Bids Requested for Auction with id: ".concat(W),
              e
            ),
              e.length < 1
                ? (Object(r.logWarn)(
                    "No valid bid requests returned for auction"
                  ),
                  Y())
                : _.call({ dispatch: $, context: this }, e);
          },
          addWinningBid: function (e) {
            (V = V.concat(e)), O.callBidWonBidder(e.bidder, e, s);
          },
          setBidTargeting: function (e) {
            O.callSetTargetingBidder(e.bidder, e);
          },
          getWinningBids: function () {
            return V;
          },
          getTimeout: function () {
            return z;
          },
          getAuctionId: function () {
            return W;
          },
          getAuctionStatus: function () {
            return o;
          },
          getAdUnits: function () {
            return k;
          },
          getAdUnitCodes: function () {
            return P;
          },
          getBidRequests: function () {
            return M;
          },
          getBidsReceived: function () {
            return G;
          },
          getNoBids: function () {
            return L;
          },
        };
      }),
      n.d(t, "c", function () {
        return C;
      }),
      n.d(t, "e", function () {
        return _;
      }),
      (t.g = U),
      (t.d = B),
      n.d(t, "f", function () {
        return x;
      }),
      n.d(t, "i", function () {
        return k;
      }),
      n.d(t, "h", function () {
        return N;
      }),
      (t.j = P);
    var r = n(0),
      i = n(48),
      o = n(38),
      a = n(101),
      c = n(13),
      u = n(3),
      s = n(60),
      d = n(9),
      f = n(11),
      l = n.n(f),
      p = n(12),
      g = n.n(p),
      b = n(24),
      v = n(2);
    function y(e) {
      return (y =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function h() {
      return (h =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var m = s.a.syncUsers,
      O = n(8).default,
      j = n(10),
      S = n(5),
      E = "inProgress",
      A = "completed";
    j.on(S.EVENTS.BID_ADJUSTMENT, function (e) {
      !(function (e) {
        var t,
          n = e.bidderCode,
          i = e.cpm;
        if (
          pbjs.bidderSettings &&
          (n &&
          pbjs.bidderSettings[n] &&
          "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment
            ? (t = pbjs.bidderSettings[n].bidCpmAdjustment)
            : pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD] &&
              "function" ==
                typeof pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD]
                  .bidCpmAdjustment &&
              (t =
                pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD]
                  .bidCpmAdjustment),
          t)
        )
          try {
            i = t(e.cpm, h({}, e));
          } catch (e) {
            Object(r.logError)(
              "Error during bid adjustment",
              "bidmanager.js",
              e
            );
          }
        i >= 0 && (e.cpm = i);
      })(e);
    });
    var T = {},
      I = {},
      w = [];
    var C = Object(d.b)(
        "async",
        function (e, t) {
          this.dispatch.call(this.bidderRequest, e, t);
        },
        "addBidResponse"
      ),
      _ = Object(d.b)(
        "sync",
        function (e) {
          this.dispatch.call(this.context, e);
        },
        "addBidderRequests"
      ),
      R = Object(d.b)(
        "async",
        function (e, t) {
          t && t();
        },
        "bidsBackCallback"
      );
    function U(e, t) {
      t.timeToRespond > e.getTimeout() + u.b.getConfig("timeoutBuffer") &&
        e.executeCallback(!0);
    }
    function B(e, t) {
      var n = e.getBidRequests(),
        r = l()(n, function (e) {
          return e.bidderCode === t.bidderCode;
        });
      !(function (e, t) {
        var n;
        if (e.bidderCode && (e.cpm > 0 || e.dealId)) {
          var r = l()(t.bids, function (t) {
            return t.adUnitCode === e.adUnitCode;
          });
          n = (function (e, t, n) {
            if (!t) return {};
            var r = {},
              i = pbjs.bidderSettings;
            if (i) {
              M(r, P(t.mediaType, e, n), t),
                e &&
                  i[e] &&
                  i[e][S.JSON_MAPPING.ADSERVER_TARGETING] &&
                  (M(r, i[e], t),
                  (t.sendStandardTargeting = i[e].sendStandardTargeting));
            }
            t.native && (r = h({}, r, Object(o.e)(t, n)));
            return r;
          })(e.bidderCode, e, r);
        }
        e.adserverTargeting = h(e.adserverTargeting || {}, n);
      })(t, r),
        j.emit(S.EVENTS.BID_RESPONSE, t),
        e.addBidReceived(t),
        U(e, t);
    }
    var x = Object(d.b)(
      "async",
      function (e, t, n, i) {
        Object(a.b)(
          [t],
          function (i, o) {
            i
              ? (Object(r.logWarn)(
                  "Failed to save to the video cache: ".concat(
                    i,
                    ". Video bid must be discarded."
                  )
                ),
                U(e, t))
              : "" === o[0].uuid
              ? (Object(r.logWarn)(
                  "Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."
                ),
                U(e, t))
              : ((t.videoCacheKey = o[0].uuid),
                t.vastUrl || (t.vastUrl = Object(a.a)(t.videoCacheKey)),
                B(e, t),
                n());
          },
          i
        );
      },
      "callPrebidCache"
    );
    function D(e, t, n) {
      if (e && n) {
        if (e === v.d) {
          var i = Object(r.deepAccess)(
            t,
            "mediaTypes.".concat(v.d, ".context"),
            "instream"
          );
          if (n["".concat(v.d, "-").concat(i)])
            return n["".concat(v.d, "-").concat(i)];
        }
        return n[e];
      }
    }
    var k = function (e, t) {
        var n = D(e, t, u.b.getConfig("mediaTypePriceGranularity"));
        return "string" == typeof e && n
          ? "string" == typeof n
            ? n
            : "custom"
          : u.b.getConfig("priceGranularity");
      },
      N = function (e) {
        return function (t) {
          return e === S.GRANULARITY_OPTIONS.AUTO
            ? t.pbAg
            : e === S.GRANULARITY_OPTIONS.DENSE
            ? t.pbDg
            : e === S.GRANULARITY_OPTIONS.LOW
            ? t.pbLg
            : e === S.GRANULARITY_OPTIONS.MEDIUM
            ? t.pbMg
            : e === S.GRANULARITY_OPTIONS.HIGH
            ? t.pbHg
            : e === S.GRANULARITY_OPTIONS.CUSTOM
            ? t.pbCg
            : void 0;
        };
      };
    function P(e, t, n) {
      function i(e, t) {
        return {
          key: e,
          val:
            "function" == typeof t
              ? function (e) {
                  return t(e);
                }
              : function (e) {
                  return Object(r.getValue)(e, t);
                },
        };
      }
      var o = S.TARGETING_KEYS,
        a = k(e, n),
        c = pbjs.bidderSettings;
      if (
        (c[S.JSON_MAPPING.BD_SETTING_STANDARD] ||
          (c[S.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
        c[S.JSON_MAPPING.BD_SETTING_STANDARD][
          S.JSON_MAPPING.ADSERVER_TARGETING
        ] ||
          (c[S.JSON_MAPPING.BD_SETTING_STANDARD][
            S.JSON_MAPPING.ADSERVER_TARGETING
          ] = [
            i(o.BIDDER, "bidderCode"),
            i(o.AD_ID, "adId"),
            i(o.PRICE_BUCKET, N(a)),
            i(o.SIZE, "size"),
            i(o.DEAL, "dealId"),
            i(o.SOURCE, "source"),
            i(o.FORMAT, "mediaType"),
            i(o.ADOMAIN, function (e) {
              return e.meta &&
                e.meta.advertiserDomains &&
                e.meta.advertiserDomains.length > 0
                ? e.meta.advertiserDomains[0]
                : "";
            }),
          ]),
        "video" === e)
      ) {
        var s =
          c[S.JSON_MAPPING.BD_SETTING_STANDARD][
            S.JSON_MAPPING.ADSERVER_TARGETING
          ];
        if (
          ([o.UUID, o.CACHE_ID].forEach(function (e) {
            void 0 ===
              l()(s, function (t) {
                return t.key === e;
              }) && s.push(i(e, "videoCacheKey"));
          }),
          u.b.getConfig("cache.url") &&
            (!t ||
              !1 !==
                Object(r.deepAccess)(
                  c,
                  "".concat(t, ".sendStandardTargeting")
                )))
        ) {
          var d = Object(r.parseUrl)(u.b.getConfig("cache.url"));
          void 0 ===
            l()(s, function (e) {
              return e.key === o.CACHE_HOST;
            }) &&
            s.push(
              i(o.CACHE_HOST, function (e) {
                return Object(r.deepAccess)(
                  e,
                  "adserverTargeting.".concat(o.CACHE_HOST)
                )
                  ? e.adserverTargeting[o.CACHE_HOST]
                  : d.hostname;
              })
            );
        }
      }
      return c[S.JSON_MAPPING.BD_SETTING_STANDARD];
    }
    function M(e, t, n) {
      var i = t[S.JSON_MAPPING.ADSERVER_TARGETING];
      return (
        (n.size = n.getSize()),
        Object(r._each)(i, function (i) {
          var o = i.key,
            a = i.val;
          if (
            (e[o] &&
              Object(r.logWarn)("The key: " + o + " is getting ovewritten"),
            Object(r.isFn)(a))
          )
            try {
              a = a(n);
            } catch (e) {
              Object(r.logError)("bidmanager", "ERROR", e);
            }
          ((void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) &&
            o !== S.TARGETING_KEYS.DEAL) ||
          (!Object(r.isEmptyStr)(a) && null != a)
            ? (e[o] = a)
            : Object(r.logInfo)(
                "suppressing empty key '" + o + "' from adserver targeting"
              );
        }),
        e
      );
    }
    function q(e, t) {
      return (
        e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }),
        e[t.adUnitCode].bids.push(t),
        e
      );
    }
  },
  29: function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  3: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return O;
    }),
      n.d(t, "b", function () {
        return A;
      });
    var r = n(48),
      i = n(11),
      o = n.n(i),
      a = n(12),
      c = n.n(a),
      u = n(88),
      s = n.n(u),
      d = n(0),
      f = ["fpd"];
    function l(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    }
    function p(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function g(e) {
      return (g =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function b() {
      return (b =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var v = n(99),
      y = n(5),
      h = "TRUE" === Object(d.getParameterByName)(y.DEBUG_MODE).toUpperCase(),
      m = window.location.origin,
      O = "random",
      j = {};
    (j[O] = !0), (j.fixed = !0);
    var S = O,
      E = {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom",
      };
    var A = (function () {
      var e,
        t,
        n,
        i = [],
        a = null;
      function u() {
        e = {};
        var i = {
          _debug: h,
          get debug() {
            return this._debug;
          },
          set debug(e) {
            this._debug = e;
          },
          _bidderTimeout: 3e3,
          get bidderTimeout() {
            return this._bidderTimeout;
          },
          set bidderTimeout(e) {
            this._bidderTimeout = e;
          },
          _publisherDomain: m,
          get publisherDomain() {
            return this._publisherDomain;
          },
          set publisherDomain(e) {
            this._publisherDomain = e;
          },
          _priceGranularity: E.MEDIUM,
          set priceGranularity(e) {
            c(e) &&
              ("string" == typeof e
                ? (this._priceGranularity = a(e) ? e : E.MEDIUM)
                : Object(d.isPlainObject)(e) &&
                  ((this._customPriceBucket = e),
                  (this._priceGranularity = E.CUSTOM),
                  Object(d.logMessage)("Using custom price granularity")));
          },
          get priceGranularity() {
            return this._priceGranularity;
          },
          _customPriceBucket: {},
          get customPriceBucket() {
            return this._customPriceBucket;
          },
          _mediaTypePriceGranularity: {},
          get mediaTypePriceGranularity() {
            return this._mediaTypePriceGranularity;
          },
          set mediaTypePriceGranularity(e) {
            var t = this;
            this._mediaTypePriceGranularity = Object.keys(e).reduce(function (
              n,
              r
            ) {
              return (
                c(e[r])
                  ? "string" == typeof e
                    ? (n[r] = a(e[r]) ? e[r] : t._priceGranularity)
                    : Object(d.isPlainObject)(e) &&
                      ((n[r] = e[r]),
                      Object(d.logMessage)(
                        "Using custom price granularity for ".concat(r)
                      ))
                  : Object(d.logWarn)(
                      "Invalid price granularity for media type: ".concat(r)
                    ),
                n
              );
            },
            {});
          },
          _sendAllBids: true,
          get enableSendAllBids() {
            return this._sendAllBids;
          },
          set enableSendAllBids(e) {
            this._sendAllBids = e;
          },
          _useBidCache: false,
          get useBidCache() {
            return this._useBidCache;
          },
          set useBidCache(e) {
            this._useBidCache = e;
          },
          _deviceAccess: true,
          get deviceAccess() {
            return this._deviceAccess;
          },
          set deviceAccess(e) {
            this._deviceAccess = e;
          },
          _bidderSequence: S,
          get bidderSequence() {
            return this._bidderSequence;
          },
          set bidderSequence(e) {
            j[e]
              ? (this._bidderSequence = e)
              : Object(d.logWarn)(
                  "Invalid order: ".concat(e, ". Bidder Sequence was not set.")
                );
          },
          _timeoutBuffer: 400,
          get timeoutBuffer() {
            return this._timeoutBuffer;
          },
          set timeoutBuffer(e) {
            this._timeoutBuffer = e;
          },
          _disableAjaxTimeout: false,
          get disableAjaxTimeout() {
            return this._disableAjaxTimeout;
          },
          set disableAjaxTimeout(e) {
            this._disableAjaxTimeout = e;
          },
          _maxNestedIframes: 10,
          get maxNestedIframes() {
            return this._maxNestedIframes;
          },
          set maxNestedIframes(e) {
            this._maxNestedIframes = e;
          },
          _auctionOptions: {},
          get auctionOptions() {
            return this._auctionOptions;
          },
          set auctionOptions(e) {
            (function (e) {
              if (!Object(d.isPlainObject)(e))
                return (
                  Object(d.logWarn)("Auction Options must be an object"), !1
                );
              for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                var r = n[t];
                if ("secondaryBidders" !== r && "suppressStaleRender" !== r)
                  return (
                    Object(d.logWarn)(
                      "Auction Options given an incorrect param: ".concat(r)
                    ),
                    !1
                  );
                if ("secondaryBidders" === r) {
                  if (!Object(d.isArray)(e[r]))
                    return (
                      Object(d.logWarn)(
                        "Auction Options ".concat(r, " must be of type Array")
                      ),
                      !1
                    );
                  if (!e[r].every(d.isStr))
                    return (
                      Object(d.logWarn)(
                        "Auction Options ".concat(r, " must be only string")
                      ),
                      !1
                    );
                } else if (
                  "suppressStaleRender" === r &&
                  !Object(d.isBoolean)(e[r])
                )
                  return (
                    Object(d.logWarn)(
                      "Auction Options ".concat(r, " must be of type boolean")
                    ),
                    !1
                  );
              }
              return !0;
            })(e) && (this._auctionOptions = e);
          },
        };
        function a(e) {
          return o()(Object.keys(E), function (t) {
            return e === E[t];
          });
        }
        function c(e) {
          if (!e)
            return (
              Object(d.logError)(
                "Prebid Error: no value passed to `setPriceGranularity()`"
              ),
              !1
            );
          if ("string" == typeof e)
            a(e) ||
              Object(d.logWarn)(
                "Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."
              );
          else if (Object(d.isPlainObject)(e) && !Object(r.b)(e))
            return (
              Object(d.logError)(
                "Invalid custom price value passed to `setPriceGranularity()`"
              ),
              !1
            );
          return !0;
        }
        t &&
          I(
            Object.keys(t).reduce(function (e, n) {
              return t[n] !== i[n] && (e[n] = i[n] || {}), e;
            }, {})
          ),
          (t = i),
          (n = {});
      }
      function y() {
        if (a && n && Object(d.isPlainObject)(n[a])) {
          var e = n[a],
            r = new s.a(Object.keys(t).concat(Object.keys(e)));
          return v(r).reduce(function (n, r) {
            return (
              void 0 === e[r]
                ? (n[r] = t[r])
                : void 0 === t[r]
                ? (n[r] = e[r])
                : Object(d.isPlainObject)(e[r])
                ? (n[r] = Object(d.mergeDeep)({}, t[r], e[r]))
                : (n[r] = e[r]),
              n
            );
          }, {});
        }
        return b({}, t);
      }
      function O(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            var r = "context" === n ? "site" : n;
            t[r] =
              "site" === r || "user" === r
                ? Object.keys(e[n]).reduce(function (t, r) {
                    return (
                      "data" === r
                        ? Object(d.mergeDeep)(t, { ext: { data: e[n][r] } })
                        : Object(d.mergeDeep)(t, p({}, r, e[n][r])),
                      t
                    );
                  }, {})
                : e[n];
          }),
          t
        );
      }
      function A(e) {
        var t = {};
        return (
          Object.keys(e)
            .filter(function (e) {
              return "context" === e;
            })
            .forEach(function (n) {
              Object.keys(e[n]).forEach(function (r) {
                "data" === r
                  ? Object(d.mergeDeep)(t, { ext: { data: e[n][r] } })
                  : "object" !== g(e[n][r]) || Array.isArray(e[n][r])
                  ? Object(d.mergeDeep)(t, {
                      ext: { data: p({}, r.toLowerCase(), e[n][r]) },
                    })
                  : Object.keys(e[n][r]).forEach(function (i) {
                      Object(d.mergeDeep)(t, {
                        ext: {
                          data: p(
                            {},
                            r.toLowerCase(),
                            p({}, i.toLowerCase(), e[n][r][i])
                          ),
                        },
                      });
                    });
              });
            }),
          t
        );
      }
      function T(e, t) {
        var n = t;
        if (
          ("string" != typeof e && ((n = e), (e = "*")), "function" == typeof n)
        ) {
          var r = { topic: e, callback: n };
          return (
            i.push(r),
            function () {
              i.splice(i.indexOf(r), 1);
            }
          );
        }
        Object(d.logError)("listener must be a function");
      }
      function I(e) {
        var t = Object.keys(e);
        i
          .filter(function (e) {
            return c()(t, e.topic);
          })
          .forEach(function (t) {
            t.callback(p({}, t.topic, e[t.topic]));
          }),
          i
            .filter(function (e) {
              return "*" === e.topic;
            })
            .forEach(function (t) {
              return t.callback(e);
            });
      }
      function w(e, t) {
        a = e;
        try {
          return t();
        } finally {
          C();
        }
      }
      function C() {
        a = null;
      }
      return (
        u(),
        {
          getCurrentBidder: function () {
            return a;
          },
          resetBidder: C,
          getConfig: function () {
            if (
              arguments.length <= 1 &&
              "function" !=
                typeof (arguments.length <= 0 ? void 0 : arguments[0])
            ) {
              var e = arguments.length <= 0 ? void 0 : arguments[0];
              return e ? Object(d.deepAccess)(y(), e) : y();
            }
            return T.apply(void 0, arguments);
          },
          readConfig: function () {
            if (
              arguments.length <= 1 &&
              "function" !=
                typeof (arguments.length <= 0 ? void 0 : arguments[0])
            ) {
              var e = arguments.length <= 0 ? void 0 : arguments[0],
                t = Object(d.deepClone)(y());
              return e ? Object(d.deepAccess)(t, e) : t;
            }
            return T.apply(void 0, arguments);
          },
          setConfig: function (n) {
            if (Object(d.isPlainObject)(n)) {
              var r = Object.keys(n),
                i = {};
              r.forEach(function (r) {
                var o = "fpd" === r ? "ortb2" : r,
                  a = "fpd" === r ? O(n[r]) : n[r];
                Object(d.isPlainObject)(e[o]) &&
                  Object(d.isPlainObject)(a) &&
                  (a = b({}, e[o], a)),
                  (i[o] = t[o] = a);
              }),
                I(i);
            } else Object(d.logError)("setConfig options must be an object");
          },
          setDefaults: function (n) {
            Object(d.isPlainObject)(e)
              ? (b(e, n), b(t, n))
              : Object(d.logError)("defaults must be an object");
          },
          resetConfig: u,
          runWithBidder: w,
          callbackWithBidder: function (e) {
            return function (t) {
              return function () {
                if ("function" == typeof t) {
                  for (
                    var n = arguments.length, r = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    r[i] = arguments[i];
                  return w(e, d.bind.call.apply(d.bind, [t, this].concat(r)));
                }
                Object(d.logWarn)(
                  "config.callbackWithBidder callback is not a function"
                );
              };
            };
          },
          setBidderConfig: function (e) {
            try {
              !(function (e) {
                if (!Object(d.isPlainObject)(e))
                  throw "setBidderConfig bidder options must be an object";
                if (!Array.isArray(e.bidders) || !e.bidders.length)
                  throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                if (!Object(d.isPlainObject)(e.config))
                  throw "setBidderConfig bidder options must contain a config object";
              })(e),
                e.bidders.forEach(function (t) {
                  n[t] || (n[t] = {}),
                    Object.keys(e.config).forEach(function (r) {
                      var i = "fpd" === r ? "ortb2" : r,
                        o = "fpd" === r ? O(e.config[r]) : e.config[r];
                      Object(d.isPlainObject)(o)
                        ? (n[t][i] = b({}, n[t][i] || {}, o))
                        : (n[t][i] = o);
                    });
                });
            } catch (e) {
              Object(d.logError)(e);
            }
          },
          getBidderConfig: function () {
            return n;
          },
          convertAdUnitFpd: function (e) {
            var t = [];
            return (
              e.forEach(function (e) {
                e.fpd
                  ? (e.ortb2Imp
                      ? Object(d.mergeDeep)(e.ortb2Imp, A(e.fpd))
                      : (e.ortb2Imp = A(e.fpd)),
                    t.push(
                      (function (e) {
                        e.fpd;
                        return l(e, f);
                      })(e)
                    ))
                  : t.push(e);
              }),
              t
            );
          },
          getLegacyFpd: function (e) {
            if ("object" === g(e)) {
              var t = {};
              return (
                Object.keys(e).forEach(function (n) {
                  var r = "site" === n ? "context" : n;
                  t[r] =
                    "context" === r || "user" === r
                      ? Object.keys(e[n])
                          .filter(function (e) {
                            return "data" !== e;
                          })
                          .reduce(function (t, r) {
                            return (
                              "ext" === r
                                ? Object(d.mergeDeep)(t, e[n][r])
                                : Object(d.mergeDeep)(t, p({}, r, e[n][r])),
                              t
                            );
                          }, {})
                      : e[n];
                }),
                t
              );
            }
          },
          getLegacyImpFpd: function (e) {
            if ("object" === g(e)) {
              var t = {};
              return (
                Object(d.deepAccess)(e, "ext.data") &&
                  Object.keys(e.ext.data).forEach(function (n) {
                    "pbadslot" === n
                      ? Object(d.mergeDeep)(t, {
                          context: { pbAdSlot: e.ext.data[n] },
                        })
                      : "adserver" === n
                      ? Object(d.mergeDeep)(t, {
                          context: { adServer: e.ext.data[n] },
                        })
                      : Object(d.mergeDeep)(t, {
                          context: { data: p({}, n, e.ext.data[n]) },
                        });
                  }),
                t
              );
            }
          },
        }
      );
    })();
  },
  30: function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  31: function (e, t, n) {
    var r = n(52),
      i = {}.hasOwnProperty;
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return i.call(r(e), t);
      };
  },
  32: function (e, t, n) {
    var r = n(33),
      i = n(34),
      o = n(44);
    e.exports = r
      ? function (e, t, n) {
          return i.f(e, t, o(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  33: function (e, t, n) {
    var r = n(29);
    e.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  34: function (e, t, n) {
    var r = n(33),
      i = n(83),
      o = n(16),
      a = n(62),
      c = Object.defineProperty;
    t.f = r
      ? c
      : function (e, t, n) {
          if ((o(e), (t = a(t, !0)), o(n), i))
            try {
              return c(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  35: function (e, t, n) {
    "use strict";
    t.a = function (e, t, n) {
      if (!t || !e)
        return void Object(o.logError)(
          "cannot load external script without url and moduleCode"
        );
      if (!i()(c, t))
        return void Object(o.logError)(
          "".concat(t, " not whitelisted for loading external JavaScript")
        );
      if (a[e])
        return (
          n &&
            "function" == typeof n &&
            (a[e].loaded ? n() : a[e].callbacks.push(n)),
          a[e].tag
        );
      (a[e] = { loaded: !1, tag: null, callbacks: [] }),
        n && "function" == typeof n && a[e].callbacks.push(n);
      return (
        Object(o.logWarn)(
          "module ".concat(t, " is loading external JavaScript")
        ),
        (function (t, n) {
          var r = document.createElement("script");
          (r.type = "text/javascript"),
            (r.async = !0),
            (a[e].tag = r),
            r.readyState
              ? (r.onreadystatechange = function () {
                  ("loaded" !== r.readyState && "complete" !== r.readyState) ||
                    ((r.onreadystatechange = null), n());
                })
              : (r.onload = function () {
                  n();
                });
          return (r.src = t), Object(o.insertElement)(r), r;
        })(e, function () {
          a[e].loaded = !0;
          try {
            for (var t = 0; t < a[e].callbacks.length; t++) a[e].callbacks[t]();
          } catch (e) {
            Object(o.logError)(
              "Error executing callback",
              "adloader.js:loadExternalScript",
              e
            );
          }
        })
      );
    };
    var r = n(12),
      i = n.n(r),
      o = n(0),
      a = {},
      c = ["adloox", "criteo", "outstream", "adagio", "browsi"];
  },
  367: function (e, t, n) {
    n(368);
    var r = n(55);
    e.exports = r("String", "includes");
  },
  368: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(369),
      o = n(51);
    r(
      { target: "String", proto: !0, forced: !n(371)("includes") },
      {
        includes: function (e) {
          return !!~String(o(this)).indexOf(
            i(e),
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  369: function (e, t, n) {
    var r = n(370);
    e.exports = function (e) {
      if (r(e))
        throw TypeError("The method doesn't accept regular expressions");
      return e;
    };
  },
  37: function (e, t, n) {
    var r = n(18),
      i = n(73);
    e.exports = r
      ? i
      : function (e) {
          return Set.prototype.values.call(e);
        };
  },
  370: function (e, t, n) {
    var r = n(30),
      i = n(50),
      o = n(21)("match");
    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
    };
  },
  371: function (e, t, n) {
    var r = n(21)("match");
    e.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[r] = !1), "/./"[e](t);
        } catch (e) {}
      }
      return !1;
    };
  },
  38: function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return f;
    }),
      n.d(t, "a", function () {
        return l;
      }),
      (t.h = function (e) {
        if (
          e &&
          e.type &&
          (function (e) {
            if (!e || !o()(Object.keys(p), e))
              return (
                Object(r.logError)(
                  "".concat(e, " nativeParam is not supported")
                ),
                !1
              );
            return !0;
          })(e.type)
        )
          return p[e.type];
        return e;
      }),
      (t.g = function (e, t) {
        var n = Object(r.getBidRequest)(e.requestId, t);
        if (!n) return !1;
        if (!Object(r.deepAccess)(e, "native.clickUrl")) return !1;
        var i = n.nativeParams;
        if (!i) return !0;
        var a = Object.keys(i).filter(function (e) {
            return i[e].required;
          }),
          c = Object.keys(e.native).filter(function (t) {
            return e.native[t];
          });
        return a.every(function (e) {
          return o()(c, e);
        });
      }),
      (t.b = function (e, t) {
        var n;
        "click" === e.action
          ? (n = t.native && t.native.clickTrackers)
          : ((n = t.native && t.native.impressionTrackers),
            t.native &&
              t.native.javascriptTrackers &&
              Object(r.insertHtmlIntoIframe)(t.native.javascriptTrackers));
        return (n || []).forEach(r.triggerPixel), e.action;
      }),
      (t.e = function (e, t) {
        var n = {};
        Object(r.deepAccess)(t, "nativeParams.rendererUrl")
          ? (e.native.rendererUrl = g(t.nativeParams.rendererUrl))
          : Object(r.deepAccess)(t, "nativeParams.adTemplate") &&
            (e.native.adTemplate = g(t.nativeParams.adTemplate));
        var i =
            !1 !== Object(r.deepAccess)(t, "nativeParams.sendTargetingKeys"),
          o = (function (e) {
            var t = {};
            Object(r.deepAccess)(e, "nativeParams.ext") &&
              Object.keys(e.nativeParams.ext).forEach(function (e) {
                t[e] = "hb_native_".concat(e);
              });
            return u(u({}, d.NATIVE_KEYS), t);
          })(t),
          a = u(u({}, e.native), e.native.ext);
        return (
          delete a.ext,
          Object.keys(a).forEach(function (a) {
            var c = o[a],
              u =
                g(e.native[a]) ||
                g(Object(r.deepAccess)(e, "native.ext.".concat(a)));
            if ("adTemplate" !== a && c && u) {
              var s = Object(r.deepAccess)(
                t,
                "nativeParams.".concat(a, ".sendId")
              );
              if (
                ("boolean" != typeof s &&
                  (s = Object(r.deepAccess)(
                    t,
                    "nativeParams.ext.".concat(a, ".sendId")
                  )),
                s)
              )
                u = "".concat(c, ":").concat(e.adId);
              var d = Object(r.deepAccess)(
                t,
                "nativeParams.".concat(a, ".sendTargetingKeys")
              );
              "boolean" != typeof d &&
                (d = Object(r.deepAccess)(
                  t,
                  "nativeParams.ext.".concat(a, ".sendTargetingKeys")
                )),
                ("boolean" == typeof d ? d : i) && (n[c] = u);
            }
          }),
          n
        );
      }),
      (t.d = function (e, t) {
        var n = { message: "assetResponse", adId: e.adId, assets: [] };
        t.native.hasOwnProperty("adTemplate") &&
          (n.adTemplate = g(t.native.adTemplate));
        t.native.hasOwnProperty("rendererUrl") &&
          (n.rendererUrl = g(t.native.rendererUrl));
        return (
          e.assets.forEach(function (e) {
            var i = Object(r.getKeyByValue)(d.NATIVE_KEYS, e),
              o = g(t.native[i]);
            n.assets.push({ key: i, value: o });
          }),
          n
        );
      }),
      (t.c = function (e, t) {
        var n = { message: "assetResponse", adId: e.adId, assets: [] };
        return (
          Object.keys(t.native).forEach(function (e, r) {
            if ("adTemplate" === e && t.native[e])
              n.adTemplate = g(t.native[e]);
            else if ("rendererUrl" === e && t.native[e])
              n.rendererUrl = g(t.native[e]);
            else if ("ext" === e)
              Object.keys(t.native[e]).forEach(function (r) {
                if (t.native[e][r]) {
                  var i = g(t.native[e][r]);
                  n.assets.push({ key: r, value: i });
                }
              });
            else if (t.native[e] && d.NATIVE_KEYS.hasOwnProperty(e)) {
              var i = g(t.native[e]);
              n.assets.push({ key: e, value: i });
            }
          }),
          n
        );
      });
    var r = n(0),
      i = n(12),
      o = n.n(i);
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function c(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? c(Object(n), !0).forEach(function (t) {
              s(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function s(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var d = n(5),
      f = [],
      l = Object.keys(d.NATIVE_KEYS).map(function (e) {
        return d.NATIVE_KEYS[e];
      }),
      p = {
        image: {
          image: { required: !0 },
          title: { required: !0 },
          sponsoredBy: { required: !0 },
          clickUrl: { required: !0 },
          body: { required: !1 },
          icon: { required: !1 },
        },
      };
    function g(e) {
      return "object" === a(e) && e.url ? e.url : e;
    }
  },
  39: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return j;
    }),
      n.d(t, "b", function () {
        return S;
      }),
      (t.c = E),
      n.d(t, "d", function () {
        return A;
      });
    var r = n(0),
      i = n(3),
      o = n(38),
      a = n(22),
      c = n(100),
      u = n(2),
      s = n(9),
      d = n(12),
      f = n.n(d),
      l = n(11),
      p = n.n(l);
    function g() {
      return (g =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function b(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function v(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return y(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return y(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return y(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function y(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var h = n(5),
      m = [],
      O = Object.keys(h.TARGETING_KEYS).map(function (e) {
        return h.TARGETING_KEYS[e];
      }),
      j = {
        isBidNotExpired: function (e) {
          return (
            e.responseTimestamp + 1e3 * e.ttl - 1e3 > Object(r.timestamp)()
          );
        },
        isUnusedBid: function (e) {
          return (
            e &&
            ((e.status && !f()([h.BID_STATUS.RENDERED], e.status)) || !e.status)
          );
        },
      },
      S = Object(s.b)("sync", function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!o) {
          var a = [],
            c = i.b.getConfig("sendBidsControl.dealPrioritization"),
            u = Object(r.groupBy)(e, "adUnitCode");
          return (
            Object.keys(u).forEach(function (e) {
              var i = [],
                o = Object(r.groupBy)(u[e], "bidderCode");
              Object.keys(o).forEach(function (e) {
                return i.push(o[e].reduce(t));
              }),
                n > 0
                  ? ((i = c
                      ? i.sort(E(!0))
                      : i.sort(function (e, t) {
                          return t.cpm - e.cpm;
                        })),
                    a.push.apply(a, v(i.slice(0, n))))
                  : a.push.apply(a, v(i));
            }),
            a
          );
        }
        return e;
      });
    function E() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return function (t, n) {
        return void 0 !== t.adserverTargeting.hb_deal &&
          void 0 === n.adserverTargeting.hb_deal
          ? -1
          : void 0 === t.adserverTargeting.hb_deal &&
            void 0 !== n.adserverTargeting.hb_deal
          ? 1
          : e
          ? n.cpm - t.cpm
          : n.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb;
      };
    }
    var A = (function (e) {
      var t = {},
        n = {};
      function a(e, t) {
        return (
          e.adserverTargeting &&
          t &&
          ((Object(r.isArray)(t) && f()(t, e.adUnitCode)) ||
            ("string" == typeof t && e.adUnitCode === t))
        );
      }
      function s(e, t) {
        if (!0 === i.b.getConfig("targetingControls.alwaysIncludeDeals")) {
          var n = O.concat(o.a);
          return S(t, r.getHighestCpm)
            .map(function (t) {
              if (t.dealId && a(t, e))
                return b(
                  {},
                  t.adUnitCode,
                  x(
                    t,
                    n.filter(function (e) {
                      return void 0 !== t.adserverTargeting[e];
                    })
                  )
                );
            })
            .filter(function (e) {
              return e;
            });
        }
        return [];
      }
      function d(e, t) {
        var n = g({}, h.TARGETING_KEYS, h.NATIVE_KEYS),
          i = Object.keys(n),
          o = {};
        Object(r.logInfo)(
          "allowTargetingKeys - allowed keys [ ".concat(
            t
              .map(function (e) {
                return n[e];
              })
              .join(", "),
            " ]"
          )
        ),
          e.map(function (e) {
            var r = Object.keys(e)[0],
              a = e[r].filter(function (e) {
                var r = Object.keys(e)[0],
                  a =
                    0 ===
                      i.filter(function (e) {
                        return 0 === r.indexOf(n[e]);
                      }).length ||
                    p()(t, function (e) {
                      var t = n[e];
                      return 0 === r.indexOf(t);
                    });
                return (o[r] = !a), a;
              });
            e[r] = a;
          });
        var a = Object.keys(o).filter(function (e) {
          return o[e];
        });
        return (
          Object(r.logInfo)(
            "allowTargetingKeys - removed keys [ ".concat(a.join(", "), " ]")
          ),
          e.filter(function (e) {
            return e[Object.keys(e)[0]].length > 0;
          })
        );
      }
      function l(e, t) {
        var n = Object(r.deepClone)(e);
        return Object.keys(n)
          .map(function (e) {
            return { adUnitCode: e, adserverTargeting: n[e] };
          })
          .sort(E())
          .reduce(function (e, i, o, a) {
            var c,
              u =
                ((c = i.adserverTargeting),
                Object.keys(c).reduce(function (e, t) {
                  return (
                    e +
                    "".concat(t, "%3d").concat(encodeURIComponent(c[t]), "%26")
                  );
                }, ""));
            o + 1 === a.length && (u = u.slice(0, -3));
            var s = i.adUnitCode,
              d = u.length;
            return (
              d <= t
                ? ((t -= d),
                  Object(r.logInfo)(
                    "AdUnit '"
                      .concat(s, "' auction keys comprised of ")
                      .concat(
                        d,
                        " characters.  Deducted from running threshold; new limit is "
                      )
                      .concat(t),
                    n[s]
                  ),
                  (e[s] = n[s]))
                : Object(r.logWarn)(
                    "The following keys for adUnitCode '"
                      .concat(
                        s,
                        "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was "
                      )
                      .concat(d, ", the current allotted amount was ")
                      .concat(t, ".\n"),
                    n[s]
                  ),
              o + 1 === a.length &&
                0 === Object.keys(e).length &&
                Object(r.logError)(
                  "No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."
                ),
              e
            );
          }, {});
      }
      function y(e) {
        return e
          .map(function (e) {
            return b(
              {},
              Object.keys(e)[0],
              e[Object.keys(e)[0]]
                .map(function (e) {
                  return b(
                    {},
                    Object.keys(e)[0],
                    e[Object.keys(e)[0]].join(",")
                  );
                })
                .reduce(function (e, t) {
                  return g(t, e);
                }, {})
            );
          })
          .reduce(function (e, t) {
            var n = Object.keys(t)[0];
            return (e[n] = g({}, e[n], t[n])), e;
          }, {});
      }
      function A(t) {
        return "string" == typeof t
          ? [t]
          : Object(r.isArray)(t)
          ? t
          : e.getAdUnitCodes() || [];
      }
      function T() {
        var t = e.getBidsReceived();
        return (
          i.b.getConfig("useBidCache") ||
            (t = t.filter(function (e) {
              return n[e.adUnitCode] === e.auctionId;
            })),
          (t = t
            .filter(function (e) {
              return Object(r.deepAccess)(e, "video.context") !== u.a;
            })
            .filter(function (e) {
              return (
                "banner" !== e.mediaType || Object(c.c)([e.width, e.height])
              );
            })
            .filter(j.isUnusedBid)
            .filter(j.isBidNotExpired)),
          S(t, r.getOldestHighestCpmBid)
        );
      }
      function I(e, n) {
        var r = t.getWinningBids(e, n),
          i = w();
        return (r = r.map(function (e) {
          return b(
            {},
            e.adUnitCode,
            Object.keys(e.adserverTargeting)
              .filter(function (t) {
                return (
                  void 0 === e.sendStandardTargeting ||
                  e.sendStandardTargeting ||
                  -1 === i.indexOf(t)
                );
              })
              .reduce(function (t, n) {
                var r = [e.adserverTargeting[n]],
                  i = b({}, n.substring(0, 20), r);
                if (n === h.TARGETING_KEYS.DEAL) {
                  var o = b(
                    {},
                    "".concat(n, "_").concat(e.bidderCode).substring(0, 20),
                    r
                  );
                  return [].concat(v(t), [i, o]);
                }
                return [].concat(v(t), [i]);
              }, [])
          );
        }));
      }
      function w() {
        return e
          .getStandardBidderAdServerTargeting()
          .map(function (e) {
            return e.key;
          })
          .concat(O)
          .filter(r.uniques);
      }
      function C(e, t, n, i) {
        return (
          Object.keys(t.adserverTargeting)
            .filter(_())
            .forEach(function (n) {
              e.length &&
                e
                  .filter(
                    (function (e) {
                      return function (n) {
                        return (
                          n.adUnitCode === t.adUnitCode &&
                          n.adserverTargeting[e]
                        );
                      };
                    })(n)
                  )
                  .forEach(
                    (function (e) {
                      return function (n) {
                        Object(r.isArray)(n.adserverTargeting[e]) ||
                          (n.adserverTargeting[e] = [n.adserverTargeting[e]]),
                          (n.adserverTargeting[e] = n.adserverTargeting[e]
                            .concat(t.adserverTargeting[e])
                            .filter(r.uniques)),
                          delete t.adserverTargeting[e];
                      };
                    })(n)
                  );
            }),
          e.push(t),
          e
        );
      }
      function _() {
        var e = w().concat(o.a);
        return function (t) {
          return -1 === e.indexOf(t);
        };
      }
      function R(e) {
        return b(
          {},
          e.adUnitCode,
          Object.keys(e.adserverTargeting)
            .filter(_())
            .map(function (t) {
              return b({}, t.substring(0, 20), [e.adserverTargeting[t]]);
            })
        );
      }
      function U(e, t) {
        return t
          .filter(function (t) {
            return f()(e, t.adUnitCode);
          })
          .map(function (e) {
            return g({}, e);
          })
          .reduce(C, [])
          .map(R)
          .filter(function (e) {
            return e;
          });
      }
      function B(e, t) {
        var n = O.concat(o.a),
          c = i.b.getConfig("sendBidsControl.bidLimit"),
          u = S(t, r.getHighestCpm, c),
          s = i.b.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
          d = s
            ? s.map(function (e) {
                return h.TARGETING_KEYS[e];
              })
            : n;
        return u
          .map(function (t) {
            if (a(t, e))
              return b(
                {},
                t.adUnitCode,
                x(
                  t,
                  n.filter(function (e) {
                    return (
                      void 0 !== t.adserverTargeting[e] && -1 !== d.indexOf(e)
                    );
                  })
                )
              );
          })
          .filter(function (e) {
            return e;
          });
      }
      function x(e, t) {
        return t.map(function (t) {
          return b(
            {},
            "".concat(t, "_").concat(e.bidderCode).substring(0, 20),
            [e.adserverTargeting[t]]
          );
        });
      }
      function D(t) {
        function n(e) {
          return Object(r.deepAccess)(e, h.JSON_MAPPING.ADSERVER_TARGETING);
        }
        return e
          .getAdUnits()
          .filter(function (e) {
            return f()(t, e.code) && n(e);
          })
          .map(function (e) {
            return b(
              {},
              e.code,
              (function (e) {
                var t = n(e);
                return Object.keys(t).map(function (e) {
                  return (
                    Object(r.isStr)(t[e]) &&
                      (t[e] = t[e].split(",").map(function (e) {
                        return e.trim();
                      })),
                    Object(r.isArray)(t[e]) || (t[e] = [t[e]]),
                    b({}, e, t[e])
                  );
                });
              })(e)
            );
          });
      }
      return (
        (t.setLatestAuctionForAdUnit = function (e, t) {
          n[e] = t;
        }),
        (t.resetPresetTargeting = function (t, n) {
          if (Object(r.isGptPubadsDefined)()) {
            var i = A(t),
              o = e.getAdUnits().filter(function (e) {
                return f()(i, e.code);
              });
            window.googletag
              .pubads()
              .getSlots()
              .forEach(function (e) {
                var t = Object(r.isFn)(n) && n(e);
                m.forEach(function (n) {
                  o.forEach(function (i) {
                    (i.code === e.getAdUnitPath() ||
                      i.code === e.getSlotElementId() ||
                      (Object(r.isFn)(t) && t(i.code))) &&
                      e.setTargeting(n, null);
                  });
                });
              });
          }
        }),
        (t.resetPresetTargetingAST = function (e) {
          A(e).forEach(function (e) {
            var t = window.apntag.getTag(e);
            if (t && t.keywords) {
              var n = Object.keys(t.keywords),
                r = {};
              n.forEach(function (e) {
                f()(m, e.toLowerCase()) || (r[e] = t.keywords[e]);
              }),
                window.apntag.modifyTag(e, { keywords: r });
            }
          });
        }),
        (t.getAllTargeting = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : T(),
            n = A(e),
            o = I(n, t)
              .concat(U(n, t))
              .concat(i.b.getConfig("enableSendAllBids") ? B(n, t) : s(n, t))
              .concat(D(n));
          o.map(function (e) {
            Object.keys(e).map(function (t) {
              e[t].map(function (e) {
                -1 === m.indexOf(Object.keys(e)[0]) &&
                  (m = Object.keys(e).concat(m));
              });
            });
          });
          var a = Object.keys(g({}, h.DEFAULT_TARGETING_KEYS, h.NATIVE_KEYS)),
            c = i.b.getConfig("targetingControls.allowTargetingKeys") || a;
          Array.isArray(c) && c.length > 0 && (o = d(o, c)), (o = y(o));
          var u = i.b.getConfig("targetingControls.auctionKeyMaxChars");
          return (
            u &&
              (Object(r.logInfo)(
                "Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(
                  u,
                  " characters.  Running checks on auction keys..."
                )
              ),
              (o = l(o, u))),
            n.forEach(function (e) {
              o[e] || (o[e] = {});
            }),
            o
          );
        }),
        (t.setTargetingForGPT = function (e, t) {
          window.googletag
            .pubads()
            .getSlots()
            .forEach(function (n) {
              Object.keys(e)
                .filter(t ? t(n) : Object(r.isAdUnitCodeMatchingSlot)(n))
                .forEach(function (t) {
                  Object.keys(e[t]).forEach(function (n) {
                    var r = e[t][n];
                    "string" == typeof r &&
                      -1 !== r.indexOf(",") &&
                      (r = r.split(",")),
                      (e[t][n] = r);
                  }),
                    Object(r.logMessage)(
                      "Attempting to set targeting-map for slot: ".concat(
                        n.getSlotElementId(),
                        " with targeting-map:"
                      ),
                      e[t]
                    ),
                    n.updateTargetingFromMap(e[t]);
                });
            });
        }),
        (t.getWinningBids = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : T(),
            n = A(e);
          return t
            .filter(function (e) {
              return f()(n, e.adUnitCode);
            })
            .filter(function (e) {
              return e.cpm > 0;
            })
            .map(function (e) {
              return e.adUnitCode;
            })
            .filter(r.uniques)
            .map(function (e) {
              return t
                .filter(function (t) {
                  return t.adUnitCode === e ? t : null;
                })
                .reduce(r.getHighestCpm);
            });
        }),
        (t.setTargetingForAst = function (e) {
          var n = t.getAllTargeting(e);
          try {
            t.resetPresetTargetingAST(e);
          } catch (e) {
            Object(r.logError)("unable to reset targeting for AST" + e);
          }
          Object.keys(n).forEach(function (e) {
            return Object.keys(n[e]).forEach(function (t) {
              if (
                (Object(r.logMessage)(
                  "Attempting to set targeting for targetId: "
                    .concat(e, " key: ")
                    .concat(t, " value: ")
                    .concat(n[e][t])
                ),
                Object(r.isStr)(n[e][t]) || Object(r.isArray)(n[e][t]))
              ) {
                var i = {};
                t.search(/pt[0-9]/) < 0
                  ? (i[t.toUpperCase()] = n[e][t])
                  : (i[t] = n[e][t]),
                  window.apntag.setKeywords(e, i, { overrideKeyValue: !0 });
              }
            });
          });
        }),
        (t.isApntagDefined = function () {
          if (window.apntag && Object(r.isFn)(window.apntag.setKeywords))
            return !0;
        }),
        t
      );
    })(a.a);
  },
  4: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    }),
      (t.b = u);
    var r = n(3),
      i = n(0);
    function o() {
      return (o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var c = u();
    function u() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.request,
        c = t.done;
      return function (t, u, s) {
        var d =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        try {
          var f,
            l = d.method || (s ? "POST" : "GET"),
            p = document.createElement("a");
          p.href = t;
          var g =
            "object" === a(u) && null !== u
              ? u
              : {
                  success: function () {
                    Object(i.logMessage)("xhr success");
                  },
                  error: function (e) {
                    Object(i.logError)("xhr error", null, e);
                  },
                };
          if (
            ("function" == typeof u && (g.success = u),
            ((f = new window.XMLHttpRequest()).onreadystatechange =
              function () {
                if (4 === f.readyState) {
                  "function" == typeof c && c(p.origin);
                  var e = f.status;
                  (e >= 200 && e < 300) || 304 === e
                    ? g.success(f.responseText, f)
                    : g.error(f.statusText, f);
                }
              }),
            r.b.getConfig("disableAjaxTimeout") ||
              (f.ontimeout = function () {
                Object(i.logError)("  xhr timeout after ", f.timeout, "ms");
              }),
            "GET" === l && s)
          ) {
            var b = Object(i.parseUrl)(t, d);
            o(b.search, s), (t = Object(i.buildUrl)(b));
          }
          f.open(l, t, !0),
            r.b.getConfig("disableAjaxTimeout") || (f.timeout = e),
            d.withCredentials && (f.withCredentials = !0),
            Object(i._each)(d.customHeaders, function (e, t) {
              f.setRequestHeader(t, e);
            }),
            d.preflight &&
              f.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            f.setRequestHeader("Content-Type", d.contentType || "text/plain"),
            "function" == typeof n && n(p.origin),
            "POST" === l && s ? f.send(s) : f.send();
        } catch (e) {
          Object(i.logError)("xhr construction", e),
            "object" === a(u) && null !== u && u.error(e);
        }
      };
    }
  },
  40: function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  41: function (e, t) {
    e.exports = {};
  },
  42: function (e, t, n) {
    var r = n(16),
      i = n(23),
      o = n(21)("species");
    e.exports = function (e, t) {
      var n,
        a = r(e).constructor;
      return void 0 === a || null == (n = r(a)[o]) ? t : i(n);
    };
  },
  43: function (e, t, n) {
    "use strict";
    t.a = function (e, t) {
      return new i(e, t);
    };
    var r = n(0);
    function i(e, t) {
      var n = (t && t.src) || "client",
        i = e || 0;
      (this.bidderCode = (t && t.bidder) || ""),
        (this.width = 0),
        (this.height = 0),
        (this.statusMessage = (function () {
          switch (i) {
            case 0:
              return "Pending";
            case 1:
              return "Bid available";
            case 2:
              return "Bid returned empty or error response";
            case 3:
              return "Bid timed out";
          }
        })()),
        (this.adId = Object(r.getUniqueIdentifierStr)()),
        (this.requestId = t && t.bidId),
        (this.mediaType = "banner"),
        (this.source = n),
        (this.getStatusCode = function () {
          return i;
        }),
        (this.getSize = function () {
          return this.width + "x" + this.height;
        });
    }
  },
  434: function (e, t, n) {
    n(435);
    var r = n(45);
    e.exports = r.URLSearchParams;
  },
  435: function (e, t, n) {
    "use strict";
    n(98);
    var r = n(15),
      i = n(26),
      o = n(436),
      a = n(71),
      c = n(93),
      u = n(59),
      s = n(94),
      d = n(46),
      f = n(68),
      l = n(31),
      p = n(25),
      g = n(58),
      b = n(16),
      v = n(30),
      y = n(70),
      h = n(44),
      m = n(73),
      O = n(57),
      j = n(21),
      S = i("fetch"),
      E = i("Headers"),
      A = j("iterator"),
      T = "URLSearchParams",
      I = "URLSearchParamsIterator",
      w = d.set,
      C = d.getterFor(T),
      _ = d.getterFor(I),
      R = /\+/g,
      U = Array(4),
      B = function (e) {
        return (
          U[e - 1] || (U[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        );
      },
      x = function (e) {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return e;
        }
      },
      D = function (e) {
        var t = e.replace(R, " "),
          n = 4;
        try {
          return decodeURIComponent(t);
        } catch (e) {
          for (; n; ) t = t.replace(B(n--), x);
          return t;
        }
      },
      k = /[!'()~]|%20/g,
      N = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      P = function (e) {
        return N[e];
      },
      M = function (e) {
        return encodeURIComponent(e).replace(k, P);
      },
      q = function (e, t) {
        if (t)
          for (var n, r, i = t.split("&"), o = 0; o < i.length; )
            (n = i[o++]).length &&
              ((r = n.split("=")),
              e.push({ key: D(r.shift()), value: D(r.join("=")) }));
      },
      G = function (e) {
        (this.entries.length = 0), q(this.entries, e);
      },
      L = function (e, t) {
        if (e < t) throw TypeError("Not enough arguments");
      },
      W = s(
        function (e, t) {
          w(this, { type: I, iterator: m(C(e).entries), kind: t });
        },
        "Iterator",
        function () {
          var e = _(this),
            t = e.kind,
            n = e.iterator.next(),
            r = n.value;
          return (
            n.done ||
              (n.value =
                "keys" === t
                  ? r.key
                  : "values" === t
                  ? r.value
                  : [r.key, r.value]),
            n
          );
        }
      ),
      F = function () {
        f(this, F, T);
        var e,
          t,
          n,
          r,
          i,
          o,
          a,
          c,
          u,
          s = arguments.length > 0 ? arguments[0] : void 0,
          d = this,
          p = [];
        if (
          (w(d, {
            type: T,
            entries: p,
            updateURL: function () {},
            updateSearchParams: G,
          }),
          void 0 !== s)
        )
          if (v(s))
            if ("function" == typeof (e = O(s)))
              for (n = (t = e.call(s)).next; !(r = n.call(t)).done; ) {
                if (
                  (a = (o = (i = m(b(r.value))).next).call(i)).done ||
                  (c = o.call(i)).done ||
                  !o.call(i).done
                )
                  throw TypeError("Expected sequence with length 2");
                p.push({ key: a.value + "", value: c.value + "" });
              }
            else for (u in s) l(s, u) && p.push({ key: u, value: s[u] + "" });
          else
            q(
              p,
              "string" == typeof s
                ? "?" === s.charAt(0)
                  ? s.slice(1)
                  : s
                : s + ""
            );
      },
      z = F.prototype;
    c(
      z,
      {
        append: function (e, t) {
          L(arguments.length, 2);
          var n = C(this);
          n.entries.push({ key: e + "", value: t + "" }), n.updateURL();
        },
        delete: function (e) {
          L(arguments.length, 1);
          for (
            var t = C(this), n = t.entries, r = e + "", i = 0;
            i < n.length;

          )
            n[i].key === r ? n.splice(i, 1) : i++;
          t.updateURL();
        },
        get: function (e) {
          L(arguments.length, 1);
          for (var t = C(this).entries, n = e + "", r = 0; r < t.length; r++)
            if (t[r].key === n) return t[r].value;
          return null;
        },
        getAll: function (e) {
          L(arguments.length, 1);
          for (
            var t = C(this).entries, n = e + "", r = [], i = 0;
            i < t.length;
            i++
          )
            t[i].key === n && r.push(t[i].value);
          return r;
        },
        has: function (e) {
          L(arguments.length, 1);
          for (var t = C(this).entries, n = e + "", r = 0; r < t.length; )
            if (t[r++].key === n) return !0;
          return !1;
        },
        set: function (e, t) {
          L(arguments.length, 1);
          for (
            var n,
              r = C(this),
              i = r.entries,
              o = !1,
              a = e + "",
              c = t + "",
              u = 0;
            u < i.length;
            u++
          )
            (n = i[u]).key === a &&
              (o ? i.splice(u--, 1) : ((o = !0), (n.value = c)));
          o || i.push({ key: a, value: c }), r.updateURL();
        },
        sort: function () {
          var e,
            t,
            n,
            r = C(this),
            i = r.entries,
            o = i.slice();
          for (i.length = 0, n = 0; n < o.length; n++) {
            for (e = o[n], t = 0; t < n; t++)
              if (i[t].key > e.key) {
                i.splice(t, 0, e);
                break;
              }
            t === n && i.push(e);
          }
          r.updateURL();
        },
        forEach: function (e) {
          for (
            var t,
              n = C(this).entries,
              r = p(e, arguments.length > 1 ? arguments[1] : void 0, 3),
              i = 0;
            i < n.length;

          )
            r((t = n[i++]).value, t.key, this);
        },
        keys: function () {
          return new W(this, "keys");
        },
        values: function () {
          return new W(this, "values");
        },
        entries: function () {
          return new W(this, "entries");
        },
      },
      { enumerable: !0 }
    ),
      a(z, A, z.entries),
      a(
        z,
        "toString",
        function () {
          for (var e, t = C(this).entries, n = [], r = 0; r < t.length; )
            (e = t[r++]), n.push(M(e.key) + "=" + M(e.value));
          return n.join("&");
        },
        { enumerable: !0 }
      ),
      u(F, T),
      r({ global: !0, forced: !o }, { URLSearchParams: F }),
      o ||
        "function" != typeof S ||
        "function" != typeof E ||
        r(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (e) {
              var t,
                n,
                r,
                i = [e];
              return (
                arguments.length > 1 &&
                  (v((t = arguments[1])) &&
                    ((n = t.body),
                    g(n) === T &&
                      ((r = t.headers ? new E(t.headers) : new E()).has(
                        "content-type"
                      ) ||
                        r.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ),
                      (t = y(t, { body: h(0, String(n)), headers: h(0, r) })))),
                  i.push(t)),
                S.apply(this, i)
              );
            },
          }
        ),
      (e.exports = { URLSearchParams: F, getState: C });
  },
  436: function (e, t, n) {
    var r = n(29),
      i = n(21),
      o = n(18),
      a = i("iterator");
    e.exports = !r(function () {
      var e = new URL("b?a=1&b=2&c=3", "http://a"),
        t = e.searchParams,
        n = "";
      return (
        (e.pathname = "c%20d"),
        t.forEach(function (e, r) {
          t.delete("b"), (n += r + e);
        }),
        (o && !e.toJSON) ||
          !t.sort ||
          "http://a/c%20d?a=1&c=3" !== e.href ||
          "3" !== t.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !t[a] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("http://тест").host ||
          "#%D0%B1" !== new URL("http://a#б").hash ||
          "a1c3" !== n ||
          "x" !== new URL("http://x", void 0).host
      );
    });
  },
  44: function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  45: function (e, t) {
    e.exports = {};
  },
  46: function (e, t, n) {
    var r,
      i,
      o,
      a = n(124),
      c = n(27),
      u = n(30),
      s = n(32),
      d = n(31),
      f = n(65),
      l = n(69),
      p = n(56),
      g = "Object already initialized",
      b = c.WeakMap;
    if (a || f.state) {
      var v = f.state || (f.state = new b()),
        y = v.get,
        h = v.has,
        m = v.set;
      (r = function (e, t) {
        if (h.call(v, e)) throw new TypeError(g);
        return (t.facade = e), m.call(v, e, t), t;
      }),
        (i = function (e) {
          return y.call(v, e) || {};
        }),
        (o = function (e) {
          return h.call(v, e);
        });
    } else {
      var O = l("state");
      (p[O] = !0),
        (r = function (e, t) {
          if (d(e, O)) throw new TypeError(g);
          return (t.facade = e), s(e, O, t), t;
        }),
        (i = function (e) {
          return d(e, O) ? e[O] : {};
        }),
        (o = function (e) {
          return d(e, O);
        });
    }
    e.exports = {
      set: r,
      get: i,
      has: o,
      enforce: function (e) {
        return o(e) ? i(e) : r(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!u(t) || (n = i(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    };
  },
  48: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return f;
    }),
      n.d(t, "b", function () {
        return p;
      });
    var r = n(11),
      i = n.n(r),
      o = n(0),
      a = { buckets: [{ max: 5, increment: 0.5 }] },
      c = { buckets: [{ max: 20, increment: 0.1 }] },
      u = { buckets: [{ max: 20, increment: 0.01 }] },
      s = {
        buckets: [
          { max: 3, increment: 0.01 },
          { max: 8, increment: 0.05 },
          { max: 20, increment: 0.5 },
        ],
      },
      d = {
        buckets: [
          { max: 5, increment: 0.05 },
          { max: 10, increment: 0.1 },
          { max: 20, increment: 0.5 },
        ],
      };
    function f(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = parseFloat(e);
      return (
        isNaN(r) && (r = ""),
        {
          low: "" === r ? "" : l(e, a, n),
          med: "" === r ? "" : l(e, c, n),
          high: "" === r ? "" : l(e, u, n),
          auto: "" === r ? "" : l(e, d, n),
          dense: "" === r ? "" : l(e, s, n),
          custom: "" === r ? "" : l(e, t, n),
        }
      );
    }
    function l(e, t, n) {
      var r = "";
      if (!p(t)) return r;
      var o = t.buckets.reduce(
          function (e, t) {
            return e.max > t.max ? e : t;
          },
          { max: 0 }
        ),
        a = 0,
        c = i()(t.buckets, function (t) {
          if (e > o.max * n) {
            var i = t.precision;
            void 0 === i && (i = 2), (r = (t.max * n).toFixed(i));
          } else {
            if (e <= t.max * n && e >= a * n) return (t.min = a), t;
            a = t.max;
          }
        });
      return (
        c &&
          (r = (function (e, t, n) {
            var r = void 0 !== t.precision ? t.precision : 2,
              i = t.increment * n,
              o = t.min * n,
              a = Math.pow(10, r + 2),
              c = (e * a - o * a) / (i * a),
              u = Math.floor(c) * i + o;
            return (u = Number(u.toFixed(10))).toFixed(r);
          })(e, c, n)),
        r
      );
    }
    function p(e) {
      if (Object(o.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets))
        return !1;
      var t = !0;
      return (
        e.buckets.forEach(function (e) {
          (e.max && e.increment) || (t = !1);
        }),
        t
      );
    }
  },
  49: function (e, t, n) {
    var r = n(82),
      i = n(51);
    e.exports = function (e) {
      return r(i(e));
    };
  },
  5: function (e, t) {
    e.exports = {
      JSON_MAPPING: {
        PL_CODE: "code",
        PL_SIZE: "sizes",
        PL_BIDS: "bids",
        BD_BIDDER: "bidder",
        BD_ID: "paramsd",
        BD_PL_ID: "placementId",
        ADSERVER_TARGETING: "adserverTargeting",
        BD_SETTING_STANDARD: "standard",
      },
      DEBUG_MODE: "pbjs_debug",
      STATUS: { GOOD: 1, NO_BID: 2 },
      CB: {
        TYPE: {
          ALL_BIDS_BACK: "allRequestedBidsBack",
          AD_UNIT_BIDS_BACK: "adUnitBidsBack",
          BID_WON: "bidWon",
          REQUEST_BIDS: "requestBids",
        },
      },
      EVENTS: {
        AUCTION_INIT: "auctionInit",
        AUCTION_END: "auctionEnd",
        BID_ADJUSTMENT: "bidAdjustment",
        BID_TIMEOUT: "bidTimeout",
        BID_REQUESTED: "bidRequested",
        BID_RESPONSE: "bidResponse",
        NO_BID: "noBid",
        BID_WON: "bidWon",
        BIDDER_DONE: "bidderDone",
        SET_TARGETING: "setTargeting",
        BEFORE_REQUEST_BIDS: "beforeRequestBids",
        BEFORE_BIDDER_HTTP: "beforeBidderHttp",
        REQUEST_BIDS: "requestBids",
        ADD_AD_UNITS: "addAdUnits",
        AD_RENDER_FAILED: "adRenderFailed",
        AD_RENDER_SUCCEEDED: "adRenderSucceeded",
        TCF2_ENFORCEMENT: "tcf2Enforcement",
        AUCTION_DEBUG: "auctionDebug",
        BID_VIEWABLE: "bidViewable",
        STALE_RENDER: "staleRender",
      },
      AD_RENDER_FAILED_REASON: {
        PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
        NO_AD: "noAd",
        EXCEPTION: "exception",
        CANNOT_FIND_AD: "cannotFindAd",
        MISSING_DOC_OR_ADID: "missingDocOrAdid",
      },
      EVENT_ID_PATHS: { bidWon: "adUnitCode" },
      GRANULARITY_OPTIONS: {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom",
      },
      TARGETING_KEYS: {
        BIDDER: "hb_bidder",
        AD_ID: "hb_adid",
        PRICE_BUCKET: "hb_pb",
        SIZE: "hb_size",
        DEAL: "hb_deal",
        SOURCE: "hb_source",
        FORMAT: "hb_format",
        UUID: "hb_uuid",
        CACHE_ID: "hb_cache_id",
        CACHE_HOST: "hb_cache_host",
        ADOMAIN: "hb_adomain",
      },
      DEFAULT_TARGETING_KEYS: {
        BIDDER: "hb_bidder",
        AD_ID: "hb_adid",
        PRICE_BUCKET: "hb_pb",
        SIZE: "hb_size",
        DEAL: "hb_deal",
        FORMAT: "hb_format",
        UUID: "hb_uuid",
        CACHE_HOST: "hb_cache_host",
      },
      NATIVE_KEYS: {
        title: "hb_native_title",
        body: "hb_native_body",
        body2: "hb_native_body2",
        privacyLink: "hb_native_privacy",
        privacyIcon: "hb_native_privicon",
        sponsoredBy: "hb_native_brand",
        image: "hb_native_image",
        icon: "hb_native_icon",
        clickUrl: "hb_native_linkurl",
        displayUrl: "hb_native_displayurl",
        cta: "hb_native_cta",
        rating: "hb_native_rating",
        address: "hb_native_address",
        downloads: "hb_native_downloads",
        likes: "hb_native_likes",
        phone: "hb_native_phone",
        price: "hb_native_price",
        salePrice: "hb_native_saleprice",
        rendererUrl: "hb_renderer_url",
        adTemplate: "hb_adTemplate",
      },
      S2S: {
        SRC: "s2s",
        DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
        SYNCED_BIDDERS_KEY: "pbjsSyncs",
      },
      BID_STATUS: {
        BID_TARGETING_SET: "targetingSet",
        RENDERED: "rendered",
        BID_REJECTED: "bidRejected",
      },
    };
  },
  50: function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  51: function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    };
  },
  52: function (e, t, n) {
    var r = n(51);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  53: function (e, t, n) {
    var r = n(64),
      i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  54: function (e, t) {
    e.exports = function () {};
  },
  55: function (e, t, n) {
    var r = n(26);
    e.exports = r;
  },
  56: function (e, t) {
    e.exports = {};
  },
  57: function (e, t, n) {
    var r = n(58),
      i = n(41),
      o = n(21)("iterator");
    e.exports = function (e) {
      if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
    };
  },
  58: function (e, t, n) {
    var r = n(67),
      i = n(50),
      o = n(21)("toStringTag"),
      a =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        );
    e.exports = r
      ? i
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), o))
            ? n
            : a
            ? i(t)
            : "Object" == (r = i(t)) && "function" == typeof t.callee
            ? "Arguments"
            : r;
        };
  },
  59: function (e, t, n) {
    var r = n(67),
      i = n(34).f,
      o = n(32),
      a = n(31),
      c = n(123),
      u = n(21)("toStringTag");
    e.exports = function (e, t, n, s) {
      if (e) {
        var d = n ? e : e.prototype;
        a(d, u) || i(d, u, { configurable: !0, value: t }),
          s && !r && o(d, "toString", c);
      }
    };
  },
  60: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return p;
    });
    var r = n(0),
      i = n(3),
      o = n(12),
      a = n.n(o),
      c = n(7);
    function u(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            i,
            o = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          }
          return o;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return s(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function d() {
      return (d =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    i.b.setDefaults({
      userSync: Object(r.deepClone)({
        syncEnabled: !0,
        filterSettings: { image: { bidders: "*", filter: "include" } },
        syncsPerBidder: 5,
        syncDelay: 3e3,
        auctionDelay: 0,
      }),
    });
    var f = Object(c.a)("usersync");
    var l = !Object(r.isSafariBrowser)() && f.cookiesAreEnabled(),
      p = (function (e) {
        var t = {},
          n = { image: [], iframe: [] },
          o = new Set(),
          c = {},
          s = { image: !0, iframe: !1 },
          f = e.config;
        function l() {
          if (f.syncEnabled && e.browserSupportsCookies) {
            try {
              !(function () {
                if (!s.iframe) return;
                p(n.iframe, function (e) {
                  var t = u(e, 2),
                    i = t[0],
                    o = t[1];
                  Object(r.logMessage)(
                    "Invoking iframe user sync for bidder: ".concat(i)
                  ),
                    Object(r.insertUserSyncIframe)(o),
                    (function (e, t) {
                      e.image = e.image.filter(function (e) {
                        return e[0] !== t;
                      });
                    })(n, i);
                });
              })(),
                (function () {
                  if (!s.image) return;
                  p(n.image, function (e) {
                    var t = u(e, 2),
                      n = t[0],
                      i = t[1];
                    Object(r.logMessage)(
                      "Invoking image pixel user sync for bidder: ".concat(n)
                    ),
                      Object(r.triggerPixel)(i);
                  });
                })();
            } catch (e) {
              return Object(r.logError)("Error firing user syncs", e);
            }
            n = { image: [], iframe: [] };
          }
        }
        function p(e, t) {
          Object(r.shuffle)(e).forEach(function (e) {
            t(e), o.add(e[0]);
          });
        }
        function g(e, t) {
          var n = f.filterSettings;
          if (
            (function (e, t) {
              if (e.all && e[t])
                return (
                  Object(r.logWarn)(
                    'Detected presence of the "filterSettings.all" and "filterSettings.'.concat(
                      t,
                      '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
                    )
                  ),
                  !1
                );
              var n = e.all ? e.all : e[t],
                i = e.all ? "all" : t;
              if (!n) return !1;
              var o = n.filter,
                a = n.bidders;
              if (o && "include" !== o && "exclude" !== o)
                return (
                  Object(r.logWarn)(
                    'UserSync "filterSettings.'
                      .concat(i, ".filter\" setting '")
                      .concat(
                        o,
                        "' is not a valid option; use either 'include' or 'exclude'."
                      )
                  ),
                  !1
                );
              if (
                "*" !== a &&
                !(
                  Array.isArray(a) &&
                  a.length > 0 &&
                  a.every(function (e) {
                    return Object(r.isStr)(e) && "*" !== e;
                  })
                )
              )
                return (
                  Object(r.logWarn)(
                    'Detected an invalid setup in userSync "filterSettings.'.concat(
                      i,
                      ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
                    )
                  ),
                  !1
                );
              return !0;
            })(n, e)
          ) {
            s[e] = !0;
            var i = n.all ? n.all : n[e],
              o = "*" === i.bidders ? [t] : i.bidders;
            return {
              include: function (e, t) {
                return !a()(e, t);
              },
              exclude: function (e, t) {
                return a()(e, t);
              },
            }[i.filter || "include"](o, t);
          }
          return !s[e];
        }
        return (
          i.b.getConfig("userSync", function (e) {
            if (e.userSync) {
              var t = e.userSync.filterSettings;
              Object(r.isPlainObject)(t) &&
                (t.image ||
                  t.all ||
                  (e.userSync.filterSettings.image = {
                    bidders: "*",
                    filter: "include",
                  }));
            }
            f = d(f, e.userSync);
          }),
          (t.registerSync = function (e, i, a) {
            return o.has(i)
              ? Object(r.logMessage)(
                  'already fired syncs for "'.concat(
                    i,
                    '", ignoring registerSync call'
                  )
                )
              : f.syncEnabled && Object(r.isArray)(n[e])
              ? i
                ? 0 !== f.syncsPerBidder && Number(c[i]) >= f.syncsPerBidder
                  ? Object(r.logWarn)(
                      'Number of user syncs exceeded for "'.concat(i, '"')
                    )
                  : t.canBidderRegisterSync(e, i)
                  ? (n[e].push([i, a]),
                    void (c = (function (e, t) {
                      return e[t] ? (e[t] += 1) : (e[t] = 1), e;
                    })(c, i)))
                  : Object(r.logWarn)(
                      'Bidder "'
                        .concat(i, '" not permitted to register their "')
                        .concat(e, '" userSync pixels.')
                    )
                : Object(r.logWarn)("Bidder is required for registering sync")
              : Object(r.logWarn)(
                  'User sync type "'.concat(e, '" not supported')
                );
          }),
          (t.syncUsers = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            if (e) return setTimeout(l, Number(e));
            l();
          }),
          (t.triggerUserSyncs = function () {
            f.enableOverride && t.syncUsers();
          }),
          (t.canBidderRegisterSync = function (e, t) {
            return !f.filterSettings || !g(e, t);
          }),
          t
        );
      })({ config: i.b.getConfig("userSync"), browserSupportsCookies: l });
  },
  61: function (e, t, n) {
    "use strict";
    t.a = function (e, t) {
      (o.adServers = o.adServers || {}),
        (o.adServers[e] = o.adServers[e] || {}),
        Object.keys(t).forEach(function (n) {
          o.adServers[e][n]
            ? Object(i.logWarn)(
                "Attempting to add an already registered function property "
                  .concat(n, " for AdServer ")
                  .concat(e, ".")
              )
            : (o.adServers[e][n] = t[n]);
        });
    };
    var r = n(14),
      i = n(0),
      o = Object(r.a)();
  },
  62: function (e, t, n) {
    var r = n(30);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  63: function (e, t, n) {
    var r = n(25),
      i = n(82),
      o = n(52),
      a = n(53),
      c = n(110),
      u = [].push,
      s = function (e) {
        var t = 1 == e,
          n = 2 == e,
          s = 3 == e,
          d = 4 == e,
          f = 6 == e,
          l = 7 == e,
          p = 5 == e || f;
        return function (g, b, v, y) {
          for (
            var h,
              m,
              O = o(g),
              j = i(O),
              S = r(b, v, 3),
              E = a(j.length),
              A = 0,
              T = y || c,
              I = t ? T(g, E) : n || l ? T(g, 0) : void 0;
            E > A;
            A++
          )
            if ((p || A in j) && ((m = S((h = j[A]), A, O)), e))
              if (t) I[A] = m;
              else if (m)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return h;
                  case 6:
                    return A;
                  case 2:
                    u.call(I, h);
                }
              else
                switch (e) {
                  case 4:
                    return !1;
                  case 7:
                    u.call(I, h);
                }
          return f ? -1 : s || d ? d : I;
        };
      };
    e.exports = {
      forEach: s(0),
      map: s(1),
      filter: s(2),
      some: s(3),
      every: s(4),
      find: s(5),
      findIndex: s(6),
      filterOut: s(7),
    };
  },
  64: function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  65: function (e, t, n) {
    var r = n(27),
      i = n(112),
      o = "__core-js_shared__",
      a = r[o] || i(o, {});
    e.exports = a;
  },
  66: function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  67: function (e, t, n) {
    var r = {};
    (r[n(21)("toStringTag")] = "z"), (e.exports = "[object z]" === String(r));
  },
  68: function (e, t) {
    e.exports = function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    };
  },
  69: function (e, t, n) {
    var r = n(85),
      i = n(66),
      o = r("keys");
    e.exports = function (e) {
      return o[e] || (o[e] = i(e));
    };
  },
  7: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return u;
    }),
      n.d(t, "d", function () {
        return d;
      }),
      (t.a = function (e) {
        return s({ moduleName: e, moduleType: "core" });
      }),
      (t.b = function (e, t) {
        return s({ gvlid: e, moduleName: t });
      });
    var r = n(9),
      i = n(0),
      o = n(12),
      a = n.n(o),
      c = ["core", "prebid-module"],
      u = [];
    function s() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.gvlid,
        n = e.moduleName,
        r = e.moduleType;
      function o(e) {
        if (a()(c, r)) {
          return e({ valid: !0 });
        }
        var o;
        return (
          d(t, n, { hasEnforcementHook: !1 }, function (t) {
            if (t && t.hasEnforcementHook) o = e(t);
            else {
              var n = {
                hasEnforcementHook: !1,
                valid: Object(i.hasDeviceAccess)(),
              };
              o = e(n);
            }
          }),
          o
        );
      }
      var s = function (e, t, n, r, i, a) {
          var c = function (o) {
            if (o && o.valid) {
              var a =
                  i && "" !== i
                    ? " ;domain=".concat(encodeURIComponent(i))
                    : "",
                c = n && "" !== n ? " ;expires=".concat(n) : "",
                u = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
              document.cookie = ""
                .concat(e, "=")
                .concat(encodeURIComponent(t))
                .concat(c, "; path=/")
                .concat(a)
                .concat(r ? "; SameSite=".concat(r) : "")
                .concat(u);
            }
          };
          if (!a || "function" != typeof a) return o(c);
          u.push(function () {
            var e = o(c);
            a(e);
          });
        },
        f = function (e, t) {
          var n = function (t) {
            if (t && t.valid) {
              var n = window.document.cookie.match(
                "(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)"
              );
              return n ? decodeURIComponent(n[2]) : null;
            }
            return null;
          };
          if (!t || "function" != typeof t) return o(n);
          u.push(function () {
            var e = o(n);
            t(e);
          });
        },
        l = function (e) {
          var t = function (e) {
            if (e && e.valid)
              try {
                return (
                  localStorage.setItem("prebid.cookieTest", "1"),
                  "1" === localStorage.getItem("prebid.cookieTest")
                );
              } catch (e) {
              } finally {
                try {
                  localStorage.removeItem("prebid.cookieTest");
                } catch (e) {}
              }
            return !1;
          };
          if (!e || "function" != typeof e) return o(t);
          u.push(function () {
            var n = o(t);
            e(n);
          });
        },
        p = function (e) {
          var t = function (e) {
            return (
              !(!e || !e.valid) &&
              (!!Object(i.checkCookieSupport)() ||
                ((window.document.cookie = "prebid.cookieTest"),
                -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
            );
          };
          if (!e || "function" != typeof e) return o(t);
          u.push(function () {
            var n = o(t);
            e(n);
          });
        },
        g = function (e, t, n) {
          var r = function (n) {
            n && n.valid && y() && window.localStorage.setItem(e, t);
          };
          if (!n || "function" != typeof n) return o(r);
          u.push(function () {
            var e = o(r);
            n(e);
          });
        },
        b = function (e, t) {
          var n = function (t) {
            return t && t.valid && y() ? window.localStorage.getItem(e) : null;
          };
          if (!t || "function" != typeof t) return o(n);
          u.push(function () {
            var e = o(n);
            t(e);
          });
        },
        v = function (e, t) {
          var n = function (t) {
            t && t.valid && y() && window.localStorage.removeItem(e);
          };
          if (!t || "function" != typeof t) return o(n);
          u.push(function () {
            var e = o(n);
            t(e);
          });
        },
        y = function (e) {
          var t = function (e) {
            if (e && e.valid)
              try {
                return !!window.localStorage;
              } catch (e) {
                Object(i.logError)("Local storage api disabled");
              }
            return !1;
          };
          if (!e || "function" != typeof e) return o(t);
          u.push(function () {
            var n = o(t);
            e(n);
          });
        },
        h = function (e, t) {
          var n = function (t) {
            if (t && t.valid) {
              var n = [];
              if (Object(i.hasDeviceAccess)())
                for (var r = document.cookie.split(";"); r.length; ) {
                  var o = r.pop(),
                    a = o.indexOf("=");
                  (a = a < 0 ? o.length : a),
                    decodeURIComponent(
                      o.slice(0, a).replace(/^\s+/, "")
                    ).indexOf(e) >= 0 &&
                      n.push(decodeURIComponent(o.slice(a + 1)));
                }
              return n;
            }
          };
          if (!t || "function" != typeof t) return o(n);
          u.push(function () {
            var e = o(n);
            t(e);
          });
        };
      return {
        setCookie: s,
        getCookie: f,
        localStorageIsEnabled: l,
        cookiesAreEnabled: p,
        setDataInLocalStorage: g,
        getDataFromLocalStorage: b,
        removeDataFromLocalStorage: v,
        hasLocalStorage: y,
        findSimilarCookies: h,
      };
    }
    var d = Object(r.b)(
      "async",
      function (e, t, n, r) {
        r(n);
      },
      "validateStorageEnforcement"
    );
  },
  70: function (e, t, n) {
    var r,
      i = n(16),
      o = n(127),
      a = n(92),
      c = n(56),
      u = n(130),
      s = n(84),
      d = n(69),
      f = d("IE_PROTO"),
      l = function () {},
      p = function (e) {
        return "<script>" + e + "</" + "script>";
      },
      g = function () {
        try {
          r = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        g = r
          ? (function (e) {
              e.write(p("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            })(r)
          : (((t = s("iframe")).style.display = "none"),
            u.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(p("document.F=Object")),
            e.close(),
            e.F);
        for (var n = a.length; n--; ) delete g.prototype[a[n]];
        return g();
      };
    (c[f] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((l.prototype = i(e)),
                (n = new l()),
                (l.prototype = null),
                (n[f] = e))
              : (n = g()),
            void 0 === t ? n : o(n, t)
          );
        });
  },
  71: function (e, t, n) {
    var r = n(32);
    e.exports = function (e, t, n, i) {
      i && i.enumerable ? (e[t] = n) : r(e, t, n);
    };
  },
  72: function (e, t, n) {
    "use strict";
    var r = n(15),
      i = n(94),
      o = n(96),
      a = n(132),
      c = n(59),
      u = n(32),
      s = n(71),
      d = n(21),
      f = n(18),
      l = n(41),
      p = n(95),
      g = p.IteratorPrototype,
      b = p.BUGGY_SAFARI_ITERATORS,
      v = d("iterator"),
      y = "keys",
      h = "values",
      m = "entries",
      O = function () {
        return this;
      };
    e.exports = function (e, t, n, d, p, j, S) {
      i(n, t, d);
      var E,
        A,
        T,
        I = function (e) {
          if (e === p && U) return U;
          if (!b && e in _) return _[e];
          switch (e) {
            case y:
            case h:
            case m:
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        w = t + " Iterator",
        C = !1,
        _ = e.prototype,
        R = _[v] || _["@@iterator"] || (p && _[p]),
        U = (!b && R) || I(p),
        B = ("Array" == t && _.entries) || R;
      if (
        (B &&
          ((E = o(B.call(new e()))),
          g !== Object.prototype &&
            E.next &&
            (f ||
              o(E) === g ||
              (a ? a(E, g) : "function" != typeof E[v] && u(E, v, O)),
            c(E, w, !0, !0),
            f && (l[w] = O))),
        p == h &&
          R &&
          R.name !== h &&
          ((C = !0),
          (U = function () {
            return R.call(this);
          })),
        (f && !S) || _[v] === U || u(_, v, U),
        (l[t] = U),
        p)
      )
        if (((A = { values: I(h), keys: j ? U : I(y), entries: I(m) }), S))
          for (T in A) (b || C || !(T in _)) && s(_, T, A[T]);
        else r({ target: t, proto: !0, forced: b || C }, A);
      return A;
    };
  },
  73: function (e, t, n) {
    var r = n(16),
      i = n(57);
    e.exports = function (e) {
      var t = i(e);
      if ("function" != typeof t)
        throw TypeError(String(e) + " is not iterable");
      return r(t.call(e));
    };
  },
  74: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(0),
      i = {};
    function o(e, t, n) {
      var r = (function (e, t) {
        var n = (i[e] = i[e] || { bidders: {} });
        return t ? (n.bidders[t] = n.bidders[t] || {}) : n;
      })(e, n);
      return (r[t] = (r[t] || 0) + 1), r[t];
    }
    var a = {
      incrementRequestsCounter: function (e) {
        return o(e, "requestsCounter");
      },
      incrementBidderRequestsCounter: function (e, t) {
        return o(e, "requestsCounter", t);
      },
      incrementBidderWinsCounter: function (e, t) {
        return o(e, "winsCounter", t);
      },
      getRequestsCounter: function (e) {
        return Object(r.deepAccess)(i, "".concat(e, ".requestsCounter")) || 0;
      },
      getBidderRequestsCounter: function (e, t) {
        return (
          Object(r.deepAccess)(
            i,
            "".concat(e, ".bidders.").concat(t, ".requestsCounter")
          ) || 0
        );
      },
      getBidderWinsCounter: function (e, t) {
        return (
          Object(r.deepAccess)(
            i,
            "".concat(e, ".bidders.").concat(t, ".winsCounter")
          ) || 0
        );
      },
    };
  },
  78: function (e, t, n) {
    var r = n(220);
    e.exports = r;
  },
  79: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n.d(t, "adUnitSetupChecks", function () {
        return K;
      }),
      n.d(t, "checkAdUnitSetup", function () {
        return J;
      }),
      (t.executeCallbacks = X);
    var r = n(14),
      i = n(0),
      o = n(228),
      a = n(60),
      c = n(3),
      u = n(22),
      s = n(39),
      d = n(9),
      f = n(229),
      l = n(12),
      p = n.n(l),
      g = n(74),
      b = n(13),
      v = n(43),
      y = n(7);
    function h(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return m(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return m(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return m(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function m(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function O() {
      return (O =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var j = Object(r.a)(),
      S = n(5),
      E = n(8).default,
      A = n(10),
      T = a.a.triggerUserSyncs,
      I = S.EVENTS,
      w = I.ADD_AD_UNITS,
      C = I.BID_WON,
      _ = I.REQUEST_BIDS,
      R = I.SET_TARGETING,
      U = I.AD_RENDER_FAILED,
      B = I.AD_RENDER_SUCCEEDED,
      x = I.STALE_RENDER,
      D = S.AD_RENDER_FAILED_REASON,
      k = D.PREVENT_WRITING_ON_MAIN_DOCUMENT,
      N = D.NO_AD,
      P = D.EXCEPTION,
      M = D.CANNOT_FIND_AD,
      q = D.MISSING_DOC_OR_ADID,
      G = {
        bidWon: function (e) {
          var t = u.a
            .getBidsRequested()
            .map(function (e) {
              return e.bids.map(function (e) {
                return e.adUnitCode;
              });
            })
            .reduce(i.flatten)
            .filter(i.uniques);
          if (!Object(i.contains)(t, e))
            return void Object(i.logError)(
              'The "' + e + '" placement is not defined.'
            );
          return !0;
        },
      };
    function L(e, t, n) {
      e.defaultView &&
        e.defaultView.frameElement &&
        ((e.defaultView.frameElement.width = t),
        (e.defaultView.frameElement.height = n));
    }
    function W(e, t) {
      var n = [];
      return (
        Object(i.isArray)(e) &&
          (t ? e.length === t : e.length > 0) &&
          (e.every(function (e) {
            return Object(i.isArrayOfNums)(e, 2);
          })
            ? (n = e)
            : Object(i.isArrayOfNums)(e, 2) && n.push(e)),
        n
      );
    }
    function F(e) {
      var t = Object(i.deepClone)(e),
        n = t.mediaTypes.banner,
        r = W(n.sizes);
      return (
        r.length > 0
          ? ((n.sizes = r), (t.sizes = r))
          : (Object(i.logError)(
              "Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."
            ),
            delete t.mediaTypes.banner),
        t
      );
    }
    function z(e) {
      var t = Object(i.deepClone)(e),
        n = t.mediaTypes.video;
      if (n.playerSize) {
        var r = "number" == typeof n.playerSize[0] ? 2 : 1,
          o = W(n.playerSize, r);
        o.length > 0
          ? (2 === r &&
              Object(i.logInfo)(
                "Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."
              ),
            (n.playerSize = o),
            (t.sizes = o))
          : (Object(i.logError)(
              "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
            ),
            delete t.mediaTypes.video.playerSize);
      }
      return t;
    }
    function V(e) {
      var t = Object(i.deepClone)(e),
        n = t.mediaTypes.native;
      return (
        n.image &&
          n.image.sizes &&
          !Array.isArray(n.image.sizes) &&
          (Object(i.logError)(
            "Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."
          ),
          delete t.mediaTypes.native.image.sizes),
        n.image &&
          n.image.aspect_ratios &&
          !Array.isArray(n.image.aspect_ratios) &&
          (Object(i.logError)(
            "Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."
          ),
          delete t.mediaTypes.native.image.aspect_ratios),
        n.icon &&
          n.icon.sizes &&
          !Array.isArray(n.icon.sizes) &&
          (Object(i.logError)(
            "Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."
          ),
          delete t.mediaTypes.native.icon.sizes),
        t
      );
    }
    function H(e, t) {
      var n = Object(i.deepAccess)(e, "mediaTypes.".concat(t, ".pos"));
      if (!n || !Object(i.isNumber)(n) || !isFinite(n)) {
        var r = "Value of property 'pos' on ad unit ".concat(
          e.code,
          " should be of type: Number"
        );
        Object(i.logWarn)(r),
          A.emit(S.EVENTS.AUCTION_DEBUG, { type: "WARNING", arguments: r }),
          delete e.mediaTypes[t].pos;
      }
      return e;
    }
    Object(f.a)(),
      (j.bidderSettings = j.bidderSettings || {}),
      (j.libLoaded = !0),
      (j.version = "v5.16.0"),
      Object(i.logInfo)("Prebid.js v5.16.0 loaded"),
      (j.installedModules = []),
      (j.adUnits = j.adUnits || []),
      (j.triggerUserSyncs = T);
    var K = {
        validateBannerMediaType: F,
        validateVideoMediaType: z,
        validateNativeMediaType: V,
        validateSizes: W,
      },
      J = Object(d.b)(
        "sync",
        function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              var n,
                r,
                o,
                a = e.mediaTypes,
                c = e.bids;
              if (c && Object(i.isArray)(c))
                if (a && 0 !== Object.keys(a).length) {
                  a.banner &&
                    ((n = F(e)),
                    a.banner.hasOwnProperty("pos") && (n = H(n, "banner"))),
                    a.video &&
                      ((r = z(n || e)),
                      a.video.hasOwnProperty("pos") && (r = H(r, "video"))),
                    a.native && (o = V(r || n || e));
                  var u = O({}, n, r, o);
                  t.push(u);
                } else
                  Object(i.logError)(
                    "Detected adUnit.code '".concat(
                      e.code,
                      "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."
                    )
                  );
              else
                Object(i.logError)(
                  "Detected adUnit.code '".concat(
                    e.code,
                    "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."
                  )
                );
            }),
            t
          );
        },
        "checkAdUnitSetup"
      );
    function Y(e) {
      var t = u.a[e]().filter(
          i.bind.call(i.adUnitsFilter, this, u.a.getAdUnitCodes())
        ),
        n = u.a.getLastAuctionId();
      return t
        .map(function (e) {
          return e.adUnitCode;
        })
        .filter(i.uniques)
        .map(function (e) {
          return t.filter(function (t) {
            return t.auctionId === n && t.adUnitCode === e;
          });
        })
        .filter(function (e) {
          return e && e[0] && e[0].adUnitCode;
        })
        .map(function (e) {
          return (
            (t = {}),
            (n = e[0].adUnitCode),
            (r = { bids: e }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = r),
            t
          );
          var t, n, r;
        })
        .reduce(function (e, t) {
          return O(e, t);
        }, {});
    }
    function Q(e) {
      var t = e.reason,
        n = e.message,
        r = e.bid,
        o = e.id,
        a = { reason: t, message: n };
      r && (a.bid = r), o && (a.adId = o), Object(i.logError)(n), A.emit(U, a);
    }
    function $(e) {
      var t = e.doc,
        n = e.bid,
        r = e.id,
        i = { doc: t };
      n && (i.bid = n), r && (i.adId = r), A.emit(B, i);
    }
    function X(e, t) {
      function n(e) {
        for (var t; (t = e.shift()); ) t();
      }
      n(y.c), n(Z), e.call(this, t);
    }
    (j.getAdserverTargetingForAdUnitCodeStr = function (e) {
      if (
        (Object(i.logInfo)(
          "Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",
          arguments
        ),
        e)
      ) {
        var t = j.getAdserverTargetingForAdUnitCode(e);
        return Object(i.transformAdServerTargetingObj)(t);
      }
      Object(i.logMessage)(
        "Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode"
      );
    }),
      (j.getHighestUnusedBidResponseForAdUnitCode = function (e) {
        if (e) {
          var t = u.a
            .getAllBidsForAdUnitCode(e)
            .filter(s.a.isUnusedBid)
            .filter(s.a.isBidNotExpired);
          return t.length ? t.reduce(i.getHighestCpm) : {};
        }
        Object(i.logMessage)(
          "Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode"
        );
      }),
      (j.getAdserverTargetingForAdUnitCode = function (e) {
        return j.getAdserverTargeting(e)[e];
      }),
      (j.getAdserverTargeting = function (e) {
        return (
          Object(i.logInfo)("Invoking pbjs.getAdserverTargeting", arguments),
          s.d.getAllTargeting(e)
        );
      }),
      (j.getNoBids = function () {
        return (
          Object(i.logInfo)("Invoking pbjs.getNoBids", arguments),
          Y("getNoBids")
        );
      }),
      (j.getNoBidsForAdUnitCode = function (e) {
        return {
          bids: u.a.getNoBids().filter(function (t) {
            return t.adUnitCode === e;
          }),
        };
      }),
      (j.getBidResponses = function () {
        return (
          Object(i.logInfo)("Invoking pbjs.getBidResponses", arguments),
          Y("getBidsReceived")
        );
      }),
      (j.getBidResponsesForAdUnitCode = function (e) {
        return {
          bids: u.a.getBidsReceived().filter(function (t) {
            return t.adUnitCode === e;
          }),
        };
      }),
      (j.setTargetingForGPTAsync = function (e, t) {
        if (
          (Object(i.logInfo)(
            "Invoking pbjs.setTargetingForGPTAsync",
            arguments
          ),
          Object(i.isGptPubadsDefined)())
        ) {
          var n = s.d.getAllTargeting(e);
          s.d.resetPresetTargeting(e, t),
            s.d.setTargetingForGPT(n, t),
            Object.keys(n).forEach(function (e) {
              Object.keys(n[e]).forEach(function (t) {
                "hb_adid" === t &&
                  u.a.setStatusForBids(n[e][t], S.BID_STATUS.BID_TARGETING_SET);
              });
            }),
            A.emit(R, n);
        } else
          Object(i.logError)("window.googletag is not defined on the page");
      }),
      (j.setTargetingForAst = function (e) {
        Object(i.logInfo)("Invoking pbjs.setTargetingForAn", arguments),
          s.d.isApntagDefined()
            ? (s.d.setTargetingForAst(e), A.emit(R, s.d.getAllTargeting()))
            : Object(i.logError)("window.apntag is not defined on the page");
      }),
      (j.renderAd = Object(d.b)("async", function (e, t, n) {
        if (
          (Object(i.logInfo)("Invoking pbjs.renderAd", arguments),
          Object(i.logMessage)("Calling renderAd with adId :" + t),
          e && t)
        )
          try {
            var r = u.a.findBidByAdId(t);
            if (r) {
              var o = !0;
              if (
                (r &&
                  r.status === S.BID_STATUS.RENDERED &&
                  (Object(i.logWarn)(
                    "Ad id ".concat(r.adId, " has been rendered before")
                  ),
                  A.emit(x, r),
                  Object(i.deepAccess)(
                    c.b.getConfig("auctionOptions"),
                    "suppressStaleRender"
                  ) && (o = !1)),
                o)
              ) {
                if (
                  ((r.ad = Object(i.replaceAuctionPrice)(r.ad, r.cpm)),
                  (r.adUrl = Object(i.replaceAuctionPrice)(r.adUrl, r.cpm)),
                  n && n.clickThrough)
                ) {
                  var a = n.clickThrough;
                  (r.ad = Object(i.replaceClickThrough)(r.ad, a)),
                    (r.adUrl = Object(i.replaceClickThrough)(r.adUrl, a));
                }
                u.a.addWinningBid(r), A.emit(C, r);
                var s = r.height,
                  d = r.width,
                  f = r.ad,
                  l = r.mediaType,
                  p = r.adUrl,
                  g = r.renderer,
                  v = document.createComment(
                    "Creative "
                      .concat(r.creativeId, " served by ")
                      .concat(r.bidder, " Prebid.js Header Bidding")
                  );
                if (Object(b.c)(g))
                  Object(b.b)(g, r),
                    Object(i.insertElement)(v, e, "html"),
                    $({ doc: e, bid: r, id: t });
                else if (
                  (e === document && !Object(i.inIframe)()) ||
                  "video" === l
                ) {
                  var y =
                    "Error trying to write ad. Ad render call ad id ".concat(
                      t,
                      " was prevented from writing to the main document."
                    );
                  Q({ reason: k, message: y, bid: r, id: t });
                } else if (f) {
                  if (
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().indexOf("firefox/") > -1
                  ) {
                    var h = /firefox\/([\d\.]+)/,
                      m = navigator.userAgent.toLowerCase().match(h)[1];
                    m && parseInt(m, 10) < 67 && e.open("text/html", "replace");
                  }
                  e.write(f),
                    e.close(),
                    L(e, d, s),
                    Object(i.insertElement)(v, e, "html"),
                    Object(i.callBurl)(r),
                    $({ doc: e, bid: r, id: t });
                } else if (p) {
                  var O = Object(i.createInvisibleIframe)();
                  (O.height = s),
                    (O.width = d),
                    (O.style.display = "inline"),
                    (O.style.overflow = "hidden"),
                    (O.src = p),
                    Object(i.insertElement)(O, e, "body"),
                    L(e, d, s),
                    Object(i.insertElement)(v, e, "html"),
                    Object(i.callBurl)(r),
                    $({ doc: e, bid: r, id: t });
                } else {
                  var j =
                    "Error trying to write ad. No ad for bid response id: ".concat(
                      t
                    );
                  Q({ reason: N, message: j, bid: r, id: t });
                }
              }
            } else {
              var E =
                "Error trying to write ad. Cannot find ad by given id : ".concat(
                  t
                );
              Q({ reason: M, message: E, id: t });
            }
          } catch (e) {
            var T = "Error trying to write ad Id :"
              .concat(t, " to the page:")
              .concat(e.message);
            Q({ reason: P, message: T, id: t });
          }
        else {
          var I = "Error trying to write ad Id :".concat(
            t,
            " to the page. Missing document or adId"
          );
          Q({ reason: q, message: I, id: t });
        }
      })),
      (j.removeAdUnit = function (e) {
        (Object(i.logInfo)("Invoking pbjs.removeAdUnit", arguments), e)
          ? (Object(i.isArray)(e) ? e : [e]).forEach(function (e) {
              for (var t = j.adUnits.length - 1; t >= 0; t--)
                j.adUnits[t].code === e && j.adUnits.splice(t, 1);
            })
          : (j.adUnits = []);
      }),
      (j.requestBids = Object(d.b)("async", function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.bidsBackHandler,
          n = e.timeout,
          r = e.adUnits,
          o = e.adUnitCodes,
          a = e.labels,
          d = e.auctionId;
        A.emit(_);
        var f = n || c.b.getConfig("bidderTimeout");
        (r =
          (r && c.b.convertAdUnitFpd(Object(i.isArray)(r) ? r : [r])) ||
          j.adUnits),
          Object(i.logInfo)("Invoking pbjs.requestBids", arguments);
        var l = [],
          b = [];
        if (
          (c.b.getConfig("s2sConfig", function (e) {
            e &&
              e.s2sConfig &&
              (l = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
          }),
          l.forEach(function (e) {
            b.push.apply(b, h(e.bidders));
          }),
          (r = J(r)),
          o && o.length
            ? (r = r.filter(function (e) {
                return p()(o, e.code);
              }))
            : (o =
                r &&
                r.map(function (e) {
                  return e.code;
                })),
          r.forEach(function (e) {
            var t = Object.keys(e.mediaTypes || { banner: "banner" }),
              n = e.bids.map(function (e) {
                return e.bidder;
              }),
              r = E.bidderRegistry,
              o = b
                ? n.filter(function (e) {
                    return !p()(b, e);
                  })
                : n;
            (e.transactionId = Object(i.generateUUID)()),
              o.forEach(function (n) {
                var o = r[n],
                  a = o && o.getSpec && o.getSpec(),
                  c = (a && a.supportedMediaTypes) || ["banner"];
                t.some(function (e) {
                  return p()(c, e);
                })
                  ? g.a.incrementBidderRequestsCounter(e.code, n)
                  : (Object(i.logWarn)(
                      Object(i.unsupportedBidderMessage)(e, n)
                    ),
                    (e.bids = e.bids.filter(function (e) {
                      return e.bidder !== n;
                    })));
              }),
              g.a.incrementRequestsCounter(e.code);
          }),
          r && 0 !== r.length)
        ) {
          var v = u.a.createAuction({
              adUnits: r,
              adUnitCodes: o,
              callback: t,
              cbTimeout: f,
              labels: a,
              auctionId: d,
            }),
            y = r.length;
          y > 15 &&
            Object(i.logInfo)(
              "Current auction "
                .concat(v.getAuctionId(), " contains ")
                .concat(y, " adUnits."),
              r
            ),
            o.forEach(function (e) {
              return s.d.setLatestAuctionForAdUnit(e, v.getAuctionId());
            }),
            v.callBids();
        } else if (
          (Object(i.logMessage)("No adUnits configured. No bids requested."),
          "function" == typeof t)
        )
          try {
            t();
          } catch (e) {
            Object(i.logError)("Error executing bidsBackHandler", null, e);
          }
      })),
      j.requestBids.before(X, 49),
      (j.addAdUnits = function (e) {
        Object(i.logInfo)("Invoking pbjs.addAdUnits", arguments),
          j.adUnits.push.apply(
            j.adUnits,
            c.b.convertAdUnitFpd(Object(i.isArray)(e) ? e : [e])
          ),
          A.emit(w);
      }),
      (j.onEvent = function (e, t, n) {
        Object(i.logInfo)("Invoking pbjs.onEvent", arguments),
          Object(i.isFn)(t)
            ? !n || G[e].call(null, n)
              ? A.on(e, t, n)
              : Object(i.logError)(
                  'The id provided is not valid for event "' +
                    e +
                    '" and no handler was set.'
                )
            : Object(i.logError)(
                'The event handler provided is not a function and was not set on event "' +
                  e +
                  '".'
              );
      }),
      (j.offEvent = function (e, t, n) {
        Object(i.logInfo)("Invoking pbjs.offEvent", arguments),
          (n && !G[e].call(null, n)) || A.off(e, t, n);
      }),
      (j.getEvents = function () {
        return Object(i.logInfo)("Invoking pbjs.getEvents"), A.getEvents();
      }),
      (j.registerBidAdapter = function (e, t) {
        Object(i.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
        try {
          E.registerBidAdapter(e(), t);
        } catch (e) {
          Object(i.logError)("Error registering bidder adapter : " + e.message);
        }
      }),
      (j.registerAnalyticsAdapter = function (e) {
        Object(i.logInfo)("Invoking pbjs.registerAnalyticsAdapter", arguments);
        try {
          E.registerAnalyticsAdapter(e);
        } catch (e) {
          Object(i.logError)(
            "Error registering analytics adapter : " + e.message
          );
        }
      }),
      (j.createBid = function (e) {
        return (
          Object(i.logInfo)("Invoking pbjs.createBid", arguments),
          Object(v.a)(e)
        );
      });
    var Z = [],
      ee = Object(d.b)(
        "async",
        function (e) {
          e && !Object(i.isEmpty)(e)
            ? (Object(i.logInfo)("Invoking pbjs.enableAnalytics for: ", e),
              E.enableAnalytics(e))
            : Object(i.logError)(
                "pbjs.enableAnalytics should be called with option {}"
              );
        },
        "enableAnalyticsCb"
      );
    function te(e) {
      e.forEach(function (e) {
        if (void 0 === e.called)
          try {
            e.call(), (e.called = !0);
          } catch (e) {
            Object(i.logError)("Error processing command :", "prebid.js", e);
          }
      });
    }
    (j.enableAnalytics = function (e) {
      Z.push(ee.bind(this, e));
    }),
      (j.aliasBidder = function (e, t, n) {
        Object(i.logInfo)("Invoking pbjs.aliasBidder", arguments),
          e && t
            ? E.aliasBidAdapter(e, t, n)
            : Object(i.logError)(
                "bidderCode and alias must be passed as arguments",
                "pbjs.aliasBidder"
              );
      }),
      (j.getAllWinningBids = function () {
        return u.a.getAllWinningBids();
      }),
      (j.getAllPrebidWinningBids = function () {
        return u.a.getBidsReceived().filter(function (e) {
          return e.status === S.BID_STATUS.BID_TARGETING_SET;
        });
      }),
      (j.getHighestCpmBids = function (e) {
        return s.d.getWinningBids(e);
      }),
      (j.markWinningBidAsUsed = function (e) {
        var t = [];
        e.adUnitCode && e.adId
          ? (t = u.a.getBidsReceived().filter(function (t) {
              return t.adId === e.adId && t.adUnitCode === e.adUnitCode;
            }))
          : e.adUnitCode
          ? (t = s.d.getWinningBids(e.adUnitCode))
          : e.adId
          ? (t = u.a.getBidsReceived().filter(function (t) {
              return t.adId === e.adId;
            }))
          : Object(i.logWarn)(
              "Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."
            ),
          t.length > 0 && (t[0].status = S.BID_STATUS.RENDERED);
      }),
      (j.getConfig = c.b.getConfig),
      (j.readConfig = c.b.readConfig),
      (j.setConfig = c.b.setConfig),
      (j.setBidderConfig = c.b.setBidderConfig),
      j.que.push(function () {
        return Object(o.a)();
      }),
      (j.cmd.push = function (e) {
        if ("function" == typeof e)
          try {
            e.call();
          } catch (e) {
            Object(i.logError)(
              "Error processing command :",
              e.message,
              e.stack
            );
          }
        else
          Object(i.logError)(
            "Commands written into pbjs.cmd.push must be wrapped in a function"
          );
      }),
      (j.que.push = j.cmd.push),
      (j.processQueue = function () {
        d.b.ready(), te(j.que), te(j.cmd);
      }),
      (t.default = j);
  },
  8: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n.d(t, "gdprDataHandler", function () {
        return R;
      }),
      n.d(t, "uspDataHandler", function () {
        return U;
      }),
      n.d(t, "coppaDataHandler", function () {
        return B;
      }),
      n.d(t, "clientTestAdapters", function () {
        return x;
      }),
      n.d(t, "allS2SBidders", function () {
        return D;
      }),
      (t.getAllS2SBidders = k),
      (t.setS2STestingModule = function (e) {
        j = e;
      });
    var r = n(0),
      i = n(100),
      o = n(38),
      a = n(1),
      c = n(4),
      u = n(3),
      s = n(9),
      d = n(12),
      f = n.n(d),
      l = n(11),
      p = n.n(l),
      g = n(74),
      b = n(20);
    function v(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            i,
            o = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          }
          return o;
        })(e, t) ||
        h(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function y(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return m(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        h(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function h(e, t) {
      if (e) {
        if ("string" == typeof e) return m(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? m(e, t)
            : void 0
        );
      }
    }
    function m(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function O() {
      return (O =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var j,
      S = n(5),
      E = n(10),
      A = {},
      T = (A.bidderRegistry = {}),
      I = (A.aliasRegistry = {}),
      w = [];
    u.b.getConfig("s2sConfig", function (e) {
      e &&
        e.s2sConfig &&
        (w = Object(r.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
    });
    var C = {};
    var _ = Object(s.b)(
      "sync",
      function (e) {
        var t = e.bidderCode,
          n = e.auctionId,
          a = e.bidderRequestId,
          c = e.adUnits,
          u = e.labels,
          s = e.src;
        return c
          .reduce(function (e, c) {
            var d = Object(i.b)(Object(i.a)(c, u), c.mediaTypes, c.sizes),
              f = d.active,
              l = d.mediaTypes,
              p = d.filterResults;
            return (
              f
                ? p &&
                  Object(r.logInfo)(
                    'Size mapping filtered adUnit "'.concat(
                      c.code,
                      '" banner sizes from '
                    ),
                    p.before,
                    "to ",
                    p.after
                  )
                : Object(r.logInfo)(
                    'Size mapping disabled adUnit "'.concat(c.code, '"')
                  ),
              f &&
                e.push(
                  c.bids
                    .filter(function (e) {
                      return e.bidder === t;
                    })
                    .reduce(function (e, t) {
                      var d =
                        c.nativeParams ||
                        Object(r.deepAccess)(c, "mediaTypes.native");
                      d && (t = O({}, t, { nativeParams: Object(o.h)(d) })),
                        (t = O(
                          {},
                          t,
                          Object(r.getDefinedParams)(c, [
                            "ortb2Imp",
                            "mediaType",
                            "renderer",
                            "storedAuctionResponse",
                          ])
                        ));
                      var f = Object(i.b)(Object(i.a)(t, u), l),
                        p = f.active,
                        b = f.mediaTypes,
                        v = f.filterResults;
                      return (
                        p
                          ? v &&
                            Object(r.logInfo)(
                              'Size mapping filtered adUnit "'
                                .concat(c.code, '" bidder "')
                                .concat(t.bidder, '" banner sizes from '),
                              v.before,
                              "to ",
                              v.after
                            )
                          : Object(r.logInfo)(
                              'Size mapping deactivated adUnit "'
                                .concat(c.code, '" bidder "')
                                .concat(t.bidder, '"')
                            ),
                        Object(r.isValidMediaTypes)(b)
                          ? (t = O({}, t, { mediaTypes: b }))
                          : Object(r.logError)(
                              "mediaTypes is not correctly configured for adunit ".concat(
                                c.code
                              )
                            ),
                        p &&
                          e.push(
                            O({}, t, {
                              adUnitCode: c.code,
                              transactionId: c.transactionId,
                              sizes:
                                Object(r.deepAccess)(b, "banner.sizes") ||
                                Object(r.deepAccess)(b, "video.playerSize") ||
                                [],
                              bidId:
                                t.bid_id || Object(r.getUniqueIdentifierStr)(),
                              bidderRequestId: a,
                              auctionId: n,
                              src: s,
                              bidRequestsCount: g.a.getRequestsCounter(c.code),
                              bidderRequestsCount: g.a.getBidderRequestsCounter(
                                c.code,
                                t.bidder
                              ),
                              bidderWinsCount: g.a.getBidderWinsCounter(
                                c.code,
                                t.bidder
                              ),
                            })
                          ),
                        e
                      );
                    }, [])
                ),
              e
            );
          }, [])
          .reduce(r.flatten, [])
          .filter(function (e) {
            return "" !== e;
          });
      },
      "getBids"
    );
    var R = {
        consentData: null,
        setConsentData: function (e) {
          R.consentData = e;
        },
        getConsentData: function () {
          return R.consentData;
        },
      },
      U = {
        consentData: null,
        setConsentData: function (e) {
          U.consentData = e;
        },
        getConsentData: function () {
          return U.consentData;
        },
      },
      B = {
        getCoppa: function () {
          return !!u.b.getConfig("coppa");
        },
      },
      x = [],
      D = [];
    function k() {
      (A.s2STestingEnabled = !1),
        w.forEach(function (e) {
          e &&
            e.enabled &&
            e.bidders &&
            e.bidders.length &&
            D.push.apply(D, y(e.bidders));
        });
    }
    function N(e) {
      return e && e.enabled && e.testing && j;
    }
    function P(e, t, n) {
      try {
        var i = T[e].getSpec();
        i &&
          i[t] &&
          "function" == typeof i[t] &&
          (Object(r.logInfo)("Invoking ".concat(e, ".").concat(t)),
          u.b.runWithBidder(e, r.bind.call(i[t], i, n)));
      } catch (n) {
        Object(r.logWarn)("Error calling ".concat(t, " of ").concat(e));
      }
    }
    (A.makeBidRequests = Object(s.b)(
      "sync",
      function (e, t, n, i, o) {
        E.emit(S.EVENTS.BEFORE_REQUEST_BIDS, e);
        var a = Object(r.getBidderCodes)(e);
        u.b.getConfig("bidderSequence") === u.a && (a = Object(r.shuffle)(a));
        var c = Object(b.a)(),
          s = a,
          d = [];
        0 === D.length && k(),
          w.forEach(function (t) {
            t &&
              t.enabled &&
              N(t) &&
              (j.calculateBidSources(t),
              j.getSourceBidderMap(e, D)[j.CLIENT].forEach(function (e) {
                f()(x, e) || x.push(e);
              }));
          }),
          (s = a.filter(function (e) {
            return !f()(D, e) || f()(x, e);
          }));
        var l = D;
        w.forEach(function (i) {
          if (i && i.enabled) {
            (function (e) {
              return Boolean(N(e) && e.testServerOnly);
            })(i) &&
              (function (e, t) {
                return Boolean(
                  p()(e, function (e) {
                    return p()(e.bids, function (e) {
                      return (
                        (e.bidSource ||
                          (t.bidderControl && t.bidderControl[e.bidder])) &&
                        e.finalSource === j.SERVER
                      );
                    });
                  })
                );
              })(e, i) &&
              (Object(r.logWarn)(
                "testServerOnly: True.  All client requests will be suppressed."
              ),
              (s.length = 0));
            var a = (function (e, t) {
                var n = t.bidders,
                  i = Object(r.deepClone)(e);
                return (
                  i.forEach(function (e) {
                    e.bids = e.bids
                      .filter(function (e) {
                        return (
                          f()(n, e.bidder) &&
                          (!N(t) || e.finalSource !== j.CLIENT)
                        );
                      })
                      .map(function (e) {
                        return (
                          (e.bid_id = Object(r.getUniqueIdentifierStr)()), e
                        );
                      });
                  }),
                  i.filter(function (e) {
                    return 0 !== e.bids.length;
                  })
                );
              })(e, i),
              u = Object(r.generateUUID)();
            l.forEach(function (e) {
              var s = Object(r.getUniqueIdentifierStr)(),
                f = {
                  bidderCode: e,
                  auctionId: n,
                  bidderRequestId: s,
                  tid: u,
                  bids: _({
                    bidderCode: e,
                    auctionId: n,
                    bidderRequestId: s,
                    adUnits: Object(r.deepClone)(a),
                    labels: o,
                    src: S.S2S.SRC,
                  }),
                  auctionStart: t,
                  timeout: i.timeout,
                  src: S.S2S.SRC,
                  refererInfo: c,
                };
              0 !== f.bids.length && d.push(f);
            }),
              a.forEach(function (e) {
                var t = e.bids.filter(function (e) {
                  return p()(d, function (t) {
                    return p()(t.bids, function (t) {
                      return t.bidId === e.bid_id;
                    });
                  });
                });
                e.bids = t;
              }),
              d.forEach(function (e) {
                void 0 === e.adUnitsS2SCopy &&
                  (e.adUnitsS2SCopy = a.filter(function (e) {
                    return e.bids.length > 0;
                  }));
              });
          }
        });
        var g = (function (e) {
          var t = Object(r.deepClone)(e);
          return (
            t.forEach(function (e) {
              e.bids = e.bids.filter(function (e) {
                return !x.length || e.finalSource !== j.SERVER;
              });
            }),
            t.filter(function (e) {
              return 0 !== e.bids.length;
            })
          );
        })(e);
        return (
          s.forEach(function (e) {
            var a = Object(r.getUniqueIdentifierStr)(),
              u = {
                bidderCode: e,
                auctionId: n,
                bidderRequestId: a,
                bids: _({
                  bidderCode: e,
                  auctionId: n,
                  bidderRequestId: a,
                  adUnits: Object(r.deepClone)(g),
                  labels: o,
                  src: "client",
                }),
                auctionStart: t,
                timeout: i,
                refererInfo: c,
              },
              s = T[e];
            s ||
              Object(r.logError)(
                "Trying to make a request for bidder that does not exist: ".concat(
                  e
                )
              ),
              s && u.bids && 0 !== u.bids.length && d.push(u);
          }),
          R.getConsentData() &&
            d.forEach(function (e) {
              e.gdprConsent = R.getConsentData();
            }),
          U.getConsentData() &&
            d.forEach(function (e) {
              e.uspConsent = U.getConsentData();
            }),
          d
        );
      },
      "makeBidRequests"
    )),
      (A.callBids = function (e, t, n, i, o, a, s) {
        if (t.length) {
          var d = v(
              t.reduce(
                function (e, t) {
                  return (
                    e[Number(void 0 !== t.src && t.src === S.S2S.SRC)].push(t),
                    e
                  );
                },
                [[], []]
              ),
              2
            ),
            l = d[0],
            p = d[1],
            g = [];
          p.forEach(function (e) {
            for (var t = -1, n = 0; n < g.length; ++n)
              if (e.tid === g[n].tid) {
                t = n;
                break;
              }
            t <= -1 && g.push(e);
          });
          var b = 0;
          w.forEach(function (e) {
            if (e && g[b] && f()(e.bidders, g[b].bidderCode)) {
              var t = Object(c.b)(
                  a,
                  o
                    ? { request: o.request.bind(null, "s2s"), done: o.done }
                    : void 0
                ),
                u = e.bidders,
                s = T[e.adapter],
                d = g[b].tid,
                l = g[b].adUnitsS2SCopy,
                v = p.filter(function (e) {
                  return e.tid === d;
                });
              if (s) {
                var y = { tid: d, ad_units: l, s2sConfig: e };
                if (y.ad_units.length) {
                  var h = v.map(function (e) {
                      return (e.start = Object(r.timestamp)()), i.bind(e);
                    }),
                    m = y.ad_units.reduce(function (e, t) {
                      return e.concat(
                        (t.bids || []).reduce(function (e, t) {
                          return e.concat(t.bidder);
                        }, [])
                      );
                    }, []);
                  Object(r.logMessage)(
                    "CALLING S2S HEADER BIDDERS ==== ".concat(
                      u
                        .filter(function (e) {
                          return f()(m, e);
                        })
                        .join(",")
                    )
                  ),
                    v.forEach(function (e) {
                      E.emit(S.EVENTS.BID_REQUESTED, e);
                    }),
                    s.callBids(
                      y,
                      p,
                      function (e, t) {
                        var i = Object(r.getBidderRequest)(p, t.bidderCode, e);
                        i && n.call(i, e, t);
                      },
                      function () {
                        return h.forEach(function (e) {
                          return e();
                        });
                      },
                      t
                    );
                }
              } else Object(r.logError)("missing " + e.adapter);
              b++;
            }
          }),
            l.forEach(function (e) {
              e.start = Object(r.timestamp)();
              var t = T[e.bidderCode];
              u.b.runWithBidder(e.bidderCode, function () {
                Object(r.logMessage)("CALLING BIDDER"),
                  E.emit(S.EVENTS.BID_REQUESTED, e);
              });
              var d = Object(c.b)(
                  a,
                  o
                    ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done,
                      }
                    : void 0
                ),
                f = i.bind(e);
              try {
                u.b.runWithBidder(
                  e.bidderCode,
                  r.bind.call(
                    t.callBids,
                    t,
                    e,
                    n.bind(e),
                    f,
                    d,
                    s,
                    u.b.callbackWithBidder(e.bidderCode)
                  )
                );
              } catch (t) {
                Object(r.logError)(
                  "".concat(
                    e.bidderCode,
                    " Bid Adapter emitted an uncaught error when parsing their bidRequest"
                  ),
                  { e: t, bidRequest: e }
                ),
                  f();
              }
            });
        } else
          Object(r.logWarn)(
            "callBids executed with no bidRequests.  Were they filtered by labels or sizing?"
          );
      }),
      (A.videoAdapters = []),
      (A.registerBidAdapter = function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = n.supportedMediaTypes,
          a = void 0 === i ? [] : i;
        e && t
          ? "function" == typeof e.callBids
            ? ((T[t] = e),
              f()(a, "video") && A.videoAdapters.push(t),
              f()(a, "native") && o.f.push(t))
            : Object(r.logError)(
                "Bidder adaptor error for bidder code: " +
                  t +
                  "bidder must implement a callBids() function"
              )
          : Object(r.logError)("bidAdapter or bidderCode not specified");
      }),
      (A.aliasBidAdapter = function (e, t, n) {
        if (void 0 === T[t]) {
          var i = T[e];
          if (void 0 === i) {
            var c = [];
            w.forEach(function (n) {
              if (n.bidders && n.bidders.length) {
                var r = n && n.bidders;
                n && f()(r, t) ? (I[t] = e) : c.push(e);
              }
            }),
              c.forEach(function (e) {
                Object(r.logError)(
                  'bidderCode "' + e + '" is not an existing bidder.',
                  "adapterManager.aliasBidAdapter"
                );
              });
          } else
            try {
              var u,
                s = (function (e) {
                  var t = [];
                  return (
                    f()(A.videoAdapters, e) && t.push("video"),
                    f()(o.f, e) && t.push("native"),
                    t
                  );
                })(e);
              if (i.constructor.prototype != Object.prototype)
                (u = new i.constructor()).setBidderCode(t);
              else {
                var d = i.getSpec(),
                  l = n && n.gvlid,
                  p = n && n.skipPbsAliasing;
                (u = Object(a.newBidder)(
                  O({}, d, { code: t, gvlid: l, skipPbsAliasing: p })
                )),
                  (I[t] = e);
              }
              A.registerBidAdapter(u, t, { supportedMediaTypes: s });
            } catch (t) {
              Object(r.logError)(
                e + " bidder does not currently support aliasing.",
                "adapterManager.aliasBidAdapter"
              );
            }
        } else
          Object(r.logMessage)(
            'alias name "' + t + '" has been already specified.'
          );
      }),
      (A.registerAnalyticsAdapter = function (e) {
        var t = e.adapter,
          n = e.code,
          i = e.gvlid;
        t && n
          ? "function" == typeof t.enableAnalytics
            ? ((t.code = n), (C[n] = { adapter: t, gvlid: i }))
            : Object(r.logError)(
                'Prebid Error: Analytics adaptor error for analytics "'.concat(
                  n,
                  '"\n        analytics adapter must implement an enableAnalytics() function'
                )
              )
          : Object(r.logError)(
              "Prebid Error: analyticsAdapter or analyticsCode not specified"
            );
      }),
      (A.enableAnalytics = function (e) {
        Object(r.isArray)(e) || (e = [e]),
          Object(r._each)(e, function (e) {
            var t = C[e.provider].adapter;
            t
              ? t.enableAnalytics(e)
              : Object(r.logError)(
                  "Prebid Error: no analytics adapter found in registry for\n        ".concat(
                    e.provider,
                    "."
                  )
                );
          });
      }),
      (A.getBidAdapter = function (e) {
        return T[e];
      }),
      (A.getAnalyticsAdapter = function (e) {
        return C[e];
      }),
      (A.callTimedOutBidders = function (e, t, n) {
        (t = t.map(function (t) {
          return (
            (t.params = Object(r.getUserConfiguredParams)(
              e,
              t.adUnitCode,
              t.bidder
            )),
            (t.timeout = n),
            t
          );
        })),
          (t = Object(r.groupBy)(t, "bidder")),
          Object.keys(t).forEach(function (e) {
            P(e, "onTimeout", t[e]);
          });
      }),
      (A.callBidWonBidder = function (e, t, n) {
        (t.params = Object(r.getUserConfiguredParams)(
          n,
          t.adUnitCode,
          t.bidder
        )),
          g.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder),
          P(e, "onBidWon", t);
      }),
      (A.callSetTargetingBidder = function (e, t) {
        P(e, "onSetTargeting", t);
      }),
      (A.callBidViewableBidder = function (e, t) {
        P(e, "onBidViewable", t);
      }),
      (t.default = A);
  },
  80: function (e, t, n) {
    var r = n(367);
    e.exports = r;
  },
  81: function (e, t, n) {
    "use strict";
    t.a = function (e) {
      var t = e;
      return {
        callBids: function () {},
        setBidderCode: function (e) {
          t = e;
        },
        getBidderCode: function () {
          return t;
        },
      };
    };
  },
  82: function (e, t, n) {
    var r = n(29),
      i = n(50),
      o = "".split;
    e.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == i(e) ? o.call(e, "") : Object(e);
        }
      : Object;
  },
  83: function (e, t, n) {
    var r = n(33),
      i = n(29),
      o = n(84);
    e.exports =
      !r &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  84: function (e, t, n) {
    var r = n(27),
      i = n(30),
      o = r.document,
      a = i(o) && i(o.createElement);
    e.exports = function (e) {
      return a ? o.createElement(e) : {};
    };
  },
  85: function (e, t, n) {
    var r = n(18),
      i = n(65);
    (e.exports = function (e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.15.1",
      mode: r ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
    });
  },
  86: function (e, t, n) {
    var r = n(113),
      i = n(29);
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && r && r < 41)
        );
      });
  },
  87: function (e, t, n) {
    var r = n(49),
      i = n(53),
      o = n(118),
      a = function (e) {
        return function (t, n, a) {
          var c,
            u = r(t),
            s = i(u.length),
            d = o(a, s);
          if (e && n != n) {
            for (; s > d; ) if ((c = u[d++]) != c) return !0;
          } else
            for (; s > d; d++)
              if ((e || d in u) && u[d] === n) return e || d || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: a(!0), indexOf: a(!1) };
  },
  88: function (e, t, n) {
    var r = n(119);
    n(139),
      n(141),
      n(143),
      n(145),
      n(147),
      n(148),
      n(149),
      n(150),
      n(151),
      n(152),
      n(153),
      n(154),
      n(155),
      n(156),
      n(157),
      n(158),
      n(159),
      n(160),
      (e.exports = r);
  },
  89: function (e, t, n) {
    var r = n(56),
      i = n(30),
      o = n(31),
      a = n(34).f,
      c = n(66),
      u = n(122),
      s = c("meta"),
      d = 0,
      f =
        Object.isExtensible ||
        function () {
          return !0;
        },
      l = function (e) {
        a(e, s, { value: { objectID: "O" + ++d, weakData: {} } });
      },
      p = (e.exports = {
        REQUIRED: !1,
        fastKey: function (e, t) {
          if (!i(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!o(e, s)) {
            if (!f(e)) return "F";
            if (!t) return "E";
            l(e);
          }
          return e[s].objectID;
        },
        getWeakData: function (e, t) {
          if (!o(e, s)) {
            if (!f(e)) return !0;
            if (!t) return !1;
            l(e);
          }
          return e[s].weakData;
        },
        onFreeze: function (e) {
          return u && p.REQUIRED && f(e) && !o(e, s) && l(e), e;
        },
      });
    r[s] = !0;
  },
  9: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return c;
      }),
      (t.d = function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          r = e.getHooks({ hook: t });
        0 === r.length && e.before(t, n);
      }),
      (t.c = function (e, t) {
        a(
          "async",
          function (e) {
            e.forEach(function (e) {
              return t.apply(
                void 0,
                (function (e) {
                  if (Array.isArray(e)) return o(e);
                })((n = e)) ||
                  (function (e) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e["@@iterator"]
                    )
                      return Array.from(e);
                  })(n) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return o(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(e)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? o(e, t)
                          : void 0
                      );
                    }
                  })(n) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              );
              var n;
            });
          },
          e
        )([]);
      }),
      (t.e = function (e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        c(e).before(function (e, t) {
          t.push(n), e(t);
        });
      });
    var r = n(170),
      i = n.n(r);
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var a = i()({ ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE }),
      c = a.get;
  },
  90: function (e, t, n) {
    var r = n(21),
      i = n(41),
      o = r("iterator"),
      a = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (i.Array === e || a[o] === e);
    };
  },
  91: function (e, t, n) {
    var r = n(16);
    e.exports = function (e) {
      var t = e.return;
      if (void 0 !== t) return r(t.call(e)).value;
    };
  },
  914: function (e, t, n) {
    e.exports = n(79);
  },
  92: function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  93: function (e, t, n) {
    var r = n(71);
    e.exports = function (e, t, n) {
      for (var i in t) n && n.unsafe && e[i] ? (e[i] = t[i]) : r(e, i, t[i], n);
      return e;
    };
  },
  94: function (e, t, n) {
    "use strict";
    var r = n(95).IteratorPrototype,
      i = n(70),
      o = n(44),
      a = n(59),
      c = n(41),
      u = function () {
        return this;
      };
    e.exports = function (e, t, n) {
      var s = t + " Iterator";
      return (
        (e.prototype = i(r, { next: o(1, n) })), a(e, s, !1, !0), (c[s] = u), e
      );
    };
  },
  95: function (e, t, n) {
    "use strict";
    var r,
      i,
      o,
      a = n(29),
      c = n(96),
      u = n(32),
      s = n(31),
      d = n(21),
      f = n(18),
      l = d("iterator"),
      p = !1;
    [].keys &&
      ("next" in (o = [].keys())
        ? (i = c(c(o))) !== Object.prototype && (r = i)
        : (p = !0));
    var g =
      null == r ||
      a(function () {
        var e = {};
        return r[l].call(e) !== e;
      });
    g && (r = {}),
      (f && !g) ||
        s(r, l) ||
        u(r, l, function () {
          return this;
        }),
      (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
  },
  96: function (e, t, n) {
    var r = n(31),
      i = n(52),
      o = n(69),
      a = n(131),
      c = o("IE_PROTO"),
      u = Object.prototype;
    e.exports = a
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = i(e)),
            r(e, c)
              ? e[c]
              : "function" == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? u
              : null
          );
        };
  },
  97: function (e, t, n) {
    "use strict";
    var r = n(136).charAt,
      i = n(46),
      o = n(72),
      a = "String Iterator",
      c = i.set,
      u = i.getterFor(a);
    o(
      String,
      "String",
      function (e) {
        c(this, { type: a, string: String(e), index: 0 });
      },
      function () {
        var e,
          t = u(this),
          n = t.string,
          i = t.index;
        return i >= n.length
          ? { value: void 0, done: !0 }
          : ((e = r(n, i)), (t.index += e.length), { value: e, done: !1 });
      }
    );
  },
  98: function (e, t, n) {
    "use strict";
    var r = n(49),
      i = n(54),
      o = n(41),
      a = n(46),
      c = n(72),
      u = "Array Iterator",
      s = a.set,
      d = a.getterFor(u);
    (e.exports = c(
      Array,
      "Array",
      function (e, t) {
        s(this, { type: u, target: r(e), index: 0, kind: t });
      },
      function () {
        var e = d(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 };
      },
      "values"
    )),
      (o.Arguments = o.Array),
      i("keys"),
      i("values"),
      i("entries");
  },
  99: function (e, t, n) {
    var r = n(161);
    e.exports = r;
  },
});
pbjsChunk(
  [361],
  {
    103: function (e, t, r) {
      e.exports = r(104);
    },
    104: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return T;
        });
      var n = r(1),
        i = r(3),
        o = r(0),
        a = r(2);
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                u(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var p = "33across",
        l = "https://ssc.33across.com/api/v1/hb",
        b = "https://ssc-cms.33across.com/ps/?m=xch&rt=html&ru=deb",
        f = /^[a-zA-Z0-9_-]{22}$/,
        m = "siab",
        g = "inview",
        h = "instream",
        v = [
          "mimes",
          "minduration",
          "maxduration",
          "placement",
          "protocols",
          "startdelay",
          "skip",
          "skipafter",
          "minbitrate",
          "maxbitrate",
          "delivery",
          "playbackmethod",
          "api",
          "linearity",
        ],
        y = { uniqueSiteIds: [] },
        O = "nm";
      function j() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = arguments.length > 2 ? arguments[2] : void 0;
        return s({}, e, { ext: s({}, e.ext, u({}, t, r)) });
      }
      function A(e) {
        return { w: parseInt(e[0], 10), h: parseInt(e[1], 10) };
      }
      function w(e) {
        var t = e.params,
          r = e.mediaTypes,
          n = r.banner,
          i = r.video;
        return i && !n && "instream" === i.context
          ? h
          : t.productId === g
          ? t.productId
          : m;
      }
      function x(e, t, r) {
        var n = e.getFloor({ currency: "USD", mediaType: r, size: [t.w, t.h] });
        if (!isNaN(n.floor) && "USD" === n.currency) return n.floor;
      }
      function I(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = t.w,
          n = t.h,
          i = e.getBoundingClientRect(),
          o = i.width,
          a = i.height,
          s = i.left,
          c = i.top,
          d = i.right,
          u = i.bottom;
        return (
          (0 === o || 0 === a) &&
            r &&
            n &&
            ((o = r), (a = n), (d = s + r), (u = c + n)),
          { width: o, height: a, left: s, top: c, right: d, bottom: u }
        );
      }
      function S(e) {
        for (
          var t = {
              left: e[0].left,
              right: e[0].right,
              top: e[0].top,
              bottom: e[0].bottom,
            },
            r = 1;
          r < e.length;
          ++r
        ) {
          if (
            ((t.left = Math.max(t.left, e[r].left)),
            (t.right = Math.min(t.right, e[r].right)),
            t.left >= t.right)
          )
            return null;
          if (
            ((t.top = Math.max(t.top, e[r].top)),
            (t.bottom = Math.min(t.bottom, e[r].bottom)),
            t.top >= t.bottom)
          )
            return null;
        }
        return (t.width = t.right - t.left), (t.height = t.bottom - t.top), t;
      }
      function C(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = r.w,
          i = r.h,
          o = I(e, { w: n, h: i }),
          a = S([
            { left: 0, top: 0, right: t.innerWidth, bottom: t.innerHeight },
            o,
          ]);
        return null !== a
          ? ((a.width * a.height) / (o.width * o.height)) * 100
          : 0;
      }
      var T = {
        NON_MEASURABLE: O,
        code: p,
        supportedMediaTypes: [a.b, a.d],
        isBidRequestValid: function (e) {
          return (
            (function (e) {
              if (e.bidder !== p || void 0 === e.params) return !1;
              if (
                !(function (e) {
                  if (
                    null ===
                    (Object(o.deepAccess)(e, "params.siteId", "") || "")
                      .trim()
                      .match(f)
                  )
                    return !1;
                  return !0;
                })(e)
              )
                return !1;
              return !0;
            })(e) &&
            (function (e) {
              var t = Object(o.deepAccess)(e, "mediaTypes.banner");
              if (void 0 === t) return !0;
              if (!Array.isArray(t.sizes)) return !1;
              return !0;
            })(e) &&
            (function (e) {
              var t = Object(o.deepAccess)(e, "mediaTypes.video"),
                r = Object(o.deepAccess)(e, "params.video", {});
              if (void 0 === t) return !0;
              if (!Array.isArray(t.playerSize)) return !1;
              if (!t.context) return !1;
              var n = d(d({}, t), r);
              if (!Array.isArray(n.mimes) || 0 === n.mimes.length) return !1;
              if (!Array.isArray(n.protocols) || 0 === n.protocols.length)
                return !1;
              if (void 0 !== n.placement && "number" != typeof n.placement)
                return !1;
              if (
                "instream" === t.context &&
                void 0 !== n.startdelay &&
                "number" != typeof n.startdelay
              )
                return !1;
              return !0;
            })(e)
          );
        },
        buildRequests: function (e, t) {
          var r = s(
              { consentString: void 0, gdprApplies: !1 },
              t && t.gdprConsent
            ),
            n = t && t.uspConsent,
            c = t && t.refererInfo ? t.refererInfo.referer : void 0;
          return (
            (y.uniqueSiteIds = e
              .map(function (e) {
                return e.params.siteId;
              })
              .filter(o.uniques)),
            e.map(function (e) {
              return (function (e) {
                var t = e.bidRequest,
                  r = e.gdprConsent,
                  n = void 0 === r ? {} : r,
                  c = e.uspConsent,
                  u = e.pageUrl,
                  p = {},
                  b = t.params;
                (p.imp = [{}]),
                  Object(o.deepAccess)(t, "mediaTypes.banner") &&
                    (p.imp[0].banner = d(
                      {},
                      (function (e) {
                        var t,
                          r = Object(o.deepAccess)(e, "mediaTypes.banner", {}),
                          n =
                            ((c = e.adUnitCode),
                            document.getElementById(c) ||
                              document.getElementById(
                                (function (e) {
                                  if (Object(o.isGptPubadsDefined)())
                                    for (
                                      var t = googletag.pubads().getSlots(),
                                        r = Object(o.isSlotMatchingAdUnitCode)(
                                          e
                                        ),
                                        n = 0;
                                      n < t.length;
                                      n++
                                    )
                                      if (r(t[n])) {
                                        var i = t[n].getSlotElementId();
                                        return (
                                          Object(o.logInfo)(
                                            "[33Across Adapter] Map ad unit path to HTML element id: '"
                                              .concat(e, "' -> ")
                                              .concat(i)
                                          ),
                                          i
                                        );
                                      }
                                  return (
                                    Object(o.logWarn)(
                                      "[33Across Adapter] Unable to locate element for ad unit code: '".concat(
                                        e,
                                        "'"
                                      )
                                    ),
                                    null
                                  );
                                })(c)
                              )),
                          i = (function (e) {
                            if (
                              Object(o.isArray)(e) &&
                              2 === e.length &&
                              !Object(o.isArray)(e[0])
                            )
                              return [A(e)];
                            return e.map(A);
                          })(r.sizes);
                        var c;
                        t =
                          "function" == typeof e.getFloor
                            ? i.map(function (t) {
                                var r,
                                  n = x(e, t, a.b);
                                return (
                                  n &&
                                    (r = { ext: { ttx: { bidfloors: [n] } } }),
                                  s({}, t, r)
                                );
                              })
                            : i;
                        var d = (function (e) {
                            return e.reduce(function (e, t) {
                              return t.h * t.w < e.h * e.w ? t : e;
                            });
                          })(i),
                          u = (function (e) {
                            return {
                              ttx: {
                                viewability: {
                                  amount: isNaN(e) ? e : Math.round(e),
                                },
                              },
                            };
                          })(
                            (function (e) {
                              return (
                                !(function () {
                                  try {
                                    return (
                                      Object(o.getWindowSelf)() !==
                                      Object(o.getWindowTop)()
                                    );
                                  } catch (e) {
                                    return !0;
                                  }
                                })() && null !== e
                              );
                            })(n)
                              ? (function (e, t) {
                                  var r =
                                      arguments.length > 2 &&
                                      void 0 !== arguments[2]
                                        ? arguments[2]
                                        : {},
                                    n = r.w,
                                    i = r.h;
                                  return "visible" ===
                                    t.document.visibilityState
                                    ? C(e, t, { w: n, h: i })
                                    : 0;
                                })(n, Object(o.getWindowTop)(), d)
                              : O
                          );
                        return { format: t, ext: u };
                      })(t)
                    ));
                Object(o.deepAccess)(t, "mediaTypes.video") &&
                  (p.imp[0].video = (function (e) {
                    var t = Object(o.deepAccess)(e, "mediaTypes.video", {}),
                      r = Object(o.deepAccess)(e, "params.video", {}),
                      n = d(d({}, t), r),
                      i = {},
                      c = A(n.playerSize[0]),
                      u = c.w,
                      p = c.h;
                    (i.w = u),
                      (i.h = p),
                      v.forEach(function (e) {
                        n.hasOwnProperty(e) && (i[e] = n[e]);
                      });
                    var l = w(e);
                    (i.placement = i.placement || 2),
                      l === h &&
                        ((i.startdelay = i.startdelay || 0), (i.placement = 1));
                    if ("function" == typeof e.getFloor) {
                      var b = x(e, { w: i.w, h: i.h }, a.d);
                      b && s(i, { ext: { ttx: { bidfloors: [b] } } });
                    }
                    return i;
                  })(t));
                (p.imp[0].ext = { ttx: { prod: w(t) } }),
                  (p.site = { id: b.siteId }),
                  u && (p.site.page = u);
                (p.id = t.bidId),
                  n.consentString &&
                    (p.user = j(p.user, "consent", n.consentString));
                Array.isArray(t.userIdAsEids) &&
                  t.userIdAsEids.length > 0 &&
                  (p.user = j(p.user, "eids", t.userIdAsEids));
                (p.regs = j(p.regs, "gdpr", Number(n.gdprApplies))),
                  c && (p.regs = j(p.regs, "us_privacy", c));
                (p.ext = {
                  ttx: {
                    prebidStartedAt: Date.now(),
                    caller: [{ name: "prebidjs", version: "5.16.0" }],
                  },
                }),
                  t.schain && (p.source = j(p.source, "schain", t.schain));
                1 === b.test && (p.test = 1);
                var f = { contentType: "text/plain", withCredentials: !0 },
                  m = i.b.getConfig("ttxSettings");
                return {
                  method: "POST",
                  url: (m && m.url) || "".concat(l, "?guid=").concat(b.siteId),
                  data: JSON.stringify(p),
                  options: f,
                };
              })({ bidRequest: e, gdprConsent: r, uspConsent: n, pageUrl: c });
            })
          );
        },
        interpretResponse: function (e, t) {
          var r = [];
          return (
            e.body.seatbid.length > 0 &&
              e.body.seatbid[0].bid.length > 0 &&
              r.push(
                (function (e) {
                  var t =
                      e.seatbid[0].bid[0].adomain &&
                      e.seatbid[0].bid[0].adomain.length,
                    r = {
                      requestId: e.id,
                      bidderCode: p,
                      cpm: e.seatbid[0].bid[0].price,
                      width: e.seatbid[0].bid[0].w,
                      height: e.seatbid[0].bid[0].h,
                      ad: e.seatbid[0].bid[0].adm,
                      ttl: e.seatbid[0].bid[0].ttl || 60,
                      creativeId: e.seatbid[0].bid[0].crid,
                      mediaType: Object(o.deepAccess)(
                        e.seatbid[0].bid[0],
                        "ext.ttx.mediaType",
                        a.b
                      ),
                      currency: e.cur,
                      netRevenue: !0,
                    };
                  t &&
                    (r.meta = {
                      advertiserDomains: e.seatbid[0].bid[0].adomain,
                    });
                  if (r.mediaType === a.d) {
                    "xml" ===
                    Object(o.deepAccess)(
                      e.seatbid[0].bid[0],
                      "ext.ttx.vastType",
                      "xml"
                    )
                      ? (r.vastXml = r.ad)
                      : (r.vastUrl = r.ad);
                  }
                  return r;
                })(e.body)
              ),
            r
          );
        },
        getUserSyncs: function (e, t, r, n) {
          var o = e.iframeEnabled
            ? y.uniqueSiteIds.map(function (e) {
                return (function (e) {
                  var t = e.siteId,
                    r = void 0 === t ? "zzz000000000003zzz" : t,
                    n = e.gdprConsent,
                    o = void 0 === n ? {} : n,
                    a = e.uspConsent,
                    s = i.b.getConfig("ttxSettings"),
                    c = (s && s.syncUrl) || b,
                    d = o.consentString,
                    u = o.gdprApplies,
                    p = {
                      type: "iframe",
                      url: ""
                        .concat(c, "&id=")
                        .concat(r, "&gdpr_consent=")
                        .concat(encodeURIComponent(d), "&us_privacy=")
                        .concat(encodeURIComponent(a)),
                    };
                  "boolean" == typeof u &&
                    (p.url += "&gdpr=".concat(Number(u)));
                  return p;
                })({ gdprConsent: r, uspConsent: n, siteId: e });
              })
            : [];
          return (y.uniqueSiteIds = []), o;
        },
      };
      Object(n.registerBidder)(T);
    },
  },
  [103]
);
pbjsChunk(
  [349],
  {
    206: function (e, t, r) {
      e.exports = r(207);
    },
    207: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return l;
        });
      var a = r(1),
        n = r(2),
        i = r(0);
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var c = "https://pub.admanmedia.com/?c=o&m=multi";
      function p(e) {
        if (!(e.requestId && e.cpm && e.creativeId && e.ttl && e.currency))
          return !1;
        switch (e.mediaType) {
          case n.b:
            return Boolean(e.width && e.height && e.ad);
          case n.d:
            return Boolean(e.vastUrl);
          case n.c:
            return Boolean(
              e.native &&
                e.native.title &&
                e.native.image &&
                e.native.impressionTrackers
            );
          default:
            return !1;
        }
      }
      function u(e) {
        if (!Object(i.isFn)(e.getFloor))
          return Object(i.deepAccess)(e, "params.bidfloor", 0);
        try {
          return e.getFloor({ currency: "USD", mediaType: "*", size: "*" })
            .floor;
        } catch (e) {
          return 0;
        }
      }
      function m(e, t, r, a) {
        if (t) {
          var n = { id: t };
          a && (n.ext = a), e.push({ source: r, uids: [n] });
        }
      }
      var l = {
        code: "adman",
        supportedMediaTypes: [n.b, n.d, n.c],
        isBidRequestValid: function (e) {
          return Boolean(e.bidId && e.params && !isNaN(e.params.placementId));
        },
        buildRequests: function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            r = arguments.length > 1 ? arguments[1] : void 0,
            a = window;
          try {
            (e = new URL(r.refererInfo.referer)), (a = window.top);
          } catch (t) {
            (e = a.location), Object(i.logMessage)(t);
          }
          var s = [],
            d = {
              deviceWidth: a.screen.width,
              deviceHeight: a.screen.height,
              language:
                navigator && navigator.language ? navigator.language : "",
              secure: 1,
              host: e.host,
              page: e.pathname,
              placements: s,
            };
          -1 != d.language.indexOf("-") &&
            (d.language = d.language.split("-")[0]),
            r &&
              (r.uspConsent && (d.ccpa = r.uspConsent),
              r.gdprConsent && (d.gdpr = r.gdprConsent));
          for (var o = t.length, p = 0; p < o; p++) {
            var l = t[p],
              g = l.params.traffic || n.b,
              y = {
                placementId: l.params.placementId,
                bidId: l.bidId,
                sizes:
                  l.mediaTypes && l.mediaTypes[g] && l.mediaTypes[g].sizes
                    ? l.mediaTypes[g].sizes
                    : [],
                traffic: g,
                eids: [],
                bidFloor: u(l),
              };
            l.schain && (y.schain = l.schain),
              l.userId &&
                m(y.eids, l.userId.uid2 && l.userId.uid2.id, "uidapi.com"),
              g === n.d &&
                ((y.playerSize = l.mediaTypes[n.d].playerSize),
                (y.minduration = l.mediaTypes[n.d].minduration),
                (y.maxduration = l.mediaTypes[n.d].maxduration),
                (y.mimes = l.mediaTypes[n.d].mimes),
                (y.protocols = l.mediaTypes[n.d].protocols),
                (y.startdelay = l.mediaTypes[n.d].startdelay),
                (y.placement = l.mediaTypes[n.d].placement),
                (y.skip = l.mediaTypes[n.d].skip),
                (y.skipafter = l.mediaTypes[n.d].skipafter),
                (y.minbitrate = l.mediaTypes[n.d].minbitrate),
                (y.maxbitrate = l.mediaTypes[n.d].maxbitrate),
                (y.delivery = l.mediaTypes[n.d].delivery),
                (y.playbackmethod = l.mediaTypes[n.d].playbackmethod),
                (y.api = l.mediaTypes[n.d].api),
                (y.linearity = l.mediaTypes[n.d].linearity)),
              s.push(y);
          }
          return { method: "POST", url: c, data: d };
        },
        interpretResponse: function (e) {
          var t = [];
          e = e.body;
          for (var r = 0; r < e.length; r++) {
            var a = e[r];
            if (p(a)) {
              var n = a.adomain && a.adomain.length ? a.adomain : [];
              (a.meta = d(d({}, a.meta), {}, { advertiserDomains: n })),
                t.push(a);
            }
          }
          return t;
        },
        getUserSyncs: function (e, t, r, a) {
          var n = "https://pub.admanmedia.com/?c=o&m=sync";
          return (
            r &&
              r.consentString &&
              ("boolean" == typeof r.gdprApplies
                ? (n += "&gdpr="
                    .concat(Number(r.gdprApplies), "&gdpr_consent=")
                    .concat(r.consentString))
                : (n += "&gdpr==0&gdpr_consent=".concat(r.consentString))),
            a &&
              a.consentString &&
              (n += "&ccpa_consent=".concat(a.consentString)),
            [{ type: "image", url: n }]
          );
        },
      };
      Object(a.registerBidder)(l);
    },
  },
  [206]
);
pbjsChunk(
  [328],
  {
    258: function (e, r, t) {
      e.exports = t(259);
    },
    259: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return l;
        });
      var n = t(0),
        i = t(1),
        a = t(3),
        o = t(11),
        s = t.n(o),
        c = t(2);
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var u = "USD",
        f = {
          image: { required: !0 },
          title: { required: !0 },
          sponsoredBy: { required: !0 },
          clickUrl: { required: !0 },
          body: { required: !1 },
          icon: { required: !1 },
          cta: { required: !1 },
        },
        l = {
          code: "adyoulike",
          supportedMediaTypes: [c.b, c.c, c.d],
          aliases: ["ayl"],
          isBidRequestValid: function (e) {
            var r = b(y(e)),
              t = r.width > 0 && r.height > 0;
            return (
              e.params &&
              e.params.placement &&
              (t || (e.mediaTypes && e.mediaTypes.native))
            );
          },
          buildRequests: function (e, r) {
            var t = {
              Version: "1.0",
              Bids: e.reduce(function (e, r) {
                var t = (function (e) {
                    if (Object(n.deepAccess)(e, "mediaTypes.video")) return c.d;
                    if (Object(n.deepAccess)(e, "mediaTypes.banner"))
                      return c.b;
                    if (Object(n.deepAccess)(e, "mediaTypes.native"))
                      return c.c;
                  })(r),
                  i = y(r),
                  a = b(i);
                if (
                  ((e[r.bidId] = {}),
                  (e[r.bidId].PlacementID = r.params.placement),
                  (e[r.bidId].TransactionID = r.transactionId),
                  (e[r.bidId].Width = a.width),
                  (e[r.bidId].Height = a.height),
                  (e[r.bidId].AvailableSizes = i.join(",")),
                  "function" == typeof r.getFloor &&
                    (e[r.bidId].Pricing = (function (e, r, t) {
                      var n = e.getFloor({
                        currency: u,
                        mediaType: t,
                        size: [r.width, r.height],
                      });
                      if (!isNaN(n.floor) && n.currency === u) return n.floor;
                    })(r, a, t)),
                  t === c.c)
                ) {
                  var o = r.mediaTypes.native;
                  "image" === o.type && (o = p({}, f, o)),
                    (o.clickUrl = { required: !0 }),
                    (e[r.bidId].Native = o);
                }
                if (t === c.d) {
                  e[r.bidId].Video = r.mediaTypes.video;
                  var s = r.mediaTypes.video.playerSize;
                  Array.isArray(s) &&
                    !Array.isArray(s[0]) &&
                    (e[r.bidId].Video.playerSize = [s]);
                }
                return e;
              }, {}),
              PageRefreshed: m(),
            };
            r &&
              r.gdprConsent &&
              (t.gdprConsent = {
                consentString: r.gdprConsent.consentString,
                consentRequired:
                  "boolean" == typeof r.gdprConsent.gdprApplies
                    ? r.gdprConsent.gdprApplies
                    : null,
              }),
              r && r.uspConsent && (t.uspConsent = r.uspConsent);
            var i = JSON.stringify(t);
            return {
              method: "POST",
              url: v(e, r),
              data: i,
              options: { withCredentials: !0 },
            };
          },
          interpretResponse: function (e, r) {
            var t = [],
              i = {};
            try {
              i = JSON.parse(r.data).Bids;
            } catch (e) {}
            return (
              e.body.forEach(function (e) {
                var r = (function (e, r) {
                  if (!e || (!e.Ad && !e.Native && !e.Vast)) return;
                  var t = r && r[e.BidID];
                  t &&
                    ((e.Width && "0" !== e.Width) || (e.Width = t.Width),
                    (e.Height && "0" !== e.Height) || (e.Height = t.Height));
                  var i = {
                    requestId: e.BidID,
                    ttl: 3600,
                    creativeId: e.CreativeID,
                    cpm: e.Price,
                    netRevenue: !0,
                    currency: u,
                    meta: e.Meta || { advertiserDomains: [] },
                  };
                  if (t && t.Native)
                    (i.native = (function (e, r) {
                      if ("object" === d(e.Native)) return e.Native;
                      var t = {},
                        i = {},
                        a = {};
                      if ("string" == typeof e.Ad) {
                        (i = JSON.parse(
                          e.Ad.match(/\/\*PREBID\*\/(.*)\/\*PREBID\*\//)[1]
                        )),
                          (a = i.Content.Preview.Text);
                        var o =
                            i.TrackingPrefix +
                            "/pixel?event_kind=IMPRESSION&attempt=" +
                            i.Attempt,
                          s =
                            i.TrackingPrefix +
                            "/pixel?event_kind=INSERTION&attempt=" +
                            i.Attempt;
                        i.Campaign &&
                          ((o += "&campaign=" + i.Campaign),
                          (s += "&campaign=" + i.Campaign)),
                          (t.clickUrl =
                            i.TrackingPrefix +
                            "/ar?event_kind=CLICK&attempt=" +
                            i.Attempt +
                            "&campaign=" +
                            i.Campaign +
                            "&url=" +
                            encodeURIComponent(i.Content.Landing.Url)),
                          i.OnEvents
                            ? ((t.clickTrackers = C(i.OnEvents.CLICK)),
                              (t.impressionTrackers = C(i.OnEvents.IMPRESSION)),
                              (t.javascriptTrackers = C(
                                i.OnEvents.IMPRESSION,
                                !0
                              )))
                            : (t.impressionTrackers = []),
                          t.impressionTrackers.push(o, s);
                      }
                      return (
                        Object.keys(r).map(function (o, s) {
                          switch (o) {
                            case "title":
                              t[o] = a.TITLE;
                              break;
                            case "body":
                              t[o] = a.DESCRIPTION;
                              break;
                            case "cta":
                              t[o] = a.CALLTOACTION;
                              break;
                            case "sponsoredBy":
                              t[o] = i.Content.Preview.Sponsor.Name;
                              break;
                            case "image":
                              var c = r.image.sizes || [];
                              c.length ||
                                ((c[0] = e.Width || 300),
                                (c[1] = e.Height || 250));
                              var d = I(
                                i,
                                Object(n.deepAccess)(
                                  i,
                                  "Content.Preview.Thumbnail.Image"
                                ),
                                c[0],
                                c[1]
                              );
                              d &&
                                (t[o] = { url: d, width: c[0], height: c[1] });
                              break;
                            case "icon":
                              var p = r.icon.sizes || [];
                              p.length || ((p[0] = 50), (p[1] = 50));
                              var u = I(
                                i,
                                Object(n.deepAccess)(
                                  i,
                                  "Content.Preview.Sponsor.Logo.Resource"
                                ),
                                p[0],
                                p[1]
                              );
                              d &&
                                (t[o] = { url: u, width: p[0], height: p[1] });
                              break;
                            case "privacyIcon":
                              t[o] = I(
                                i,
                                Object(n.deepAccess)(
                                  i,
                                  "Content.Preview.Credit.Logo.Resource"
                                ),
                                25,
                                25
                              );
                              break;
                            case "privacyLink":
                              t[o] = Object(n.deepAccess)(
                                i,
                                "Content.Preview.Credit.Url"
                              );
                          }
                        }),
                        t
                      );
                    })(e, t.Native)),
                      (i.mediaType = "native");
                  else if (t && t.Video) {
                    var a =
                      e.Vast ||
                      (function (e) {
                        var r = {};
                        if ("string" == typeof e.Ad)
                          return (
                            (r = JSON.parse(
                              e.Ad.match(/\/\*PREBID\*\/(.*)\/\*PREBID\*\//)[1]
                            )),
                            Object(n.deepAccess)(r, "Content.MainVideo.Vast")
                          );
                      })(e);
                    (i.vastXml = a ? window.atob(a) : ""),
                      (i.mediaType = "video");
                  } else
                    (i.width = e.Width), (i.height = e.Height), (i.ad = e.Ad);
                  return i;
                })(e, i);
                r && t.push(r);
              }),
              t
            );
          },
        };
      function m() {
        try {
          if (performance && performance.navigation)
            return (
              performance.navigation.type === performance.navigation.TYPE_RELOAD
            );
        } catch (e) {}
        return !1;
      }
      function v(e, r) {
        var t = (function (e) {
          var r = s()(e, function (e) {
            return e.params.DC;
          });
          return r ? "-" + r.params.DC : "";
        })(e);
        return Object(n.buildUrl)({
          protocol: "https",
          host: "".concat("hb-api").concat(t, ".omnitagjs.com"),
          pathname: "/hb-api/prebid/v1",
          search: h(r),
        });
      }
      function h(e) {
        var r = {};
        if (e) {
          var t = e.refererInfo;
          t &&
            ((r.RefererUrl = encodeURIComponent(t.referer)),
            t.numIframes > 0 && (r.SafeFrame = !0));
        }
        var n = (function () {
          var e;
          if (window.self !== window.top)
            try {
              e = window.top.document.head.querySelector(
                'link[rel="canonical"][href]'
              );
            } catch (e) {}
          else e = document.head.querySelector('link[rel="canonical"][href]');
          return e ? e.href : "";
        })();
        n && (r.CanonicalUrl = encodeURIComponent(n));
        var i = a.b.getConfig("publisherDomain");
        return i && (r.PublisherDomain = encodeURIComponent(i)), r;
      }
      function y(e) {
        var r = e.sizes || [];
        return (
          e.mediaTypes &&
            e.mediaTypes.banner &&
            (r = e.mediaTypes.banner.sizes || []),
          e.params &&
            Array.isArray(e.params.size) &&
            ((r = e.params.size), Array.isArray(r[0]) || (r = [r])),
          Object(n.parseSizesInput)(r)
        );
      }
      function b(e) {
        var r = {},
          t = e[0];
        if ("string" != typeof t) return r;
        var n = t.toUpperCase().split("X"),
          i = parseInt(n[0], 10);
        i && (r.width = i);
        var a = parseInt(n[1], 10);
        return a && (r.height = a), r;
      }
      function g(e) {
        return e
          ? "https://blobs.omnitagjs.com/blobs/" +
              e.substr(16, 2) +
              "/" +
              e.substr(16) +
              "/" +
              e
          : "";
      }
      function I(e, r, t, n) {
        var i = "";
        if (r && r.Kind)
          switch (r.Kind) {
            case "INTERNAL":
              i = g(r.Data.Internal.BlobReference.Uid);
              break;
            case "EXTERNAL":
              var a = e.DynamicPrefix,
                o = r.Data.External.Url;
              if (
                (o = (o = o.replace(/\[height\]/i, "" + n)).replace(
                  /\[width\]/i,
                  "" + t
                )).indexOf(a) >= 0
              ) {
                var s = /.*url=([^&]*)/gm.exec(o);
                (i = s ? s[1] : "") || (i = g(/.*key=([^&]*)/gm.exec(o)[1]));
              } else i = o;
          }
        return i;
      }
      function C(e, r) {
        var t = [];
        return e
          ? (e.map(function (e, n) {
              ((r && "JAVASCRIPT_URL" === e.Kind) ||
                (!r && "PIXEL_URL" === e.Kind)) &&
                t.push(e.Url);
            }),
            t)
          : t;
      }
      Object(i.registerBidder)(l);
    },
  },
  [258]
);
pbjsChunk(
  [321],
  {
    272: function (e, r, t) {
      e.exports = t(273);
    },
    273: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return m;
        });
      var a = t(2),
        n = t(1),
        i = t(13),
        d = t(0);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o(e) {
        e.renderer.push(function () {
          var r =
            e && e.renderer && e.renderer.handleVideoEvent
              ? e.renderer.handleVideoEvent
              : null;
          window.aniviewRenderer.renderAd({
            id: e.adUnitCode + "_" + e.adId,
            debug: window.location.href.indexOf("pbjsDebug") >= 0,
            placement: e.adUnitCode,
            width: e.width,
            height: e.height,
            vastUrl: e.vastUrl,
            vastXml: e.vastXml,
            config: e.params[0].rendererConfig,
            eventsCallback: r,
            bid: e,
          });
        });
      }
      var p = 0;
      var m = {
        code: "aniview",
        gvlid: 780,
        aliases: [
          "avantisvideo",
          "selectmediavideo",
          "vidcrunch",
          "openwebvideo",
        ],
        supportedMediaTypes: [a.d, a.b],
        isBidRequestValid: function (e) {
          return !!(
            e.params &&
            e.params.AV_PUBLISHERID &&
            e.params.AV_CHANNELID
          );
        },
        buildRequests: function (e, r) {
          for (var t = [], a = 0; a < e.length; a++) {
            var n = e[a],
              i = [[640, 480]];
            n.mediaTypes && n.mediaTypes.video && n.mediaTypes.video.playerSize
              ? (i = n.mediaTypes.video.playerSize)
              : n.sizes && (i = n.sizes),
              2 === i.length && "number" == typeof i[0] && (i = [[i[0], i[1]]]);
            for (var d = 0; d < i.length; d++) {
              var s = i[d],
                o = void 0,
                m = void 0;
              s && 2 == s.length
                ? ((o = s[0]), (m = s[1]))
                : ((o = 640), (m = 480));
              var l = {};
              for (var u in n.params)
                n.params.hasOwnProperty(u) &&
                  0 == u.indexOf("AV_") &&
                  (l[u] = n.params[u]);
              l.AV_APPPKGNAME && !l.AV_URL && (l.AV_URL = l.AV_APPPKGNAME),
                l.AV_IDFA ||
                  l.AV_URL ||
                  (r && r.refererInfo && r.refererInfo.referer
                    ? (l.AV_URL = r.refererInfo.referer)
                    : (l.AV_URL = window.location.href)),
                l.AV_IDFA && !l.AV_AID && (l.AV_AID = l.AV_IDFA),
                l.AV_AID && !l.AV_IDFA && (l.AV_IDFA = l.AV_AID),
                (l.cb = Math.floor(999999999 * Math.random())),
                (l.AV_WIDTH = o),
                (l.AV_HEIGHT = m),
                (l.bidWidth = o),
                (l.bidHeight = m),
                (l.bidId = n.bidId),
                (l.pbjs = 1),
                (l.tgt = 10),
                (l.s2s = "1"),
                (l.irc = p),
                p++,
                (l.wpm = 1),
                r &&
                  r.gdprConsent &&
                  r.gdprConsent.gdprApplies &&
                  ((l.AV_GDPR = 1),
                  (l.AV_CONSENT = r.gdprConsent.consentString)),
                r && r.uspConsent && (l.AV_CCPA = r.uspConsent);
              var c =
                "https://" +
                (n.params && n.params.serverDomain
                  ? n.params.serverDomain
                  : "gov.aniview.com") +
                "/api/adserver/vast3/";
              t.push({ method: "GET", url: c, data: l, bidRequest: n });
            }
          }
          return t;
        },
        interpretResponse: function (e, r) {
          var t = [];
          if (e && e.body) {
            if (e.error) return t;
            try {
              var n = {};
              if (r && r.data && r.data.bidId && "" !== r.data.bidId) {
                var s = a.d;
                r.bidRequest &&
                  r.bidRequest.mediaTypes &&
                  !r.bidRequest.mediaTypes[a.d] &&
                  (s = a.b);
                var p = e.body,
                  m = new window.DOMParser().parseFromString(p, "text/xml");
                if (m && 0 == m.getElementsByTagName("parsererror").length) {
                  var l = (function (e) {
                    var r = { cpm: 0, currency: "USD" };
                    if (e) {
                      var t = e.getElementsByTagName("Extensions");
                      if (
                        t &&
                        t.length > 0 &&
                        (t = t[0].getElementsByTagName("Extension")) &&
                        t.length > 0
                      )
                        for (var a = 0; a < t.length; a++)
                          if ("ANIVIEW" == t[a].getAttribute("type")) {
                            var n = t[a].getElementsByTagName("Cpm");
                            n && 1 == n.length && (r.cpm = n[0].textContent);
                            break;
                          }
                    }
                    return r;
                  })(m);
                  if (l && l.cpm > 0) {
                    if (
                      ((n.requestId = r.data.bidId),
                      (n.ad = ""),
                      (n.cpm = l.cpm),
                      (n.width = r.data.AV_WIDTH),
                      (n.height = r.data.AV_HEIGHT),
                      (n.ttl = 600),
                      (n.creativeId =
                        m.getElementsByTagName("Ad") &&
                        m.getElementsByTagName("Ad")[0] &&
                        m.getElementsByTagName("Ad")[0].getAttribute("id")
                          ? m.getElementsByTagName("Ad")[0].getAttribute("id")
                          : "creativeId"),
                      (n.currency = l.currency),
                      (n.netRevenue = !0),
                      (n.mediaType = s),
                      s === a.d)
                    ) {
                      try {
                        var u = new Blob([p], { type: "application/xml" });
                        n.vastUrl = window.URL.createObjectURL(u);
                      } catch (e) {
                        Object(d.logError)(
                          "Aniview Debug create vastXml error:\n\n" + e
                        );
                      }
                      (n.vastXml = p),
                        r.bidRequest &&
                          r.bidRequest.mediaTypes &&
                          r.bidRequest.mediaTypes.video &&
                          "outstream" ===
                            r.bidRequest.mediaTypes.video.context &&
                          (n.renderer = (function (e) {
                            var r = "player.aniview.com",
                              t = {};
                            if (e && e.bidRequest && e.bidRequest.params) {
                              var a = e.bidRequest.params;
                              a.playerDomain && (r = a.playerDomain),
                                a.AV_PUBLISHERID &&
                                  (t.AV_PUBLISHERID = a.AV_PUBLISHERID),
                                a.AV_CHANNELID &&
                                  (t.AV_CHANNELID = a.AV_CHANNELID);
                            }
                            var n = i.a.install({
                              url:
                                "https://" +
                                r +
                                "/script/6.1/prebidRenderer.js",
                              config: t,
                              loaded: !1,
                            });
                            try {
                              n.setRender(o);
                            } catch (e) {}
                            return n;
                          })(r));
                    } else
                      n.ad = (function (e, r, t) {
                        var a = JSON.stringify({
                            id: r.adUnitCode,
                            debug:
                              window.location.href.indexOf("pbjsDebug") >= 0,
                            placement: r.bidRequest.adUnitCode,
                            width: t.width,
                            height: t.height,
                            vastXml: e,
                            bid: t,
                            config: r.bidRequest.params.rendererConfig,
                          }),
                          n =
                            '<script src="https://' +
                            (r.bidRequest.params.playerDomain ||
                              "player.aniview.com") +
                            '/script/6.1/prebidRenderer.js"></script>';
                        return (
                          n +
                          "<script> window.aniviewRenderer.renderAd(" +
                          a +
                          ") </script>"
                        );
                      })(p, r, n);
                    (n.meta = { advertiserDomains: [] }), t.push(n);
                  }
                }
              }
            } catch (e) {}
          }
          return t;
        },
        getUserSyncs: function (e, r) {
          if (r && r[0] && r[0].body) {
            if (r.error) return [];
            try {
              var t = r[0].body,
                a = new window.DOMParser().parseFromString(t, "text/xml");
              if (a && 0 == a.getElementsByTagName("parsererror").length)
                return (function (e, r) {
                  var t = [];
                  if (e) {
                    var a = e.getElementsByTagName("Extensions");
                    if (
                      a &&
                      a.length > 0 &&
                      (a = a[0].getElementsByTagName("Extension")) &&
                      a.length > 0
                    )
                      for (var n = 0; n < a.length; n++)
                        if ("ANIVIEW" == a[n].getAttribute("type")) {
                          var i = a[n].getElementsByTagName("AdServingSync");
                          if (i && 1 == i.length)
                            try {
                              var d = JSON.parse(i[0].textContent);
                              if (d && d.trackers && d.trackers.length) {
                                d = d.trackers;
                                for (var o = 0; o < d.length; o++)
                                  "object" !== s(d[o]) ||
                                    "string" != typeof d[o].url ||
                                    ("inventory" !== d[o].e &&
                                      "sync" !== d[o].e) ||
                                    (1 == d[o].t && r.pixelEnabled
                                      ? t.push({ url: d[o].url, type: "image" })
                                      : 3 == d[o].t &&
                                        r.iframeEnabled &&
                                        t.push({
                                          url: d[o].url,
                                          type: "iframe",
                                        }));
                              }
                            } catch (e) {}
                          break;
                        }
                  }
                  return t;
                })(a, e);
            } catch (e) {}
          }
        },
      };
      Object(n.registerBidder)(m);
    },
  },
  [272]
);
pbjsChunk(
  [320],
  {
    274: function (e, t, r) {
      e.exports = r(275);
    },
    275: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return q;
        });
      var n,
        i,
        a,
        o = r(0),
        s = r(1),
        c = r(2);
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function p(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var l = "aol",
        m = "verizon",
        f = "onemobile",
        b = "onedisplay",
        h = { GET: "display-get" },
        v = { GET: "mobile-get", POST: "mobile-post" },
        g = { TAG: "iframe", TYPE: "iframe" },
        y = { TAG: "img", TYPE: "image" },
        O = [
          "adserver.org",
          "criteo.com",
          "id5-sync.com",
          "intentiq.com",
          "liveintent.com",
          "quantcast.com",
          "verizonmedia.com",
          "liveramp.com",
        ],
        P = C(
          n ||
            (n = p([
              "",
              "/pubapi/3.0/",
              "/",
              "/",
              "/",
              "/ADTECH;v=2;cmd=bid;cors=yes;alias=",
              ";misc=",
              ";",
              "",
            ])),
          "host",
          "network",
          "placement",
          "pageid",
          "sizeid",
          "alias",
          "misc",
          "dynamicParams"
        ),
        j = C(i || (i = p(["", "/bidRequest?"])), "host"),
        E = C(
          a || (a = p(["dcn=", "&pos=", "&cmd=bid", ""])),
          "dcn",
          "pos",
          "dynamicParams"
        ),
        S = {
          us: "adserver-us.adtech.advertising.com",
          eu: "adserver-eu.adtech.advertising.com",
          as: "adserver-as.adtech.advertising.com",
        },
        T = "https",
        x = 1;
      function C(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return function () {
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i];
          var a = n[n.length - 1] || {},
            s = [e[0]];
          return (
            r.forEach(function (t, r) {
              var i = Object(o.isInteger)(t) ? n[t] : a[t];
              s.push(i, e[r + 1]);
            }),
            s.join("")
          );
        };
      }
      function I(e) {
        return e === l || e === m || e === f;
      }
      function R(e) {
        if (I(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
          var t = e.params.imp[0];
          return t.id && t.tagid && t.banner && t.banner.w && t.banner.h;
        }
      }
      function w(e) {
        return I(e.bidder) && e.params.dcn && e.params.pos;
      }
      function U(e) {
        return (
          ((t = e.bidder) === l || t === m || t === b) &&
          e.params.placement &&
          e.params.network
        );
        var t;
      }
      function k(e) {
        return e.userIdAsEids.filter(function (e) {
          return -1 !== O.indexOf(e.source);
        });
      }
      var q = {
        code: l,
        gvlid: 25,
        aliases: [f, b, m],
        supportedMediaTypes: [c.b],
        isBidRequestValid: function (e) {
          return (
            U(e) ||
            (function (e) {
              return w(e) || R(e);
            })(e)
          );
        },
        buildRequests: function (e, t) {
          var r = this,
            n = {};
          return (
            t && ((n.gdpr = t.gdprConsent), (n.uspConsent = t.uspConsent)),
            e.map(function (e) {
              var t = (function (e) {
                return w(e) ? v.GET : R(e) ? v.POST : U(e) ? h.GET : void 0;
              })(e);
              if (t) return r.formatBidRequest(t, e, n);
            })
          );
        },
        interpretResponse: function (e, t) {
          var r = e.body;
          if (r) {
            var n = this._parseBidResponse(r, t);
            if (n) return n;
          } else Object(o.logError)("Empty bid response", t.bidderCode, r);
        },
        getUserSyncs: function (e, t) {
          var r = !Object(o.isEmpty)(t) && t[0].body;
          return r && r.ext && r.ext.pixels
            ? this.parsePixelItems(r.ext.pixels)
            : [];
        },
        formatBidRequest: function (e, t, r) {
          var n;
          switch (e) {
            case h.GET:
              n = {
                url: this.buildMarketplaceUrl(t, r),
                method: "GET",
                ttl: 60,
              };
              break;
            case v.GET:
              n = {
                url: this.buildOneMobileGetUrl(t, r),
                method: "GET",
                ttl: 3600,
              };
              break;
            case v.POST:
              n = {
                url: this.buildOneMobileBaseUrl(t),
                method: "POST",
                ttl: 3600,
                data: this.buildOpenRtbRequestData(t, r),
                options: {
                  contentType: "application/json",
                  customHeaders: { "x-openrtb-version": "2.2" },
                },
              };
          }
          return (
            (n.bidderCode = t.bidder),
            (n.bidId = t.bidId),
            (n.userSyncOn = t.params.userSyncOn),
            n
          );
        },
        buildMarketplaceUrl: function (e, t) {
          var r,
            n = e.params,
            i = n.server,
            a = n.region || "us";
          return (
            S.hasOwnProperty(a) ||
              (Object(o.logWarn)(
                "Unknown region '".concat(a, "' for AOL bidder.")
              ),
              (a = "us")),
            (r = i || S[a]),
            (n.region = a),
            this.applyProtocol(
              P({
                host: r,
                network: n.network,
                placement: parseInt(n.placement),
                pageid: n.pageId || 0,
                sizeid: n.sizeId || 0,
                alias: n.alias || Object(o.getUniqueIdentifierStr)(),
                misc: new Date().getTime(),
                dynamicParams: this.formatMarketplaceDynamicParams(n, t),
              })
            )
          );
        },
        buildOneMobileGetUrl: function (e, t) {
          var r = e.params,
            n = r.dcn,
            i = r.pos,
            a = r.ext;
          "object" === d(e.userId) &&
            ((a = a || {}),
            k(e).forEach(function (e) {
              a["eid" + e.source] = e.uids[0].id;
            }));
          var o = this.buildOneMobileBaseUrl(e);
          if (n && i) {
            var s = this.formatOneMobileDynamicParams(a, t);
            o += E({ dcn: n, pos: i, dynamicParams: s });
          }
          return o;
        },
        buildOneMobileBaseUrl: function (e) {
          return this.applyProtocol(
            j({ host: e.params.host || "c2shb.ssp.yahoo.com" })
          );
        },
        applyProtocol: function (e) {
          return /^https?:\/\//i.test(e)
            ? e
            : 0 === e.indexOf("//")
            ? "".concat(T, ":").concat(e)
            : "".concat(T, "://").concat(e);
        },
        formatMarketplaceDynamicParams: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = {};
          u(r, this.formatKeyValues(e.keyValues)),
            u(r, this.formatConsentData(t));
          var n = "";
          return (
            Object(o._each)(r, function (e, t) {
              n += "".concat(t, "=").concat(encodeURIComponent(e), ";");
            }),
            n
          );
        },
        formatOneMobileDynamicParams: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          this.isSecureProtocol() && (e.secure = x),
            u(e, this.formatConsentData(t));
          var r = "";
          return (
            Object(o._each)(e, function (e, t) {
              r += "&".concat(t, "=").concat(encodeURIComponent(e));
            }),
            r
          );
        },
        buildOpenRtbRequestData: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = { id: e.params.id, imp: e.params.imp };
          if (
            (this.isEUConsentRequired(t) &&
              (Object(o.deepSetValue)(r, "regs.ext.gdpr", x),
              t.gdpr.consentString &&
                Object(o.deepSetValue)(
                  r,
                  "user.ext.consent",
                  t.gdpr.consentString
                )),
            t.uspConsent &&
              Object(o.deepSetValue)(r, "regs.ext.us_privacy", t.uspConsent),
            "object" === d(e.userId))
          ) {
            (r.user = r.user || {}), (r.user.ext = r.user.ext || {});
            var n = k(e);
            n.length > 0 && (r.user.ext.eids = n);
          }
          return r;
        },
        isEUConsentRequired: function (e) {
          return !!(e && e.gdpr && e.gdpr.gdprApplies);
        },
        formatKeyValues: function (e) {
          var t = {};
          return (
            Object(o._each)(e, function (e, r) {
              t["kv".concat(r)] = e;
            }),
            t
          );
        },
        formatConsentData: function (e) {
          var t = {};
          return (
            this.isEUConsentRequired(e) &&
              ((t.gdpr = x),
              e.gdpr.consentString && (t.euconsent = e.gdpr.consentString)),
            e.uspConsent && (t.us_privacy = e.uspConsent),
            t
          );
        },
        parsePixelItems: function (e) {
          var t = /\w*(?=\s)/,
            r = /src=("|')(.*?)\1/,
            n = [];
          if (e) {
            var i = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
            i &&
              i.forEach(function (e) {
                var i = e.match(t)[0],
                  a = e.match(r)[2];
                i &&
                  a &&
                  n.push({ type: i === y.TAG ? y.TYPE : g.TYPE, url: a });
              });
          }
          return n;
        },
        _parseBidResponse: function (e, t) {
          var r, n;
          try {
            r = e.seatbid[0].bid[0];
          } catch (e) {
            return;
          }
          if (r.ext && r.ext.encp) n = r.ext.encp;
          else if (null === (n = r.price) || isNaN(n))
            return void Object(o.logError)(
              "Invalid price in bid response",
              l,
              r
            );
          return {
            bidderCode: t.bidderCode,
            requestId: t.bidId,
            ad: r.adm,
            cpm: n,
            width: r.w,
            height: r.h,
            creativeId: r.crid || 0,
            pubapiId: e.id,
            currency: e.cur || "USD",
            dealId: r.dealid,
            netRevenue: !0,
            meta: { advertiserDomains: r && r.adomain ? r.adomain : [] },
            ttl: t.ttl,
          };
        },
        isOneMobileBidder: I,
        isSecureProtocol: function () {
          return "https:" === document.location.protocol;
        },
      };
      Object(s.registerBidder)(q);
    },
  },
  [274]
);
pbjsChunk(
  [317],
  {
    284: function (e, r, t) {
      e.exports = t(285);
    },
    285: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return E;
        });
      var a = t(0),
        n = t(13),
        i = t(3),
        s = t(1),
        o = t(2),
        d = t(22),
        c = t(11),
        p = t.n(c),
        u = t(12),
        l = t.n(u),
        m = t(24),
        f = t(7);
      function b(e) {
        return (b =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function v() {
        return (v =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return g(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, r) {
            if (!e) return;
            if ("string" == typeof e) return g(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(e);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return g(e, r);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
        return a;
      }
      var h = "appnexus",
        _ = "https://ib.adnxs.com/ut/v3/prebid",
        k = "https://ib.adnxs-simple.com/ut/v3/prebid",
        O = [
          "id",
          "minduration",
          "maxduration",
          "skippable",
          "playback_method",
          "frameworks",
          "context",
          "skipoffset",
        ],
        j = [
          "minduration",
          "maxduration",
          "skip",
          "skipafter",
          "playbackmethod",
          "api",
        ],
        I = ["age", "externalUid", "segments", "gender", "dnt", "language"],
        A = ["geo", "device_id"],
        w = ["enabled", "dongle", "member_id", "debug_timeout"],
        x = {
          playback_method: {
            unknown: 0,
            auto_play_sound_on: 1,
            auto_play_sound_off: 2,
            click_to_play: 3,
            mouse_over: 4,
            auto_play_sound_unknown: 5,
          },
          context: {
            unknown: 0,
            pre_roll: 1,
            mid_roll: 2,
            post_roll: 3,
            outstream: 4,
            "in-banner": 5,
          },
        },
        C = {
          body: "description",
          body2: "desc2",
          cta: "ctatext",
          image: { serverName: "main_image", requiredParams: { required: !0 } },
          icon: { serverName: "icon", requiredParams: { required: !0 } },
          sponsoredBy: "sponsored_by",
          privacyLink: "privacy_link",
          salePrice: "saleprice",
          displayUrl: "displayurl",
        },
        S = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,
        T = Object(f.b)(32, h),
        E = {
          code: h,
          gvlid: 32,
          aliases: [
            { code: "appnexusAst", gvlid: 32 },
            { code: "brealtime" },
            { code: "emxdigital", gvlid: 183 },
            { code: "pagescience" },
            { code: "defymedia" },
            { code: "gourmetads" },
            { code: "matomy" },
            { code: "featureforward" },
            { code: "oftmedia" },
            { code: "districtm", gvlid: 144 },
            { code: "adasta" },
            { code: "beintoo", gvlid: 618 },
            { code: "targetVideo" },
          ],
          supportedMediaTypes: [o.b, o.d, o.c],
          isBidRequestValid: function (e) {
            return !!(
              e.params.placementId ||
              (e.params.member && e.params.invCode)
            );
          },
          buildRequests: function (e, r) {
            var t = e.map(q),
              n = p()(e, M),
              s = {};
            !0 === i.b.getConfig("coppa") && (s = { coppa: !0 }),
              n &&
                Object.keys(n.params.user)
                  .filter(function (e) {
                    return l()(I, e);
                  })
                  .forEach(function (e) {
                    var r = Object(a.convertCamelToUnderscore)(e);
                    if (
                      "segments" === e &&
                      Object(a.isArray)(n.params.user[e])
                    ) {
                      var t = [];
                      n.params.user[e].forEach(function (e) {
                        Object(a.isNumber)(e)
                          ? t.push({ id: e })
                          : Object(a.isPlainObject)(e) && t.push(e);
                      }),
                        (s[r] = t);
                    } else "segments" !== e && (s[r] = n.params.user[e]);
                  });
            var o,
              d = p()(e, B);
            d &&
              d.params &&
              d.params.app &&
              ((o = {}),
              Object.keys(d.params.app)
                .filter(function (e) {
                  return l()(A, e);
                })
                .forEach(function (e) {
                  return (o[e] = d.params.app[e]);
                }));
            var c,
              u = p()(e, V);
            u &&
              u.params &&
              d.params.app &&
              d.params.app.id &&
              (c = { appid: u.params.app.id });
            var m = {},
              f = {},
              b = T.getCookie("apn_prebid_debug") || null;
            if (b)
              try {
                m = JSON.parse(b);
              } catch (e) {
                Object(a.logError)(
                  "AppNexus Debug Auction Cookie Error:\n\n" + e
                );
              }
            else {
              var v = p()(e, F);
              v && v.debug && (m = v.debug);
            }
            m &&
              m.enabled &&
              Object.keys(m)
                .filter(function (e) {
                  return l()(w, e);
                })
                .forEach(function (e) {
                  f[e] = m[e];
                });
            var g = p()(e, D),
              h = g ? parseInt(g.params.member, 10) : 0,
              O = e[0].schain,
              j = p()(e, W),
              x = {
                tags: y(t),
                user: s,
                sdk: { source: "pbjs", version: "5.16.0" },
                schain: O,
              };
            if (
              (j && (x.iab_support = { omidpn: "Appnexus", omidpv: "5.16.0" }),
              h > 0 && (x.member_id = h),
              d && (x.device = o),
              u && (x.app = c),
              i.b.getConfig("adpod.brandCategoryExclusion") &&
                (x.brand_category_uniqueness = !0),
              f.enabled &&
                ((x.debug = f),
                Object(a.logInfo)(
                  "AppNexus Debug Auction Settings:\n\n" +
                    JSON.stringify(f, null, 4)
                )),
              r &&
                r.gdprConsent &&
                ((x.gdpr_consent = {
                  consent_string: r.gdprConsent.consentString,
                  consent_required: r.gdprConsent.gdprApplies,
                }),
                r.gdprConsent.addtlConsent &&
                  -1 !== r.gdprConsent.addtlConsent.indexOf("~")))
            ) {
              var C = r.gdprConsent.addtlConsent,
                S = C.substring(C.indexOf("~") + 1);
              x.gdpr_consent.addtl_consent = S.split(".").map(function (e) {
                return parseInt(e, 10);
              });
            }
            if (
              (r && r.uspConsent && (x.us_privacy = r.uspConsent),
              r && r.refererInfo)
            ) {
              var E = {
                rd_ref: encodeURIComponent(r.refererInfo.referer),
                rd_top: r.refererInfo.reachedTop,
                rd_ifs: r.refererInfo.numIframes,
                rd_stk: r.refererInfo.stack
                  .map(function (e) {
                    return encodeURIComponent(e);
                  })
                  .join(","),
              };
              x.referrer_detection = E;
            }
            if (
              (p()(e, J) &&
                e.filter(J).forEach(function (e) {
                  var r = (function (e, r) {
                      var t = r.mediaTypes.video,
                        n = t.durationRangeSec,
                        i = t.requireExactDuration,
                        s = (function (e) {
                          var r = e.adPodDurationSec,
                            t = e.durationRangeSec,
                            n = e.requireExactDuration,
                            i = Object(a.getMinValueFromArray)(t),
                            s = Math.floor(r / i);
                          return n ? Math.max(s, t.length) : s;
                        })(r.mediaTypes.video),
                        o = Object(a.getMaxValueFromArray)(n),
                        d = e.filter(function (e) {
                          return e.uuid === r.bidId;
                        }),
                        c = a.fill.apply(void 0, y(d).concat([s]));
                      if (i) {
                        var p = Math.ceil(s / n.length),
                          u = Object(a.chunk)(c, p);
                        n.forEach(function (e, r) {
                          u[r].map(function (r) {
                            H(r, "minduration", e), H(r, "maxduration", e);
                          });
                        });
                      } else
                        c.map(function (e) {
                          return H(e, "maxduration", o);
                        });
                      return c;
                    })(t, e),
                    n = x.tags.filter(function (r) {
                      return r.uuid !== e.bidId;
                    });
                  x.tags = [].concat(y(n), y(r));
                }),
              e[0].userId)
            ) {
              var R = [];
              K(
                R,
                Object(a.deepAccess)(e[0], "userId.flocId.id"),
                "chrome.com",
                null
              ),
                K(
                  R,
                  Object(a.deepAccess)(e[0], "userId.criteoId"),
                  "criteo.com",
                  null
                ),
                K(
                  R,
                  Object(a.deepAccess)(e[0], "userId.netId"),
                  "netid.de",
                  null
                ),
                K(
                  R,
                  Object(a.deepAccess)(e[0], "userId.idl_env"),
                  "liveramp.com",
                  null
                ),
                K(
                  R,
                  Object(a.deepAccess)(e[0], "userId.tdid"),
                  "adserver.org",
                  "TDID"
                ),
                K(
                  R,
                  Object(a.deepAccess)(e[0], "userId.uid2.id"),
                  "uidapi.com",
                  "UID2"
                ),
                R.length && (x.eids = R);
            }
            return (
              t[0].publisher_id && (x.publisher_id = t[0].publisher_id),
              (function (e, r) {
                var t = [],
                  n = { withCredentials: !0 },
                  s = _;
                N(r) || (s = k);
                ("TRUE" !==
                  Object(a.getParameterByName)("apn_test").toUpperCase() &&
                  !0 !== i.b.getConfig("apn_test")) ||
                  (n.customHeaders = { "X-Is-Test": 1 });
                if (e.tags.length > 15) {
                  var o = Object(a.deepClone)(e);
                  Object(a.chunk)(e.tags, 15).forEach(function (e) {
                    o.tags = e;
                    var a = JSON.stringify(o);
                    t.push({
                      method: "POST",
                      url: s,
                      data: a,
                      bidderRequest: r,
                      options: n,
                    });
                  });
                } else {
                  var d = JSON.stringify(e);
                  t = {
                    method: "POST",
                    url: s,
                    data: d,
                    bidderRequest: r,
                    options: n,
                  };
                }
                return t;
              })(x, r)
            );
          },
          interpretResponse: function (e, r) {
            var t = this,
              i = r.bidderRequest;
            e = e.body;
            var d = [];
            if (!e || e.error) {
              var c = "in response for ".concat(i.bidderCode, " adapter");
              return (
                e && e.error && (c += ": ".concat(e.error)),
                Object(a.logError)(c),
                d
              );
            }
            if (
              (e.tags &&
                e.tags.forEach(function (e) {
                  var r,
                    c =
                      (r = e) &&
                      r.ads &&
                      r.ads.length &&
                      p()(r.ads, function (e) {
                        return e.rtb;
                      });
                  if (
                    c &&
                    0 !== c.cpm &&
                    l()(t.supportedMediaTypes, c.ad_type)
                  ) {
                    var u = (function (e, r, t) {
                      var i = Object(a.getBidRequest)(e.uuid, [t]),
                        d = {
                          requestId: e.uuid,
                          cpm: r.cpm,
                          creativeId: r.creative_id,
                          dealId: r.deal_id,
                          currency: "USD",
                          netRevenue: !0,
                          ttl: 300,
                          adUnitCode: i.adUnitCode,
                          appnexus: {
                            buyerMemberId: r.buyer_member_id,
                            dealPriority: r.deal_priority,
                            dealCode: r.deal_code,
                          },
                        };
                      r.adomain &&
                        (d.meta = v({}, d.meta, { advertiserDomains: [] }));
                      r.advertiser_id &&
                        (d.meta = v({}, d.meta, {
                          advertiserId: r.advertiser_id,
                        }));
                      if (r.rtb.video) {
                        switch (
                          (v(d, {
                            width: r.rtb.video.player_width,
                            height: r.rtb.video.player_height,
                            vastImpUrl: r.notify_url,
                            ttl: 3600,
                          }),
                          Object(a.deepAccess)(i, "mediaTypes.video.context"))
                        ) {
                          case o.a:
                            var c = Object(s.getIabSubCategory)(
                              i.bidder,
                              r.brand_category_id
                            );
                            d.meta = v({}, d.meta, { primaryCatId: c });
                            var u = r.deal_priority;
                            (d.video = {
                              context: o.a,
                              durationSeconds: Math.floor(
                                r.rtb.video.duration_ms / 1e3
                              ),
                              dealTier: u,
                            }),
                              (d.vastUrl = r.rtb.video.asset_url);
                            break;
                          case m.b:
                            if (
                              ((d.adResponse = e),
                              (d.adResponse.ad = d.adResponse.ads[0]),
                              (d.adResponse.ad.video =
                                d.adResponse.ad.rtb.video),
                              (d.vastXml = r.rtb.video.content),
                              r.renderer_url)
                            ) {
                              var l = p()(t.bids, function (r) {
                                  return r.bidId === e.uuid;
                                }),
                                f = Object(a.deepAccess)(l, "renderer.options");
                              d.renderer = (function (e, r) {
                                var t =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                      ? arguments[2]
                                      : {},
                                  i = n.a.install({
                                    id: r.renderer_id,
                                    url: r.renderer_url,
                                    config: t,
                                    loaded: !1,
                                    adUnitCode: e,
                                  });
                                try {
                                  i.setRender(L);
                                } catch (e) {
                                  Object(a.logWarn)(
                                    "Prebid Error calling setRender on renderer",
                                    e
                                  );
                                }
                                return (
                                  i.setEventHandlers({
                                    impression: function () {
                                      return Object(a.logMessage)(
                                        "AppNexus outstream video impression event"
                                      );
                                    },
                                    loaded: function () {
                                      return Object(a.logMessage)(
                                        "AppNexus outstream video loaded event"
                                      );
                                    },
                                    ended: function () {
                                      Object(a.logMessage)(
                                        "AppNexus outstream renderer video event"
                                      ),
                                        (document.querySelector(
                                          "#".concat(e)
                                        ).style.display = "none");
                                    },
                                  }),
                                  i
                                );
                              })(d.adUnitCode, r, f);
                            }
                            break;
                          case m.a:
                            d.vastUrl =
                              r.notify_url +
                              "&redir=" +
                              encodeURIComponent(r.rtb.video.asset_url);
                        }
                      } else if (r.rtb[o.c]) {
                        var b = r.rtb[o.c],
                          y = r.viewability.config.replace("src=", "data-src="),
                          g = b.javascript_trackers;
                        null == g
                          ? (g = y)
                          : Object(a.isStr)(g)
                          ? (g = [g, y])
                          : g.push(y),
                          (d[o.c] = {
                            title: b.title,
                            body: b.desc,
                            body2: b.desc2,
                            cta: b.ctatext,
                            rating: b.rating,
                            sponsoredBy: b.sponsored,
                            privacyLink: b.privacy_link,
                            address: b.address,
                            downloads: b.downloads,
                            likes: b.likes,
                            phone: b.phone,
                            price: b.price,
                            salePrice: b.saleprice,
                            clickUrl: b.link.url,
                            displayUrl: b.displayurl,
                            clickTrackers: b.link.click_trackers,
                            impressionTrackers: b.impression_trackers,
                            javascriptTrackers: g,
                          }),
                          b.main_img &&
                            (d.native.image = {
                              url: b.main_img.url,
                              height: b.main_img.height,
                              width: b.main_img.width,
                            }),
                          b.icon &&
                            (d.native.icon = {
                              url: b.icon.url,
                              height: b.icon.height,
                              width: b.icon.width,
                            });
                      } else {
                        v(d, {
                          width: r.rtb.banner.width,
                          height: r.rtb.banner.height,
                          ad: r.rtb.banner.content,
                        });
                        try {
                          if (r.rtb.trackers) {
                            var h = r.rtb.trackers[0].impression_urls[0],
                              _ = Object(a.createTrackPixelHtml)(h);
                            d.ad += _;
                          }
                        } catch (e) {
                          Object(a.logError)(
                            "Error appending tracking pixel",
                            e
                          );
                        }
                      }
                      return d;
                    })(e, c, i);
                    (u.mediaType = (function (e) {
                      var r = e.ad_type;
                      return r === o.d ? o.d : r === o.c ? o.c : o.b;
                    })(c)),
                      d.push(u);
                  }
                }),
              e.debug && e.debug.debug_info)
            ) {
              var u =
                "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
              (u = u
                .replace(/(<td>|<th>)/gm, "\t")
                .replace(/(<\/td>|<\/th>)/gm, "\n")
                .replace(/^<br>/gm, "")
                .replace(/(<br>\n|<br>)/gm, "\n")
                .replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n")
                .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n")
                .replace(/(<([^>]+)>)/gim, "")),
                Object(a.logMessage)(
                  "https://console.appnexus.com/docs/understanding-the-debug-auction"
                ),
                Object(a.logMessage)(u);
            }
            return d;
          },
          getMappingFileInfo: function () {
            return {
              url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",
              refreshInDays: 2,
            };
          },
          getUserSyncs: function (e, r, t) {
            if (e.iframeEnabled && N({ gdprConsent: t }))
              return [
                {
                  type: "iframe",
                  url: "https://acdn.adnxs.com/dmp/async_usersync.html",
                },
              ];
          },
          transformBidParams: function (e, r) {
            return (
              (e = Object(a.convertTypes)(
                {
                  member: "string",
                  invCode: "string",
                  placementId: "number",
                  keywords: a.transformBidderParamKeywords,
                  publisherId: "number",
                },
                e
              )),
              r &&
                ((e.use_pmt_rule =
                  "boolean" == typeof e.usePaymentRule && e.usePaymentRule),
                e.usePaymentRule && delete e.usePaymentRule,
                R(e.keywords) && e.keywords.forEach(P),
                Object.keys(e).forEach(function (r) {
                  var t = Object(a.convertCamelToUnderscore)(r);
                  t !== r && ((e[t] = e[r]), delete e[r]);
                })),
              e
            );
          },
          onBidWon: function (e) {
            e.native &&
              (function (e) {
                var r = (function (e) {
                  var r;
                  if (Object(a.isStr)(e) && U(e)) r = e;
                  else if (Object(a.isArray)(e))
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      U(n) && (r = n);
                    }
                  return r;
                })(e.native.javascriptTrackers);
                if (r)
                  for (
                    var t = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode,
                      n = (function (e) {
                        var r = e.indexOf('src="') + 5,
                          t = e.indexOf('"', r);
                        return e.substring(r, t);
                      })(r),
                      i = n.replace("dom_id=%native_dom_id%", t),
                      s = document.getElementsByTagName("iframe"),
                      o = !1,
                      d = 0;
                    d < s.length && !o;
                    d++
                  ) {
                    var c = s[d];
                    try {
                      var p = c.contentDocument || c.contentWindow.document;
                      if (p)
                        for (
                          var u = p.getElementsByTagName("script"), l = 0;
                          l < u.length && !o;
                          l++
                        ) {
                          var m = u[l];
                          m.getAttribute("data-src") == n &&
                            (m.setAttribute("src", i),
                            m.setAttribute("data-src", ""),
                            m.removeAttribute && m.removeAttribute("data-src"),
                            (o = !0));
                        }
                    } catch (e) {
                      if (
                        !(
                          e instanceof DOMException &&
                          "SecurityError" === e.name
                        )
                      )
                        throw e;
                    }
                  }
              })(e);
          },
        };
      function R(e) {
        return !!(Object(a.isArray)(e) && e.length > 0);
      }
      function P(e) {
        R(e.value) && "" === e.value[0] && delete e.value;
      }
      function U(e) {
        var r = e.match(S),
          t = null != r && r.length >= 1,
          a = e.match("trk.js"),
          n = null != a && a.length >= 1;
        return e.startsWith("<script") && n && t;
      }
      function N(e) {
        var r = !0;
        return (
          e &&
            e.gdprConsent &&
            e.gdprConsent.gdprApplies &&
            2 === e.gdprConsent.apiVersion &&
            (r = !(
              !0 !==
              Object(a.deepAccess)(
                e.gdprConsent,
                "vendorData.purpose.consents.1"
              )
            )),
          r
        );
      }
      function q(e) {
        var r = {};
        (r.sizes = z(e.sizes)),
          (r.primary_size = r.sizes[0]),
          (r.ad_types = []),
          (r.uuid = e.bidId),
          e.params.placementId
            ? (r.id = parseInt(e.params.placementId, 10))
            : (r.code = e.params.invCode),
          (r.allow_smaller_sizes = e.params.allowSmallerSizes || !1),
          (r.use_pmt_rule = e.params.usePaymentRule || !1),
          (r.prebid = !0),
          (r.disable_psa = !0);
        var t = (function (e) {
          if (!Object(a.isFn)(e.getFloor))
            return e.params.reserve ? e.params.reserve : null;
          var r = e.getFloor({ currency: "USD", mediaType: "*", size: "*" });
          if (
            Object(a.isPlainObject)(r) &&
            !isNaN(r.floor) &&
            "USD" === r.currency
          )
            return r.floor;
          return null;
        })(e);
        if (
          (t && (r.reserve = t),
          e.params.position &&
            (r.position = { above: 1, below: 2 }[e.params.position] || 0),
          e.params.trafficSourceCode &&
            (r.traffic_source_code = e.params.trafficSourceCode),
          e.params.privateSizes && (r.private_sizes = z(e.params.privateSizes)),
          e.params.supplyType && (r.supply_type = e.params.supplyType),
          e.params.pubClick && (r.pubclick = e.params.pubClick),
          e.params.extInvCode && (r.ext_inv_code = e.params.extInvCode),
          e.params.publisherId &&
            (r.publisher_id = parseInt(e.params.publisherId, 10)),
          e.params.externalImpId &&
            (r.external_imp_id = e.params.externalImpId),
          !Object(a.isEmpty)(e.params.keywords))
        ) {
          var n = Object(a.transformBidderParamKeywords)(e.params.keywords);
          n.length > 0 && n.forEach(P), (r.keywords = n);
        }
        var i,
          s,
          c = Object(a.deepAccess)(e, "ortb2Imp.ext.data.pbadslot");
        if (
          (c && (r.gpid = c),
          (e.mediaType === o.c ||
            Object(a.deepAccess)(e, "mediaTypes.".concat(o.c))) &&
            (r.ad_types.push(o.c),
            0 === r.sizes.length && (r.sizes = z([1, 1])),
            e.nativeParams))
        ) {
          var u =
            ((i = e.nativeParams),
            (s = {}),
            Object.keys(i).forEach(function (e) {
              var r = (C[e] && C[e].serverName) || C[e] || e,
                t = C[e] && C[e].requiredParams;
              if (
                ((s[r] = v({}, t, i[e])),
                (r === C.image.serverName || r === C.icon.serverName) &&
                  s[r].sizes)
              ) {
                var n = s[r].sizes;
                (Object(a.isArrayOfNums)(n) ||
                  (Object(a.isArray)(n) &&
                    n.length > 0 &&
                    n.every(function (e) {
                      return Object(a.isArrayOfNums)(e);
                    }))) &&
                  (s[r].sizes = z(s[r].sizes));
              }
              r === C.privacyLink && (s.privacy_supported = !0);
            }),
            s);
          r[o.c] = { layouts: [u] };
        }
        var m = Object(a.deepAccess)(e, "mediaTypes.".concat(o.d)),
          f = Object(a.deepAccess)(e, "mediaTypes.video.context");
        (r.hb_source = m && "adpod" === f ? 7 : 1),
          (e.mediaType === o.d || m) && r.ad_types.push(o.d),
          (e.mediaType === o.d || (m && "outstream" !== f)) &&
            (r.require_asset_url = !0),
          e.params.video &&
            ((r.video = {}),
            Object.keys(e.params.video)
              .filter(function (e) {
                return l()(O, e);
              })
              .forEach(function (t) {
                switch (t) {
                  case "context":
                  case "playback_method":
                    var n = e.params.video[t];
                    (n = Object(a.isArray)(n) ? n[0] : n),
                      (r.video[t] = x[t][n]);
                    break;
                  case "frameworks":
                    break;
                  default:
                    r.video[t] = e.params.video[t];
                }
              }),
            e.params.video.frameworks &&
              Object(a.isArray)(e.params.video.frameworks) &&
              (r.video_frameworks = e.params.video.frameworks)),
          m &&
            ((r.video = r.video || {}),
            Object.keys(m)
              .filter(function (e) {
                return l()(j, e);
              })
              .forEach(function (e) {
                switch (e) {
                  case "minduration":
                  case "maxduration":
                    "number" != typeof r.video[e] && (r.video[e] = m[e]);
                    break;
                  case "skip":
                    "boolean" != typeof r.video.skippable &&
                      (r.video.skippable = 1 === m[e]);
                    break;
                  case "skipafter":
                    "number" != typeof r.video.skipoffset &&
                      (r.video.skippoffset = m[e]);
                    break;
                  case "playbackmethod":
                    if ("number" != typeof r.video.playback_method) {
                      var t = m[e];
                      (t = Object(a.isArray)(t) ? t[0] : t) >= 1 &&
                        t <= 4 &&
                        (r.video.playback_method = t);
                    }
                    break;
                  case "api":
                    if (!r.video_frameworks && Object(a.isArray)(m[e])) {
                      var n = m[e]
                        .map(function (e) {
                          var r = 4 === e ? 5 : 5 === e ? 4 : e;
                          if (r >= 1 && r <= 5) return r;
                        })
                        .filter(function (e) {
                          return e;
                        });
                      r.video_frameworks = n;
                    }
                }
              })),
          e.renderer &&
            (r.video = v({}, r.video, { custom_renderer_present: !0 })),
          e.params.frameworks &&
            Object(a.isArray)(e.params.frameworks) &&
            (r.banner_frameworks = e.params.frameworks);
        var b = p()(d.a.getAdUnits(), function (r) {
          return e.transactionId === r.transactionId;
        });
        return (
          b && b.mediaTypes && b.mediaTypes.banner && r.ad_types.push(o.b),
          0 === r.ad_types.length && delete r.ad_types,
          r
        );
      }
      function z(e) {
        var r = [],
          t = {};
        if (Object(a.isArray)(e) && 2 === e.length && !Object(a.isArray)(e[0]))
          (t.width = parseInt(e[0], 10)),
            (t.height = parseInt(e[1], 10)),
            r.push(t);
        else if ("object" === b(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            ((t = {}).width = parseInt(i[0], 10)),
              (t.height = parseInt(i[1], 10)),
              r.push(t);
          }
        return r;
      }
      function M(e) {
        return !!e.params.user;
      }
      function D(e) {
        return !!parseInt(e.params.member, 10);
      }
      function B(e) {
        if (e.params) return !!e.params.app;
      }
      function V(e) {
        return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
      }
      function F(e) {
        return !!e.debug;
      }
      function J(e) {
        return (
          e.mediaTypes &&
          e.mediaTypes.video &&
          e.mediaTypes.video.context === o.a
        );
      }
      function W(e) {
        var r = !1,
          t = e.params,
          n = e.params.video;
        return (
          t.frameworks &&
            Object(a.isArray)(t.frameworks) &&
            (r = l()(e.params.frameworks, 6)),
          !r &&
            n &&
            n.frameworks &&
            Object(a.isArray)(n.frameworks) &&
            (r = l()(e.params.video.frameworks, 6)),
          r
        );
      }
      function H(e, r, t) {
        Object(a.isEmpty)(e.video) && (e.video = {}), (e.video[r] = t);
      }
      function L(e) {
        var r, t;
        (r = e.adUnitCode),
          (t = document
            .getElementById(r)
            .querySelectorAll("div[id^='google_ads']"))[0] &&
            t[0].style.setProperty("display", "none"),
          (function (e) {
            try {
              var r = document
                .getElementById(e)
                .querySelectorAll("script[id^='sas_script']");
              r[0].nextSibling &&
                "iframe" === r[0].nextSibling.localName &&
                r[0].nextSibling.style.setProperty("display", "none");
            } catch (e) {}
          })(e.adUnitCode),
          e.renderer.push(function () {
            window.ANOutstreamVideo.renderAd(
              {
                tagId: e.adResponse.tag_id,
                sizes: [e.getSize().split("x")],
                targetId: e.adUnitCode,
                uuid: e.adResponse.uuid,
                adResponse: e.adResponse,
                rendererOptions: e.renderer.getConfig(),
              },
              $.bind(null, e)
            );
          });
      }
      function $(e, r, t) {
        e.renderer.handleVideoEvent({ id: r, eventName: t });
      }
      function K(e, r, t, a) {
        return (
          r &&
            (a
              ? e.push({ source: t, id: r, rti_partner: a })
              : e.push({ source: t, id: r })),
          e
        );
      }
      Object(s.registerBidder)(E);
    },
  },
  [284]
);
pbjsChunk(
  [310],
  {
    300: function (e, r, t) {
      e.exports = t(301);
    },
    301: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "VIDEO_ENDPOINT", function () {
          return h;
        }),
        t.d(r, "BANNER_ENDPOINT", function () {
          return y;
        }),
        t.d(r, "OUTSTREAM_SRC", function () {
          return O;
        }),
        t.d(r, "VIDEO_TARGETING", function () {
          return w;
        }),
        t.d(r, "DEFAULT_MIMES", function () {
          return I;
        }),
        t.d(r, "SUPPORTED_USER_IDS", function () {
          return T;
        }),
        t.d(r, "spec", function () {
          return A;
        });
      var n = t(0),
        i = t(3),
        o = t(1),
        a = t(13),
        c = t(2),
        d = t(11),
        s = t.n(d),
        u = t(12),
        p = t.n(u);
      function f(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, r) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == t) return;
            var n,
              i,
              o = [],
              a = !0,
              c = !1;
            try {
              for (
                t = t.call(e);
                !(a = (n = t.next()).done) &&
                (o.push(n.value), !r || o.length !== r);
                a = !0
              );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                a || null == t.return || t.return();
              } finally {
                if (c) throw i;
              }
            }
            return o;
          })(e, r) ||
          (function (e, r) {
            if (!e) return;
            if ("string" == typeof e) return l(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(e);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return l(e, r);
          })(e, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n;
      }
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var m = "1.18",
        v = "BFIO_PREBID",
        g = "USD",
        h = "https://reachms.bfmio.com/bid.json?exchange_id=",
        y = "https://display.bfmio.com/prebid_display",
        O =
          "https://player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js",
        w = [
          "mimes",
          "playbackmethod",
          "maxduration",
          "placement",
          "skip",
          "skipmin",
          "skipafter",
        ],
        I = ["video/mp4", "application/javascript"],
        T = [
          {
            key: "tdid",
            source: "adserver.org",
            rtiPartner: "TDID",
            queryParam: "tdid",
          },
          {
            key: "idl_env",
            source: "liveramp.com",
            rtiPartner: "idl",
            queryParam: "idl",
          },
          {
            key: "uid2.id",
            source: "uidapi.com",
            rtiPartner: "UID2",
            queryParam: "uid2",
          },
          {
            key: "haloId",
            source: "audigent.com",
            atype: 1,
            queryParam: "haloid",
          },
        ],
        j = "",
        A = {
          code: "beachfront",
          supportedMediaTypes: [c.d, c.b],
          isBidRequestValid: function (e) {
            if (E(e)) {
              if (!_(e, "appId"))
                return (
                  Object(n.logWarn)(
                    "Beachfront: appId param is required for video bids."
                  ),
                  !1
                );
              if (!_(e, "bidfloor"))
                return (
                  Object(n.logWarn)(
                    "Beachfront: bidfloor param is required for video bids."
                  ),
                  !1
                );
            }
            if (U(e)) {
              if (!q(e, "appId"))
                return (
                  Object(n.logWarn)(
                    "Beachfront: appId param is required for banner bids."
                  ),
                  !1
                );
              if (!q(e, "bidfloor"))
                return (
                  Object(n.logWarn)(
                    "Beachfront: bidfloor param is required for banner bids."
                  ),
                  !1
                );
            }
            return !0;
          },
          buildRequests: function (e, r) {
            var t = [],
              n = e.filter(function (e) {
                return (function (e) {
                  return E(e) && _(e, "appId") && _(e, "bidfloor");
                })(e);
              }),
              i = e.filter(function (e) {
                return (function (e) {
                  return U(e) && q(e, "appId") && q(e, "bidfloor");
                })(e);
              });
            return (
              n.forEach(function (e) {
                (j = _(e, "appId")),
                  t.push({
                    method: "POST",
                    url: h + j,
                    data: z(e, r),
                    bidRequest: e,
                  });
              }),
              i.length &&
                ((j = q(i[0], "appId")),
                t.push({
                  method: "POST",
                  url: y,
                  data: F(i, r),
                  bidRequest: i,
                })),
              t
            );
          },
          interpretResponse: function (e, r) {
            var t = r.bidRequest;
            if (((e = e.body), E(t))) {
              if (!e || !e.bidPrice)
                return (
                  Object(n.logWarn)(
                    "No valid video bids from ".concat(A.code, " bidder")
                  ),
                  []
                );
              var i = S(W(t)),
                o = Object(n.deepAccess)(t, "mediaTypes.video.context"),
                a = _(t, "responseType") || "both",
                d = b({ mediaType: c.d, advertiserDomains: [] }, e.meta),
                u = {
                  requestId: t.bidId,
                  bidderCode: A.code,
                  cpm: e.bidPrice,
                  width: i.w,
                  height: i.h,
                  creativeId: e.crid || e.cmpId,
                  meta: d,
                  renderer: "outstream" === o ? P(t) : null,
                  mediaType: c.d,
                  currency: g,
                  netRevenue: !0,
                  ttl: 300,
                };
              return (
                ("nurl" !== a && "both" !== a) || (u.vastUrl = e.url),
                ("adm" !== a && "both" !== a) || (u.vastXml = e.vast),
                u
              );
            }
            return e && e.length
              ? e
                  .filter(function (e) {
                    return e.adm;
                  })
                  .map(function (e) {
                    var r = s()(t, function (r) {
                        return r.adUnitCode === e.slot;
                      }),
                      n = b({ mediaType: c.b, advertiserDomains: [] }, e.meta);
                    return {
                      requestId: r.bidId,
                      bidderCode: A.code,
                      ad: e.adm,
                      creativeId: e.crid,
                      cpm: e.price,
                      width: e.w,
                      height: e.h,
                      meta: n,
                      mediaType: c.b,
                      currency: g,
                      netRevenue: !0,
                      ttl: 300,
                    };
                  })
              : (Object(n.logWarn)(
                  "No valid banner bids from ".concat(A.code, " bidder")
                ),
                []);
          },
          getUserSyncs: function (e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "",
              o = [],
              a = t.gdprApplies,
              c = t.consentString,
              d = void 0 === c ? "" : c,
              u = s()(r, function (e) {
                return Object(n.isArray)(e.body);
              });
            return (
              u
                ? e.iframeEnabled &&
                  u.body
                    .filter(function (e) {
                      return e.sync;
                    })
                    .forEach(function (e) {
                      o.push({ type: "iframe", url: e.sync });
                    })
                : e.iframeEnabled
                ? o.push({
                    type: "iframe",
                    url: "https://sync.bfmio.com/sync_iframe?ifg=1&id="
                      .concat(j, "&gdpr=")
                      .concat(a ? 1 : 0, "&gc=")
                      .concat(d, "&gce=1&us_privacy=")
                      .concat(i),
                  })
                : e.pixelEnabled &&
                  o.push({
                    type: "image",
                    url: "https://sync.bfmio.com/syncb?pid=144&id="
                      .concat(j, "&gdpr=")
                      .concat(a ? 1 : 0, "&gc=")
                      .concat(d, "&gce=1&us_privacy=")
                      .concat(i),
                  }),
              o
            );
          },
        };
      function P(e) {
        var r = a.a.install({ id: e.bidId, url: O, loaded: !1 });
        return (
          r.setRender(function (r) {
            r.renderer.push(function () {
              window.Beachfront.Player(r.adUnitCode, {
                adTagUrl: r.vastUrl,
                width: r.width,
                height: r.height,
                expandInView: R(e, "expandInView", !1),
                collapseOnComplete: R(e, "collapseOnComplete", !0),
                progressColor: R(e, "progressColor"),
                adPosterColor: R(e, "adPosterColor"),
              });
            });
          }),
          r
        );
      }
      function S(e) {
        return e && e.length ? e[0] : { w: void 0, h: void 0 };
      }
      function C(e) {
        return Object(n.parseSizesInput)(e).map(function (e) {
          var r = f(e.split("x"), 2),
            t = r[0],
            n = r[1];
          return { w: parseInt(t, 10) || void 0, h: parseInt(n, 10) || void 0 };
        });
      }
      function W(e) {
        return C(
          Object(n.deepAccess)(e, "mediaTypes.video.playerSize") || e.sizes
        );
      }
      function N(e) {
        return C(Object(n.deepAccess)(e, "mediaTypes.banner.sizes") || e.sizes);
      }
      function x() {
        return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent);
      }
      function k() {
        return (
          "1" === navigator.doNotTrack ||
          "1" === window.doNotTrack ||
          "1" === navigator.msDoNoTrack ||
          "yes" === navigator.doNotTrack
        );
      }
      function E(e) {
        return Object(n.deepAccess)(e, "mediaTypes.video");
      }
      function U(e) {
        return Object(n.deepAccess)(e, "mediaTypes.banner") || !E(e);
      }
      function _(e, r) {
        return (
          Object(n.deepAccess)(e, "params.video." + r) ||
          Object(n.deepAccess)(e, "params." + r)
        );
      }
      function q(e, r) {
        return (
          Object(n.deepAccess)(e, "params.banner." + r) ||
          Object(n.deepAccess)(e, "params." + r)
        );
      }
      function R(e, r, t) {
        var i = Object(n.deepAccess)(e, "params.player." + r);
        return void 0 === i ? t : i;
      }
      function D(e) {
        return (
          (Object(n.isFn)(e.getFloor)
            ? e.getFloor({ currency: g, mediaType: "banner", size: "*" })
            : {}
          ).floor || q(e, "bidfloor")
        );
      }
      function M(e) {
        var r = e && e.refererInfo && e.refererInfo.referer;
        return Object(n.parseUrl)(i.b.getConfig("pageUrl") || r, {
          decodeSearchAsString: !0,
        });
      }
      function B(e) {
        return T.map(
          (function (e) {
            return function (r) {
              var t = r.key,
                i = r.source,
                o = r.rtiPartner,
                a = r.atype,
                c = Object(n.deepAccess)(e, "userId.".concat(t));
              return c
                ? (function (e, r, t, n) {
                    var i = { id: e };
                    t && (i.ext = { rtiPartner: t });
                    n && (i.atype = n);
                    return { source: r, uids: [i] };
                  })(c, i, o, a)
                : null;
            };
          })(e)
        ).filter(function (e) {
          return e;
        });
      }
      function z(e, r) {
        var t = S(W(e)),
          i = (function (e) {
            var r = {},
              t = ["playerSize", "context", "w", "h"];
            return (
              Object.keys(Object(e.mediaTypes.video))
                .filter(function (e) {
                  return !p()(t, e);
                })
                .forEach(function (t) {
                  r[t] = e.mediaTypes.video[t];
                }),
              Object.keys(Object(e.params.video))
                .filter(function (e) {
                  return p()(w, e);
                })
                .forEach(function (t) {
                  r[t] = e.params.video[t];
                }),
              r
            );
          })(e),
          o = _(e, "appId"),
          a = (function (e) {
            return (
              (Object(n.isFn)(e.getFloor)
                ? e.getFloor({ currency: g, mediaType: "video", size: "*" })
                : {}
              ).floor || _(e, "bidfloor")
            );
          })(e),
          c = _(e, "tagid"),
          d = M(r),
          s = B(e),
          u = {
            isPrebid: !0,
            appId: o,
            domain: document.location.hostname,
            id: Object(n.getUniqueIdentifierStr)(),
            imp: [
              {
                video: b({ w: t.w, h: t.h, mimes: I }, i),
                bidfloor: a,
                tagid: c,
                secure: 0 === d.protocol.indexOf("https") ? 1 : 0,
                displaymanager: v,
                displaymanagerver: m,
              },
            ],
            site: { page: d.href, domain: d.hostname },
            device: {
              ua: navigator.userAgent,
              language: navigator.language,
              devicetype: x()
                ? 1
                : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(
                    navigator.userAgent
                  )
                ? 3
                : 2,
              dnt: k() ? 1 : 0,
              js: 1,
              geo: {},
            },
            regs: { ext: {} },
            source: { ext: {} },
            user: { ext: {} },
            cur: [g],
          };
        if (
          (r && r.uspConsent && (u.regs.ext.us_privacy = r.uspConsent),
          r && r.gdprConsent)
        ) {
          var f = r.gdprConsent,
            l = f.gdprApplies,
            h = f.consentString;
          (u.regs.ext.gdpr = l ? 1 : 0), (u.user.ext.consent = h);
        }
        e.schain && (u.source.ext.schain = e.schain),
          s.length > 0 && (u.user.ext.eids = s);
        var y = navigator.connection || navigator.webkitConnection;
        return (
          y && y.effectiveType && (u.device.connectiontype = y.effectiveType), u
        );
      }
      function F(e, r) {
        var t,
          i = M(r),
          o = (function () {
            try {
              return window.top.document.referrer;
            } catch (e) {
              return "";
            }
          })(),
          a = {
            slots: e.map(function (e) {
              return {
                slot: e.adUnitCode,
                id: q(e, "appId"),
                bidfloor: D(e),
                tagid: q(e, "tagid"),
                sizes: N(e),
              };
            }),
            page: i.href,
            domain: i.hostname,
            search: i.search,
            secure: 0 === i.protocol.indexOf("https") ? 1 : 0,
            referrer: o,
            ua: navigator.userAgent,
            deviceOs:
              ((t = s()(
                [
                  { s: "Android", r: /Android/ },
                  { s: "iOS", r: /(iPhone|iPad|iPod)/ },
                  { s: "Mac OS X", r: /Mac OS X/ },
                  { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                  { s: "Linux", r: /(Linux|X11)/ },
                  { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
                  { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
                  { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
                  { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
                  { s: "Windows Vista", r: /Windows NT 6.0/ },
                  { s: "Windows Server 2003", r: /Windows NT 5.2/ },
                  { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
                  { s: "UNIX", r: /UNIX/ },
                  {
                    s: "Search Bot",
                    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
                  },
                ],
                function (e) {
                  return e.r.test(navigator.userAgent);
                }
              )),
              t ? t.s : "unknown"),
            isMobile: x() ? 1 : 0,
            dnt: k() ? 1 : 0,
            adapterVersion: m,
            adapterName: v,
          };
        if (
          (r && r.uspConsent && (a.usPrivacy = r.uspConsent),
          r && r.gdprConsent)
        ) {
          var c = r.gdprConsent,
            d = c.gdprApplies,
            u = c.consentString;
          (a.gdpr = d ? 1 : 0), (a.gdprConsent = u);
        }
        return (
          e[0] && e[0].schain && (a.schain = e[0].schain),
          T.forEach(function (r) {
            var t = r.key,
              i = r.queryParam,
              o = Object(n.deepAccess)(e, "0.userId.".concat(t));
            o && (a[i] = o);
          }),
          a
        );
      }
      Object(o.registerBidder)(A);
    },
  },
  [300]
);
pbjsChunk(
  [284],
  {
    365: function (n, t, e) {
      n.exports = e(366);
    },
    366: function (n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        e.d(t, "allowAuction", function () {
          return C;
        }),
        e.d(t, "userCMP", function () {
          return f;
        }),
        e.d(t, "consentTimeout", function () {
          return p;
        }),
        e.d(t, "gdprScope", function () {
          return g;
        }),
        e.d(t, "staticConsentData", function () {
          return b;
        }),
        (t.requestBidsHook = j),
        (t.resetConsentData = function () {
          (m = void 0),
            (f = void 0),
            (v = 0),
            i.gdprDataHandler.setConsentData(null);
        }),
        (t.setConsentConfig = A);
      var o = e(0),
        a = e(3),
        i = e(8),
        c = e(12),
        r = e.n(c),
        s = e(80),
        d = e.n(s);
      function l(n) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function u(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      var f,
        p,
        g,
        b,
        m,
        C = { value: true, definedInConfig: !1 },
        v = 0,
        y = !1,
        w = {
          iab: function (n, t, e) {
            function a(a, i) {
              Object(o.logInfo)("Received a response from CMP", a),
                i
                  ? (!1 !== a.gdprApplies &&
                      "tcloaded" !== a.eventStatus &&
                      "useractioncomplete" !== a.eventStatus) ||
                    n(a, e)
                  : t(
                      "CMP unable to register callback function.  Please check CMP setup.",
                      e
                    );
            }
            var i = (function () {
                var t = {};
                function a() {
                  t.getConsentData &&
                    t.getVendorConsents &&
                    (Object(o.logInfo)(
                      "Received all requested responses from CMP",
                      t
                    ),
                    n(t, e));
                }
                return {
                  consentDataCallback: function (n) {
                    (t.getConsentData = n), a();
                  },
                  vendorConsentsCallback: function (n) {
                    (t.getVendorConsents = n), a();
                  },
                };
              })(),
              c = {},
              r = (function () {
                for (var n, t, e = window; !n; ) {
                  try {
                    if (
                      "function" == typeof e.__tcfapi ||
                      "function" == typeof e.__cmp
                    ) {
                      "function" == typeof e.__tcfapi
                        ? ((v = 2), (t = e.__tcfapi))
                        : ((v = 1), (t = e.__cmp)),
                        (n = e);
                      break;
                    }
                  } catch (n) {}
                  try {
                    if (e.frames.__tcfapiLocator) {
                      (v = 2), (n = e);
                      break;
                    }
                  } catch (n) {}
                  try {
                    if (e.frames.__cmpLocator) {
                      (v = 1), (n = e);
                      break;
                    }
                  } catch (n) {}
                  if (e === window.top) break;
                  e = e.parent;
                }
                return { cmpFrame: n, cmpFunction: t };
              })(),
              s = r.cmpFrame,
              l = r.cmpFunction;
            if (!s) return t("CMP not found.", e);
            Object(o.isFn)(l)
              ? (Object(o.logInfo)(
                  "Detected CMP API is directly accessible, calling it now..."
                ),
                1 === v
                  ? (l("getConsentData", null, i.consentDataCallback),
                    l("getVendorConsents", null, i.vendorConsentsCallback))
                  : 2 === v && l("addEventListener", v, a))
              : 1 === v &&
                window.$sf &&
                window.$sf.ext &&
                "function" == typeof window.$sf.ext.cmp
              ? (Object(o.logInfo)(
                  "Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."
                ),
                f("getConsentData", i.consentDataCallback),
                f("getVendorConsents", i.vendorConsentsCallback))
              : (Object(o.logInfo)(
                  "Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."
                ),
                1 === v
                  ? (p("getConsentData", s, i.consentDataCallback),
                    p("getVendorConsents", s, i.vendorConsentsCallback))
                  : 2 === v && p("addEventListener", s, a));
            function f(n, t) {
              var a = e.adUnits,
                i = 1,
                c = 1;
              if (Array.isArray(a) && a.length > 0) {
                var r = Object(o.getAdUnitSizes)(a[0]);
                (i = r[0][0]), (c = r[0][1]);
              }
              window.$sf.ext.register(i, c, function (e, o) {
                if ("cmpReturn" === e) {
                  var a =
                    "getConsentData" === n
                      ? o.vendorConsentData
                      : o.vendorConsents;
                  t(a);
                }
              }),
                window.$sf.ext.cmp(n);
            }
            function p(n, t, e) {
              var o = 2 === v ? "__tcfapi" : "__cmp",
                a = "".concat(o, "Call");
              function i(n) {
                var t = "".concat(o, "Return"),
                  e =
                    "string" == typeof n.data && d()(n.data, t)
                      ? JSON.parse(n.data)
                      : n.data;
                if (e[t] && e[t].callId) {
                  var a = e[t];
                  void 0 !== c[a.callId] &&
                    c[a.callId](a.returnValue, a.success);
                }
              }
              2 === v
                ? ((window[o] = function (n, e, o, i) {
                    var r = Math.random() + "",
                      s = u({}, a, {
                        command: n,
                        version: e,
                        parameter: i,
                        callId: r,
                      });
                    (c[r] = o), t.postMessage(s, "*");
                  }),
                  window.addEventListener("message", i, !1),
                  window[o](n, v, e))
                : ((window[o] = function (n, e, o) {
                    var i = Math.random() + "",
                      r = u({}, a, { command: n, parameter: e, callId: i });
                    (c[i] = o), t.postMessage(r, "*");
                  }),
                  window.addEventListener("message", i, !1),
                  window[o](n, void 0, e));
            }
          },
          static: function (n, t, e) {
            n(b, e);
          },
        };
      function j(n, t) {
        var e = {
          context: this,
          args: [t],
          nextFn: n,
          adUnits: t.adUnits || pbjs.adUnits,
          bidsBackHandler: t.bidsBackHandler,
          haveExited: !1,
          timer: null,
        };
        return m
          ? (Object(o.logInfo)(
              "User consent information already known.  Pulling internally stored information..."
            ),
            h(null, e))
          : r()(Object.keys(w), f)
          ? (w[f].call(this, D, k, e),
            void (
              e.haveExited ||
              (0 === p
                ? D(void 0, e)
                : (e.timer = setTimeout(O.bind(null, e), p)))
            ))
          : (Object(o.logWarn)(
              "CMP framework (".concat(
                f,
                ") is not a supported framework.  Aborting consentManagement module and resuming auction."
              )
            ),
            e.nextFn.apply(e.context, e.args));
      }
      function D(n, t) {
        "static" === f &&
          2 === (v = n.getConsentData ? 1 : n.getTCData ? 2 : 0) &&
          (n = n.getTCData);
        var e =
          1 === v
            ? function (n) {
                var t = n && n.getConsentData && n.getConsentData.gdprApplies;
                return !(
                  "boolean" == typeof t &&
                  (!0 !== t ||
                    (Object(o.isStr)(n.getConsentData.consentData) &&
                      Object(o.isPlainObject)(n.getVendorConsents) &&
                      Object.keys(n.getVendorConsents).length > 1))
                );
              }
            : 2 === v
            ? function () {
                var t =
                    n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : g,
                  e = n && n.tcString;
                return !(
                  "boolean" == typeof t &&
                  (!0 !== t || Object(o.isStr)(e))
                );
              }
            : null;
        C.definedInConfig && 2 === v
          ? Object(o.logWarn)("'allowAuctionWithoutConsent' ignored for TCF 2")
          : C.definedInConfig ||
            1 !== v ||
            Object(o.logInfo)(
              "'allowAuctionWithoutConsent' using system default: (".concat(
                true,
                ")."
              )
            ),
          Object(o.isFn)(e)
            ? e(n)
              ? k("CMP returned unexpected value during lookup process.", t, n)
              : (clearTimeout(t.timer), M(n), h(null, t))
            : k(
                "Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.",
                t,
                n
              );
      }
      function O(n) {
        k("CMP workflow exceeded timeout threshold.", n);
      }
      function k(n, t, e) {
        clearTimeout(t.timer), C.value && 1 === v && M(void 0), h(n, t, e);
      }
      function M(n) {
        1 === v
          ? (m = {
              consentString: n ? n.getConsentData.consentData : void 0,
              vendorData: n ? n.getVendorConsents : void 0,
              gdprApplies: n ? n.getConsentData.gdprApplies : g,
            })
          : ((m = {
              consentString: n ? n.tcString : void 0,
              vendorData: n || void 0,
              gdprApplies:
                n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : g,
            }),
            n &&
              n.addtlConsent &&
              Object(o.isStr)(n.addtlConsent) &&
              (m.addtlConsent = n.addtlConsent)),
          (m.apiVersion = v),
          i.gdprDataHandler.setConsentData(m);
      }
      function h(n, t, e) {
        if (!1 === t.haveExited) {
          t.haveExited = !0;
          var a = t.context,
            i = t.args,
            c = t.nextFn;
          n
            ? C.value && 1 === v
              ? (Object(o.logWarn)(
                  n + " 'allowAuctionWithoutConsent' activated.",
                  e
                ),
                c.apply(a, i))
              : (Object(o.logError)(
                  n + " Canceling auction as per consentManagement config.",
                  e
                ),
                "function" == typeof t.bidsBackHandler
                  ? t.bidsBackHandler()
                  : Object(o.logError)("Error executing bidsBackHandler"))
            : c.apply(a, i);
        }
      }
      function A(n) {
        (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === l(n)
          ? (Object(o.isStr)(n.cmpApi)
              ? (f = n.cmpApi)
              : ((f = "iab"),
                Object(o.logInfo)(
                  "consentManagement config did not specify cmp.  Using system default setting (".concat(
                    "iab",
                    ")."
                  )
                )),
            Object(o.isNumber)(n.timeout)
              ? (p = n.timeout)
              : ((p = 1e4),
                Object(o.logInfo)(
                  "consentManagement config did not specify timeout.  Using system default setting (".concat(
                    1e4,
                    ")."
                  )
                )),
            "boolean" == typeof n.allowAuctionWithoutConsent &&
              ((C.value = n.allowAuctionWithoutConsent),
              (C.definedInConfig = !0)),
            (g = !0 === n.defaultGdprScope),
            Object(o.logInfo)("consentManagement module has been activated..."),
            "static" === f &&
              (Object(o.isPlainObject)(n.consentData)
                ? ((b = n.consentData), (p = 0))
                : Object(o.logError)(
                    "consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters."
                  )),
            y || pbjs.requestBids.before(j, 50),
            (y = !0))
          : Object(o.logWarn)(
              "consentManagement config not defined, exiting consent manager"
            );
      }
      a.b.getConfig("consentManagement", function (n) {
        return A(n.consentManagement);
      });
    },
  },
  [365]
);
pbjsChunk(
  [283],
  {
    372: function (t, n, e) {
      t.exports = e(373);
    },
    373: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        e.d(n, "consentAPI", function () {
          return s;
        }),
        e.d(n, "consentTimeout", function () {
          return r;
        }),
        e.d(n, "staticConsentData", function () {
          return u;
        }),
        (n.requestBidsHook = f),
        (n.resetConsentData = function () {
          (l = void 0), (s = void 0), i.uspDataHandler.setConsentData(null);
        }),
        (n.setConsentConfig = P);
      var a = e(0),
        o = e(3),
        i = e(8);
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var s,
        r,
        u,
        l,
        d = !1,
        p = {
          iab: function (t, n, e) {
            var o =
                ((u = {}),
                {
                  consentDataCallback: function (a, o) {
                    o && a.uspString && (u.usPrivacy = a.uspString),
                      u.usPrivacy
                        ? t(u, e)
                        : n("Unable to get USP consent string.", e);
                  },
                }),
              i = {},
              c = (function () {
                for (var t, n, e = window; !t; ) {
                  try {
                    if ("function" == typeof e.__uspapi) {
                      (n = e.__uspapi), (t = e);
                      break;
                    }
                  } catch (t) {}
                  try {
                    if (e.frames.__uspapiLocator) {
                      t = e;
                      break;
                    }
                  } catch (t) {}
                  if (e === window.top) break;
                  e = e.parent;
                }
                return { uspapiFrame: t, uspapiFunction: n };
              })(),
              s = c.uspapiFrame,
              r = c.uspapiFunction;
            var u;
            if (!s) return n("USP CMP not found.", e);
            Object(a.isFn)(r)
              ? (Object(a.logInfo)(
                  "Detected USP CMP is directly accessible, calling it now..."
                ),
                r("getUSPData", 1, o.consentDataCallback))
              : (Object(a.logInfo)(
                  "Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."
                ),
                (function (t, n, e) {
                  function a(t) {
                    var n = t && t.data && t.data.__uspapiReturn;
                    n &&
                      n.callId &&
                      void 0 !== i[n.callId] &&
                      (i[n.callId](n.returnValue, n.success),
                      delete i[n.callId]);
                  }
                  (window.__uspapi = function (t, e, a) {
                    var o = Math.random() + "",
                      c = {
                        __uspapiCall: { command: t, version: e, callId: o },
                      };
                    (i[o] = a), n.postMessage(c, "*");
                  }),
                    window.addEventListener("message", a, !1),
                    window.__uspapi(t, 1, e);
                })("getUSPData", s, o.consentDataCallback));
          },
          static: function (t, n, e) {
            t(u, e);
          },
        };
      function f(t, n) {
        var e = {
          context: this,
          args: [n],
          nextFn: t,
          adUnits: n.adUnits || pbjs.adUnits,
          bidsBackHandler: n.bidsBackHandler,
          haveExited: !1,
          timer: null,
        };
        if (!p[s])
          return (
            Object(a.logWarn)(
              "USP framework (".concat(
                s,
                ") is not a supported framework. Aborting consentManagement module and resuming auction."
              )
            ),
            e.nextFn.apply(e.context, e.args)
          );
        p[s].call(this, g, m, e),
          e.haveExited ||
            (0 === r
              ? g(void 0, e)
              : (e.timer = setTimeout(b.bind(null, e), r)));
      }
      function g(t, n) {
        !t || !t.usPrivacy
          ? m("USPAPI returned unexpected value during lookup process.", n, t)
          : (clearTimeout(n.timer),
            (function (t) {
              t &&
                t.usPrivacy &&
                ((l = t.usPrivacy), i.uspDataHandler.setConsentData(l));
            })(t),
            y(null, n));
      }
      function b(t) {
        m("USPAPI workflow exceeded timeout threshold.", t);
      }
      function m(t, n, e) {
        clearTimeout(n.timer), y(t, n, e);
      }
      function y(t, n, e) {
        if (!1 === n.haveExited) {
          n.haveExited = !0;
          var o = n.context,
            i = n.args,
            c = n.nextFn;
          t &&
            Object(a.logWarn)(
              t +
                " Resuming auction without consent data as per consentManagement config.",
              e
            ),
            c.apply(o, i);
        }
      }
      function P(t) {
        (t = t && t.usp) && "object" === c(t)
          ? (Object(a.isStr)(t.cmpApi)
              ? (s = t.cmpApi)
              : ((s = "iab"),
                Object(a.logInfo)(
                  "consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(
                    "iab",
                    ")."
                  )
                )),
            Object(a.isNumber)(t.timeout)
              ? (r = t.timeout)
              : ((r = 50),
                Object(a.logInfo)(
                  "consentManagement.usp config did not specify timeout. Using system default setting (".concat(
                    50,
                    ")."
                  )
                )),
            Object(a.logInfo)(
              "USPAPI consentManagement module has been activated..."
            ),
            "static" === s &&
              (Object(a.isPlainObject)(t.consentData) &&
              Object(a.isPlainObject)(t.consentData.getUSPData)
                ? (t.consentData.getUSPData.uspString &&
                    (u = { usPrivacy: t.consentData.getUSPData.uspString }),
                  (r = 0))
                : Object(a.logError)(
                    "consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters."
                  )),
            d || pbjs.requestBids.before(f, 50),
            (d = !0))
          : Object(a.logWarn)(
              "consentManagement.usp config not defined, exiting usp consent manager"
            );
      }
      o.b.getConfig("consentManagement", function (t) {
        return P(t.consentManagement);
      });
    },
  },
  [372]
);
pbjsChunk(
  [280],
  {
    378: function (e, r, t) {
      e.exports = t(379);
    },
    379: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "storage", function () {
          return d;
        }),
        t.d(r, "spec", function () {
          return p;
        });
      var n = t(0),
        a = t(1),
        i = t(2),
        o = t(7);
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return c(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, r) {
            if (!e) return;
            if ("string" == typeof e) return c(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(e);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return c(e, r);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n;
      }
      var d = Object(o.b)(24),
        u = "conversant",
        p = {
          code: u,
          gvlid: 24,
          aliases: ["cnvr"],
          supportedMediaTypes: [i.b, i.d],
          isBidRequestValid: function (e) {
            if (!e || !e.params)
              return (
                Object(n.logWarn)("conversant: Missing bid parameters"), !1
              );
            if (!Object(n.isStr)(e.params.site_id))
              return (
                Object(n.logWarn)(
                  "conversant: site_id must be specified as a string"
                ),
                !1
              );
            if (l(e)) {
              var r =
                e.params.mimes ||
                Object(n.deepAccess)(e, "mediaTypes.video.mimes");
              if (r) {
                if (
                  !Object(n.isArray)(r) ||
                  !r.every(function (e) {
                    return Object(n.isStr)(e);
                  })
                )
                  return (
                    Object(n.logWarn)(
                      "conversant: mimes must be an array of strings"
                    ),
                    !1
                  );
              } else
                Object(n.logWarn)(
                  "conversant: mimes should be specified for videos"
                );
            }
            return !0;
          },
          buildRequests: function (e, r) {
            var t,
              a = r && r.refererInfo ? r.refererInfo.referer : "",
              i = "",
              o = "",
              s = null,
              c = "_pubcid",
              u = "https://web.hb.ad.cpe.dotomi.com/cvx/client/hb/ortb/25",
              p = e.map(function (e) {
                var r = (function (e) {
                  var r = Object(n.getBidIdParameter)("bidfloor", e.params);
                  if (!r && Object(n.isFn)(e.getFloor)) {
                    var t = e.getFloor({
                      currency: "USD",
                      mediaType: "*",
                      size: "*",
                    });
                    Object(n.isPlainObject)(t) &&
                      !isNaN(t.floor) &&
                      "USD" === t.currency &&
                      (r = t.floor);
                  }
                  return r;
                })(e);
                (i = Object(n.getBidIdParameter)("site_id", e.params) || i),
                  (c =
                    Object(n.getBidIdParameter)("pubcid_name", e.params) || c),
                  (o = e.auctionId);
                var t = {
                  id: e.bidId,
                  secure: 1,
                  bidfloor: r || 0,
                  displaymanager: "Prebid.js",
                  displaymanagerver: "5.16.0",
                };
                if ((b(e.params.tag_id, t, "tagid"), l(e))) {
                  var a = Object(n.deepAccess)(e, "mediaTypes.video") || {},
                    d = m(a.playerSize || e.sizes),
                    p = {};
                  d && d[0] && (b(d[0].w, p, "w"), b(d[0].h, p, "h")),
                    b(e.params.position, p, "pos"),
                    b(e.params.mimes || a.mimes, p, "mimes"),
                    b(e.params.maxduration || a.maxduration, p, "maxduration"),
                    b(e.params.protocols || a.protocols, p, "protocols"),
                    b(e.params.api || a.api, p, "api"),
                    (t.video = p);
                } else {
                  var f = {
                    format: m(
                      (Object(n.deepAccess)(e, "mediaTypes.banner") || {})
                        .sizes || e.sizes
                    ),
                  };
                  b(e.params.position, f, "pos"), (t.banner = f);
                }
                return (
                  e.userId && e.userId.pubcid
                    ? (s = e.userId.pubcid)
                    : e.crumbs && e.crumbs.pubcid && (s = e.crumbs.pubcid),
                  e.params.white_label_url && (u = e.params.white_label_url),
                  t
                );
              }),
              f = {
                id: o,
                imp: p,
                site: {
                  id: i,
                  mobile:
                    null !==
                    document.querySelector(
                      'meta[name="viewport"][content*="width=device-width"]'
                    )
                      ? 1
                      : 0,
                  page: a,
                },
                device:
                  ((t = navigator.language ? "language" : "userLanguage"),
                  {
                    h: screen.height,
                    w: screen.width,
                    dnt:
                      "1" === navigator.doNotTrack ||
                      "1" === window.doNotTrack ||
                      "1" === navigator.msDoNoTrack ||
                      "yes" === navigator.doNotTrack
                        ? 1
                        : 0,
                    language: navigator[t].split("-")[0],
                    make: navigator.vendor ? navigator.vendor : "",
                    ua: navigator.userAgent,
                  }),
                at: 1,
              },
              g = {};
            r &&
              (r.gdprConsent &&
                ((g.consent = r.gdprConsent.consentString),
                "boolean" == typeof r.gdprConsent.gdprApplies &&
                  Object(n.deepSetValue)(
                    f,
                    "regs.ext.gdpr",
                    r.gdprConsent.gdprApplies ? 1 : 0
                  )),
              r.uspConsent &&
                Object(n.deepSetValue)(f, "regs.ext.us_privacy", r.uspConsent)),
              s ||
                (s = (function (e) {
                  var r;
                  try {
                    if (!(r = d.getCookie(e))) {
                      var t = d.getDataFromLocalStorage("".concat(e, "_exp"));
                      ("" === t ||
                        (t && new Date(t).getTime() - Date.now() > 0)) &&
                        (r = (r = d.getDataFromLocalStorage(e))
                          ? decodeURIComponent(r)
                          : r);
                    }
                    Object(n.isStr)(r) &&
                      "{" === r.charAt(0) &&
                      (r = JSON.parse(r));
                  } catch (e) {
                    Object(n.logError)(e);
                  }
                  return r;
                })(c)),
              s && (g.fpc = s);
            var v = (function (e) {
              var r = e[0],
                t = [];
              if (
                Object(n.isArray)(r.userIdAsEids) &&
                r.userIdAsEids.length > 0
              ) {
                var a = {
                  "epsilon.com": 1,
                  "adserver.org": 1,
                  "liveramp.com": 1,
                  "criteo.com": 1,
                  "id5-sync.com": 1,
                  "parrable.com": 1,
                  "liveintent.com": 1,
                };
                r.userIdAsEids.forEach(function (e) {
                  a.hasOwnProperty(e.source) && t.push(e);
                });
              }
              return t;
            })(e);
            return (
              v.length > 0 && (g.eids = v),
              Object(n.isEmpty)(g) || (f.user = { ext: g }),
              { method: "POST", url: u, data: f }
            );
          },
          interpretResponse: function (e, r) {
            var t = [],
              a = {};
            return (
              (e = e.body),
              r &&
                r.data &&
                r.data.imp &&
                Object(n._each)(r.data.imp, function (e) {
                  return (a[e.id] = e);
                }),
              e &&
                Object(n.isArray)(e.seatbid) &&
                Object(n._each)(e.seatbid, function (r) {
                  Object(n._each)(r.bid, function (r) {
                    var n = parseFloat(r.price);
                    if (n > 0 && r.impid) {
                      var i = r.adm || "",
                        o = r.nurl || "",
                        s = a[r.impid],
                        c = {
                          requestId: r.impid,
                          currency: e.cur || "USD",
                          cpm: n,
                          creativeId: r.crid || "",
                          ttl: 300,
                          netRevenue: !0,
                          meta: {},
                        };
                      r.adomain &&
                        r.adomain.length > 0 &&
                        (c.meta.advertiserDomains = r.adomain),
                        s.video
                          ? ("<" === i.charAt(0)
                              ? (c.vastXml = i)
                              : (c.vastUrl = i),
                            (c.mediaType = "video"),
                            (c.width = s.video.w),
                            (c.height = s.video.h))
                          : ((c.ad = i + '<img src="' + o + '" />'),
                            (c.width = r.w),
                            (c.height = r.h)),
                        t.push(c);
                    }
                  });
                }),
              t
            );
          },
          transformBidParams: function (e, r) {
            return Object(n.convertTypes)(
              { site_id: "string", secure: "number", mobile: "number" },
              e
            );
          },
          getUserSyncs: function (e, r, t, a) {
            var i = {},
              o = [];
            if (
              (t &&
                ((i.gdpr = t.gdprApplies ? 1 : 0),
                (i.gdpr_consent = encodeURIComponent(t.consentString || ""))),
              a && (i.us_privacy = encodeURIComponent(a)),
              r && r.ext)
            ) {
              var c = [
                { urls: r.ext.fsyncs, type: "iframe" },
                { urls: r.ext.psyncs, type: "image" },
              ]
                .filter(function (r) {
                  return (
                    r.urls &&
                    (("iframe" === r.type && e.iframeEnabled) ||
                      ("image" === r.type && e.pixelEnabled))
                  );
                })
                .map(function (e) {
                  return e.urls
                    .map(function (r) {
                      var t = Object(n.parseUrl)(r);
                      return (
                        Object(n.mergeDeep)(t.search, i),
                        0 === Object.keys(t.search).length && delete t.search,
                        { type: e.type, url: Object(n.buildUrl)(t) }
                      );
                    })
                    .reduce(function (e, r) {
                      return e.concat(r);
                    }, []);
                })
                .reduce(function (e, r) {
                  return e.concat(r);
                }, []);
              o.push.apply(o, s(c));
            }
            return o;
          },
        };
      function m(e) {
        var r;
        return (
          Array.isArray(e) &&
            (r =
              2 === e.length &&
              "number" == typeof e[0] &&
              "number" == typeof e[1]
                ? [{ w: e[0], h: e[1] }]
                : Object(n._map)(e, function (e) {
                    return { w: e[0], h: e[1] };
                  })),
          r
        );
      }
      function l(e) {
        return (
          "video" === e.mediaType ||
          !!Object(n.deepAccess)(e, "mediaTypes.video")
        );
      }
      function b(e, r, t) {
        e && (r[t] = e);
      }
      Object(a.registerBidder)(p);
    },
  },
  [378]
);
pbjsChunk(
  [2],
  {
    384: function (t, e, r) {
      t.exports = r(385);
    },
    385: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", { value: !0 }),
        __webpack_require__.d(
          __webpack_exports__,
          "ADAPTER_VERSION",
          function () {
            return ADAPTER_VERSION;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "PROFILE_ID_PUBLISHERTAG",
          function () {
            return PROFILE_ID_PUBLISHERTAG;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "FAST_BID_VERSION_CURRENT",
          function () {
            return FAST_BID_VERSION_CURRENT;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "spec", function () {
          return spec;
        }),
        (__webpack_exports__.canFastBid = canFastBid),
        (__webpack_exports__.getFastBidUrl = getFastBidUrl),
        (__webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid);
      var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1__src_adloader_js__ =
          __webpack_require__(35),
        __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__ =
          __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__ =
          __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ =
          __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default =
          __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__
          ),
        __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ =
          __webpack_require__(75),
        __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default =
          __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__
          ),
        __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ =
          __webpack_require__(7);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      var GVLID = 91,
        ADAPTER_VERSION = 34,
        BIDDER_CODE = "criteo",
        CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
        PROFILE_ID_INLINE = 207,
        PROFILE_ID_PUBLISHERTAG = 185,
        storage = Object(
          __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b
        )(GVLID),
        LOG_PREFIX = "Criteo: ",
        FAST_BID_VERSION_PLACEHOLDER = "%FAST_BID_VERSION%",
        FAST_BID_VERSION_CURRENT = 113,
        FAST_BID_VERSION_LATEST = "latest",
        FAST_BID_VERSION_NONE = "none",
        PUBLISHER_TAG_URL_TEMPLATE =
          "https://static.criteo.net/js/ld/publishertag.prebid" +
          FAST_BID_VERSION_PLACEHOLDER +
          ".js",
        FAST_BID_PUBKEY_E = 65537,
        FAST_BID_PUBKEY_N =
          "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
        spec = {
          code: BIDDER_CODE,
          gvlid: GVLID,
          supportedMediaTypes: [
            __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.b,
            __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.d,
            __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c,
          ],
          isBidRequestValid: function (t) {
            return (
              !(!t || !t.params || (!t.params.zoneId && !t.params.networkId)) &&
              !(hasVideoMediaType(t) && !hasValidVideoMediaType(t))
            );
          },
          buildRequests: function (t, e) {
            var r,
              i,
              s =
                __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getLegacyFpd(
                  __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig(
                    "ortb2"
                  )
                ) || {};
            _extends(e, {
              publisherExt: s.context,
              userExt: s.user,
              ceh: __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig(
                "criteo.ceh"
              ),
            });
            var a = __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig(
                "criteo.fastBidVersion"
              ),
              _ = canFastBid(a);
            if (!publisherTagAvailable() && _) {
              (window.Criteo = window.Criteo || {}),
                (window.Criteo.usePrebidEvents = !1),
                tryGetCriteoFastBid();
              var o = getFastBidUrl(a);
              setTimeout(function () {
                Object(__WEBPACK_IMPORTED_MODULE_1__src_adloader_js__.a)(
                  o,
                  BIDDER_CODE
                );
              }, e.timeout);
            }
            if (publisherTagAvailable()) {
              var n = new Criteo.PubTag.Adapters.Prebid(
                PROFILE_ID_PUBLISHERTAG,
                ADAPTER_VERSION,
                t,
                e,
                "5.16.0"
              );
              (r = n.buildCdbUrl()), (i = n.buildCdbRequest());
            } else {
              var c = buildContext(t, e);
              (r = buildCdbUrl(c)), (i = buildCdbRequest(c, t, e));
            }
            if (i) return { method: "POST", url: r, data: i, bidRequests: t };
          },
          interpretResponse: function (t, e) {
            var r = t.body || t;
            if (publisherTagAvailable()) {
              var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(e);
              if (i) return i.interpretResponse(r, e);
            }
            var s = [];
            return (
              r &&
                r.slots &&
                Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.isArray)(
                  r.slots
                ) &&
                r.slots.forEach(function (t) {
                  var r =
                      __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(
                        e.bidRequests,
                        function (e) {
                          return (
                            e.adUnitCode === t.impid &&
                            (!e.params.zoneId ||
                              parseInt(e.params.zoneId) === t.zoneid)
                          );
                        }
                      ),
                    i = r.bidId,
                    a = {
                      requestId: i,
                      adId:
                        t.bidId ||
                        Object(
                          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__.getUniqueIdentifierStr
                        )(),
                      cpm: t.cpm,
                      currency: t.currency,
                      netRevenue: !0,
                      ttl: t.ttl || 60,
                      creativeId: t.creativecode,
                      width: t.width,
                      height: t.height,
                      dealId: t.dealCode,
                    };
                  t.adomain &&
                    (a.meta = _extends({}, a.meta, {
                      advertiserDomains: t.adomain,
                    })),
                    t.native
                      ? r.params.nativeCallback
                        ? (a.ad = createNativeAd(
                            i,
                            t.native,
                            r.params.nativeCallback
                          ))
                        : ((a.native = createPrebidNativeAd(t.native)),
                          (a.mediaType =
                            __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c))
                      : t.video
                      ? ((a.vastUrl = t.displayurl),
                        (a.mediaType =
                          __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.d))
                      : (a.ad = t.creative),
                    s.push(a);
                }),
              s
            );
          },
          onTimeout: function (t) {
            if (publisherTagAvailable() && Array.isArray(t)) {
              var e = [];
              t.forEach(function (t) {
                -1 === e.indexOf(t.auctionId) &&
                  (e.push(t.auctionId),
                  Criteo.PubTag.Adapters.Prebid.GetAdapter(
                    t.auctionId
                  ).handleBidTimeout());
              });
            }
          },
          onBidWon: function (t) {
            publisherTagAvailable() &&
              t &&
              Criteo.PubTag.Adapters.Prebid.GetAdapter(
                t.auctionId
              ).handleBidWon(t);
          },
          onSetTargeting: function (t) {
            publisherTagAvailable() &&
              Criteo.PubTag.Adapters.Prebid.GetAdapter(
                t.auctionId
              ).handleSetTargeting(t);
          },
        };
      function publisherTagAvailable() {
        return (
          "undefined" != typeof Criteo &&
          Criteo.PubTag &&
          Criteo.PubTag.Adapters &&
          Criteo.PubTag.Adapters.Prebid
        );
      }
      function buildContext(t, e) {
        var r = "";
        e && e.refererInfo && (r = e.refererInfo.referer);
        var i = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.parseUrl)(
            r
          ).search,
          s = {
            url: r,
            debug: "1" === i.pbt_debug,
            noLog: "1" === i.pbt_nolog,
            amp: !1,
          };
        return (
          t.forEach(function (t) {
            "amp" === t.params.integrationMode && (s.amp = !0);
          }),
          s
        );
      }
      function buildCdbUrl(t) {
        var e = CDB_ENDPOINT;
        return (
          (e += "?profileId=" + PROFILE_ID_INLINE),
          (e += "&av=" + String(ADAPTER_VERSION)),
          (e += "&wv=" + encodeURIComponent("5.16.0")),
          (e += "&cb=" + String(Math.floor(99999999999 * Math.random()))),
          t.amp && (e += "&im=1"),
          t.debug && (e += "&debug=1"),
          t.noLog && (e += "&nolog=1"),
          e
        );
      }
      function checkNativeSendId(t) {
        return !(
          t.nativeParams &&
          ((t.nativeParams.image &&
            (!0 !== t.nativeParams.image.sendId ||
              !0 === t.nativeParams.image.sendTargetingKeys)) ||
            (t.nativeParams.icon &&
              (!0 !== t.nativeParams.icon.sendId ||
                !0 === t.nativeParams.icon.sendTargetingKeys)) ||
            (t.nativeParams.clickUrl &&
              (!0 !== t.nativeParams.clickUrl.sendId ||
                !0 === t.nativeParams.clickUrl.sendTargetingKeys)) ||
            (t.nativeParams.displayUrl &&
              (!0 !== t.nativeParams.displayUrl.sendId ||
                !0 === t.nativeParams.displayUrl.sendTargetingKeys)) ||
            (t.nativeParams.privacyLink &&
              (!0 !== t.nativeParams.privacyLink.sendId ||
                !0 === t.nativeParams.privacyLink.sendTargetingKeys)) ||
            (t.nativeParams.privacyIcon &&
              (!0 !== t.nativeParams.privacyIcon.sendId ||
                !0 === t.nativeParams.privacyIcon.sendTargetingKeys)))
        );
      }
      function buildCdbRequest(t, e, r) {
        var i,
          s = {
            publisher: { url: t.url, ext: r.publisherExt },
            slots: e.map(function (t) {
              i = t.params.networkId || i;
              var e = {
                impid: t.adUnitCode,
                transactionid: t.transactionId,
                auctionId: t.auctionId,
              };
              if (
                (t.params.zoneId && (e.zoneid = t.params.zoneId),
                Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(
                  t,
                  "ortb2Imp.ext"
                ) && (e.ext = t.ortb2Imp.ext),
                t.params.ext && (e.ext = _extends({}, e.ext, t.params.ext)),
                t.params.publisherSubId &&
                  (e.publishersubid = t.params.publisherSubId),
                t.params.nativeCallback ||
                Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(
                  t,
                  "mediaTypes.".concat(
                    __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c
                  )
                )
                  ? ((e.native = !0),
                    checkNativeSendId(t) ||
                      Object(
                        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn
                      )(
                        LOG_PREFIX +
                          "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"
                      ),
                    (e.sizes = parseSizes(
                      retrieveBannerSizes(t),
                      parseNativeSize
                    )))
                  : (e.sizes = parseSizes(retrieveBannerSizes(t), parseSize)),
                hasVideoMediaType(t))
              ) {
                var r = {
                    playersizes: parseSizes(
                      Object(
                        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess
                      )(t, "mediaTypes.video.playerSize"),
                      parseSize
                    ),
                    mimes: t.mediaTypes.video.mimes,
                    protocols: t.mediaTypes.video.protocols,
                    maxduration: t.mediaTypes.video.maxduration,
                    api: t.mediaTypes.video.api,
                    skip: t.mediaTypes.video.skip,
                    placement: t.mediaTypes.video.placement,
                    minduration: t.mediaTypes.video.minduration,
                    playbackmethod: t.mediaTypes.video.playbackmethod,
                    startdelay: t.mediaTypes.video.startdelay,
                  },
                  s = t.params.video;
                void 0 !== s &&
                  ((r.skip = r.skip || s.skip || 0),
                  (r.placement = r.placement || s.placement),
                  (r.minduration = r.minduration || s.minduration),
                  (r.playbackmethod = r.playbackmethod || s.playbackmethod),
                  (r.startdelay = r.startdelay || s.startdelay || 0)),
                  (e.video = r);
              }
              return e;
            }),
          };
        return (
          i && (s.publisher.networkid = i),
          (s.user = { ext: r.userExt }),
          r && r.ceh && (s.user.ceh = r.ceh),
          r &&
            r.gdprConsent &&
            ((s.gdprConsent = {}),
            void 0 !== r.gdprConsent.gdprApplies &&
              (s.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies),
            (s.gdprConsent.version = r.gdprConsent.apiVersion),
            void 0 !== r.gdprConsent.consentString &&
              (s.gdprConsent.consentData = r.gdprConsent.consentString)),
          r && r.uspConsent && (s.user.uspIab = r.uspConsent),
          s
        );
      }
      function retrieveBannerSizes(t) {
        return (
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(
            t,
            "mediaTypes.banner.sizes"
          ) || t.sizes
        );
      }
      function parseSizes(t, e) {
        return Array.isArray(t[0])
          ? t.map(function (t) {
              return e(t);
            })
          : [e(t)];
      }
      function parseSize(t) {
        return t[0] + "x" + t[1];
      }
      function parseNativeSize(t) {
        return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1];
      }
      function hasVideoMediaType(t) {
        return (
          void 0 !==
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(
            t,
            "mediaTypes.video"
          )
        );
      }
      function hasValidVideoMediaType(t) {
        var e = !0;
        if (
          ([
            "mimes",
            "playerSize",
            "maxduration",
            "protocols",
            "api",
            "skip",
            "placement",
            "playbackmethod",
          ].forEach(function (r) {
            void 0 ===
              Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(
                t,
                "mediaTypes.video." + r
              ) &&
              void 0 ===
                Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(
                  t,
                  "params.video." + r
                ) &&
              ((e = !1),
              Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logError)(
                "Criteo Bid Adapter: mediaTypes.video." + r + " is required"
              ));
          }),
          e)
        ) {
          var r = t.mediaTypes.video.placement || t.params.video.placement;
          if ("instream" == t.mediaTypes.video.context && 1 === r) return !0;
          if ("outstream" == t.mediaTypes.video.context && 1 !== r) return !0;
        }
        return !1;
      }
      function createPrebidNativeAd(t) {
        return {
          sendTargetingKeys: !1,
          title: t.products[0].title,
          body: t.products[0].description,
          sponsoredBy: t.advertiser.description,
          icon: t.advertiser.logo,
          image: t.products[0].image,
          clickUrl: t.products[0].click_url,
          privacyLink: t.privacy.optout_click_url,
          privacyIcon: t.privacy.optout_image_url,
          cta: t.products[0].call_to_action,
          price: t.products[0].price,
          impressionTrackers: t.impression_pixels.map(function (t) {
            return t.url;
          }),
        };
      }
      function createNativeAd(t, e, r) {
        var i = "criteo_prebid_native_slots";
        return (
          (window[i] = window[i] || {}),
          (window[i][t] = { callback: r, payload: e }),
          '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'
            .concat(
              i,
              ';\n  if(!slots){continue;}\n  var responseSlot = slots["'
            )
            .concat(
              t,
              '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n</script>'
            )
        );
      }
      function canFastBid(t) {
        return t !== FAST_BID_VERSION_NONE;
      }
      function getFastBidUrl(t) {
        var e;
        if (t === FAST_BID_VERSION_LATEST) e = "";
        else if (t) {
          String(t).split(".")[0] < 102 &&
            Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)(
              "Specifying a Fastbid version which is not supporting version selection."
            ),
            (e = "." + t);
        } else e = "." + FAST_BID_VERSION_CURRENT;
        return PUBLISHER_TAG_URL_TEMPLATE.replace(
          FAST_BID_VERSION_PLACEHOLDER,
          e
        );
      }
      function tryGetCriteoFastBid() {
        try {
          var fastBidStorageKey = "criteo_fast_bid",
            hashPrefix = "// Hash: ",
            fastBidFromStorage =
              storage.getDataFromLocalStorage(fastBidStorageKey);
          if (null !== fastBidFromStorage) {
            var firstLineEndPosition = fastBidFromStorage.indexOf("\n"),
              firstLine = fastBidFromStorage
                .substr(0, firstLineEndPosition)
                .trim();
            if (firstLine.substr(0, hashPrefix.length) !== hashPrefix)
              Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)(
                "No hash found in FastBid"
              ),
                storage.removeDataFromLocalStorage(fastBidStorageKey);
            else {
              var publisherTagHash = firstLine.substr(hashPrefix.length),
                publisherTag = fastBidFromStorage.substr(
                  firstLineEndPosition + 1
                );
              Object(
                __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify
              )(
                publisherTag,
                publisherTagHash,
                FAST_BID_PUBKEY_N,
                FAST_BID_PUBKEY_E
              )
                ? (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logInfo)(
                    "Using Criteo FastBid"
                  ),
                  eval(publisherTag))
                : (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)(
                    "Invalid Criteo FastBid found"
                  ),
                  storage.removeDataFromLocalStorage(fastBidStorageKey));
            }
          }
        } catch (t) {}
      }
      Object(
        __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__.registerBidder
      )(spec);
    },
    75: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = r(76),
        s = r(77);
      e.verify = function (t, e, r, a) {
        var _ = new i.BigInteger(i.b64toHex(e)),
          o = new i.BigInteger(i.b64toHex(r)),
          n = _.modPowInt(a, o);
        return i.removeExtraSymbols(n.toHexString()) === s.Sha256.hash(t);
      };
    },
    76: function (t, e, r) {
      "use strict";
      var i;
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = (function () {
        function t(t) {
          null !== t && this.fromHexString(t);
        }
        return (
          (t.prototype.toHexString = function () {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t,
              e = !1,
              r = "",
              i = this.t,
              s = this.DB - ((i * this.DB) % 4);
            if (i-- > 0)
              for (
                s < this.DB && (t = this[i] >> s) > 0 && ((e = !0), (r = d(t)));
                i >= 0;

              )
                s < 4
                  ? ((t = (this[i] & ((1 << s) - 1)) << (4 - s)),
                    (t |= this[--i] >> (s += this.DB - 4)))
                  : ((t = (this[i] >> (s -= 4)) & 15),
                    s <= 0 && ((s += this.DB), --i)),
                  t > 0 && (e = !0),
                  e && (r += d(t));
            return e ? r : "0";
          }),
          (t.prototype.fromHexString = function (e) {
            if (null !== e) {
              (this.t = 0), (this.s = 0);
              for (var r = e.length, i = !1, s = 0; --r >= 0; ) {
                var a = p(e, r);
                a < 0
                  ? "-" == e.charAt(r) && (i = !0)
                  : ((i = !1),
                    0 == s
                      ? (this[this.t++] = a)
                      : s + 4 > this.DB
                      ? ((this[this.t - 1] |=
                          (a & ((1 << (this.DB - s)) - 1)) << s),
                        (this[this.t++] = a >> (this.DB - s)))
                      : (this[this.t - 1] |= a << s),
                    (s += 4) >= this.DB && (s -= this.DB));
              }
              0, this.clamp(), i && t.ZERO.subTo(this, this);
            }
          }),
          (t.prototype.negate = function () {
            var e = a();
            return t.ZERO.subTo(this, e), e;
          }),
          (t.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this;
          }),
          (t.prototype.mod = function (e) {
            var r = a();
            return (
              this.abs().divRemTo(e, null, r),
              this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r),
              r
            );
          }),
          (t.prototype.copyTo = function (t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            (t.t = this.t), (t.s = this.s);
          }),
          (t.prototype.lShiftTo = function (t, e) {
            for (
              var r = t % this.DB,
                i = this.DB - r,
                s = (1 << i) - 1,
                a = Math.floor(t / this.DB),
                _ = (this.s << r) & this.DM,
                o = this.t - 1;
              o >= 0;
              --o
            )
              (e[o + a + 1] = (this[o] >> i) | _), (_ = (this[o] & s) << r);
            for (o = a - 1; o >= 0; --o) e[o] = 0;
            (e[a] = _), (e.t = this.t + a + 1), (e.s = this.s), e.clamp();
          }),
          (t.prototype.invDigit = function () {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return (e =
              ((e =
                ((e =
                  ((e = (e * (2 - (15 & t) * e)) & 15) * (2 - (255 & t) * e)) &
                  255) *
                  (2 - (((65535 & t) * e) & 65535))) &
                65535) *
                (2 - ((t * e) % this.DV))) %
              this.DV) > 0
              ? this.DV - e
              : -e;
          }),
          (t.prototype.dlShiftTo = function (t, e) {
            var r;
            for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
            for (r = t - 1; r >= 0; --r) e[r] = 0;
            (e.t = this.t + t), (e.s = this.s);
          }),
          (t.prototype.squareTo = function (t) {
            for (var e = this.abs(), r = (t.t = 2 * e.t); --r >= 0; ) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
              var i = e.am(r, e[r], t, 2 * r, 0, 1);
              (t[r + e.t] += e.am(
                r + 1,
                2 * e[r],
                t,
                2 * r + 1,
                i,
                e.t - r - 1
              )) >= e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
            }
            t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
              (t.s = 0),
              t.clamp();
          }),
          (t.prototype.multiplyTo = function (e, r) {
            var i = this.abs(),
              s = e.abs(),
              a = i.t;
            for (r.t = a + s.t; --a >= 0; ) r[a] = 0;
            for (a = 0; a < s.t; ++a) r[a + i.t] = i.am(0, s[a], r, a, 0, i.t);
            (r.s = 0), r.clamp(), this.s != e.s && t.ZERO.subTo(r, r);
          }),
          (t.prototype.divRemTo = function (e, r, i) {
            var s = e.abs();
            if (!(s.t <= 0)) {
              var o = this.abs();
              if (o.t < s.t)
                return (
                  null != r && r.fromHexString("0"),
                  void (null != i && this.copyTo(i))
                );
              null == i && (i = a());
              var n = a(),
                c = this.s,
                p = e.s,
                d = this.DB - _(s[s.t - 1]);
              d > 0
                ? (s.lShiftTo(d, n), o.lShiftTo(d, i))
                : (s.copyTo(n), o.copyTo(i));
              var u = n.t,
                l = n[u - 1];
              if (0 != l) {
                var h = l * (1 << this.F1) + (u > 1 ? n[u - 2] >> this.F2 : 0),
                  f = this.FV / h,
                  E = (1 << this.F1) / h,
                  v = 1 << this.F2,
                  m = i.t,
                  T = m - u,
                  b = null == r ? a() : r;
                for (
                  n.dlShiftTo(T, b),
                    i.compareTo(b) >= 0 && ((i[i.t++] = 1), i.subTo(b, i)),
                    t.ONE.dlShiftTo(u, b),
                    b.subTo(n, n);
                  n.t < u;

                )
                  n[n.t++] = 0;
                for (; --T >= 0; ) {
                  var D =
                    i[--m] == l
                      ? this.DM
                      : Math.floor(i[m] * f + (i[m - 1] + v) * E);
                  if ((i[m] += n.am(0, D, i, T, 0, u)) < D)
                    for (n.dlShiftTo(T, b), i.subTo(b, i); i[m] < --D; )
                      i.subTo(b, i);
                }
                null != r && (i.drShiftTo(u, r), c != p && t.ZERO.subTo(r, r)),
                  (i.t = u),
                  i.clamp(),
                  d > 0 && i.rShiftTo(d, i),
                  c < 0 && t.ZERO.subTo(i, i);
              }
            }
          }),
          (t.prototype.rShiftTo = function (t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0;
            else {
              var i = t % this.DB,
                s = this.DB - i,
                a = (1 << i) - 1;
              e[0] = this[r] >> i;
              for (var _ = r + 1; _ < this.t; ++_)
                (e[_ - r - 1] |= (this[_] & a) << s), (e[_ - r] = this[_] >> i);
              i > 0 && (e[this.t - r - 1] |= (this.s & a) << s),
                (e.t = this.t - r),
                e.clamp();
            }
          }),
          (t.prototype.drShiftTo = function (t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
          }),
          (t.prototype.subTo = function (t, e) {
            for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s; )
              (i += this[r] - t[r]), (e[r++] = i & this.DM), (i >>= this.DB);
            if (t.t < this.t) {
              for (i -= t.s; r < this.t; )
                (i += this[r]), (e[r++] = i & this.DM), (i >>= this.DB);
              i += this.s;
            } else {
              for (i += this.s; r < t.t; )
                (i -= t[r]), (e[r++] = i & this.DM), (i >>= this.DB);
              i -= t.s;
            }
            (e.s = i < 0 ? -1 : 0),
              i < -1 ? (e[r++] = this.DV + i) : i > 0 && (e[r++] = i),
              (e.t = r),
              e.clamp();
          }),
          (t.prototype.clamp = function () {
            for (
              var t = this.s & this.DM;
              this.t > 0 && this[this.t - 1] == t;

            )
              --this.t;
          }),
          (t.prototype.modPowInt = function (t, e) {
            var r;
            return (
              (r = t < 256 || e.isEven() ? new u(e) : new l(e)), this.exp(t, r)
            );
          }),
          (t.prototype.exp = function (e, r) {
            if (e > 4294967295 || e < 1) return t.ONE;
            var i = a(),
              s = a(),
              o = r.convert(this),
              n = _(e) - 1;
            for (o.copyTo(i); --n >= 0; )
              if ((r.sqrTo(i, s), (e & (1 << n)) > 0)) r.mulTo(s, o, i);
              else {
                var c = i;
                (i = s), (s = c);
              }
            return r.revert(i);
          }),
          (t.prototype.isEven = function () {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s);
          }),
          (t.prototype.compareTo = function (t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (; --r >= 0; ) if (0 != (e = this[r] - t[r])) return e;
            return 0;
          }),
          (t.prototype.am1 = function (t, e, r, i, s, a) {
            for (; --a >= 0; ) {
              var _ = e * this[t++] + r[i] + s;
              (s = Math.floor(_ / 67108864)), (r[i++] = 67108863 & _);
            }
            return s;
          }),
          (t.prototype.am2 = function (t, e, r, i, s, a) {
            for (var _ = 32767 & e, o = e >> 15; --a >= 0; ) {
              var n = 32767 & this[t],
                c = this[t++] >> 15,
                p = o * n + c * _;
              (s =
                ((n = _ * n + ((32767 & p) << 15) + r[i] + (1073741823 & s)) >>>
                  30) +
                (p >>> 15) +
                o * c +
                (s >>> 30)),
                (r[i++] = 1073741823 & n);
            }
            return s;
          }),
          (t.prototype.am3 = function (t, e, r, i, s, a) {
            for (var _ = 16383 & e, o = e >> 14; --a >= 0; ) {
              var n = 16383 & this[t],
                c = this[t++] >> 14,
                p = o * n + c * _;
              (s =
                ((n = _ * n + ((16383 & p) << 14) + r[i] + s) >> 28) +
                (p >> 14) +
                o * c),
                (r[i++] = 268435455 & n);
            }
            return s;
          }),
          t
        );
      })();
      function a() {
        return new s(null);
      }
      function _(t) {
        var e,
          r = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (r += 16)),
          0 != (e = t >> 8) && ((t = e), (r += 8)),
          0 != (e = t >> 4) && ((t = e), (r += 4)),
          0 != (e = t >> 2) && ((t = e), (r += 2)),
          0 != (e = t >> 1) && ((t = e), (r += 1)),
          r
        );
      }
      (e.BigInteger = s), (e.nbi = a), (e.nbits = _);
      var o,
        n,
        c = [];
      for (o = "0".charCodeAt(0), n = 0; n <= 9; ++n) c[o++] = n;
      for (o = "a".charCodeAt(0), n = 10; n < 36; ++n) c[o++] = n;
      for (o = "A".charCodeAt(0), n = 10; n < 36; ++n) c[o++] = n;
      function p(t, e) {
        var r = c[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      e.intAt = p;
      function d(t) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
      }
      e.int2char = d;
      (e.b64toHex = function (t) {
        var e,
          r = "",
          i = 0,
          s = 0;
        for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
          var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
              t.charAt(e)
            );
          a < 0 ||
            (0 == i
              ? ((r += d(a >> 2)), (s = 3 & a), (i = 1))
              : 1 == i
              ? ((r += d((s << 2) | (a >> 4))), (s = 15 & a), (i = 2))
              : 2 == i
              ? ((r += d(s)), (r += d(a >> 2)), (s = 3 & a), (i = 3))
              : ((r += d((s << 2) | (a >> 4))), (r += d(15 & a)), (i = 0)));
        }
        return 1 == i && (r += d(s << 2)), r;
      }),
        (e.removeExtraSymbols = function (t) {
          return t
            .replace(/^1f+00/, "")
            .replace("3031300d060960864801650304020105000420", "");
        });
      var u = (function () {
          function t(t) {
            this.m = t;
          }
          return (
            (t.prototype.convert = function (t) {
              return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
            }),
            (t.prototype.revert = function (t) {
              return t;
            }),
            (t.prototype.reduce = function (t) {
              t.divRemTo(this.m, null, t);
            }),
            (t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r), this.reduce(r);
            }),
            (t.prototype.sqrTo = function (t, e) {
              t.squareTo(e), this.reduce(e);
            }),
            t
          );
        })(),
        l = (function () {
          function t(t) {
            (this.m = t),
              (this.mp = t.invDigit()),
              (this.mpl = 32767 & this.mp),
              (this.mph = this.mp >> 15),
              (this.um = (1 << (t.DB - 15)) - 1),
              (this.mt2 = 2 * t.t);
          }
          return (
            (t.prototype.convert = function (t) {
              var e = a();
              return (
                t.abs().dlShiftTo(this.m.t, e),
                e.divRemTo(this.m, null, e),
                t.s < 0 && e.compareTo(s.ZERO) > 0 && this.m.subTo(e, e),
                e
              );
            }),
            (t.prototype.revert = function (t) {
              var e = a();
              return t.copyTo(e), this.reduce(e), e;
            }),
            (t.prototype.reduce = function (t) {
              for (; t.t <= this.mt2; ) t[t.t++] = 0;
              for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e],
                  i =
                    (r * this.mpl +
                      (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) <<
                        15)) &
                    t.DM;
                for (
                  t[(r = e + this.m.t)] += this.m.am(0, i, t, e, 0, this.m.t);
                  t[r] >= t.DV;

                )
                  (t[r] -= t.DV), t[++r]++;
              }
              t.clamp(),
                t.drShiftTo(this.m.t, t),
                t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
            }),
            (t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r), this.reduce(r);
            }),
            (t.prototype.sqrTo = function (t, e) {
              t.squareTo(e), this.reduce(e);
            }),
            t
          );
        })();
      function h(t) {
        var e = a();
        return e.fromHexString(t.toString()), e;
      }
      (e.nbv = h),
        (s.ZERO = h(0)),
        (s.ONE = h(1)),
        "Microsoft Internet Explorer" == navigator.appName
          ? ((s.prototype.am = s.prototype.am2), (i = 30))
          : "Netscape" != navigator.appName
          ? ((s.prototype.am = s.prototype.am1), (i = 26))
          : ((s.prototype.am = s.prototype.am3), (i = 28)),
        (s.prototype.DB = i),
        (s.prototype.DM = (1 << i) - 1),
        (s.prototype.DV = 1 << i);
      (s.prototype.FV = Math.pow(2, 52)),
        (s.prototype.F1 = 52 - i),
        (s.prototype.F2 = 2 * i - 52);
    },
    77: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
        function t() {}
        return (
          (t.hash = function (e) {
            e = t.utf8Encode(e || "");
            for (
              var r = [
                  1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                  1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                  607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                  3248222580, 3835390401, 4022224774, 264347078, 604807628,
                  770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                  2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                  113926993, 338241895, 666307205, 773529912, 1294757372,
                  1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                  2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                  3600352804, 4094571909, 275423344, 430227734, 506948616,
                  659060556, 883997877, 958139571, 1322822218, 1537002063,
                  1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                  2428436474, 2756734187, 3204031479, 3329325298,
                ],
                i = [
                  1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
                  2600822924, 528734635, 1541459225,
                ],
                s = (e += String.fromCharCode(128)).length / 4 + 2,
                a = Math.ceil(s / 16),
                _ = new Array(a),
                o = 0;
              o < a;
              o++
            ) {
              _[o] = new Array(16);
              for (var n = 0; n < 16; n++)
                _[o][n] =
                  (e.charCodeAt(64 * o + 4 * n) << 24) |
                  (e.charCodeAt(64 * o + 4 * n + 1) << 16) |
                  (e.charCodeAt(64 * o + 4 * n + 2) << 8) |
                  (e.charCodeAt(64 * o + 4 * n + 3) << 0);
            }
            var c = (8 * (e.length - 1)) / Math.pow(2, 32),
              p = (8 * (e.length - 1)) >>> 0;
            (_[a - 1][14] = Math.floor(c)), (_[a - 1][15] = p);
            for (o = 0; o < a; o++) {
              for (var d = new Array(64), u = 0; u < 16; u++) d[u] = _[o][u];
              for (u = 16; u < 64; u++)
                d[u] =
                  (t.q1(d[u - 2]) + d[u - 7] + t.q0(d[u - 15]) + d[u - 16]) >>>
                  0;
              var l = i[0],
                h = i[1],
                f = i[2],
                E = i[3],
                v = i[4],
                m = i[5],
                T = i[6],
                b = i[7];
              for (u = 0; u < 64; u++) {
                var D = b + t.z1(v) + t.Ch(v, m, T) + r[u] + d[u],
                  y = t.z0(l) + t.Maj(l, h, f);
                (b = T),
                  (T = m),
                  (m = v),
                  (v = (E + D) >>> 0),
                  (E = f),
                  (f = h),
                  (h = l),
                  (l = (D + y) >>> 0);
              }
              (i[0] = (i[0] + l) >>> 0),
                (i[1] = (i[1] + h) >>> 0),
                (i[2] = (i[2] + f) >>> 0),
                (i[3] = (i[3] + E) >>> 0),
                (i[4] = (i[4] + v) >>> 0),
                (i[5] = (i[5] + m) >>> 0),
                (i[6] = (i[6] + T) >>> 0),
                (i[7] = (i[7] + b) >>> 0);
            }
            var O = new Array(i.length);
            for (b = 0; b < i.length; b++)
              O[b] = ("00000000" + i[b].toString(16)).slice(-8);
            return O.join("");
          }),
          (t.utf8Encode = function (t) {
            try {
              return new TextEncoder().encode(t).reduce(function (t, e) {
                return t + String.fromCharCode(e);
              }, "");
            } catch (e) {
              return unescape(encodeURIComponent(t));
            }
          }),
          (t.ROTR = function (t, e) {
            return (e >>> t) | (e << (32 - t));
          }),
          (t.z0 = function (e) {
            return t.ROTR(2, e) ^ t.ROTR(13, e) ^ t.ROTR(22, e);
          }),
          (t.z1 = function (e) {
            return t.ROTR(6, e) ^ t.ROTR(11, e) ^ t.ROTR(25, e);
          }),
          (t.q0 = function (e) {
            return t.ROTR(7, e) ^ t.ROTR(18, e) ^ (e >>> 3);
          }),
          (t.q1 = function (e) {
            return t.ROTR(17, e) ^ t.ROTR(19, e) ^ (e >>> 10);
          }),
          (t.Ch = function (t, e, r) {
            return (t & e) ^ (~t & r);
          }),
          (t.Maj = function (t, e, r) {
            return (t & e) ^ (t & r) ^ (e & r);
          }),
          t
        );
      })();
      e.Sha256 = i;
    },
  },
  [384]
);
pbjsChunk(
  [265],
  {
    412: function (e, r, t) {
      e.exports = t(413);
    },
    413: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "emxAdapter", function () {
          return f;
        }),
        t.d(r, "spec", function () {
          return v;
        });
      var i = t(0),
        n = t(1),
        a = t(2),
        d = t(13),
        o = t(12),
        s = t.n(o),
        u = t(11),
        c = t.n(u);
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var l = "emx_digital",
        g = "https://js.brealtime.com/outstream/1.30.0/bundle.js",
        m = "USD",
        b = [
          {
            key: "idl_env",
            source: "liveramp.com",
            rtiPartner: "idl",
            queryParam: "idl",
          },
          {
            key: "uid2.id",
            source: "uidapi.com",
            rtiPartner: "UID2",
            queryParam: "uid2",
          },
        ],
        f = {
          validateSizes: function (e) {
            return Object(i.isArray)(e) && void 0 !== e[0]
              ? e.every(function (e) {
                  return Object(i.isArray)(e) && 2 === e.length;
                })
              : (Object(i.logWarn)("emx_digital: Sizes should be an array"),
                !1);
          },
          checkVideoContext: function (e) {
            return (
              e &&
              e.mediaTypes &&
              e.mediaTypes.video &&
              e.mediaTypes.video.context &&
              ("instream" === e.mediaTypes.video.context ||
                "outstream" === e.mediaTypes.video.context)
            );
          },
          buildBanner: function (e) {
            var r = [];
            return (
              (r =
                e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes
                  ? e.mediaTypes.banner.sizes
                  : e.sizes),
              f.validateSizes(r) ||
                (Object(i.logWarn)(
                  "emx_digital: could not detect mediaType banner sizes. Assigning to bid sizes instead"
                ),
                (r = e.sizes)),
              {
                format: r.map(function (e) {
                  return { w: e[0], h: e[1] };
                }),
                w: r[0][0],
                h: r[0][1],
              }
            );
          },
          formatVideoResponse: function (e, r, t) {
            ((e.vastXml = r.adm),
            t.bidderRequest &&
              t.bidderRequest.bids &&
              t.bidderRequest.bids.length > 0) &&
              c()(t.bidderRequest.bids, function (r) {
                return (
                  e.requestId &&
                  r.bidId &&
                  e.requestId === r.bidId &&
                  r.mediaTypes &&
                  r.mediaTypes.video &&
                  "outstream" === r.mediaTypes.video.context
                );
              }) &&
              (e.renderer = f.createRenderer(e, { id: r.id, url: g }));
            return e;
          },
          isMobile: function () {
            return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent);
          },
          isConnectedTV: function () {
            return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(
              navigator.userAgent
            );
          },
          getDevice: function () {
            return {
              ua: navigator.userAgent,
              js: 1,
              dnt:
                "yes" === navigator.doNotTrack ||
                "1" === navigator.doNotTrack ||
                "1" === navigator.msDoNotTrack
                  ? 1
                  : 0,
              h: screen.height,
              w: screen.width,
              devicetype: f.isMobile() ? 1 : f.isConnectedTV() ? 3 : 2,
              language:
                navigator.language ||
                navigator.browserLanguage ||
                navigator.userLanguage ||
                navigator.systemLanguage,
            };
          },
          cleanProtocols: function (e) {
            return (
              e.protocols &&
                s()(e.protocols, 7) &&
                (Object(i.logWarn)(
                  "emx_digital: VAST 4.0 is currently not supported. This protocol has been filtered out of the request."
                ),
                (e.protocols = e.protocols.filter(function (e) {
                  return 7 !== e;
                }))),
              e
            );
          },
          outstreamRender: function (e) {
            e.renderer.push(function () {
              var r =
                e && e.params && e.params[0] && e.params[0].video
                  ? e.params[0].video
                  : {};
              (window.emxVideoQueue = window.emxVideoQueue || []),
                window.queueEmxVideo({
                  id: e.adUnitCode,
                  adsResponses: e.vastXml,
                  options: r,
                }),
                window.emxVideoReady &&
                  window.videojs &&
                  window.emxVideoReady();
            });
          },
          createRenderer: function (e, r) {
            var t = d.a.install({ id: r.id, url: g, loaded: !1 });
            try {
              t.setRender(f.outstreamRender);
            } catch (e) {
              Object(i.logWarn)(
                "Prebid Error calling setRender on renderer",
                e
              );
            }
            return t;
          },
          buildVideo: function (e) {
            var r = p(e.mediaTypes.video, e.params.video);
            return (
              Object(i.isArray)(e.mediaTypes.video.playerSize[0])
                ? ((r.w = e.mediaTypes.video.playerSize[0][0]),
                  (r.h = e.mediaTypes.video.playerSize[0][1]))
                : ((r.w = e.mediaTypes.video.playerSize[0]),
                  (r.h = e.mediaTypes.video.playerSize[1])),
              f.cleanProtocols(r)
            );
          },
          parseResponse: function (e) {
            try {
              return decodeURIComponent(
                e.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25")
              );
            } catch (e) {
              Object(i.logError)("emx_digitalBidAdapter", "error", e);
            }
          },
          getReferrer: function () {
            try {
              return window.top.document.referrer;
            } catch (e) {
              return document.referrer;
            }
          },
          getSite: function (e) {
            return {
              domain: Object(i.parseUrl)(e.referer).hostname,
              page: e.referer,
              ref: f.getReferrer(),
            };
          },
          getGdpr: function (e, r) {
            return (
              e.gdprConsent &&
                (r.regs = {
                  ext: { gdpr: !0 === e.gdprConsent.gdprApplies ? 1 : 0 },
                }),
              e.gdprConsent &&
                e.gdprConsent.gdprApplies &&
                (r.user = { ext: { consent: e.gdprConsent.consentString } }),
              r
            );
          },
          getSupplyChain: function (e, r) {
            return (
              e.bids[0] &&
                e.bids[0].schain &&
                (r.source = { ext: { schain: e.bids[0].schain } }),
              r
            );
          },
          getEids: function (e) {
            return b.map(f.getUserId(e)).filter(function (e) {
              return e;
            });
          },
          getUserId: function (e) {
            return function (r) {
              var t = r.key,
                n = r.source,
                a = r.rtiPartner,
                d = Object(i.deepAccess)(e, "userId.".concat(t));
              return d ? f.formatEid(d, n, a) : null;
            };
          },
          formatEid: function (e, r, t) {
            return { source: r, uids: [{ id: e, ext: { rtiPartner: t } }] };
          },
        },
        v = {
          code: l,
          gvlid: 183,
          supportedMediaTypes: [a.b, a.d],
          isBidRequestValid: function (e) {
            if (!e || !e.params)
              return (
                Object(i.logWarn)("emx_digital: Missing bid or bid params."), !1
              );
            if (e.bidder !== l)
              return (
                Object(i.logWarn)(
                  'emx_digital: Must use "emx_digital" as bidder code.'
                ),
                !1
              );
            if (!e.params.tagid || !Object(i.isStr)(e.params.tagid))
              return (
                Object(i.logWarn)(
                  "emx_digital: Missing tagid param or tagid present and not type String."
                ),
                !1
              );
            var r;
            if (e.mediaTypes && e.mediaTypes.banner) {
              if (
                ((r = e.mediaTypes.banner.sizes
                  ? e.mediaTypes.banner.sizes
                  : e.sizes),
                !f.validateSizes(r))
              )
                return (
                  Object(i.logWarn)("emx_digital: Missing sizes in bid"), !1
                );
            } else if (e.mediaTypes && e.mediaTypes.video) {
              if (!f.checkVideoContext(e))
                return (
                  Object(i.logWarn)(
                    "emx_digital: Missing video context: instream or outstream"
                  ),
                  !1
                );
              if (!e.mediaTypes.video.playerSize)
                return (
                  Object(i.logWarn)("emx_digital: Missing video playerSize"), !1
                );
            }
            return !0;
          },
          buildRequests: function (e, r) {
            var t = [],
              n =
                "https://hb.emxdgt.com?t=" +
                (r.timeout || "") +
                "&ts=" +
                Date.now() +
                "&src=pbjs",
              a = location.protocol.indexOf("https") > -1 ? 1 : 0,
              d = f.getDevice(),
              o = f.getSite(r.refererInfo);
            Object(i._each)(e, function (e) {
              var r = Object(i.getBidIdParameter)("tagid", e.params),
                n =
                  parseFloat(
                    (function (e) {
                      if (!Object(i.isFn)(e.getFloor))
                        return parseFloat(
                          Object(i.getBidIdParameter)("bidfloor", e.params)
                        );
                      var r = e.getFloor({
                        currency: m,
                        mediaType: "*",
                        size: "*",
                      });
                      if (
                        Object(i.isPlainObject)(r) &&
                        !isNaN(r.floor) &&
                        "USD" === r.currency
                      )
                        return r.floor;
                      return null;
                    })(e)
                  ) || 0,
                d = !!e.mediaTypes.video,
                o = p(
                  { id: e.bidId, tid: e.transactionId, tagid: r, secure: a },
                  d ? { video: f.buildVideo(e) } : { banner: f.buildBanner(e) },
                  n > 0 ? { bidfloor: n, bidfloorcur: m } : {}
                );
              t.push(o);
            });
            var s = {
              id: r.auctionId,
              imp: t,
              device: d,
              site: o,
              cur: m,
              version: "1.5.1",
            };
            if (
              ((s = f.getGdpr(r, p({}, s))),
              (s = f.getSupplyChain(r, p({}, s))),
              r && r.uspConsent && (s.us_privacy = r.uspConsent),
              r.userId)
            ) {
              var u = f.getEids(r);
              u.length > 0 &&
                (s.user && s.user.ext
                  ? (s.user.ext.eids = u)
                  : (s.user = { ext: { eids: u } }));
            }
            return {
              method: "POST",
              url: n,
              data: JSON.stringify(s),
              options: { withCredentials: !0 },
              bidderRequest: r,
            };
          },
          interpretResponse: function (e, r) {
            var t = [],
              i = e.body || {};
            return (
              i.seatbid &&
                i.seatbid.length > 0 &&
                i.seatbid[0].bid &&
                i.seatbid.forEach(function (e) {
                  e = e.bid[0];
                  var i = !1,
                    n = f.parseResponse(e.adm) || "",
                    d = {
                      requestId: e.id,
                      cpm: e.price,
                      width: e.w,
                      height: e.h,
                      creativeId: e.crid || e.id,
                      dealId: e.dealid || null,
                      currency: "USD",
                      netRevenue: !0,
                      ttl: e.ttl,
                      ad: n,
                    };
                  e.adm &&
                    e.adm.indexOf("<?xml version=") > -1 &&
                    ((i = !0), (d = f.formatVideoResponse(d, p({}, e), r))),
                    (d.mediaType = i ? a.d : a.b),
                    e.adomain &&
                      e.adomain.length &&
                      (d.meta = { advertiserDomains: e.adomain }),
                    t.push(d);
                }),
              t
            );
          },
          getUserSyncs: function (e, r, t, i) {
            var n = [];
            if (e.iframeEnabled) {
              var a = "https://biddr.brealtime.com/check.html";
              t &&
                "string" == typeof t.consentString &&
                ("boolean" == typeof t.gdprApplies
                  ? (a += "?gdpr="
                      .concat(Number(t.gdprApplies), "&gdpr_consent=")
                      .concat(t.consentString))
                  : (a += "?gdpr_consent=".concat(t.consentString))),
                n.push({ type: "iframe", url: a });
            }
            return n;
          },
        };
      Object(n.registerBidder)(v);
    },
  },
  [412]
);
pbjsChunk(
  [264],
  {
    414: function (e, t, n) {
      e.exports = n(415);
    },
    415: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n.d(t, "coreStorage", function () {
          return u;
        }),
        (t.findRootDomain = m),
        (t.initSubmodule = w),
        n.d(t, "enrichmentsSubmodule", function () {
          return h;
        });
      var i = n(0),
        o = n(9),
        c = n(20),
        r = n(7),
        d = {},
        a = window === window.top ? window : window.top,
        u = Object(r.a)("enrichmentFpd");
      function m() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window.location.hostname;
        if (!u.cookiesAreEnabled()) return e;
        var t,
          n,
          o = e.split(".");
        if (2 == o.length) return e;
        var c = -2,
          r = "_rdc".concat(Date.now()),
          d = "writeable";
        do {
          t = o.slice(c).join(".");
          var a = new Date(Object(i.timestamp)() + 1e4).toUTCString();
          u.setCookie(r, d, a, "Lax", t, void 0);
          var m = u.getCookie(r, void 0);
          m === d
            ? ((n = !1),
              u.setCookie(
                r,
                "",
                "Thu, 01 Jan 1970 00:00:01 GMT",
                void 0,
                t,
                void 0
              ))
            : ((c += -1), (n = Math.abs(c) <= o.length));
        } while (n);
        return t;
      }
      function l() {
        var e;
        return (
          Object(c.a)().referer &&
            Object(i.mergeDeep)(d, { site: { ref: Object(c.a)().referer } }),
          Object(c.a)().canonicalUrl &&
            Object(i.mergeDeep)(d, {
              site: { page: Object(c.a)().canonicalUrl },
            }),
          (e = (function (e) {
            if (e && "string" == typeof e && 0 !== e.length) {
              var t = e.match(
                /^(?:https?:\/\/)?(?:www\.)?(.*?(?=(\?|\#|\/|$)))/i
              );
              return t && t[1];
            }
          })(Object(c.a)().canonicalUrl)) &&
            (Object(i.mergeDeep)(d, { site: { domain: e } }),
            Object(i.mergeDeep)(d, { site: { publisher: { domain: m(e) } } })),
          (function () {
            var e, t;
            try {
              (e =
                a.innerWidth ||
                a.document.documentElement.clientWidth ||
                a.document.body.clientWidth),
                (t =
                  a.innerHeight ||
                  a.document.documentElement.clientHeight ||
                  a.document.body.clientHeight);
            } catch (n) {
              (e =
                window.innerWidth ||
                window.document.documentElement.clientWidth ||
                window.document.body.clientWidth),
                (t =
                  window.innerHeight ||
                  window.document.documentElement.clientHeight ||
                  window.document.body.clientHeight);
            }
            Object(i.mergeDeep)(d, { device: { w: e, h: t } });
          })(),
          (function () {
            var e;
            try {
              e = a.document.querySelector("meta[name='keywords']");
            } catch (t) {
              e = window.document.querySelector("meta[name='keywords']");
            }
            e &&
              e.content &&
              Object(i.mergeDeep)(d, {
                site: { keywords: e.content.replace(/\s/g, "") },
              });
          })(),
          d
        );
      }
      function w(e, t) {
        return (d = {}), e.skipEnrichments ? t : Object(i.mergeDeep)(l(), t);
      }
      var h = { name: "enrichments", queue: 2, init: w };
      Object(o.e)("firstPartyData", h);
    },
  },
  [414]
);
pbjsChunk(
  [256],
  {
    437: function (t, e, o) {
      t.exports = o(438);
    },
    438: function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.registerSubmodules = s),
        (e.init = c);
      var n = o(3),
        r = o(9),
        i = o(14),
        u = o(28),
        f = [];
      function s(t) {
        f.push(t);
      }
      function c() {
        var t = n.b.getConfig("firstPartyData") || {},
          e = n.b.getConfig("ortb2") || {};
        f
          .sort(function (t, e) {
            return (t.queue || 1) - (e.queue || 1);
          })
          .forEach(function (o) {
            e = o.init(t, e);
          }),
          n.b.setConfig({ ortb2: e });
      }
      function a(t, e) {
        c(), t.call(this, e), u.e.getHooks({ hook: a }).remove();
      }
      function b() {
        Object(r.a)("addBidderRequests").before(a);
      }
      Object(r.c)("firstPartyData", s), b(), (Object(i.a)().refreshFpd = b);
    },
  },
  [437]
);
pbjsChunk(
  [254],
  {
    441: function (e, r, t) {
      e.exports = t(442);
    },
    442: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return f;
        });
      var n = t(0),
        a = t(2),
        i = t(1);
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var s = "freewheel-ssp";
      function p(e) {
        for (var r = [0, 0], t = 0; t < e.length; t++)
          e[t][0] * e[t][1] > r[0] * r[1] && (r = e[t]);
        return r;
      }
      function d(e, r, t) {
        for (
          var n = r || [0, 0],
            a = t || [Number.MAX_VALUE, Number.MAX_VALUE],
            i = [],
            o = 0;
          o < e.length;
          o++
        )
          e[o][0] * e[o][1] >= n[0] * n[1] &&
            e[o][0] * e[o][1] <= a[0] * a[1] &&
            i.push(e[o]);
        return p(i);
      }
      function c(e, r) {
        var t = "",
          n = e.querySelectorAll("Impression"),
          a = !1,
          i = !1;
        return (
          Array.prototype.forEach.call(n, function (e) {
            if (a && i) return t;
            (a = !1), (i = !1);
            var n = e.textContent
                .substring(e.textContent.indexOf("?") + 1)
                .split("&"),
              o = "";
            Array.prototype.forEach.call(n, function (e) {
              var t = e.split("=");
              t[0] == r && (o = t[1]),
                "reqType" == t[0] && "AdsDisplayStarted" == t[1] && (i = !0),
                "rootViewKey" == t[0] && (a = !0);
            }),
              i && (t = o);
          }),
          t
        );
      }
      function m() {
        var e = window;
        try {
          for (; top !== e; ) e.parent.location.href.length && (e = e.parent);
        } catch (e) {}
        return e;
      }
      function u(e) {
        var r = "mustang";
        return e && "inbanner" !== e && (r = e), r;
      }
      var y = function (e, r) {
          return (
            'var config = {      preloadedVast:vast,      autoPlay:true    };    var ad = new window.com.stickyadstv.vpaid.Ad(document.getElementById("freewheelssp_prebid_target"),config);    (new window.com.stickyadstv.tools.ASLoader(' +
            e.params.zoneId +
            ", '" +
            u(e.params.format) +
            "')).registerEvents(ad);    ad.initAd(" +
            r[0] +
            "," +
            r[1] +
            ',"",0,"","");'
          );
        },
        l = function (e) {
          var r = e.params;
          r.hasOwnProperty("domId") ||
            r.hasOwnProperty("auto") ||
            r.hasOwnProperty("p") ||
            r.hasOwnProperty("article") ||
            ("intext-roll" === r.format
              ? (r.iframeMode = "dfp")
              : (r.domId = "freewheelssp_prebid_target"));
          var t =
            "var config = {  preloadedVast:vast,  ASLoader:new window.com.stickyadstv.tools.ASLoader(" +
            e.params.zoneId +
            ", '" +
            u(e.params.format) +
            "')";
          for (var n in r)
            r.hasOwnProperty(n) &&
              "format" !== n &&
              "zone" !== n &&
              "zoneId" !== n &&
              "vastUrlParams" !== n &&
              (t += "," + n + ':"' + r[n] + '"');
          return (t +=
            "};window.com.stickyadstv." +
            ((e.params.format || "").replace("-", "") + ".start(config);"));
        },
        f = {
          code: s,
          supportedMediaTypes: [a.b, a.d],
          aliases: ["stickyadstv"],
          isBidRequestValid: function (e) {
            return !!e.params.zoneId;
          },
          buildRequests: function (e, r) {
            return e.map(function (e) {
              return (function (e, r) {
                var t = e.params.zoneId,
                  a = new Date().getTime(),
                  i = (function (e) {
                    var r = 0;
                    if (0 == e.length) return r;
                    for (var t = 0; t < e.length; t++)
                      (r = (r << 5) - r + e.charCodeAt(t)), (r &= r);
                    return r;
                  })(t + "" + a),
                  s = {
                    reqType: "AdsSetup",
                    protocolVersion: "2.0",
                    zoneId: t,
                    componentId: "prebid",
                    componentSubId: u(e.params.format),
                    timestamp: a,
                    pKey: i,
                  };
                r &&
                  r.gdprConsent &&
                  ((s._fw_gdpr_consent = r.gdprConsent.consentString),
                  "boolean" == typeof r.gdprConsent.gdprApplies &&
                    (s._fw_gdpr = r.gdprConsent.gdprApplies)),
                  e.params.gdpr_consented_providers &&
                    (s._fw_gdpr_consented_providers =
                      e.params.gdpr_consented_providers),
                  r && r.uspConsent && (s._fw_us_privacy = r.uspConsent);
                var c = e.params.vastUrlParams;
                if ("object" === o(c))
                  for (var y in c) c.hasOwnProperty(y) && (s[y] = c[y]);
                var l,
                  f =
                    r && r.refererInfo
                      ? r.refererInfo.referer
                      : m().location.href;
                (l = f) &&
                  /^(https?|ftp|file):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(
                    l
                  ) &&
                  (s.loc = f);
                var v = [];
                return (
                  ((v =
                    e.mediaTypes.video && e.mediaTypes.video.playerSize
                      ? Object(n.isArray)(e.mediaTypes.video.playerSize[0])
                        ? e.mediaTypes.video.playerSize[0]
                        : e.mediaTypes.video.playerSize
                      : e.mediaTypes.banner.sizes
                      ? d(
                          e.mediaTypes.banner.sizes,
                          e.mediaTypes.banner.minSizeLimit,
                          e.mediaTypes.banner.maxSizeLimit
                        )
                      : p(e.sizes))[0] > 0 ||
                    v[1] > 0) &&
                    (s.playerSize = v[0] + "x" + v[1]),
                  {
                    method: "GET",
                    url: "https://ads.stickyadstv.com/www/delivery/swfIndex.php",
                    data: s,
                    bidRequest: e,
                  }
                );
              })(e, r);
            });
          },
          interpretResponse: function (e, r) {
            var t,
              a = r.bidRequest,
              i = [];
            (i =
              a.mediaTypes.video && a.mediaTypes.video.playerSize
                ? Object(n.isArray)(a.mediaTypes.video.playerSize[0])
                  ? a.mediaTypes.video.playerSize[0]
                  : a.mediaTypes.video.playerSize
                : a.mediaTypes.banner.sizes
                ? d(
                    a.mediaTypes.banner.sizes,
                    a.mediaTypes.banner.minSizeLimit,
                    a.mediaTypes.banner.maxSizeLimit
                  )
                : p(a.sizes)),
              "object" == o(e) && "string" == typeof e.body && (e = e.body);
            try {
              t = new DOMParser().parseFromString(e, "application/xml");
            } catch (e) {
              return void Object(n.logWarn)("Prebid.js - freewheel-ssp : " + e);
            }
            var s,
              f,
              v = (function (e) {
                var r,
                  t = {},
                  a = e.querySelectorAll("Extension");
                if (
                  (Array.prototype.forEach.call(a, function (e) {
                    "StickyPricing" === e.getAttribute("type") && (r = e);
                  }),
                  r)
                ) {
                  var i = r.querySelector("Price");
                  t = {
                    currency: i.getAttribute("currency"),
                    price: i.textContent || i.innerText,
                  };
                } else
                  Object(n.logWarn)(
                    "PREBID - freewheel-ssp: No bid received or missing pricing extension."
                  );
                return t;
              })(t),
              g =
                ((s = ""),
                (f = t.querySelectorAll("Ad")),
                Array.prototype.forEach.call(f, function (e) {
                  s += "[" + e.getAttribute("id") + "]";
                }),
                s),
              h = (function (e) {
                return c(e, "dealId");
              })(t),
              b = (function (e) {
                return c(e, "campaignId");
              })(t),
              w = (function (e) {
                return c(e, "adId");
              })(t),
              A = m();
            A.freewheelssp_cache || (A.freewheelssp_cache = {}),
              (A.freewheelssp_cache[a.adUnitCode] = e);
            var S,
              z,
              _,
              T,
              I,
              x,
              j = [];
            if (v.price) {
              var O = {
                requestId: a.bidId,
                cpm: v.price,
                width: i[0],
                height: i[1],
                creativeId: g,
                currency: v.currency,
                netRevenue: !0,
                ttl: 360,
                meta: {
                  advertiserDomains:
                    v.adomain && Object(n.isArray)(v.adomain) ? v.adomain : [],
                },
                dealId: h,
                campaignId: b,
                bannerId: w,
              };
              a.mediaTypes.video && ((O.vastXml = e), (O.mediaType = "video")),
                (O.ad =
                  ((z = i),
                  (_ = (S = a).params.format),
                  (T =
                    '<div id="freewheelssp_prebid_target" style="width:' +
                    z[0] +
                    "px;height:" +
                    z[1] +
                    'px;"></div>'),
                  (I = ""),
                  (x = ""),
                  _ && "inbanner" !== _
                    ? ((x =
                        "https://cdn.stickyadstv.com/prime-time/" +
                        u(S.params.format) +
                        ".min.js"),
                      (I = l(S, z)))
                    : ((x =
                        "https://cdn.stickyadstv.com/mustang/mustang.min.js"),
                      (I = y(S, z))),
                  T +
                    "<script type='text/javascript'>(function() {  var st = document.createElement('script'); st.type = 'text/javascript'; st.async = true;  st.src = '" +
                    x +
                    "';  st.onload = function(){    var vastLoader = new window.com.stickyadstv.vast.VastLoader();    var vast = vastLoader.getVast();    var topWindow = (function(){var res=window; try{while(top != res){if(res.parent.location.href.length)res=res.parent;}}catch(e){}return res;})();    vast.setXmlString(topWindow.freewheelssp_cache[\"" +
                    S.adUnitCode +
                    '"]);    vastLoader.parseAds(vast, {      onSuccess: function() {' +
                    I +
                    " }    });  };  document.head.appendChild(st);})();</script>")),
                j.push(O);
            }
            return j;
          },
          getUserSyncs: function (e, r, t, n) {
            var a = "";
            return (
              t &&
                (a =
                  "boolean" == typeof t.gdprApplies
                    ? "?gdpr="
                        .concat(Number(t.gdprApplies), "&gdpr_consent=")
                        .concat(t.consentString)
                    : "?gdpr_consent=".concat(t.consentString)),
              e && e.pixelEnabled
                ? [
                    {
                      type: "image",
                      url: "https://ads.stickyadstv.com/auto-user-sync" + a,
                    },
                  ]
                : []
            );
          },
        };
      Object(i.registerBidder)(f);
    },
  },
  [441]
);
pbjsChunk(
  [251],
  {
    447: function (e, r, t) {
      e.exports = t(448);
    },
    448: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "purpose1Rule", function () {
          return A;
        }),
        t.d(r, "purpose2Rule", function () {
          return C;
        }),
        t.d(r, "purpose7Rule", function () {
          return D;
        }),
        t.d(r, "enforcementRules", function () {
          return E;
        }),
        t.d(r, "internal", function () {
          return V;
        }),
        (r.getGvlid = H),
        (r.validateRules = R),
        (r.deviceAccessHook = T),
        (r.userSyncHook = G),
        (r.userIdHook = M),
        (r.makeBidRequestsHook = W),
        (r.enableAnalyticsHook = I),
        (r.setEnforcementConfig = _);
      var n = t(0),
        o = t(3),
        a = t(8),
        c = t(11),
        i = t.n(c),
        s = t(12),
        l = t.n(s),
        u = t(1),
        p = t(9),
        d = t(7),
        f = t(10),
        b = t.n(f),
        g = t(5),
        v = t.n(g);
      function y(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function O(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? y(Object(t), !0).forEach(function (r) {
                m(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function m(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function j(e) {
        return (j =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var A,
        C,
        D,
        E,
        P = {
          purpose1: { id: 1, name: "storage" },
          purpose2: { id: 2, name: "basicAds" },
          purpose7: { id: 7, name: "measurement" },
        },
        k = [
          {
            purpose: "storage",
            enforcePurpose: !0,
            enforceVendor: !0,
            vendorExceptions: [],
          },
          {
            purpose: "basicAds",
            enforcePurpose: !0,
            enforceVendor: !0,
            vendorExceptions: [],
          },
        ],
        S = [],
        F = [],
        w = [],
        B = !1,
        V = {
          getGvlidForBidAdapter: function (e) {
            var r = null;
            if ((e = e || o.b.getCurrentBidder())) {
              var t = a.default.getBidAdapter(e);
              t && t.getSpec && (r = t.getSpec().gvlid);
            }
            return r;
          },
          getGvlidForUserIdModule: function (e) {
            return "object" === j(e) ? e.gvlid : null;
          },
          getGvlidForAnalyticsAdapter: function (e) {
            return (
              a.default.getAnalyticsAdapter(e) &&
              (a.default.getAnalyticsAdapter(e).gvlid || null)
            );
          },
        };
      function H(e) {
        var r = null;
        if (e) {
          var t = o.b.getConfig("gvlMapping"),
            n = "string" == typeof e ? e : e.name;
          if (t && t[n]) return (r = t[n]);
          r =
            V.getGvlidForBidAdapter(n) ||
            V.getGvlidForUserIdModule(e) ||
            V.getGvlidForAnalyticsAdapter(n);
        }
        return r;
      }
      function R(e, r, t, o) {
        var a =
          P[
            Object.keys(P).filter(function (r) {
              return P[r].name === e.purpose;
            })[0]
          ].id;
        if (l()(e.vendorExceptions || [], t)) return !0;
        var c = Object(n.deepAccess)(
            r,
            "vendorData.purpose.consents.".concat(a)
          ),
          i = Object(n.deepAccess)(r, "vendorData.vendor.consents.".concat(o)),
          s = Object(n.deepAccess)(
            r,
            "vendorData.purpose.legitimateInterests.".concat(a)
          ),
          u = !1 === e.enforcePurpose || !0 === c,
          p = !1 === e.enforceVendor || !0 === i;
        return 2 === a ? (u && p) || !0 === s : u && p;
      }
      function T(e, r, t, c) {
        if (
          ((c = h({}, { hasEnforcementHook: !0 })), Object(n.hasDeviceAccess)())
        ) {
          var i = a.gdprDataHandler.getConsentData();
          if (i && i.gdprApplies)
            if (2 === i.apiVersion) {
              var s = o.b.getCurrentBidder();
              r =
                s && s != t && a.default.aliasRegistry[s] === t
                  ? H(s)
                  : H(t) || r;
              var l = t || s;
              R(A, i, l, r)
                ? ((c.valid = !0), e.call(this, r, t, c))
                : (l &&
                    Object(n.logWarn)(
                      "TCF2 denied device access for ".concat(l)
                    ),
                  (c.valid = !1),
                  S.push(l),
                  e.call(this, r, t, c));
            } else (c.valid = !0), e.call(this, r, t, c);
          else (c.valid = !0), e.call(this, r, t, c);
        } else
          Object(n.logWarn)("Device access is disabled by Publisher"),
            (c.valid = !1),
            e.call(this, r, t, c);
      }
      function G(e) {
        for (
          var r = a.gdprDataHandler.getConsentData(),
            t = arguments.length,
            c = new Array(t > 1 ? t - 1 : 0),
            i = 1;
          i < t;
          i++
        )
          c[i - 1] = arguments[i];
        if (r && r.gdprApplies)
          if (2 === r.apiVersion) {
            var s = o.b.getCurrentBidder(),
              l = H(s),
              u = R(A, r, s, l);
            u
              ? e.call.apply(e, [this].concat(c))
              : (Object(n.logWarn)("User sync not allowed for ".concat(s)),
                S.push(s));
          } else e.call.apply(e, [this].concat(c));
        else e.call.apply(e, [this].concat(c));
      }
      function M(e, r, t) {
        if (t && t.gdprApplies)
          if (2 === t.apiVersion) {
            var o = r
              .map(function (e) {
                var r = H(e.submodule),
                  o = e.submodule.name;
                if (R(A, t, o, r)) return e;
                Object(n.logWarn)(
                  "User denied permission to fetch user id for ".concat(
                    o,
                    " User id module"
                  )
                ),
                  S.push(o);
              })
              .filter(function (e) {
                return e;
              });
            e.call(this, o, O(O({}, t), {}, { hasValidated: !0 }));
          } else e.call(this, r, t);
        else e.call(this, r, t);
      }
      function W(e, r) {
        for (
          var t = a.gdprDataHandler.getConsentData(),
            o = arguments.length,
            c = new Array(o > 2 ? o - 2 : 0),
            i = 2;
          i < o;
          i++
        )
          c[i - 2] = arguments[i];
        t && t.gdprApplies && 2 === t.apiVersion
          ? (r.forEach(function (e) {
              e.bids = e.bids.filter(function (e) {
                var r = e.bidder,
                  o = H(r);
                if (l()(F, r)) return !1;
                var a = !!R(C, t, r, o);
                return (
                  a ||
                    (Object(n.logWarn)("TCF2 blocked auction for ".concat(r)),
                    F.push(r)),
                  a
                );
              });
            }),
            e.call.apply(e, [this, r].concat(c)))
          : e.call.apply(e, [this, r].concat(c));
      }
      function I(e, r) {
        var t = a.gdprDataHandler.getConsentData();
        t && t.gdprApplies && 2 === t.apiVersion
          ? (Object(n.isArray)(r) || (r = [r]),
            (r = r.filter(function (e) {
              var r = e.provider,
                o = H(r),
                a = !!R(D, t, r, o);
              return (
                a ||
                  (w.push(r),
                  Object(n.logWarn)(
                    "TCF2 blocked analytics adapter ".concat(e.provider)
                  )),
                a
              );
            })),
            e.call(this, r))
          : e.call(this, r);
      }
      b.a.on(v.a.EVENTS.AUCTION_END, function () {
        var e = function (e) {
            return e.filter(function (r, t) {
              return null !== r && e.indexOf(r) === t;
            });
          },
          r = {
            storageBlocked: e(S),
            biddersBlocked: e(F),
            analyticsBlocked: e(w),
          };
        b.a.emit(v.a.EVENTS.TCF2_ENFORCEMENT, r);
      });
      var N = function (e) {
          return e.purpose === P.purpose1.name;
        },
        U = function (e) {
          return e.purpose === P.purpose2.name;
        },
        x = function (e) {
          return e.purpose === P.purpose7.name;
        };
      function _(e) {
        var r = Object(n.deepAccess)(e, "gdpr.rules");
        r
          ? (E = r)
          : (Object(n.logWarn)("TCF2: enforcing P1 and P2 by default"),
            (E = k)),
          (A = i()(E, N)),
          (C = i()(E, U)),
          (D = i()(E, x)),
          A || (A = k[0]),
          C || (C = k[1]),
          A &&
            !B &&
            ((B = !0),
            d.d.before(T, 49),
            u.registerSyncInner.before(G, 48),
            Object(p.a)("validateGdprEnforcement").before(M, 47)),
          C && Object(p.a)("makeBidRequests").before(W),
          D && Object(p.a)("enableAnalyticsCb").before(I);
      }
      o.b.getConfig("consentManagement", function (e) {
        return _(e.consentManagement);
      });
    },
  },
  [447]
);
pbjsChunk(
  [243],
  {
    463: function (e, n, t) {
      e.exports = t(464);
    },
    464: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var o = t(0);
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var s = t(10),
        r = t(5),
        a = t(8).default,
        c = r.EVENTS.BID_REQUESTED,
        u = r.EVENTS.BID_TIMEOUT,
        d = r.EVENTS.BID_RESPONSE,
        l = r.EVENTS.BID_WON,
        f = { nonInteraction: !0 },
        b = [],
        p = null,
        m = !0,
        v = "Prebid.js Bids",
        y = 0,
        g = !1,
        T = null,
        w = null,
        E = !0,
        S = {};
      function h() {
        if (m && "function" == typeof window[p]) {
          for (var e = 0; e < b.length; e++) b[e].call();
          (b.push = function (e) {
            e.call();
          }),
            (m = !1);
        }
        Object(o.logMessage)("event count sent to GA: " + y);
      }
      function j(e) {
        return e ? Math.floor(100 * e) : 0;
      }
      function D(e) {
        return T
          ? T(e)
          : (e >= 0 && e < 0.5
              ? (n = "$0-0.5")
              : e >= 0.5 && e < 1
              ? (n = "$0.5-1")
              : e >= 1 && e < 1.5
              ? (n = "$1-1.5")
              : e >= 1.5 && e < 2
              ? (n = "$1.5-2")
              : e >= 2 && e < 2.5
              ? (n = "$2-2.5")
              : e >= 2.5 && e < 3
              ? (n = "$2.5-3")
              : e >= 3 && e < 4
              ? (n = "$3-4")
              : e >= 4 && e < 6
              ? (n = "$4-6")
              : e >= 6 && e < 8
              ? (n = "$6-8")
              : e >= 8 && (n = "$8 above"),
            n);
        var n;
      }
      function $(e) {
        e &&
          e.bidderCode &&
          b.push(function () {
            y++, window[p](w, "event", v, "Requests", e.bidderCode, 1, f);
          }),
          h();
      }
      function O(e) {
        e &&
          e.bidderCode &&
          b.push(function () {
            var n,
              t,
              o = j(e.cpm),
              i = e.bidderCode;
            if (void 0 !== e.timeToRespond && g) {
              y++;
              var s =
                ((n = e.timeToRespond) >= 0 && n < 200
                  ? (t = "0-200ms")
                  : n >= 200 && n < 300
                  ? (t = "0200-300ms")
                  : n >= 300 && n < 400
                  ? (t = "0300-400ms")
                  : n >= 400 && n < 500
                  ? (t = "0400-500ms")
                  : n >= 500 && n < 600
                  ? (t = "0500-600ms")
                  : n >= 600 && n < 800
                  ? (t = "0600-800ms")
                  : n >= 800 && n < 1e3
                  ? (t = "0800-1000ms")
                  : n >= 1e3 && n < 1200
                  ? (t = "1000-1200ms")
                  : n >= 1200 && n < 1500
                  ? (t = "1200-1500ms")
                  : n >= 1500 && n < 2e3
                  ? (t = "1500-2000ms")
                  : n >= 2e3 && (t = "2000ms above"),
                t);
              window[p](
                w,
                "event",
                "Prebid.js Load Time Distribution",
                s,
                i,
                1,
                f
              );
            }
            if (e.cpm > 0) {
              y += 2;
              var r = D(e.cpm);
              g &&
                (y++,
                window[p](
                  w,
                  "event",
                  "Prebid.js CPM Distribution",
                  r,
                  i,
                  1,
                  f
                )),
                window[p](w, "event", v, "Bids", i, o, f),
                window[p](
                  w,
                  "event",
                  v,
                  "Bid Load Time",
                  i,
                  e.timeToRespond,
                  f
                );
            }
          }),
          h();
      }
      function C(e) {
        b.push(function () {
          Object(o._each)(e, function (e) {
            y++;
            var n = e.bidder;
            window[p](w, "event", v, "Timeouts", n, f);
          });
        }),
          h();
      }
      function M(e) {
        var n = j(e.cpm);
        b.push(function () {
          y++, window[p](w, "event", v, "Wins", e.bidderCode, n, f);
        }),
          h();
      }
      (S.enableAnalytics = function (e) {
        var n = e.provider,
          t = e.options;
        (p = n || "ga"),
          (w = t && t.trackerName ? t.trackerName + ".send" : "send"),
          (E =
            void 0 === t ||
            void 0 === t.sampling ||
            Math.random() < parseFloat(t.sampling)),
          t && void 0 !== t.global && (p = t.global),
          t && void 0 !== t.enableDistribution && (g = t.enableDistribution),
          t &&
            "function" == typeof t.cpmDistribution &&
            (T = t.cpmDistribution);
        if (E) {
          var r = s.getEvents();
          Object(o._each)(r, function (e) {
            if ("object" === i(e)) {
              var n = e.args;
              if (e.eventType === c) $(n);
              else if (e.eventType === d) O(n);
              else if (e.eventType === u) {
                C(n);
              } else e.eventType === l && M(n);
            }
          }),
            s.on(c, function (e) {
              $(e);
            }),
            s.on(d, function (e) {
              O(e);
            }),
            s.on(u, function (e) {
              C(e);
            }),
            s.on(l, function (e) {
              M(e);
            });
        } else
          Object(o.logMessage)(
            "Prebid.js google analytics disabled by sampling"
          );
        this.enableAnalytics = function () {
          return Object(o.logMessage)(
            "Analytics adapter already enabled, unnecessary call to `enableAnalytics`."
          );
        };
      }),
        (S.getTrackerSend = function () {
          return w;
        }),
        (S.getCpmDistribution = D),
        a.registerAnalyticsAdapter({ adapter: S, code: "ga" }),
        (n.default = S);
    },
  },
  [463]
);
pbjsChunk(
  [241],
  {
    467: function (t, e, o) {
      t.exports = o(468);
    },
    468: function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        o.d(e, "_currentConfig", function () {
          return i;
        }),
        o.d(e, "appendGptSlots", function () {
          return p;
        }),
        o.d(e, "appendPbAdSlot", function () {
          return f;
        }),
        o.d(e, "makeBidRequestsHook", function () {
          return l;
        });
      var n = o(0),
        r = o(3),
        a = o(9),
        c = o(11),
        d = o.n(c),
        u = this,
        i = {},
        s = !1,
        p = function (t) {
          var e = i.customGptSlotMatching;
          if (Object(n.isGptPubadsDefined)()) {
            var o = t.reduce(function (t, e) {
              return (t[e.code] = e), t;
            }, {});
            window.googletag
              .pubads()
              .getSlots()
              .forEach(function (t) {
                var r = d()(
                  Object.keys(o),
                  e ? e(t) : Object(n.isAdUnitCodeMatchingSlot)(t)
                );
                if (r) {
                  var a = o[r];
                  (a.ortb2Imp = a.ortb2Imp || {}),
                    (a.ortb2Imp.ext = a.ortb2Imp.ext || {}),
                    (a.ortb2Imp.ext.data = a.ortb2Imp.ext.data || {});
                  var c = a.ortb2Imp.ext.data;
                  (c.adserver = c.adserver || {}),
                    (c.adserver.name = "gam"),
                    (c.adserver.adslot = b(t.getAdUnitPath()));
                }
              });
          }
        },
        b = function (t) {
          return (r.b.getConfig("gptPreAuction") || {}).mcmEnabled
            ? t.replace(/(^\/\d*),\d*\//, "$1/")
            : t;
        },
        f = function (t) {
          (t.ortb2Imp = t.ortb2Imp || {}),
            (t.ortb2Imp.ext = t.ortb2Imp.ext || {}),
            (t.ortb2Imp.ext.data = t.ortb2Imp.ext.data || {});
          var e = t.ortb2Imp.ext.data,
            o = i.customPbAdSlot;
          if (o)
            e.pbadslot = o(t.code, Object(n.deepAccess)(e, "adserver.adslot"));
          else if (!e.pbadslot) {
            try {
              var r = document.getElementById(t.code);
              if (r.dataset.adslotid)
                return void (e.pbadslot = r.dataset.adslotid);
            } catch (t) {}
            Object(n.deepAccess)(e, "adserver.adslot")
              ? (e.pbadslot = e.adserver.adslot)
              : (e.pbadslot = t.code);
          }
        },
        l = function (t, e) {
          p(e),
            e.forEach(function (t) {
              f(t);
            });
          for (
            var o = arguments.length, n = new Array(o > 2 ? o - 2 : 0), r = 2;
            r < o;
            r++
          )
            n[r - 2] = arguments[r];
          return t.call.apply(t, [u, e].concat(n));
        },
        m = function (t) {
          (i = Object(n.pick)(t, [
            "enabled",
            function (t) {
              return !1 !== t;
            },
            "customGptSlotMatching",
            function (t) {
              return "function" == typeof t && t;
            },
            "customPbAdSlot",
            function (t) {
              return "function" == typeof t && t;
            },
          ])).enabled
            ? s || (Object(a.a)("makeBidRequests").before(l), (s = !0))
            : (Object(n.logInfo)(
                "".concat("GPT Pre-Auction", ": Turning off module")
              ),
              (i = {}),
              Object(a.a)("makeBidRequests").getHooks({ hook: l }).remove(),
              (s = !1));
        };
      r.b.getConfig("gptPreAuction", function (t) {
        return m(t.gptPreAuction);
      }),
        m({});
    },
  },
  [467]
);
pbjsChunk(
  [240],
  {
    469: function (e, t, r) {
      e.exports = r(470);
    },
    470: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "storage", function () {
          return v;
        }),
        r.d(t, "spec", function () {
          return T;
        }),
        (t.resetUserSync = function () {
          I = !1;
        }),
        (t.getSyncUrl = function () {
          return b;
        });
      var n = r(0),
        o = r(1),
        i = r(13),
        a = r(2),
        s = r(3),
        d = r(7);
      function u(e) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              s = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (e) {
              (s = !0), (o = e);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (s) throw o;
              }
            }
            return i;
          })(e, t) ||
          p(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return f(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          p(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        if (e) {
          if ("string" == typeof e) return f(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var g = "grid",
        b = "https://x.bidswitch.net/sync?ssp=themediagrid",
        m = "tmguid",
        y = "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
        v = Object(d.b)(686, g),
        h = "Bid from response has no auid parameter - ",
        S = "Bid from response has no adm parameter - ",
        j = "Array of bid objects is empty",
        x = "Seatbid array from response has empty item",
        w = "Response is empty",
        O = "Response has empty seatbid array",
        A = "Seatbid from response has no array of bid objects - ",
        I = !1,
        T = {
          code: g,
          supportedMediaTypes: [a.b, a.d],
          isBidRequestValid: function (e) {
            return !!e.params.uid;
          },
          buildRequests: function (e, t) {
            if (!e.length) return null;
            var r = null,
              o = null,
              i = null,
              d = null,
              p = null,
              f = null,
              g = null,
              b = t || {},
              y = b.bidderRequestId,
              h = b.auctionId,
              S = b.gdprConsent,
              j = b.uspConsent,
              x = b.timeout,
              w = b.refererInfo,
              O = w ? encodeURIComponent(w.referer) : "",
              A = [],
              I = {};
            e.forEach(function (e) {
              y || (y = e.bidderRequestId),
                h || (h = e.auctionId),
                d || (d = e.schain),
                p || (p = e.userIdAsEids);
              var t = e.params,
                s = t.uid,
                l = t.keywords,
                f = e.mediaTypes,
                g = e.bidId,
                b = e.adUnitCode,
                m = e.rtd,
                v = e.ortb2Imp;
              I[g] = e;
              var S = (function (e, t) {
                  var r = e.video ? "video" : "banner",
                    n = t.params.bidFloor || 0;
                  if ("function" == typeof t.getFloor) {
                    var o = t.getFloor({
                      currency: "USD",
                      mediaType: r,
                      size: t.sizes.map(function (e) {
                        var t = c(e, 2);
                        return { w: t[0], h: t[1] };
                      }),
                    });
                    "object" !== u(o) ||
                      "USD" !== o.currency ||
                      isNaN(parseFloat(o.floor)) ||
                      (n = Math.max(n, parseFloat(o.floor)));
                  }
                  return n;
                })(f || {}, e),
                j = m && m.jwplayer && m.jwplayer.targeting;
              j &&
                (!o && j.segments && (o = j.segments),
                !i && j.content && (i = j.content));
              var x = {
                id: g.toString(),
                tagid: s.toString(),
                ext: { divid: b.toString() },
              };
              if (
                (v &&
                  v.ext &&
                  v.ext.data &&
                  ((x.ext.data = v.ext.data),
                  x.ext.data.adserver && x.ext.data.adserver.adslot
                    ? (x.ext.gpid = x.ext.data.adserver.adslot.toString())
                    : (x.ext.gpid =
                        v.ext.data.pbadslot && v.ext.data.pbadslot.toString())),
                Object(n.isEmpty)(l) ||
                  (r || (r = l), (x.ext.bidder = { keywords: l })),
                S && (x.bidfloor = S),
                !f || f[a.b])
              ) {
                var w = (function (e, t) {
                  var r = t.sizes || e.sizes;
                  if (!r || !r.length) return;
                  var o = r.map(function (e) {
                      return Object(n.parseGPTSingleSizeArrayToRtbSize)(e);
                    }),
                    i = Object(n.parseGPTSingleSizeArrayToRtbSize)(r[0]);
                  o.length && (i.format = o);
                  return i;
                })(e, f ? f[a.b] : {});
                w && (x.banner = w);
              }
              if (f && f[a.d]) {
                var O = (function (e, t) {
                  var r = t.playerSize,
                    o = t.mimes,
                    i = t.durationRangeSec,
                    a = t.protocols,
                    s = (r || e.sizes || [])[0];
                  if (!s) return;
                  var d = Object(n.parseGPTSingleSizeArrayToRtbSize)(s);
                  o && (d.mimes = o);
                  i &&
                    2 === i.length &&
                    ((d.minduration = i[0]), (d.maxduration = i[1]));
                  a && a.length && (d.protocols = a);
                  return d;
                })(e, f[a.d]);
                O && (x.video = O);
              }
              (x.banner || x.video) && A.push(x);
            });
            var T = {
              tid: h && h.toString(),
              ext: { wrapper: "Prebid_js", wrapper_version: "5.16.0" },
            };
            d && (T.ext.schain = d);
            var E = s.b.getConfig("bidderTimeout") || x,
              R = x ? Math.min(E, x) : E,
              k = {
                id: y && y.toString(),
                site: { page: O },
                tmax: R,
                source: T,
                imp: A,
              };
            i && (k.site.content = i),
              o &&
                o.length &&
                (f = {
                  data: [
                    {
                      name: "iow_labs_pub_data",
                      segment: o.map(function (e) {
                        return { name: "jwpseg", value: e };
                      }),
                    },
                  ],
                }),
              S && S.consentString && (g = { consent: S.consentString }),
              p && p.length && ((g = g || {}).eids = l(p)),
              g && Object.keys(g).length && ((f = f || {}).ext = g);
            var U =
              v.getDataFromLocalStorage(m) ||
              (function () {
                if (s.b.getConfig("localStorageWriteAllowed")) {
                  var e = Object(n.generateUUID)().replace(/-/g, "");
                  return v.setDataInLocalStorage(m, e), e;
                }
                return null;
              })();
            U && ((f = f || {}).id = U.toString()), f && (k.user = f);
            var _ =
                Object(n.deepAccess)(s.b.getConfig("ortb2.user"), "keywords") ||
                null,
              z =
                Object(n.deepAccess)(s.b.getConfig("ortb2.site"), "keywords") ||
                null;
            return (
              _ &&
                (((r = r || {}).user = r.user || {}),
                (r.user.ortb2 = [
                  { name: "keywords", keywords: _.split(",") },
                ])),
              z &&
                (((r = r || {}).site = r.site || {}),
                (r.site.ortb2 = [
                  { name: "keywords", keywords: z.split(",") },
                ])),
              r &&
                (r = (function (e) {
                  var t = {};
                  return (
                    Object.keys(e).forEach(function (r) {
                      var n = e[r];
                      if (n)
                        if ("site" === r || "user" === r) {
                          var o = {};
                          Object.keys(n).forEach(function (e) {
                            if (Array.isArray(n[e])) {
                              var t = [];
                              n[e].forEach(function (e) {
                                if ("object" === u(e) && e.name) {
                                  var r = { name: e.name, segments: [] };
                                  Object.keys(e).forEach(function (t) {
                                    Array.isArray(e[t]) &&
                                      e[t].forEach(function (e) {
                                        e &&
                                          ("string" == typeof e
                                            ? r.segments.push({
                                                name: t,
                                                value: e,
                                              })
                                            : "segments" === t &&
                                              "string" == typeof e.name &&
                                              "string" == typeof e.value &&
                                              r.segments.push(e));
                                      });
                                  }),
                                    r.segments.length && t.push(r);
                                }
                              }),
                                t.length && (o[e] = t);
                            }
                          }),
                            (t[r] = o);
                        } else t[r] = n;
                    }),
                    Object.keys(t).length && t
                  );
                })(r)) &&
                (k.ext = { keywords: r }),
              S &&
                S.gdprApplies &&
                (k.regs = { ext: { gdpr: S.gdprApplies ? 1 : 0 } }),
              j &&
                (k.regs || (k.regs = { ext: {} }), (k.regs.ext.us_privacy = j)),
              !0 === s.b.getConfig("coppa") &&
                (k.regs || (k.regs = {}), (k.regs.coppa = 1)),
              {
                method: "POST",
                url: "https://grid.bidswitch.net/hbjson",
                data: JSON.stringify(k),
                newFormat: !0,
                bidsMap: I,
              }
            );
          },
          interpretResponse: function (e, t) {
            e = e && e.body;
            var r,
              o = [];
            return (
              e ? e.seatbid && !e.seatbid.length && (r = O) : (r = w),
              !r &&
                e.seatbid &&
                e.seatbid.forEach(function (e) {
                  !(function (e, t, r) {
                    if (!e) return;
                    var o;
                    e.auid || (o = h + JSON.stringify(e));
                    if (o || e.adm || e.nurl) {
                      var s = t.bidsMap[e.impid];
                      if (s) {
                        var d = {
                          requestId: s.bidId,
                          cpm: e.price,
                          width: e.w,
                          height: e.h,
                          creativeId: e.auid,
                          currency: "USD",
                          netRevenue: !0,
                          ttl: 360,
                          meta: {
                            advertiserDomains: e.adomain ? e.adomain : [],
                          },
                          dealId: e.dealid,
                        };
                        e.ext &&
                          e.ext.bidder &&
                          e.ext.bidder.grid &&
                          e.ext.bidder.grid.demandSource &&
                          ((d.adserverTargeting = {
                            hb_ds: e.ext.bidder.grid.demandSource,
                          }),
                          (d.meta.demandSource =
                            e.ext.bidder.grid.demandSource)),
                          "video" === e.content_type
                            ? (e.adm
                                ? ((d.vastXml = e.adm),
                                  (d.adResponse = { content: d.vastXml }))
                                : e.nurl && (d.vastUrl = e.nurl),
                              (d.mediaType = a.d),
                              s.renderer ||
                                (s.mediaTypes &&
                                  s.mediaTypes.video &&
                                  "outstream" !== s.mediaTypes.video.context) ||
                                (d.renderer = (function (e, t) {
                                  var r = i.a.install({
                                    id: t.id,
                                    url: t.url,
                                    loaded: !1,
                                  });
                                  try {
                                    r.setRender(E);
                                  } catch (e) {
                                    Object(n.logWarn)(
                                      "Prebid Error calling setRender on renderer",
                                      e
                                    );
                                  }
                                  return r;
                                })(0, { id: s.bidId, url: y })))
                            : ((d.ad = e.adm), (d.mediaType = a.b)),
                          r.push(d);
                      }
                    } else o = S + JSON.stringify(e);
                    o && Object(n.logError)(o);
                  })(
                    (function (e) {
                      e
                        ? e.bid
                          ? e.bid[0] || Object(n.logError)(j)
                          : Object(n.logError)(A + JSON.stringify(e))
                        : Object(n.logError)(x);
                      return e && e.bid && e.bid[0];
                    })(e),
                    t,
                    o
                  );
                }),
              r && Object(n.logError)(r),
              o
            );
          },
          getUserSyncs: function (e, t, r, n) {
            if (!I && e.pixelEnabled) {
              var o = "";
              return (
                r &&
                  "string" == typeof r.consentString &&
                  ("boolean" == typeof r.gdprApplies
                    ? (o += "&gdpr="
                        .concat(Number(r.gdprApplies), "&gdpr_consent=")
                        .concat(r.consentString))
                    : (o += "&gdpr_consent=".concat(r.consentString))),
                n && (o += "&us_privacy=".concat(n)),
                (I = !0),
                { type: "image", url: b + o }
              );
            }
          },
        };
      function E(e) {
        e.renderer.push(function () {
          window.ANOutstreamVideo.renderAd({
            targetId: e.adUnitCode,
            adResponse: e.adResponse,
          });
        });
      }
      Object(o.registerBidder)(T);
    },
  },
  [469]
);
pbjsChunk(
  [237],
  {
    475: function (e, t, n) {
      e.exports = n(476);
    },
    476: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        function (e) {
          n.d(t, "spec", function () {
            return C;
          });
          var r = n(0),
            i = n(2),
            o = n(3),
            a = n(7),
            c = n(12),
            u = n.n(c),
            d = n(1);
          function s() {
            return (s =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function l(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? p(Object(n), !0).forEach(function (t) {
                    f(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : p(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function f(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function b(e) {
            return (b =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function m(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var n =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null == n) return;
                var r,
                  i,
                  o = [],
                  a = !0,
                  c = !1;
                try {
                  for (
                    n = n.call(e);
                    !(a = (r = n.next()).done) &&
                    (o.push(r.value), !t || o.length !== t);
                    a = !0
                  );
                } catch (e) {
                  (c = !0), (i = e);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (c) throw i;
                  }
                }
                return o;
              })(e, t) ||
              (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return y(e, t);
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          var v = Object(a.b)(),
            g = { t: 0, rq: 8, pbv: "5.16.0" },
            h = [i.b, i.d],
            O = {},
            I = {},
            w = null;
          function j(t) {
            var n, i, o, a, c, u, d, s;
            if (I.vw) return I;
            try {
              (i = (n = e.top).screen), (o = t || "");
            } catch (e) {
              return Object(r.logError)(e), I;
            }
            return (
              (I = {
                vw: n.innerWidth,
                vh: n.innerHeight,
                sw: i.width,
                sh: i.height,
                pu: o,
                ce: v.cookiesAreEnabled(),
                dpr: n.devicePixelRatio || 1,
                jcsi: JSON.stringify(g),
                ogu:
                  ((u = (
                    document && document.getElementsByTagName("head")[0]
                  ).querySelector("meta[property='og:url']")),
                  u ? u.content : null),
              }),
              (d =
                window.navigator &&
                (window.navigator.connection ||
                  window.navigator.mozConnection ||
                  window.navigator.webkitConnection)),
              (c = (s = d && (d.downlink || d.bandwidth))
                ? Math.round(1024 * s)
                : null) && (I.ns = c),
              (a = (o.match(/#ggad=(\w+)$/) || [0, 0])[1]) &&
                (I[isNaN(a) ? "eAdBuyId" : "adBuyId"] = a),
              I
            );
          }
          function S(e, t) {
            return e.replace("AD_JSON", window.btoa(JSON.stringify(t)));
          }
          function x(e) {
            var t = e.digitrustid && e.digitrustid.data;
            return !t || (t.privacy && t.privacy.optout) ? {} : { dt: t.id };
          }
          function P(e) {
            var t = 0,
              n = 0,
              r = 0;
            return (
              e.forEach(function (e) {
                var i = m(e, 2),
                  o = i[0],
                  a = i[1],
                  c = o > a ? o : a;
                (c > r || (c === r && o >= t && a >= n)) &&
                  ((r = c), (t = o), (n = a));
              }),
              [t, n]
            );
          }
          var C = {
            code: "gumgum",
            aliases: ["gg"],
            isBidRequestValid: function (e) {
              var t = e.params,
                n = e.adUnitCode,
                i =
                  t.inScreen ||
                  t.inScreenPubID ||
                  t.inSlot ||
                  t.ICV ||
                  t.video ||
                  t.inVideo ||
                  t.slot ||
                  t.native ||
                  t.zone ||
                  t.pubID;
              if (O[i])
                return (
                  Object(r.logWarn)(
                    "[GumGum] Please check the implementation for "
                      .concat(i, " for the placement ")
                      .concat(n)
                  ),
                  !1
                );
              switch (!0) {
                case !!t.zone:
                case !!t.pubId:
                case !!t.inScreen:
                case !!t.inScreenPubID:
                case !!t.inSlot:
                case !!t.ICV:
                case !!t.video:
                case !!t.inVideo:
                case !!t.videoPubID:
                  break;
                default:
                  return (
                    Object(r.logWarn)(
                      "[GumGum] No product selected for the placement ".concat(
                        n,
                        ", please check your implementation."
                      )
                    ),
                    !1
                  );
              }
              return (
                !(
                  t.bidfloor &&
                  ("number" != typeof t.bidfloor || !isFinite(t.bidfloor))
                ) ||
                (Object(r.logWarn)("[GumGum] bidfloor must be a Number"), !1)
              );
            },
            buildRequests: function (e, t) {
              var n = [],
                i = t && t.gdprConsent,
                a = t && t.uspConsent,
                c = o.b.getConfig("bidderTimeout"),
                u = t && t.refererInfo && t.refererInfo.referer;
              return (
                Object(r._each)(e, function (e) {
                  var t,
                    o,
                    d = e.bidId,
                    p = e.mediaTypes,
                    f = void 0 === p ? {} : p,
                    y = e.params,
                    v = void 0 === y ? {} : y,
                    g = e.schain,
                    h = e.transactionId,
                    O = e.userId,
                    I = void 0 === O ? {} : O,
                    S = e.ortb2Imp,
                    C = (function (e, t, n) {
                      var r = Object.keys(e)[0] || "banner",
                        i = { floor: 0, currency: "USD" };
                      if ("function" == typeof n.getFloor) {
                        var o = n.getFloor({ mediaType: r, size: "*" }),
                          a = o.currency,
                          c = o.floor;
                        c && (i.floor = c),
                          a && (i.currency = a),
                          t &&
                            c &&
                            "USD" === a &&
                            (i.floor = Math.max(t, parseFloat(c)));
                      } else t && (i.floor = t);
                      return i;
                    })(f, v.bidfloor, e),
                    D = C.currency,
                    z = C.floor,
                    A = (function (e) {
                      var t = ["uid", "eid", "lipbid"];
                      return Object.keys(e).reduce(function (n, r) {
                        var i = e[r];
                        switch (b(i)) {
                          case "string":
                            n[r] = i;
                            break;
                          case "object":
                            var o = t.filter(function (e) {
                              return i.hasOwnProperty(e);
                            });
                            o.length && (n[r] = i[o[0]]);
                        }
                        return n;
                      }, {});
                    })(I),
                    k = [1, 1],
                    T = {},
                    R = "";
                  for (var U in A) T[U] = A[U];
                  if (
                    (Object(r.deepAccess)(S, "ext.data.pbadslot")
                      ? (R = Object(r.deepAccess)(S, "ext.data.pbadslot"))
                      : Object(r.deepAccess)(S, "ext.data.adserver.name") &&
                        (R = S.ext.data.adserver.adslot),
                    f.banner
                      ? (k = f.banner.sizes)
                      : f.video &&
                        ((k = f.video.playerSize),
                        (T = (function (e) {
                          var t = e.minduration,
                            n = e.maxduration,
                            i = e.linearity,
                            o = e.startdelay,
                            a = e.placement,
                            c = e.protocols,
                            u = void 0 === c ? [] : c,
                            d = e.playerSize,
                            s = void 0 === d ? [] : d,
                            p = Object(r.parseSizesInput)(s),
                            l = m(p[0] && p[0].split("x"), 2),
                            f = l[0],
                            b = l[1],
                            y = "";
                          return (
                            u.length && (y = u.join(",")),
                            {
                              mind: t,
                              maxd: n,
                              li: i,
                              sd: o,
                              pt: a,
                              pr: y,
                              viw: f,
                              vih: b,
                            }
                          );
                        })(f.video))),
                    w && (T.pv = w),
                    z && ((T.fp = z), (T.fpc = D)),
                    v.iriscat &&
                      "string" == typeof v.iriscat &&
                      (T.iriscat = v.iriscat),
                    v.irisid &&
                      "string" == typeof v.irisid &&
                      (T.irisid = v.irisid),
                    v.zone || v.pubId)
                  )
                    if (
                      (v.zone ? (T.t = v.zone) : (T.pubId = v.pubId),
                      (T.pi = 2),
                      v.slot)
                    ) {
                      var G = m(P(k), 2),
                        V = G[0],
                        E = G[1];
                      (T.maxw = V),
                        (T.maxh = E),
                        (T.si = v.slot),
                        (T.pi = 3),
                        (T.bf = k.reduce(function (e, t) {
                          return ""
                            .concat(e)
                            .concat(e && ",")
                            .concat(t[0], "x")
                            .concat(t[1]);
                        }, ""));
                    } else
                      v.native
                        ? ((T.ni = v.native), (T.pi = 5))
                        : f.video && (T.pi = 2 === f.video.linearity ? 6 : 7);
                  else
                    T = l(
                      l({}, T),
                      (function (e, t) {
                        var n = {};
                        e.inScreenPubID &&
                          ((n.pubId = e.inScreenPubID), (n.pi = 2));
                        e.inScreen && ((n.t = e.inScreen), (n.pi = 2));
                        if (e.inSlot) {
                          var r = m(P(t), 2),
                            i = r[0],
                            o = r[1];
                          (n.maxw = i),
                            (n.maxh = o),
                            (n.si = e.inSlot),
                            (n.pi = 3),
                            (n.bf = t.reduce(function (e, t) {
                              return ""
                                .concat(e)
                                .concat(e && ",")
                                .concat(t[0], "x")
                                .concat(t[1]);
                            }, ""));
                        }
                        e.ICV && ((n.ni = e.ICV), (n.pi = 5));
                        e.videoPubID && ((n.pubId = e.videoPubID), (n.pi = 7));
                        e.video && ((n.t = e.video), (n.pi = 7));
                        e.inVideo && ((n.t = e.inVideo), (n.pi = 6));
                        return n;
                      })(v, k)
                    );
                  i && (T.gdprApplies = i.gdprApplies ? 1 : 0),
                    T.gdprApplies && (T.gdprConsent = i.consentString),
                    a && (T.uspConsent = a),
                    g &&
                      g.nodes &&
                      (T.schain =
                        ((o = "".concat((t = g).ver, ",").concat(t.complete)),
                        t.nodes.map(function (e) {
                          (o += "!".concat(
                            encodeURIComponent(e.asi || ""),
                            ","
                          )),
                            (o += "".concat(
                              encodeURIComponent(e.sid || ""),
                              ","
                            )),
                            (o += "".concat(
                              encodeURIComponent(e.hp || ""),
                              ","
                            )),
                            (o += "".concat(
                              encodeURIComponent(e.rid || ""),
                              ","
                            )),
                            (o += "".concat(
                              encodeURIComponent(e.name || ""),
                              ","
                            )),
                            (o += "".concat(
                              encodeURIComponent(e.domain || "")
                            ));
                        }),
                        o)),
                    n.push({
                      id: d,
                      tmax: c,
                      tId: h,
                      pi: T.pi,
                      selector: v.selector,
                      sizes: k,
                      url: "https://g2.gumgum.com/hbid/imp",
                      method: "GET",
                      data: s(T, j(u), x(I), { gpid: R }),
                    });
                }),
                n
              );
            },
            interpretResponse: function (e, t) {
              var n = [],
                o = e.body;
              if (!o || o.err) {
                var a = t.data || {},
                  c = a.si || a.ni || a.t || a.pubId,
                  d = o ? o.err.drt : 18e5;
                (O[c] = { productId: a.pi, timestamp: new Date().getTime() }),
                  setTimeout(function () {
                    O[c] && delete O[c];
                  }, d),
                  Object(r.logWarn)(
                    "[GumGum] Please check the implementation for ".concat(c)
                  );
              }
              var p = s(
                  {
                    ad: { price: 0, id: 0, markup: "", width: 0, height: 0 },
                    pag: { pvid: 0 },
                    meta: { adomain: [], mediaType: "" },
                  },
                  o
                ),
                f = p.ad,
                b = f.price,
                y = f.id,
                v = f.markup,
                h = f.cur,
                I = f.width,
                j = f.height,
                x = f.maxw,
                P = f.maxh,
                C = p.cw,
                D = p.pag.pvid,
                z = p.jcsi,
                A = p.meta,
                k = A.adomain,
                T = A.mediaType,
                R = t.data || {},
                U = R.pi,
                G = 6 === U || 7 === U ? i.d : i.b,
                V = 3 === U && 9 === R.si,
                E = { advertiserDomains: k || [], mediaType: T || G },
                N = Object(r.parseSizesInput)(t.sizes);
              x && P
                ? (N = ["".concat(x, "x").concat(P)])
                : 5 === U && u()(N, "1x1")
                ? (N = ["1x1"])
                : 2 === U &&
                  u()(N, "1x1") &&
                  (N =
                    I && j
                      ? ["".concat(I, "x").concat(j)]
                      : Object(r.parseSizesInput)(t.sizes));
              var q = m(N[0].split("x"), 2),
                B = q[0],
                M = q[1];
              return (
                z && (o.jcsi = g),
                (w = D),
                y &&
                  n.push(
                    l(
                      l(
                        { ad: C ? S(C, s({}, o, { bidRequest: t })) : v },
                        G === i.d && { ad: v, vastXml: v }
                      ),
                      {},
                      {
                        mediaType: G,
                        cpm: V ? 0.1 : b,
                        creativeId: y,
                        currency: h || "USD",
                        height: M,
                        netRevenue: !0,
                        requestId: t.id,
                        ttl: 60,
                        width: B,
                        meta: E,
                      }
                    )
                  ),
                n
              );
            },
            getUserSyncs: function (e, t) {
              return t
                .map(function (e) {
                  return (e.body && e.body.pxs && e.body.pxs.scr) || [];
                })
                .reduce(function (e, t) {
                  return e.concat(t);
                }, [])
                .map(function (e) {
                  return { type: "f" === e.t ? "iframe" : "image", url: e.u };
                });
            },
            supportedMediaTypes: h,
          };
          Object(d.registerBidder)(C);
        }.call(t, n(40));
    },
  },
  [475]
);
pbjsChunk(
  [50],
  {
    17: function (e, r, t) {
      "use strict";
      (r.b = function (e) {
        var r = [];
        for (var t in e)
          if (e.hasOwnProperty(t))
            if ("pubProvidedId" === t) r = r.concat(e.pubProvidedId);
            else {
              var i = n(e[t], t);
              i && r.push(i);
            }
        return r;
      }),
        (r.a = function (e) {
          var r = [];
          return (
            e
              .filter(function (e) {
                return (
                  Object(i.isPlainObject)(e.idObj) &&
                  Object.keys(e.idObj).length
                );
              })
              .forEach(function (e) {
                Object.keys(e.idObj).forEach(function (t) {
                  Object(i.deepAccess)(e, "config.bidders") &&
                    Array.isArray(e.config.bidders) &&
                    Object(i.deepAccess)(a, t + ".source") &&
                    r.push({ source: a[t].source, bidders: e.config.bidders });
                });
              }),
            r
          );
        });
      var i = t(0),
        a = {
          intentIqId: { source: "intentiq.com", atype: 1 },
          naveggId: { source: "navegg.com", atype: 1 },
          pubcid: { source: "pubcid.org", atype: 1 },
          tdid: {
            source: "adserver.org",
            atype: 1,
            getUidExt: function () {
              return { rtiPartner: "TDID" };
            },
          },
          id5id: {
            getValue: function (e) {
              return e.uid;
            },
            source: "id5-sync.com",
            atype: 1,
            getUidExt: function (e) {
              if (e.ext) return e.ext;
            },
          },
          parrableId: {
            source: "parrable.com",
            atype: 1,
            getValue: function (e) {
              return e.eid ? e.eid : e.ccpaOptout ? "" : null;
            },
            getUidExt: function (e) {
              var r = Object(i.pick)(e, ["ibaOptout", "ccpaOptout"]);
              if (Object.keys(r).length) return r;
            },
          },
          idl_env: { source: "liveramp.com", atype: 3 },
          lipb: {
            getValue: function (e) {
              return e.lipbid;
            },
            source: "liveintent.com",
            atype: 3,
            getEidExt: function (e) {
              if (Array.isArray(e.segments) && e.segments.length)
                return { segments: e.segments };
            },
          },
          britepoolid: { source: "britepool.com", atype: 3 },
          dmdId: { source: "hcn.health", atype: 3 },
          lotamePanoramaId: { source: "crwdcntrl.net", atype: 1 },
          criteoId: { source: "criteo.com", atype: 1 },
          merkleId: {
            source: "merkleinc.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
            getUidExt: function (e) {
              return e && e.keyID ? { keyID: e.keyID } : void 0;
            },
          },
          netId: { source: "netid.de", atype: 1 },
          IDP: { source: "zeotap.com", atype: 1 },
          haloId: { source: "audigent.com", atype: 1 },
          quantcastId: { source: "quantcast.com", atype: 1 },
          nextrollId: { source: "nextroll.com", atype: 1 },
          idx: { source: "idx.lat", atype: 1 },
          connectid: { source: "verizonmedia.com", atype: 3 },
          fabrickId: { source: "neustar.biz", atype: 1 },
          mwOpenLinkId: { source: "mediawallahscript.com", atype: 1 },
          tapadId: { source: "tapad.com", atype: 1 },
          novatiq: {
            getValue: function (e) {
              return e.snowflake;
            },
            source: "novatiq.com",
            atype: 1,
          },
          uid2: {
            source: "uidapi.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
          },
          dapId: { source: "akamai.com", atype: 1 },
          deepintentId: { source: "deepintent.com", atype: 3 },
          admixerId: { source: "admixer.net", atype: 3 },
          adtelligentId: { source: "adtelligent.com", atype: 3 },
          amxId: { source: "amxrtb.com", atype: 1 },
          publinkId: { source: "epsilon.com", atype: 3 },
          kpuid: { source: "kpuid.com", atype: 3 },
          imuid: { source: "intimatemerger.com", atype: 1 },
        };
      function n(e, r) {
        var t = a[r];
        if (t && e) {
          var n = {};
          n.source = t.source;
          var s = Object(i.isFn)(t.getValue) ? t.getValue(e) : e;
          if (Object(i.isStr)(s)) {
            var c = { id: s, atype: t.atype };
            if (Object(i.isFn)(t.getUidExt)) {
              var d = t.getUidExt(e);
              d && (c.ext = d);
            }
            if (((n.uids = [c]), Object(i.isFn)(t.getEidExt))) {
              var o = t.getEidExt(e);
              o && (n.ext = o);
            }
            return n;
          }
        }
        return null;
      }
    },
    502: function (e, r, t) {
      e.exports = t(503);
    },
    503: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return m;
        }),
        (r.ImproveDigitalAdServerJSClient = v);
      var i = t(0),
        a = t(1),
        n = t(3),
        s = t(2),
        c = t(13),
        d = t(17),
        o = t(12),
        u = t.n(o);
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var l = "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
        b = ["skip", "skipmin", "skipafter"],
        m = {
          version: "7.4.0",
          code: "improvedigital",
          gvlid: 253,
          aliases: ["id"],
          supportedMediaTypes: [s.b, s.c, s.d],
          isBidRequestValid: function (e) {
            return !!(
              e &&
              e.params &&
              (e.params.placementId ||
                (e.params.placementKey && e.params.publisherId))
            );
          },
          buildRequests: function (e, r) {
            var t = e.map(function (e) {
                return (function (e) {
                  var r = Object(i.getBidIdParameter)("adUnitCode", e) || null,
                    t =
                      Object(i.getBidIdParameter)("placementId", e.params) ||
                      null,
                    a = null,
                    c = null;
                  null === t &&
                    ((a =
                      Object(i.getBidIdParameter)("publisherId", e.params) ||
                      null),
                    (c =
                      Object(i.getBidIdParameter)("placementKey", e.params) ||
                      null));
                  var d =
                      Object(i.getBidIdParameter)("keyValues", e.params) ||
                      null,
                    o = Object(i.getBidIdParameter)("size", e.params) || null,
                    p = Object(i.getBidIdParameter)("bidId", e),
                    l = Object(i.getBidIdParameter)("transactionId", e),
                    m = n.b.getConfig("currency.adServerCurrency"),
                    g = {};
                  f(e) && (g.adTypes = [s.d]);
                  (f(e) || y(e)) &&
                    (g.video = (function (e) {
                      var r = {};
                      return (
                        Object.keys(Object(e.mediaTypes.video))
                          .filter(function (e) {
                            return u()(b, e);
                          })
                          .forEach(function (t) {
                            r[t] = e.mediaTypes.video[t];
                          }),
                        Object.keys(Object(e.params.video))
                          .filter(function (e) {
                            return u()(b, e);
                          })
                          .forEach(function (t) {
                            r[t] = e.params.video[t];
                          }),
                        r
                      );
                    })(e));
                  t
                    ? (g.placementId = t)
                    : (a && (g.publisherId = a), c && (g.placementKey = c));
                  d && (g.keyValues = d);
                  !0 === n.b.getConfig("improvedigital.usePrebidSizes") &&
                  !f(e) &&
                  !y(e) &&
                  e.sizes &&
                  e.sizes.length > 0
                    ? (g.format = e.sizes)
                    : o &&
                      o.w &&
                      o.h &&
                      ((g.size = {}), (g.size.h = o.h), (g.size.w = o.w));
                  p && (g.id = p);
                  r && (g.adUnitId = r);
                  l && (g.transactionId = l);
                  m && (g.currency = m);
                  var h = (function (e) {
                      if (!Object(i.isFn)(e.getFloor)) return null;
                      var r = e.getFloor({
                        currency: "USD",
                        mediaType: "*",
                        size: "*",
                      });
                      if (
                        Object(i.isPlainObject)(r) &&
                        !isNaN(r.floor) &&
                        "USD" === r.currency
                      )
                        return r.floor;
                      return null;
                    })(e),
                    v = null;
                  h ||
                    ((h = Object(i.getBidIdParameter)("bidFloor", e.params)),
                    (v = Object(i.getBidIdParameter)("bidFloorCur", e.params)));
                  h &&
                    ((g.bidFloor = h),
                    (g.bidFloorCur = v ? v.toUpperCase() : "USD"));
                  return g;
                })(e);
              }),
              a = new v("hb"),
              c = {
                singleRequestMode:
                  !0 === n.b.getConfig("improvedigital.singleRequest"),
                returnObjType: a.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT,
                libVersion: this.version,
              };
            if (
              (r &&
                r.gdprConsent &&
                r.gdprConsent.consentString &&
                (c.gdpr = r.gdprConsent.consentString),
              r && r.uspConsent && (c.usPrivacy = r.uspConsent),
              r &&
                r.refererInfo &&
                r.refererInfo.referer &&
                (c.referrer = r.refererInfo.referer),
              (c.schain = e[0].schain),
              e[0].userId)
            ) {
              var o = Object(d.b)(e[0].userId);
              o.length && Object(i.deepSetValue)(c, "user.ext.eids", o);
            }
            var p = a.createRequest(t, c);
            return (
              p.errors &&
                p.errors.length > 0 &&
                Object(i.logError)("ID WARNING 0x01"),
              p.requests.forEach(function (e) {
                return (e.bidderRequest = r);
              }),
              p.requests
            );
          },
          interpretResponse: function (e, r) {
            var t = r.bidderRequest,
              a = [];
            return (
              Object(i._each)(e.body.bid, function (e) {
                if (
                  e.price &&
                  null !== e.price &&
                  !e.hasOwnProperty("errorCode") &&
                  (e.adm || e.native)
                ) {
                  var r = Object(i.getBidRequest)(e.id, [t]),
                    n = {};
                  if (e.native)
                    (n.native = (function (e) {
                      var r = {};
                      if (!e || !Object(i.isArray)(e.assets)) return null;
                      e.assets.forEach(function (e) {
                        if (e.title) r.title = e.title.text;
                        else if (e.data)
                          switch (e.data.type) {
                            case 1:
                              r.sponsoredBy = e.data.value;
                              break;
                            case 2:
                              r.body = e.data.value;
                              break;
                            case 3:
                              r.rating = e.data.value;
                              break;
                            case 4:
                              r.likes = e.data.value;
                              break;
                            case 5:
                              r.downloads = e.data.value;
                              break;
                            case 6:
                              r.price = e.data.value;
                              break;
                            case 7:
                              r.salePrice = e.data.value;
                              break;
                            case 8:
                              r.phone = e.data.value;
                              break;
                            case 9:
                              r.address = e.data.value;
                              break;
                            case 10:
                              r.body2 = e.data.value;
                              break;
                            case 11:
                              r.displayUrl = e.data.value;
                              break;
                            case 12:
                              r.cta = e.data.value;
                          }
                        else if (e.img)
                          switch (e.img.type) {
                            case 2:
                              r.icon = {
                                url: e.img.url,
                                width: e.img.w,
                                height: e.img.h,
                              };
                              break;
                            case 3:
                              r.image = {
                                url: e.img.url,
                                width: e.img.w,
                                height: e.img.h,
                              };
                          }
                      }),
                        e.eventtrackers
                          ? ((r.impressionTrackers = []),
                            e.eventtrackers.forEach(function (e) {
                              if (1 === e.event)
                                switch (e.method) {
                                  case 1:
                                    r.impressionTrackers.push(e.url);
                                    break;
                                  case 2:
                                    r.javascriptTrackers =
                                      '<script src="'.concat(
                                        e.url,
                                        '"></script>'
                                      );
                                }
                            }))
                          : ((r.impressionTrackers = e.imptrackers || []),
                            (r.javascriptTrackers = e.jstracker));
                      e.link &&
                        ((r.clickUrl = e.link.url),
                        (r.clickTrackers = e.link.clicktrackers));
                      e.privacy && (r.privacyLink = e.privacy);
                      return r;
                    })(e.native)),
                      (n.ortbNative = e.native),
                      e.nurl && n.native.impressionTrackers.unshift(e.nurl),
                      (n.mediaType = s.c);
                  else if (e.ad_type && "video" === e.ad_type)
                    (n.vastXml = e.adm),
                      (n.mediaType = s.d),
                      y(r) &&
                        ((n.adResponse = {
                          content: n.vastXml,
                          height: e.h,
                          width: e.w,
                        }),
                        (n.renderer = (function (e) {
                          var r = c.a.install({
                            id: e.adUnitCode,
                            url: l,
                            loaded: !1,
                            config: Object(i.deepAccess)(e, "renderer.options"),
                            adUnitCode: e.adUnitCode,
                          });
                          try {
                            r.setRender(g);
                          } catch (e) {
                            Object(i.logWarn)(
                              "Prebid Error calling setRender on renderer",
                              e
                            );
                          }
                          return r;
                        })(r)));
                  else {
                    var d = "";
                    e.nurl &&
                      e.nurl.length > 0 &&
                      (d = '<img src="'.concat(
                        e.nurl,
                        '" width="0" height="0" style="display:none">'
                      )),
                      (n.ad = ""
                        .concat(d, "<script>")
                        .concat(e.adm, "</script>")),
                      (n.mediaType = s.b);
                  }
                  if (
                    ((n.cpm = parseFloat(e.price)),
                    (n.creativeId = e.crid),
                    (n.currency = e.currency
                      ? e.currency.toUpperCase()
                      : "USD"),
                    Object(i.isNumber)(e.lid) &&
                      e.buying_type &&
                      "rtb" !== e.buying_type)
                  )
                    n.dealId = e.lid;
                  else if (
                    Array.isArray(e.lid) &&
                    Array.isArray(e.buying_type) &&
                    e.lid.length === e.buying_type.length
                  ) {
                    var o = !1;
                    e.buying_type.forEach(function (r, t) {
                      o ||
                        (r && "rtb" !== r && ((o = !0), (n.dealId = e.lid[t])));
                    });
                  }
                  (n.height = e.h),
                    (n.netRevenue = !!e.isNet && e.isNet),
                    (n.requestId = e.id),
                    (n.ttl = 300),
                    (n.width = e.w),
                    (n.width && n.height) || ((n.width = 1), (n.height = 1)),
                    e.adomain && (n.meta = { advertiserDomains: e.adomain }),
                    a.push(n);
                }
              }),
              a
            );
          },
          getUserSyncs: function (e, r) {
            if (e.pixelEnabled) {
              var t = [];
              return (
                r.forEach(function (e) {
                  e.body.bid.forEach(function (e) {
                    Object(i.isArray)(e.sync) &&
                      e.sync.forEach(function (e) {
                        -1 === t.indexOf(e) && t.push(e);
                      });
                  });
                }),
                t.map(function (e) {
                  return { type: "image", url: e };
                })
              );
            }
            return [];
          },
        };
      function f(e) {
        var r = Object.keys(Object(i.deepAccess)(e, "mediaTypes", {})),
          t = Object(i.deepAccess)(e, "mediaTypes.video"),
          a = Object(i.deepAccess)(e, "mediaTypes.video.context");
        return (
          "video" === e.mediaType || (1 === r.length && t && "outstream" !== a)
        );
      }
      function y(e) {
        var r = Object(i.deepAccess)(e, "mediaTypes.video"),
          t = Object(i.deepAccess)(e, "mediaTypes.video.context");
        return r && "outstream" === t;
      }
      function g(e) {
        e.renderer.push(function () {
          window.ANOutstreamVideo.renderAd(
            {
              sizes: [e.width, e.height],
              targetId: e.adUnitCode,
              adResponse: e.adResponse,
              rendererOptions: e.renderer.getConfig(),
            },
            h.bind(null, e)
          );
        });
      }
      function h(e, r, t) {
        e.renderer.handleVideoEvent({ id: r, eventName: t });
      }
      function v(e) {
        (this.CONSTANTS = {
          AD_SERVER_BASE_URL: "ice.360yield.com",
          END_POINT: e || "hb",
          AD_SERVER_URL_PARAM: "jsonp=",
          CLIENT_VERSION: "JS-6.4.0",
          MAX_URL_LENGTH: 2083,
          ERROR_CODES: { MISSING_PLACEMENT_PARAMS: 2, LIB_VERSION_MISSING: 3 },
          RETURN_OBJ_TYPE: { DEFAULT: 0, URL_PARAMS_SPLIT: 1 },
        }),
          (this.getErrorReturn = function (e) {
            return { idMappings: {}, requests: {}, errorCode: e };
          }),
          (this.createRequest = function (e, r, t) {
            if (!r.libVersion)
              return this.getErrorReturn(
                this.CONSTANTS.ERROR_CODES.LIB_VERSION_MISSING
              );
            (r.returnObjType =
              r.returnObjType || this.CONSTANTS.RETURN_OBJ_TYPE.DEFAULT),
              (r.adServerBaseUrl =
                "https://" +
                (r.adServerBaseUrl || this.CONSTANTS.AD_SERVER_BASE_URL));
            var a,
              n = [];
            if (Object(i.isArray)(e))
              for (var s = 0; s < e.length; s++)
                (a = this.createImpressionObject(e[s])), n.push(a);
            else (a = this.createImpressionObject(e)), n.push(a);
            var c = !0;
            r.returnObjType ===
              this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT && (c = !1);
            var d = { requests: [] };
            c && (d.idMappings = []);
            for (
              var o = null,
                u = ""
                  .concat(r.adServerBaseUrl, "/")
                  .concat(this.CONSTANTS.END_POINT, "?")
                  .concat(this.CONSTANTS.AD_SERVER_URL_PARAM),
                p = { bid_request: this.createBasicBidRequestObject(r, t) },
                l = 0;
              l < n.length;
              l++
            )
              if ((a = n[l]).errorCode)
                (o = o || []).push({
                  errorCode: a.errorCode,
                  adUnitId: a.adUnitId,
                });
              else {
                c &&
                  d.idMappings.push({
                    adUnitId: a.adUnitId,
                    id: a.impressionObject.id,
                  }),
                  (p.bid_request.imp = p.bid_request.imp || []),
                  p.bid_request.imp.push(a.impressionObject);
                var b = !1;
                (u + encodeURIComponent(JSON.stringify(p))).length >
                  this.CONSTANTS.MAX_URL_LENGTH &&
                  ((b = !0),
                  p.bid_request.imp.length > 1 &&
                    (p.bid_request.imp.pop(), c && d.idMappings.pop(), l--)),
                  (!b && r.singleRequestMode && l !== n.length - 1) ||
                    (d.requests.push(this.formatRequest(r, p)),
                    (p = {
                      bid_request: this.createBasicBidRequestObject(r, t),
                    }));
              }
            return o && (d.errors = o), d;
          }),
          (this.formatRequest = function (e, r) {
            switch (e.returnObjType) {
              case this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT:
                return {
                  method: "GET",
                  url: ""
                    .concat(e.adServerBaseUrl, "/")
                    .concat(this.CONSTANTS.END_POINT),
                  data: ""
                    .concat(this.CONSTANTS.AD_SERVER_URL_PARAM)
                    .concat(encodeURIComponent(JSON.stringify(r))),
                };
              default:
                return {
                  url:
                    "".concat(e.adServerBaseUrl, "/") +
                    ""
                      .concat(this.CONSTANTS.END_POINT, "?")
                      .concat(this.CONSTANTS.AD_SERVER_URL_PARAM) +
                    encodeURIComponent(JSON.stringify(r)),
                };
            }
          }),
          (this.createBasicBidRequestObject = function (e, r) {
            var t = { secure: 1 };
            if (
              (e.requestId
                ? (t.id = e.requestId)
                : (t.id = Object(i.getUniqueIdentifierStr)()),
              e.domain && (t.domain = e.domain),
              e.page && (t.page = e.page),
              e.ref && (t.ref = e.ref),
              e.callback && (t.callback = e.callback),
              e.libVersion &&
                (t.version =
                  e.libVersion + "-" + this.CONSTANTS.CLIENT_VERSION),
              e.referrer && (t.referrer = e.referrer),
              (e.gdpr || 0 === e.gdpr) && (t.gdpr = e.gdpr),
              e.usPrivacy && (t.us_privacy = e.usPrivacy),
              e.schain && (t.schain = e.schain),
              e.user && (t.user = e.user),
              r)
            )
              for (var a in r) t[a] = r[a];
            return t;
          }),
          (this.createImpressionObject = function (e) {
            var r = {},
              t = {};
            if (
              ((r.impressionObject = t),
              e.id
                ? (t.id = e.id)
                : (t.id = Object(i.getUniqueIdentifierStr)()),
              e.adTypes && (t.ad_types = e.adTypes),
              e.adUnitId && (r.adUnitId = e.adUnitId),
              e.currency && (t.currency = e.currency.toUpperCase()),
              e.bidFloor && (t.bidfloor = e.bidFloor),
              e.bidFloorCur && (t.bidfloorcur = e.bidFloorCur.toUpperCase()),
              e.placementId && (t.pid = e.placementId),
              e.publisherId && (t.pubid = e.publisherId),
              e.placementKey && (t.pkey = e.placementKey),
              e.transactionId && (t.tid = e.transactionId),
              !Object(i.isEmpty)(e.video))
            ) {
              var a = p({}, e.video);
              1 !== a.skip &&
                (delete a.skipmin,
                delete a.skipafter,
                0 !== a.skip &&
                  (Object(i.logWarn)(
                    "video.skip: invalid value '".concat(
                      a.skip,
                      "'. Expected 0 or 1"
                    )
                  ),
                  delete a.skip)),
                Object(i.isEmpty)(a) || (t.video = a);
            }
            if (e.keyValues)
              for (var n in e.keyValues)
                for (var s = 0; s < e.keyValues[n].length; s++)
                  (t.kvw = t.kvw || {}),
                    (t.kvw[n] = t.kvw[n] || []),
                    t.kvw[n].push(e.keyValues[n][s]);
            if (
              ((t.banner = {}),
              e.size &&
                e.size.w &&
                e.size.h &&
                ((t.banner.w = e.size.w), (t.banner.h = e.size.h)),
              e.format && Object(i.isArray)(e.format))
            ) {
              var c = e.format
                .filter(function (e) {
                  return (
                    2 === e.length &&
                    Object(i.isInteger)(e[0]) &&
                    Object(i.isInteger)(e[1]) &&
                    e[0] >= 0 &&
                    e[1] >= 0
                  );
                })
                .map(function (e) {
                  return { w: e[0], h: e[1] };
                });
              c.length > 0 && (t.banner.format = c);
            }
            return (
              t.pid ||
                t.pubid ||
                t.pkey ||
                (t.banner && t.banner.w && t.banner.h) ||
                ((r.impressionObject = null),
                (r.errorCode =
                  this.CONSTANTS.ERROR_CODES.MISSING_PLACEMENT_PARAMS)),
              r
            );
          });
      }
      Object(a.registerBidder)(m);
    },
  },
  [502]
);
pbjsChunk(
  [214],
  {
    532: function (e, r, t) {
      e.exports = t(533);
    },
    533: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return $;
        });
      var i = t(0),
        n = t(2),
        a = t(3),
        o = t(11),
        s = t.n(o),
        d = t(1),
        c = t(24),
        p = t(12),
        u = t.n(p),
        l = t(13);
      function m(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return O(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          h(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function b(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function y(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? b(Object(t), !0).forEach(function (r) {
                v(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function v(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function g(e, r) {
        var t =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = h(e)) ||
            (r && e && "number" == typeof e.length)
          ) {
            t && (e = t);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          o = !0,
          s = !1;
        return {
          s: function () {
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (a = e);
          },
          f: function () {
            try {
              o || null == t.return || t.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function h(e, r) {
        if (e) {
          if ("string" == typeof e) return O(e, r);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? O(e, r)
              : void 0
          );
        }
      }
      function O(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
        return i;
      }
      var j = "roundel",
        x = [n.b, n.d],
        I = 8e3,
        w = { JPY: 1 },
        A = "p",
        P = "x",
        S = {
          SITE: [
            "id",
            "name",
            "domain",
            "cat",
            "sectioncat",
            "pagecat",
            "page",
            "ref",
            "search",
            "mobile",
            "privacypolicy",
            "publisher",
            "content",
            "keywords",
            "ext",
          ],
          USER: [
            "id",
            "buyeruid",
            "yob",
            "gender",
            "keywords",
            "customdata",
            "geo",
            "data",
            "ext",
          ],
        },
        z = {
          "liveramp.com": "idl",
          "netid.de": "NETID",
          "neustar.biz": "fabrickId",
          "zeotap.com": "zeotapIdPlus",
          "uidapi.com": "UID2",
          "adserver.org": "TDID",
        },
        T = [
          "britepoolid",
          "id5id",
          "lipbid",
          "haloId",
          "criteoId",
          "lotamePanoramaId",
          "merkleId",
          "parrableId",
          "connectid",
          "tapadId",
          "quantcastId",
          "pubcid",
          "TDID",
          "flocId",
        ],
        C = ["mimes", "minduration", "maxduration"],
        k = [
          "mimes",
          "minduration",
          "maxduration",
          "protocols",
          "protocol",
          "startdelay",
          "placement",
          "linearity",
          "skip",
          "skipmin",
          "skipafter",
          "sequence",
          "battr",
          "maxextended",
          "minbitrate",
          "maxbitrate",
          "boxingallowed",
          "playbackmethod",
          "playbackend",
          "delivery",
          "pos",
          "companionad",
          "api",
          "companiontype",
          "ext",
          "playerSize",
          "w",
          "h",
        ];
      function E(e) {
        var r = {};
        (r.id = e.bidId),
          (r.ext = {}),
          (r.ext.siteID = e.params.siteId),
          !e.params.hasOwnProperty("id") ||
            ("string" != typeof e.params.id &&
              "number" != typeof e.params.id) ||
            (r.ext.sid = String(e.params.id));
        var t = Object(i.deepAccess)(e, "ortb2Imp.ext.data.adserver.adslot");
        return t && (r.ext.dfp_ad_unit_code = t), r;
      }
      function D(e, r, t) {
        var n = null,
          a = null;
        if (
          (e.params.bidFloor &&
            e.params.bidFloorCur &&
            (n = { floor: e.params.bidFloor, currency: e.params.bidFloorCur }),
          Object(i.isFn)(e.getFloor))
        ) {
          var o = "*",
            s = "*";
          if (t && Object(i.contains)(x, t)) {
            var d = r[t];
            (o = t), (s = [d.w, d.h]);
          }
          try {
            a = e.getFloor({ mediaType: o, size: s });
          } catch (e) {
            Object(i.logWarn)(
              "priceFloors module call getFloor failed, error : ",
              e
            );
          }
        }
        a
          ? ((r.bidfloor = a.floor),
            (r.bidfloorcur = a.currency),
            (r.ext.fl = A))
          : n &&
            ((r.bidfloor = n.floor),
            (r.bidfloorcur = n.currency),
            (r.ext.fl = P));
      }
      function F(e, r, t) {
        var a = {},
          o = !(!Object(i.deepAccess)(e, "exp") || !Object(i.isInteger)(e.exp)),
          s =
            Object(i.deepAccess)(e, "dealid") ||
            Object(i.deepAccess)(e, "ext.dealid");
        return (
          w.hasOwnProperty(r)
            ? (a.cpm = e.price / w[r])
            : (a.cpm = e.price / 100),
          (a.requestId = e.impid),
          s && (a.dealId = s),
          (a.netRevenue = true),
          (a.currency = r),
          (a.creativeId = e.hasOwnProperty("crid") ? e.crid : "-"),
          Object(i.deepAccess)(e, "ext.vasturl")
            ? ((a.vastUrl = e.ext.vasturl),
              (a.width = t.video.w),
              (a.height = t.video.h),
              (a.mediaType = n.d),
              (a.mediaTypes = t.mediaTypes),
              (a.ttl = o ? e.exp : 3600))
            : ((a.ad = e.adm),
              (a.width = e.w),
              (a.height = e.h),
              (a.mediaType = n.b),
              (a.ttl = o ? e.exp : 300)),
          (a.meta = {}),
          (a.meta.networkId = Object(i.deepAccess)(e, "ext.dspid")),
          (a.meta.brandId = Object(i.deepAccess)(e, "ext.advbrandid")),
          (a.meta.brandName = Object(i.deepAccess)(e, "ext.advbrand")),
          e.adomain &&
            e.adomain.length > 0 &&
            (a.meta.advertiserDomains = e.adomain),
          a
        );
      }
      function R(e) {
        return (
          Array.isArray(e) &&
          2 === e.length &&
          Object(i.isInteger)(e[0]) &&
          Object(i.isInteger)(e[1])
        );
      }
      function q() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (R(e)) return e[0] === r[0] && e[1] === r[1];
        for (var t = 0; t < e.length; t++)
          if (e[t][0] === r[0] && e[t][1] === r[1]) return !0;
        return !1;
      }
      function B(e, r) {
        var t = [];
        e ||
          Object(i.logWarn)(
            "IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit"
          );
        var n,
          a = g(C);
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var o = n.value,
              s = e && e.hasOwnProperty(o),
              d = r && r.hasOwnProperty(o);
            s ||
              d ||
              t.push(
                "IX Bid Adapter: ".concat(
                  o,
                  " is not included in either the adunit or params level"
                )
              );
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
        var c = e && e.hasOwnProperty("protocol"),
          p = e && e.hasOwnProperty("protocols"),
          u = r && r.hasOwnProperty("protocol"),
          l = r && r.hasOwnProperty("protocols");
        return (
          c ||
            p ||
            u ||
            l ||
            t.push(
              "IX Bid Adapter: protocol/protcols is not included in either the adunit or params level"
            ),
          t
        );
      }
      function U() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return R(e) ? e : !!R(e[0]) && e[0];
      }
      function N(e, r, t) {
        if (e)
          return y(
            y(
              {},
              s()(t, function (r) {
                return r.bidId === e;
              })
            ),
            s()(r, function (r) {
              return r.id === e;
            })
          );
      }
      function _(e, r, t, o) {
        var s = "https://htlb.casalemedia.com/cygnus",
          d = (function (e, r) {
            var t = [],
              n = {};
            if (Object(i.isArray)(e)) {
              var a,
                o = g(e);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var s = a.value;
                  z[s.source] &&
                    Object(i.deepAccess)(s, "uids.0") &&
                    ((n[s.source] = !0),
                    (s.uids[0].ext = { rtiPartner: z[s.source] }),
                    delete s.uids[0].atype,
                    t.push(s));
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
            }
            if (r && r.id && r.version) {
              var d = {
                source: "chrome.com",
                uids: [
                  { id: r.id, ext: { rtiPartner: "flocId", ver: r.version } },
                ],
              };
              t.push(d), (n["chrome.com"] = !0);
            }
            return { toSend: t, seenSources: n };
          })(
            Object(i.deepAccess)(e, "0.userIdAsEids"),
            Object(i.deepAccess)(e, "0.userId.flocId")
          ),
          c = d.toSend;
        if (
          window.headertag &&
          "function" == typeof window.headertag.getIdentityInfo
        ) {
          var p = window.headertag.getIdentityInfo();
          if (p && "object" === f(p))
            for (var u in p)
              if (p.hasOwnProperty(u)) {
                var l = p[u];
                !l.responsePending &&
                  l.data &&
                  "object" === f(l.data) &&
                  Object.keys(l.data).length &&
                  !d.seenSources[l.data.source] &&
                  c.push(l.data);
              }
        }
        if (r && r.bidderCode === j && !d.seenSources["liveramp.com"])
          return [];
        var b = {};
        (b.id = e[0].bidderRequestId.toString()),
          (b.site = {}),
          (b.ext = {}),
          (b.ext.source = "prebid"),
          (b.ext.ixdiag = {}),
          (b.ext.ixdiag.msd = 0),
          (b.ext.ixdiag.msi = 0),
          (b.imp = []);
        var v = (function (e) {
          for (
            var r = e
                .map(function (e) {
                  return e.transactionId;
                })
                .filter(function (e, r, t) {
                  return t.indexOf(e) === r;
                }),
              t = {
                mfu: 0,
                bu: 0,
                iu: 0,
                nu: 0,
                ou: 0,
                allu: 0,
                ren: !1,
                version: "5.16.0",
                userIds: J(e[0]),
              },
              n = function (n) {
                if (
                  ((o = e.filter(function (e) {
                    return e.transactionId === r[n];
                  })[0]),
                  Object(i.deepAccess)(o, "mediaTypes"))
                ) {
                  if (
                    (Object.keys(o.mediaTypes).length > 1 && t.mfu++,
                    Object(i.deepAccess)(o, "mediaTypes.native") && t.nu++,
                    Object(i.deepAccess)(o, "mediaTypes.banner") && t.bu++,
                    "outstream" ===
                      Object(i.deepAccess)(o, "mediaTypes.video.context"))
                  ) {
                    t.ou++;
                    var a =
                      "object" ===
                      f(
                        Object(i.deepAccess)(o, "renderer") ||
                          Object(i.deepAccess)(o, "mediaTypes.video.renderer")
                      );
                    t.ren = t.ren && a ? Object(i.deepAccess)(t, "ren") : a;
                  }
                  "instream" ===
                    Object(i.deepAccess)(o, "mediaTypes.video.context") &&
                    t.iu++,
                    t.allu++;
                }
              },
              a = 0;
            a < r.length;
            a++
          ) {
            var o;
            n(a);
          }
          return t;
        })(e);
        for (var h in v) b.ext.ixdiag[h] = v[h];
        if (
          (e[0].schain && (b.source = { ext: { schain: e[0].schain } }),
          c.length > 0 && ((b.user = {}), (b.user.eids = c)),
          document.referrer &&
            "" !== document.referrer &&
            (b.site.ref = document.referrer),
          r)
        ) {
          if (r.gdprConsent) {
            var O = r.gdprConsent;
            O.hasOwnProperty("gdprApplies") &&
              (b.regs = { ext: { gdpr: O.gdprApplies ? 1 : 0 } }),
              O.hasOwnProperty("consentString") &&
                ((b.user = b.user || {}),
                (b.user.ext = { consent: O.consentString || "" }),
                O.hasOwnProperty("addtlConsent") &&
                  O.addtlConsent &&
                  (b.user.ext.consented_providers_settings = {
                    consented_providers: O.addtlConsent,
                  }));
          }
          r.uspConsent &&
            Object(i.deepSetValue)(b, "regs.ext.us_privacy", r.uspConsent),
            r.refererInfo && (b.site.page = r.refererInfo.referer);
        }
        a.b.getConfig("coppa") && Object(i.deepSetValue)(b, "regs.coppa", 1);
        var x = {};
        (x.s = e[0].params.siteId),
          (x.v = o),
          (x.ac = "j"),
          (x.sd = 1),
          8.1 === o && (x.nf = 1);
        var w = (r && r.bidderCode) || "ix",
          A = a.b.getConfig(w),
          P = [],
          T = 0,
          C = Object.keys(t),
          k = ""
            .concat(s)
            .concat(
              Object(i.parseQueryStringParameters)(
                y(y({}, x), {}, { r: JSON.stringify(b) })
              )
            ).length;
        if (k > I)
          return (
            Object(i.logError)(
              "ix bidder: Base request size has exceeded maximum request size."
            ),
            P
          );
        var E = k,
          D = 0,
          F = !1;
        if (A) {
          if ("object" === f(A.firstPartyData)) {
            var R = A.firstPartyData,
              q = "?";
            for (var B in R)
              R.hasOwnProperty(B) &&
                (q += ""
                  .concat(encodeURIComponent(B), "=")
                  .concat(encodeURIComponent(R[B]), "&"));
            (q = q.slice(0, -1)),
              (D = encodeURIComponent(q).length) < I
                ? ("page" in b.site ? (b.site.page += q) : (b.site.page = q),
                  (E += D))
                : Object(i.logError)(
                    "ix bidder: IX config FPD request size has exceeded maximum request size."
                  );
          }
          "number" == typeof A.timeout && (x.t = A.timeout),
            "boolean" == typeof A.detectMissingSizes
              ? (b.ext.ixdiag.dms = A.detectMissingSizes)
              : (b.ext.ixdiag.dms = !0);
        }
        for (
          var U = function (r) {
              if (E >= I || P.length >= 4) return "break";
              for (
                var o = t[C[r]],
                  d = o.missingCount,
                  c = void 0 === d ? 0 : d,
                  p = o.missingImps,
                  u = void 0 === p ? [] : p,
                  l = o.ixImps,
                  f = !1,
                  v = I - E,
                  g = {
                    ixImps: void 0 === l ? [] : l,
                    missingBannerImpressions: u,
                  },
                  h = Object.keys(g)
                    .map(function (e) {
                      return g[e];
                    })
                    .filter(function (e) {
                      return Array.isArray(e);
                    })
                    .reduce(function (e, r) {
                      return e.concat.apply(e, m(r));
                    }, []),
                  O = encodeURIComponent(
                    JSON.stringify({ impressionObjects: h })
                  ).length;
                h.length && O > v;

              )
                (f = !0),
                  h.pop(),
                  (O = encodeURIComponent(
                    JSON.stringify({ impressionObjects: h })
                  ).length);
              if (h.length && (n.b in h[0])) {
                var j = h[0],
                  w = {
                    id: j.id,
                    banner: {
                      topframe: j.banner.topframe,
                      format: h.map(function (e) {
                        var r = e.banner;
                        return { w: r.w, h: r.h, ext: e.ext };
                      }),
                    },
                  };
                ("bidfloor" in h[0]) && (w.bidfloor = h[0].bidfloor),
                  ("bidfloorcur" in h[0]) && (w.bidfloorcur = h[0].bidfloorcur),
                  b.imp.push(w),
                  (b.ext.ixdiag.msd += c),
                  (b.ext.ixdiag.msi += u.length);
              } else {
                var A;
                (A = b.imp).push.apply(A, m(h));
              }
              E += O;
              var z = a.b.getConfig("ortb2") || {};
              if (!Object(i.isEmpty)(z) && !F) {
                b.ext.ixdiag.fpd = !0;
                var D = y({}, z.site || z.context);
                Object.keys(D).forEach(function (e) {
                  -1 === S.SITE.indexOf(e) && delete D[e];
                });
                var R = y({}, z.user);
                Object.keys(R).forEach(function (e) {
                  -1 === S.USER.indexOf(e) && delete R[e];
                });
                var q = Object(i.deepClone)(b);
                if (
                  ((q.site = Object(i.mergeDeep)({}, q.site, D)),
                  (q.user = Object(i.mergeDeep)({}, q.user, R)),
                  ""
                    .concat(s)
                    .concat(
                      Object(i.parseQueryStringParameters)(
                        y(y({}, x), {}, { r: JSON.stringify(q) })
                      )
                    ).length < I)
                ) {
                  (b.site = Object(i.mergeDeep)({}, b.site, D)),
                    (b.user = Object(i.mergeDeep)({}, b.user, R)),
                    (F = !0);
                  var B = encodeURIComponent(
                    JSON.stringify(y(y({}, D), R))
                  ).length;
                  E += B;
                } else
                  Object(i.logError)(
                    "ix bidder: FPD request size has exceeded maximum request size."
                  );
              }
              var U = r === C.length - 1;
              if (f || U) {
                var N = Object(i.deepClone)(x);
                (U && !T) || ((b.ext.ixdiag.sn = T), (N.sn = T)),
                  T++,
                  (N.r = JSON.stringify(b)),
                  P.push({
                    method: "GET",
                    url: s,
                    data: N,
                    validBidRequests: e,
                  }),
                  (E = k),
                  (b.imp = []),
                  (b.ext.ixdiag.msd = 0),
                  (b.ext.ixdiag.msi = 0),
                  (F = !1);
              }
            },
            N = 0;
          N < C.length;
          N++
        ) {
          if ("break" === U(N)) break;
        }
        return P;
      }
      function J(e) {
        var r = e.userId || {};
        return T.filter(function (e) {
          return r[e];
        });
      }
      function M(e, r) {
        if (r)
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            if (r[0] === i[0] && r[1] === i[1]) {
              e.splice(t, 1);
              break;
            }
          }
      }
      function X(e, r) {
        var t = (function (e) {
          var r = E(e),
            t = Object(i.deepAccess)(e, "mediaTypes.video"),
            a = Object(i.deepAccess)(e, "params.video");
          if (B(t, a).length) return {};
          for (var o in ((r.video = a
            ? Object(i.deepClone)(e.params.video)
            : {}),
          t))
            -1 === k.indexOf(o) ||
              r.video.hasOwnProperty(o) ||
              (r.video[o] = t[o]);
          if (r.video.minduration > r.video.maxduration)
            return (
              Object(i.logError)(
                "IX Bid Adapter: video minduration ["
                  .concat(
                    r.video.minduration,
                    "] cannot be greater than video maxduration ["
                  )
                  .concat(r.video.maxduration, "]")
              ),
              {}
            );
          var s = (a && a.context) || (t && t.context);
          if (
            (s &&
              !r.video.hasOwnProperty("placement") &&
              (s === c.a
                ? (r.video.placement = 1)
                : s === c.b
                ? (r.video.placement = 4)
                : Object(i.logWarn)(
                    "IX Bid Adapter: Video context '".concat(
                      s,
                      "' is not supported"
                    )
                  )),
            !r.video.w || !r.video.h)
          ) {
            var d =
              U(Object(i.deepAccess)(r, "video.playerSize")) ||
              U(Object(i.deepAccess)(e, "params.size"));
            if (!d)
              return (
                Object(i.logWarn)(
                  "IX Bid Adapter: Video size is missing in [mediaTypes.video] missing"
                ),
                {}
              );
            (r.video.w = d[0]),
              (r.video.h = d[1]),
              Object(i.deepAccess)(r, "ext.sid") ||
                (r.ext.sid = Object(i.parseGPTSingleSizeArray)(d));
          }
          return D(e, r, n.d), r;
        })(e);
        0 != Object.keys(t).length &&
          ((r[e.transactionId] = {}),
          (r[e.transactionId].ixImps = []),
          r[e.transactionId].ixImps.push(t));
      }
      function V(e, r, t) {
        var o = y(y({}, { detectMissingSizes: !0 }), a.b.getConfig("ix")),
          s = (function (e) {
            var r = E(e);
            r.banner = {};
            var t = Object(i.deepAccess)(e, "params.size");
            return (
              t &&
                ((r.banner.w = t[0]),
                (r.banner.h = t[1]),
                Object(i.deepAccess)(r, "ext.sid") ||
                  (r.ext.sid = Object(i.parseGPTSingleSizeArray)(t))),
              (r.banner.topframe = Object(i.inIframe)() ? 0 : 1),
              D(e, r, n.b),
              r
            );
          })(e);
        q(
          Object(i.deepAccess)(e, "mediaTypes.banner.sizes"),
          Object(i.deepAccess)(e, "params.size")
        ) &&
          (t.hasOwnProperty(e.transactionId) || (t[e.transactionId] = {}),
          t[e.transactionId].hasOwnProperty("ixImps") ||
            (t[e.transactionId].ixImps = []),
          t[e.transactionId].ixImps.push(s)),
          o.hasOwnProperty("detectMissingSizes") &&
            o.detectMissingSizes &&
            (function (e, r, t) {
              var n = e.transactionId;
              if (r.hasOwnProperty(n)) {
                var a = [];
                r[n].hasOwnProperty("missingSizes") && (a = r[n].missingSizes),
                  M(a, e.params.size),
                  (r[n].missingSizes = a);
              } else if (Object(i.deepAccess)(e, "mediaTypes.banner.sizes")) {
                var o = Object(i.deepClone)(e.mediaTypes.banner.sizes);
                M(o, e.params.size);
                var s = { missingSizes: o, impression: t };
                r[n] = s;
              }
            })(e, r, s);
      }
      function W(e, r, t) {
        var a = Object(i.deepClone)(r);
        return (
          (a.ext.sid = Object(i.parseGPTSingleSizeArray)(t)),
          (a.banner.w = t[0]),
          (a.banner.h = t[1]),
          D(e, a, n.b),
          a
        );
      }
      function G(e) {
        e.renderer.push(function () {
          var r = { width: e.width, height: e.height, timeout: 3e3 };
          window.IXOutstreamPlayer(e.vastUrl, e.adUnitCode, r);
        });
      }
      function Q(e) {
        var r = l.a.install({
          id: e,
          url: "https://js-sec.indexww.com/htv/video-player.js",
          loaded: !1,
        });
        try {
          r.setRender(G);
        } catch (e) {
          Object(i.logWarn)("Prebid Error calling setRender on renderer", e);
        }
        return r;
      }
      var $ = {
        code: "ix",
        gvlid: 10,
        aliases: [{ code: j, gvlid: 10, skipPbsAliasing: !1 }],
        supportedMediaTypes: x,
        isBidRequestValid: function (e) {
          var r,
            t,
            n = Object(i.deepAccess)(e, "params.video"),
            a = Object(i.deepAccess)(e, "params.size"),
            o = Object(i.deepAccess)(e, "mediaTypes.banner.sizes"),
            s = Object(i.deepAccess)(e, "mediaTypes.video"),
            d = Object(i.deepAccess)(e, "mediaTypes.video.playerSize"),
            c = e.params.hasOwnProperty("bidFloor"),
            p = e.params.hasOwnProperty("bidFloorCur");
          if (
            e.hasOwnProperty("mediaType") &&
            !Object(i.contains)(x, e.mediaType)
          )
            return !1;
          if (Object(i.deepAccess)(e, "mediaTypes.banner") && !o) return !1;
          if (a) {
            var u = U(a);
            if (!u)
              return (
                Object(i.logError)(
                  "ix bidder params: size has invalid format."
                ),
                !1
              );
            if (!q(e.sizes, u) && !q(d, u) && !q(o, u))
              return (
                Object(i.logError)(
                  "ix bidder params: bid size is not included in ad unit sizes or player size."
                ),
                !1
              );
          }
          if (
            "string" != typeof e.params.siteId &&
            "number" != typeof e.params.siteId
          )
            return (
              Object(i.logError)(
                "ix bidder params: siteId must be string or number value."
              ),
              !1
            );
          if (
            (c || p) &&
            !(
              c &&
              p &&
              ((r = e.params.bidFloor),
              (t = e.params.bidFloorCur),
              Boolean(
                "number" == typeof r &&
                  "string" == typeof t &&
                  t.match(/^[A-Z]{3}$/)
              ))
            )
          )
            return (
              Object(i.logError)(
                "ix bidder params: bidFloor / bidFloorCur parameter has invalid format."
              ),
              !1
            );
          if (s && n) {
            var l = B(s, n);
            if (l.length)
              return (
                l.forEach(function (e) {
                  Object(i.logError)(e);
                }),
                !1
              );
          }
          return !0;
        },
        buildRequests: function (e, r) {
          var t = [],
            a = {},
            o = {},
            s = {},
            d = {};
          for (var c in (e.forEach(function (e) {
            var r = Object.keys(Object(i.deepAccess)(e, "mediaTypes", {}));
            switch (
              (function (e) {
                return Object(i.deepAccess)(e, "params.video") &&
                  Object(i.deepAccess)(e, "mediaTypes.video")
                  ? n.d
                  : n.b;
              })(e)
            ) {
              case n.b:
                V(e, d, a);
                break;
              case n.d:
                X(e, o);
            }
            u()(r, n.b) && u()(r, n.d) && (s[e.transactionId] = e);
          }),
          Object.keys(s).forEach(function (e) {
            var r = s[e];
            a[e] || V(r, d, a), o[e] || X(r, o);
          }),
          d))
            if (d.hasOwnProperty(c)) {
              var p = d[c].missingSizes;
              a.hasOwnProperty(c) || (a[c] = {}),
                a[c].hasOwnProperty("missingImps") ||
                  ((a[c].missingImps = []), (a[c].missingCount = 0));
              for (var l = d[c].impression, f = 0; f < p.length; f++) {
                var b = W(e[0], l, p[f]);
                a[c].missingImps.push(b), a[c].missingCount++;
              }
            }
          return (
            Object.keys(a).length > 0 && t.push.apply(t, m(_(e, r, a, 7.2))),
            Object.keys(o).length > 0 && t.push.apply(t, m(_(e, r, o, 8.1))),
            t
          );
        },
        interpretResponse: function (e, r) {
          var t = [],
            n = null;
          if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid"))
            return t;
          for (var a = e.body, o = a.seatbid, s = 0; s < o.length; s++)
            if (o[s].hasOwnProperty("bid"))
              for (
                var d = o[s].bid, c = JSON.parse(r.data.r), p = 0;
                p < d.length;
                p++
              ) {
                var u = N(d[p].impid, c.imp, r.validBidRequests);
                (n = F(d[p], a.cur, u)),
                  Object(i.deepAccess)(n, "mediaTypes.video.renderer") ||
                    "outstream" !==
                      Object(i.deepAccess)(n, "mediaTypes.video.context") ||
                    (n.mediaTypes.video.renderer = Q(d[p].bidId)),
                  t.push(n);
              }
          return t;
        },
        transformBidParams: function (e, r) {
          return Object(i.convertTypes)({ siteID: "number" }, e);
        },
        getUserSyncs: function (e, r) {
          return e.iframeEnabled
            ? [
                {
                  type: "iframe",
                  url: "https://js-sec.indexww.com/um/ixmatch.html",
                },
              ]
            : [];
        },
      };
      Object(d.registerBidder)($);
    },
  },
  [532]
);
pbjsChunk(
  [202],
  {
    568: function (e, n, r) {
      e.exports = r(569);
    },
    569: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        r.d(n, "spec", function () {
          return s;
        });
      var t = r(0),
        d = r(2),
        i = r(1),
        s = {
          code: "lockerdome",
          supportedMediaTypes: [d.b],
          isBidRequestValid: function (e) {
            return !!e.params.adUnitId;
          },
          buildRequests: function (e, n) {
            var r,
              d = e.map(function (e) {
                return (
                  e.schain && (r = r || e.schain),
                  {
                    requestId: e.bidId,
                    adUnitCode: e.adUnitCode,
                    adUnitId: Object(t.getBidIdParameter)("adUnitId", e.params),
                    sizes:
                      e.mediaTypes &&
                      e.mediaTypes.banner &&
                      e.mediaTypes.banner.sizes,
                  }
                );
              }),
              i = (n && n.refererInfo && n.refererInfo.canonicalUrl) || "",
              s = (n && n.refererInfo && n.refererInfo.referer) || "",
              a = {
                bidRequests: d,
                url: encodeURIComponent(i),
                referrer: encodeURIComponent(s),
              };
            return (
              r && (a.schain = r),
              n &&
                (n.gdprConsent &&
                  (a.gdpr = {
                    applies: n.gdprConsent.gdprApplies,
                    consent: n.gdprConsent.consentString,
                  }),
                n.uspConsent && (a.us_privacy = { consent: n.uspConsent })),
              {
                method: "POST",
                url: "https://lockerdome.com/ladbid/prebid",
                data: JSON.stringify(a),
              }
            );
          },
          interpretResponse: function (e, n) {
            return e && e.body && e.body.bids
              ? e.body.bids.map(function (e) {
                  return {
                    requestId: e.requestId,
                    cpm: e.cpm,
                    width: e.width,
                    height: e.height,
                    creativeId: e.creativeId,
                    currency: e.currency,
                    netRevenue: e.netRevenue,
                    ad: e.ad,
                    ttl: e.ttl,
                    meta: {
                      advertiserDomains:
                        e.adomain && Array.isArray(e.adomain) ? e.adomain : [],
                    },
                  };
                })
              : [];
          },
        };
      Object(i.registerBidder)(s);
    },
  },
  [568]
);
pbjsChunk(
  [190],
  {
    600: function (e, t, n) {
      e.exports = n(601);
    },
    601: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n.d(t, "spec", function () {
          return U;
        });
      var r = n(0),
        i = n(1),
        a = n(3),
        o = n(2),
        c = n(20),
        d = n(13);
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var u = "medianet",
        p = "https://prebid.media.net/video/bundle.js",
        l = 0,
        b = 1,
        m = 2,
        f = "client_timeout",
        g = "client_bid_won",
        y = Object(c.a)(),
        h = {};
      function v() {
        try {
          return window.top.document.referrer;
        } catch (e) {
          return document.referrer;
        }
      }
      function j(e) {
        return s(
          {
            domain: (e = e || {}).domain || h.urlData.domain,
            page: e.page || h.urlData.page,
            ref: e.ref || v(),
            isTop: e.isTop || h.urlData.isTop,
          },
          (function () {
            if (h.pageMeta) return h.pageMeta;
            var e = w('link[rel="canonical"]', "href"),
              t = w('meta[property="og:url"]', "content"),
              n = w('meta[name="twitter:url"]', "content");
            return (
              (h.pageMeta = s(
                {},
                e && { canonical_url: e },
                t && { og_url: t },
                n && { twitter_url: n }
              )),
              h.pageMeta
            );
          })()
        );
      }
      function w(e, t) {
        var n,
          i,
          a = (function (e, t) {
            try {
              var n = Object(r.getWindowTop)().document.querySelector(e);
              if (null !== n && n[t]) return n[t];
            } catch (e) {}
          })(e, t);
        return (
          a &&
          ((n = a),
          ((i = Object(r.getWindowTop)().document.createElement("a")).href = n),
          i.href)
        );
      }
      function O(e, t) {
        return e.filter(function (e) {
          return e.type === t;
        });
      }
      function x(e) {
        return { w: parseInt(e[0], 10), h: parseInt(e[1], 10) };
      }
      function _(e, t) {
        var n = Object(r.deepAccess)(e, "params"),
          i = Object(r.deepAccess)(t, "gdprConsent"),
          o = Object(r.deepAccess)(t, "uspConsent"),
          c = Object(r.deepAccess)(e, "userId"),
          d = Object(r.deepAccess)(e, "schain") || {},
          u = U.getWindowSize(),
          p = !(!i || !i.gdprApplies),
          l = !!o,
          b = !!a.b.getConfig("coppa");
        return s(
          {},
          { customer_id: n.cid },
          { prebid_version: pbjs.version },
          { gdpr_applies: p },
          p && { gdpr_consent_string: i.consentString || "" },
          { usp_applies: l },
          l && { usp_consent_string: o || "" },
          { coppa_applies: b },
          -1 !== u.w && -1 !== u.h && { screen: u },
          c && { user_id: c },
          pbjs.medianetGlobals.analyticsEnabled && { analytics: !0 },
          !Object(r.isEmpty)(d) && { schain: d }
        );
      }
      function A(e) {
        var t = {
          id: e.bidId,
          ext: { dfp_id: e.adUnitCode, display_count: e.bidRequestsCount },
          all: e.params,
        };
        e.ortb2Imp && (t.ortb2Imp = e.ortb2Imp);
        var n,
          i = Object(r.deepAccess)(e, "mediaTypes.banner.sizes") || [],
          a = Object(r.deepAccess)(e, "mediaTypes.video") || {},
          c = s({}, Object(r.deepAccess)(e, "params.video") || {}, a);
        if (
          (Object(r.isEmpty)(c) || (t.video = c),
          i.length > 0 &&
            (t.banner =
              ((n = i),
              Object(r.isArray)(n) && 2 === n.length && !Object(r.isArray)(n[0])
                ? [x(n)]
                : n.map(function (e) {
                    return x(e);
                  }))),
          e.nativeParams)
        )
          try {
            t.native = JSON.stringify(e.nativeParams);
          } catch (e) {
            Object(r.logError)(
              "".concat(u, " : Incorrect JSON : bidRequest.nativeParams")
            );
          }
        e.params.crid && (t.tagid = e.params.crid.toString());
        var d = parseFloat(e.params.bidfloor || e.params.bidFloor);
        d && (t.bidfloor = d);
        var p = (function (e) {
          var t = document.getElementById(e);
          if (!t && -1 !== e.indexOf("/")) {
            var n = Object(r.getGptSlotInfoForAdUnitCode)(e).divId;
            Object(r.isStr)(n) && (t = document.getElementById(n));
          }
          if (t && t.getBoundingClientRect) {
            var i = t.getBoundingClientRect(),
              a = {};
            return (
              (a.top_left = { y: i.top, x: i.left }),
              (a.bottom_right = { y: i.bottom, x: i.right }),
              a
            );
          }
          return null;
        })(e.adUnitCode);
        if (p && t.banner && 0 !== t.banner.length) {
          var f = (function (e) {
            return {
              top_left: {
                x: e.top_left.x + window.pageXOffset,
                y: e.top_left.y + window.pageYOffset,
              },
              bottom_right: {
                x: e.bottom_right.x + window.pageXOffset,
                y: e.bottom_right.y + window.pageYOffset,
              },
            };
          })(p);
          (t.ext.coordinates = f),
            (t.ext.viewability = S(p.top_left, I(t.banner))),
            S(f.top_left, I(t.banner)) > 0.5
              ? (t.ext.visibility = b)
              : (t.ext.visibility = m);
        } else t.ext.visibility = l;
        var g = (function (e) {
          var t = [];
          "function" == typeof e.getFloor &&
            [o.b, o.d, o.c].forEach(function (n) {
              e.mediaTypes.hasOwnProperty(n) &&
                (n == o.b
                  ? e.mediaTypes.banner.sizes.forEach(function (r) {
                      T(e, n, r, t);
                    })
                  : T(e, n, "*", t));
            });
          return t;
        })(e);
        return g && g.length > 0 && (t.bidfloors = g), t;
      }
      function T(e, t, n, r) {
        var i = e.getFloor({ currency: "USD", mediaType: t, size: n });
        n.length > 1 && (i.size = n), (i.mediaType = t), r.push(i);
      }
      function I(e) {
        return e.reduce(function (e, t) {
          return t.h * t.w < e.h * e.w ? t : e;
        });
      }
      function S(e, t) {
        var n = t.w * t.h,
          r = U.getWindowSize(),
          i = { x: e.x + t.w, y: e.y + t.h };
        return 0 === n || -1 === r.w || -1 === r.h
          ? 0
          : (function (e, t, n, r) {
              if (e.x > r.x || t.x < n.x || e.y > r.y || t.y < n.y) return 0;
              return (
                (Math.min(t.x, r.x) - Math.max(e.x, n.x)) *
                (Math.min(t.y, r.y) - Math.max(e.y, n.y))
              );
            })(e, i, { x: 0, y: 0 }, { x: r.w, y: r.h }) / n;
      }
      function E(e, t) {
        t = (Object(r.isArray)(t) && t) || [];
        var n = { logid: "kfk", evtid: "projectevents", project: "prebid" };
        return (
          (n.acid = Object(r.deepAccess)(t, "0.auctionId") || ""),
          (n.cid = pbjs.medianetGlobals.cid || ""),
          (n.crid = t
            .map(function (e) {
              return Object(r.deepAccess)(e, "params.0.crid") || e.adUnitCode;
            })
            .join("|")),
          (n.adunit_count = t.length || 0),
          (n.dn = h.urlData.domain || ""),
          (n.requrl = h.urlData.page || ""),
          (n.istop = h.urlData.isTop || ""),
          (n.event = e.name || ""),
          (n.value = e.value || ""),
          (n.rd = e.related_data || ""),
          n
        );
      }
      function C(e, t) {
        var n = {
          protocol: "https",
          hostname: "qsearch-a.akamaihd.net/log",
          search: E(e, t),
        };
        Object(r.triggerPixel)(Object(r.buildUrl)(n));
      }
      function M(e) {
        var t,
          n = Object(r.deepAccess)(e, "context") || "",
          i = Object(r.deepAccess)(e, "vto");
        "outstream" == n &&
          i &&
          (e.renderer =
            ((t = d.a.install({ url: p })).setRender(function (e) {
              window.mnet.queue.push(function () {
                var t = {
                    width: e.width,
                    height: e.height,
                    vastTimeout: e.vto,
                    maxAllowedVastTagRedirects: e.mavtr,
                    allowVpaid: e.avp,
                    autoPlay: e.ap,
                    preload: e.pl,
                    mute: e.mt,
                  },
                  n = e.dfp_id,
                  i = Object(r.getGptSlotInfoForAdUnitCode)(n).divId || n;
                window.mnet.mediaNetoutstreamPlayer(e, i, t);
              });
            }),
            t));
      }
      (window.mnet = window.mnet || {}),
        (window.mnet.queue = window.mnet.queue || []),
        (h.urlData = {
          domain: Object(r.parseUrl)(y.referer).hostname,
          page: y.referer,
          isTop: y.reachedTop,
        }),
        (pbjs.medianetGlobals = pbjs.medianetGlobals || {});
      var U = {
        code: u,
        gvlid: 142,
        supportedMediaTypes: [o.b, o.c, o.d],
        isBidRequestValid: function (e) {
          return e.params
            ? e.params.cid &&
              Object(r.isStr)(e.params.cid) &&
              !Object(r.isEmptyStr)(e.params.cid)
              ? (s(
                  pbjs.medianetGlobals,
                  !pbjs.medianetGlobals.cid && { cid: e.params.cid }
                ),
                !0)
              : (Object(r.logError)("".concat(u, " : cid should be a string")),
                !1)
            : (Object(r.logError)("".concat(u, " : Missing bid parameters")),
              !1);
        },
        buildRequests: function (e, t) {
          var n,
            r = (function (e, t) {
              return {
                site: j(e[0].params.site),
                ext: _(e[0], t),
                id: e[0].auctionId,
                imp: e.map(function (e) {
                  return A(e);
                }),
                tmax: t.timeout || a.b.getConfig("bidderTimeout"),
              };
            })(e, t);
          return {
            method: "POST",
            url:
              ((n = r.ext.customer_id),
              "https://prebid.media.net/rtb/prebid?cid=" +
                encodeURIComponent(n)),
            data: JSON.stringify(r),
          };
        },
        interpretResponse: function (e, t) {
          var n = [];
          if (!e || !e.body)
            return Object(r.logInfo)("".concat(u, " : response is empty")), n;
          var i = e.body.bidList;
          return Object(r.isArray)(i) && 0 !== i.length
            ? ((n = i.filter(function (e) {
                return (function (e) {
                  return !1 === e.no_bid && parseFloat(e.cpm) > 0;
                })(e);
              })).forEach(M),
              n)
            : (Object(r.logInfo)("".concat(u, " : no bids")), n);
        },
        getUserSyncs: function (e, t) {
          var n,
            i =
              ((n = t),
              !Object(r.isEmpty)(n) &&
              n[0].body &&
              n[0].body.ext &&
              Object(r.isArray)(n[0].body.ext.csUrl)
                ? n[0].body.ext.csUrl
                : []);
          return e.iframeEnabled
            ? O(i, "iframe")
            : e.pixelEnabled
            ? O(i, "image")
            : void 0;
        },
        onTimeout: function (e) {
          try {
            C(
              {
                name: f,
                value: e.length,
                related_data: e[0].timeout || a.b.getConfig("bidderTimeout"),
              },
              e
            );
          } catch (e) {}
        },
        onBidWon: function (e) {
          try {
            C({ name: g, value: e.cpm }, [e]);
          } catch (e) {}
        },
        clearMnData: function () {
          h = {};
        },
        getWindowSize: function () {
          return {
            w: window.screen.width || -1,
            h: window.screen.height || -1,
          };
        },
      };
      Object(i.registerBidder)(U);
    },
  },
  [600]
);
pbjsChunk(
  [176],
  {
    628: function (e, n, t) {
      e.exports = t(629);
    },
    629: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        t.d(n, "spec", function () {
          return b;
        });
      var i = t(0),
        r = t(3),
        o = t(1),
        d = t(2),
        a = t(7),
        s = "nobid",
        c = Object(a.b)(816, s);
      function u(e, n) {
        Object(i.logInfo)("-NoBid- " + e, n);
      }
      function p(e, n) {
        function t(e, n) {
          var t =
            (function (e, n) {
              for (var t = 0; t < n.length; t++) if (n[t].d === e) return n[t];
              return !1;
            })(e.div, n) || {};
          return (
            e.account && (t.s = e.account),
            e.sizes && (t.z = e.sizes),
            e.div && (t.d = e.div),
            e.targeting ? (t.g = e.targeting) : (t.g = {}),
            e.div &&
              (function (e, n, t) {
                for (var i = e.length - 1; i >= 0; i--) {
                  var r = e[i];
                  r[n] && r[n] === t && e.splice(i, 1);
                }
              })(n, "d", e.div),
            e.sizeMapping && (t.sm = e.sizeMapping),
            e.siteId && (t.sid = e.siteId),
            e.placementId && (t.pid = e.placementId),
            e.ad_type && (t.at = e.ad_type),
            e.params && (t.params = e.params),
            n.push(t),
            n
          );
        }
        if (
          void 0 !== window.nobid.refreshLimit &&
          window.nobid.refreshLimit < window.nobid.refreshCount
        )
          return !1;
        var o,
          a = ((o = "_ublock"), c.getCookie(o));
        if (a) return u("Request blocked for user. hours: ", a), !1;
        for (var s = [], p = 0, l = [], b = 0; b < e.length; b++) {
          var g = e[b],
            f = g.adUnitCode;
          s.push(f);
          var v = g.sizes;
          p =
            void 0 !== g.params.siteId && g.params.siteId ? g.params.siteId : p;
          var m = g.params.placementId,
            w = "banner",
            h = Object(i.deepAccess)(g, "mediaTypes.video"),
            y = Object(i.deepAccess)(g, "mediaTypes.video.context");
          (g.mediaType === d.d ||
            (h && ("instream" === y || "outstream" === y))) &&
            (w = "video"),
            p &&
              t(
                {
                  div: f,
                  sizes: v,
                  siteId: p,
                  placementId: m,
                  ad_type: w,
                  params: g.params,
                },
                l
              );
        }
        return (
          !!p &&
          (function (t, o, d) {
            var a,
              s,
              c,
              u,
              p,
              l,
              b,
              g,
              f = {};
            (f.sid = o),
              (f.l = (function (e) {
                var n = "";
                return (
                  (n =
                    e && e.refererInfo && e.refererInfo.referer
                      ? e.refererInfo.referer
                      : window.context &&
                        window.context.location &&
                        window.context.location.href
                      ? window.context.location.href
                      : document.location.href),
                  encodeURIComponent(n.replace(/\%/g, ""))
                );
              })(n)),
              (f.tt = encodeURIComponent(document.title)),
              (f.tt = f.tt.replace(
                /'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm,
                ""
              )),
              (f.a = (function (e, n) {
                var t = [];
                if (e && e.length) {
                  if (n) {
                    var i = [];
                    e instanceof Array ? (i = e) : i.push(e);
                    for (var r = 0, o = n.length; r < o; r++) {
                      var d = n[r];
                      d && d.d && i.indexOf(d.d) > -1 && t.push(d);
                    }
                  }
                } else t = n;
                return t;
              })(t, d || [])),
              (f.t =
                ((a = new Date()),
                (s = function (e) {
                  return e <= 9 ? "0" + e : "" + e;
                }),
                (c = a.getDate()),
                (u = a.getFullYear()),
                (p = a.getMonth() + 1),
                (l = a.getHours()),
                (b = a.getMinutes()),
                (g = a.getSeconds()),
                u +
                  "-" +
                  s(p) +
                  "-" +
                  s(c) +
                  " " +
                  s(l) +
                  ":" +
                  s(b) +
                  ":" +
                  s(g))),
              (f.tz = Math.round(new Date().getTimezoneOffset())),
              (f.r = (function () {
                try {
                  var e = Math.max(
                      document.documentElement.clientWidth,
                      window.innerWidth || 0
                    ),
                    n = Math.max(
                      document.documentElement.clientHeight,
                      window.innerHeight || 0
                    );
                  return "".concat(e, "x").concat(n);
                } catch (e) {
                  Object(i.logWarn)(
                    "Could not parse screen dimensions, error details:",
                    e
                  );
                }
              })()),
              (f.lang =
                (navigator.languages && navigator.languages[0]) ||
                navigator.language ||
                navigator.userLanguage),
              (f.ref = document.referrer),
              (f.gdpr = (function (e) {
                var n = {};
                return (
                  e &&
                    e.gdprConsent &&
                    (n = {
                      consentString: e.gdprConsent.consentString,
                      consentRequired:
                        "boolean" == typeof e.gdprConsent.gdprApplies &&
                        e.gdprConsent.gdprApplies,
                    }),
                  n
                );
              })(n)),
              (f.usp = (function (e) {
                var n = "";
                return e && e.uspConsent && (n = e.uspConsent), n;
              })(n)),
              (f.pjbdr = n && n.bidderCode ? n.bidderCode : "nobid");
            var v = (function (e) {
              return e && e.length > 0 ? e[0].schain : null;
            })(e);
            v && (f.schain = v);
            var m =
              !0 === r.b.getConfig("coppa")
                ? { coppa: !0 }
                : e && e.length > 0
                ? e[0].coppa
                : null;
            m && (f.coppa = m);
            var w = (function (e) {
              if (Object(i.isArray)(e) && e.length > 0) {
                var n = [];
                return (
                  e.forEach(function (e) {
                    var t = [];
                    e.uids &&
                      e.uids.forEach(function (e) {
                        t.push({ id: e.id + "" });
                      }),
                      e.source &&
                        t.length > 0 &&
                        n.push({ source: e.source, uids: t });
                  }),
                  n
                );
              }
            })(Object(i.deepAccess)(e, "0.userIdAsEids"));
            return w && w.length > 0 && (f.eids = w), f;
          })(s, p, l)
        );
      }
      function l(e, n) {
        var t = function (e, n) {
          for (var t = 0; t < n.length; t++)
            if (n[t].adUnitCode == e) return n[t];
          return !1;
        };
        !(function (e) {
          e && void 0 !== e.rlimit && (window.nobid.refreshLimit = e.rlimit);
        })(e),
          (function (e) {
            e &&
              void 0 !== e.ublock &&
              (function (e, n, t) {
                var i = new Date();
                i.setTime(i.getTime() + 60 * t * 60 * 1e3);
                var r = "expires=" + i.toUTCString();
                c.setCookie(e, n, r);
              })("_ublock", "1", e.ublock);
          })(e);
        for (var i = [], r = 0; e.bids && r < e.bids.length; r++) {
          var o = e.bids[r];
          if (
            !(o.bdrid < 100) &&
            n &&
            n.bidderRequest &&
            n.bidderRequest.bids
          ) {
            window.nobid.bidResponses["" + o.id] = o;
            var a = t(o.divid, n.bidderRequest.bids);
            if (a) {
              var s = {
                requestId: a.bidId,
                cpm: 1 * (o.price ? o.price : o.bucket ? o.bucket : 0),
                width: o.size.w,
                height: o.size.h,
                creativeId: o.creativeid || "",
                dealId: o.dealid || "",
                currency: "USD",
                netRevenue: !0,
                ttl: 300,
                ad: o.adm,
                mediaType: o.atype || d.b,
              };
              o.vastUrl && (s.vastUrl = o.vastUrl),
                o.vastXml && (s.vastXml = o.vastXml),
                o.videoCacheKey && (s.videoCacheKey = o.videoCacheKey),
                o.meta && (s.meta = o.meta),
                i.push(s);
            }
          }
        }
        return i;
      }
      (window.nobidVersion = "1.3.1"),
        (window.nobid = window.nobid || {}),
        (window.nobid.bidResponses = window.nobid.bidResponses || {}),
        (window.nobid.timeoutTotal = 0),
        (window.nobid.bidWonTotal = 0),
        (window.nobid.refreshCount = 0),
        (window.nobid.renderTag = function (e, n, t) {
          u("nobid.renderTag()", n);
          var i = window.nobid.bidResponses["" + n];
          if (i && i.adm2) {
            u("nobid.renderTag() found tag", n);
            var r = i.adm2;
            return e.write(r), void e.close();
          }
          u("nobid.renderTag() tag NOT FOUND *ERROR*", n);
        }),
        window.addEventListener(
          "message",
          function (e) {
            var n = "" + e[e.message ? "message" : "data"];
            if (
              "nbTagRenderer.requestAdMarkup|" ===
              n.substring(0, "nbTagRenderer.requestAdMarkup|".length)
            ) {
              u("Prebid received nbTagRenderer.requestAdMarkup event");
              var t = n.substring(n.indexOf("|") + 1);
              if (window.nobid && window.nobid.bidResponses) {
                var i = window.nobid.bidResponses["" + t];
                if (i && i.adm2) {
                  var r = i.adm2;
                  r &&
                    e.source.postMessage(
                      "nbTagRenderer.renderAdInSafeFrame|" + r,
                      "*"
                    );
                }
              }
            }
          },
          !1
        );
      var b = {
        code: s,
        gvlid: 816,
        aliases: [{ code: "duration", gvlid: 674 }],
        supportedMediaTypes: [d.b, d.d],
        isBidRequestValid: function (e) {
          return u("isBidRequestValid", e), !!e.params.siteId;
        },
        buildRequests: function (e, n) {
          if ((u("validBidRequests", e), !e || e.length <= 0))
            u("Empty validBidRequests");
          else {
            var t = p(e, n);
            if (t) {
              window.nobid.refreshCount++;
              var r,
                o,
                d = JSON.stringify(t).replace(/'|&|#/g, ""),
                a =
                  ((r = "https://ads.servenobid.com/"),
                  (o =
                    "function" == typeof i.getParameterByName &&
                    Object(i.getParameterByName)("nobid-env"))
                    ? "beta" == o
                      ? (r = "https://beta.servenobid.com/")
                      : "dev" == o
                      ? (r = "//localhost:8282/")
                      : "qa" == o && (r = "https://qa-ads.nobid.com/")
                    : (r = "https://ads.servenobid.com/"),
                  r + "adreq?cb=" + Math.floor(11e3 * Math.random())),
                s = {};
              return (
                (function (e) {
                  var n = !0;
                  return (
                    e &&
                      e.gdprConsent &&
                      e.gdprConsent.gdprApplies &&
                      2 === e.gdprConsent.apiVersion &&
                      (n = !(
                        !0 !==
                        Object(i.deepAccess)(
                          e.gdprConsent,
                          "vendorData.purpose.consents.1"
                        )
                      )),
                    n
                  );
                })(n) || (s = { withCredentials: !1 }),
                {
                  method: "POST",
                  url: a,
                  data: d,
                  bidderRequest: n,
                  options: s,
                }
              );
            }
          }
        },
        interpretResponse: function (e, n) {
          return (
            u("interpretResponse -> serverResponse", e),
            u("interpretResponse -> bidRequest", n),
            l(e.body, n)
          );
        },
        getUserSyncs: function (e, n, t, r) {
          if (e.iframeEnabled) {
            var o = "";
            return (
              t &&
                "string" == typeof t.consentString &&
                ("boolean" == typeof t.gdprApplies
                  ? (o += "?gdpr="
                      .concat(Number(t.gdprApplies), "&gdpr_consent=")
                      .concat(t.consentString))
                  : (o += "?gdpr_consent=".concat(t.consentString))),
              r &&
                (o.length > 0 ? (o += "&") : (o += "?"),
                (o += "usp_consent=" + r)),
              [
                {
                  type: "iframe",
                  url: "https://public.servenobid.com/sync.html" + o,
                },
              ]
            );
          }
          if (e.pixelEnabled && n.length > 0) {
            var d = [];
            return (
              n[0].body.syncs &&
                n[0].body.syncs.length > 0 &&
                n[0].body.syncs.forEach(function (e) {
                  d.push({ type: "image", url: e });
                }),
              d
            );
          }
          return (
            Object(i.logWarn)(
              "-NoBid- Please enable iframe based user sync.",
              e
            ),
            []
          );
        },
        onTimeout: function (e) {
          return (
            window.nobid.timeoutTotal++,
            u("Timeout total: " + window.nobid.timeoutTotal, e),
            window.nobid.timeoutTotal
          );
        },
        onBidWon: function (e) {
          return (
            window.nobid.bidWonTotal++,
            u("BidWon total: " + window.nobid.bidWonTotal, e),
            window.nobid.bidWonTotal
          );
        },
      };
      Object(o.registerBidder)(b);
    },
  },
  [628]
);
pbjsChunk(
  [40],
  {
    17: function (e, t, r) {
      "use strict";
      (t.b = function (e) {
        var t = [];
        for (var r in e)
          if (e.hasOwnProperty(r))
            if ("pubProvidedId" === r) t = t.concat(e.pubProvidedId);
            else {
              var n = o(e[r], r);
              n && t.push(n);
            }
        return t;
      }),
        (t.a = function (e) {
          var t = [];
          return (
            e
              .filter(function (e) {
                return (
                  Object(n.isPlainObject)(e.idObj) &&
                  Object.keys(e.idObj).length
                );
              })
              .forEach(function (e) {
                Object.keys(e.idObj).forEach(function (r) {
                  Object(n.deepAccess)(e, "config.bidders") &&
                    Array.isArray(e.config.bidders) &&
                    Object(n.deepAccess)(i, r + ".source") &&
                    t.push({ source: i[r].source, bidders: e.config.bidders });
                });
              }),
            t
          );
        });
      var n = r(0),
        i = {
          intentIqId: { source: "intentiq.com", atype: 1 },
          naveggId: { source: "navegg.com", atype: 1 },
          pubcid: { source: "pubcid.org", atype: 1 },
          tdid: {
            source: "adserver.org",
            atype: 1,
            getUidExt: function () {
              return { rtiPartner: "TDID" };
            },
          },
          id5id: {
            getValue: function (e) {
              return e.uid;
            },
            source: "id5-sync.com",
            atype: 1,
            getUidExt: function (e) {
              if (e.ext) return e.ext;
            },
          },
          parrableId: {
            source: "parrable.com",
            atype: 1,
            getValue: function (e) {
              return e.eid ? e.eid : e.ccpaOptout ? "" : null;
            },
            getUidExt: function (e) {
              var t = Object(n.pick)(e, ["ibaOptout", "ccpaOptout"]);
              if (Object.keys(t).length) return t;
            },
          },
          idl_env: { source: "liveramp.com", atype: 3 },
          lipb: {
            getValue: function (e) {
              return e.lipbid;
            },
            source: "liveintent.com",
            atype: 3,
            getEidExt: function (e) {
              if (Array.isArray(e.segments) && e.segments.length)
                return { segments: e.segments };
            },
          },
          britepoolid: { source: "britepool.com", atype: 3 },
          dmdId: { source: "hcn.health", atype: 3 },
          lotamePanoramaId: { source: "crwdcntrl.net", atype: 1 },
          criteoId: { source: "criteo.com", atype: 1 },
          merkleId: {
            source: "merkleinc.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
            getUidExt: function (e) {
              return e && e.keyID ? { keyID: e.keyID } : void 0;
            },
          },
          netId: { source: "netid.de", atype: 1 },
          IDP: { source: "zeotap.com", atype: 1 },
          haloId: { source: "audigent.com", atype: 1 },
          quantcastId: { source: "quantcast.com", atype: 1 },
          nextrollId: { source: "nextroll.com", atype: 1 },
          idx: { source: "idx.lat", atype: 1 },
          connectid: { source: "verizonmedia.com", atype: 3 },
          fabrickId: { source: "neustar.biz", atype: 1 },
          mwOpenLinkId: { source: "mediawallahscript.com", atype: 1 },
          tapadId: { source: "tapad.com", atype: 1 },
          novatiq: {
            getValue: function (e) {
              return e.snowflake;
            },
            source: "novatiq.com",
            atype: 1,
          },
          uid2: {
            source: "uidapi.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
          },
          dapId: { source: "akamai.com", atype: 1 },
          deepintentId: { source: "deepintent.com", atype: 3 },
          admixerId: { source: "admixer.net", atype: 3 },
          adtelligentId: { source: "adtelligent.com", atype: 3 },
          amxId: { source: "amxrtb.com", atype: 1 },
          publinkId: { source: "epsilon.com", atype: 3 },
          kpuid: { source: "kpuid.com", atype: 3 },
          imuid: { source: "intimatemerger.com", atype: 1 },
        };
      function o(e, t) {
        var r = i[t];
        if (r && e) {
          var o = {};
          o.source = r.source;
          var a = Object(n.isFn)(r.getValue) ? r.getValue(e) : e;
          if (Object(n.isStr)(a)) {
            var d = { id: a, atype: r.atype };
            if (Object(n.isFn)(r.getUidExt)) {
              var c = r.getUidExt(e);
              c && (d.ext = c);
            }
            if (((o.uids = [d]), Object(n.isFn)(r.getEidExt))) {
              var s = r.getEidExt(e);
              s && (o.ext = s);
            }
            return o;
          }
        }
        return null;
      }
    },
    636: function (e, t, r) {
      e.exports = r(637);
    },
    637: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasTypeVideo = b),
        (t.isValid = h),
        r.d(t, "spec", function () {
          return x;
        });
      var n = r(2),
        i = r(24),
        o = r(13),
        a = r(11),
        d = r.n(a),
        c = r(7),
        s = r(1),
        u = r(17),
        p = r(0);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function g(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var m = "https://onetag-sys.com/usync/",
        y = Object(c.b)(241);
      function b(e) {
        return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.video;
      }
      function h(e, t) {
        if (e === n.b) return j(t).length > 0;
        if (e === n.d && b(t)) {
          var r = t.mediaTypes.video.context;
          if ("outstream" === r || "instream" === r) return w(t).length > 0;
        }
        return !1;
      }
      function v(e) {
        try {
          return void 0 !== e.document.hidden
            ? e.document.hidden
            : void 0 !== e.document.msHidden
            ? e.document.msHidden
            : void 0 !== e.document.webkitHidden
            ? e.document.webkitHidden
            : null;
        } catch (e) {
          return null;
        }
      }
      function O(e) {
        var t = e.params;
        (this.adUnitCode = e.adUnitCode),
          (this.bidId = e.bidId),
          (this.bidderRequestId = e.bidderRequestId),
          (this.auctionId = e.auctionId),
          (this.transactionId = e.transactionId),
          (this.pubId = t.pubId),
          (this.ext = t.ext),
          t.pubClick && (this.click = t.pubClick),
          t.dealId && (this.dealId = t.dealId);
        var r = (function (e) {
          var t = document.getElementById(e);
          try {
            for (
              var r = t.getBoundingClientRect(),
                n = r.top,
                i = r.left,
                o = r.width,
                a = r.height,
                d = t.ownerDocument.defaultView,
                c = {
                  top: n + d.pageYOffset,
                  left: i + d.pageXOffset,
                  width: o,
                  height: a,
                },
                s = d.frameElement;
              null != s;

            ) {
              var u = s.getBoundingClientRect(),
                p = u.top,
                l = u.left;
              (c.top += p + d.pageYOffset),
                (c.left += l + d.pageXOffset),
                (s = (d = d.parent).frameElement);
            }
            return c;
          } catch (e) {
            return null;
          }
        })(e.adUnitCode);
        r && (this.coords = r);
      }
      function I() {
        try {
          if (null != window.performance && null != window.performance.timing) {
            var e = {},
              t = window.performance.timing;
            return (
              (e.pageLoadTime = t.loadEventEnd - t.navigationStart),
              (e.connectTime = t.responseEnd - t.requestStart),
              (e.renderTime = t.domComplete - t.domLoading),
              e
            );
          }
        } catch (e) {
          return null;
        }
        return null;
      }
      function w(e) {
        var t = e.mediaTypes.video.playerSize;
        return void 0 !== t && Array.isArray(t) && t.length > 0 ? T(t) : [];
      }
      function j(e) {
        return void 0 !== e.mediaTypes &&
          void 0 !== e.mediaTypes.banner &&
          void 0 !== e.mediaTypes.banner.sizes &&
          Array.isArray(e.mediaTypes.banner.sizes) &&
          e.mediaTypes.banner.sizes.length > 0
          ? T(e.mediaTypes.banner.sizes)
          : !b(e) && e.sizes && Array.isArray(e.sizes)
          ? T(e.sizes)
          : [];
      }
      function T(e) {
        for (var t = [], r = 0; r < e.length; r++) {
          var n = e[r];
          t.push({ width: n[0], height: n[1] });
        }
        return t;
      }
      var x = {
        code: "onetag",
        gvlid: 241,
        supportedMediaTypes: [n.b, n.d],
        isBidRequestValid: function (e) {
          return (
            void 0 !== e &&
            void 0 !== e.params &&
            "string" == typeof e.params.pubId &&
            (h(n.b, e) || h(n.d, e))
          );
        },
        buildRequests: function (e, t) {
          var r,
            i,
            o,
            a,
            d,
            c,
            s = f(
              {
                bids:
                  ((a = e),
                  (d = a
                    .filter(function (e) {
                      return b(e);
                    })
                    .map(function (e) {
                      var t = {};
                      return (
                        O.call(t, e),
                        (t.context = e.mediaTypes.video.context),
                        (t.playerSize = w(e)),
                        (t.mediaTypeInfo = Object(p.deepClone)(
                          e.mediaTypes.video
                        )),
                        (t.type = n.d),
                        t
                      );
                    })),
                  (c = a
                    .filter(function (e) {
                      return h(n.b, e);
                    })
                    .map(function (e) {
                      var t = {};
                      return (
                        O.call(t, e),
                        (t.sizes = j(e)),
                        (t.type = n.b),
                        (t.mediaTypeInfo = Object(p.deepClone)(
                          e.mediaTypes.banner
                        )),
                        t
                      );
                    })),
                  d.concat(c)),
              },
              ((r = (function () {
                var e = window,
                  t = window.parent,
                  r = 0;
                try {
                  for (; e !== e.parent; )
                    (t = e.parent).location.href, (e = e.parent);
                } catch (n) {
                  r = t === e.top ? 1 : 2;
                }
                return { topmostFrame: e, currentFrameNesting: r };
              })()),
              (i = r.topmostFrame),
              (o = r.currentFrameNesting),
              {
                location: i.location.href,
                referrer:
                  "" !== i.document.referrer ? i.document.referrer : null,
                ancestorOrigin:
                  window.location.ancestorOrigins &&
                  window.location.ancestorOrigins.length > 0
                    ? window.location.ancestorOrigins[
                        window.location.ancestorOrigins.length - 1
                      ]
                    : null,
                masked: o,
                wWidth: i.innerWidth,
                wHeight: i.innerHeight,
                oWidth: i.outerWidth,
                oHeight: i.outerHeight,
                sWidth: i.screen.width,
                sHeight: i.screen.height,
                aWidth: i.screen.availWidth,
                aHeight: i.screen.availHeight,
                sLeft: "screenLeft" in i ? i.screenLeft : i.screenX,
                sTop: "screenTop" in i ? i.screenTop : i.screenY,
                xOffset: i.pageXOffset,
                yOffset: i.pageYOffset,
                docHidden: v(i),
                docHeight: i.document.body
                  ? i.document.body.scrollHeight
                  : null,
                hLength: history.length,
                timing: I(),
                version: { prebid: "5.16.0", adapter: "1.1.0" },
              })
            );
          t &&
            t.gdprConsent &&
            (s.gdprConsent = {
              consentString: t.gdprConsent.consentString,
              consentRequired: t.gdprConsent.gdprApplies,
            }),
            t && t.uspConsent && (s.usPrivacy = t.uspConsent),
            e &&
              0 !== e.length &&
              e[0].userId &&
              (s.userId = Object(u.b)(e[0].userId));
          try {
            y.hasLocalStorage() &&
              (s.onetagSid = y.getDataFromLocalStorage("onetag_sid"));
          } catch (e) {}
          return {
            method: "POST",
            url: "https://onetag-sys.com/prebid-request",
            data: JSON.stringify(s),
          };
        },
        interpretResponse: function (e, t) {
          var r = e.body,
            a = [],
            c = JSON.parse(t.data);
          return !r || (r.nobid && !0 === r.nobid)
            ? a
            : r.bids && Array.isArray(r.bids) && 0 !== r.bids.length
            ? (r.bids.forEach(function (e) {
                var t = {
                  requestId: e.requestId,
                  cpm: e.cpm,
                  width: e.width,
                  height: e.height,
                  creativeId: e.creativeId,
                  dealId: null == e.dealId ? e.dealId : "",
                  currency: e.currency,
                  netRevenue: e.netRevenue || !1,
                  mediaType: e.mediaType,
                  meta: {
                    mediaType: e.mediaType,
                    advertiserDomains: e.adomain,
                  },
                  ttl: e.ttl || 300,
                };
                if (e.mediaType === n.b) t.ad = e.ad;
                else if (e.mediaType === n.d) {
                  var r = d()(c.bids, function (t) {
                      return t.bidId === e.requestId && t.type === n.d;
                    }),
                    s = r.context,
                    u = r.adUnitCode;
                  s === i.a
                    ? ((t.vastUrl = e.vastUrl),
                      (t.videoCacheKey = e.videoCacheKey))
                    : s === i.b &&
                      ((t.vastXml = e.ad),
                      (t.vastUrl = e.vastUrl),
                      e.rendererUrl &&
                        (t.renderer = (function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            r = o.a.install({
                              id: e.requestId,
                              url: e.rendererUrl,
                              config: t,
                              adUnitCode: e.adUnitCode,
                              loaded: !1,
                            });
                          try {
                            r.setRender(function (t) {
                              var r = t.renderer,
                                n = t.width,
                                i = t.height,
                                o = t.vastXml,
                                a = t.adUnitCode;
                              r.push(function () {
                                window.onetag.Player.init(
                                  f(
                                    f({}, e),
                                    {},
                                    {
                                      width: n,
                                      height: i,
                                      vastXml: o,
                                      nodeId: a,
                                      config: r.getConfig(),
                                    }
                                  )
                                );
                              });
                            });
                          } catch (e) {}
                          return r;
                        })(f(f({}, e), {}, { adUnitCode: u }))));
                }
                a.push(t);
              }),
              a)
            : a;
        },
        getUserSyncs: function (e, t, r, n) {
          var i = [],
            o = "";
          return (
            r &&
              "string" == typeof r.consentString &&
              ((o += "&gdpr_consent=" + r.consentString),
              "boolean" == typeof r.gdprApplies &&
                (o += "&gdpr=" + (r.gdprApplies ? 1 : 0))),
            n && "string" == typeof n && (o += "&us_privacy=" + n),
            e.iframeEnabled &&
              i.push({
                type: "iframe",
                url: m + "?cb=" + new Date().getTime() + o,
              }),
            e.pixelEnabled &&
              i.push({ type: "image", url: m + "?tag=img" + o }),
            i
          );
        },
      };
      Object(s.registerBidder)(x);
    },
  },
  [636]
);
pbjsChunk(
  [170],
  {
    646: function (e, t, n) {
      e.exports = n(647);
    },
    647: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n.d(t, "USER_ID_CODE_TO_QUERY_ARG", function () {
          return b;
        }),
        n.d(t, "spec", function () {
          return f;
        });
      var r = n(0),
        a = n(3),
        i = n(1),
        o = n(2),
        c = n(12),
        d = n.n(c);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function p(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              a,
              i = [],
              o = !0,
              c = !1;
            try {
              for (
                n = n.call(e);
                !(o = (r = n.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                o = !0
              );
            } catch (e) {
              (c = !0), (a = e);
            } finally {
              try {
                o || null == n.return || n.return();
              } finally {
                if (c) throw a;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return u(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var m = [o.b, o.d],
        l = [
          "startdelay",
          "mimes",
          "minduration",
          "maxduration",
          "startdelay",
          "skippable",
          "playbackmethod",
          "api",
          "protocols",
          "boxingallowed",
          "linearity",
          "delivery",
          "protocol",
          "placement",
          "minbitrate",
          "maxbitrate",
        ],
        b = {
          britepoolid: "britepoolid",
          criteoId: "criteoid",
          fabrickId: "nuestarid",
          haloId: "audigentid",
          id5id: "id5id",
          idl_env: "lre",
          IDP: "zeotapid",
          idxId: "idxid",
          intentIqId: "intentiqid",
          lipb: "lipbid",
          lotamePanoramaId: "lotameid",
          merkleId: "merkleid",
          netId: "netid",
          parrableId: "parrableid",
          pubcid: "pubcid",
          quantcastId: "quantcastid",
          tapadId: "tapadid",
          tdid: "ttduuid",
          uid2: "uid2",
          flocId: "floc",
          admixerId: "admixerid",
          deepintentId: "deepintentid",
          dmdId: "dmdid",
          nextrollId: "nextrollid",
          novatiq: "novatiqid",
          mwOpenLinkId: "mwopenlinkid",
          dapId: "dapid",
          amxId: "amxid",
        },
        f = {
          code: "openx",
          gvlid: 69,
          supportedMediaTypes: m,
          isBidRequestValid: function (e) {
            var t = e.params.delDomain || e.params.platform;
            return Object(r.deepAccess)(e, "mediaTypes.banner") && t
              ? !!e.params.unit ||
                  Object(r.deepAccess)(e, "mediaTypes.banner.sizes.length") > 0
              : !(!e.params.unit || !t);
          },
          buildRequests: function (e, t) {
            if (0 === e.length) return [];
            var n = [],
              i = p(
                (function (e) {
                  return e.reduce(
                    function (e, t) {
                      var n;
                      return (
                        (n = t),
                        (Object(r.deepAccess)(n, "mediaTypes.video") &&
                          !Object(r.deepAccess)(n, "mediaTypes.banner")) ||
                        n.mediaType === o.d
                          ? e[0].push(t)
                          : e[1].push(t),
                        e
                      );
                    },
                    [[], []]
                  );
                })(e),
                2
              ),
              c = i[0],
              s = i[1];
            return (
              s.length > 0 &&
                n.push(
                  (function (e, t) {
                    var n = [],
                      i = !1,
                      c = v(e, t),
                      d = Object(r._map)(e, function (e) {
                        return e.params.unit;
                      });
                    (c.aus = Object(r._map)(e, function (e) {
                      return Object(r.parseSizesInput)(
                        e.mediaTypes.banner.sizes
                      ).join(",");
                    }).join("|")),
                      (c.divids = Object(r._map)(e, function (e) {
                        return encodeURIComponent(e.adUnitCode);
                      }).join(",")),
                      (c.aucs = Object(r._map)(e, function (e) {
                        var t = Object(r.deepAccess)(
                          e,
                          "ortb2Imp.ext.data.pbadslot"
                        );
                        return encodeURIComponent(t || "");
                      }).join(",")),
                      d.some(function (e) {
                        return e;
                      }) && (c.auid = d.join(","));
                    e.some(function (e) {
                      return e.params.doNotTrack;
                    }) && (c.ns = 1);
                    (!0 === a.b.getConfig("coppa") ||
                      e.some(function (e) {
                        return e.params.coppa;
                      })) &&
                      (c.tfcd = 1);
                    e.forEach(function (e) {
                      if (e.params.customParams) {
                        var t = Object(r._map)(
                            Object.keys(e.params.customParams),
                            function (t) {
                              return (function (e, t) {
                                var n = t[e];
                                Object(r.isArray)(n) && (n = n.join(","));
                                return (e.toLowerCase() + "=" + n.toLowerCase())
                                  .replace("+", ".")
                                  .replace("/", "_");
                              })(t, e.params.customParams);
                            }
                          ),
                          a = window.btoa(t.join("&"));
                        (i = !0), n.push(a);
                      } else n.push("");
                    }),
                      i && (c.tps = n.join(","));
                    return (
                      y(c, o.b, e),
                      {
                        method: "GET",
                        url: c.ph
                          ? "https://u.openx.net/w/1.0/arj"
                          : "https://".concat(
                              e[0].params.delDomain,
                              "/w/1.0/arj"
                            ),
                        data: c,
                        payload: { bids: e, startTime: new Date() },
                      }
                    );
                  })(s, t)
                ),
              c.length > 0 &&
                c.forEach(function (e) {
                  n.push(
                    (function (e, t) {
                      var n = (function (e, t) {
                        var n,
                          a,
                          i = Object(r.deepAccess)(e, "mediaTypes.video"),
                          c = v([e], t),
                          s = Object(r.deepAccess)(e, "params.video") || {},
                          p = Object(r.deepAccess)(
                            e,
                            "mediaTypes.video.context"
                          ),
                          u = Object(r.deepAccess)(
                            e,
                            "mediaTypes.video.playerSize"
                          );
                        Object(r.isArray)(e.sizes) &&
                        2 === e.sizes.length &&
                        !Object(r.isArray)(e.sizes[0])
                          ? ((n = parseInt(e.sizes[0], 10)),
                            (a = parseInt(e.sizes[1], 10)))
                          : Object(r.isArray)(e.sizes) &&
                            Object(r.isArray)(e.sizes[0]) &&
                            2 === e.sizes[0].length
                          ? ((n = parseInt(e.sizes[0][0], 10)),
                            (a = parseInt(e.sizes[0][1], 10)))
                          : Object(r.isArray)(u) &&
                            2 === u.length &&
                            ((n = parseInt(u[0], 10)),
                            (a = parseInt(u[1], 10)));
                        var m = { w: n, h: a },
                          b = e.params.video || e.params.openrtb || {};
                        b.openrtb && (b = b.openrtb);
                        Object(r.isArray)(b.imp) && (b = b.imp[0].video);
                        Object.keys(b)
                          .filter(function (e) {
                            return d()(l, e);
                          })
                          .forEach(function (e) {
                            return (m[e] = b[e]);
                          }),
                          Object.keys(i)
                            .filter(function (e) {
                              return d()(l, e);
                            })
                            .forEach(function (e) {
                              return (m[e] = i[e]);
                            });
                        var f = { imp: [{ video: m }] };
                        (c.openrtb = JSON.stringify(f)),
                          (c.auid = e.params.unit),
                          (c.vwd = n || s.vwd),
                          (c.vht = a || s.vht),
                          "outstream" === p && (c.vos = "101");
                        s.mimes && (c.vmimes = s.mimes);
                        e.params.test && (c.vtest = 1);
                        var h = Object(r.deepAccess)(
                          e,
                          "ortb2Imp.ext.data.pbadslot"
                        );
                        h && (c.aucs = encodeURIComponent(h));
                        return y(c, o.d, [e]), c;
                      })(e, t);
                      return {
                        method: "GET",
                        url: n.ph
                          ? "https://u.openx.net/v/1.0/avjp"
                          : "https://".concat(
                              e.params.delDomain,
                              "/v/1.0/avjp"
                            ),
                        data: n,
                        payload: { bid: e, startTime: new Date() },
                      };
                    })(e, t)
                  );
                }),
              n
            );
          },
          interpretResponse: function (e, t) {
            var n = e.body;
            return (function (e) {
              return /avjp$/.test(e.url) ? o.d : o.b;
            })(t) === o.d
              ? (function (e, t) {
                  var n = t.bid,
                    a = (t.startTime, []);
                  if (void 0 !== e && "" !== e.vastUrl && e.pub_rev > 0) {
                    var i = Object(r.parseUrl)(e.vastUrl).search || {},
                      c = {};
                    (c.requestId = n.bidId),
                      e.deal_id && (c.dealId = e.deal_id),
                      (c.ttl = 300),
                      (c.netRevenue = !0),
                      (c.currency = e.currency),
                      (c.cpm = parseInt(e.pub_rev, 10) / 1e3),
                      (c.width = parseInt(e.width, 10)),
                      (c.height = parseInt(e.height, 10)),
                      (c.creativeId = e.adid),
                      (c.vastUrl = e.vastUrl),
                      (c.mediaType = o.d),
                      (e.ph = i.ph),
                      (e.colo = i.colo),
                      (e.ts = i.ts),
                      a.push(c);
                  }
                  return a;
                })(n, t.payload)
              : (function (e, t) {
                  for (
                    var n = t.bids, r = (t.startTime, e.ads.ad), a = [], i = 0;
                    i < r.length;
                    i++
                  ) {
                    var o = r[i],
                      c = parseInt(o.idx, 10),
                      d = {};
                    if (((d.requestId = n[c].bidId), o.pub_rev)) {
                      d.cpm = Number(o.pub_rev) / 1e3;
                      var s = o.creative[0];
                      s && ((d.width = s.width), (d.height = s.height)),
                        (d.creativeId = s.id),
                        (d.ad = o.html),
                        o.deal_id && (d.dealId = o.deal_id),
                        (d.ttl = 300),
                        (d.netRevenue = !0),
                        (d.currency = o.currency),
                        o.tbd && (d.tbd = o.tbd),
                        (d.ts = o.ts),
                        (d.meta = {}),
                        o.brand_id && (d.meta.brandId = o.brand_id),
                        o.adomain && length(o.adomain) > 0
                          ? (d.meta.advertiserDomains = o.adomain)
                          : (d.meta.advertiserDomains = []),
                        o.adv_id && (d.meta.dspid = o.adv_id),
                        a.push(d);
                    }
                  }
                  return a;
                })(n, t.payload);
          },
          getUserSyncs: function (e, t, n, a) {
            if (e.iframeEnabled || e.pixelEnabled)
              return [
                {
                  type: e.iframeEnabled ? "iframe" : "image",
                  url:
                    Object(r.deepAccess)(t, "0.body.ads.pixels") ||
                    Object(r.deepAccess)(t, "0.body.pixels") ||
                    (function (e, t) {
                      var n = "https://u.openx.net/w/1.0/pd",
                        r = [];
                      e &&
                        (r.push("gdpr=" + (e.gdprApplies ? 1 : 0)),
                        r.push(
                          "gdpr_consent=" +
                            encodeURIComponent(e.consentString || "")
                        ));
                      t && r.push("us_privacy=" + encodeURIComponent(t));
                      return ""
                        .concat(n)
                        .concat(r.length > 0 ? "?" + r.join("&") : "");
                    })(n, a),
                },
              ];
          },
          transformBidParams: function (e, t) {
            return Object(r.convertTypes)(
              { unit: "string", customFloor: "number" },
              e
            );
          },
        };
      function h(e) {
        var t,
          n,
          r,
          a = window,
          i = document,
          o = i.documentElement;
        if (e) {
          try {
            (a = window.top), (i = window.top.document);
          } catch (e) {
            return;
          }
          (o = i.documentElement),
            (r = i.body),
            (t = a.innerWidth || o.clientWidth || r.clientWidth),
            (n = a.innerHeight || o.clientHeight || r.clientHeight);
        } else
          (o = i.documentElement),
            (t = a.innerWidth || o.clientWidth),
            (n = a.innerHeight || o.clientHeight);
        return "".concat(t, "x").concat(n);
      }
      function v(e, t) {
        var n,
          i = Object(r.inIframe)();
        n = {
          ju: a.b.getConfig("pageUrl") || t.refererInfo.referer,
          ch: document.charSet || document.characterSet,
          res: ""
            .concat(screen.width, "x")
            .concat(screen.height, "x")
            .concat(screen.colorDepth),
          ifr: i,
          tz: new Date().getTimezoneOffset(),
          tws: h(i),
          be: 1,
          bc: e[0].params.bc || "".concat("hb_pb", "_").concat("3.0.3"),
          dddid: Object(r._map)(e, function (e) {
            return e.transactionId;
          }).join(","),
          nocache: new Date().getTime(),
        };
        var o,
          c,
          d,
          p,
          u,
          m = a.b.getConfig("ortb2.user.data");
        if (Array.isArray(m) && m.length > 0) {
          var l = m
              .filter(function (e) {
                return (
                  Array.isArray(e.segment) &&
                  e.segment.length > 0 &&
                  void 0 !== e.name &&
                  e.name.length > 0
                );
              })
              .reduce(function (e, t) {
                var n =
                  "object" === s(t.ext) && t.ext.segtax
                    ? "".concat(t.name, "/").concat(t.ext.segtax)
                    : t.name;
                return (
                  (e[n] = (e[n] || []).concat(
                    t.segment.map(function (e) {
                      return e.id;
                    })
                  )),
                  e
                );
              }, {}),
            f = Object.keys(l)
              .map(function (e, t) {
                return e + ":" + l[e].join("|");
              })
              .join(",");
          f.length > 0 && (n.sm = encodeURIComponent(f));
        }
        if (
          (e[0].params.platform && (n.ph = e[0].params.platform), t.gdprConsent)
        ) {
          var v = t.gdprConsent;
          void 0 !== v.consentString && (n.gdpr_consent = v.consentString),
            void 0 !== v.gdprApplies && (n.gdpr = v.gdprApplies ? 1 : 0),
            "iab" === a.b.getConfig("consentManagement.cmpApi") &&
              (n.x_gdpr_f = 1);
        }
        return (
          t && t.uspConsent && (n.us_privacy = t.uspConsent),
          Object(r.deepAccess)(e[0], "crumbs.pubcid") &&
            Object(r.deepSetValue)(
              e[0],
              "userId.pubcid",
              Object(r.deepAccess)(e[0], "crumbs.pubcid")
            ),
          (o = n),
          (c = e[0].userId),
          Object(r._each)(c, function (e, t) {
            var n = b[t];
            if (b.hasOwnProperty(t))
              switch (t) {
                case "flocId":
                case "uid2":
                  o[n] = e.id;
                  break;
                case "lipb":
                  if (
                    ((o[n] = e.lipbid),
                    Array.isArray(e.segments) && e.segments.length > 0)
                  ) {
                    var r = "liveintent:" + e.segments.join("|");
                    o.sm = ""
                      .concat(o.sm ? o.sm + encodeURIComponent(",") : "")
                      .concat(encodeURIComponent(r));
                  }
                  break;
                case "parrableId":
                  o[n] = e.eid;
                  break;
                case "id5id":
                  o[n] = e.uid;
                  break;
                case "novatiq":
                  o[n] = e.snowflake;
                  break;
                default:
                  o[n] = e;
              }
          }),
          (n = o),
          e[0].schain &&
            (n.schain =
              ((d = e[0].schain),
              ""
                .concat(d.ver, ",")
                .concat(d.complete, "!")
                .concat(
                  ((p = d.nodes),
                  (u = ["asi", "sid", "hp", "rid", "name", "domain"]),
                  p
                    .map(function (e) {
                      return u
                        .map(function (t) {
                          return e[t] || "";
                        })
                        .join(",");
                    })
                    .join("!"))
                ))),
          n
        );
      }
      function y(e, t, n) {
        var r = [],
          i = !1;
        n.forEach(function (e) {
          var n = (function (e, t) {
            var n = {},
              r = a.b.getConfig("currency.adServerCurrency") || "USD";
            "function" == typeof e.getFloor &&
              (n = e.getFloor({ currency: r, mediaType: t, size: "*" }));
            var i = n.floor || e.params.customFloor || 0;
            return Math.round(1e3 * i);
          })(e, t);
          n ? (r.push(n), (i = !0)) : r.push(0);
        }),
          i && (e.aumfs = r.join(","));
      }
      Object(i.registerBidder)(f);
    },
  },
  [646]
);
pbjsChunk(
  [165],
  {
    658: function (e, r, t) {
      e.exports = t(659);
    },
    659: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return l;
        });
      var n = t(1),
        i = t(2),
        a = t(0),
        s = t(4),
        o = t(3);
      function c(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, r) {
            if (!e) return;
            if ("string" == typeof e) return u(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(e);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return u(e, r);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n;
      }
      var p = {
          0: "title",
          2: "icon",
          3: "image",
          5: "sponsoredBy",
          4: "body",
          1: "cta",
        },
        d = {
          title: { id: 0, name: "title" },
          icon: { id: 2, type: 1, name: "img" },
          image: { id: 3, type: 3, name: "img" },
          sponsoredBy: { id: 5, name: "data", type: 1 },
          body: { id: 4, name: "data", type: 2 },
          cta: { id: 1, type: 12, name: "data" },
        },
        l = {
          code: "outbrain",
          gvlid: 164,
          supportedMediaTypes: [i.c, i.b],
          isBidRequestValid: function (e) {
            return !(
              !o.b.getConfig("outbrain.bidderUrl") ||
              !Object(a.deepAccess)(e, "params.publisher.id") ||
              (!e.nativeParams && !e.sizes)
            );
          },
          buildRequests: function (e, r) {
            var t = r.refererInfo.referer,
              n = navigator.userAgent,
              i = m(e, "params.test"),
              s = m(e, "params.publisher"),
              c = m(e, "params.bcat"),
              u = m(e, "params.badv"),
              p = o.b.getConfig("outbrain.bidderUrl"),
              d = r.timeout,
              l = e.map(function (e, r) {
                e.netRevenue = "net";
                var t = { id: r + 1 + "" };
                return (
                  e.params.tagid && (t.tagid = e.params.tagid),
                  e.nativeParams
                    ? (t.native = { request: JSON.stringify({ assets: b(e) }) })
                    : (t.banner = { format: g(e.sizes) }),
                  t
                );
              }),
              f = {
                id: r.auctionId,
                site: { page: t, publisher: s },
                device: { ua: n },
                source: { fd: 1 },
                cur: ["USD"],
                tmax: d,
                imp: l,
                bcat: c,
                badv: u,
                ext: {
                  prebid: { channel: { name: "pbjs", version: "5.16.0" } },
                },
              };
            return (
              i && ((f.is_debug = !!i), (f.test = 1)),
              Object(a.deepAccess)(r, "gdprConsent.gdprApplies") &&
                (Object(a.deepSetValue)(
                  f,
                  "user.ext.consent",
                  r.gdprConsent.consentString
                ),
                Object(a.deepSetValue)(
                  f,
                  "regs.ext.gdpr",
                  1 & r.gdprConsent.gdprApplies
                )),
              r.uspConsent &&
                Object(a.deepSetValue)(f, "regs.ext.us_privacy", r.uspConsent),
              !0 === o.b.getConfig("coppa") &&
                Object(a.deepSetValue)(
                  f,
                  "regs.coppa",
                  1 & o.b.getConfig("coppa")
                ),
              { method: "POST", url: p, data: JSON.stringify(f), bids: e }
            );
          },
          interpretResponse: function (e, r) {
            var t = r.bids;
            if (!e.body) return [];
            var n = e.body,
              a = n.seatbid,
              s = n.cur,
              o = f(
                a.map(function (e) {
                  return e.bid;
                })
              ).reduce(function (e, r) {
                return (e[r.impid - 1] = r), e;
              }, []);
            return t
              .map(function (e, r) {
                var t = o[r];
                if (t) {
                  var n = e.nativeParams ? i.c : i.b,
                    a = {
                      requestId: e.bidId,
                      cpm: t.price,
                      creativeId: t.crid,
                      ttl: 360,
                      netRevenue: "net" === e.netRevenue,
                      currency: s,
                      mediaType: n,
                      nurl: t.nurl,
                    };
                  return (
                    n === i.c
                      ? (a.native = (function (e) {
                          var r = JSON.parse(e.adm),
                            t = r.assets,
                            n = r.link,
                            i = r.eventtrackers,
                            a = {
                              clickUrl: n.url,
                              clickTrackers: n.clicktrackers || void 0,
                            };
                          t.forEach(function (e) {
                            var r = p[e.id],
                              t = r && e[d[r].name];
                            t &&
                              (a[r] = t.text ||
                                t.value || {
                                  url: t.url,
                                  width: t.w,
                                  height: t.h,
                                });
                          }),
                            i &&
                              ((a.impressionTrackers = []),
                              i.forEach(function (e) {
                                if (1 === e.event)
                                  switch (e.method) {
                                    case 1:
                                      a.impressionTrackers.push(e.url);
                                      break;
                                    case 2:
                                      a.javascriptTrackers =
                                        '<script src="'.concat(
                                          e.url,
                                          '"></script>'
                                        );
                                  }
                              }));
                          return a;
                        })(t))
                      : ((a.ad = t.adm), (a.width = t.w), (a.height = t.h)),
                    (a.meta = {}),
                    t.adomain &&
                      t.adomain.length > 0 &&
                      (a.meta.advertiserDomains = t.adomain),
                    a
                  );
                }
              })
              .filter(Boolean);
          },
          getUserSyncs: function (e, r, t, n) {
            var i = [],
              a = o.b.getConfig("outbrain.usersyncUrl"),
              s = [];
            return (
              e.pixelEnabled &&
                a &&
                (t &&
                  (s.push("gdpr=" + (1 & t.gdprApplies)),
                  s.push(
                    "gdpr_consent=" + encodeURIComponent(t.consentString || "")
                  )),
                n && s.push("us_privacy=" + encodeURIComponent(n)),
                i.push({
                  type: "image",
                  url: a + (s.length ? "?" + s.join("&") : ""),
                })),
              i
            );
          },
          onBidWon: function (e) {
            e.nurl &&
              Object(s.a)(Object(a.replaceAuctionPrice)(e.nurl, e.originalCpm));
          },
        };
      function m(e, r) {
        for (var t, n = 0; n < e.length; n++)
          if ((t = Object(a.deepAccess)(e[n], r))) return t;
      }
      function f(e) {
        var r;
        return (r = []).concat.apply(r, c(e));
      }
      function b(e) {
        return Object(a._map)(e.nativeParams, function (e, r) {
          var t = d[r],
            n = { required: 1 & e.required };
          if (t) {
            var i, a, s, o;
            n.id = t.id;
            var c = e.aspect_ratios;
            if (
              (c &&
                c[0] &&
                ((i = (c = c[0]).min_width || 0),
                (a = ((c.ratio_height * i) / c.ratio_width) | 0)),
              e.sizes)
            ) {
              var u = f(e.sizes);
              (s = u[0]), (o = u[1]);
            }
            return (
              (n[t.name] = {
                len: e.len,
                type: t.type,
                wmin: i,
                hmin: a,
                w: s,
                h: o,
              }),
              n
            );
          }
        }).filter(Boolean);
      }
      function g(e) {
        return Object(a.isArray)(e)
          ? 2 !== e.length || Object(a.isArray)(e[0])
            ? Object(a.isArray)(e[0])
              ? e.map(function (e) {
                  return { w: parseInt(e[0], 10), h: parseInt(e[1], 10) };
                })
              : []
            : [{ w: parseInt(e[0], 10), h: parseInt(e[1], 10) }]
          : [];
      }
      Object(n.registerBidder)(l);
    },
  },
  [658]
);
pbjsChunk(
  [153],
  {
    689: function (e, r, t) {
      e.exports = t(690);
    },
    690: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return F;
        });
      var a = t(0),
        i = t(1),
        n = t(2),
        s = t(3),
        o = t(13);
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function p(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function u(e) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var l = "pubmatic",
        m = "PubMatic: ",
        b = "USD",
        g = void 0,
        f = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
        h = {
          kadpageurl: "",
          gender: "",
          yob: "",
          lat: "",
          lon: "",
          wiid: "",
          profId: "",
          verId: "",
        },
        y = "number",
        v = "string",
        O = "boolean",
        E = "array",
        I = {
          mimes: E,
          minduration: y,
          maxduration: y,
          startdelay: y,
          playbackmethod: E,
          api: E,
          protocols: E,
          w: y,
          h: y,
          battr: E,
          linearity: y,
          placement: y,
          minbitrate: y,
          maxbitrate: y,
          skip: y,
        },
        w = {
          TITLE: { ID: 1, KEY: "title", TYPE: 0 },
          IMAGE: { ID: 2, KEY: "image", TYPE: 0 },
          ICON: { ID: 3, KEY: "icon", TYPE: 0 },
          SPONSOREDBY: { ID: 4, KEY: "sponsoredBy", TYPE: 1 },
          BODY: { ID: 5, KEY: "body", TYPE: 2 },
          CLICKURL: { ID: 6, KEY: "clickUrl", TYPE: 0 },
          VIDEO: { ID: 7, KEY: "video", TYPE: 0 },
          EXT: { ID: 8, KEY: "ext", TYPE: 0 },
          DATA: { ID: 9, KEY: "data", TYPE: 0 },
          LOGO: { ID: 10, KEY: "logo", TYPE: 0 },
          SPONSORED: { ID: 11, KEY: "sponsored", TYPE: 1 },
          DESC: { ID: 12, KEY: "data", TYPE: 2 },
          RATING: { ID: 13, KEY: "rating", TYPE: 3 },
          LIKES: { ID: 14, KEY: "likes", TYPE: 4 },
          DOWNLOADS: { ID: 15, KEY: "downloads", TYPE: 5 },
          PRICE: { ID: 16, KEY: "price", TYPE: 6 },
          SALEPRICE: { ID: 17, KEY: "saleprice", TYPE: 7 },
          PHONE: { ID: 18, KEY: "phone", TYPE: 8 },
          ADDRESS: { ID: 19, KEY: "address", TYPE: 9 },
          DESC2: { ID: 20, KEY: "desc2", TYPE: 10 },
          DISPLAYURL: { ID: 21, KEY: "displayurl", TYPE: 11 },
          CTA: { ID: 22, KEY: "cta", TYPE: 12 },
        },
        j = 1,
        P = 2,
        T = 3,
        S = [
          { id: w.SPONSOREDBY.ID, required: !0, data: { type: 1 } },
          { id: w.TITLE.ID, required: !0 },
          { id: w.IMAGE.ID, required: !0 },
        ],
        D = { 1: "PMP", 5: "PREF", 6: "PMPG" },
        x = 1,
        Y = 2,
        R = {
          bootstrapPlayer: function (e) {
            var r = { code: e.adUnitCode };
            if (
              (e.vastXml
                ? (r.vastXml = e.vastXml)
                : e.vastUrl && (r.vastUrl = e.vastUrl),
              e.vastXml || e.vastUrl)
            ) {
              for (
                var t,
                  i = R.getRendererId("pubmatic", e.rendererCode),
                  n = document.getElementById(e.adUnitCode),
                  s = 0;
                s < window.bluebillywig.renderers.length;
                s++
              )
                if (window.bluebillywig.renderers[s]._id === i) {
                  t = window.bluebillywig.renderers[s];
                  break;
                }
              t
                ? t.bootstrap(r, n)
                : Object(a.logWarn)(
                    "".concat(m, ": Couldn't find a renderer with ").concat(i)
                  );
            } else
              Object(a.logWarn)(
                "".concat(m, ": No vastXml or vastUrl on bid, bailing...")
              );
          },
          newRenderer: function (e, r) {
            var t = f.replace("$RENDERER", e),
              i = o.a.install({ url: t, loaded: !1, adUnitCode: r });
            try {
              i.setRender(R.outstreamRender);
            } catch (e) {
              Object(a.logWarn)(
                "".concat(m, ": Error tying to setRender on renderer"),
                e
              );
            }
            return i;
          },
          outstreamRender: function (e) {
            e.renderer.push(function () {
              R.bootstrapPlayer(e);
            });
          },
          getRendererId: function (e, r) {
            return "".concat(e, "-").concat(r);
          },
        },
        k = [n.b, n.d, n.c],
        A = 0,
        C = !1,
        z = {},
        K = {};
      function N(e, r) {
        if (!Object(a.isStr)(r))
          return (
            r &&
              Object(a.logWarn)(
                "PubMatic: Ignoring param key: " +
                  e +
                  ", expects string-value, found " +
                  u(r)
              ),
            g
          );
        switch (e) {
          case "pmzoneid":
            return r
              .split(",")
              .slice(0, 50)
              .map(function (e) {
                return e.trim();
              })
              .join();
          case "kadfloor":
          case "lat":
          case "lon":
            return parseFloat(r) || g;
          case "yob":
            return parseInt(r) || g;
          default:
            return r;
        }
      }
      function M(e) {
        var r;
        (e.params.adUnit = ""),
          (e.params.adUnitIndex = "0"),
          (e.params.width = 0),
          (e.params.height = 0),
          (e.params.adSlot =
            ((r = e.params.adSlot),
            Object(a.isStr)(r)
              ? r.replace(/^\s+/g, "").replace(/\s+$/g, "")
              : (r &&
                  Object(a.logWarn)(
                    "pubmatic: adSlot must be a string. Ignoring adSlot"
                  ),
                "")));
        var t = e.params.adSlot,
          i = t.split(":");
        if (
          ((t = i[0]),
          2 == i.length && (e.params.adUnitIndex = i[1]),
          (i = t.split("@")),
          (e.params.adUnit = i[0]),
          i.length > 1)
        ) {
          if (2 != (i = i[1].split("x")).length)
            return void Object(a.logWarn)(
              "PubMatic: AdSlot Error: adSlot not in required format"
            );
          (e.params.width = parseInt(i[0], 10)),
            (e.params.height = parseInt(i[1], 10));
        } else if (
          e.hasOwnProperty("mediaTypes") &&
          e.mediaTypes.hasOwnProperty(n.b) &&
          e.mediaTypes.banner.hasOwnProperty("sizes")
        ) {
          for (var s = 0, o = []; s < e.mediaTypes.banner.sizes.length; s++)
            2 === e.mediaTypes.banner.sizes[s].length &&
              o.push(e.mediaTypes.banner.sizes[s]);
          (e.mediaTypes.banner.sizes = o),
            e.mediaTypes.banner.sizes.length >= 1 &&
              ((e.params.width = e.mediaTypes.banner.sizes[0][0]),
              (e.params.height = e.mediaTypes.banner.sizes[0][1]),
              (e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(
                1,
                e.mediaTypes.banner.sizes.length - 1
              )));
        }
      }
      function U(e, r, t) {
        var i,
          n = "Ignoring param key: " + e + ", expects " + t + ", found " + u(r);
        switch (t) {
          case O:
            i = a.isBoolean;
            break;
          case y:
            i = a.isNumber;
            break;
          case v:
            i = a.isStr;
            break;
          case E:
            i = a.isArray;
        }
        return i(r) ? r : (Object(a.logWarn)(m + n), g);
      }
      function q(e, r) {
        var t = e.KEY;
        return {
          id: e.ID,
          required: r[t].required ? 1 : 0,
          data: { type: e.TYPE, len: r[t].len, ext: r[t].ext },
        };
      }
      function L(e) {
        var r = { assets: [] };
        for (var t in e) {
          if (e.hasOwnProperty(t)) {
            var i = {};
            if (
              !(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(t))
            )
              switch (t) {
                case w.TITLE.KEY:
                  e[t].len || e[t].length
                    ? (i = {
                        id: w.TITLE.ID,
                        required: e[t].required ? 1 : 0,
                        title: { len: e[t].len || e[t].length, ext: e[t].ext },
                      })
                    : Object(a.logWarn)(
                        "PubMatic: Error: Title Length is required for native ad: " +
                          JSON.stringify(e)
                      );
                  break;
                case w.IMAGE.KEY:
                  e[t].sizes && e[t].sizes.length > 0
                    ? (i = {
                        id: w.IMAGE.ID,
                        required: e[t].required ? 1 : 0,
                        img: {
                          type: T,
                          w:
                            e[t].w ||
                            e[t].width ||
                            (e[t].sizes ? e[t].sizes[0] : g),
                          h:
                            e[t].h ||
                            e[t].height ||
                            (e[t].sizes ? e[t].sizes[1] : g),
                          wmin:
                            e[t].wmin ||
                            e[t].minimumWidth ||
                            (e[t].minsizes ? e[t].minsizes[0] : g),
                          hmin:
                            e[t].hmin ||
                            e[t].minimumHeight ||
                            (e[t].minsizes ? e[t].minsizes[1] : g),
                          mimes: e[t].mimes,
                          ext: e[t].ext,
                        },
                      })
                    : Object(a.logWarn)(
                        "PubMatic: Error: Image sizes is required for native ad: " +
                          JSON.stringify(e)
                      );
                  break;
                case w.ICON.KEY:
                  e[t].sizes && e[t].sizes.length > 0
                    ? (i = {
                        id: w.ICON.ID,
                        required: e[t].required ? 1 : 0,
                        img: {
                          type: j,
                          w:
                            e[t].w ||
                            e[t].width ||
                            (e[t].sizes ? e[t].sizes[0] : g),
                          h:
                            e[t].h ||
                            e[t].height ||
                            (e[t].sizes ? e[t].sizes[1] : g),
                        },
                      })
                    : Object(a.logWarn)(
                        "PubMatic: Error: Icon sizes is required for native ad: " +
                          JSON.stringify(e)
                      );
                  break;
                case w.VIDEO.KEY:
                  i = {
                    id: w.VIDEO.ID,
                    required: e[t].required ? 1 : 0,
                    video: {
                      minduration: e[t].minduration,
                      maxduration: e[t].maxduration,
                      protocols: e[t].protocols,
                      mimes: e[t].mimes,
                      ext: e[t].ext,
                    },
                  };
                  break;
                case w.EXT.KEY:
                  i = { id: w.EXT.ID, required: e[t].required ? 1 : 0 };
                  break;
                case w.LOGO.KEY:
                  i = {
                    id: w.LOGO.ID,
                    required: e[t].required ? 1 : 0,
                    img: {
                      type: P,
                      w:
                        e[t].w ||
                        e[t].width ||
                        (e[t].sizes ? e[t].sizes[0] : g),
                      h:
                        e[t].h ||
                        e[t].height ||
                        (e[t].sizes ? e[t].sizes[1] : g),
                    },
                  };
                  break;
                case w.SPONSOREDBY.KEY:
                case w.BODY.KEY:
                case w.RATING.KEY:
                case w.LIKES.KEY:
                case w.DOWNLOADS.KEY:
                case w.PRICE.KEY:
                case w.SALEPRICE.KEY:
                case w.PHONE.KEY:
                case w.ADDRESS.KEY:
                case w.DESC2.KEY:
                case w.DISPLAYURL.KEY:
                case w.CTA.KEY:
                  i = q(K[t], e);
              }
          }
          i && i.id && (r.assets[r.assets.length] = i);
        }
        var n = S.length,
          s = 0;
        return (
          S.forEach(function (e) {
            for (var t = r.assets.length, a = 0; a < t; a++)
              if (e.id == r.assets[a].id) {
                s++;
                break;
              }
          }),
          (C = n != s),
          r
        );
      }
      function W(e) {
        var r,
          t = e.mediaTypes.banner.sizes,
          i = [];
        if (t !== g && Object(a.isArray)(t)) {
          if (((r = {}), e.params.width || e.params.height))
            (r.w = e.params.width), (r.h = e.params.height);
          else {
            if (0 === t.length)
              return (
                (r = g),
                Object(a.logWarn)(
                  "PubMatic: Error: mediaTypes.banner.size missing for adunit: " +
                    e.params.adUnit +
                    ". Ignoring the banner impression in the adunit."
                ),
                r
              );
            (r.w = parseInt(t[0][0], 10)),
              (r.h = parseInt(t[0][1], 10)),
              (t = t.splice(1, t.length - 1));
          }
          t.length > 0 &&
            ((i = []),
            t.forEach(function (e) {
              e.length > 1 && i.push({ w: e[0], h: e[1] });
            }),
            i.length > 0 && (r.format = i)),
            (r.pos = 0),
            (r.topframe = Object(a.inIframe)() ? 0 : 1);
        } else
          Object(a.logWarn)(
            "PubMatic: Error: mediaTypes.banner.size missing for adunit: " +
              e.params.adUnit +
              ". Ignoring the banner impression in the adunit."
          ),
            (r = g);
        return r;
      }
      function _(e) {
        var r,
          t = Object(a.mergeDeep)(
            Object(a.deepAccess)(e.mediaTypes, "video"),
            e.params.video
          );
        if (t !== g) {
          for (var i in ((r = {}), I))
            t.hasOwnProperty(i) && (r[i] = U(i, t[i], I[i]));
          Object(a.isArray)(e.mediaTypes.video.playerSize[0])
            ? ((r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10)),
              (r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)))
            : Object(a.isNumber)(e.mediaTypes.video.playerSize[0]) &&
              ((r.w = parseInt(e.mediaTypes.video.playerSize[0], 10)),
              (r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)));
        } else
          (r = g),
            Object(a.logWarn)(
              "PubMatic: Error: Video config params missing for adunit: " +
                e.params.adUnit +
                " with mediaType set as video. Ignoring video impression in the adunit."
            );
        return r;
      }
      function B(e, r) {
        var t,
          i,
          o = {},
          d = {},
          l = e.hasOwnProperty("sizes") ? e.sizes : [],
          f = "",
          h = [];
        if (
          ((function (e, r) {
            r.params.deals &&
              (Object(a.isArray)(r.params.deals)
                ? r.params.deals.forEach(function (r) {
                    Object(a.isStr)(r) && r.length > 3
                      ? (e.pmp || (e.pmp = { private_auction: 0, deals: [] }),
                        e.pmp.deals.push({ id: r }))
                      : Object(a.logWarn)(
                          "PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " +
                            r
                        );
                  })
                : Object(a.logWarn)(
                    "PubMatic: Error: bid.params.deals should be an array of strings."
                  ));
          })(
            (o = {
              id: e.bidId,
              tagid: e.params.adUnit || void 0,
              bidfloor: N("kadfloor", e.params.kadfloor),
              secure: 1,
              ext: { pmZoneId: N("pmzoneid", e.params.pmzoneid) },
              bidfloorcur: e.params.currency
                ? N("currency", e.params.currency)
                : b,
            }),
            e
          ),
          (function (e, r) {
            var t,
              i = "";
            if (r.params.dctr)
              if (((i = r.params.dctr), Object(a.isStr)(i) && i.length > 0)) {
                var n = i.split("|");
                (i = ""),
                  n.forEach(function (e) {
                    i += e.length > 0 ? e.trim() + "|" : "";
                  }),
                  (t = i.length),
                  "|" === i.substring(t, t - 1) && (i = i.substring(0, t - 1)),
                  (e.ext.key_val = i.trim());
              } else
                Object(a.logWarn)(
                  "PubMatic: Ignoring param : dctr with value : " +
                    i +
                    ", expects string-value, found empty or non-string value"
                );
          })(o, e),
          (function (e, r) {
            var t =
                (r.rtd && r.rtd.jwplayer && r.rtd.jwplayer.targeting) || void 0,
              a = "";
            if (void 0 !== t && "" !== t && t.hasOwnProperty("segments")) {
              var i = t.segments.length;
              a += "jw-id=" + t.content.id;
              for (var n = 0; n < i; n++) a += "|jw-" + t.segments[n] + "=1";
              var s = e.ext;
              s && void 0 === s.key_val
                ? (s.key_val = a)
                : (s.key_val += "|" + a);
            }
          })(o, e),
          e.hasOwnProperty("mediaTypes"))
        )
          for (f in e.mediaTypes)
            switch (f) {
              case n.b:
                (t = W(e)) !== g && (o.banner = t);
                break;
              case n.c:
                (d.request = JSON.stringify(L(e.nativeParams))),
                  C
                    ? Object(a.logWarn)(
                        "PubMatic: Error: Error in Native adunit " +
                          e.params.adUnit +
                          ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details."
                      )
                    : (o.native = d);
                break;
              case n.d:
                (i = _(e)) !== g && (o.video = i);
            }
        else
          (t = {
            pos: 0,
            w: e.params.width,
            h: e.params.height,
            topframe: Object(a.inIframe)() ? 0 : 1,
          }),
            Object(a.isArray)(l) &&
              l.length > 1 &&
              ((l = l.splice(1, l.length - 1)).forEach(function (e) {
                h.push({ w: e[0], h: e[1] });
              }),
              (t.format = h)),
            (o.banner = t);
        return (
          (function (e, r) {
            var t = (function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2
                  ? c(Object(t), !0).forEach(function (r) {
                      p(e, r, t[r]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : c(Object(t)).forEach(function (r) {
                      Object.defineProperty(
                        e,
                        r,
                        Object.getOwnPropertyDescriptor(t, r)
                      );
                    });
              }
              return e;
            })({}, Object(a.deepAccess)(r, "ortb2Imp.ext.data"));
            Object.keys(t).forEach(function (r) {
              "pbadslot" === r
                ? "string" == typeof t[r] &&
                  t[r] &&
                  Object(a.deepSetValue)(e, "ext.data.pbadslot", t[r])
                : "adserver" === r
                ? ["name", "adslot"].forEach(function (r) {
                    var i = Object(a.deepAccess)(t, "adserver.".concat(r));
                    "string" == typeof i &&
                      i &&
                      (Object(a.deepSetValue)(
                        e,
                        "ext.data.adserver.".concat(r.toLowerCase()),
                        i
                      ),
                      "adslot" === r &&
                        Object(a.deepSetValue)(e, "ext.dfp_ad_unit_code", i));
                  })
                : Object(a.deepSetValue)(e, "ext.data.".concat(r), t[r]);
            });
          })(o, e),
          (function (e, r) {
            var t = -1;
            "function" != typeof r.getFloor ||
              s.b.getConfig("pubmatic.disableFloors") ||
              [n.b, n.d, n.c].forEach(function (i) {
                if (e.hasOwnProperty(i)) {
                  var n = [];
                  "banner" === i &&
                    (e[i].w && e[i].h && n.push([e[i].w, e[i].h]),
                    Object(a.isArray)(e[i].format) &&
                      e[i].format.forEach(function (e) {
                        return n.push([e.w, e.h]);
                      })),
                    0 === n.length && n.push("*"),
                    n.forEach(function (n) {
                      var s = r.getFloor({
                        currency: e.bidfloorcur,
                        mediaType: i,
                        size: n,
                      });
                      if (
                        (Object(a.logInfo)(
                          m,
                          "floor from floor module returned for mediatype:",
                          i,
                          " and size:",
                          n,
                          " is: currency",
                          s.currency,
                          "floor",
                          s.floor
                        ),
                        "object" === u(s) &&
                          s.currency === e.bidfloorcur &&
                          !isNaN(parseInt(s.floor)))
                      ) {
                        var o = parseFloat(s.floor);
                        Object(a.logInfo)(
                          m,
                          "floor from floor module:",
                          o,
                          "previous floor value",
                          t,
                          "Min:",
                          Math.min(o, t)
                        ),
                          (t = -1 === t ? o : Math.min(o, t)),
                          Object(a.logInfo)(m, "new floor value:", t);
                      }
                    });
                }
              });
            e.bidfloor &&
              (Object(a.logInfo)(
                m,
                "floor from floor module:",
                t,
                "impObj.bidfloor",
                e.bidfloor,
                "Max:",
                Math.max(t, e.bidfloor)
              ),
              (t = Math.max(t, e.bidfloor)));
            (e.bidfloor = !isNaN(t) && t > 0 ? t : g),
              Object(a.logInfo)(m, "new impObj.bidfloor value:", e.bidfloor);
          })(o, e),
          o.hasOwnProperty(n.b) ||
          o.hasOwnProperty(n.c) ||
          o.hasOwnProperty(n.d)
            ? o
            : g
        );
      }
      function V(e, r) {
        var t = null,
          i = Object(a.deepAccess)(e, "0.userId.flocId");
        if (i && i.id)
          switch (r) {
            case Y:
              t = {
                id: "FLOC",
                name: "FLOC",
                ext: { ver: i.version },
                segment: [
                  { id: i.id, name: "chrome.com", value: i.id.toString() },
                ],
              };
              break;
            case x:
            default:
              t = {
                source: "chrome.com",
                uids: [{ atype: 1, id: i.id, ext: { ver: i.version } }],
              };
          }
        return t;
      }
      function G(e) {
        return !0 === Object(a.isArray)(e) && e.length > 0;
      }
      Object(a._each)(w, function (e) {
        z[e.ID] = e.KEY;
      }),
        Object(a._each)(w, function (e) {
          K[e.KEY] = e;
        });
      var F = {
        code: l,
        gvlid: 76,
        supportedMediaTypes: [n.b, n.d, n.c],
        isBidRequestValid: function (e) {
          if (e && e.params) {
            if (!Object(a.isStr)(e.params.publisherId))
              return (
                Object(a.logWarn)(
                  "PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " +
                    JSON.stringify(e)
                ),
                !1
              );
            if (
              e.hasOwnProperty("mediaTypes") &&
              e.mediaTypes.hasOwnProperty(n.d)
            ) {
              var r = Object(a.deepAccess)(e.mediaTypes, "video.mimes"),
                t = Object(a.deepAccess)(e, "params.video.mimes");
              if (!1 === G(r) && !1 === G(t))
                return (
                  Object(a.logWarn)(
                    "PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" +
                      JSON.stringify(e)
                  ),
                  !1
                );
              if (!e.mediaTypes[n.d].hasOwnProperty("context"))
                return (
                  Object(a.logError)(
                    "".concat(
                      m,
                      ": no context specified in bid. Rejecting bid: "
                    ),
                    e
                  ),
                  !1
                );
              if (
                "outstream" === e.mediaTypes[n.d].context &&
                !Object(a.isStr)(e.params.outstreamAU) &&
                !e.hasOwnProperty("renderer") &&
                !e.mediaTypes[n.d].hasOwnProperty("renderer")
              )
                return e.mediaTypes.hasOwnProperty(n.b) ||
                  e.mediaTypes.hasOwnProperty(n.c)
                  ? (delete e.mediaTypes[n.d],
                    Object(a.logWarn)(
                      "".concat(
                        m,
                        ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '
                      ),
                      e
                    ),
                    !0)
                  : (Object(a.logError)(
                      "".concat(
                        m,
                        ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '
                      ),
                      e
                    ),
                    !1);
            }
            return !0;
          }
          return !1;
        },
        buildRequests: function (e, r) {
          var t;
          r && r.refererInfo && (t = r.refererInfo);
          var i,
            o = (function (e) {
              return {
                pageURL: e && e.referer ? e.referer : window.location.href,
                refURL: window.document.referrer,
              };
            })(t),
            c = (function (e) {
              return {
                id: "" + new Date().getTime(),
                at: 1,
                cur: [b],
                imp: [],
                site: { page: e.pageURL, ref: e.refURL, publisher: {} },
                device: {
                  ua: navigator.userAgent,
                  js: 1,
                  dnt:
                    "yes" == navigator.doNotTrack ||
                    "1" == navigator.doNotTrack ||
                    "1" == navigator.msDoNotTrack
                      ? 1
                      : 0,
                  h: screen.height,
                  w: screen.width,
                  language: navigator.language,
                },
                user: {},
                ext: {},
              };
            })(o),
            p = "",
            l = [],
            m = [];
          if (
            (e.forEach(function (e) {
              if (
                (((i = Object(a.deepClone)(e)).params.adSlot =
                  i.params.adSlot || ""),
                M(i),
                i.params.hasOwnProperty("video"))
              );
              else if (
                !(
                  (i.hasOwnProperty("mediaTypes") &&
                    i.mediaTypes.hasOwnProperty(n.c)) ||
                  0 !== i.params.width ||
                  0 !== i.params.height
                )
              )
                return void Object(a.logWarn)(
                  "PubMatic: Skipping the non-standard adslot: ",
                  i.params.adSlot,
                  JSON.stringify(i)
                );
              (o.pubId = o.pubId || i.params.publisherId),
                ((o = (function (e, r) {
                  var t, i, n;
                  for (t in (r.kadpageurl || (r.kadpageurl = r.pageURL), h))
                    h.hasOwnProperty(t) &&
                      (i = e[t]) &&
                      ("object" === u((n = h[t])) && (i = n.f(i, r)),
                      Object(a.isStr)(i)
                        ? (r[t] = i)
                        : Object(a.logWarn)(
                            "PubMatic: Ignoring param : " +
                              t +
                              " with value : " +
                              h[t] +
                              ", expects string-value, found " +
                              u(i)
                          ));
                  return r;
                })(i.params, o)).transactionId = i.transactionId),
                "" === p
                  ? (p = i.params.currency || g)
                  : i.params.hasOwnProperty("currency") &&
                    p !== i.params.currency &&
                    Object(a.logWarn)(
                      "PubMatic: Currency specifier ignored. Only one currency permitted."
                    ),
                (i.params.currency = p),
                i.params.hasOwnProperty("dctr") &&
                  Object(a.isStr)(i.params.dctr) &&
                  l.push(i.params.dctr),
                i.params.hasOwnProperty("bcat") &&
                  Object(a.isArray)(i.params.bcat) &&
                  (m = m.concat(i.params.bcat));
              var r = B(i);
              r && c.imp.push(r);
            }),
            0 != c.imp.length)
          ) {
            var f, y;
            (c.site.publisher.id = o.pubId.trim()),
              (A = o.pubId.trim()),
              (c.ext.wrapper = {}),
              (c.ext.wrapper.profile = parseInt(o.profId) || g),
              (c.ext.wrapper.version = parseInt(o.verId) || g),
              (c.ext.wrapper.wiid = o.wiid || r.auctionId),
              (c.ext.wrapper.wv = "prebid_prebid_5.16.0"),
              (c.ext.wrapper.transactionId = o.transactionId),
              (c.ext.wrapper.wp = "pbjs"),
              (c.user.gender = o.gender ? o.gender.trim() : g),
              (c.user.geo = {}),
              (c.user.geo.lat = N("lat", o.lat)),
              (c.user.geo.lon = N("lon", o.lon)),
              (c.user.yob = N("yob", o.yob)),
              (c.device.geo = c.user.geo),
              (c.site.page = o.kadpageurl.trim() || c.site.page.trim()),
              (c.site.domain =
                ((f = c.site.page),
                ((y = document.createElement("a")).href = f),
                y.hostname)),
              "object" === u(s.b.getConfig("content")) &&
                (c.site.content = s.b.getConfig("content")),
              "object" === u(s.b.getConfig("device")) &&
                (c.device = d(c.device, s.b.getConfig("device"))),
              Object(a.deepSetValue)(c, "source.tid", o.transactionId),
              -1 !== window.location.href.indexOf("pubmaticTest=true") &&
                (c.test = 1),
              e[0].schain &&
                Object(a.deepSetValue)(c, "source.ext.schain", e[0].schain),
              r &&
                r.gdprConsent &&
                (Object(a.deepSetValue)(
                  c,
                  "user.ext.consent",
                  r.gdprConsent.consentString
                ),
                Object(a.deepSetValue)(
                  c,
                  "regs.ext.gdpr",
                  r.gdprConsent.gdprApplies ? 1 : 0
                )),
              r &&
                r.uspConsent &&
                Object(a.deepSetValue)(c, "regs.ext.us_privacy", r.uspConsent),
              !0 === s.b.getConfig("coppa") &&
                Object(a.deepSetValue)(c, "regs.coppa", 1),
              (function (e, r) {
                var t = Object(a.deepAccess)(r, "0.userIdAsEids"),
                  i = V(r, x);
                i && (t || (t = []), t.push(i)),
                  Object(a.isArray)(t) &&
                    t.length > 0 &&
                    Object(a.deepSetValue)(e, "user.eids", t);
              })(c, e),
              (function (e, r) {
                (r = r
                  .filter(function (e) {
                    return (
                      "string" == typeof e ||
                      (Object(a.logWarn)(
                        "PubMatic: bcat: Each category should be a string, ignoring category: " +
                          e
                      ),
                      !1)
                    );
                  })
                  .map(function (e) {
                    return e.trim();
                  })
                  .filter(function (e, r, t) {
                    if (e.length > 3) return t.indexOf(e) === r;
                    Object(a.logWarn)(
                      "PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " +
                        e
                    );
                  })).length > 0 &&
                  (Object(a.logWarn)("PubMatic: bcat: Selected: ", r),
                  (e.bcat = r));
              })(c, m),
              (function (e, r) {
                var t = V(r, Y);
                t &&
                  (e.user || (e.user = {}),
                  e.user.data || (e.user.data = []),
                  e.user.data.push(t));
              })(c, e);
            var v = s.b.getConfig("ortb2") || {};
            return (
              v.site && Object(a.mergeDeep)(c, { site: v.site }),
              v.user && Object(a.mergeDeep)(c, { user: v.user }),
              "object" === u(s.b.getConfig("app")) &&
                ((c.app = s.b.getConfig("app")),
                (c.app.publisher = c.site.publisher),
                (c.app.ext = c.site.ext || g),
                "object" !== u(c.app.content) &&
                  (c.app.content = c.site.content || g),
                delete c.site),
              {
                method: "POST",
                url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                data: JSON.stringify(c),
                bidderRequest: r,
              }
            );
          }
        },
        interpretResponse: function (e, r) {
          var t = [],
            i = b,
            s = JSON.parse(r.data),
            o = s.site && s.site.ref ? s.site.ref : "";
          try {
            e.body &&
              e.body.seatbid &&
              Object(a.isArray)(e.body.seatbid) &&
              ((i = e.body.cur || i),
              e.body.seatbid.forEach(function (e) {
                e.bid &&
                  Object(a.isArray)(e.bid) &&
                  e.bid.forEach(function (d) {
                    var c = {
                      requestId: d.impid,
                      cpm: (parseFloat(d.price) || 0).toFixed(2),
                      width: d.w,
                      height: d.h,
                      creativeId: d.crid || d.id,
                      dealId: d.dealid,
                      currency: i,
                      netRevenue: true,
                      ttl: 300,
                      referrer: o,
                      ad: d.adm,
                      pm_seat: e.seat || null,
                      pm_dspid: d.ext && d.ext.dspid ? d.ext.dspid : null,
                      partnerImpId: d.id || "",
                    };
                    s.imp &&
                      s.imp.length > 0 &&
                      s.imp.forEach(function (e) {
                        if (d.impid === e.id)
                          switch (
                            ((function (e, r) {
                              if (e.ext && null != e.ext.BidType)
                                r.mediaType = k[e.ext.BidType];
                              else {
                                Object(a.logInfo)(
                                  "PubMatic: bid.ext.BidType does not exist, checking alternatively for mediaType"
                                );
                                var t = e.adm,
                                  i = "",
                                  s = new RegExp(/VAST\s+version/);
                                if (t.indexOf('span class="PubAPIAd"') >= 0)
                                  r.mediaType = n.b;
                                else if (s.test(t)) r.mediaType = n.d;
                                else
                                  try {
                                    (i = JSON.parse(t.replace(/\\/g, ""))) &&
                                      i.native &&
                                      (r.mediaType = n.c);
                                  } catch (e) {
                                    Object(a.logWarn)(
                                      "PubMatic: Error: Cannot parse native reponse for ad response: " +
                                        t
                                    );
                                  }
                              }
                            })(d, c),
                            c.mediaType)
                          ) {
                            case n.b:
                              break;
                            case n.d:
                              (c.width = d.hasOwnProperty("w")
                                ? d.w
                                : e.video.w),
                                (c.height = d.hasOwnProperty("h")
                                  ? d.h
                                  : e.video.h),
                                (c.vastXml = d.adm),
                                (function (e, r) {
                                  var t, a, i;
                                  if (r.bidderRequest && r.bidderRequest.bids) {
                                    for (
                                      var s = 0;
                                      s < r.bidderRequest.bids.length;
                                      s++
                                    )
                                      r.bidderRequest.bids[s].bidId ===
                                        e.requestId &&
                                        ((t = r.bidderRequest.bids[s].params),
                                        (a =
                                          r.bidderRequest.bids[s].mediaTypes[
                                            n.d
                                          ].context),
                                        (i =
                                          r.bidderRequest.bids[s].adUnitCode));
                                    a &&
                                      "outstream" === a &&
                                      t &&
                                      t.outstreamAU &&
                                      i &&
                                      ((e.rendererCode = t.outstreamAU),
                                      (e.renderer = R.newRenderer(
                                        e.rendererCode,
                                        i
                                      )));
                                  }
                                })(c, r);
                              break;
                            case n.c:
                              !(function (e, r) {
                                if (
                                  ((r.native = {}), e.hasOwnProperty("adm"))
                                ) {
                                  var t = "";
                                  try {
                                    t = JSON.parse(e.adm.replace(/\\/g, ""));
                                  } catch (e) {
                                    return void Object(a.logWarn)(
                                      "PubMatic: Error: Cannot parse native reponse for ad response: " +
                                        r.adm
                                    );
                                  }
                                  if (
                                    t &&
                                    t.native &&
                                    t.native.assets &&
                                    t.native.assets.length > 0
                                  ) {
                                    r.mediaType = n.c;
                                    for (
                                      var i = 0, s = t.native.assets.length;
                                      i < s;
                                      i++
                                    )
                                      switch (t.native.assets[i].id) {
                                        case w.TITLE.ID:
                                          r.native.title =
                                            t.native.assets[i].title &&
                                            t.native.assets[i].title.text;
                                          break;
                                        case w.IMAGE.ID:
                                          r.native.image = {
                                            url:
                                              t.native.assets[i].img &&
                                              t.native.assets[i].img.url,
                                            height:
                                              t.native.assets[i].img &&
                                              t.native.assets[i].img.h,
                                            width:
                                              t.native.assets[i].img &&
                                              t.native.assets[i].img.w,
                                          };
                                          break;
                                        case w.ICON.ID:
                                          r.native.icon = {
                                            url:
                                              t.native.assets[i].img &&
                                              t.native.assets[i].img.url,
                                            height:
                                              t.native.assets[i].img &&
                                              t.native.assets[i].img.h,
                                            width:
                                              t.native.assets[i].img &&
                                              t.native.assets[i].img.w,
                                          };
                                          break;
                                        case w.SPONSOREDBY.ID:
                                        case w.BODY.ID:
                                        case w.LIKES.ID:
                                        case w.DOWNLOADS.ID:
                                        case w.PRICE:
                                        case w.SALEPRICE.ID:
                                        case w.PHONE.ID:
                                        case w.ADDRESS.ID:
                                        case w.DESC2.ID:
                                        case w.CTA.ID:
                                        case w.RATING.ID:
                                        case w.DISPLAYURL.ID:
                                          r.native[z[t.native.assets[i].id]] =
                                            t.native.assets[i].data &&
                                            t.native.assets[i].data.value;
                                      }
                                    (r.native.clickUrl =
                                      t.native.link && t.native.link.url),
                                      (r.native.clickTrackers =
                                        (t.native.link &&
                                          t.native.link.clicktrackers) ||
                                        []),
                                      (r.native.impressionTrackers =
                                        t.native.imptrackers || []),
                                      (r.native.jstracker =
                                        t.native.jstracker || []),
                                      r.width || (r.width = 0),
                                      r.height || (r.height = 0);
                                  }
                                }
                              })(d, c);
                          }
                      }),
                      d.ext &&
                        d.ext.deal_channel &&
                        (c.dealChannel = D[d.ext.deal_channel] || null),
                      (c.meta = {}),
                      d.ext && d.ext.dspid && (c.meta.networkId = d.ext.dspid),
                      d.ext && d.ext.advid && (c.meta.buyerId = d.ext.advid),
                      d.adomain &&
                        d.adomain.length > 0 &&
                        ((c.meta.advertiserDomains = d.adomain),
                        (c.meta.clickUrl = d.adomain[0])),
                      e.ext &&
                        e.ext.buyid &&
                        (c.adserverTargeting = {
                          hb_buyid_pubmatic: e.ext.buyid,
                        }),
                      t.push(c);
                  });
              }));
          } catch (e) {
            Object(a.logError)(e);
          }
          return t;
        },
        getUserSyncs: function (e, r, t, a) {
          var i = "" + A;
          return (
            t &&
              ((i += "&gdpr=" + (t.gdprApplies ? 1 : 0)),
              (i +=
                "&gdpr_consent=" + encodeURIComponent(t.consentString || ""))),
            a && (i += "&us_privacy=" + encodeURIComponent(a)),
            !0 === s.b.getConfig("coppa") && (i += "&coppa=1"),
            e.iframeEnabled
              ? [
                  {
                    type: "iframe",
                    url:
                      "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" +
                      i,
                  },
                ]
              : [
                  {
                    type: "image",
                    url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i,
                  },
                ]
          );
        },
        transformBidParams: function (e, r) {
          return Object(a.convertTypes)(
            { publisherId: "string", adSlot: "string" },
            e
          );
        },
      };
      Object(i.registerBidder)(F);
    },
  },
  [689]
);
pbjsChunk(
  [139],
  {
    731: function (e, i, t) {
      e.exports = t(732);
    },
    732: function (e, i, t) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 }),
        t.d(i, "spec", function () {
          return d;
        });
      var r = t(1),
        o = t(2),
        n = t(0),
        a = {
          title: { id: 0, name: "title" },
          image: { id: 3, type: 3, name: "img" },
          sponsoredBy: { id: 5, name: "data", type: 1 },
        },
        d = {
          code: "revcontent",
          supportedMediaTypes: [o.b, o.c],
          isBidRequestValid: function (e) {
            return void 0 !== e.params.apiKey && void 0 !== e.params.userId;
          },
          buildRequests: function (e, i) {
            var t = e[0].params.userId,
              r = e[0].params.widgetId,
              o = e[0].params.apiKey,
              d = e[0].params.domain,
              l = e[0].params.endpoint;
            void 0 === l && (l = "trends.revcontent.com");
            var s,
              p = [];
            i && i.refererInfo && (s = i.refererInfo.referer),
              void 0 === d &&
                (d = (function (e) {
                  if (void 0 === e || null == e) return "";
                  var i;
                  i = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0];
                  return (i = (i = i.split(":")[0]).split("?")[0]);
                })(s));
            var c = "https://" + l + "/rtb?apiKey=" + o + "&userId=" + t;
            !isNaN(r) && r > 0 && (c = c + "&widgetId=" + r);
            var u = e.map(function (e, i) {
                return (function (e, i) {
                  var t;
                  t = Object(n.isFn)(e.getFloor)
                    ? e.getFloor({ currency: "USD", mediaType: "*", size: "*" })
                        .floor
                    : Object(n.deepAccess)(e, "params.bidfloor") || 0.1;
                  var r = {
                      id: i + 1,
                      tagid: e.adUnitCode,
                      bidderRequestId: e.bidderRequestId,
                      auctionId: e.auctionId,
                      transactionId: e.transactionId,
                      instl: 0,
                      bidfloor: t,
                      secure: "1",
                    },
                    o = Object(n.deepAccess)(e, "mediaTypes.banner"),
                    d = Object(n.deepAccess)(e, "mediaTypes.native");
                  if (o) {
                    var l = Object(n.getAdUnitSizes)(e);
                    r.banner = {
                      w: l[0][0],
                      h: l[0][1],
                      format: l.map(function (e) {
                        return Object(n.parseGPTSingleSizeArrayToRtbSize)(e);
                      }),
                    };
                  } else if (d) {
                    var s = Object(n._map)(e.nativeParams, function (e, i) {
                      var t = a[i],
                        r = { required: 1 & e.required };
                      if (t) {
                        var o, n, d, l;
                        r.id = t.id;
                        var s = e.aspect_ratios;
                        return (
                          s &&
                            s[0] &&
                            ((o = (s = s[0]).min_width || 0),
                            (n = ((s.ratio_height * o) / s.ratio_width) | 0)),
                          (r[t.name] = {
                            len: e.len,
                            type: t.type,
                            wmin: o,
                            hmin: n,
                            w: d,
                            h: l,
                          }),
                          r
                        );
                      }
                    }).filter(Boolean);
                    r.native = {
                      request: {
                        ver: "1.1",
                        context: 2,
                        contextsubtype: 21,
                        plcmttype: 1,
                        plcmtcnt: 1,
                        assets: s,
                      },
                      ver: "1.1",
                      battr: [1, 3, 8, 11, 17],
                    };
                  }
                  return r;
                })(e, i);
              }),
              f = {
                id: i.auctionId,
                imp: u,
                site: {
                  id: r,
                  domain: d,
                  page: s,
                  publisher: { id: t, domain: d },
                },
                device: { ua: navigator.userAgent, language: "en" },
                user: { id: 1 },
                at: 2,
              };
            return (
              p.push({
                method: "POST",
                options: { contentType: "application/json" },
                url: c,
                data: JSON.stringify(f),
                bid: e,
              }),
              p
            );
          },
          interpretResponse: function (e, i) {
            var t = e.body;
            if (!t || !t.seatbid) return [];
            var r = JSON.parse(i.data);
            return t.seatbid
              .map(function (e) {
                return e.bid;
              })
              .reduce(function (e, i) {
                return e.concat(i);
              }, [])
              .map(function (e) {
                var n = +e.impid - 1,
                  a = r.imp.filter(function (i) {
                    return i.id.toString() === e.impid;
                  })[0],
                  d = {
                    requestId: i.bid[n].bidId,
                    cpm: e.price,
                    creativeId: e.crid,
                    nurl: e.nurl,
                    currency: t.cur || "USD",
                    ttl: 360,
                    netRevenue: !0,
                    bidder: "revcontent",
                    bidderCode: "revcontent",
                  };
                if ("banner" in a)
                  (d.mediaType = o.b),
                    (d.width = e.w),
                    (d.height = e.h),
                    (d.ad =
                      '<style type="text/css">.undefined-photo { background-size: cover !important;}</style>' +
                      e.adm);
                else if ("native" in a) {
                  var l = JSON.parse(e.adm),
                    s = { clickUrl: l.link.url };
                  l.assets.forEach(function (e) {
                    switch (e.id) {
                      case 3:
                        s.image = { url: e.img.url, height: 1, width: 1 };
                        break;
                      case 0:
                        s.title = e.title.text;
                        break;
                      case 5:
                        s.sponsoredBy = e.data.value || "Revcontent";
                    }
                  });
                  var p = i.bid[0].params.size;
                  (d.width = p.width),
                    (d.height = p.height),
                    (d.mediaType = o.c),
                    (d.native = s),
                    (d.ad = (function (e, i) {
                      return (i = (i = (i = (i = i.replace(
                        /{image}/g,
                        e.image.url
                      )).replace(/{title}/g, e.title)).replace(
                        /{clickUrl}/g,
                        e.clickUrl
                      )).replace(/{sponsoredBy}/g, e.sponsoredBy));
                    })(
                      s,
                      (function (e, i) {
                        if (void 0 !== i && "" !== i) return i;
                        if (300 == e.width && 250 == e.height)
                          return '<a href="{clickUrl}" rel="nofollow sponsored"  target="_blank" style="border: 1px solid #eee;    width: 298px;    height: 248px;    display: block;"><div style="background-image:url({image});width: 300px;height: 165px;background-repeat: none;background-size: cover;border-bottom:5px solid;border-color:#3f92f7"><div style="position: absolute;top: 160px;left:12px"><h1 style="max-height:45px;overflow:hidden;color: #000;font-family: Georgia;font-weight:normal;font-size: 19px; position: relative; width: 290px;margin-bottom:3px">{title}</h1> <div style="border:1px solid #3f92f7;background-color:#3f92f7;color:#fff;text-align:center;width:94%;height:17px;line-height: 20px;font-size:15px;padding:2px">SEE MORE</div></div></div></a>';
                        if (728 == e.width && 90 == e.height)
                          return '<a href="{clickUrl}" rel="nofollow sponsored"  target="_blank" style="    border: 1px solid #eee;    width: 726px;    height: 86px;    display: block;"><div style="border-right:5px solid #3f92f7;background-image:url({image});width: 130px;height: 88px;background-repeat: no-repeat;background-size: cover;"><div style="position: absolute;left:125px;"><h1 style="color: #000;width:80%;font-family: Georgia;font-weight:normal;font-size: 24px; position: relative; width: 100%%;margin-bottom:-5px;margin-left:20px;">{title}</h1> <div style="text-align:center;line-height: 39px;margin-top:-45px;height:40px;border-radius:50%;display:inline-block;border:1px solid #3f92f7;background-color:#3f92f7;width:7%;float:right;color:#fff;margin-right:20px;">&#x3e;</div></div></div></a>';
                        if (300 == e.width && 600 == e.height)
                          return '<a href="{clickUrl}" rel="nofollow sponsored"  target="_blank" style="    border: 1px solid #eee;    width: 296px;    height: 597px;    display: block;"><div style="border-bottom:5px solid #3f92f7;background-image:url({image});width: 298px;height: 230px;background-repeat: no-repeat;background-size: cover;"><div style="position: absolute;top:220px;"><h1 style="color: #000;font-family: Georgia;font-weight:normal;font-size: 45px; position: relative; width: 97%;margin-left:3px;height:270px;max-height:270px;overflow:hidden;">{title}</h1> <div style="text-align:center;line-height: 39px;height:40px;border-radius:50%;display:inline-block;border:1px solid #3f92f7;background-color:#3f92f7;width:15%;font-size:25px;color:#fff;margin-left:38%;margin-top:-15px">&#x3e;</div></div></div></a>';
                        return "";
                      })(i.bid[0].params.size, i.bid[0].params.template)
                    ));
                }
                return d;
              });
          },
          onBidWon: function (e) {
            return e.nurl && Object(n.triggerPixel)(e.nurl), !0;
          },
        };
      Object(r.registerBidder)(d);
    },
  },
  [731]
);
pbjsChunk(
  [138],
  {
    733: function (e, r, t) {
      e.exports = t(734);
    },
    734: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        t.d(r, "spec", function () {
          return n;
        });
      var a = t(0),
        i = t(1),
        s = t(2);
      var n = new (function () {
        (this.code = "rhythmone"), (this.supportedMediaTypes = [s.d, s.b]);
        var e = [2, 3, 5, 6],
          r = ["video/mp4"],
          t = [1, 2, 3, 4],
          i = [1],
          n = [1, 2, 5],
          d = {},
          p = this;
        function c(e, r) {
          var t,
            i = [],
            s = 0;
          if (r && r.refererInfo && r.refererInfo.stack.length) {
            var n = document.createElement("a");
            (n.href = r.refererInfo.stack[0]),
              (s = "https:" == n.protocol ? 1 : 0);
          }
          for (var p = 0; p < e.length; p++) {
            d[e[p].adUnitCode] = e[p];
            var c = {};
            if (
              ((c.id = e[p].adUnitCode),
              (c.bidfloor = 0),
              (c.secure = s),
              Object(a.deepAccess)(e[p], "mediaTypes.banner") ||
                "banner" === Object(a.deepAccess)(e[p], "mediaType"))
            ) {
              var o = v(e[p]);
              o && (c.banner = o);
            }
            (Object(a.deepAccess)(e[p], "mediaTypes.video") ||
              "video" === Object(a.deepAccess)(e[p], "mediaType")) &&
              (c.video = u(e[p])),
              (c.banner || c.video) &&
                ((c.ext = {
                  bidder: {
                    placementId: (t = e[p]).params.placementId,
                    zone: t.params && t.params.zone ? t.params.zone : "1r",
                    path: t.params && t.params.path ? t.params.path : "mvo",
                  },
                }),
                i.push(c));
          }
          return i;
        }
        function o(e) {
          var r = { domain: "", page: "", ref: "" };
          if (e && e.refererInfo) {
            var t = e.refererInfo;
            if (((r.ref = t.referer), t.stack.length)) {
              r.page = t.stack[t.stack.length - 1];
              var a = document.createElement("a");
              (a.href = t.stack[0]), (r.domain = a.hostname);
            }
          }
          return r;
        }
        function m(e) {
          var r = parseInt(e[0]),
            t = parseInt(e[1]);
          return r == r && t == t && [r, t];
        }
        function v(e) {
          var r = e.sizes;
          e.mediaTypes &&
            e.mediaTypes.banner &&
            (r = e.mediaTypes.banner.sizes);
          var t = Object(a.parseSizesInput)(r),
            i = [];
          return (
            t.forEach(function (e) {
              if (e) {
                var r = m(e.split("x"));
                r && i.push({ w: r[0], h: r[1] });
              }
            }),
            !!i.length && { format: i }
          );
        }
        function u(s) {
          var d = [];
          if (Object(a.deepAccess)(s, "mediaTypes.video.playerSize")) {
            var p = s.mediaTypes.video.playerSize;
            Object(a.isArray)(s.mediaTypes.video.playerSize[0]) &&
              (p = s.mediaTypes.video.playerSize[0]);
            var c = m(p);
            c && (d = c);
          }
          return {
            mimes: Object(a.deepAccess)(s, "mediaTypes.video.mimes") || r,
            protocols:
              Object(a.deepAccess)(s, "mediaTypes.video.protocols") || e,
            w: d[0],
            h: d[1],
            startdelay:
              Object(a.deepAccess)(s, "mediaTypes.video.startdelay") || 0,
            skip: Object(a.deepAccess)(s, "mediaTypes.video.skip") || 0,
            playbackmethod:
              Object(a.deepAccess)(s, "mediaTypes.video.playbackmethod") || t,
            delivery: Object(a.deepAccess)(s, "mediaTypes.video.delivery") || i,
            api: Object(a.deepAccess)(s, "mediaTypes.video.api") || n,
          };
        }
        function l(e, r) {
          for (var t = 0; t < r.length; t++)
            if (r[t].params && r[t].params[e]) return r[t].params[e];
        }
        (this.isBidRequestValid = function (e) {
          return !(!e.params || !e.params.placementId);
        }),
          (this.getUserSyncs = function (e, r, t) {
            return [];
          }),
          (this.buildRequests = function (e, r) {
            var t = l("placementId", e);
            if (void 0 === t || e.length < 1) return [];
            var i =
                l("endpoint", e) ||
                "https://tag.1rx.io/rmp/{placementId}/0/{path}?z={zone}",
              s = l("zone", e) || "1r",
              n = l("path", e) || "mvo";
            i = (i = (i = i.replace(/\{placementId\}/i, t)).replace(
              /\{zone\}/i,
              s
            )).replace(/\{path\}/i, n);
            var d = /(^v|(\.0)+$)/gi;
            i += "&hbv=" + "5.16.0".replace(d, "") + "," + "2.1".replace(d, "");
            var p = (function (e, r) {
              var t = {
                id: e[0].bidderRequestId,
                imp: c(e, r),
                site: o(r),
                device: {
                  ua: navigator.userAgent,
                  ip: "",
                  dnt: Object(a.getDNT)() ? 1 : 0,
                },
                user: {
                  ext: {
                    consent: Object(a.deepAccess)(r, "gdprConsent.gdprApplies")
                      ? r.gdprConsent.consentString
                      : "",
                  },
                },
                at: 1,
                tmax: 1e3,
                regs: {
                  ext: {
                    gdpr:
                      !!Object(a.deepAccess)(r, "gdprConsent.gdprApplies") &&
                      Boolean(1 & r.gdprConsent.gdprApplies),
                  },
                },
              };
              return (
                e[0].schain && (t.source = { ext: { schain: e[0].schain } }), t
              );
            })(e, r);
            return p.imp.length
              ? { method: "POST", url: i, data: JSON.stringify(p) }
              : {};
          }),
          (this.interpretResponse = function (e) {
            var r = e.body || [],
              t = [],
              a = 0;
            if (r.seatbid) {
              var i = [];
              for (a = 0; a < r.seatbid.length; a++)
                for (var s = 0; s < r.seatbid[a].bid.length; s++)
                  i.push(r.seatbid[a].bid[s]);
              r = i;
            }
            for (a = 0; a < r.length; a++) {
              var n = r[a],
                c = d[n.impid],
                o = {
                  requestId: c.bidId,
                  bidderCode: p.code,
                  cpm: parseFloat(n.price),
                  width: n.w,
                  height: n.h,
                  meta: { advertiserDomains: n.adomain },
                  creativeId: n.crid,
                  currency: "USD",
                  netRevenue: !0,
                  ttl: 350,
                };
              c.mediaTypes && c.mediaTypes.video
                ? ((o.vastUrl = n.nurl), (o.mediaType = "video"), (o.ttl = 600))
                : (o.ad = n.adm),
                t.push(o);
            }
            return t;
          });
      })();
      Object(i.registerBidder)(n);
    },
  },
  [733]
);
pbjsChunk(
  [132],
  {
    751: function (e, t, r) {
      e.exports = r(752);
    },
    752: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return j;
        }),
        (t.hasVideoMediaType = I),
        r.d(t, "resetRubiConf", function () {
          return k;
        }),
        (t.masSizeOrdering = R),
        (t.determineRubiconVideoSizeId = z),
        (t.getPriceGranularity = T),
        (t.hasValidVideoParams = E),
        (t.hasValidSupplyChainParams = U),
        (t.encodeParam = P),
        (t.resetUserSync = function () {
          N = !1;
        });
      var n = r(0),
        i = r(1),
        o = r(3),
        a = r(2),
        c = r(11),
        s = r.n(c),
        d = r(13),
        u = r(14);
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == r) return;
            var n,
              i,
              o = [],
              a = !0,
              c = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (o.push(n.value), !t || o.length !== t);
                a = !0
              );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (c) throw i;
              }
            }
            return o;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return m(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return m(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function g(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function v(e) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var y = "https://video-outstream.rubiconproject.com/apex-2.0.0.js",
        x = {};
      o.b.getConfig("rubicon", function (e) {
        Object(n.mergeDeep)(x, e.rubicon);
      });
      var h = {
        1: "468x60",
        2: "728x90",
        5: "120x90",
        7: "125x125",
        8: "120x600",
        9: "160x600",
        10: "300x600",
        13: "200x200",
        14: "250x250",
        15: "300x250",
        16: "336x280",
        17: "240x400",
        19: "300x100",
        31: "980x120",
        32: "250x360",
        33: "180x500",
        35: "980x150",
        37: "468x400",
        38: "930x180",
        39: "750x100",
        40: "750x200",
        41: "750x300",
        42: "2x4",
        43: "320x50",
        44: "300x50",
        48: "300x300",
        53: "1024x768",
        54: "300x1050",
        55: "970x90",
        57: "970x250",
        58: "1000x90",
        59: "320x80",
        60: "320x150",
        61: "1000x1000",
        64: "580x500",
        65: "640x480",
        66: "930x600",
        67: "320x480",
        68: "1800x1000",
        72: "320x320",
        73: "320x160",
        78: "980x240",
        79: "980x300",
        80: "980x400",
        83: "480x300",
        85: "300x120",
        90: "548x150",
        94: "970x310",
        95: "970x100",
        96: "970x210",
        101: "480x320",
        102: "768x1024",
        103: "480x280",
        105: "250x800",
        108: "320x240",
        113: "1000x300",
        117: "320x100",
        125: "800x250",
        126: "200x600",
        144: "980x600",
        145: "980x150",
        152: "1000x250",
        156: "640x320",
        159: "320x250",
        179: "250x600",
        195: "600x300",
        198: "640x360",
        199: "640x200",
        213: "1030x590",
        214: "980x360",
        221: "1x1",
        229: "320x180",
        230: "2000x1400",
        232: "580x400",
        234: "6x6",
        251: "2x2",
        256: "480x820",
        257: "400x600",
        258: "500x200",
        259: "998x200",
        264: "970x1000",
        265: "1920x1080",
        274: "1800x200",
        278: "320x500",
        282: "320x400",
        288: "640x380",
        548: "500x1000",
        550: "980x480",
        552: "300x200",
        558: "640x640",
        562: "300x431",
        564: "320x431",
        566: "320x300",
        568: "300x150",
        570: "300x125",
        572: "250x350",
        574: "620x891",
        576: "610x877",
        578: "980x552",
        580: "505x656",
      };
      Object(n._each)(h, function (e, t) {
        return (h[e] = t);
      });
      var j = {
        code: "rubicon",
        gvlid: 52,
        supportedMediaTypes: [a.b, a.d],
        isBidRequestValid: function (e) {
          if ("object" !== v(e.params)) return !1;
          for (
            var t = 0, r = ["accountId", "siteId", "zoneId"];
            t < r.length;
            t++
          )
            if (
              ((e.params[r[t]] = parseInt(e.params[r[t]])),
              isNaN(e.params[r[t]]))
            )
              return (
                Object(n.logError)(
                  "Rubicon: wrong format of accountId or siteId or zoneId."
                ),
                !1
              );
          var i = w(e, !0);
          return !!i && ("video" !== i || E(e));
        },
        buildRequests: function (e, t) {
          var r = [],
            i = e
              .filter(function (e) {
                return "video" === w(e);
              })
              .map(function (e) {
                e.startTime = new Date().getTime();
                var r = {
                  id: e.transactionId,
                  test: o.b.getConfig("debug") ? 1 : 0,
                  cur: ["USD"],
                  source: { tid: e.transactionId },
                  tmax: t.timeout,
                  imp: [
                    {
                      exp: o.b.getConfig("s2sConfig.defaultTtl"),
                      id: e.adUnitCode,
                      secure: 1,
                      ext: g({}, e.bidder, e.params),
                      video: Object(n.deepAccess)(e, "mediaTypes.video") || {},
                    },
                  ],
                  ext: {
                    prebid: {
                      channel: { name: "pbjs", version: pbjs.version },
                      cache: {
                        vastxml: { returnCreative: !0 === x.returnVast },
                      },
                      targeting: {
                        includewinners: !0,
                        includebidderkeys: !1,
                        pricegranularity: T(o.b),
                      },
                      bidders: {
                        rubicon: { integration: x.int_type || "pbjs" },
                      },
                    },
                  },
                };
                "rubicon" !== e.bidder &&
                  (r.ext.prebid.aliases = g({}, e.bidder, "rubicon"));
                var i,
                  c,
                  s = Object(u.a)().installedModules;
                if (
                  (!s ||
                    (s.length && -1 === s.indexOf("rubiconAnalyticsAdapter")) ||
                    Object(n.deepSetValue)(r, "ext.prebid.analytics", {
                      rubicon: { "client-analytics": !0 },
                    }),
                  "function" != typeof e.getFloor || x.disableFloors)
                )
                  i = parseFloat(Object(n.deepAccess)(e, "params.floor"));
                else {
                  var d;
                  try {
                    d = e.getFloor({
                      currency: "USD",
                      mediaType: "video",
                      size: A(e, "video"),
                    });
                  } catch (e) {
                    Object(n.logError)("Rubicon: getFloor threw an error: ", e);
                  }
                  i =
                    "object" !== v(d) ||
                    "USD" !== d.currency ||
                    isNaN(parseInt(d.floor))
                      ? void 0
                      : parseFloat(d.floor);
                }
                (isNaN(i) || (r.imp[0].bidfloor = i),
                (r.imp[0].ext[e.bidder].video.size_id = z(e)),
                (function (e, t, r) {
                  if (!e) return;
                  "object" === v(o.b.getConfig("app"))
                    ? (e.app = o.b.getConfig("app"))
                    : (e.site = { page: O(t, r) });
                  "object" === v(o.b.getConfig("device")) &&
                    (e.device = o.b.getConfig("device"));
                  t.params.video.language &&
                    ["site", "device"].forEach(function (r) {
                      e[r] &&
                        ("site" === r
                          ? (e[r].content = b(
                              { language: t.params.video.language },
                              e[r].content
                            ))
                          : (e[r] = b(
                              { language: t.params.video.language },
                              e[r]
                            )));
                    });
                })(r, e, t),
                (function (e, t) {
                  "object" === v(e.imp[0].video) &&
                    void 0 === e.imp[0].video.skip &&
                    (e.imp[0].video.skip = t.params.video.skip);
                  "object" === v(e.imp[0].video) &&
                    void 0 === e.imp[0].video.skipafter &&
                    (e.imp[0].video.skipafter = t.params.video.skipdelay);
                  "object" === v(e.imp[0].video) &&
                    void 0 === e.imp[0].video.pos &&
                    ("atf" === t.params.position
                      ? (e.imp[0].video.pos = 1)
                      : "btf" === t.params.position &&
                        (e.imp[0].video.pos = 3));
                  var r = A(t, "video");
                  (e.imp[0].video.w = r[0]), (e.imp[0].video.h = r[1]);
                })(r, e),
                t.gdprConsent) &&
                  ("boolean" == typeof t.gdprConsent.gdprApplies &&
                    (c = t.gdprConsent.gdprApplies ? 1 : 0),
                  Object(n.deepSetValue)(r, "regs.ext.gdpr", c),
                  Object(n.deepSetValue)(
                    r,
                    "user.ext.consent",
                    t.gdprConsent.consentString
                  ));
                t.uspConsent &&
                  Object(n.deepSetValue)(
                    r,
                    "regs.ext.us_privacy",
                    t.uspConsent
                  );
                var p = Object(n.deepAccess)(t, "bids.0.userIdAsEids");
                p && p.length && Object(n.deepSetValue)(r, "user.ext.eids", p);
                var l = o.b.getConfig("user.id");
                l && Object(n.deepSetValue)(r, "user.id", l),
                  !0 === o.b.getConfig("coppa") &&
                    Object(n.deepSetValue)(r, "regs.coppa", 1),
                  e.schain &&
                    U(e.schain) &&
                    Object(n.deepSetValue)(r, "source.ext.schain", e.schain);
                var f = o.b.getConfig("multibid");
                return (
                  f &&
                    Object(n.deepSetValue)(
                      r,
                      "ext.prebid.multibid",
                      f.reduce(function (e, t) {
                        var r = {};
                        return (
                          Object.keys(t).forEach(function (e) {
                            r[e.toLowerCase()] = t[e];
                          }),
                          e.push(r),
                          e
                        );
                      }, [])
                    ),
                  S(e, a.d, r),
                  e.storedAuctionResponse &&
                    Object(n.deepSetValue)(
                      r.imp[0],
                      "ext.prebid.storedauctionresponse.id",
                      e.storedAuctionResponse.toString()
                    ),
                  Object(n.deepSetValue)(
                    r.imp[0],
                    "ext.prebid.auctiontimestamp",
                    t.auctionStart
                  ),
                  {
                    method: "POST",
                    url: "https://".concat(
                      x.videoHost || "prebid-server",
                      ".rubiconproject.com/openrtb2/auction"
                    ),
                    data: r,
                    bidRequest: e,
                  }
                );
              });
          if (!0 !== x.singleRequest)
            r = i.concat(
              e
                .filter(function (e) {
                  return "banner" === w(e);
                })
                .map(function (e) {
                  var r = j.createSlotParams(e, t);
                  return {
                    method: "GET",
                    url: "https://".concat(
                      x.bannerHost || "fastlane",
                      ".rubiconproject.com/a/api/fastlane.json"
                    ),
                    data:
                      j.getOrderedParams(r).reduce(function (e, t) {
                        var i = r[t];
                        return (Object(n.isStr)(i) && "" !== i) ||
                          Object(n.isNumber)(i)
                          ? "".concat(e).concat(P(t, i), "&")
                          : e;
                      }, "") + "slots=1&rand=".concat(Math.random()),
                    bidRequest: e,
                  };
                })
            );
          else {
            var c = e
              .filter(function (e) {
                return "banner" === w(e);
              })
              .reduce(function (e, t) {
                return (
                  (e[t.params.siteId] = e[t.params.siteId] || []).push(t), e
                );
              }, {});
            r = i.concat(
              Object.keys(c).reduce(function (e, r) {
                var i, o;
                return (
                  ((i = c[r]),
                  (o = 10),
                  i
                    .map(function (e, t) {
                      return t % o == 0 ? i.slice(t, t + o) : null;
                    })
                    .filter(function (e) {
                      return e;
                    })).forEach(function (r) {
                    var i = j.combineSlotUrlParams(
                      r.map(function (e) {
                        return j.createSlotParams(e, t);
                      })
                    );
                    e.push({
                      method: "GET",
                      url: "https://".concat(
                        x.bannerHost || "fastlane",
                        ".rubiconproject.com/a/api/fastlane.json"
                      ),
                      data:
                        j.getOrderedParams(i).reduce(function (e, t) {
                          var r = i[t];
                          return (Object(n.isStr)(r) && "" !== r) ||
                            Object(n.isNumber)(r)
                            ? "".concat(e).concat(P(t, r), "&")
                            : e;
                        }, "") +
                        "slots="
                          .concat(r.length, "&rand=")
                          .concat(Math.random()),
                      bidRequest: r,
                    });
                  }),
                  e
                );
              }, [])
            );
          }
          return r;
        },
        getOrderedParams: function (e) {
          var t = /^tg_v/,
            r = /^tg_i/,
            n = /^eid_|^tpid_/,
            i = [
              "account_id",
              "site_id",
              "zone_id",
              "size_id",
              "alt_size_ids",
              "p_pos",
              "gdpr",
              "gdpr_consent",
              "us_privacy",
              "rp_schain",
            ]
              .concat(
                Object.keys(e).filter(function (e) {
                  return n.test(e);
                })
              )
              .concat([
                "x_liverampidl",
                "ppuid",
                "rf",
                "p_geo.latitude",
                "p_geo.longitude",
                "kw",
              ])
              .concat(
                Object.keys(e).filter(function (e) {
                  return t.test(e);
                })
              )
              .concat(
                Object.keys(e).filter(function (e) {
                  return r.test(e);
                })
              )
              .concat([
                "tk_flint",
                "x_source.tid",
                "x_source.pchain",
                "p_screen_res",
                "rp_floor",
                "rp_secure",
                "tk_user_key",
              ]);
          return i.concat(
            Object.keys(e).filter(function (e) {
              return -1 === i.indexOf(e);
            })
          );
        },
        combineSlotUrlParams: function (e) {
          if (1 === e.length) return e[0];
          var t = e.reduce(function (t, r, n) {
              return (
                Object.keys(r).forEach(function (i) {
                  t.hasOwnProperty(i) || (t[i] = new Array(e.length)),
                    t[i].splice(n, 1, r[i]);
                }),
                t
              );
            }, {}),
            r = new RegExp("^([^;]*)(;\\1)+$");
          return (
            Object.keys(t).forEach(function (e) {
              var n = t[e].join(";"),
                i = n.match(r);
              t[e] = i ? i[1] : n;
            }),
            t
          );
        },
        createSlotParams: function (e, t) {
          e.startTime = new Date().getTime();
          var r = e.params,
            i = A(e, "banner"),
            c = f(r.latLong || [], 2),
            d = c[0],
            u = c[1],
            p = {
              account_id: r.accountId,
              site_id: r.siteId,
              zone_id: r.zoneId,
              size_id: i[0],
              alt_size_ids: i.slice(1).join(",") || void 0,
              rp_floor:
                (r.floor = parseFloat(r.floor)) >= 0.01 ? r.floor : void 0,
              rp_secure: "1",
              tk_flint: "".concat(x.int_type || "pbjs_lite", "_v5.16.0"),
              "x_source.tid": e.transactionId,
              "x_source.pchain": r.pchain,
              p_screen_res: [window.screen.width, window.screen.height].join(
                "x"
              ),
              tk_user_key: r.userId,
              "p_geo.latitude": isNaN(parseFloat(d))
                ? void 0
                : parseFloat(d).toFixed(4),
              "p_geo.longitude": isNaN(parseFloat(u))
                ? void 0
                : parseFloat(u).toFixed(4),
              "tg_fl.eid": e.code,
              rf: O(e, t),
            };
          if ("function" == typeof e.getFloor && !x.disableFloors) {
            var l;
            try {
              l = e.getFloor({
                currency: "USD",
                mediaType: "banner",
                size: "*",
              });
            } catch (e) {
              Object(n.logError)("Rubicon: getFloor threw an error: ", e);
            }
            p.rp_hard_floor =
              "object" !== v(l) ||
              "USD" !== l.currency ||
              isNaN(parseInt(l.floor))
                ? void 0
                : l.floor;
          }
          var b =
            { 1: "atf", 3: "btf" }[
              Object(n.deepAccess)(e, "mediaTypes.banner.pos")
            ] || "";
          p.p_pos =
            "atf" === r.position || "btf" === r.position ? r.position : b;
          var m = o.b.getConfig("user.id");
          return (
            m && (p.ppuid = m),
            e.userIdAsEids &&
              e.userIdAsEids.forEach(function (e) {
                try {
                  if (
                    ("adserver.org" === e.source
                      ? ((p.tpid_tdid = e.uids[0].id),
                        (p["eid_adserver.org"] = e.uids[0].id))
                      : "liveintent.com" === e.source
                      ? ((p["tpid_liveintent.com"] = e.uids[0].id),
                        (p["eid_liveintent.com"] = e.uids[0].id),
                        e.ext &&
                          Array.isArray(e.ext.segments) &&
                          e.ext.segments.length &&
                          (p["tg_v.LIseg"] = e.ext.segments.join(",")))
                      : "liveramp.com" === e.source
                      ? (p.x_liverampidl = e.uids[0].id)
                      : "id5-sync.com" === e.source
                      ? (p["eid_id5-sync.com"] = ""
                          .concat(e.uids[0].id, "^")
                          .concat(e.uids[0].atype, "^")
                          .concat(
                            (e.uids[0].ext && e.uids[0].ext.linkType) || ""
                          ))
                      : (p["eid_".concat(e.source)] = ""
                          .concat(e.uids[0].id, "^")
                          .concat(e.uids[0].atype || "")),
                    !p.ppuid)
                  ) {
                    var t = s()(e.uids, function (e) {
                      return e.ext && "ppuid" === e.ext.stype;
                    });
                    t && t.id && (p.ppuid = t.id);
                  }
                } catch (t) {
                  Object(n.logWarn)("Rubicon: error reading eid:", e, t);
                }
              }),
            t.gdprConsent &&
              ("boolean" == typeof t.gdprConsent.gdprApplies &&
                (p.gdpr = Number(t.gdprConsent.gdprApplies)),
              (p.gdpr_consent = t.gdprConsent.consentString)),
            t.uspConsent && (p.us_privacy = encodeURIComponent(t.uspConsent)),
            (p.rp_maxbids = t.bidLimit || 1),
            S(e, a.b, p),
            !0 === o.b.getConfig("coppa") && (p.coppa = 1),
            e.schain &&
              U(e.schain) &&
              (p.rp_schain = j.serializeSupplyChain(e.schain)),
            p
          );
        },
        serializeSupplyChain: function (e) {
          if (!U(e)) return "";
          var t = e.ver,
            r = e.complete,
            n = e.nodes;
          return ""
            .concat(t, ",")
            .concat(r, "!")
            .concat(j.serializeSupplyChainNodes(n));
        },
        serializeSupplyChainNodes: function (e) {
          var t = ["asi", "sid", "hp", "rid", "name", "domain"];
          return e
            .map(function (e) {
              return t
                .map(function (t) {
                  return encodeURIComponent(e[t] || "");
                })
                .join(",");
            })
            .join("!");
        },
        interpretResponse: function (e, t) {
          var r = t.bidRequest;
          if (!(e = e.body) || "object" !== v(e)) return [];
          if (e.seatbid) {
            var i = Object(n.deepAccess)(e, "ext.errors.rubicon");
            Array.isArray(i) &&
              i.length > 0 &&
              Object(n.logWarn)("Rubicon: Error in video response");
            var o = [];
            return (
              e.seatbid.forEach(function (t) {
                (t.bid || []).forEach(function (i) {
                  var c = {
                    requestId: r.bidId,
                    currency: e.cur || "USD",
                    creativeId: i.crid,
                    cpm: i.price || 0,
                    bidderCode: t.seat,
                    ttl: 300,
                    netRevenue: !1 !== x.netRevenue,
                    width:
                      i.w ||
                      Object(n.deepAccess)(r, "mediaTypes.video.w") ||
                      Object(n.deepAccess)(r, "params.video.playerWidth"),
                    height:
                      i.h ||
                      Object(n.deepAccess)(r, "mediaTypes.video.h") ||
                      Object(n.deepAccess)(r, "params.video.playerHeight"),
                  };
                  i.id && (c.seatBidId = i.id),
                    i.dealid && (c.dealId = i.dealid),
                    i.adomain &&
                      Object(n.deepSetValue)(
                        c,
                        "meta.advertiserDomains",
                        Array.isArray(i.adomain) ? i.adomain : [i.adomain]
                      ),
                    Object(n.deepAccess)(i, "ext.bidder.rp.advid") &&
                      Object(n.deepSetValue)(
                        c,
                        "meta.advertiserId",
                        i.ext.bidder.rp.advid
                      );
                  var s = Object(n.deepAccess)(
                    e,
                    "ext.responsetimemillis.rubicon"
                  );
                  if (
                    (r && s && (r.serverResponseTimeMs = s),
                    Object(n.deepAccess)(i, "ext.prebid.type") === a.d)
                  ) {
                    (c.mediaType = a.d),
                      Object(n.deepSetValue)(c, "meta.mediaType", a.d);
                    var u = Object(n.deepAccess)(i, "ext.prebid.targeting");
                    u && "object" === v(u) && (c.adserverTargeting = u),
                      i.ext.prebid.cache &&
                      "object" === v(i.ext.prebid.cache.vastXml) &&
                      i.ext.prebid.cache.vastXml.cacheId &&
                      i.ext.prebid.cache.vastXml.url
                        ? ((c.videoCacheKey =
                            i.ext.prebid.cache.vastXml.cacheId),
                          (c.vastUrl = i.ext.prebid.cache.vastXml.url))
                        : u &&
                          u.hb_uuid &&
                          u.hb_cache_host &&
                          u.hb_cache_path &&
                          ((c.videoCacheKey = u.hb_uuid),
                          (c.vastUrl = "https://"
                            .concat(u.hb_cache_host)
                            .concat(u.hb_cache_path, "?uuid=")
                            .concat(u.hb_uuid))),
                      i.adm && (c.vastXml = i.adm),
                      i.nurl && (c.vastUrl = i.nurl),
                      !c.vastUrl && i.nurl && (c.vastUrl = i.nurl),
                      "outstream" ===
                        Object(n.deepAccess)(
                          r,
                          "mediaTypes.video.context"
                        ).toLowerCase() &&
                        (c.renderer = (function (e) {
                          var t = d.a.install({
                            id: e.adId,
                            url: x.rendererUrl || y,
                            config: x.rendererConfig || {},
                            loaded: !1,
                            adUnitCode: e.adUnitCode,
                          });
                          try {
                            t.setRender(_);
                          } catch (e) {
                            Object(n.logWarn)(
                              "Prebid Error calling setRender on renderer",
                              e
                            );
                          }
                          return t;
                        })(c));
                  } else Object(n.logWarn)("Rubicon: video response received non-video media type");
                  o.push(c);
                });
              }),
              o
            );
          }
          var c,
            s = e.ads,
            u = 0;
          return (
            "object" !== v(r) ||
              Array.isArray(r) ||
              "video" !== w(r) ||
              "object" !== v(s) ||
              (s = s[r.adUnitCode]),
            !Array.isArray(s) || s.length < 1
              ? []
              : s
                  .reduce(function (t, i, o) {
                    if (
                      (i.impression_id && c === i.impression_id
                        ? u++
                        : (c = i.impression_id),
                      "ok" !== i.status)
                    )
                      return t;
                    var s,
                      d,
                      p = Array.isArray(r) ? r[o - u] : r;
                    if (p && "object" === v(p)) {
                      var l = {
                        requestId: p.bidId,
                        currency: "USD",
                        creativeId:
                          i.creative_id ||
                          ""
                            .concat(i.network || "", "-")
                            .concat(i.advertiser || ""),
                        cpm: i.cpm || 0,
                        dealId: i.deal,
                        ttl: 300,
                        netRevenue: !1 !== x.netRevenue,
                        rubicon: {
                          advertiserId: i.advertiser,
                          networkId: i.network,
                        },
                        meta: {
                          advertiserId: i.advertiser,
                          networkId: i.network,
                          mediaType: a.b,
                        },
                      };
                      if (
                        (i.creative_type && (l.mediaType = i.creative_type),
                        i.adomain &&
                          (l.meta.advertiserDomains = Array.isArray(i.adomain)
                            ? i.adomain
                            : [i.adomain]),
                        i.creative_type === a.d)
                      )
                        (l.width = p.params.video.playerWidth),
                          (l.height = p.params.video.playerHeight),
                          (l.vastUrl = i.creative_depot_url),
                          (l.impression_id = i.impression_id),
                          (l.videoCacheKey = i.impression_id);
                      else {
                        l.ad =
                          ((s = i.script),
                          (d = i.impression_id),
                          "<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"
                            .concat(d, "'>\n<script type='text/javascript'>")
                            .concat(s, "</script>\n</div>\n</body>\n</html>"));
                        var b = f(
                          h[i.size_id].split("x").map(function (e) {
                            return Number(e);
                          }),
                          2
                        );
                        (l.width = b[0]), (l.height = b[1]);
                      }
                      (l.rubiconTargeting = (
                        Array.isArray(i.targeting) ? i.targeting : []
                      ).reduce(
                        function (e, t) {
                          return (e[t.key] = t.values[0]), e;
                        },
                        { rpfl_elemid: p.adUnitCode }
                      )),
                        t.push(l);
                    } else Object(n.logError)("Rubicon: bidRequest undefined at index position:".concat(o), r, e);
                    return t;
                  }, [])
                  .sort(function (e, t) {
                    return (t.cpm || 0) - (e.cpm || 0);
                  })
          );
        },
        getUserSyncs: function (e, t, r, n) {
          if (!N && e.iframeEnabled) {
            var i = "";
            return (
              r &&
                "string" == typeof r.consentString &&
                ("boolean" == typeof r.gdprApplies
                  ? (i += "?gdpr="
                      .concat(Number(r.gdprApplies), "&gdpr_consent=")
                      .concat(r.consentString))
                  : (i += "?gdpr_consent=".concat(r.consentString))),
              n &&
                (i += ""
                  .concat(i ? "&" : "?", "us_privacy=")
                  .concat(encodeURIComponent(n))),
              (N = !0),
              {
                type: "iframe",
                url:
                  "https://".concat(
                    x.syncHost || "eus",
                    ".rubiconproject.com/usync.html"
                  ) + i,
              }
            );
          }
        },
        transformBidParams: function (e, t) {
          return Object(n.convertTypes)(
            { accountId: "number", siteId: "number", zoneId: "number" },
            e
          );
        },
      };
      function O(e, t) {
        var r = o.b.getConfig("pageUrl");
        return (
          e.params.referrer
            ? (r = e.params.referrer)
            : r || (r = t.refererInfo.referer),
          e.params.secure ? r.replace(/^http:/i, "https:") : r
        );
      }
      function _(e) {
        var t,
          r = document.getElementById(e.adUnitCode);
        (t = r.querySelector("div[id^='google_ads']")) &&
          t.style.setProperty("display", "none"),
          (function (e) {
            var t = e.querySelector("script[id^='sas_script']"),
              r = t && t.nextSibling;
            r &&
              "iframe" === r.localName &&
              r.style.setProperty("display", "none");
          })(r);
        var n = e.renderer.getConfig();
        e.renderer.push(function () {
          window.MagniteApex.renderAd({
            width: e.width,
            height: e.height,
            vastUrl: e.vastUrl,
            placement: {
              attachTo: "#".concat(e.adUnitCode),
              align: n.align || "center",
              position: n.position || "append",
            },
            closeButton: n.closeButton || !1,
            label: n.label || void 0,
            collapse: n.collapse || !0,
          });
        });
      }
      function A(e, t) {
        var r = e.params;
        if ("video" === t) {
          var i = [];
          return (
            r.video && r.video.playerWidth && r.video.playerHeight
              ? (i = [r.video.playerWidth, r.video.playerHeight])
              : Array.isArray(
                  Object(n.deepAccess)(e, "mediaTypes.video.playerSize")
                ) && 1 === e.mediaTypes.video.playerSize.length
              ? (i = e.mediaTypes.video.playerSize[0])
              : Array.isArray(e.sizes) &&
                e.sizes.length > 0 &&
                Array.isArray(e.sizes[0]) &&
                e.sizes[0].length > 1 &&
                (i = e.sizes[0]),
            i
          );
        }
        var o = [];
        return (
          Array.isArray(r.sizes)
            ? (o = r.sizes)
            : void 0 !== Object(n.deepAccess)(e, "mediaTypes.banner.sizes")
            ? (o = C(e.mediaTypes.banner.sizes))
            : Array.isArray(e.sizes) && e.sizes.length > 0
            ? (o = C(e.sizes))
            : Object(n.logWarn)("Rubicon: no sizes are setup or found"),
          R(o)
        );
      }
      function S(e, t, r) {
        var i = {
          user: { ext: { data: l({}, e.params.visitor) } },
          site: { ext: { data: l({}, e.params.inventory) } },
        };
        e.params.keywords &&
          (i.site.keywords = Object(n.isArray)(e.params.keywords)
            ? e.params.keywords.join(",")
            : e.params.keywords);
        var c = Object(n.mergeDeep)({}, o.b.getConfig("ortb2") || {}, i),
          s = Object(n.deepAccess)(e.ortb2Imp, "ext.data") || {},
          d = { user: [4], site: [1, 2, 5, 6] },
          u = {
            user: "tg_v.",
            site: "tg_i.",
            adserver: "tg_i.dfp_ad_unit_code",
            pbadslot: "tg_i.pbadslot",
            keywords: "kw",
          },
          p = function (e, t, r) {
            if ("data" === t && Array.isArray(e))
              return e
                .filter(function (e) {
                  return (
                    e.segment &&
                    Object(n.deepAccess)(e, "ext.segtax") &&
                    d[r] &&
                    -1 !== d[r].indexOf(Object(n.deepAccess)(e, "ext.segtax"))
                  );
                })
                .map(function (e) {
                  var t = e.segment
                    .filter(function (e) {
                      return e.id;
                    })
                    .reduce(function (e, t) {
                      return e.push(t.id), e;
                    }, []);
                  if (t.length > 0) return t.toString();
                })
                .toString();
            if ("object" !== v(e) || Array.isArray(e)) {
              if (void 0 !== e)
                return Array.isArray(e)
                  ? e
                      .filter(function (e) {
                        if ("object" !== v(e) && void 0 !== e)
                          return e.toString();
                        Object(n.logWarn)(
                          "Rubicon: Filtered value: ",
                          e,
                          "for key",
                          t,
                          ": Expected value to be string, integer, or an array of strings/ints"
                        );
                      })
                      .toString()
                  : e.toString();
            } else
              Object(n.logWarn)(
                "Rubicon: Filtered FPD key: ",
                t,
                ": Expected value to be string, integer, or an array of strings/ints"
              );
          },
          b = function (e, t, n) {
            var i =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              o = p(e, n, t),
              a =
                u[n] && i
                  ? "".concat(u[n])
                  : "data" === n
                  ? "".concat(u[t], "iab")
                  : "".concat(u[t]).concat(n);
            r[a] = r[a] ? r[a].concat(",", o) : o;
          };
        Object.keys(s).forEach(function (e) {
          "adserver" === e
            ? ["name", "adslot"].forEach(function (t) {
                s[e][t] && (s[e][t] = s[e][t].toString().replace(/^\/+/, ""));
              })
            : "pbadslot" === e && (s[e] = s[e].toString().replace(/^\/+/, ""));
        }),
          t === a.b
            ? (["site", "user"].forEach(function (e) {
                Object.keys(c[e]).forEach(function (t) {
                  "site" === e && "content" === t && c[e][t].data
                    ? b(c[e][t].data, e, "data")
                    : "ext" !== t
                    ? b(c[e][t], e, t)
                    : c[e][t].data &&
                      Object.keys(c[e].ext.data).forEach(function (t) {
                        b(c[e].ext.data[t], e, t, !1);
                      });
                });
              }),
              Object.keys(s).forEach(function (e) {
                "adserver" === e ? b(s[e].adslot, name, e) : b(s[e], "site", e);
              }))
            : (Object.keys(s).length &&
                Object(n.mergeDeep)(r.imp[0].ext, { data: s }),
              Object(n.mergeDeep)(r, c));
      }
      function C(e) {
        return Object(n.parseSizesInput)(e).reduce(function (e, t) {
          var r = parseInt(h[t], 10);
          return r && e.push(r), e;
        }, []);
      }
      function I(e) {
        return (
          "object" === v(Object(n.deepAccess)(e, "params.video")) &&
          void 0 !== Object(n.deepAccess)(e, "mediaTypes.".concat(a.d))
        );
      }
      function w(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return I(e)
          ? -1 ===
            ["outstream", "instream"].indexOf(
              Object(n.deepAccess)(e, "mediaTypes.".concat(a.d, ".context"))
            )
            ? void (
                t &&
                Object(n.logError)(
                  "Rubicon: mediaTypes.video.context must be outstream or instream"
                )
              )
            : A(e, "video").length < 2
            ? void (
                t &&
                Object(n.logError)(
                  "Rubicon: could not determine the playerSize of the video"
                )
              )
            : (t &&
                Object(n.logMessage)(
                  "Rubicon: making video request for adUnit",
                  e.adUnitCode
                ),
              "video")
          : 0 === A(e, "banner").length
          ? void (
              t &&
              Object(n.logError)(
                "Rubicon: could not determine the sizes for banner request"
              )
            )
          : (t &&
              Object(n.logMessage)(
                "Rubicon: making banner request for adUnit",
                e.adUnitCode
              ),
            "banner");
      }
      var k = function () {
        return (x = {});
      };
      function R(e) {
        var t = [15, 2, 9];
        return e.sort(function (e, r) {
          var n = t.indexOf(e),
            i = t.indexOf(r);
          return n > -1 || i > -1
            ? -1 === n
              ? 1
              : -1 === i
              ? -1
              : n - i
            : e - r;
        });
      }
      function z(e) {
        var t = parseInt(Object(n.deepAccess)(e, "params.video.size_id"));
        return isNaN(t)
          ? "outstream" ===
            Object(n.deepAccess)(e, "mediaTypes.".concat(a.d, ".context"))
            ? 203
            : 201
          : t;
      }
      function T(e) {
        return {
          ranges: {
            low: [{ max: 5, increment: 0.5 }],
            medium: [{ max: 20, increment: 0.1 }],
            high: [{ max: 20, increment: 0.01 }],
            auto: [
              { max: 5, increment: 0.05 },
              { min: 5, max: 10, increment: 0.1 },
              { min: 10, max: 20, increment: 0.5 },
            ],
            dense: [
              { max: 3, increment: 0.01 },
              { min: 3, max: 8, increment: 0.05 },
              { min: 8, max: 20, increment: 0.5 },
            ],
            custom:
              e.getConfig("customPriceBucket") &&
              e.getConfig("customPriceBucket").buckets,
          }[e.getConfig("priceGranularity")],
        };
      }
      function E(e) {
        var t = !0,
          r = Object.prototype.toString.call([]),
          i = {
            mimes: r,
            protocols: r,
            linearity: Object.prototype.toString.call(0),
            api: r,
          };
        return (
          Object.keys(i).forEach(function (r) {
            Object.prototype.toString.call(
              Object(n.deepAccess)(e, "mediaTypes.video." + r)
            ) !== i[r] &&
              ((t = !1),
              Object(n.logError)(
                "Rubicon: mediaTypes.video." +
                  r +
                  " is required and must be of type: " +
                  i[r]
              ));
          }),
          t
        );
      }
      function U(e) {
        var t = !1,
          r = ["asi", "sid", "hp"];
        return e.nodes
          ? ((t = e.nodes.reduce(function (e, t) {
              return e
                ? r.every(function (e) {
                    return t.hasOwnProperty(e);
                  })
                : e;
            }, !0)) ||
              Object(n.logError)("Rubicon: required schain params missing"),
            t)
          : t;
      }
      function P(e, t) {
        return "rp_schain" === e
          ? "rp_schain=".concat(t)
          : "".concat(e, "=").concat(encodeURIComponent(t));
      }
      var N = !1;
      Object(i.registerBidder)(j);
    },
  },
  [751]
);
pbjsChunk(
  [21],
  {
    17: function (e, t, r) {
      "use strict";
      (t.b = function (e) {
        var t = [];
        for (var r in e)
          if (e.hasOwnProperty(r))
            if ("pubProvidedId" === r) t = t.concat(e.pubProvidedId);
            else {
              var n = i(e[r], r);
              n && t.push(n);
            }
        return t;
      }),
        (t.a = function (e) {
          var t = [];
          return (
            e
              .filter(function (e) {
                return (
                  Object(n.isPlainObject)(e.idObj) &&
                  Object.keys(e.idObj).length
                );
              })
              .forEach(function (e) {
                Object.keys(e.idObj).forEach(function (r) {
                  Object(n.deepAccess)(e, "config.bidders") &&
                    Array.isArray(e.config.bidders) &&
                    Object(n.deepAccess)(o, r + ".source") &&
                    t.push({ source: o[r].source, bidders: e.config.bidders });
                });
              }),
            t
          );
        });
      var n = r(0),
        o = {
          intentIqId: { source: "intentiq.com", atype: 1 },
          naveggId: { source: "navegg.com", atype: 1 },
          pubcid: { source: "pubcid.org", atype: 1 },
          tdid: {
            source: "adserver.org",
            atype: 1,
            getUidExt: function () {
              return { rtiPartner: "TDID" };
            },
          },
          id5id: {
            getValue: function (e) {
              return e.uid;
            },
            source: "id5-sync.com",
            atype: 1,
            getUidExt: function (e) {
              if (e.ext) return e.ext;
            },
          },
          parrableId: {
            source: "parrable.com",
            atype: 1,
            getValue: function (e) {
              return e.eid ? e.eid : e.ccpaOptout ? "" : null;
            },
            getUidExt: function (e) {
              var t = Object(n.pick)(e, ["ibaOptout", "ccpaOptout"]);
              if (Object.keys(t).length) return t;
            },
          },
          idl_env: { source: "liveramp.com", atype: 3 },
          lipb: {
            getValue: function (e) {
              return e.lipbid;
            },
            source: "liveintent.com",
            atype: 3,
            getEidExt: function (e) {
              if (Array.isArray(e.segments) && e.segments.length)
                return { segments: e.segments };
            },
          },
          britepoolid: { source: "britepool.com", atype: 3 },
          dmdId: { source: "hcn.health", atype: 3 },
          lotamePanoramaId: { source: "crwdcntrl.net", atype: 1 },
          criteoId: { source: "criteo.com", atype: 1 },
          merkleId: {
            source: "merkleinc.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
            getUidExt: function (e) {
              return e && e.keyID ? { keyID: e.keyID } : void 0;
            },
          },
          netId: { source: "netid.de", atype: 1 },
          IDP: { source: "zeotap.com", atype: 1 },
          haloId: { source: "audigent.com", atype: 1 },
          quantcastId: { source: "quantcast.com", atype: 1 },
          nextrollId: { source: "nextroll.com", atype: 1 },
          idx: { source: "idx.lat", atype: 1 },
          connectid: { source: "verizonmedia.com", atype: 3 },
          fabrickId: { source: "neustar.biz", atype: 1 },
          mwOpenLinkId: { source: "mediawallahscript.com", atype: 1 },
          tapadId: { source: "tapad.com", atype: 1 },
          novatiq: {
            getValue: function (e) {
              return e.snowflake;
            },
            source: "novatiq.com",
            atype: 1,
          },
          uid2: {
            source: "uidapi.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
          },
          dapId: { source: "akamai.com", atype: 1 },
          deepintentId: { source: "deepintent.com", atype: 3 },
          admixerId: { source: "admixer.net", atype: 3 },
          adtelligentId: { source: "adtelligent.com", atype: 3 },
          amxId: { source: "amxrtb.com", atype: 1 },
          publinkId: { source: "epsilon.com", atype: 3 },
          kpuid: { source: "kpuid.com", atype: 3 },
          imuid: { source: "intimatemerger.com", atype: 1 },
        };
      function i(e, t) {
        var r = o[t];
        if (r && e) {
          var i = {};
          i.source = r.source;
          var a = Object(n.isFn)(r.getValue) ? r.getValue(e) : e;
          if (Object(n.isStr)(a)) {
            var c = { id: a, atype: r.atype };
            if (Object(n.isFn)(r.getUidExt)) {
              var u = r.getUidExt(e);
              u && (c.ext = u);
            }
            if (((i.uids = [c]), Object(n.isFn)(r.getEidExt))) {
              var d = r.getEidExt(e);
              d && (i.ext = d);
            }
            return i;
          }
        }
        return null;
      }
    },
    767: function (e, t, r) {
      e.exports = r(768);
    },
    768: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "sharethroughInternal", function () {
          return v;
        }),
        r.d(t, "sharethroughAdapterSpec", function () {
          return h;
        });
      var n = r(0),
        o = r(1),
        i = r(3),
        a = r(2),
        c = r(17),
        u = r(11),
        d = r.n(u);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                y(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function y(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function f(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              c = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (e) {
              (c = !0), (o = e);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (c) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return m(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return m(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var b = "sharethrough",
        g = "https://btlr.sharethrough.com/universal/v1?supply_id=".concat(
          "WYu2BXv1"
        ),
        v = {
          getProtocol: function () {
            return window.location.protocol;
          },
        },
        h = {
          code: b,
          supportedMediaTypes: [a.d, a.b],
          isBidRequestValid: function (e) {
            return !!e.params.pkey && e.bidder === b;
          },
          buildRequests: function (e, t) {
            var r = i.b.getConfig("bidderTimeout"),
              o =
                v.getProtocol().indexOf("http") < 0 ||
                v.getProtocol().indexOf("https") > -1,
              a = {
                id: Object(n.generateUUID)(),
                at: 1,
                cur: ["USD"],
                tmax: r,
                site: {
                  domain: window.location.hostname,
                  page: window.location.href,
                  ref: (t.refererInfo && t.refererInfo.referer) || null,
                },
                user: { ext: { eids: x(e[0]) } },
                device: {
                  ua: navigator.userAgent,
                  language: navigator.language,
                  js: 1,
                  dnt: "1" === navigator.doNotTrack ? 1 : 0,
                  h: window.screen.height,
                  w: window.screen.width,
                },
                regs: { coppa: !0 === i.b.getConfig("coppa") ? 1 : 0, ext: {} },
                source: {
                  ext: { version: "5.16.0", str: "4.0.0", schain: e[0].schain },
                },
                bcat: e[0].params.bcat || [],
                badv: e[0].params.badv || [],
                test: 0,
              };
            if (t.gdprConsent) {
              var c = !0 === t.gdprConsent.gdprApplies;
              (a.regs.ext.gdpr = c ? 1 : 0),
                c && (a.user.ext.consent = t.gdprConsent.consentString);
            }
            t.uspConsent && (a.regs.ext.us_privacy = t.uspConsent);
            var u = e
              .map(function (e) {
                var t = {},
                  r = Object(n.deepAccess)(e, "ortb2Imp.ext.data.pbadslot");
                if (
                  (r && (t.ext = { gpid: r }),
                  e.mediaTypes &&
                    e.mediaTypes.video &&
                    "outstream" === e.mediaTypes.video.context)
                )
                  return null;
                if (e.mediaTypes && e.mediaTypes.video) {
                  var i = e.mediaTypes.video,
                    a = 640,
                    c = 360;
                  if (i.playerSize && i.playerSize[0] && i.playerSize[1]) {
                    var u = f(i.playerSize, 2);
                    (a = u[0]), (c = u[1]);
                  }
                  (t.video = {
                    pos: w(i.pos, 0),
                    topframe: Object(n.inIframe)() ? 0 : 1,
                    skip: w(i.skip, 0),
                    linearity: w(i.linearity, 1),
                    minduration: w(i.minduration, 5),
                    maxduration: w(i.maxduration, 60),
                    playbackmethod: i.playbackmethod || [2],
                    api: O(i),
                    mimes: i.mimes || ["video/mp4"],
                    protocols: I(i),
                    w: a,
                    h: c,
                    startdelay: w(i.startdelay, 0),
                    skipmin: w(i.skipmin, 0),
                    skipafter: w(i.skipafter, 0),
                  }),
                    i.placement && (t.video.placement = i.placement),
                    i.delivery && (t.video.delivery = i.delivery),
                    i.companiontype &&
                      (t.video.companiontype = i.companiontype),
                    i.companionad && (t.video.companionad = i.companionad);
                } else
                  t.banner = {
                    pos: Object(n.deepAccess)(e, "mediaTypes.banner.pos", 0),
                    topframe: Object(n.inIframe)() ? 0 : 1,
                    format: e.sizes.map(function (e) {
                      return { w: +e[0], h: +e[1] };
                    }),
                  };
                return l(
                  {
                    id: e.bidId,
                    tagid: String(e.params.pkey),
                    secure: o ? 1 : 0,
                    bidfloor: j(e),
                  },
                  t
                );
              })
              .filter(function (e) {
                return !!e;
              });
            return {
              method: "POST",
              url: g,
              data: l(l({}, a), {}, { imp: u }),
              bidRequests: e,
              bidderRequest: t,
            };
          },
          interpretResponse: function (e, t) {
            var r = e.body;
            return r &&
              r.seatbid &&
              0 !== r.seatbid.length &&
              r.seatbid[0].bid &&
              0 !== r.seatbid[0].bid.length
              ? r.seatbid[0].bid.map(function (e) {
                  var n = (function (e, t) {
                      return d()(t.bidRequests, function (t) {
                        return t.bidId === e;
                      });
                    })(e.impid, t),
                    o = {
                      requestId: e.impid,
                      width: +e.w,
                      height: +e.h,
                      cpm: +e.price,
                      creativeId: e.crid,
                      dealId: e.dealid || null,
                      mediaType: n.mediaTypes && n.mediaTypes.video ? a.d : a.b,
                      currency: r.cur || "USD",
                      netRevenue: !0,
                      ttl: 360,
                      ad: e.adm,
                      nurl: e.nurl,
                      meta: { advertiserDomains: e.adomain || [] },
                    };
                  return (
                    o.mediaType === a.d &&
                      ((o.ttl = 3600), (o.vastXml = e.adm)),
                    o
                  );
                })
              : [];
          },
          getUserSyncs: function (e, t, r, n) {
            var o = n ? "&us_privacy=".concat(n) : "",
              i = [];
            return (
              e.pixelEnabled &&
                t.length > 0 &&
                t[0].body &&
                t[0].body.cookieSyncUrls &&
                t[0].body.cookieSyncUrls.forEach(function (e) {
                  i.push({ type: "image", url: e + o });
                }),
              i
            );
          },
          onTimeout: function (e) {},
          onBidWon: function (e) {},
          onSetTargeting: function (e) {},
        };
      function O(e) {
        var t = e.api;
        return t && Array.isArray(t) && t.length > 0 ? t : [2];
      }
      function I(e) {
        var t = e.protocols;
        return t && Array.isArray(t) && t.length > 0 ? t : [2, 3, 5, 6, 7, 8];
      }
      function j(e) {
        var t = null;
        if ("function" == typeof e.getFloor) {
          var r = e.getFloor({
            currency: "USD",
            mediaType: e.mediaTypes && e.mediaTypes.video ? "video" : "banner",
            size: e.sizes.map(function (e) {
              return { w: e[0], h: e[1] };
            }),
          });
          "object" !== s(r) ||
            "USD" !== r.currency ||
            isNaN(parseFloat(r.floor)) ||
            (t = parseFloat(r.floor));
        }
        return null !== t ? t : e.params.floor;
      }
      function x(e) {
        var t = Object(c.b)(Object(n.deepAccess)(e, "userId")) || [],
          r = Object(n.deepAccess)(e, "userId.flocId");
        return (
          r &&
            r.id &&
            r.version &&
            t.push({
              source: "chrome.com",
              uids: [{ id: r.id, atype: 1, ext: { ver: r.version } }],
            }),
          t
        );
      }
      function w(e, t) {
        return null == e ? t : e;
      }
      Object(o.registerBidder)(h);
    },
  },
  [767]
);
pbjsChunk(
  [123],
  {
    777: function (e, t, r) {
      e.exports = r(778);
    },
    778: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return m;
        });
      var a = r(0),
        n = r(1),
        i = r(3),
        o = r(2);
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var s = "prebid_js_5.16.0_1.4",
        p = "USD",
        u = function (e, t) {
          var r = {
              id: t.auctionId,
              at: 1,
              cur: [p],
              tmax: t.timeout,
              site: {
                id: window.location.hostname,
                publisher: {
                  id: Object(a.deepAccess)(e, "params.publisherId"),
                },
                domain: window.location.hostname,
                page: window.location.href,
                ref: t.refererInfo.referer,
              },
              device: {
                language:
                  navigator && navigator.language
                    ? navigator.language.split("-")[0]
                    : "",
                ua: navigator.userAgent,
                dnt: Object(a.getDNT)() ? 1 : 0,
                h: screen.height,
                w: screen.width,
              },
              regs: { coppa: !0 === i.b.getConfig("coppa") ? 1 : 0, ext: {} },
              user: { ext: {} },
              ext: { client: s },
            },
            n = i.b.getConfig("ortb2") || {};
          if (
            (d(r.user, n.user),
            d(r.site, n.site),
            t.gdprConsent &&
              !0 === t.gdprConsent.gdprApplies &&
              (Object(a.deepSetValue)(
                r,
                "regs.ext.gdpr",
                t.gdprConsent.gdprApplies ? 1 : 0
              ),
              Object(a.deepSetValue)(
                r,
                "user.ext.consent",
                t.gdprConsent.consentString
              )),
            void 0 !== t.uspConsent &&
              Object(a.deepSetValue)(r, "regs.ext.us_privacy", t.uspConsent),
            Object(a.deepAccess)(e, "params.app"))
          ) {
            var c = Object(a.deepAccess)(e, "params.app.geo");
            Object(a.deepSetValue)(r, "device.geo", c);
            var u = Object(a.deepAccess)(e, "params.app.ifa");
            Object(a.deepSetValue)(r, "device.ifa", u);
          }
          var m = Object(a.deepAccess)(e, "userIdAsEids");
          m && m.length && Object(a.deepSetValue)(r, "user.ext.eids", m);
          var l = [];
          if (Object(a.deepAccess)(e, "mediaTypes.banner")) {
            var f = d(
              {},
              r,
              (function (e) {
                var t = Object(a.getAdUnitSizes)(e),
                  r = t.map(function (e) {
                    return { w: e[0], h: e[1] };
                  });
                return {
                  imp: [
                    {
                      id: e.bidId,
                      tagid: Object(a.deepAccess)(e, "params.adspaceId"),
                      bidfloor: g(e, o.b, t),
                      banner: { w: r[0].w, h: r[0].h, format: r },
                    },
                  ],
                };
              })(e)
            );
            l.push(f);
          }
          var v = Object(a.deepAccess)(e, "mediaTypes.video");
          if (v)
            if (v.context === o.a) {
              var y = d(
                {},
                r,
                (function (e, t) {
                  var r = Object(a.deepAccess)(e, "params.adbreakId"),
                    n = i.b.getConfig("adpod.brandCategoryExclusion"),
                    c = {
                      id: e.bidId,
                      tagid: r,
                      bidfloor: g(e, o.d, t.playerSize),
                      video: {
                        w: t.playerSize[0][0],
                        h: t.playerSize[0][1],
                        mimes: t.mimes,
                        startdelay: t.startdelay,
                        linearity: t.linearity,
                        skip: t.skip,
                        protocols: t.protocols,
                        skipmin: t.skipmin,
                        api: t.api,
                        ext: {
                          context: o.a,
                          brandcategoryexclusion: void 0 !== n && n,
                        },
                      },
                    },
                    d = (function (e) {
                      var t = e.adPodDurationSec,
                        r = e.durationRangeSec,
                        n = e.requireExactDuration,
                        i = Object(a.getMinValueFromArray)(r),
                        o = Math.floor(t / i);
                      return n ? Math.max(o, r.length) : o;
                    })(t),
                    s = Object(a.fill)(c, d),
                    p = t.durationRangeSec;
                  if (t.requireExactDuration) {
                    var u = Math.ceil(d / p.length),
                      m = Object(a.chunk)(s, u);
                    p.forEach(function (e, t) {
                      m[t].map(function (r) {
                        var a = t + 1;
                        (r.video.minduration = e),
                          (r.video.maxduration = e),
                          (r.video.sequence = a);
                      });
                    });
                  } else {
                    var l = Object(a.getMaxValueFromArray)(p);
                    s.map(function (e, t) {
                      var r = t + 1;
                      (e.video.maxduration = l), (e.video.sequence = r);
                    });
                  }
                  return { imp: s };
                })(e, v)
              );
              b(y, v), l.push(y);
            } else {
              var h = d(
                {},
                r,
                (function (e, t) {
                  return {
                    imp: [
                      {
                        id: e.bidId,
                        tagid: Object(a.deepAccess)(e, "params.adspaceId"),
                        bidfloor: g(e, o.d, t.playerSize),
                        video: {
                          mimes: t.mimes,
                          minduration: t.minduration,
                          startdelay: t.startdelay,
                          linearity: t.linearity,
                          w: t.playerSize[0][0],
                          h: t.playerSize[0][1],
                          maxduration: t.maxduration,
                          skip: t.skip,
                          protocols: t.protocols,
                          ext: {
                            rewarded:
                              t.ext && t.ext.rewarded ? t.ext.rewarded : 0,
                          },
                          skipmin: t.skipmin,
                          api: t.api,
                        },
                      },
                    ],
                  };
                })(e, v)
              );
              l.push(h);
            }
          return l;
        },
        m = {
          code: "smaato",
          supportedMediaTypes: [o.b, o.d],
          isBidRequestValid: function (e) {
            if ("object" !== c(e.params))
              return Object(a.logError)("[SMAATO] Missing params object"), !1;
            if ("string" != typeof e.params.publisherId)
              return (
                Object(a.logError)(
                  "[SMAATO] Missing mandatory publisherId param"
                ),
                !1
              );
            if (Object(a.deepAccess)(e, "mediaTypes.video.context") === o.a) {
              if (
                (Object(a.logInfo)("[SMAATO] Verifying adpod bid request"),
                "string" != typeof e.params.adbreakId)
              )
                return (
                  Object(a.logError)(
                    "[SMAATO] Missing for adpod request mandatory adbreakId param"
                  ),
                  !1
                );
              if (e.params.adspaceId)
                return (
                  Object(a.logError)(
                    "[SMAATO] The adspaceId param is not allowed in an adpod bid request"
                  ),
                  !1
                );
            } else {
              if (
                (Object(a.logInfo)(
                  "[SMAATO] Verifying a non adpod bid request"
                ),
                "string" != typeof e.params.adspaceId)
              )
                return (
                  Object(a.logError)(
                    "[SMAATO] Missing mandatory adspaceId param"
                  ),
                  !1
                );
              if (e.params.adbreakId)
                return (
                  Object(a.logError)(
                    "[SMAATO] The adbreakId param is only allowed in an adpod bid request"
                  ),
                  !1
                );
            }
            return (
              Object(a.logInfo)("[SMAATO] Verification done, all good"), !0
            );
          },
          buildRequests: function (e, t) {
            return (
              Object(a.logInfo)("[SMAATO] Client version:", s),
              e
                .map(function (e) {
                  return u(e, t).map(function (t) {
                    return (function (e, t) {
                      return (
                        Object(a.logInfo)("[SMAATO] OpenRTB Request:", t),
                        {
                          method: "POST",
                          url:
                            e.params.endpoint ||
                            "https://prebid.ad.smaato.net/oapi/prebid",
                          data: JSON.stringify(t),
                          options: { withCredentials: !0, crossOrigin: !0 },
                        }
                      );
                    })(e, t);
                  });
                })
                .reduce(function (e, t) {
                  return null != t && e.concat(t);
                }, [])
            );
          },
          interpretResponse: function (e, t) {
            if (Object(a.isEmpty)(e.body))
              return (
                Object(a.logInfo)(
                  "[SMAATO] Empty response body HTTP 204, no bids"
                ),
                []
              );
            var r = e.headers,
              n = r.get("X-SMT-Expires");
            Object(a.logInfo)("[SMAATO] Expires:", n);
            var c = n ? Math.floor((n - Date.now()) / 1e3) : 300,
              d = e.body;
            Object(a.logInfo)("[SMAATO] OpenRTB Response:", d);
            var s = r.get("X-SMT-ADTYPE"),
              p = [];
            return (
              d.seatbid.forEach(function (e) {
                e.bid.forEach(function (r) {
                  var n = {
                    requestId: r.impid,
                    cpm: r.price || 0,
                    width: r.w,
                    height: r.h,
                    ttl: c,
                    creativeId: r.crid,
                    dealId: r.dealid || null,
                    netRevenue: Object(a.deepAccess)(r, "ext.net", !0),
                    currency: d.cur,
                    meta: {
                      advertiserDomains: r.adomain,
                      networkName: r.bidderName,
                      agencyId: e.seat,
                    },
                  };
                  if (
                    Object(a.deepAccess)(
                      JSON.parse(t.data).imp[0],
                      "video.ext.context"
                    ) === o.a
                  )
                    (n.vastXml = r.adm),
                      (n.mediaType = o.d),
                      i.b.getConfig("adpod.brandCategoryExclusion") &&
                        (n.meta.primaryCatId = r.cat[0]),
                      (n.video = {
                        context: o.a,
                        durationSeconds: r.ext.duration,
                      }),
                      p.push(n);
                  else
                    switch (s) {
                      case "Img":
                        (n.ad = l(r.adm)), (n.mediaType = o.b), p.push(n);
                        break;
                      case "Richmedia":
                        (n.ad = f(r.adm)), (n.mediaType = o.b), p.push(n);
                        break;
                      case "Video":
                        (n.vastXml = r.adm), (n.mediaType = o.d), p.push(n);
                        break;
                      default:
                        Object(a.logInfo)("[SMAATO] Invalid ad type:", s);
                    }
                  n.meta.mediaType = n.mediaType;
                });
              }),
              Object(a.logInfo)("[SMAATO] Prebid bids:", p),
              p
            );
          },
          getUserSyncs: function (e, t, r, a) {
            return [];
          },
        };
      Object(n.registerBidder)(m);
      var l = function (e) {
          var t = JSON.parse(e).image,
            r = "";
          t.clicktrackers.forEach(function (e) {
            r += "fetch(decodeURIComponent('".concat(
              encodeURIComponent(e),
              "'), {cache: 'no-cache'});"
            );
          });
          var a = '<div style="cursor:pointer" onclick="'
            .concat(r, ";window.open(decodeURIComponent('")
            .concat(encodeURIComponent(t.img.ctaurl), '\'));"><img src="')
            .concat(t.img.url, '" width="')
            .concat(t.img.w, '" height="')
            .concat(t.img.h, '"/>');
          return (
            t.impressiontrackers.forEach(function (e) {
              a += '<img src="'.concat(e, '" alt="" width="0" height="0"/>');
            }),
            a + "</div>"
          );
        },
        f = function (e) {
          var t = JSON.parse(e).richmedia,
            r = "";
          t.clicktrackers.forEach(function (e) {
            r += "fetch(decodeURIComponent('".concat(
              encodeURIComponent(e),
              "'), {cache: 'no-cache'});"
            );
          });
          var a = '<div onclick="'.concat(r, '">').concat(t.mediadata.content);
          return (
            t.impressiontrackers.forEach(function (e) {
              a += '<img src="'.concat(e, '" alt="" width="0" height="0"/>');
            }),
            a + "</div>"
          );
        };
      var b = function (e, t) {
        var r = {};
        t.tvSeriesName && (r.series = t.tvSeriesName),
          t.tvEpisodeName && (r.title = t.tvEpisodeName),
          "number" == typeof t.tvSeasonNumber &&
            (r.season = t.tvSeasonNumber.toString()),
          "number" == typeof t.tvEpisodeNumber &&
            (r.episode = t.tvEpisodeNumber),
          "number" == typeof t.contentLengthSec && (r.len = t.contentLengthSec),
          t.contentMode &&
            ["live", "on-demand"].indexOf(t.contentMode) >= 0 &&
            (r.livestream = "live" === t.contentMode ? 1 : 0),
          Object(a.isEmpty)(r) || (e.site.content = r);
      };
      function g(e, t, r) {
        if ("function" == typeof e.getFloor) {
          var a = 1 === r.length ? r[0] : "*",
            n = e.getFloor({ currency: p, mediaType: t, size: a });
          if (n && !isNaN(n.floor) && n.currency === p) return n.floor;
        }
      }
    },
  },
  [777]
);
pbjsChunk(
  [19],
  {
    17: function (e, t, r) {
      "use strict";
      (t.b = function (e) {
        var t = [];
        for (var r in e)
          if (e.hasOwnProperty(r))
            if ("pubProvidedId" === r) t = t.concat(e.pubProvidedId);
            else {
              var a = o(e[r], r);
              a && t.push(a);
            }
        return t;
      }),
        (t.a = function (e) {
          var t = [];
          return (
            e
              .filter(function (e) {
                return (
                  Object(a.isPlainObject)(e.idObj) &&
                  Object.keys(e.idObj).length
                );
              })
              .forEach(function (e) {
                Object.keys(e.idObj).forEach(function (r) {
                  Object(a.deepAccess)(e, "config.bidders") &&
                    Array.isArray(e.config.bidders) &&
                    Object(a.deepAccess)(i, r + ".source") &&
                    t.push({ source: i[r].source, bidders: e.config.bidders });
                });
              }),
            t
          );
        });
      var a = r(0),
        i = {
          intentIqId: { source: "intentiq.com", atype: 1 },
          naveggId: { source: "navegg.com", atype: 1 },
          pubcid: { source: "pubcid.org", atype: 1 },
          tdid: {
            source: "adserver.org",
            atype: 1,
            getUidExt: function () {
              return { rtiPartner: "TDID" };
            },
          },
          id5id: {
            getValue: function (e) {
              return e.uid;
            },
            source: "id5-sync.com",
            atype: 1,
            getUidExt: function (e) {
              if (e.ext) return e.ext;
            },
          },
          parrableId: {
            source: "parrable.com",
            atype: 1,
            getValue: function (e) {
              return e.eid ? e.eid : e.ccpaOptout ? "" : null;
            },
            getUidExt: function (e) {
              var t = Object(a.pick)(e, ["ibaOptout", "ccpaOptout"]);
              if (Object.keys(t).length) return t;
            },
          },
          idl_env: { source: "liveramp.com", atype: 3 },
          lipb: {
            getValue: function (e) {
              return e.lipbid;
            },
            source: "liveintent.com",
            atype: 3,
            getEidExt: function (e) {
              if (Array.isArray(e.segments) && e.segments.length)
                return { segments: e.segments };
            },
          },
          britepoolid: { source: "britepool.com", atype: 3 },
          dmdId: { source: "hcn.health", atype: 3 },
          lotamePanoramaId: { source: "crwdcntrl.net", atype: 1 },
          criteoId: { source: "criteo.com", atype: 1 },
          merkleId: {
            source: "merkleinc.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
            getUidExt: function (e) {
              return e && e.keyID ? { keyID: e.keyID } : void 0;
            },
          },
          netId: { source: "netid.de", atype: 1 },
          IDP: { source: "zeotap.com", atype: 1 },
          haloId: { source: "audigent.com", atype: 1 },
          quantcastId: { source: "quantcast.com", atype: 1 },
          nextrollId: { source: "nextroll.com", atype: 1 },
          idx: { source: "idx.lat", atype: 1 },
          connectid: { source: "verizonmedia.com", atype: 3 },
          fabrickId: { source: "neustar.biz", atype: 1 },
          mwOpenLinkId: { source: "mediawallahscript.com", atype: 1 },
          tapadId: { source: "tapad.com", atype: 1 },
          novatiq: {
            getValue: function (e) {
              return e.snowflake;
            },
            source: "novatiq.com",
            atype: 1,
          },
          uid2: {
            source: "uidapi.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
          },
          dapId: { source: "akamai.com", atype: 1 },
          deepintentId: { source: "deepintent.com", atype: 3 },
          admixerId: { source: "admixer.net", atype: 3 },
          adtelligentId: { source: "adtelligent.com", atype: 3 },
          amxId: { source: "amxrtb.com", atype: 1 },
          publinkId: { source: "epsilon.com", atype: 3 },
          kpuid: { source: "kpuid.com", atype: 3 },
          imuid: { source: "intimatemerger.com", atype: 1 },
        };
      function o(e, t) {
        var r = i[t];
        if (r && e) {
          var o = {};
          o.source = r.source;
          var n = Object(a.isFn)(r.getValue) ? r.getValue(e) : e;
          if (Object(a.isStr)(n)) {
            var d = { id: n, atype: r.atype };
            if (Object(a.isFn)(r.getUidExt)) {
              var s = r.getUidExt(e);
              s && (d.ext = s);
            }
            if (((o.uids = [d]), Object(a.isFn)(r.getEidExt))) {
              var c = r.getEidExt(e);
              c && (o.ext = c);
            }
            return o;
          }
        }
        return null;
      }
    },
    779: function (e, t, r) {
      e.exports = r(780);
    },
    780: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return s;
        });
      var a = r(0),
        i = r(2),
        o = r(3),
        n = r(17),
        d = r(1),
        s = {
          code: "smartadserver",
          gvlid: 45,
          aliases: ["smart"],
          supportedMediaTypes: [i.b, i.d],
          isBidRequestValid: function (e) {
            return !!(
              e.params &&
              e.params.siteId &&
              e.params.pageId &&
              e.params.formatId
            );
          },
          serializeSupplyChain: function (e) {
            if (!e || !e.nodes) return null;
            var t = ["asi", "sid", "hp", "rid", "name", "domain"];
            return (
              "".concat(e.ver, ",").concat(e.complete, "!") +
              e.nodes
                .map(function (e) {
                  return t
                    .map(function (t) {
                      return e[t] ? encodeURIComponent(e[t]) : "";
                    })
                    .join(",");
                })
                .join("!")
            );
          },
          adaptBannerSizes: function (e) {
            return e.map(function (e) {
              return { w: e[0], h: e[1] };
            });
          },
          fillPayloadForVideoBidRequest: function (e, t, r) {
            var a = t.playerSize[0];
            (e.isVideo = "instream" === t.context),
              (e.mediaType = i.d),
              (e.videoData = {
                videoProtocol: this.getProtocolForVideoBidRequest(t, r),
                playerWidth: a[0],
                playerHeight: a[1],
                adBreak: this.getStartDelayForVideoBidRequest(t, r),
              });
          },
          getProtocolForVideoBidRequest: function (e, t) {
            return void 0 !== t && t.protocol
              ? t.protocol
              : void 0 !== e && Array.isArray(e.protocols)
              ? Math.max.apply(Math, e.protocols)
              : null;
          },
          getStartDelayForVideoBidRequest: function (e, t) {
            if (void 0 !== t && t.startDelay) return t.startDelay;
            if (void 0 !== e) {
              if (0 == e.startdelay) return 1;
              if (-1 == e.startdelay) return 2;
              if (-2 == e.startdelay) return 3;
            }
            return 2;
          },
          createServerRequest: function (e, t) {
            return {
              method: "POST",
              url:
                (void 0 !== t ? t : "https://prg.smartadserver.com") +
                "/prebid/v1",
              data: JSON.stringify(e),
            };
          },
          buildRequests: function (e, t) {
            var r = o.b.getConfig("currency.adServerCurrency");
            return e.reduce(function (e, i) {
              var d = {
                siteid: i.params.siteId,
                pageid: i.params.pageId,
                formatid: i.params.formatId,
                currencyCode: r,
                bidfloor: i.params.bidfloor || s.getBidFloor(i, r),
                targeting:
                  i.params.target && "" !== i.params.target
                    ? i.params.target
                    : void 0,
                buid:
                  i.params.buId && "" !== i.params.buId
                    ? i.params.buId
                    : void 0,
                appname:
                  i.params.appName && "" !== i.params.appName
                    ? i.params.appName
                    : void 0,
                ckid: i.params.ckId || 0,
                tagId: i.adUnitCode,
                pageDomain:
                  t && t.refererInfo && t.refererInfo.referer
                    ? t.refererInfo.referer
                    : void 0,
                transactionId: i.transactionId,
                timeout: o.b.getConfig("bidderTimeout"),
                bidId: i.bidId,
                prebidVersion: "5.16.0",
                schain: s.serializeSupplyChain(i.schain),
              };
              t &&
                t.gdprConsent &&
                ((d.addtl_consent = t.gdprConsent.addtlConsent),
                (d.gdpr_consent = t.gdprConsent.consentString),
                (d.gdpr = t.gdprConsent.gdprApplies)),
                i && i.userId && (d.eids = Object(n.b)(i.userId)),
                t && t.uspConsent && (d.us_privacy = t.uspConsent);
              var c = Object(a.deepAccess)(i, "mediaTypes.video"),
                u = Object(a.deepAccess)(i, "mediaTypes.banner"),
                p =
                  c && ("instream" === c.context || "outstream" === c.context);
              if (!p && u)
                (d.sizes = s.adaptBannerSizes(u.sizes)),
                  e.push(s.createServerRequest(d, i.params.domain));
              else if (p && !u)
                s.fillPayloadForVideoBidRequest(d, c, i.params.video),
                  e.push(s.createServerRequest(d, i.params.domain));
              else if (p && u) {
                var l = Object(a.deepClone)(d);
                s.fillPayloadForVideoBidRequest(l, c, i.params.video),
                  e.push(s.createServerRequest(l, i.params.domain)),
                  (d.sizes = s.adaptBannerSizes(u.sizes)),
                  e.push(s.createServerRequest(d, i.params.domain));
              } else e.push({});
              return e;
            }, []);
          },
          interpretResponse: function (e, t) {
            var r = [],
              o = e.body;
            try {
              if (o && !o.isNoAd) {
                var n = JSON.parse(t.data),
                  d = {
                    requestId: n.bidId,
                    cpm: o.cpm,
                    width: o.width,
                    height: o.height,
                    creativeId: o.creativeId,
                    dealId: o.dealId,
                    currency: o.currency,
                    netRevenue: o.isNetCpm,
                    ttl: o.ttl,
                    dspPixels: o.dspPixels,
                    meta: { advertiserDomains: o.adomain ? o.adomain : [] },
                  };
                n.mediaType === i.d
                  ? ((d.mediaType = i.d),
                    (d.vastUrl = o.adUrl),
                    (d.vastXml = o.ad),
                    (d.content = o.ad))
                  : ((d.adUrl = o.adUrl), (d.ad = o.ad)),
                  r.push(d);
              }
            } catch (e) {
              Object(a.logError)(
                "Error while parsing smart server response",
                e
              );
            }
            return r;
          },
          getBidFloor: function (e, t) {
            if (!Object(a.isFn)(e.getFloor)) return 0;
            var r = e.getFloor({
              currency: t || "USD",
              mediaType: "*",
              size: "*",
            });
            return Object(a.isPlainObject)(r) && !isNaN(r.floor) ? r.floor : 0;
          },
          getUserSyncs: function (e, t) {
            var r = [];
            return (
              e.iframeEnabled && t.length > 0 && null != t[0].body.cSyncUrl
                ? r.push({ type: "iframe", url: t[0].body.cSyncUrl })
                : e.pixelEnabled &&
                  t.length > 0 &&
                  void 0 !== t[0].body.dspPixels &&
                  t[0].body.dspPixels.forEach(function (e) {
                    r.push({ type: "image", url: e });
                  }),
              r
            );
          },
        };
      Object(d.registerBidder)(s);
    },
  },
  [779]
);
pbjsChunk(
  [118],
  {
    791: function (e, t, r) {
      e.exports = r(792);
    },
    792: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return v;
        }),
        r.d(t, "_isInbounds", function () {
          return O;
        }),
        (t._getPlatform = _);
      var n = r(1),
        i = r(0),
        s = r(2),
        a = r(3),
        o = r(13),
        c = r(60);
      function d(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == r) return;
            var n,
              i,
              s = [],
              a = !0,
              o = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (s.push(n.value), !t || s.length !== t);
                a = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (o) throw i;
              }
            }
            return s;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return u(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return u(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var b = "sonobi",
        f = Object(i.generateUUID)(),
        m = "https://mtrx.go.sonobi.com/sbi_outstream_renderer.js",
        v = {
          code: b,
          supportedMediaTypes: [s.b, s.d],
          isBidRequestValid: function (e) {
            if (!e.params) return !1;
            if (!e.params.ad_unit && !e.params.placement_id) return !1;
            if (
              !Object(i.deepAccess)(e, "mediaTypes.banner") &&
              !Object(i.deepAccess)(e, "mediaTypes.video")
            )
              return !1;
            if (Object(i.deepAccess)(e, "mediaTypes.banner")) {
              if (
                !Object(i.deepAccess)(e, "mediaTypes.banner.sizes") &&
                !e.params.sizes
              )
                return !1;
            } else if (Object(i.deepAccess)(e, "mediaTypes.video")) {
              if (
                "outstream" ===
                  Object(i.deepAccess)(e, "mediaTypes.video.context") &&
                !e.params.sizes
              )
                return !1;
              if (
                "instream" ===
                  Object(i.deepAccess)(e, "mediaTypes.video.context") &&
                !Object(i.deepAccess)(e, "mediaTypes.video.playerSize")
              )
                return !1;
            }
            return !0;
          },
          buildRequests: function (e, t) {
            var r = e.map(function (e) {
                var t = (function (e) {
                  if (e.params.ad_unit) return e.params.ad_unit;
                  return e.params.placement_id;
                })(e);
                return /^[\/]?[\d]+[[\/].+[\/]?]?$/.test(t)
                  ? ((t = "/" === t.charAt(0) ? t : "/" + t),
                    l(
                      {},
                      "".concat(t, "|").concat(e.bidId),
                      "".concat(y(e)).concat(g(e)).concat(h(e))
                    ))
                  : /^[0-9a-fA-F]{20}$/.test(t) && 20 === t.length
                  ? l(
                      {},
                      e.bidId,
                      "".concat(t, "|").concat(y(e)).concat(g(e)).concat(h(e))
                    )
                  : void Object(i.logError)(
                      "The ad unit code or Sonobi Placement id for slot ".concat(
                        e.bidId,
                        " is invalid"
                      )
                    );
              }),
              n = {};
            r.forEach(function (e) {
              p(n, e);
            });
            var s = {
              key_maker: JSON.stringify(n),
              ref: t.refererInfo.referer,
              s: Object(i.generateUUID)(),
              pv: f,
              vp: _(),
              lib_name: "prebid",
              lib_v: "5.16.0",
              us: 0,
            };
            if (
              (a.b.getConfig("userSync") &&
                a.b.getConfig("userSync").syncsPerBidder &&
                (s.us = a.b.getConfig("userSync").syncsPerBidder),
              c.a.canBidderRegisterSync("iframe", b)
                ? (s.ius = 1)
                : (s.ius = 0),
              Object(i.deepAccess)(e[0], "params.hfa") &&
                (s.hfa = Object(i.deepAccess)(e[0], "params.hfa")),
              e[0].params.referrer && (s.ref = e[0].params.referrer),
              t &&
                t.gdprConsent &&
                ((s.gdpr = t.gdprConsent.gdprApplies ? "true" : "false"),
                t.gdprConsent.consentString &&
                  (s.consent_string = t.gdprConsent.consentString)),
              e[0].schain && (s.schain = JSON.stringify(e[0].schain)),
              Object(i.deepAccess)(e[0], "userId") &&
                Object.keys(e[0].userId).length > 0)
            ) {
              var o = Object(i.deepClone)(e[0].userId);
              o.id5id && (o.id5id = Object(i.deepAccess)(o, "id5id.uid")),
                (s.userid = JSON.stringify(o));
            }
            var d = Object(i.deepAccess)(e[0], "userIdAsEids");
            Array.isArray(d) && d.length > 0 && (s.eids = JSON.stringify(d));
            var u = e[0].params.keywords;
            if (
              (u && (s.kw = u),
              t && t.uspConsent && (s.us_privacy = t.uspConsent),
              !0 === a.b.getConfig("coppa") ? (s.coppa = 1) : (s.coppa = 0),
              Object(i.isEmpty)(n))
            )
              return null;
            var m = "https://apex.go.sonobi.com/trinity.json";
            return (
              Object(i.deepAccess)(e[0], "params.bid_request_url") &&
                (m = Object(i.deepAccess)(e[0], "params.bid_request_url")),
              {
                method: "GET",
                url: m,
                withCredentials: !0,
                data: s,
                bidderRequests: e,
              }
            );
          },
          interpretResponse: function (e, t) {
            var r = e.body,
              n = [],
              s = t.data.ref;
            return (
              0 === Object.keys(r.slots).length ||
                Object.keys(r.slots).forEach(function (e) {
                  var a = r.slots[e],
                    c = e.split("|").slice(-1)[0],
                    u = (function (e, t) {
                      for (var r = 0; r < e.length; r++)
                        if (e[r].bidId === t) return e[r];
                    })(t.bidderRequests, c),
                    p = null;
                  "video" === a.sbi_ct &&
                    ((p = "video"),
                    "outstream" ===
                      Object(i.deepAccess)(u, "mediaTypes.video.context") &&
                      (p = "outstream"));
                  var l = j(p, s);
                  if (a.sbi_aid && a.sbi_mouse && a.sbi_size) {
                    var b = d(a.sbi_size.split("x"), 2),
                      f = b[0],
                      v = void 0 === f ? 1 : f,
                      y = b[1],
                      g = void 0 === y ? 1 : y,
                      h = [];
                    a.sbi_adomain && (h = [a.sbi_adomain]);
                    var O = {
                      requestId: c,
                      cpm: Number(a.sbi_mouse),
                      width: Number(v),
                      height: Number(g),
                      ad: l(r.sbi_dc, a.sbi_aid),
                      ttl: 500,
                      creativeId: a.sbi_crid || a.sbi_aid,
                      aid: a.sbi_aid,
                      netRevenue: !0,
                      currency: "USD",
                      meta: { advertiserDomains: h },
                    };
                    if (
                      (a.sbi_dozer && (O.dealId = a.sbi_dozer), "video" === p)
                    )
                      (O.mediaType = "video"),
                        (O.vastUrl = l(r.sbi_dc, a.sbi_aid)),
                        delete O.ad,
                        delete O.width,
                        delete O.height;
                    else if ("outstream" === p && u) {
                      delete O.ad,
                        (O.mediaType = "video"),
                        (O.vastUrl = l(r.sbi_dc, a.sbi_aid)),
                        (O.renderer = (function (e, t) {
                          var r =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            n = o.a.install({
                              id: t.aid,
                              url: m,
                              config: r,
                              loaded: !1,
                              adUnitCode: e,
                            });
                          try {
                            n.setRender(A);
                          } catch (e) {
                            Object(i.logWarn)(
                              "Prebid Error calling setRender on renderer",
                              e
                            );
                          }
                          return (
                            n.setEventHandlers({
                              impression: function () {
                                return Object(i.logMessage)(
                                  "Sonobi outstream video impression event"
                                );
                              },
                              loaded: function () {
                                return Object(i.logMessage)(
                                  "Sonobi outstream video loaded event"
                                );
                              },
                              ended: function () {
                                Object(i.logMessage)(
                                  "Sonobi outstream renderer video event"
                                );
                              },
                            }),
                            n
                          );
                        })(
                          u.adUnitCode,
                          O,
                          Object(i.deepAccess)(u, "renderer.options")
                        ));
                      var _ = Object(i.deepAccess)(u, "params.sizes");
                      Array.isArray(_) && Array.isArray(_[0]) && (_ = _[0]),
                        _ && ((O.width = _[0]), (O.height = _[1]));
                    }
                    n.push(O);
                  }
                }),
              n
            );
          },
          getUserSyncs: function (e, t, r, n) {
            var i = [];
            try {
              e.pixelEnabled &&
                t[0].body.sbi_px.forEach(function (e) {
                  i.push({ type: e.type, url: e.url });
                });
            } catch (e) {}
            return i;
          },
        };
      function y(e) {
        return Object(i.deepAccess)(e, "mediaTypes.video")
          ? ""
          : e.params.sizes
          ? Object(i.parseSizesInput)(e.params.sizes).join(",")
          : Object(i.deepAccess)(e, "mediaTypes.banner.sizes")
          ? Object(i.parseSizesInput)(
              Object(i.deepAccess)(e, "mediaTypes.banner.sizes")
            ).join(",")
          : e.sizes
          ? Object(i.parseSizesInput)(e.sizes).join(",")
          : void 0;
      }
      function g(e) {
        var t = (function (e) {
          if (!Object(i.isFn)(e.getFloor))
            return e.params.floor ? e.params.floor : null;
          var t = e.getFloor({ currency: "USD", mediaType: "*", size: "*" });
          if (
            Object(i.isPlainObject)(t) &&
            !isNaN(t.floor) &&
            "USD" === t.currency
          )
            return t.floor;
          return "";
        })(e);
        return t ? "|f=".concat(t) : "";
      }
      function h(e) {
        var t =
          Object(i.deepAccess)(e, "ortb2Imp.ext.data.pbadslot") ||
          Object(i.deepAccess)(
            Object(i.getGptSlotInfoForAdUnitCode)(e.adUnitCode),
            "gptSlot"
          ) ||
          e.params.ad_unit;
        return t ? "|gpid=".concat(t) : "";
      }
      var j = function (e, t) {
        return function (r, n) {
          return "video" === e || "outstream" === e
            ? (function (e, t, r) {
                return "https://"
                  .concat(e, "apex.go.sonobi.com/vast.xml?vid=")
                  .concat(t, "&ref=")
                  .concat(encodeURIComponent(r));
              })(r, n, t)
            : '<script type="text/javascript" src="' +
                "https://"
                  .concat(r, "apex.go.sonobi.com/sbi.js?aid=")
                  .concat(n, "&as=null&ref=")
                  .concat(encodeURIComponent(t)) +
                '"></script>';
        };
      };
      var O = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window;
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Number.MAX_SAFE_INTEGER;
          return e.innerWidth >= t && e.innerWidth < r;
        };
      };
      function _() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window,
          t = O(e),
          r = { lt: 768 },
          n = { lt: 992, ge: 768 };
        return t(0, r.lt) ? "mobile" : t(n.ge, n.lt) ? "tablet" : "desktop";
      }
      function A(e) {
        e.renderer.push(function () {
          var t = d(e.getSize().split("x"), 2),
            r = t[0],
            n = t[1],
            i = new window.SbiOutstreamRenderer();
          i.init({ vastUrl: e.vastUrl, height: n, width: r }),
            i.setRootElement(e.adUnitCode);
        });
      }
      Object(n.registerBidder)(v);
    },
  },
  [791]
);
pbjsChunk(
  [14],
  {
    17: function (e, t, r) {
      "use strict";
      (t.b = function (e) {
        var t = [];
        for (var r in e)
          if (e.hasOwnProperty(r))
            if ("pubProvidedId" === r) t = t.concat(e.pubProvidedId);
            else {
              var i = a(e[r], r);
              i && t.push(i);
            }
        return t;
      }),
        (t.a = function (e) {
          var t = [];
          return (
            e
              .filter(function (e) {
                return (
                  Object(i.isPlainObject)(e.idObj) &&
                  Object.keys(e.idObj).length
                );
              })
              .forEach(function (e) {
                Object.keys(e.idObj).forEach(function (r) {
                  Object(i.deepAccess)(e, "config.bidders") &&
                    Array.isArray(e.config.bidders) &&
                    Object(i.deepAccess)(n, r + ".source") &&
                    t.push({ source: n[r].source, bidders: e.config.bidders });
                });
              }),
            t
          );
        });
      var i = r(0),
        n = {
          intentIqId: { source: "intentiq.com", atype: 1 },
          naveggId: { source: "navegg.com", atype: 1 },
          pubcid: { source: "pubcid.org", atype: 1 },
          tdid: {
            source: "adserver.org",
            atype: 1,
            getUidExt: function () {
              return { rtiPartner: "TDID" };
            },
          },
          id5id: {
            getValue: function (e) {
              return e.uid;
            },
            source: "id5-sync.com",
            atype: 1,
            getUidExt: function (e) {
              if (e.ext) return e.ext;
            },
          },
          parrableId: {
            source: "parrable.com",
            atype: 1,
            getValue: function (e) {
              return e.eid ? e.eid : e.ccpaOptout ? "" : null;
            },
            getUidExt: function (e) {
              var t = Object(i.pick)(e, ["ibaOptout", "ccpaOptout"]);
              if (Object.keys(t).length) return t;
            },
          },
          idl_env: { source: "liveramp.com", atype: 3 },
          lipb: {
            getValue: function (e) {
              return e.lipbid;
            },
            source: "liveintent.com",
            atype: 3,
            getEidExt: function (e) {
              if (Array.isArray(e.segments) && e.segments.length)
                return { segments: e.segments };
            },
          },
          britepoolid: { source: "britepool.com", atype: 3 },
          dmdId: { source: "hcn.health", atype: 3 },
          lotamePanoramaId: { source: "crwdcntrl.net", atype: 1 },
          criteoId: { source: "criteo.com", atype: 1 },
          merkleId: {
            source: "merkleinc.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
            getUidExt: function (e) {
              return e && e.keyID ? { keyID: e.keyID } : void 0;
            },
          },
          netId: { source: "netid.de", atype: 1 },
          IDP: { source: "zeotap.com", atype: 1 },
          haloId: { source: "audigent.com", atype: 1 },
          quantcastId: { source: "quantcast.com", atype: 1 },
          nextrollId: { source: "nextroll.com", atype: 1 },
          idx: { source: "idx.lat", atype: 1 },
          connectid: { source: "verizonmedia.com", atype: 3 },
          fabrickId: { source: "neustar.biz", atype: 1 },
          mwOpenLinkId: { source: "mediawallahscript.com", atype: 1 },
          tapadId: { source: "tapad.com", atype: 1 },
          novatiq: {
            getValue: function (e) {
              return e.snowflake;
            },
            source: "novatiq.com",
            atype: 1,
          },
          uid2: {
            source: "uidapi.com",
            atype: 3,
            getValue: function (e) {
              return e.id;
            },
          },
          dapId: { source: "akamai.com", atype: 1 },
          deepintentId: { source: "deepintent.com", atype: 3 },
          admixerId: { source: "admixer.net", atype: 3 },
          adtelligentId: { source: "adtelligent.com", atype: 3 },
          amxId: { source: "amxrtb.com", atype: 1 },
          publinkId: { source: "epsilon.com", atype: 3 },
          kpuid: { source: "kpuid.com", atype: 3 },
          imuid: { source: "intimatemerger.com", atype: 1 },
        };
      function a(e, t) {
        var r = n[t];
        if (r && e) {
          var a = {};
          a.source = r.source;
          var c = Object(i.isFn)(r.getValue) ? r.getValue(e) : e;
          if (Object(i.isStr)(c)) {
            var o = { id: c, atype: r.atype };
            if (Object(i.isFn)(r.getUidExt)) {
              var d = r.getUidExt(e);
              d && (o.ext = d);
            }
            if (((a.uids = [o]), Object(i.isFn)(r.getEidExt))) {
              var s = r.getEidExt(e);
              s && (a.ext = s);
            }
            return a;
          }
        }
        return null;
      }
    },
    799: function (e, t, r) {
      e.exports = r(800);
    },
    800: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return d;
        });
      var i = r(0),
        n = r(1),
        a = r(2),
        c = r(17),
        o = r(3),
        d = {
          code: "sovrn",
          supportedMediaTypes: [a.b],
          gvlid: 13,
          isBidRequestValid: function (e) {
            return !(
              !e.params.tagid ||
              isNaN(parseFloat(e.params.tagid)) ||
              !isFinite(e.params.tagid)
            );
          },
          buildRequests: function (e, t) {
            try {
              var r,
                n,
                a,
                d,
                s = [],
                u = [];
              Object(i._each)(e, function (e) {
                !a &&
                  e.userId &&
                  (a = Object(c.b)(e.userId)).forEach(function (e) {
                    e.uids &&
                      e.uids[0] &&
                      ("criteo.com" === e.source && (d = e.uids[0].id),
                      u.push({ source: e.source, uid: e.uids[0].id }));
                  }),
                  e.schain && (n = n || e.schain),
                  (r = r || Object(i.getBidIdParameter)("iv", e.params));
                var t =
                    (e.mediaTypes &&
                      e.mediaTypes.banner &&
                      e.mediaTypes.banner.sizes) ||
                    e.sizes,
                  o = (t = (t =
                    Object(i.isArray)(t) && Object(i.isArray)(t[0])
                      ? t
                      : [t]).filter(function (e) {
                    return Object(i.isArray)(e);
                  })).map(function (e) {
                    return { w: parseInt(e[0], 10), h: parseInt(e[1], 10) };
                  }),
                  p =
                    e.getFloor && "function" == typeof e.getFloor
                      ? e.getFloor({
                          currency: "USD",
                          mediaType: "banner",
                          size: "*",
                        })
                      : {};
                p.floor =
                  p.floor || Object(i.getBidIdParameter)("bidfloor", e.params);
                var l = {
                  adunitcode: e.adUnitCode,
                  id: e.bidId,
                  banner: { format: o, w: 1, h: 1 },
                  tagid: String(Object(i.getBidIdParameter)("tagid", e.params)),
                  bidfloor: p.floor,
                };
                l.ext =
                  Object(i.getBidIdParameter)("ext", e.ortb2Imp) || void 0;
                var b = Object(i.getBidIdParameter)("segments", e.params);
                b &&
                  ((l.ext = l.ext || {}),
                  (l.ext.deals = b.split(",").map(function (e) {
                    return e.trim();
                  }))),
                  s.push(l);
              });
              var p = Object(i.deepClone)(o.b.getConfig("ortb2")),
                l = p.site || {};
              (l.page = t.refererInfo.referer),
                (l.domain = Object(i.parseUrl)(l.page).hostname);
              var b = {
                id: Object(i.getUniqueIdentifierStr)(),
                imp: s,
                site: l,
                user: p.user || {},
              };
              n && (b.source = { ext: { schain: n } }),
                t.gdprConsent &&
                  (Object(i.deepSetValue)(
                    b,
                    "regs.ext.gdpr",
                    +t.gdprConsent.gdprApplies
                  ),
                  Object(i.deepSetValue)(
                    b,
                    "user.ext.consent",
                    t.gdprConsent.consentString
                  )),
                t.uspConsent &&
                  Object(i.deepSetValue)(
                    b,
                    "regs.ext.us_privacy",
                    t.uspConsent
                  ),
                a &&
                  (Object(i.deepSetValue)(b, "user.ext.eids", a),
                  Object(i.deepSetValue)(b, "user.ext.tpid", u),
                  d &&
                    Object(i.deepSetValue)(b, "user.ext.prebid_criteoid", d));
              var m = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_5.16.0";
              return (
                r && (m += "&iv=".concat(r)),
                {
                  method: "POST",
                  url: m,
                  data: JSON.stringify(b),
                  options: { contentType: "text/plain" },
                }
              );
            } catch (e) {
              Object(i.logError)(
                "Could not build bidrequest, error deatils:",
                e
              );
            }
          },
          interpretResponse: function (e) {
            var t = e.body,
              r = t.id,
              n = t.seatbid;
            try {
              var c = [];
              return (
                r &&
                  n &&
                  n.length > 0 &&
                  n[0].bid &&
                  n[0].bid.length > 0 &&
                  n[0].bid.map(function (e) {
                    c.push({
                      requestId: e.impid,
                      cpm: parseFloat(e.price),
                      width: parseInt(e.w),
                      height: parseInt(e.h),
                      creativeId: e.crid || e.id,
                      dealId: e.dealid || null,
                      currency: "USD",
                      netRevenue: !0,
                      mediaType: a.b,
                      ad: decodeURIComponent(
                        "".concat(e.adm, '<img src="').concat(e.nurl, '">')
                      ),
                      ttl: (e.ext && e.ext.ttl) || 90,
                      meta: {
                        advertiserDomains: e && e.adomain ? e.adomain : [],
                      },
                    });
                  }),
                c
              );
            } catch (e) {
              Object(i.logError)(
                "Could not intrepret bidresponse, error deatils:",
                e
              );
            }
          },
          getUserSyncs: function (e, t, r, n) {
            try {
              var a = [];
              if (t && 0 !== t.length) {
                if (e.iframeEnabled) {
                  var c = t
                      .filter(function (e) {
                        return Object(i.deepAccess)(e, "body.ext.iid");
                      })
                      .map(function (e) {
                        return e.body.ext.iid;
                      }),
                    o = [];
                  r &&
                    r.gdprApplies &&
                    "string" == typeof r.consentString &&
                    o.push(["gdpr_consent", r.consentString]),
                    n && o.push(["us_privacy", n]),
                    c[0] &&
                      (o.push(["informer", c[0]]),
                      a.push({
                        type: "iframe",
                        url:
                          "https://ap.lijit.com/beacon?" +
                          o
                            .map(function (e) {
                              return e.join("=");
                            })
                            .join("&"),
                      }));
                }
                e.pixelEnabled &&
                  t
                    .filter(function (e) {
                      return Object(i.deepAccess)(e, "body.ext.sync.pixels");
                    })
                    .reduce(function (e, t) {
                      return e.concat(t.body.ext.sync.pixels);
                    }, [])
                    .map(function (e) {
                      return e.url;
                    })
                    .forEach(function (e) {
                      return a.push({ type: "image", url: e });
                    });
              }
              return a;
            } catch (e) {
              return [];
            }
          },
        };
      Object(n.registerBidder)(d);
    },
  },
  [799]
);
pbjsChunk(
  [117],
  {
    801: function (e, t, r) {
      e.exports = r(802);
    },
    802: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "GOOGLE_CONSENT", function () {
          return p;
        }),
        r.d(t, "spec", function () {
          return m;
        });
      var a = r(0),
        d = r(3),
        i = r(13),
        n = r(1),
        o = r(2);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var c = "spotx",
        p = {
          consented_providers: [
            "3",
            "7",
            "11",
            "12",
            "15",
            "20",
            "22",
            "35",
            "43",
            "46",
            "48",
            "55",
            "57",
            "61",
            "62",
            "66",
            "70",
            "80",
            "83",
            "85",
            "86",
            "89",
            "93",
            "108",
            "122",
            "124",
            "125",
            "126",
            "131",
            "134",
            "135",
            "136",
            "143",
            "144",
            "147",
            "149",
            "153",
            "154",
            "159",
            "161",
            "162",
            "165",
            "167",
            "171",
            "178",
            "184",
            "188",
            "192",
            "195",
            "196",
            "202",
            "209",
            "211",
            "218",
            "221",
            "228",
            "229",
            "230",
            "236",
            "239",
            "241",
            "253",
            "255",
            "259",
            "266",
            "271",
            "272",
            "274",
            "286",
            "291",
            "294",
            "303",
            "308",
            "310",
            "311",
            "313",
            "314",
            "316",
            "317",
            "322",
            "323",
            "327",
            "336",
            "338",
            "340",
            "348",
            "350",
            "358",
            "359",
            "363",
            "367",
            "370",
            "371",
            "384",
            "385",
            "389",
            "393",
            "394",
            "397",
            "398",
            "407",
            "414",
            "415",
            "424",
            "429",
            "430",
            "432",
            "436",
            "438",
            "440",
            "442",
            "443",
            "445",
            "448",
            "449",
            "453",
            "459",
            "479",
            "482",
            "486",
            "491",
            "492",
            "494",
            "495",
            "503",
            "505",
            "510",
            "522",
            "523",
            "528",
            "537",
            "540",
            "550",
            "559",
            "560",
            "568",
            "571",
            "574",
            "575",
            "576",
            "584",
            "585",
            "587",
            "588",
            "590",
            "591",
            "592",
            "595",
            "609",
            "621",
            "624",
            "723",
            "725",
            "733",
            "737",
            "776",
            "780",
            "782",
            "787",
            "797",
            "798",
            "802",
            "803",
            "814",
            "817",
            "820",
            "821",
            "827",
            "829",
            "839",
            "853",
            "864",
            "867",
            "874",
            "899",
            "904",
            "922",
            "926",
            "931",
            "932",
            "933",
            "938",
            "955",
            "973",
            "976",
            "979",
            "981",
            "985",
            "987",
            "991",
            "1003",
            "1024",
            "1025",
            "1027",
            "1028",
            "1029",
            "1033",
            "1034",
            "1040",
            "1047",
            "1048",
            "1051",
            "1052",
            "1053",
            "1054",
            "1062",
            "1063",
            "1067",
            "1072",
            "1085",
            "1092",
            "1095",
            "1097",
            "1099",
            "1100",
            "1107",
            "1126",
            "1127",
            "1143",
            "1149",
            "1152",
            "1162",
            "1166",
            "1167",
            "1170",
            "1171",
            "1172",
            "1188",
            "1192",
            "1199",
            "1201",
            "1204",
            "1205",
            "1211",
            "1212",
            "1215",
            "1220",
            "1225",
            "1226",
            "1227",
            "1230",
            "1232",
            "1236",
            "1241",
            "1248",
            "1250",
            "1252",
            "1268",
            "1275",
            "1276",
            "1284",
            "1286",
            "1298",
            "1301",
            "1307",
            "1312",
            "1313",
            "1317",
            "1329",
            "1336",
            "1344",
            "1345",
            "1356",
            "1362",
            "1365",
            "1375",
            "1403",
            "1409",
            "1411",
            "1415",
            "1416",
            "1419",
            "1423",
            "1440",
            "1442",
            "1449",
            "1451",
            "1455",
            "1456",
            "1468",
            "1496",
            "1503",
            "1509",
            "1512",
            "1514",
            "1517",
            "1520",
            "1525",
            "1540",
            "1547",
            "1548",
            "1555",
            "1558",
            "1570",
            "1575",
            "1577",
            "1579",
            "1583",
            "1584",
            "1591",
            "1598",
            "1603",
            "1608",
            "1613",
            "1616",
            "1626",
            "1631",
            "1633",
            "1638",
            "1642",
            "1648",
            "1651",
            "1652",
            "1653",
            "1660",
            "1665",
            "1667",
            "1669",
            "1671",
            "1674",
            "1677",
            "1678",
            "1682",
            "1684",
            "1697",
            "1703",
            "1705",
            "1716",
            "1720",
            "1721",
            "1722",
            "1725",
            "1732",
            "1733",
            "1735",
            "1739",
            "1741",
            "1745",
            "1750",
            "1753",
            "1760",
            "1765",
            "1769",
            "1776",
            "1780",
            "1782",
            "1786",
            "1791",
            "1794",
            "1799",
            "1800",
            "1801",
            "1810",
            "1827",
            "1831",
            "1832",
            "1834",
            "1837",
            "1840",
            "1843",
            "1844",
            "1845",
            "1858",
            "1859",
            "1863",
            "1866",
            "1870",
            "1872",
            "1875",
            "1878",
            "1880",
            "1882",
            "1883",
            "1889",
            "1892",
            "1896",
            "1898",
            "1899",
            "1902",
            "1905",
            "1911",
            "1922",
            "1928",
            "1929",
            "1934",
            "1942",
            "1943",
            "1944",
            "1945",
            "1958",
            "1960",
            "1962",
            "1963",
            "1964",
            "1967",
            "1968",
            "1978",
            "1985",
            "1986",
            "1987",
            "1998",
            "2003",
            "2007",
            "2012",
            "2013",
            "2027",
            "2035",
            "2038",
            "2039",
            "2044",
            "2047",
            "2052",
            "2056",
            "2059",
            "2062",
            "2064",
            "2068",
            "2070",
            "2072",
            "2078",
            "2079",
            "2084",
            "2088",
            "2090",
            "2095",
            "2100",
            "2103",
            "2107",
            "2109",
            "2113",
            "2115",
            "2121",
            "2127",
            "2130",
            "2133",
            "2137",
            "2140",
            "2141",
            "2145",
            "2147",
            "2150",
            "2156",
            "2166",
            "2170",
            "2171",
            "2176",
            "2177",
            "2179",
            "2183",
            "2186",
            "2192",
            "2198",
            "2202",
            "2205",
            "2214",
            "2216",
            "2219",
            "2220",
            "2222",
            "2223",
            "2224",
            "2225",
            "2227",
            "2228",
            "2234",
            "2238",
            "2247",
            "2251",
            "2253",
            "2262",
            "2264",
            "2271",
            "2276",
            "2278",
            "2279",
            "2282",
            "2290",
            "2292",
            "2295",
            "2299",
            "2305",
            "2306",
            "2310",
            "2311",
            "2312",
            "2315",
            "2320",
            "2325",
            "2328",
            "2331",
            "2334",
            "2335",
            "2336",
            "2337",
            "2343",
            "2346",
            "2354",
            "2357",
            "2358",
            "2359",
            "2366",
            "2370",
            "2373",
            "2376",
            "2377",
            "2380",
            "2382",
            "2387",
            "2389",
            "2392",
            "2394",
            "2400",
            "2403",
            "2405",
            "2406",
            "2407",
            "2410",
            "2411",
            "2413",
            "2414",
            "2415",
            "2416",
            "2418",
            "2422",
            "2425",
            "2427",
            "2435",
            "2437",
            "2440",
            "2441",
            "2447",
            "2453",
            "2459",
            "2461",
            "2462",
            "2464",
            "2467",
            "2468",
            "2472",
            "2477",
            "2481",
            "2484",
            "2486",
            "2492",
            "2493",
            "2496",
            "2497",
            "2498",
            "2499",
            "2504",
            "2506",
            "2510",
            "2511",
            "2512",
            "2517",
            "2526",
            "2527",
            "2531",
            "2532",
            "2534",
            "2542",
            "2544",
            "2552",
            "2555",
            "2559",
            "2563",
            "2564",
            "2567",
            "2568",
            "2569",
            "2571",
            "2572",
            "2573",
            "2575",
            "2577",
            "2579",
            "2583",
            "2584",
            "2586",
            "2589",
            "2595",
            "2596",
            "2597",
            "2601",
            "2604",
            "2605",
            "2609",
            "2610",
            "2612",
            "2614",
            "2621",
            "2622",
            "2624",
            "2628",
            "2629",
            "2632",
            "2634",
            "2636",
            "2639",
            "2643",
            "2645",
            "2646",
            "2647",
            "2649",
            "2650",
            "2651",
            "2652",
            "2656",
            "2657",
            "2658",
            "2660",
            "2661",
            "2662",
            "2663",
            "2664",
            "2669",
            "2670",
            "2673",
            "2676",
            "2677",
            "2678",
            "2681",
            "2682",
            "2684",
            "2685",
            "2686",
            "2689",
            "2690",
            "2691",
            "2695",
            "2698",
            "2699",
            "2702",
            "2704",
            "2705",
            "2706",
            "2707",
            "2709",
            "2710",
            "2713",
            "2714",
            "2727",
            "2729",
            "2739",
            "2758",
            "2765",
            "2766",
            "2767",
            "2768",
            "2770",
            "2771",
            "2772",
            "2776",
            "2777",
            "2778",
            "2779",
            "2780",
            "2783",
            "2784",
            "2786",
            "2787",
            "2791",
            "2792",
            "2793",
            "2797",
            "2798",
            "2801",
            "2802",
            "2803",
            "2805",
            "2808",
            "2809",
            "2810",
            "2811",
            "2812",
            "2813",
            "2814",
            "2817",
            "2818",
            "2824",
            "2826",
            "2827",
            "2829",
            "2830",
            "2831",
            "2832",
            "2834",
            "2836",
            "2838",
            "2840",
            "2842",
            "2843",
            "2844",
            "2850",
            "2851",
            "2852",
            "2854",
            "2858",
            "2860",
            "2862",
            "2864",
            "2865",
            "2866",
            "2867",
            "2868",
            "2869",
            "2871",
          ],
        },
        m = {
          code: c,
          gvlid: 165,
          aliases: ["spotx"],
          supportedMediaTypes: [o.d],
          isBidRequestValid: function (e) {
            if (e && "object" !== s(e.params))
              return (
                Object(a.logError)(
                  "spotx: params is not defined or is incorrect in the bidder settings."
                ),
                !1
              );
            if (!Object(a.deepAccess)(e, "mediaTypes.video"))
              return (
                Object(a.logError)(
                  "spotx: mediaTypes.video is not present in the bidder settings."
                ),
                !1
              );
            var t = Object(a.deepAccess)(e, "mediaTypes.video.playerSize");
            if (!t || !Object(a.isArray)(t))
              return (
                Object(a.logError)(
                  "spotx: mediaTypes.video.playerSize is not defined in the bidder settings."
                ),
                !1
              );
            if (!Object(a.getBidIdParameter)("channel_id", e.params))
              return (
                Object(a.logError)(
                  "spotx: channel_id is not present in bidder params"
                ),
                !1
              );
            if (
              ("outstream" ==
                Object(a.deepAccess)(e, "mediaTypes.video.context") ||
                "outstream" == Object(a.deepAccess)(e, "params.ad_unit")) &&
              !Object(a.getBidIdParameter)("outstream_function", e.params)
            ) {
              if (!Object(a.getBidIdParameter)("outstream_options", e.params))
                return (
                  Object(a.logError)(
                    "spotx: please define outstream_options parameter or override the default SpotX outstream rendering by defining your own Outstream function using field outstream_function."
                  ),
                  !1
                );
              if (
                !Object(a.getBidIdParameter)("slot", e.params.outstream_options)
              )
                return (
                  Object(a.logError)(
                    "spotx: please define parameter slot in outstream_options object in the configuration."
                  ),
                  !1
                );
            }
            return !0;
          },
          buildRequests: function (e, t) {
            var r = t.refererInfo.referer,
              i = !!r.match(/^https:/);
            return e.map(function (e) {
              var n;
              n = Object(a.getBidIdParameter)("page", e.params)
                ? Object(a.getBidIdParameter)("page", e.params)
                : d.b.getConfig("pageUrl")
                ? d.b.getConfig("pageUrl")
                : r;
              var o = Object(a.getBidIdParameter)("channel_id", e.params),
                s = null,
                c = Object(a.deepAccess)(e, "mediaTypes.video.playerSize"),
                m = c[0][0],
                u = c[0][1],
                g =
                  i ||
                  (Object(a.getBidIdParameter)("secure", e.params) ? 1 : 0),
                b = { sdk_name: "Prebid 1+", versionOrtb: "2.3" };
              if (
                ("" != Object(a.getBidIdParameter)("hide_skin", e.params) &&
                  (b.hide_skin = +!!Object(a.getBidIdParameter)(
                    "hide_skin",
                    e.params
                  )),
                "" != Object(a.getBidIdParameter)("ad_volume", e.params) &&
                  (b.ad_volume = Object(a.getBidIdParameter)(
                    "ad_volume",
                    e.params
                  )),
                "" != Object(a.getBidIdParameter)("ad_unit", e.params) &&
                  (b.ad_unit = Object(a.getBidIdParameter)(
                    "ad_unit",
                    e.params
                  )),
                "" !=
                  Object(a.getBidIdParameter)("outstream_options", e.params) &&
                  (b.outstream_options = Object(a.getBidIdParameter)(
                    "outstream_options",
                    e.params
                  )),
                "" !=
                  Object(a.getBidIdParameter)("outstream_function", e.params) &&
                  (b.outstream_function = Object(a.getBidIdParameter)(
                    "outstream_function",
                    e.params
                  )),
                "" != Object(a.getBidIdParameter)("custom", e.params) &&
                  (b.custom = Object(a.getBidIdParameter)("custom", e.params)),
                "" !=
                  Object(a.getBidIdParameter)("pre_market_bids", e.params) &&
                  Object(a.isArray)(
                    Object(a.getBidIdParameter)("pre_market_bids", e.params)
                  ))
              ) {
                var _ = Object(a.getBidIdParameter)(
                  "pre_market_bids",
                  e.params
                );
                for (var l in ((b.pre_market_bids = []), _)) {
                  var v = _[l],
                    O = "";
                  v.vast_url
                    ? (O =
                        '<?xml version="1.0" encoding="utf-8"?><VAST version="2.0"><Ad><Wrapper><VASTAdTagURI>' +
                        v.vast_url +
                        "</VASTAdTagURI></Wrapper></Ad></VAST>")
                    : v.vast_string && (O = v.vast_string),
                    b.pre_market_bids.push({
                      id: v.deal_id,
                      seatbid: [
                        {
                          bid: [
                            {
                              impid: Date.now(),
                              dealid: v.deal_id,
                              price: v.price,
                              adm: O,
                            },
                          ],
                        },
                      ],
                      cur: v.currency,
                      ext: { event_log: [{}] },
                    });
                }
              }
              var f = Object(a.getBidIdParameter)("mimes", e.params) || [
                  "application/javascript",
                  "video/mp4",
                  "video/webm",
                ],
                j = {
                  id: e.bidId,
                  secure: g,
                  video: { w: m, h: u, ext: b, mimes: f },
                };
              "" != Object(a.getBidIdParameter)("start_delay", e.params) &&
                (j.video.startdelay =
                  0 +
                  Boolean(
                    Object(a.getBidIdParameter)("start_delay", e.params)
                  )),
                "" != Object(a.getBidIdParameter)("min_duration", e.params) &&
                  (j.video.minduration = Object(a.getBidIdParameter)(
                    "min_duration",
                    e.params
                  )),
                "" != Object(a.getBidIdParameter)("max_duration", e.params) &&
                  (j.video.maxduration = Object(a.getBidIdParameter)(
                    "max_duration",
                    e.params
                  )),
                "" != Object(a.getBidIdParameter)("placement_type", e.params) &&
                  (j.video.ext.placement = Object(a.getBidIdParameter)(
                    "placement_type",
                    e.params
                  )),
                "" != Object(a.getBidIdParameter)("position", e.params) &&
                  (j.video.ext.pos = Object(a.getBidIdParameter)(
                    "position",
                    e.params
                  )),
                e.crumbs && e.crumbs.pubcid && (s = e.crumbs.pubcid);
              var h = navigator.language ? "language" : "userLanguage",
                y = {
                  id: o,
                  imp: j,
                  site: { id: "", page: n, content: "content" },
                  device: {
                    h: screen.height,
                    w: screen.width,
                    dnt: Object(a.getDNT)() ? 1 : 0,
                    language: navigator[h].split("-")[0],
                    make: navigator.vendor ? navigator.vendor : "",
                    ua: navigator.userAgent,
                  },
                  ext: { wrap_response: 1 },
                };
              d.b.getConfig("cache") &&
                d.b.getConfig("cache.url") &&
                !0 === d.b.getConfig("cache.ignoreBidderCacheKey") &&
                (y.ext.wrap_response = 0),
                Object(a.getBidIdParameter)("number_of_ads", e.params) &&
                  (y.ext.number_of_ads = Object(a.getBidIdParameter)(
                    "number_of_ads",
                    e.params
                  ));
              var I = {};
              1 ==
                Object(a.getBidIdParameter)(
                  "spotx_all_google_consent",
                  e.params
                ) && (I.consented_providers_settings = p),
                t &&
                  t.gdprConsent &&
                  ((I.consent = t.gdprConsent.consentString),
                  void 0 !== t.gdprConsent.gdprApplies &&
                    Object(a.deepSetValue)(
                      y,
                      "regs.ext.gdpr",
                      t.gdprConsent.gdprApplies ? 1 : 0
                    )),
                t &&
                  t.uspConsent &&
                  Object(a.deepSetValue)(
                    y,
                    "regs.ext.us_privacy",
                    t.uspConsent
                  ),
                Object(a.deepAccess)(e, "userId.id5id.uid") &&
                  ((I.eids = I.eids || []),
                  I.eids.push({
                    source: "id5-sync.com",
                    uids: [
                      { id: e.userId.id5id.uid, ext: e.userId.id5id.ext || {} },
                    ],
                  })),
                s && (I.fpc = s),
                e && e.schain && (y.source = { ext: { schain: e.schain } }),
                e &&
                  e.userId &&
                  e.userId.tdid &&
                  ((I.eids = I.eids || []),
                  I.eids.push({
                    source: "adserver.org",
                    uids: [{ id: e.userId.tdid, ext: { rtiPartner: "TDID" } }],
                  })),
                Object(a.isEmpty)(I) || (y.user = { ext: I });
              return {
                method: "POST",
                url:
                  "https://search.spotxchange.com/openrtb/2.3/dados/" +
                  o +
                  "?src_sys=prebid",
                data: y,
                bidRequest: t,
              };
            });
          },
          interpretResponse: function (e, t) {
            var r = [],
              n = e.body;
            return (
              n &&
                Object(a.isArray)(n.seatbid) &&
                Object(a._each)(n.seatbid, function (e) {
                  Object(a._each)(e.bid, function (e) {
                    var s = {};
                    for (var c in t.bidRequest.bids)
                      e.impid == t.bidRequest.bids[c].bidId &&
                        (s = t.bidRequest.bids[c]);
                    Object(a._each)(s.params.pre_market_bids, function (t) {
                      t.deal_id == e.id &&
                        ((e.price = t.price), (n.cur = t.currency));
                    });
                    var p = {
                      requestId: s.bidId,
                      currency: n.cur || "USD",
                      cpm: e.price,
                      creativeId: e.crid || "",
                      dealId: e.dealid || "",
                      ttl: 360,
                      netRevenue: !0,
                      channel_id: n.id,
                      mediaType: o.d,
                      width: e.w,
                      height: e.h,
                    };
                    d.b.getConfig("cache") &&
                    d.b.getConfig("cache.url") &&
                    !0 === d.b.getConfig("cache.ignoreBidderCacheKey")
                      ? (p.vastXml = e.adm)
                      : ((p.cache_key = e.ext.cache_key),
                        (p.vastUrl =
                          "https://search.spotxchange.com/ad/vast.html?key=" +
                          e.ext.cache_key),
                        (p.videoCacheKey = e.ext.cache_key)),
                      (p.meta = p.meta || {}),
                      e &&
                        e.adomain &&
                        e.adomain.length > 0 &&
                        (p.meta.advertiserDomains = e.adomain);
                    var m = Object(a.deepAccess)(s, "mediaTypes.video.context"),
                      g = Object(a.deepAccess)(s, "params.ad_unit");
                    if ("outstream" == m || "outstream" == g) {
                      var b = Object(a.deepAccess)(
                          s,
                          "mediaTypes.video.playerSize"
                        ),
                        _ = i.a.install({
                          id: 0,
                          url: "/",
                          config: {
                            adText: "SpotX Outstream Video Ad via Prebid.js",
                            player_width: b[0][0],
                            player_height: b[0][1],
                            content_page_url: Object(a.deepAccess)(
                              t,
                              "data.site.page"
                            ),
                            ad_mute: +!!Object(a.deepAccess)(
                              s,
                              "params.ad_mute"
                            ),
                            hide_skin: +!!Object(a.deepAccess)(
                              s,
                              "params.hide_skin"
                            ),
                            outstream_options: Object(a.deepAccess)(
                              s,
                              "params.outstream_options"
                            ),
                            outstream_function: Object(a.deepAccess)(
                              s,
                              "params.outstream_function"
                            ),
                          },
                        });
                      try {
                        _.setRender(u),
                          _.setEventHandlers({
                            impression: function () {
                              return Object(a.logMessage)(
                                "SpotX outstream video impression event"
                              );
                            },
                            loaded: function () {
                              return Object(a.logMessage)(
                                "SpotX outstream video loaded event"
                              );
                            },
                            ended: function () {
                              Object(a.logMessage)(
                                "SpotX outstream renderer video event"
                              );
                            },
                          });
                      } catch (e) {
                        Object(a.logWarn)(
                          "Prebid Error calling setRender or setEventHandlers on renderer",
                          e
                        );
                      }
                      p.renderer = _;
                    }
                    r.push(p);
                  });
                }),
              r
            );
          },
        };
      function u(e) {
        var t = (function (e) {
          var t = Object(a.getBidIdParameter)(
            "slot",
            e.renderer.config.outstream_options
          );
          Object(a.logMessage)(
            "[SPOTX][renderer] Handle SpotX outstream renderer"
          );
          var r = window.document.createElement("script");
          (r.type = "text/javascript"),
            (r.src = "https://js.spotx.tv/easi/v1/" + e.channel_id + ".js");
          var d = {};
          (d["data-spotx_channel_id"] = "" + e.channel_id),
            (d["data-spotx_vast_url"] = "" + e.vastUrl),
            (d["data-spotx_content_page_url"] =
              e.renderer.config.content_page_url),
            (d["data-spotx_ad_unit"] = "incontent"),
            Object(a.logMessage)("[SPOTX][renderer] Default behavior"),
            Object(a.getBidIdParameter)(
              "ad_mute",
              e.renderer.config.outstream_options
            ) && (d["data-spotx_ad_mute"] = "1"),
            (d["data-spotx_collapse"] = "0"),
            (d["data-spotx_autoplay"] = "1"),
            (d["data-spotx_blocked_autoplay_override_mode"] = "1"),
            (d["data-spotx_video_slot_can_autoplay"] = "1");
          var i = Object(a.getBidIdParameter)(
            "playersize_auto_adapt",
            e.renderer.config.outstream_options
          );
          if (i && Object(a.isBoolean)(i) && !0 === i) {
            var n =
                e.width &&
                Object(a.isNumber)(e.width) &&
                e.height &&
                Object(a.isNumber)(e.height)
                  ? e.width / e.height
                  : 4 / 3,
              o = window.document.getElementById(t).clientWidth,
              s = e.renderer.config.player_width,
              c = e.renderer.config.player_height,
              p = 0,
              m = 0;
            o < s && (c = (s = o) / n),
              n <= 1
                ? ((p = Math.round(c * n)), (m = c))
                : ((p = s), (m = Math.round(s / n))),
              (d["data-spotx_content_width"] = "" + p),
              (d["data-spotx_content_height"] = "" + m);
          }
          var u = Object(a.getBidIdParameter)(
            "custom_override",
            e.renderer.config.outstream_options
          );
          if (u && Object(a.isPlainObject)(u))
            for (var g in (Object(a.logMessage)(
              "[SPOTX][renderer] Custom behavior."
            ),
            u))
              u.hasOwnProperty(g) &&
                ("channel_id" === g ||
                "vast_url" === g ||
                "content_page_url" === g ||
                "ad_unit" === g
                  ? Object(a.logWarn)(
                      "[SPOTX][renderer] Custom behavior: following option cannot be overridden: " +
                        g
                    )
                  : (d["data-spotx_" + g] = u[g]));
          for (var b in d) d.hasOwnProperty(b) && r.setAttribute(b, d[b]);
          return r;
        })(e);
        if (
          null != e.renderer.config.outstream_function &&
          "function" == typeof e.renderer.config.outstream_function
        )
          e.renderer.config.outstream_function(e, t);
        else
          try {
            var r = Object(a.getBidIdParameter)(
              "in_iframe",
              e.renderer.config.outstream_options
            );
            if (r && "IFRAME" == window.document.getElementById(r).nodeName) {
              var d = window.document.getElementById(r),
                i = d.contentDocument;
              !i && d.contentWindow && (i = d.contentWindow.document),
                i.body.appendChild(t);
            } else {
              var n = Object(a.getBidIdParameter)(
                "slot",
                e.renderer.config.outstream_options
              );
              n && window.document.getElementById(n)
                ? window.document.getElementById(n).appendChild(t)
                : window.document
                    .getElementsByTagName("head")[0]
                    .appendChild(t);
            }
          } catch (e) {
            Object(a.logError)("[SPOTX][renderer] Error:" + e.message);
          }
      }
      Object(n.registerBidder)(m);
    },
  },
  [801]
);
pbjsChunk(
  [110],
  {
    817: function (e, t, r) {
      e.exports = r(818);
    },
    818: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "storage", function () {
          return y;
        }),
        r.d(t, "spec", function () {
          return v;
        });
      var n = r(0),
        i = r(1),
        a = r(7);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var d = "teads",
        p = 12,
        u = 11,
        f = 0,
        b = 22,
        g = "_tfpvi",
        y = Object(a.b)(132, d),
        v = {
          code: d,
          gvlid: 132,
          supportedMediaTypes: ["video", "banner"],
          isBidRequestValid: function (e) {
            var t = !1;
            if (void 0 !== e.params) {
              var r = I(Object(n.getValue)(e.params, "placementId")),
                i = I(Object(n.getValue)(e.params, "pageId"));
              t = r && i;
            }
            return (
              t ||
                Object(n.logError)(
                  "Teads placementId and pageId parameters are required. Bid aborted."
                ),
              t
            );
          },
          buildRequests: function (e, t) {
            var r,
              i,
              a = e.map(O),
              o = s(
                s(
                  s(
                    {
                      referrer: l(t),
                      pageReferrer: document.referrer,
                      networkBandwidth:
                        ((i = window.navigator),
                        i && i.connection && i.connection.downlink >= 0
                          ? i.connection.downlink.toString()
                          : ""),
                      timeToFirstByte: m(window),
                      data: a,
                      deviceWidth: screen.width,
                      hb_version: "5.16.0",
                    },
                    (function (e) {
                      if (!e) return {};
                      var t = e.id ? { cohortId: e.id } : {},
                        r = e.version ? { cohortVersion: e.version } : {};
                      return s(s({}, t), r);
                    })(Object(n.deepAccess)(e, "0.userId.flocId"))
                  ),
                  (r = Object(n.deepAccess)(e, "0.userId.uid2"))
                    ? { unifiedId2: r.id }
                    : {}
                ),
                (function () {
                  if (!y.cookiesAreEnabled()) return {};
                  var e = y.getCookie(g);
                  return e ? { firstPartyCookieTeadsId: e } : {};
                })()
              );
            e[0].schain && (o.schain = e[0].schain);
            var c = t.gdprConsent;
            if (t && c) {
              var d = "boolean" == typeof c.gdprApplies,
                v = "string" == typeof c.consentString,
                I = d
                  ? (function (e, t, r) {
                      var n = p;
                      e
                        ? (function (e, t) {
                            return e && 1 === t
                              ? e.hasGlobalScope || e.hasGlobalConsent
                              : !(!e || 2 !== t) && !e.isServiceSpecific;
                          })(t, r) && (n = u)
                        : (n = f);
                      return n;
                    })(c.gdprApplies, c.vendorData, c.apiVersion)
                  : b;
              o.gdpr_iab = {
                consent: v ? c.consentString : "",
                status: I,
                apiVersion: c.apiVersion,
              };
            }
            return (
              t && t.uspConsent && (o.us_privacy = t.uspConsent),
              {
                method: "POST",
                url: "https://a.teads.tv/hb/bid-request",
                data: JSON.stringify(o),
              }
            );
          },
          interpretResponse: function (e, t) {
            var r = [];
            return (
              (e = e.body).responses &&
                e.responses.forEach(function (e) {
                  var t = {
                    cpm: e.cpm,
                    width: e.width,
                    height: e.height,
                    currency: e.currency,
                    netRevenue: !0,
                    ttl: e.ttl,
                    meta: {
                      advertiserDomains: e && e.adomain ? e.adomain : [],
                    },
                    ad: e.ad,
                    requestId: e.bidId,
                    creativeId: e.creativeId,
                    placementId: e.placementId,
                  };
                  e.dealId && (t.dealId = e.dealId), r.push(t);
                }),
              r
            );
          },
        };
      function l(e) {
        var t = "";
        return (
          e &&
            e.refererInfo &&
            e.refererInfo.referer &&
            (t = e.refererInfo.referer),
          t
        );
      }
      function m(e) {
        var t =
            e.performance ||
            e.webkitPerformance ||
            e.msPerformance ||
            e.mozPerformance,
          r =
            t &&
            "function" == typeof t.getEntriesByType &&
            "[object Function]" ===
              Object.prototype.toString.call(t.getEntriesByType) &&
            t.getEntriesByType("navigation")[0] &&
            t.getEntriesByType("navigation")[0].responseStart &&
            t.getEntriesByType("navigation")[0].requestStart &&
            t.getEntriesByType("navigation")[0].responseStart > 0 &&
            t.getEntriesByType("navigation")[0].requestStart > 0 &&
            Math.round(
              t.getEntriesByType("navigation")[0].responseStart -
                t.getEntriesByType("navigation")[0].requestStart
            );
        if (r) return r.toString();
        var n =
          t &&
          t.timing.responseStart &&
          t.timing.requestStart &&
          t.timing.responseStart > 0 &&
          t.timing.requestStart > 0 &&
          t.timing.responseStart - t.timing.requestStart;
        return n ? n.toString() : "";
      }
      function O(e) {
        var t = {},
          r = Object(n.getValue)(e.params, "placementId"),
          i = Object(n.getValue)(e.params, "pageId");
        return (
          (t.sizes = (function (e) {
            return Object(n.parseSizesInput)(
              (function (e) {
                var t = Object(n.deepAccess)(e, "mediaTypes.video.playerSize"),
                  r = Object(n.deepAccess)(e, "mediaTypes.video.sizes"),
                  i = Object(n.deepAccess)(e, "mediaTypes.banner.sizes");
                return Object(n.isArray)(i) ||
                  Object(n.isArray)(t) ||
                  Object(n.isArray)(r)
                  ? [i, r, t].reduce(function (e, t) {
                      return (
                        Object(n.isArray)(t) &&
                          (Object(n.isArray)(t[0])
                            ? t.forEach(function (t) {
                                e.push(t);
                              })
                            : e.push(t)),
                        e
                      );
                    }, [])
                  : e.sizes;
              })(e)
            );
          })(e)),
          (t.bidId = Object(n.getBidIdParameter)("bidId", e)),
          (t.bidderRequestId = Object(n.getBidIdParameter)(
            "bidderRequestId",
            e
          )),
          (t.placementId = parseInt(r, 10)),
          (t.pageId = parseInt(i, 10)),
          (t.adUnitCode = Object(n.getBidIdParameter)("adUnitCode", e)),
          (t.auctionId = Object(n.getBidIdParameter)("auctionId", e)),
          (t.transactionId = Object(n.getBidIdParameter)("transactionId", e)),
          t
        );
      }
      function I(e) {
        return parseInt(e) > 0;
      }
      Object(i.registerBidder)(v);
    },
  },
  [817]
);
pbjsChunk(
  [109],
  {
    819: function (e, t, r) {
      e.exports = r(820);
    },
    820: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "spec", function () {
          return m;
        }),
        r.d(t, "getTimeoutUrl", function () {
          return v;
        });
      var n = r(0),
        o = r(43),
        c = r(1),
        a = r(2),
        i = r(5);
      r.n(i);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var p = "telaria",
        u = "tremorhub.com",
        f = "ads.".concat(u, "/ad/tag"),
        l = "events.".concat(u, "/diag"),
        m = {
          code: p,
          aliases: ["tremor", "tremorvideo"],
          supportedMediaTypes: [a.d],
          isBidRequestValid: function (e) {
            return !!(e && e.params && e.params.adCode && e.params.supplyCode);
          },
          buildRequests: function (e, t) {
            var r = [];
            return (
              e.forEach(function (e) {
                var o = (function (e, t) {
                  var r,
                    o,
                    c = Object(n.deepAccess)(e, "mediaTypes.video.playerSize");
                  c ||
                    Object(n.logWarn)(
                      "Although player size isn't required it is highly recommended"
                    );
                  c &&
                    (!Object(n.isArray)(c) ||
                    2 !== c.length ||
                    isNaN(c[0]) ||
                    isNaN(c[1])
                      ? "object" === s(c) && ((r = c[0][0]), (o = c[0][1]))
                      : ((r = c[0]), (o = c[1])));
                  var a = Object(n.deepAccess)(e, "params.supplyCode"),
                    i = Object(n.deepAccess)(e, "params.adCode");
                  if (a && i) {
                    var p = "https://"
                      .concat(a, ".")
                      .concat(f, "?adCode=")
                      .concat(i);
                    r && (p += "&playerWidth=".concat(r)),
                      o && (p += "&playerHeight=".concat(o));
                    var u = d({ srcPageUrl: b() }, e.params);
                    return (
                      delete u.adCode,
                      (p += "".concat(h(u, e.schain))),
                      (p += "&transactionId=".concat(e.transactionId)),
                      t &&
                        (t.gdprConsent &&
                          ("boolean" == typeof t.gdprConsent.gdprApplies &&
                            (p += "&gdpr=".concat(
                              t.gdprConsent.gdprApplies ? 1 : 0
                            )),
                          t.gdprConsent.consentString &&
                            (p += "&gdpr_consent=".concat(
                              t.gdprConsent.consentString
                            ))),
                        t.refererInfo &&
                          t.refererInfo.referer &&
                          (p += "&referrer=".concat(
                            encodeURIComponent(t.refererInfo.referer)
                          ))),
                      p + "&hb=1&fmt=json"
                    );
                  }
                })(e, t);
                o &&
                  r.push({
                    method: "GET",
                    url: o,
                    bidId: e.bidId,
                    vastUrl: o.split("&fmt=json")[0],
                  });
              }),
              r
            );
          },
          interpretResponse: function (e, t) {
            var r,
              c,
              a,
              s = [];
            try {
              (r = e.body),
                t.url.split("&").forEach(function (e) {
                  var t = e.toLowerCase();
                  t.indexOf("player") > -1 &&
                    (t.indexOf("width") > -1
                      ? (c = e.split("=")[1])
                      : t.indexOf("height") > -1 && (a = e.split("=")[1]));
                });
            } catch (e) {
              Object(n.logError)(e), (c = 0), (a = 0);
            }
            if (!r || r.error) {
              var u = "in response for ".concat(t.bidderCode, " adapter");
              r && r.error && (u += ": ".concat(r.error)),
                Object(n.logError)(u);
            } else
              Object(n.isEmpty)(r.seatbid) ||
                r.seatbid[0].bid.forEach(function (e) {
                  s.push(
                    (function (e, t, r, n, c, a) {
                      var i = Object(o.a)(e, t);
                      r &&
                        d(i, {
                          requestId: t.bidId,
                          cpm: r.price,
                          creativeId: r.crid || "-1",
                          vastXml: r.adm,
                          vastUrl: t.vastUrl,
                          mediaType: "video",
                          width: n,
                          height: c,
                          bidderCode: a,
                          currency: "USD",
                          netRevenue: !0,
                          ttl: 300,
                          ad: r.adm,
                        });
                      (i.meta = i.meta || {}),
                        r &&
                          r.adomain &&
                          r.adomain.length > 0 &&
                          (i.meta.advertiserDomains = r.adomain);
                      return i;
                    })(i.STATUS.GOOD, t, e, c, a, p)
                  );
                });
            return s;
          },
          getUserSyncs: function (e, t) {
            var r = [];
            return (
              e.pixelEnabled &&
                t.length &&
                (
                  Object(n.deepAccess)(t, "0.body.ext.telaria.userSync") || []
                ).forEach(function (e) {
                  return r.push({ type: "image", url: e });
                }),
              r
            );
          },
          onTimeout: function (e) {
            var t = v(e);
            t && Object(n.triggerPixel)(t);
          },
        };
      function b() {
        return encodeURIComponent(document.location.href);
      }
      function y(e) {
        return "" !== e && void 0 !== e ? encodeURIComponent(e) : "";
      }
      function h(e, t) {
        var r = "";
        if (!Object(n.isEmpty)(e)) {
          for (var o in e)
            "schain" !== o &&
              e.hasOwnProperty(o) &&
              !Object(n.isEmpty)(e[o]) &&
              (r += "&".concat(o, "=").concat(e[o]));
          r += (function (e) {
            if (Object(n.isEmpty)(e)) return "";
            var t = "&schain=".concat(e.ver, ",").concat(e.complete);
            return (
              e.nodes.forEach(function (e) {
                (t += "!"),
                  (t += "".concat(y(e.asi), ",")),
                  (t += "".concat(y(e.sid), ",")),
                  (t += "".concat(y(e.hp), ",")),
                  (t += "".concat(y(e.rid), ",")),
                  (t += "".concat(y(e.name), ",")),
                  (t += "".concat(y(e.domain)));
              }),
              t
            );
          })(Object(n.isEmpty)(t) ? e.schain : t);
        }
        return r;
      }
      var v = function (e) {
        var t = Object(n.deepAccess)(e, "0.params.0");
        if (!Object(n.isEmpty)(t)) {
          var r = "https://".concat(l);
          return (
            (t = d({ srcPageUrl: b() }, t)),
            (r += "".concat(h(t))),
            (r += "&hb=1&evt=TO")
          );
        }
      };
      Object(c.registerBidder)(m);
    },
  },
  [819]
);
pbjsChunk(
  [94],
  {
    853: function (e, r, n) {
      e.exports = n(854);
    },
    854: function (e, r, n) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        n.d(r, "adapter", function () {
          return j;
        });
      var t = n(0),
        i = n(13),
        o = n(1),
        d = n(2),
        u = ["bids", "bidderRequestId", "auctionId", "bidderCode"];
      function a(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(n), !0).forEach(function (r) {
                c(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      function c(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var n = arguments[r];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, r) {
        if (null == e) return {};
        var n,
          t,
          i = (function (e, r) {
            if (null == e) return {};
            var n,
              t,
              i = {},
              o = Object.keys(e);
            for (t = 0; t < o.length; t++)
              (n = o[t]), r.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (t = 0; t < o.length; t++)
            (n = o[t]),
              r.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var l = function (e, r, n) {
          n.bids, n.bidderRequestId, n.auctionId, n.bidderCode;
          var i = f(n, u),
            o = n.bids.length - r.length,
            d = {};
          r.forEach(function (e) {
            var r = e.params.siteId;
            !(function (e) {
              Object.keys(e.mediaTypes).forEach(function (r) {
                var n;
                (n =
                  "function" == typeof e.getFloor
                    ? e.getFloor({ currency: "USD", mediaType: r, size: "*" })
                        .floor || 0
                    : e.params.floor || 0),
                  (e.mediaTypes[r].floor = n);
              });
            })(e),
              (function (e) {
                var r = Object(t.deepAccess)(e, "mediaTypes.banner");
                if (r) {
                  var n = {},
                    i = [];
                  r.sizes.forEach(function (e) {
                    n[e.toString()] || ((n[e.toString()] = !0), i.push(e));
                  }),
                    (r.sizes = i);
                }
              })(e),
              (d[r] = d[r] || []),
              d[r].push(e);
          });
          var a = [];
          return (
            Object.keys(d).forEach(function (r) {
              var n = {
                bidderRequest: p({}, s({ bids: d[r], invalidBidsCount: o }, i)),
              };
              a.push(p({}, s({ data: n }, e)));
            }),
            a
          );
        },
        b = function (e) {
          var r = [];
          return (
            e.forEach(function (e) {
              var n,
                i = Object(t.deepAccess)(e, "meta.mediaType");
              if (i && "banner" === i.toLowerCase())
                (e.mediaType = d.b), (n = y(e));
              else if (i && "video" === i.toLowerCase()) {
                var o = Object(t.deepAccess)(e, "meta.videoContext");
                (e.mediaType = d.d),
                  "instream" === o
                    ? (n = v(e))
                    : "outstream" === o && (n = O(e));
              }
              n && r.push(n);
            }),
            r
          );
        },
        y = function (e) {
          if (e.ad) return e;
          Object(t.logError)(new Error("UnrulyBidAdapter: Missing ad config."));
        },
        v = function (e) {
          if (e.vastUrl || e.vastXml) return e;
          Object(t.logError)(
            new Error("UnrulyBidAdapter: Missing vastUrl or vastXml config.")
          );
        },
        O = function (e) {
          var r = !!Object(t.deepAccess)(e, "ext.renderer.config"),
            n = !!Object(t.deepAccess)(e, "ext.renderer.config.siteId");
          if (r) {
            if (n) {
              var o = Object(t.deepAccess)(e, "ext.renderer");
              !(function (e, r) {
                if (!e.config)
                  throw new Error("UnrulyBidAdapter: Missing renderer config.");
                if (!e.config.siteId)
                  throw new Error("UnrulyBidAdapter: Missing renderer siteId.");
                (parent.window.unruly = parent.window.unruly || {}),
                  (parent.window.unruly.native =
                    parent.window.unruly.native || {}),
                  (parent.window.unruly.native.siteId =
                    parent.window.unruly.native.siteId || e.config.siteId),
                  (parent.window.unruly.native.adSlotId = r),
                  (parent.window.unruly.native.supplyMode = "prebid");
              })(o, e.requestId),
                (parent.window.unruly.native.prebid =
                  parent.window.unruly.native.prebid || {}),
                (parent.window.unruly.native.prebid.uq =
                  parent.window.unruly.native.prebid.uq || []);
              var d = i.a.install(p({}, o)),
                u = p({}, e, {
                  renderer: d,
                  adUnitCode: Object(t.deepAccess)(e, "ext.adUnitCode"),
                });
              return (
                d.setRender(function () {
                  var e;
                  (e = u),
                    parent.window.unruly.native.prebid.uq.push(["render", e]);
                }),
                (e.renderer = e.renderer || d),
                e
              );
            }
            Object(t.logError)(
              new Error("UnrulyBidAdapter: Missing renderer siteId.")
            );
          } else
            Object(t.logError)(
              new Error("UnrulyBidAdapter: Missing renderer config.")
            );
        },
        w = function (e) {
          if (!e.context) return !1;
          return -1 !== ["outstream", "instream"].indexOf(e.context);
        },
        g = function (e) {
          return e.sizes;
        },
        j = {
          code: "unruly",
          supportedMediaTypes: [d.d, d.b],
          isBidRequestValid: function (e) {
            return !!(
              Object(t.deepAccess)(e, "params.siteId") &&
              (function (e) {
                var r = Object(t.deepAccess)(e, "mediaTypes.video"),
                  n = Object(t.deepAccess)(e, "mediaTypes.banner"),
                  i = !(!r && !n);
                return i && r && (i = w(r)), i && n && (i = g(n)), i;
              })(e)
            );
          },
          buildRequests: function (e, r) {
            var n = "https://targeting.unrulymedia.com/unruly_prebid";
            e[0] && (n = Object(t.deepAccess)(e[0], "params.endpoint") || n);
            return l(
              {
                url: n,
                method: "POST",
                options: { contentType: "application/json" },
              },
              e,
              r
            );
          },
          interpretResponse: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.body,
              n = [],
              t = !r || !r.bids;
            return t ? n : b(r.bids);
          },
        };
      Object(o.registerBidder)(j);
    },
  },
  [853]
);
pbjsChunk(
  [90],
  {
    866: function (e, t, r) {
      e.exports = r(867);
    },
    867: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r.d(t, "SUPPORTED_ID_SYSTEMS", function () {
          return p;
        }),
        (t.createDomain = g),
        (t.extractCID = b),
        (t.extractPID = v),
        (t.extractSubDomain = f),
        (t.hashCode = I),
        (t.getNextDealId = D),
        (t.getUniqueDealId = m),
        (t.getVidazooSessionId = S),
        (t.getStorageItem = C),
        (t.setStorageItem = y),
        (t.tryParseJSON = O),
        r.d(t, "spec", function () {
          return x;
        });
      var n = r(0),
        i = r(1),
        a = r(2),
        o = r(7),
        c = "prebid",
        d = "1.0.0",
        u = 9e5,
        s = 9e5,
        p = {
          britepoolid: 1,
          criteoId: 1,
          digitrustid: 1,
          id5id: 1,
          idl_env: 1,
          lipb: 1,
          netId: 1,
          parrableId: 1,
          pubcid: 1,
          tdid: 1,
        },
        l = Object(o.b)(744);
      function g() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        return "https://".concat(e, ".cootlogix.com");
      }
      function b(e) {
        return (
          e.cId || e.CID || e.cID || e.CId || e.cid || e.ciD || e.Cid || e.CiD
        );
      }
      function v(e) {
        return (
          e.pId || e.PID || e.pID || e.PId || e.pid || e.piD || e.Pid || e.PiD
        );
      }
      function f(e) {
        return (
          e.subDomain ||
          e.SubDomain ||
          e.Subdomain ||
          e.subdomain ||
          e.SUBDOMAIN ||
          e.subDOMAIN
        );
      }
      function h(e, t, r, i) {
        var a,
          o,
          c,
          u = e.params,
          s = e.bidId,
          l = e.userId,
          h = e.adUnitCode,
          C = u.bidFloor,
          y = u.ext,
          O = I(t),
          x = D(O),
          _ = m(O),
          P = S(),
          U = b(u),
          j = v(u),
          w = f(u),
          R = {
            url: encodeURIComponent(t),
            cb: Date.now(),
            bidFloor: C,
            bidId: s,
            adUnitCode: h,
            publisherId: j,
            sessionId: P,
            sizes: r,
            dealId: x,
            uniqueDealId: _,
            bidderVersion: d,
            prebidVersion: "5.16.0",
            res: "".concat(screen.width, "x").concat(screen.height),
          };
        (a = R),
          (o = l),
          Object(n._each)(o, function (e, t) {
            if (p[t])
              switch (((c = "uid.".concat(t)), t)) {
                case "digitrustid":
                  a[c] = Object(n.deepAccess)(e, "data.id");
                  break;
                case "lipb":
                  a[c] = e.lipbid;
                  break;
                case "parrableId":
                  a[c] = e.eid;
                  break;
                case "id5id":
                  a[c] = e.uid;
                  break;
                default:
                  a[c] = e;
              }
          }),
          i.gdprConsent &&
            (i.gdprConsent.consentString &&
              (R.gdprConsent = i.gdprConsent.consentString),
            void 0 !== i.gdprConsent.gdprApplies &&
              (R.gdpr = i.gdprConsent.gdprApplies ? 1 : 0)),
          i.uspConsent && (R.usPrivacy = i.uspConsent);
        var A = {
          method: "POST",
          url: "".concat(g(w), "/prebid/multi/").concat(U),
          data: R,
        };
        return (
          Object(n._each)(y, function (e, t) {
            A.data["ext." + t] = e;
          }),
          A
        );
      }
      function I(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "_",
          r = e.length,
          n = 0,
          i = 0;
        if (r > 0) for (; i < r; ) n = ((n << 5) - n + e.charCodeAt(i++)) | 0;
        return t + n;
      }
      function D(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
        try {
          var r,
            n = C(e),
            i = 0;
          n &&
            n.value &&
            Date.now() - n.created < t &&
            ((i = n.value), (r = n.created));
          var a = i + 1;
          return y(e, a, r), a;
        } catch (e) {
          return 0;
        }
      }
      function m(e) {
        var t,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          n = "u_".concat(e),
          i = Date.now(),
          a = C(n);
        return (
          !a || !a.value || i - a.created > r
            ? y(n, (t = "".concat(e, "_").concat(i.toString())))
            : (t = a.value),
          t
        );
      }
      function S() {
        return C("vidSid") || "";
      }
      function C(e) {
        try {
          return O(l.getDataFromLocalStorage(e));
        } catch (e) {}
        return null;
      }
      function y(e, t, r) {
        try {
          var n = r || Date.now(),
            i = JSON.stringify({ value: t, created: n });
          l.setDataInLocalStorage(e, i);
        } catch (e) {}
      }
      function O(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return e;
        }
      }
      var x = {
        code: "vidazoo",
        version: d,
        gvlid: 744,
        supportedMediaTypes: [a.b],
        isBidRequestValid: function (e) {
          var t = e.params || {};
          return !(!b(t) || !v(t));
        },
        buildRequests: function (e, t) {
          var r = t.refererInfo.referer,
            i = [];
          return (
            e.forEach(function (e) {
              var a = Object(n.parseSizesInput)(e.sizes),
                o = h(e, r, a, t);
              i.push(o);
            }),
            i
          );
        },
        interpretResponse: function (e, t) {
          if (!e || !e.body) return [];
          var r = t.data.bidId,
            n = e.body.results,
            i = [];
          try {
            return (
              n.forEach(function (e) {
                var t = e.creativeId,
                  n = e.ad,
                  a = e.price,
                  o = e.exp,
                  c = e.width,
                  d = e.height,
                  u = e.currency,
                  s = e.advertiserDomains;
                n &&
                  a &&
                  i.push({
                    requestId: r,
                    cpm: a,
                    width: c,
                    height: d,
                    creativeId: t,
                    currency: u || "USD",
                    netRevenue: !0,
                    ttl: o || 300,
                    ad: n,
                    meta: { advertiserDomains: s || [] },
                  });
              }),
              i
            );
          } catch (e) {
            return [];
          }
        },
        getUserSyncs: function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            i = [],
            a = e.iframeEnabled,
            o = e.pixelEnabled,
            c = r.gdprApplies,
            d = r.consentString,
            u = void 0 === d ? "" : d,
            s = "?gdpr="
              .concat(c ? 1 : 0, "&gdpr_consent=")
              .concat(encodeURIComponent(u || ""), "&us_privacy=")
              .concat(encodeURIComponent(n || ""));
          return (
            a &&
              i.push({
                type: "iframe",
                url: "https://prebid.cootlogix.com/api/sync/iframe/".concat(s),
              }),
            o &&
              i.push({
                type: "image",
                url: "https://prebid.cootlogix.com/api/sync/image/".concat(s),
              }),
            i
          );
        },
      };
      Object(i.registerBidder)(x);
    },
  },
  [866]
);
pbjs.processQueue();
