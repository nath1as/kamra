var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
var import_styled_components = require("styled-components");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components.ServerStyleSheet();
  let markup = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/nathias/Code/kamra/app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta,
  unstable_shouldReload: () => unstable_shouldReload
});
init_react();
var import_styled_components5 = require("styled-components");
var import_remix3 = __toESM(require_remix());

// app/styles/global.js
init_react();
var import_styled_components2 = require("styled-components");
var GlobalStyle = import_styled_components2.createGlobalStyle`
@font-face {
  font-family: "CinzelDecorative";
  src: url("/fonts/CinzelDecorative-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "CinzelDecorative Bold";
  src: url("/fonts/CinzelDecorative-Bold.ttf");
  font-style: bold;
  font-weight: 800;
  font-display: swap;
}

  height: 100%;
  width: 100%;
  user-select: none;
 * {
  user-select: none;
  scrollbar-width: none;
     ::-webkit-scrollbar {
    display: none;
  }
  *,
  *::after,
  *::before {
    outline: none;
    padding: 0;
    margin: 0;
    user-drag: none;
    font-size: 14px;
  }
  input, textarea {
    user-select: auto;
    pointer-events: auto;
    user-drag: auto;
    cursor: pointer;
    cursor: url('/purple_pointer.cur'), pointer;
  }
  img {
    pointer-events: none;
    border: none;
    outline: none;
    background: ${(props) => props.theme.secondary};
  }
  a {
    text-decoration: none;
    outline:none;
    font-size: var(--size0);
    color: ${(props) => props.theme.links};
    cursor: url('/purple_pointer.cur'), pointer;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    height: 100vh;
    width: 100vw;
    font-family: CinzelDecorative;
  }
  :root {
    // --bigFont: 'Erica One', regular;
    // heights
      --headerHeight: 45px;
      --footerHeight: 0px;
      --borderHeight: 0.2vh;
    // spacing
      --ratio: 1.2;
      --size-5: calc(var(--size-4) / var(--ratio));
      --size-4: calc(var(--size-3) / var(--ratio));
      --size-3: calc(var(--size-2) / var(--ratio));
      --size-2: calc(var(--size-1) / var(--ratio));
      --sze-1: calc(var(--size0) / var(--ratio));
      --size0: 1rem;
      --size1: calc(var(--size0) * var(--ratio));
      --size2: calc(var(--size1) * var(--ratio));
      --size3: calc(var(--size2) * var(--ratio));
      --size4: calc(var(--size3) * var(--ratio));
      --size5: calc(var(--size4) * var(--ratio));
  }
`;
var global_default = GlobalStyle;

// app/styles/themes.js
init_react();
var themes = {
  peach: {
    primary: "#f8edeb",
    secondary: "#b4f97d7",
    tertiary: "#875faf",
    background: "#000",
    text: "#2f2d46",
    links: "#f8edeb"
  },
  kiwi: {
    primary: "#f8edeb",
    secondary: "#4f97d7",
    tertiary: "#875faf",
    background: "#121212",
    symbol: "#f8edeb",
    text: "#f8edeb",
    links: "#f8edeb"
  }
};
var themes_default = themes;

// app/components/Layout/index.jsx
init_react();
var import_remix2 = __toESM(require_remix());
var import_styled_components4 = __toESM(require("styled-components"));

// app/components/Layout/Symbol/index.jsx
init_react();
var import_styled_components3 = __toESM(require("styled-components"));

// app/components/Layout/Symbol/logo.jpg
var logo_default = "/build/_assets/logo-5AIFK6R6.jpg";

// app/components/Layout/Symbol/index.jsx
var Img = import_styled_components3.default.img`
width: 90%;
`;
var Symbol = () => {
  return /* @__PURE__ */ React.createElement(Img, {
    src: logo_default
  });
};
var Symbol_default = Symbol;

// app/components/Layout/background.jpg
var background_default = "/build/_assets/background-CWAN3N57.jpg";

// app/components/Layout/index.jsx
var Wrapper = import_styled_components4.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-image: ${({ background }) => `url(${background})`};
    background-size: 100vh;
`;
var Music = import_styled_components4.default.div`
  position: absolute;
  font-size: 35px;
  top: 60px;
  left: 40%;
  font-family: CinzelDecorative Bold;
`;
var Merch = import_styled_components4.default.div`
  position: absolute;
  font-size: 35px;
  top: 300px;
  left: 450px;
  right: 0;
  font-family: CinzelDecorative Bold;
  transform: rotate(-60deg);
`;
var About = import_styled_components4.default.div`
  position: absolute;
  font-size: 35px;
  top: 430px;
  left: 150px;
  font-family: CinzelDecorative Bold;
  transform: rotate(60deg);
`;
var Nav = import_styled_components4.default.div`
  position: relative;
  font-size: 30px;
  top: 0;
  left: 0;
`;
var Center = import_styled_components4.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  max-width: 60vw;
  height: 100vh;
`;
var Top = import_styled_components4.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
var Bottom = import_styled_components4.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
var Left = import_styled_components4.default.div`
  flex-grow: 1;
  height: 100vh;
  width: 25vw;
  position: relative;
`;
var Right = import_styled_components4.default.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100vh;
  width: 25vw;
`;
var Layout = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    background: background_default
  }, /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(Nav, null, /* @__PURE__ */ React.createElement(Music, null, "music"), /* @__PURE__ */ React.createElement(Merch, null, "merch"), /* @__PURE__ */ React.createElement(About, null, "about"), /* @__PURE__ */ React.createElement(Symbol_default, null)), /* @__PURE__ */ React.createElement(Bottom, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null))));
};
var Layout_default = Layout;

// route:/home/nathias/Code/kamra/app/root.jsx
function meta() {
  return { title: "Kamra", description: "web" };
}
var unstable_shouldReload = () => false;
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, "Root error.", /* @__PURE__ */ React.createElement(import_remix3.Scripts, null)));
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    title: "Kamra"
  }), /* @__PURE__ */ React.createElement("meta", {
    descriptions: "webhome"
  }), /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement(import_styled_components5.ThemeProvider, {
    theme: themes_default.peach
  }, /* @__PURE__ */ React.createElement(global_default, null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout_default, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), false)));
}

// route:/home/nathias/Code/kamra/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => routes_default
});
init_react();
var import_remix4 = __toESM(require_remix());
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, "Component level error.", /* @__PURE__ */ React.createElement(import_remix4.Scripts, null)));
}
var Home = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};
var routes_default = Home;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "9f4b780c", "entry": { "module": "/build/entry.client-UY7B5E6U.js", "imports": ["/build/_shared/chunk-UGIEVM7Y.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-HU7DCHQH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-4EWRUDMR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-9F4B780C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
