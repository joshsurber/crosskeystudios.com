import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderSlot, a as renderTemplate } from './astro/server_BYyPrDyM.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <h2>${title}</h2> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/josh/crosskeystudios.com/src/components/Section.astro", void 0);

export { $$Section as $ };
