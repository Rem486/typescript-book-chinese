(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"非-react-jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非-react-jsx","aria-hidden":"true"}},[t._v("#")]),t._v(" 非 React JSX")]),t._v(" "),a("p",[t._v("TypeScript 使你能够以类型安全的方式使用在 React 中使用 JSX 之外的其他方式，以下列出了一些可自定义点，但是请注意，这些适用于 UI 框架的作者：")]),t._v(" "),a("ul",[a("li",[t._v("你可以 "),a("code",[t._v('"jsx": "preserve"')]),t._v(" 选项来禁用 "),a("code",[t._v("react")]),t._v(" 样式触发，这意味着，JSX 将按原样触发，然后你可以使用自定义转化器来转化 JSX 部分；")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("JSX")]),t._v(" 全局模块：\n"),a("ul",[a("li",[t._v("你可以通过定制 "),a("code",[t._v("JSX.IntrinsicElements")]),t._v(" 的接口成员来控制哪些 HTML 标签是可取的，以及如何对其进行类型检查；")]),t._v(" "),a("li",[t._v("当你在组件中使用：\n"),a("ul",[a("li",[t._v("你可以通过自定义默认的 "),a("code",[t._v("interface ElementClass extends React.Component<any, any> { }")]),t._v(" 声明文件来控制哪个 "),a("code",[t._v("class")]),t._v(" 必须由组件继承；")]),t._v(" "),a("li",[t._v("你可以通过自定义 "),a("code",[t._v("declare module JSX { interface ElementAttributesProperty { props: {} } }")]),t._v(" 声明文件来控制使用的哪个属性（property）来检查特性（attribute）（默认是 "),a("code",[t._v("props")]),t._v("）。")])])])])])]),t._v(" "),a("h2",{attrs:{id:"jsxfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsxfactory","aria-hidden":"true"}},[t._v("#")]),t._v(" jsxFactory")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("--jsxFactory <JSX factory Name>")]),t._v(" 与 "),a("code",[t._v("--jsx react")]),t._v("，能让你不同于默认 "),a("code",[t._v("React")]),t._v(" 的方式使用 JSX 工厂函数。")]),t._v(" "),a("p",[t._v("这个新的工厂函数名字习惯被称之为 "),a("code",[t._v("createElement")]),t._v(" 函数。")]),t._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" jsxFactory "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'jsxFactory'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" div "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("Hello JSX!")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用编译：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("tsc "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("jsx react "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("reactNamespace jsxFactory "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("m commonJS\n")])])]),a("p",[t._v("编译结果：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsxFactory_1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'jsxFactory'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" jsxFactory_1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsxFactory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'div'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello JSX!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"jsx-编译提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-编译提示","aria-hidden":"true"}},[t._v("#")]),t._v(" jsx 编译提示")]),t._v(" "),a("p",[t._v("你甚至可以使用"),a("code",[t._v("jsxPragma")]),t._v(" 为每个文件指定不同的 "),a("code",[t._v("jsxFactory")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/** @jsx jsxFactory */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" jsxFactory "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'jsxFactory'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("Hello JSX!")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在 jsx 编译提示中，配合 "),a("code",[t._v("--jsx react")]),t._v(" 命令，这个文件将会被触发使用工厂函数：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsxFactory_1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'jsxFactory'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" jsxFactory_1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsxFactory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'div'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello JSX!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="nonReactJSX.md";s.default=e.exports}}]);