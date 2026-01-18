import { c as createComponent, b as createAstro, e as addAttribute, f as renderHead, r as renderSlot, d as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BYyPrDyM.mjs';
import 'piccolore';
/* empty css                                */
import { a as $$Footer, $ as $$Logo } from '../chunks/Footer_D5KAvwUW.mjs';
/* empty css                                 */
import { $ as $$Section } from '../chunks/Section_BInf_gyK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Soon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Soon;
  const { title, isHome = false } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-fmvwl3jv> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Cross Key Studios</title><!-- <link rel="stylesheet" href="/style.css" /> -->${renderHead()}</head> <body data-astro-cid-fmvwl3jv> <main data-astro-cid-fmvwl3jv>${renderSlot($$result, $$slots["default"])}</main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-fmvwl3jv": true })} </body></html>`;
}, "/home/josh/crosskeystudios.com/src/layouts/Soon.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Soon, { "title": "Cross Key Studios", "isHome": true }, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Logo", $$Logo, {})} ${renderComponent($$result2, "Section", $$Section, { "title": "Coming soon..." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
Until then, contact <a href="mailto:info@crosskeystudios.com">info@crosskeystudios.com</a> or call
<a href="tel:8027677539">80-CROSS-KEY</a> </p> ` })} ` })}`;
}, "/home/josh/crosskeystudios.com/src/pages/index.astro", void 0);

const $$file = "/home/josh/crosskeystudios.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
