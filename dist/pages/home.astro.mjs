import { c as createComponent, m as maybeRenderHead, r as renderSlot, a as renderTemplate, b as createAstro, d as renderComponent } from '../chunks/astro/server_BYyPrDyM.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_17E2q1yt.mjs';
import { $ as $$Section } from '../chunks/Section_BInf_gyK.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-dohjnao5> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/josh/crosskeystudios.com/src/components/Card.astro", void 0);

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/josh/crosskeystudios.com/src/components/Project.astro", void 0);

const $$Astro = createAstro();
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { name, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote data-astro-cid-fkbbckhy> ${renderSlot($$result, $$slots["default"])} <cite data-astro-cid-fkbbckhy>${name}, ${title}</cite> </blockquote> `;
}, "/home/josh/crosskeystudios.com/src/components/Testimonial.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cross Key Studios", "isHome": true }, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Section", $$Section, { "title": "What We Do" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "title": "" }, { "default": ($$result4) => renderTemplate`Web Dev` })} ${renderComponent($$result3, "Card", $$Card, { "title": "" }, { "default": ($$result4) => renderTemplate`UI/UX Design` })} ${renderComponent($$result3, "Card", $$Card, { "title": "" }, { "default": ($$result4) => renderTemplate`SEO & Marketting` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Portfolio" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Project", $$Project, { "title": "CR Vegan Eats", "href": "http://crveganeats.com", "image": "" })} ${renderComponent($$result3, "Project", $$Project, { "title": "http://tntcakery.con", "href": "TNT Cakery", "image": "" })} ${renderComponent($$result3, "Project", $$Project, { "title": "Ignite God's Lite", "href": "http://ignite-gods-lite.com", "image": "" })} ${renderComponent($$result3, "Section", $$Section, { "title": "Testimonials" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Testimonial", $$Testimonial, { "name": "Tina O.", "title": "Baker" }, { "default": ($$result5) => renderTemplate`
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam est
        similique debitis omnis magnam nobis consequuntur qui voluptas odio
        veritatis!
` })} ${renderComponent($$result4, "Testimonial", $$Testimonial, { "name": "Barbie L.", "title": "Fat woman" }, { "default": ($$result5) => renderTemplate`
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut veritatis
        commodi quasi aperiam cum quod, laboriosam libero adipisci autem.
        Consectetur.
` })} ${renderComponent($$result4, "Testimonial", $$Testimonial, { "name": "Cynthia and Ruben J.", "title": "Vegan hippies" }, { "default": ($$result5) => renderTemplate`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque
        cumque dolore expedita accusamus nobis consectetur, esse laboriosam
        numquam omnis!
` })} ` })} ` })} ` })}`;
}, "/home/josh/crosskeystudios.com/src/pages/home.astro", void 0);

const $$file = "/home/josh/crosskeystudios.com/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
