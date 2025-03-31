import { watch as He, ref as c, provide as A, inject as O, onUnmounted as pe, h as U, onBeforeUnmount as R, defineComponent as S, onMounted as _, markRaw as j, nextTick as g, render as mt, reactive as vt, computed as oe } from "vue";
const ce = (t, o) => {
  for (const e of Object.keys(o))
    t.on(e, o[e]);
}, ye = (t) => {
  for (const o of Object.keys(t)) {
    const e = t[o];
    e && k(e.cancel) && e.cancel();
  }
}, Je = (t) => !t || typeof t.charAt != "function" ? t : t.charAt(0).toUpperCase() + t.slice(1), k = (t) => typeof t == "function", L = (t, o, e) => {
  for (const n in e) {
    const s = "set" + Je(n);
    t[s] ? He(
      () => e[n],
      (r, l) => {
        t[s](r, l);
      }
    ) : o[s] && He(
      () => e[n],
      (r) => {
        o[s](r);
      }
    );
  }
}, f = (t, o, e = {}) => {
  const n = { ...e };
  for (const s in t) {
    const r = o[s], l = t[s];
    r && (r && r.custom === !0 || l !== void 0 && (n[s] = l));
  }
  return n;
}, T = (t) => {
  const o = {}, e = {};
  for (const n in t)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const s = n.slice(2).toLocaleLowerCase();
      o[s] = t[n];
    } else
      e[n] = t[n];
  return { listeners: o, attrs: e };
}, qe = async (t) => {
  const o = await Promise.all([
    import("leaflet/dist/images/marker-icon-2x.png"),
    import("leaflet/dist/images/marker-icon.png"),
    import("leaflet/dist/images/marker-shadow.png")
  ]);
  delete t.Default.prototype._getIconUrl, t.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, Y = (t) => {
  const o = c(
    (...n) => console.warn(`Method ${t} has been invoked without being replaced`)
  ), e = (...n) => o.value(...n);
  return e.wrapped = o, A(t, e), e;
}, V = (t, o) => t.wrapped.value = o, b = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, m = (t) => {
  const o = O(t);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${t.description} before it was provided.`
    );
  return o;
}, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WINDOW_OR_GLOBAL: b,
  assertInject: m,
  bindEventHandlers: ce,
  cancelDebounces: ye,
  capitalizeFirstLetter: Je,
  isFunction: k,
  propsBinder: L,
  propsToLeafletOptions: f,
  provideLeafletWrapper: Y,
  remapEvents: T,
  resetWebpackIcon: qe,
  updateLeafletWrapper: V
}, Symbol.toStringTag, { value: "Module" })), h = Symbol(
  "useGlobalLeaflet"
), M = Symbol("addLayer"), ee = Symbol("removeLayer"), H = Symbol(
  "registerControl"
), me = Symbol(
  "registerLayerControl"
), ve = Symbol(
  "canSetParentHtml"
), be = Symbol("setParentHtml"), fe = Symbol("setIcon"), ge = Symbol("bindPopup"), Le = Symbol("bindTooltip"), he = Symbol("unbindPopup"), Oe = Symbol("unbindTooltip"), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLayerInjection: M,
  BindPopupInjection: ge,
  BindTooltipInjection: Le,
  CanSetParentHtmlInjection: ve,
  RegisterControlInjection: H,
  RegisterLayerControlInjection: me,
  RemoveLayerInjection: ee,
  SetIconInjection: fe,
  SetParentHtmlInjection: be,
  UnbindPopupInjection: he,
  UnbindTooltipInjection: Oe,
  UseGlobalLeafletInjection: h
}, Symbol.toStringTag, { value: "Module" })), W = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, J = (t) => ({ options: t.options, methods: {} }), bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  componentProps: W,
  setupComponent: J
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...W,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: !0
  },
  layerType: {
    type: String,
    custom: !0
  },
  visible: {
    type: Boolean,
    custom: !0,
    default: !0
  }
}, q = (t, o, e) => {
  const n = m(M), s = m(ee), { options: r, methods: l } = J(t), a = f(
    t,
    D,
    r
  ), i = () => n({ leafletObject: o.value }), u = () => s({ leafletObject: o.value }), d = {
    ...l,
    setAttribution(y) {
      u(), o.value.options.attribution = y, t.visible && i();
    },
    setName() {
      u(), t.visible && i();
    },
    setLayerType() {
      u(), t.visible && i();
    },
    setVisible(y) {
      o.value && (y ? i() : u());
    },
    bindPopup(y) {
      if (!o.value || !k(o.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      o.value.bindPopup(y);
    },
    bindTooltip(y) {
      if (!o.value || !k(o.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      o.value.bindTooltip(y);
    },
    unbindTooltip() {
      o.value && (k(o.value.closeTooltip) && o.value.closeTooltip(), k(o.value.unbindTooltip) && o.value.unbindTooltip());
    },
    unbindPopup() {
      o.value && (k(o.value.closePopup) && o.value.closePopup(), k(o.value.unbindPopup) && o.value.unbindPopup());
    },
    updateVisibleProp(y) {
      e.emit("update:visible", y);
    }
  };
  return A(ge, d.bindPopup), A(Le, d.bindTooltip), A(he, d.unbindPopup), A(Oe, d.unbindTooltip), pe(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: a, methods: d };
}, G = (t, o) => {
  if (t && o.default)
    return U("div", { style: { display: "none" } }, o.default());
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerProps: D,
  render: G,
  setupLayer: q
}, Symbol.toStringTag, { value: "Module" })), Se = {
  ...D,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Ke = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  );
  return { options: f(
    t,
    Se,
    n
  ), methods: s };
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interactiveLayerProps: Se,
  setupInteractiveLayer: Ke
}, Symbol.toStringTag, { value: "Module" })), ne = {
  ...Se,
  stroke: {
    type: Boolean,
    default: void 0
  },
  color: {
    type: String
  },
  weight: {
    type: Number
  },
  opacity: {
    type: Number
  },
  lineCap: {
    type: String
  },
  lineJoin: {
    type: String
  },
  dashArray: {
    type: String
  },
  dashOffset: {
    type: String
  },
  fill: {
    type: Boolean,
    default: void 0
  },
  fillColor: {
    type: String
  },
  fillOpacity: {
    type: Number
  },
  fillRule: {
    type: String
  },
  className: {
    type: String
  }
}, _e = (t, o, e) => {
  const { options: n, methods: s } = Ke(t, o, e), r = f(
    t,
    ne,
    n
  ), l = m(ee), a = {
    ...s,
    setStroke(i) {
      o.value.setStyle({ stroke: i });
    },
    setColor(i) {
      o.value.setStyle({ color: i });
    },
    setWeight(i) {
      o.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      o.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      o.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      o.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      o.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      o.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      o.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      o.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      o.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      o.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      o.value.setStyle({ className: i });
    }
  };
  return R(() => {
    l({ leafletObject: o.value });
  }), { options: r, methods: a };
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pathProps: ne,
  setupPath: _e
}, Symbol.toStringTag, { value: "Module" })), re = {
  ...ne,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: !0,
    custom: !0
  }
}, je = (t, o, e) => {
  const { options: n, methods: s } = _e(
    t,
    o,
    e
  ), r = f(
    t,
    re,
    n
  ), l = {
    ...s,
    setRadius(a) {
      o.value.setRadius(a);
    },
    setLatLng(a) {
      o.value.setLatLng(a);
    }
  };
  return { options: r, methods: l };
}, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleMarkerProps: re,
  setupCircleMarker: je
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...re,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Qe = (t, o, e) => {
  const { options: n, methods: s } = je(t, o, e), r = f(
    t,
    Pe,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
}, Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleProps: Pe,
  setupCircle: Qe
}, Symbol.toStringTag, { value: "Module" })), Xt = S({
  name: "LCircle",
  props: Pe,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { options: l, methods: a } = Qe(t, e, o);
    return _(async () => {
      const { circle: i } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.latLng, l));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), Yt = S({
  name: "LCircleMarker",
  props: re,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { options: l, methods: a } = je(
      t,
      e,
      o
    );
    return _(async () => {
      const { circleMarker: i } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.latLng, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), F = {
  ...W,
  position: {
    type: String
  }
}, K = (t, o) => {
  const { options: e, methods: n } = J(t), s = f(
    t,
    F,
    e
  ), r = {
    ...n,
    setPosition(l) {
      o.value && o.value.setPosition(l);
    }
  };
  return pe(() => {
    o.value && o.value.remove();
  }), { options: s, methods: r };
}, Xe = (t) => t.default ? U("div", { ref: "root" }, t.default()) : null, St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlProps: F,
  renderLControl: Xe,
  setupControl: K
}, Symbol.toStringTag, { value: "Module" })), Vt = S({
  name: "LControl",
  props: {
    ...F,
    disableClickPropagation: {
      type: Boolean,
      custom: !0,
      default: !0
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: !0,
      default: !1
    }
  },
  setup(t, o) {
    const e = c(), n = c(), s = O(h), r = m(H), { options: l, methods: a } = K(t, e);
    return _(async () => {
      const { Control: i, DomEvent: u } = s ? b.L : await import("leaflet/dist/leaflet-src.esm"), d = i.extend({
        onAdd() {
          return n.value;
        }
      });
      e.value = j(new d(l)), L(a, e.value, t), r({ leafletObject: e.value }), t.disableClickPropagation && n.value && u.disableClickPropagation(n.value), t.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), g(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return Xe(this.$slots);
  }
}), Ce = {
  ...F,
  prefix: {
    type: String
  }
}, Ye = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  ), s = f(
    t,
    Ce,
    e
  ), r = {
    ...n,
    setPrefix(l) {
      o.value.setPrefix(l);
    }
  };
  return { options: s, methods: r };
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlAttributionProps: Ce,
  setupControlAttribution: Ye
}, Symbol.toStringTag, { value: "Module" })), xt = S({
  name: "LControlAttribution",
  props: Ce,
  setup(t, o) {
    const e = c(), n = O(h), s = m(H), { options: r, methods: l } = Ye(t, e);
    return _(async () => {
      const { control: a } = n ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        a.attribution(r)
      ), L(l, e.value, t), s({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Te = {
  ...F,
  collapsed: {
    type: Boolean,
    default: void 0
  },
  autoZIndex: {
    type: Boolean,
    default: void 0
  },
  hideSingleBase: {
    type: Boolean,
    default: void 0
  },
  sortLayers: {
    type: Boolean,
    default: void 0
  },
  sortFunction: {
    type: Function
  }
}, Ve = (t, o) => {
  const { options: e } = K(t, o);
  return { options: f(
    t,
    Te,
    e
  ), methods: {
    addLayer(r) {
      r.layerType === "base" ? o.value.addBaseLayer(r.leafletObject, r.name) : r.layerType === "overlay" && o.value.addOverlay(r.leafletObject, r.name);
    },
    removeLayer(r) {
      o.value.removeLayer(r.leafletObject);
    }
  } };
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlLayersProps: Te,
  setupControlLayers: Ve
}, Symbol.toStringTag, { value: "Module" })), Rt = S({
  name: "LControlLayers",
  props: Te,
  setup(t, o) {
    const e = c(), n = O(h), s = m(me), { options: r, methods: l } = Ve(t, e);
    return _(async () => {
      const { control: a } = n ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        a.layers(void 0, void 0, r)
      ), L(l, e.value, t), s({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Me = {
  ...F,
  maxWidth: {
    type: Number
  },
  metric: {
    type: Boolean,
    default: void 0
  },
  imperial: {
    type: Boolean,
    default: void 0
  },
  updateWhenIdle: {
    type: Boolean,
    default: void 0
  }
}, xe = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  );
  return { options: f(
    t,
    Me,
    e
  ), methods: n };
}, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlScaleProps: Me,
  setupControlScale: xe
}, Symbol.toStringTag, { value: "Module" })), eo = S({
  name: "LControlScale",
  props: Me,
  setup(t, o) {
    const e = c(), n = O(h), s = m(H), { options: r, methods: l } = xe(t, e);
    return _(async () => {
      const { control: a } = n ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(a.scale(r)), L(l, e.value, t), s({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Be = {
  ...F,
  zoomInText: {
    type: String
  },
  zoomInTitle: {
    type: String
  },
  zoomOutText: {
    type: String
  },
  zoomOutTitle: {
    type: String
  }
}, Re = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  );
  return { options: f(
    t,
    Be,
    e
  ), methods: n };
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlZoomProps: Be,
  setupControlZoom: Re
}, Symbol.toStringTag, { value: "Module" })), to = S({
  name: "LControlZoom",
  props: Be,
  setup(t, o) {
    const e = c(), n = O(h), s = m(H), { options: r, methods: l } = Re(t, e);
    return _(async () => {
      const { control: a } = n ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(a.zoom(r)), L(l, e.value, t), s({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), te = {
  ...D
}, se = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  ), r = f(
    t,
    te,
    n
  ), l = {
    ...s,
    addLayer(a) {
      o.value.addLayer(a.leafletObject);
    },
    removeLayer(a) {
      o.value.removeLayer(a.leafletObject);
    }
  };
  return A(M, l.addLayer), A(ee, l.removeLayer), { options: r, methods: l };
}, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerGroupProps: te,
  setupLayerGroup: se
}, Symbol.toStringTag, { value: "Module" })), we = {
  ...te
}, et = (t, o, e) => {
  const { options: n, methods: s } = se(
    t,
    o,
    e
  ), r = f(
    t,
    we,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
}, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  featureGroupProps: we,
  setupFeatureGroup: et
}, Symbol.toStringTag, { value: "Module" })), oo = S({
  props: we,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { methods: l, options: a } = et(
      t,
      e,
      o
    );
    return _(async () => {
      const { featureGroup: i } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(void 0, a)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), Ie = {
  ...te,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, tt = (t, o, e) => {
  const { options: n, methods: s } = se(
    t,
    o,
    e
  ), r = f(
    t,
    Ie,
    n
  );
  Object.prototype.hasOwnProperty.call(t, "optionsStyle") && (r.style = t.optionsStyle);
  const l = {
    ...s,
    setGeojson(a) {
      o.value.clearLayers(), o.value.addData(a);
    },
    setOptionsStyle(a) {
      o.value.setStyle(a);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: r, methods: l };
}, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  geoJSONProps: Ie,
  setupGeoJSON: tt
}, Symbol.toStringTag, { value: "Module" })), no = S({
  props: Ie,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { methods: l, options: a } = tt(t, e, o);
    return _(async () => {
      const { geoJSON: i } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.geojson, a));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), ae = {
  ...D,
  opacity: {
    type: Number
  },
  zIndex: {
    type: Number
  },
  tileSize: {
    type: [Number, Array, Object]
  },
  noWrap: {
    type: Boolean,
    default: void 0
  },
  minZoom: {
    type: Number
  },
  maxZoom: {
    type: Number
  },
  className: {
    type: String
  }
}, Ae = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  ), r = f(
    t,
    ae,
    n
  ), l = {
    ...s,
    setTileComponent() {
      var a;
      (a = o.value) == null || a.redraw();
    }
  };
  return pe(() => {
    o.value.off();
  }), { options: r, methods: l };
}, ot = (t, o, e, n) => t.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, s);
  },
  createTile(s) {
    const r = this._tileCoordsToKey(s);
    this.tileComponents[r] = o.create("div");
    const l = U({ setup: n, props: ["coords"] }, { coords: s });
    return mt(l, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(s) {
    const r = this._tileCoordsToKey(s.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
}), wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CreateVueGridLayer: ot,
  gridLayerProps: ae,
  setupGridLayer: Ae
}, Symbol.toStringTag, { value: "Module" })), ro = S({
  props: {
    ...ae,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(t, o) {
    const e = c(), n = c(null), s = c(!1), r = O(h), l = m(M), { options: a, methods: i } = Ae(t, e, o);
    return _(async () => {
      const { GridLayer: u, DomUtil: d, Util: y } = r ? b.L : await import("leaflet/dist/leaflet-src.esm"), w = ot(
        u,
        d,
        y,
        t.childRender
      );
      e.value = j(new w(a));
      const { listeners: v } = T(o.attrs);
      e.value.on(v), L(i, e.value, t), l({
        ...t,
        ...i,
        leafletObject: e.value
      }), s.value = !0, g(() => o.emit("ready", e.value));
    }), { root: n, ready: s, leafletObject: e };
  },
  render() {
    return this.ready ? U("div", { style: { display: "none" }, ref: "root" }) : null;
  }
}), de = {
  iconUrl: {
    type: String
  },
  iconRetinaUrl: {
    type: String
  },
  iconSize: {
    type: [Object, Array]
  },
  iconAnchor: {
    type: [Object, Array]
  },
  popupAnchor: {
    type: [Object, Array]
  },
  tooltipAnchor: {
    type: [Object, Array]
  },
  shadowUrl: {
    type: String
  },
  shadowRetinaUrl: {
    type: String
  },
  shadowSize: {
    type: [Object, Array]
  },
  shadowAnchor: {
    type: [Object, Array]
  },
  bgPos: {
    type: [Object, Array]
  },
  className: {
    type: String
  }
}, It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  iconProps: de
}, Symbol.toStringTag, { value: "Module" })), so = S({
  name: "LIcon",
  props: {
    ...de,
    ...W
  },
  setup(t, o) {
    const e = c(), n = O(h), s = m(ve), r = m(be), l = m(fe);
    let a, i, u, d, y;
    const w = (N, P, B) => {
      const I = N && N.innerHTML;
      if (!P) {
        B && y && s() && r(I);
        return;
      }
      const { listeners: E } = T(o.attrs);
      y && i(y, E);
      const { options: ue } = J(t), $ = f(
        t,
        de,
        ue
      );
      I && ($.html = I), y = $.html ? u($) : d($), a(y, E), l(y);
    }, v = () => {
      g(() => w(e.value, !0, !1));
    }, z = () => {
      g(() => w(e.value, !1, !0));
    }, Z = {
      setIconUrl: v,
      setIconRetinaUrl: v,
      setIconSize: v,
      setIconAnchor: v,
      setPopupAnchor: v,
      setTooltipAnchor: v,
      setShadowUrl: v,
      setShadowRetinaUrl: v,
      setShadowAnchor: v,
      setBgPos: v,
      setClassName: v,
      setHtml: v
    };
    return _(async () => {
      const {
        DomEvent: N,
        divIcon: P,
        icon: B
      } = n ? b.L : await import("leaflet/dist/leaflet-src.esm");
      a = N.on, i = N.off, u = P, d = B, L(Z, {}, t), new MutationObserver(z).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), v();
    }), { root: e };
  },
  render() {
    const t = this.$slots.default ? this.$slots.default() : void 0;
    return U("div", { ref: "root" }, t);
  }
}), Ge = {
  ...D,
  opacity: {
    type: Number
  },
  alt: {
    type: String
  },
  interactive: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: {
    type: Boolean,
    default: void 0
  },
  errorOverlayUrl: {
    type: String
  },
  zIndex: {
    type: Number
  },
  className: {
    type: String
  },
  url: {
    type: String,
    required: !0,
    custom: !0
  },
  bounds: {
    type: [Array, Object],
    required: !0,
    custom: !0
  }
}, nt = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  ), r = f(
    t,
    Ge,
    n
  ), l = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(a) {
      return o.value.setOpacity(a);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(a) {
      return o.value.setUrl(a);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(a) {
      return o.value.setBounds(a);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return o.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return o.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return o.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return o.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(a) {
      return o.value.setZIndex(a);
    }
  };
  return { options: r, methods: l };
}, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  imageOverlayProps: Ge,
  setupImageOverlay: nt
}, Symbol.toStringTag, { value: "Module" })), ao = S({
  name: "LImageOverlay",
  props: Ge,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { options: l, methods: a } = nt(
      t,
      e,
      o
    );
    return _(async () => {
      const { imageOverlay: i } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.url, t.bounds, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), lo = S({
  props: te,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { methods: l } = se(t, e, o);
    return _(async () => {
      const { layerGroup: a } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        a(void 0, t.options)
      );
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
function rt(t, o, e) {
  var n, s, r;
  o === void 0 && (o = 50), e === void 0 && (e = {});
  var l = (n = e.isImmediate) != null && n, a = (s = e.callback) != null && s, i = e.maxWait, u = Date.now(), d = [];
  function y() {
    if (i !== void 0) {
      var v = Date.now() - u;
      if (v + o >= i)
        return i - v;
    }
    return o;
  }
  var w = function() {
    var v = [].slice.call(arguments), z = this;
    return new Promise(function(Z, N) {
      var P = l && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !l) {
          var I = t.apply(z, v);
          a && a(I), d.forEach(function(E) {
            return (0, E.resolve)(I);
          }), d = [];
        }
      }, y()), P) {
        var B = t.apply(z, v);
        return a && a(B), Z(B);
      }
      d.push({ resolve: Z, reject: N });
    });
  };
  return w.cancel = function(v) {
    r !== void 0 && clearTimeout(r), d.forEach(function(z) {
      return (0, z.reject)(v);
    }), d = [];
  }, w;
}
const We = {
  ...W,
  /**
   * The center of the map, supports .sync modifier
   */
  center: {
    type: [Object, Array]
  },
  /**
   * The bounds of the map, supports .sync modifier
   */
  bounds: {
    type: [Array, Object]
  },
  /**
   * The max bounds of the map
   */
  maxBounds: {
    type: [Array, Object]
  },
  /**
   * The zoom of the map, supports .sync modifier
   */
  zoom: {
    type: Number
  },
  /**
   * The minZoom of the map
   */
  minZoom: {
    type: Number
  },
  /**
   * The maxZoom of the map
   */
  maxZoom: {
    type: Number
  },
  /**
   * The paddingBottomRight of the map
   */
  paddingBottomRight: {
    type: [Object, Array]
  },
  /**
   * The paddingTopLeft of the map
   */
  paddingTopLeft: {
    type: Object
  },
  /**
   * The padding of the map
   */
  padding: {
    type: Object
  },
  /**
   * The worldCopyJump option for the map
   */
  worldCopyJump: {
    type: Boolean,
    default: void 0
  },
  /**
   * The CRS to use for the map. Can be an object that defines a coordinate reference
   * system for projecting geographical points into screen coordinates and back
   * (see https://leafletjs.com/reference-1.7.1.html#crs-l-crs-base), or a string
   * name identifying one of Leaflet's defined CRSs, such as "EPSG4326".
   */
  crs: {
    type: [String, Object]
  },
  maxBoundsViscosity: {
    type: Number
  },
  inertia: {
    type: Boolean,
    default: void 0
  },
  inertiaDeceleration: {
    type: Number
  },
  inertiaMaxSpeed: {
    type: Number
  },
  easeLinearity: {
    type: Number
  },
  zoomAnimation: {
    type: Boolean,
    default: void 0
  },
  zoomAnimationThreshold: {
    type: Number
  },
  fadeAnimation: {
    type: Boolean,
    default: void 0
  },
  markerZoomAnimation: {
    type: Boolean,
    default: void 0
  },
  noBlockingAnimations: {
    type: Boolean,
    default: void 0
  },
  useGlobalLeaflet: {
    type: Boolean,
    default: !0,
    custom: !0
  }
}, io = S({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: We,
  setup(t, o) {
    const e = c(), n = vt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = J(t), r = f(
      t,
      We,
      s
    ), { listeners: l, attrs: a } = T(o.attrs), i = Y(M), u = Y(ee), d = Y(H), y = Y(
      me
    );
    A(h, t.useGlobalLeaflet);
    const w = oe(() => {
      const P = {};
      return t.noBlockingAnimations && (P.animate = !1), P;
    }), v = oe(() => {
      const P = w.value;
      return t.padding && (P.padding = t.padding), t.paddingTopLeft && (P.paddingTopLeft = t.paddingTopLeft), t.paddingBottomRight && (P.paddingBottomRight = t.paddingBottomRight), P;
    }), z = {
      moveend: rt((P) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(!0);
      },
      overlayremove(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(!1);
      }
    };
    _(async () => {
      t.useGlobalLeaflet && (b.L = b.L || await import("leaflet"));
      const { map: P, CRS: B, Icon: I, latLngBounds: E, latLng: ue, stamp: $ } = t.useGlobalLeaflet ? b.L : await import("leaflet/dist/leaflet-src.esm");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (p) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${p.message}`
        );
      }
      await qe(I);
      const yt = typeof r.crs == "string" ? B[r.crs] : r.crs;
      r.crs = yt || B.EPSG3857;
      const Q = {
        addLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(p) : n.layersInControl.find(
            (X) => $(X.leafletObject) === $(p.leafletObject)
          ) || (n.layerControl.addLayer(p), n.layersInControl.push(p))), p.visible !== !1 && n.leafletRef.addLayer(p.leafletObject);
        },
        removeLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (C) => C.name !== p.name
          ) : (n.layerControl.removeLayer(p.leafletObject), n.layersInControl = n.layersInControl.filter(
            (C) => $(C.leafletObject) !== $(p.leafletObject)
          ))), n.leafletRef.removeLayer(p.leafletObject);
        },
        registerLayerControl(p) {
          n.layerControl = p, n.layersToAdd.forEach((C) => {
            n.layerControl.addLayer(C);
          }), n.layersToAdd = [], d(p);
        },
        registerControl(p) {
          n.leafletRef.addControl(p.leafletObject);
        },
        setZoom(p) {
          const C = n.leafletRef.getZoom();
          p !== C && n.leafletRef.setZoom(p, w.value);
        },
        setCrs(p) {
          const C = n.leafletRef.getBounds();
          n.leafletRef.options.crs = p, n.leafletRef.fitBounds(C, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(p) {
          n.leafletRef.fitBounds(p, v.value);
        },
        setBounds(p) {
          if (!p)
            return;
          const C = E(p);
          if (!C.isValid())
            return;
          !(n.lastSetBounds || n.leafletRef.getBounds()).equals(C, 0) && (n.lastSetBounds = C, n.leafletRef.fitBounds(C));
        },
        setCenter(p) {
          if (p == null)
            return;
          const C = ue(p), X = n.lastSetCenter || n.leafletRef.getCenter();
          (X.lat !== C.lat || X.lng !== C.lng) && (n.lastSetCenter = C, n.leafletRef.panTo(C, w.value));
        }
      };
      V(i, Q.addLayer), V(u, Q.removeLayer), V(d, Q.registerControl), V(y, Q.registerLayerControl), n.leafletRef = j(P(e.value, r)), L(Q, n.leafletRef, t), ce(n.leafletRef, z), ce(n.leafletRef, l), n.ready = !0, g(() => o.emit("ready", n.leafletRef));
    }), R(() => {
      ye(z), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const Z = oe(() => n.leafletRef), N = oe(() => n.ready);
    return { root: e, ready: N, leafletObject: Z, attrs: a };
  },
  render({ attrs: t }) {
    return t.style || (t.style = {}), t.style.width || (t.style.width = "100%"), t.style.height || (t.style.height = "100%"), U(
      "div",
      {
        ...t,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), Gt = ["Symbol(Comment)", "Symbol(Text)"], zt = ["LTooltip", "LPopup"], ze = {
  ...D,
  draggable: {
    type: Boolean,
    default: void 0
  },
  icon: {
    type: [Object]
  },
  zIndexOffset: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    custom: !0,
    required: !0
  }
}, st = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  ), r = f(
    t,
    ze,
    n
  ), l = {
    ...s,
    setDraggable(a) {
      o.value.dragging && (a ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(a) {
      e.emit("update:latLng", a.latlng), e.emit("update:lat-lng", a.latlng);
    },
    setLatLng(a) {
      if (a != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(a)) && o.value.setLatLng(a);
      }
    }
  };
  return { options: r, methods: l };
}, at = (t, o) => {
  const e = o.slots.default && o.slots.default();
  return e && e.length && e.some(Nt);
};
function Nt(t) {
  return !(Gt.includes(t.type.toString()) || zt.includes(t.type.name));
}
const $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  markerProps: ze,
  setupMarker: st,
  shouldBlankIcon: at
}, Symbol.toStringTag, { value: "Module" })), uo = S({
  name: "LMarker",
  props: ze,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M);
    A(
      ve,
      () => {
        var u;
        return !!((u = e.value) != null && u.getElement());
      }
    ), A(be, (u) => {
      var y, w;
      const d = k((y = e.value) == null ? void 0 : y.getElement) && ((w = e.value) == null ? void 0 : w.getElement());
      d && (d.innerHTML = u);
    }), A(
      fe,
      (u) => {
        var d;
        return ((d = e.value) == null ? void 0 : d.setIcon) && e.value.setIcon(u);
      }
    );
    const { options: l, methods: a } = st(t, e, o), i = {
      moveHandler: rt(a.latLngSync)
    };
    return _(async () => {
      const { marker: u, divIcon: d } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      at(l, o) && (l.icon = d({ className: "" })), e.value = j(u(t.latLng, l));
      const { listeners: y } = T(o.attrs);
      e.value.on(y), e.value.on("move", i.moveHandler), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), R(() => {
      var u;
      console.debug("Closing open popup x1", e.value), ye(i), console.debug("Closing open popup y1"), (u = e.value) != null && u.isPopupOpen() && (console.debug("Closing open popup"), e.value.closePopup());
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), le = {
  ...ne,
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: !0,
    custom: !0
  }
}, Ne = (t, o, e) => {
  const { options: n, methods: s } = _e(
    t,
    o,
    e
  ), r = f(
    t,
    le,
    n
  ), l = {
    ...s,
    setSmoothFactor(a) {
      o.value.setStyle({ smoothFactor: a });
    },
    setNoClip(a) {
      o.value.setStyle({ noClip: a });
    },
    addLatLng(a) {
      o.value.addLatLng(a);
    }
  };
  return { options: r, methods: l };
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polylineProps: le,
  setupPolyline: Ne
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...le
}, $e = (t, o, e) => {
  const { options: n, methods: s } = Ne(
    t,
    o,
    e
  ), r = f(
    t,
    x,
    n
  ), l = {
    ...s,
    toGeoJSON(a) {
      return o.value.toGeoJSON(a);
    }
  };
  return { options: r, methods: l };
}, Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polygonProps: x,
  setupPolygon: $e
}, Symbol.toStringTag, { value: "Module" })), co = S({
  name: "LPolygon",
  props: x,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { options: l, methods: a } = $e(t, e, o);
    return _(async () => {
      const { polygon: i } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.latLngs, l));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), po = S({
  name: "LPolyline",
  props: le,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { options: l, methods: a } = Ne(t, e, o);
    return _(async () => {
      const { polyline: i } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.latLngs, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), ke = {
  ...W,
  content: {
    type: String,
    default: null
  }
}, Ue = (t, o) => {
  const { options: e, methods: n } = J(t), s = {
    ...n,
    setContent(r) {
      o.value && r !== null && r !== void 0 && o.value.setContent(r);
    }
  };
  return { options: e, methods: s };
}, De = (t) => t.default ? U("div", { ref: "root" }, t.default()) : null, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperProps: ke,
  render: De,
  setupPopper: Ue
}, Symbol.toStringTag, { value: "Module" })), lt = {
  ...ke,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, it = (t, o) => {
  const { options: e, methods: n } = Ue(t, o);
  return { options: e, methods: n };
}, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popupProps: lt,
  setupPopup: it
}, Symbol.toStringTag, { value: "Module" })), yo = S({
  name: "LPopup",
  props: lt,
  setup(t, o) {
    const e = c(), n = c(null), s = O(h), r = m(ge), l = m(he), { options: a, methods: i } = it(t, e);
    return _(async () => {
      const { popup: u } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(u(a)), t.latLng !== void 0 && e.value.setLatLng(t.latLng), L(i, e.value, t);
      const { listeners: d } = T(o.attrs);
      e.value.on(d), e.value.setContent(t.content || n.value || ""), r(e.value), g(() => o.emit("ready", e.value));
    }), R(() => {
      l();
    }), { root: n, leafletObject: e };
  },
  render() {
    return De(this.$slots);
  }
}), Fe = {
  ...x,
  latLngs: {
    ...x.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, ut = (t, o, e) => {
  const { options: n, methods: s } = $e(
    t,
    o,
    e
  ), r = f(
    t,
    Fe,
    n
  ), l = {
    ...s,
    setBounds(a) {
      o.value.setBounds(a);
    },
    setLatLngs(a) {
      o.value.setBounds(a);
    }
  };
  return { options: r, methods: l };
}, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  rectangleProps: Fe,
  setupRectangle: ut
}, Symbol.toStringTag, { value: "Module" })), mo = S({
  name: "LRectangle",
  props: Fe,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = m(M), { options: l, methods: a } = ut(t, e, o);
    return _(async () => {
      const { rectangle: i, latLngBounds: u } = s ? b.L : await import("leaflet/dist/leaflet-src.esm"), d = t.bounds ? u(t.bounds) : u(t.latLngs || []);
      e.value = j(i(d, l));
      const { listeners: y } = T(o.attrs);
      e.value.on(y), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), ie = {
  ...ae,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (t) => typeof t == "string" ? !0 : Array.isArray(t) ? t.every((o) => typeof o == "string") : !1
  },
  detectRetina: {
    type: Boolean,
    default: void 0
  },
  url: {
    type: String,
    required: !0,
    custom: !0
  }
}, Ze = (t, o, e) => {
  const { options: n, methods: s } = Ae(t, o, e), r = f(
    t,
    ie,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
}, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTileLayer: Ze,
  tileLayerProps: ie
}, Symbol.toStringTag, { value: "Module" })), vo = S({
  props: ie,
  setup(t, o) {
    const e = c(), n = O(h), s = m(M), { options: r, methods: l } = Ze(t, e, o);
    return _(async () => {
      const { tileLayer: a } = n ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(a(t.url, r));
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), s({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), ct = {
  ...ke
}, dt = (t, o) => {
  const { options: e, methods: n } = Ue(t, o), s = m(Oe);
  return R(() => {
    s();
  }), { options: e, methods: n };
}, Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTooltip: dt,
  tooltipProps: ct
}, Symbol.toStringTag, { value: "Module" })), bo = S({
  name: "LTooltip",
  props: ct,
  setup(t, o) {
    const e = c(), n = c(null), s = O(h), r = m(Le), { options: l, methods: a } = dt(t, e);
    return _(async () => {
      const { tooltip: i } = s ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(l)), L(a, e.value, t);
      const { listeners: u } = T(o.attrs);
      e.value.on(u), e.value.setContent(t.content || n.value || ""), r(e.value), g(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return De(this.$slots);
  }
}), Ee = {
  ...ie,
  layers: {
    type: String,
    required: !0
  },
  styles: {
    type: String
  },
  format: {
    type: String
  },
  transparent: {
    type: Boolean,
    default: void 0
  },
  version: {
    type: String
  },
  crs: {
    type: Object
  },
  uppercase: {
    type: Boolean,
    default: void 0
  }
}, pt = (t, o, e) => {
  const { options: n, methods: s } = Ze(t, o, e);
  return {
    options: f(
      t,
      Ee,
      n
    ),
    methods: {
      ...s
    }
  };
}, Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupWMSTileLayer: pt,
  wmsTileLayerProps: Ee
}, Symbol.toStringTag, { value: "Module" })), fo = S({
  props: Ee,
  setup(t, o) {
    const e = c(), n = O(h), s = m(M), { options: r, methods: l } = pt(
      t,
      e,
      o
    );
    return _(async () => {
      const { tileLayer: a } = n ? b.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        a.wms(t.url, r)
      );
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), s({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: Ot,
  CircleMarker: ht,
  Component: bt,
  Control: St,
  ControlAttribution: _t,
  ControlLayers: jt,
  ControlScale: Pt,
  ControlZoom: Ct,
  FeatureGroup: Mt,
  GeoJSON: Bt,
  GridLayer: wt,
  Icon: It,
  ImageOverlay: At,
  InteractiveLayer: gt,
  Layer: ft,
  LayerGroup: Tt,
  Marker: $t,
  Path: Lt,
  Polygon: Ut,
  Polyline: kt,
  Popper: Dt,
  Popup: Ft,
  Rectangle: Zt,
  TileLayer: Et,
  Tooltip: Ht,
  WmsTileLayer: Wt
}, Symbol.toStringTag, { value: "Module" }));
export {
  go as Functions,
  Qt as InjectionKeys,
  Xt as LCircle,
  Yt as LCircleMarker,
  Vt as LControl,
  xt as LControlAttribution,
  Rt as LControlLayers,
  eo as LControlScale,
  to as LControlZoom,
  oo as LFeatureGroup,
  no as LGeoJson,
  ro as LGridLayer,
  so as LIcon,
  ao as LImageOverlay,
  lo as LLayerGroup,
  io as LMap,
  uo as LMarker,
  co as LPolygon,
  po as LPolyline,
  yo as LPopup,
  mo as LRectangle,
  vo as LTileLayer,
  bo as LTooltip,
  fo as LWmsTileLayer,
  Kt as Utilities
};
