import { c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, d as renderComponent, b as createAstro, r as renderSlot, f as renderHead } from './astro/server_BYyPrDyM.mjs';
import 'piccolore';
/* empty css                        */
import 'clsx';
/* empty css                        */
import { g as getImage, $ as $$Logo, a as $$Footer } from './Footer_D5KAvwUW.mjs';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec> <ul data-astro-cid-dmqpwcec> ${navLinks.map((link) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(link.href, "href")} class="nav-item" data-astro-cid-dmqpwcec> ${link.name} </a> </li>`)} </ul> </nav> `;
}, "/home/josh/crosskeystudios.com/src/components/Nav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Logo", Logo, { "alt": "Cross Key Studios logo", "width": "256", "data-astro-cid-3ef6ksr2": true })} </a> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-3ef6ksr2": true })} </header> `;
}, "/home/josh/crosskeystudios.com/src/components/Header.astro", void 0);

const hero_bg = new Proxy({"src":"/_astro/hero_bg.D-ueXjK2.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/josh/crosskeystudios.com/src/assets/hero_bg.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/josh/crosskeystudios.com/src/assets/hero_bg.png");
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title } = Astro2.props;
  const hero = await getImage({ src: hero_bg, format: "webp" });
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`--bg-img: url(${hero.src});`, "style")} data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-bbe6dxrz": true })} ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-bbe6dxrz": true })} <h1 data-astro-cid-bbe6dxrz>${title}</h1> ${renderSlot($$result, $$slots["default"])} <!-- <Image src={logo} alt="Cross Key Studios logo" width="256" /> --> </div> `;
}, "/home/josh/crosskeystudios.com/src/components/Hero.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-ivdev4kk> ${renderSlot($$result, $$slots["default"])} </main> `;
}, "/home/josh/crosskeystudios.com/src/components/Main.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, isHome = false } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Cross Key Studios</title><!-- <link rel="stylesheet" href="/style.css" /> -->${renderHead()}</head> <body> ${isHome ? renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}` : renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`} <!-- <Header /> --> ${renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/josh/crosskeystudios.com/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
