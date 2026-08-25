/* @ds-bundle: {"format":4,"namespace":"DesignSystem_e7043d","components":[{"name":"ContactItem","sourcePath":"components/content/ContactItem.jsx"},{"name":"GalleryTile","sourcePath":"components/content/GalleryTile.jsx"},{"name":"MasterCard","sourcePath":"components/content/MasterCard.jsx"},{"name":"PriceItem","sourcePath":"components/content/PriceItem.jsx"},{"name":"Wordmark","sourcePath":"components/content/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"BookingForm","sourcePath":"components/forms/BookingForm.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"ScrollCue","sourcePath":"components/navigation/ScrollCue.jsx"}],"sourceHashes":{"components/content/ContactItem.jsx":"5ce80131db37","components/content/GalleryTile.jsx":"a5809645ad6d","components/content/MasterCard.jsx":"b950b06013b5","components/content/PriceItem.jsx":"ec5660602263","components/content/Wordmark.jsx":"47cfff878d3c","components/core/Badge.jsx":"608561b8c463","components/core/Button.jsx":"21dc2250ee47","components/core/Icon.jsx":"7ca974bcfc6c","components/core/Rule.jsx":"3a15f876fdda","components/core/SectionHeading.jsx":"7c3d5aa06aef","components/feedback/Dialog.jsx":"1b7c6a6a7712","components/feedback/Notice.jsx":"b27dddd2fc83","components/forms/BookingForm.jsx":"a00780b2f9d7","components/forms/Checkbox.jsx":"debebfe1012d","components/forms/Field.jsx":"f0f5246d3253","components/forms/Input.jsx":"1f7c4d6bbb89","components/forms/Select.jsx":"06a78fbdb5d0","components/navigation/Footer.jsx":"c336480b1fc6","components/navigation/NavBar.jsx":"239154b66e55","components/navigation/ScrollCue.jsx":"ed5b548e7788","ui_kits/site/booking-flow.kit.jsx":"9d645ff8a3be","ui_kits/site/sections.kit.jsx":"2c97f5cf9299"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_e7043d = window.DesignSystem_e7043d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/GalleryTile.jsx
try { (() => {
function GalleryTile({
  src,
  alt = "",
  ratio = "16/9",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: 0,
      border: "none",
      display: "block",
      width: "100%",
      aspectRatio: ratio,
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      background: "var(--surface-photo)",
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "var(--photo-filter)",
      opacity: hover ? .78 : 1,
      transition: "opacity var(--dur-base) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { GalleryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GalleryTile.jsx", error: String((e && e.message) || e) }); }

// components/content/MasterCard.jsx
try { (() => {
function MasterCard({
  name,
  photo,
  role,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1/1",
      overflow: "hidden",
      background: "var(--surface-photo)"
    }
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "var(--photo-filter)",
      transform: hover ? "scale(1.04)" : "none",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      fontSize: "var(--fs-sm)",
      letterSpacing: "var(--ls-heading)",
      textTransform: "uppercase",
      color: hover ? "var(--brass-600)" : "var(--text-primary)",
      transition: "color var(--dur-base) var(--ease-standard)"
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      marginTop: "4px"
    }
  }, role)));
}
Object.assign(__ds_scope, { MasterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MasterCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceItem.jsx
try { (() => {
function PriceItem({
  service,
  price,
  currency = "рублей",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-price)",
      letterSpacing: "var(--ls-heading)",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, service), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: "2px",
      background: "var(--brass-500)",
      minWidth: "32px",
      maxWidth: "110px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-price)",
      letterSpacing: "var(--ls-heading)",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      whiteSpace: "nowrap",
      marginLeft: "auto"
    }
  }, price, " ", currency));
}
Object.assign(__ds_scope, { PriceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceItem.jsx", error: String((e && e.message) || e) }); }

// components/content/Wordmark.jsx
try { (() => {
/* The source materials contain no logo file for this brand, so the wordmark is set in type. */
function Wordmark({
  tone = "light",
  size = 38,
  tagline = "мужские стрижки",
  style
}) {
  const color = tone === "light" ? "var(--paper)" : "var(--ink-1000)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)",
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: size,
      lineHeight: 1
    }
  }, "\u041F\u0430\u0440\u0438\u043A\u043C\u0430\u0445\u0435\u0440\u0441\u043A\u0430\u044F"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: Math.max(10, size * 0.3),
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      fontWeight: "var(--fw-medium)"
    }
  }, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430"), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: Math.max(9, size * 0.26),
      letterSpacing: "var(--ls-heading)",
      textTransform: "uppercase",
      opacity: .85
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "18px",
      height: "1px",
      background: "currentColor"
    }
  }), tagline, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "18px",
      height: "1px",
      background: "currentColor"
    }
  })));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "brass",
  style
}) {
  const tones = {
    brass: {
      background: "var(--brass-500)",
      color: "var(--ink-1000)"
    },
    dark: {
      background: "var(--ink-1000)",
      color: "var(--paper)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-strong)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "5px 10px",
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-xs)",
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  fontFamily: "var(--font-display)",
  fontWeight: "var(--fw-bold)",
  textTransform: "uppercase",
  letterSpacing: "var(--ls-label)",
  borderRadius: "var(--radius-xs)",
  cursor: "pointer",
  transition: "background var(--dur-base) var(--ease-standard),color var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)",
  textDecoration: "none",
  whiteSpace: "nowrap"
};
const sizes = {
  sm: {
    padding: "9px 18px",
    fontSize: "var(--fs-xs)"
  },
  md: {
    padding: "14px 32px",
    fontSize: "var(--fs-sm)"
  },
  lg: {
    padding: "18px 44px",
    fontSize: "var(--fs-body)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  href,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const variants = {
    primary: {
      background: hover ? "var(--action-fill-hover)" : "var(--action-fill)",
      color: "var(--action-text)",
      border: "var(--border-w) solid transparent"
    },
    outline: {
      background: hover ? "var(--brass-500)" : "transparent",
      color: hover ? "var(--ink-1000)" : "var(--brass-500)",
      border: "var(--border-w) solid var(--brass-500)"
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--brass-500)" : "var(--paper)",
      border: "var(--border-w) solid var(--border-inverse)"
    },
    dark: {
      background: hover ? "var(--ink-700)" : "var(--ink-1000)",
      color: "var(--paper)",
      border: "var(--border-w) solid transparent"
    }
  };
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? .4 : 1,
    pointerEvents: disabled ? "none" : undefined,
    transform: press ? "translateY(1px)" : "none",
    ...style
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: s,
    onClick: onClick,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Intentional addition: the source page used thin line icons but shipped no icon set,
   so this wraps Lucide (CDN) to keep stroke weight consistent. */
function Icon({
  name,
  size = 18,
  color = "currentColor",
  strokeWidth = 1.5,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({
      nameAttr: "data-lucide"
    });
    const svg = ref.current.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.setAttribute("stroke-width", strokeWidth);
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color,
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": name
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactItem.jsx
try { (() => {
function ContactItem({
  icon,
  label,
  value,
  tone = "dark",
  style
}) {
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "34px",
      height: "34px",
      flex: "0 0 34px",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-pill)",
      border: "var(--border-w) solid var(--border-accent)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--brass-500)"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: light ? "var(--paper)" : "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-sm)",
      color: light ? "rgba(255,255,255,.7)" : "var(--text-body)",
      marginTop: "5px"
    }
  }, value)));
}
Object.assign(__ds_scope, { ContactItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function Rule({
  width = "var(--rule-w)",
  tone = "brass",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "block",
      width,
      height: "2px",
      background: tone === "brass" ? "var(--brass-500)" : "var(--border-hairline)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  title,
  subtitle,
  align = "center",
  tone = "dark",
  rule = false,
  as = "h2",
  style
}) {
  const Tag = as;
  const color = tone === "light" ? "var(--paper)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: "var(--space-3)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-heading)",
      textTransform: "uppercase",
      color,
      margin: 0
    }
  }, title), rule && /*#__PURE__*/React.createElement(__ds_scope.Rule, null), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: tone === "light" ? "rgba(255,255,255,.72)" : "var(--text-body)",
      margin: 0,
      maxWidth: "58ch"
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  onClose,
  width = 560,
  children,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-photo-strong)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-5)",
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-raised)",
      borderTop: "3px solid var(--brass-500)",
      padding: "var(--space-7)",
      position: "relative",
      ...style
    }
  }, onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    style: {
      position: "absolute",
      top: "14px",
      right: "14px",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18,
    color: "currentColor"
  })), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: "var(--space-5)",
      textAlign: "center"
    }
  }, title), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function Notice({
  tone = "info",
  children,
  style
}) {
  const tones = {
    info: {
      border: "var(--border-hairline)",
      bar: "var(--ink-400)"
    },
    success: {
      border: "var(--border-hairline)",
      bar: "var(--status-success)"
    },
    warning: {
      border: "var(--border-hairline)",
      bar: "var(--status-warning)"
    },
    danger: {
      border: "var(--border-hairline)",
      bar: "var(--status-danger)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      padding: "var(--space-4)",
      background: "var(--surface-alt)",
      border: "var(--border-w) solid " + t.border,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "3px",
      flex: "0 0 3px",
      background: t.bar
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)",
      lineHeight: "var(--lh-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  label,
  disabled,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      if (disabled) return;
      if (checked === undefined) setInner(!on);
      onChange && onChange(!on);
    },
    style: {
      width: "18px",
      height: "18px",
      flex: "0 0 18px",
      display: "grid",
      placeItems: "center",
      background: on ? "var(--brass-500)" : "var(--paper)",
      border: "var(--border-w) solid " + (on ? "var(--brass-500)" : "var(--border-strong)"),
      borderRadius: "var(--radius-xs)",
      transition: "background var(--dur-fast) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "9px",
      height: "5px",
      borderLeft: "2px solid var(--ink-1000)",
      borderBottom: "2px solid var(--ink-1000)",
      transform: "rotate(-45deg) translateY(-1px)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brass-600)"
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-sm)",
      color: error ? "var(--status-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  defaultValue,
  placeholder,
  type = "text",
  disabled,
  invalid,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: "100%",
        padding: "13px 14px",
        font: "var(--type-body)",
        color: "var(--text-primary)",
        background: "var(--paper)",
        border: "var(--border-w) solid var(--border-hairline)",
        borderRadius: "var(--radius-xs)",
        outline: "none",
        transition: "border-color var(--dur-fast) var(--ease-standard)"
      },
      borderColor: invalid ? "var(--status-danger)" : focus ? "var(--brass-500)" : "var(--border-hairline)",
      background: disabled ? "var(--ink-050)" : "var(--paper)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  value,
  defaultValue,
  options = [],
  placeholder,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: "100%",
        padding: "13px 14px",
        font: "var(--type-body)",
        color: "var(--text-primary)",
        background: "var(--paper)",
        border: "var(--border-w) solid var(--border-hairline)",
        borderRadius: "var(--radius-xs)",
        outline: "none",
        transition: "border-color var(--dur-fast) var(--ease-standard)"
      },
      appearance: "none",
      paddingRight: "38px",
      borderColor: focus ? "var(--brass-500)" : "var(--border-hairline)",
      background: disabled ? "var(--ink-050)" : "var(--paper)",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      marginTop: "-3px",
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: "6px solid var(--brass-500)",
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/BookingForm.jsx
try { (() => {
function BookingForm({
  services = ["Мужская стрижка", "Стрижка бороды/усов", "Опасное бритьё", "Стрижка + бритьё"],
  masters = ["Иванов Михаил", "Петров Александр", "Миронов Артем", "Тихонов Илья", "Фадеев Игорь"],
  onSubmit,
  style
}) {
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
      onSubmit && onSubmit();
    },
    style: {
      display: "grid",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "\u0418\u043C\u044F",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "tel",
    placeholder: "+7 (900) 000-00-00"
  }))), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "\u0423\u0441\u043B\u0443\u0433\u0430"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443",
    options: services
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "\u041C\u0430\u0441\u0442\u0435\u0440"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    placeholder: "\u041B\u044E\u0431\u043E\u0439 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439",
    options: masters
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "date"
  }))), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    defaultChecked: true,
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    fullWidth: true
  }, done ? "Заявка принята" : "Записаться"));
}
Object.assign(__ds_scope, { BookingForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/BookingForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  credit = "Парикмахерская нормального человека",
  socials = ["facebook", "twitter", "instagram"],
  note = "ВСЕ ПРАВА ЗАЩИЩЕНЫ",
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-1000)",
      color: "var(--paper)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-5) var(--space-6)",
      gap: "var(--space-5)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "22px"
    }
  }, credit), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      width: "30px",
      height: "30px",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-pill)",
      border: "var(--border-w) solid var(--border-inverse)",
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 14,
    color: "currentColor"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      color: "rgba(255,255,255,.6)"
    }
  }, note));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  items = [],
  active,
  phone,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: "var(--nav-h)",
      background: "var(--surface-dark)",
      display: "flex",
      alignItems: "center",
      padding: "0 var(--space-5)",
      gap: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "scissors",
    size: 20,
    color: "var(--paper)"
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      gap: "var(--space-6)",
      margin: "0 auto",
      padding: 0
    }
  }, items.map(i => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onSelect && onSelect(i);
      },
      style: {
        font: "var(--type-nav)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        color: on ? "var(--brass-500)" : "var(--paper)",
        paddingBottom: "6px",
        borderBottom: "2px solid " + (on ? "var(--brass-500)" : "transparent"),
        transition: "color var(--dur-base) var(--ease-standard)"
      }
    }, i));
  })), phone && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-nav)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--paper)"
    }
  }, phone));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScrollCue.jsx
try { (() => {
function ScrollCue({
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": "\u041B\u0438\u0441\u0442\u0430\u0442\u044C \u0432\u043D\u0438\u0437",
    style: {
      width: "26px",
      height: "40px",
      borderRadius: "var(--radius-pill)",
      border: "var(--border-w) solid rgba(255,255,255,.7)",
      background: "transparent",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      gap: "2px",
      padding: "6px 0",
      ...style
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "block",
      width: "7px",
      height: "7px",
      borderLeft: "1.5px solid rgba(255,255,255,.8)",
      borderBottom: "1.5px solid rgba(255,255,255,.8)",
      transform: "rotate(-45deg)",
      opacity: 1 - i * 0.28
    }
  })));
}
Object.assign(__ds_scope, { ScrollCue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScrollCue.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/booking-flow.kit.jsx
try { (() => {
const {
  Dialog,
  BookingForm,
  Notice,
  Button
} = window.DesignSystem_e7043d;
function BookingDialog({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    title: sent ? "Спасибо" : "Записаться онлайн",
    onClose: () => {
      setSent(false);
      onClose();
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Notice, {
    tone: "success"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430. \u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "dark",
    onClick: () => {
      setSent(false);
      onClose();
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")) : /*#__PURE__*/React.createElement(BookingForm, {
    onSubmit: () => setSent(true)
  }));
}
function Lightbox({
  index,
  onClose
}) {
  if (index === null) return null;
  const list = window.GALLERY;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-photo-strong)",
      display: "grid",
      placeItems: "center",
      zIndex: 60,
      padding: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: list[index],
    alt: "",
    style: {
      maxWidth: "90%",
      maxHeight: "80%",
      objectFit: "contain",
      filter: "var(--photo-filter)",
      borderTop: "3px solid var(--brass-500)"
    }
  }));
}
Object.assign(window, {
  BookingDialog,
  Lightbox
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/booking-flow.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/sections.kit.jsx
try { (() => {
const {
  NavBar,
  Footer,
  ScrollCue,
  Button,
  SectionHeading,
  Wordmark,
  MasterCard,
  PriceItem,
  GalleryTile,
  ContactItem
} = window.DesignSystem_e7043d;
const P = "../../assets/photos/";
const NAV = ["Салон", "Команда", "Прайс", "Галерея", "Контакты"];
const MASTERS = [["Иванов Михаил", "master-ivanov.png"], ["Петров Александр", "master-petrov.png"], ["Миронов Артем", "master-mironov.png"], ["Тихонов Илья", "master-tihonov.png"], ["Фадеев Игорь", "master-fadeev.png"]];
const PRICES = [["Мужская стрижка", 1200], ["Стрижка бороды/усов", 800], ["Детская стрижка", 1000], ["Опасное бритьё", 1000], ["Стрижка машинкой", 800], ["Стрижка + бритьё", 2000]];
const GALLERY = [1, 2, 3, 4, 5].map(i => P + "gallery-" + i + ".png");
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--container-pad)",
    ...style
  }
}, children);
function Hero({
  onBook,
  onScroll
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "520px",
      overflow: "hidden",
      background: "var(--surface-photo)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "interior-wide.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 40%",
      filter: "var(--photo-filter)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-photo)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 54
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043E\u043D\u043B\u0430\u0439\u043D")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: "22px",
      transform: "translateX(-50%)"
    }
  }, /*#__PURE__*/React.createElement(ScrollCue, {
    onClick: onScroll
  })));
}
function Welcome() {
  return /*#__PURE__*/React.createElement("section", {
    id: "\u0421\u0430\u043B\u043E\u043D",
    style: {
      background: "var(--surface-alt)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      maxWidth: "78ch",
      margin: "var(--space-5) auto 0",
      font: "var(--type-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, "\u042D\u0442\u043E \u0431\u0430\u0440\u0431\u0435\u0440\u0448\u043E\u043F, \u0430 \u043D\u0435 \u0441\u0430\u043B\u043E\u043D \u043A\u0440\u0430\u0441\u043E\u0442\u044B. \u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0435\u0442\u044C \u043C\u0443\u0436\u0441\u043A\u0438\u0445 \u043F\u0430\u0440\u0438\u043A\u043C\u0430\u0445\u0435\u0440\u0441\u043A\u0438\u0445. \u041D\u0430\u043C \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E, \u0435\u0441\u0442\u044C \u043B\u0438 \u0443 \u043D\u0430\u0448\u0438\u0445 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432 \u0431\u043E\u0440\u043E\u0434\u044B \u0438 \u0442\u0430\u0442\u0443\u0438\u0440\u043E\u0432\u043A\u0438. \u041D\u0430\u043C \u043D\u0435 \u0432\u0430\u0436\u043D\u043E, \u043A\u043E\u0433\u043E \u0441\u0442\u0440\u0438\u0447\u044C \u2014 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u0447\u043B\u0435\u043D\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 Forbes. \u041C\u044B \u043D\u0435 \u0442\u0440\u0430\u0442\u0438\u043C \u0434\u0435\u043D\u044C\u0433\u0438 \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0446\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u043E\u0440\u043E\u0434\u0430\u043C\u0438 \u0434\u0435\u0440\u0435\u0432\u0430. \u0423 \u043D\u0430\u0441 \u043D\u0435\u0442 \u043C\u0430\u043D\u0438\u043A\u044E\u0440\u0430 \u0438 \u043C\u044B \u043D\u0435 \u043A\u0430\u043C\u0443\u0444\u043B\u0438\u0440\u0443\u0435\u043C \u0441\u0435\u0434\u0438\u043D\u0443. \u041C\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0442\u0440\u0438\u0436\u0451\u043C \u043C\u0443\u0436\u0447\u0438\u043D. \u0418 \u0434\u0435\u043B\u0430\u0435\u043C \u044D\u0442\u043E \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0445.")));
}
function Team() {
  return /*#__PURE__*/React.createElement("section", {
    id: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430",
    style: {
      background: "var(--surface-alt)",
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: "var(--grid-gap)",
      marginTop: "var(--space-7)"
    }
  }, MASTERS.map(([n, p]) => /*#__PURE__*/React.createElement(MasterCard, {
    key: n,
    name: n,
    photo: P + p
  })))));
}
function Prices() {
  return /*#__PURE__*/React.createElement("section", {
    id: "\u041F\u0440\u0430\u0439\u0441",
    style: {
      background: "var(--surface-alt)",
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "var(--space-9)",
      marginTop: "var(--space-6)"
    }
  }, PRICES.map(([s, p]) => /*#__PURE__*/React.createElement(PriceItem, {
    key: s,
    service: s,
    price: p
  })))));
}
function GalleryBand({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "interior-wide.png",
    alt: "",
    style: {
      width: "100%",
      height: "470px",
      objectFit: "cover",
      filter: "var(--photo-filter)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: "var(--space-3)",
      padding: "var(--space-3) 0",
      background: "var(--paper)"
    }
  }, GALLERY.map((src, i) => /*#__PURE__*/React.createElement(GalleryTile, {
    key: src,
    src: src,
    ratio: "16/9",
    onClick: () => onOpen(i)
  }))));
}
function Contacts() {
  return /*#__PURE__*/React.createElement("section", {
    id: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    style: {
      background: "var(--surface-alt)",
      padding: "var(--section-y-tight) 0 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--grid-gap)",
      margin: "var(--space-7) 0 var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(ContactItem, {
    icon: "clock",
    label: "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E",
    value: "\u0441 9:00 \u0434\u043E 20:00"
  }), /*#__PURE__*/React.createElement(ContactItem, {
    icon: "mail",
    label: "\u041F\u043E\u0447\u0442\u0430",
    value: "welcome@barbershop.ru"
  }), /*#__PURE__*/React.createElement(ContactItem, {
    icon: "phone",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    value: "8 (900) 020-83-22"
  }), /*#__PURE__*/React.createElement(ContactItem, {
    icon: "map-pin",
    label: "\u041D\u0430\u0448 \u0430\u0434\u0440\u0435\u0441",
    value: "\u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u0435\u0439 \u0434.2"
  }))), /*#__PURE__*/React.createElement("img", {
    src: P + "map-moscow.png",
    alt: "\u041A\u0430\u0440\u0442\u0430",
    style: {
      width: "100%",
      height: "150px",
      objectFit: "cover"
    }
  }));
}
Object.assign(window, {
  NavBar,
  Footer,
  Button,
  Hero,
  Welcome,
  Team,
  Prices,
  GalleryBand,
  Contacts,
  Container,
  NAV,
  GALLERY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/sections.kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ContactItem = __ds_scope.ContactItem;

__ds_ns.GalleryTile = __ds_scope.GalleryTile;

__ds_ns.MasterCard = __ds_scope.MasterCard;

__ds_ns.PriceItem = __ds_scope.PriceItem;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.BookingForm = __ds_scope.BookingForm;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.ScrollCue = __ds_scope.ScrollCue;

})();
