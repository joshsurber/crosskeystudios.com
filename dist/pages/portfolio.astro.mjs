import { c as createComponent, d as renderComponent, a as renderTemplate } from '../chunks/astro/server_BYyPrDyM.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_17E2q1yt.mjs';
export { renderers } from '../renderers.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ` })}`;
}, "/home/josh/crosskeystudios.com/src/pages/portfolio.astro", void 0);

const $$file = "/home/josh/crosskeystudios.com/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
