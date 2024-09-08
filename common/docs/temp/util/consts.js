// ? Component Imports
import accordion from "../../macros/archive/components/accordion.njk";
import banner from "../../macros/archive/components/banner.njk";
import blurb from "../../macros/archive/components/blurb.njk";
import breadcrumb from "../../macros/archive/components/breadcrumb.njk";
import buttonGroup from "../../macros/archive/components/button-group.njk";
import card from "../../macros/archive/components/card.njk";
import darkMode from "../../macros/archive/components/dark-mode.njk";
import inputGroup from "../../macros/archive/components/input-group.njk";
import navbar from "../../macros/archive/components/navbar.njk";
import strip from "../../macros/archive/components/strip.njk";

// ? Region Imports
import bgCenterAction from "../../macros/archive/regions/action/bg-center.njk";
import bgEndAction from "../../macros/archive/regions/action/bg-end.njk";
import bgPatternAction from "../../macros/archive/regions/action/bg-pattern.njk";
import bgStartAction from "../../macros/archive/regions/action/bg-start.njk";
import gradientCenterAction from "../../macros/archive/regions/action/gradient-center.njk";
import gradientEndAction from "../../macros/archive/regions/action/gradient-end.njk";
import gradientStartAction from "../../macros/archive/regions/action/gradient-start.njk";
import imgCenterAction from "../../macros/archive/regions/action/img-center.njk";
import imgEndAction from "../../macros/archive/regions/action/img-end.njk";
import imgStartAction from "../../macros/archive/regions/action/img-start.njk";
import inlineAction from "../../macros/archive/regions/action/inline.njk";
import simpleEndAction from "../../macros/archive/regions/action/simple-end.njk";
import simpleStartAction from "../../macros/archive/regions/action/simple-start.njk";
import simpleCenterAction from "../../macros/archive/regions/action/simple-center.njk";
import splitEndAction from "../../macros/archive/regions/action/split-end.njk";
import splitStartAction from "../../macros/archive/regions/action/split-start.njk";
import tiles2EndAction from "../../macros/archive/regions/action/tiles-2-end.njk";
import tiles2StartAction from "../../macros/archive/regions/action/tiles-2-start.njk";
import tiles3EndAction from "../../macros/archive/regions/action/tiles-3-end.njk";
import tiles3StartAction from "../../macros/archive/regions/action/tiles-3-start.njk";
import listStartAction from "../../macros/archive/regions/action/list-start.njk";
import listEndAction from "../../macros/archive/regions/action/list-end.njk";

import accordionFaq from "../../macros/archive/regions/faq/accordion.njk";
import blurbGrid2Faq from "../../macros/archive/regions/faq/blurb-grid-2.njk";
import blurbGrid3Faq from "../../macros/archive/regions/faq/blurb-grid-3.njk";
import cardGrid2Faq from "../../macros/archive/regions/faq/card-grid-2.njk";
import cardGrid3Faq from "../../macros/archive/regions/faq/card-grid-3.njk";
import inlineFaq from "../../macros/archive/regions/faq/inline.njk";
import offsetFaq from "../../macros/archive/regions/faq/offset.njk";

import bgPatternFeature from "../../macros/archive/regions/feature/bg-pattern.njk";
import blurbGridFeature from "../../macros/archive/regions/feature/blurb-grid.njk";
import cardGridFeature from "../../macros/archive/regions/feature/card-grid.njk";
import descriptionFeature from "../../macros/archive/regions/feature/description.njk";
import imgEndFeature from "../../macros/archive/regions/feature/img-end.njk";
import listStartFeature from "../../macros/archive/regions/feature/list-start.njk";
import listEndFeature from "../../macros/archive/regions/feature/list-end.njk";
import listFeature from "../../macros/archive/regions/feature/list.njk";
import offsetGridFeature from "../../macros/archive/regions/feature/offset-grid.njk";
import offsetListStartFeature from "../../macros/archive/regions/feature/offset-list-start.njk";
import offsetListEndFeature from "../../macros/archive/regions/feature/offset-list-end.njk";
import imgStartFeature from "../../macros/archive/regions/feature/img-start.njk";

import inlineFooter from "../../macros/archive/regions/footer/inline.njk";
import missionBgFooter from "../../macros/archive/regions/footer/mission-bg.njk";
import missionFooter from "../../macros/archive/regions/footer/mission.njk";
import newsletterBgFooter from "../../macros/archive/regions/footer/newsletter-bg.njk";
import newsletterFooter from "../../macros/archive/regions/footer/newsletter.njk";
import simpleBgFooter from "../../macros/archive/regions/footer/simple-bg.njk";
import simpleFooter from "../../macros/archive/regions/footer/simple.njk";

import centerForm from "../../macros/archive/regions/form/center.njk";
import splitEndForm from "../../macros/archive/regions/form/split-end.njk";
import splitStartForm from "../../macros/archive/regions/form/split-start.njk";

import cardGridGallery from "../../macros/archive/regions/gallery/card-grid.njk";
import imgGridGallery from "../../macros/archive/regions/gallery/img-grid.njk";
import startGallery from "../../macros/archive/regions/gallery/start.njk";
import stackGallery from "../../macros/archive/regions/gallery/stack.njk";
import textGridGallery from "../../macros/archive/regions/gallery/text-grid.njk";

import centerHeader from "../../macros/archive/regions/header/center.njk";
import endHeader from "../../macros/archive/regions/header/end.njk";
import spacedHeader from "../../macros/archive/regions/header/spaced.njk";
import stackedHeader from "../../macros/archive/regions/header/stacked.njk";
import startHeader from "../../macros/archive/regions/header/start.njk";

import angledBlockEndStartHero from "../../macros/archive/regions/hero/angled-block-end-start.njk";
import angledBlockEndEndHero from "../../macros/archive/regions/hero/angled-block-end-end.njk";
import angledBlockStartStartHero from "../../macros/archive/regions/hero/angled-block-start-start.njk";
import angledBlockStartEndHero from "../../macros/archive/regions/hero/angled-block-start-end.njk";
import bgCenterHero from "../../macros/archive/regions/hero/bg-center.njk";
import bgEndHero from "../../macros/archive/regions/hero/bg-end.njk";
import bgStartHero from "../../macros/archive/regions/hero/bg-start.njk";
import gradientCenterHero from "../../macros/archive/regions/hero/gradient-center.njk";
import gradientEndHero from "../../macros/archive/regions/hero/gradient-end.njk";
import gradientStartHero from "../../macros/archive/regions/hero/gradient-start.njk";
import imgCenterHero from "../../macros/archive/regions/hero/img-center.njk";
import imgEndHero from "../../macros/archive/regions/hero/img-end.njk";
import imgStartHero from "../../macros/archive/regions/hero/img-start.njk";
import splitEndHero from "../../macros/archive/regions/hero/split-end.njk";
import splitStartHero from "../../macros/archive/regions/hero/split-start.njk";
import tiles2StartHero from "../../macros/archive/regions/hero/tiles-2-start.njk";
import tiles2EndHero from "../../macros/archive/regions/hero/tiles-2-end.njk";
import tiles3StartHero from "../../macros/archive/regions/hero/tiles-3-start.njk";
import tiles3EndHero from "../../macros/archive/regions/hero/tiles-3-end.njk";

import centerIntro from "../../macros/archive/regions/intro/center.njk";
import startIntro from "../../macros/archive/regions/intro/start.njk";
import endIntro from "../../macros/archive/regions/intro/end.njk";
import imgStartIntro from "../../macros/archive/regions/intro/img-start.njk";
import imgEndIntro from "../../macros/archive/regions/intro/img-end.njk";

import gridLogos from "../../macros/archive/regions/logos/grid.njk";
import simpleLogos from "../../macros/archive/regions/logos/simple.njk";
import splitLogos from "../../macros/archive/regions/logos/split.njk";

// pricing single, tiers-dividers, tiers

import imgEndStats from "../../macros/archive/regions/stats/img-end.njk";
import imgStartStats from "../../macros/archive/regions/stats/img-start.njk";
import inlineStats from "../../macros/archive/regions/stats/inline.njk";
import splitEndStats from "../../macros/archive/regions/stats/split-end.njk";
import splitStartStats from "../../macros/archive/regions/stats/split-start.njk";

import avatarEndTestimonials from "../../macros/archive/regions/testimonials/avatar-end.njk";
import avatarStartTestimonials from "../../macros/archive/regions/testimonials/avatar-start.njk";
import quoteCenterTestimonials from "../../macros/archive/regions/testimonials/quote-center.njk";
import quoteSimpleTestimonials from "../../macros/archive/regions/testimonials/quote-simple.njk";

import blockStaggeredTimeline from "../../macros/archive/regions/timeline/block-staggered.njk";
import blockStartTimeline from "../../macros/archive/regions/timeline/block-start.njk";
import inlineStaggeredTimeline from "../../macros/archive/regions/timeline/inline-staggered.njk";
import inlineStartTimeline from "../../macros/archive/regions/timeline/inline-start.njk";

export const components = {
  accordion,
  banner,
  blurb,
  breadcrumb,
  buttonGroup,
  card,
  darkMode,
  inputGroup,
  navbar,
  strip,
};

export const regions = {
  gallery: {
    "card-grid-gallery": cardGridGallery,
    "img-grid-gallery": imgGridGallery,
    "start-gallery": startGallery,
    "stack-gallery": stackGallery,
    "text-grid-gallery": textGridGallery,
  },
  form: {
    "center-form": centerForm,
    "split-start-form": splitStartForm,
    "split-end-form": splitEndForm,
  },
  action: {
    "bg-pattern-action": bgPatternAction,
    "bg-center-action": bgCenterAction,
    "gradient-center-action": gradientCenterAction,
    "img-center-action": imgCenterAction,
    "inline-action": inlineAction,
    "bg-start-action": bgStartAction,
    "gradient-start-action": gradientStartAction,
    "img-start-action": imgStartAction,
    "bg-end-action": bgEndAction,
    "gradient-end-action": gradientEndAction,
    "img-end-action": imgEndAction,
    "simple-start-action": simpleStartAction,
    "simple-end-action": simpleEndAction,
    "simple-center-action": simpleCenterAction,
    "split-start-action": splitStartAction,
    "split-end-action": splitEndAction,
    "tiles-2-start-action": tiles2StartAction,
    "tiles-2-end-action": tiles2EndAction,
    "tiles-3-start-action": tiles3StartAction,
    "tiles-3-end-action": tiles3EndAction,
    "list-start-action": listStartAction,
    "list-end-action": listEndAction,
  },
  faq: {
    "accordion-faq": accordionFaq,
    "blurb-grid-2-faq": blurbGrid2Faq,
    "blurb-grid-3-faq": blurbGrid3Faq,
    "card-grid-2-faq": cardGrid2Faq,
    "card-grid-3-faq": cardGrid3Faq,
    "inline-faq": inlineFaq,
    "offset-faq": offsetFaq,
  },
  footer: {
    "inline-footer": inlineFooter,
    "mission-bg-footer": missionBgFooter,
    "mission-footer": missionFooter,
    "newsletter-bg-footer": newsletterBgFooter,
    "newsletter-footer": newsletterFooter,
    "simple-bg-footer": simpleBgFooter,
    "simple-footer": simpleFooter,
  },
  intro: {
    "center-intro": centerIntro,
    "end-intro": endIntro,
    "start-intro": startIntro,
    "img-end-intro": imgEndIntro,
    "img-start-intro": imgStartIntro,
  },
  hero: {
    "angled-block-end-end-hero": angledBlockEndEndHero,
    "angled-block-end-start-hero": angledBlockEndStartHero,
    "angled-block-start-end-hero": angledBlockStartEndHero,
    "angled-block-start-start-hero": angledBlockStartStartHero,
    "bg-center-hero": bgCenterHero,
    "gradient-center-hero": gradientCenterHero,
    "img-center-hero": imgCenterHero,
    "bg-start-hero": bgStartHero,
    "gradient-start-hero": gradientStartHero,
    "img-start-hero": imgStartHero,
    "bg-end-hero": bgEndHero,
    "gradient-end-hero": gradientEndHero,
    "img-end-hero": imgEndHero,
    "split-start-hero": splitStartHero,
    "split-end-hero": splitEndHero,
    "tiles-2-start-hero": tiles2StartHero,
    "tiles-2-end-hero": tiles2EndHero,
    "tiles-3-start-hero": tiles3StartHero,
    "tiles-3-end-hero": tiles3EndHero,
  },
  feature: {
    "bg-pattern-feature": bgPatternFeature,
    "blurb-grid-feature": blurbGridFeature,
    "card-grid-feature": cardGridFeature,
    "description-feature": descriptionFeature,
    "img-start-feature": imgStartFeature,
    "list-feature": listFeature,
    "offset-grid-feature": offsetGridFeature,
    "offset-list-start-feature": offsetListStartFeature,
    "offset-list-end-feature": offsetListEndFeature,
    "img-end-feature": imgEndFeature,
    "list-start-feature": listStartFeature,
    "list-end-feature": listEndFeature,
  },
  logos: {
    "grid-logos": gridLogos,
    "simple-logos": simpleLogos,
    "split-logos": splitLogos,
  },
  header: {
    "center-header": centerHeader,
    "end-header": endHeader,
    "spaced-header": spacedHeader,
    "stacked-header": stackedHeader,
    "start-header": startHeader,
  },
  stats: {
    "img-end-stats": imgEndStats,
    "img-start-stats": imgStartStats,
    "inline-stats": inlineStats,
    "split-end-stats": splitEndStats,
    "split-start-stats": splitStartStats,
  },
  testimonials: {
    "avatar-end-testimonials": avatarEndTestimonials,
    "avatar-start-testimonials": avatarStartTestimonials,
    "quote-center-testimonials": quoteCenterTestimonials,
    "quote-simple-testimonials": quoteSimpleTestimonials,
  },
  timeline: {
    "block-staggered-timeline": blockStaggeredTimeline,
    "block-start-timeline": blockStartTimeline,
    "inline-staggered-timeline": inlineStaggeredTimeline,
    "inline-start-timeline": inlineStartTimeline,
  },
  pricing: {},
  map: {},
  social: {},
};

const {
  gallery,
  hero,
  intro,
  feature,
  stats,
  testimonials,
  action,
  form,
  faq,
  map,
  pricing,
  timeline,
  copy,
  header,
  footer,
} = regions;

export const pageRegions = {
  about: {
    hero: { ...hero, ...intro },
    info1: { ...intro, ...feature, ...stats },
    info2: { ...intro, ...feature, ...stats },
    info3: { ...intro, ...feature, ...stats },
    skills: { ...gallery, ...feature, ...stats },
    portfolio: gallery,
    success: { ...testimonials, ...feature },
    grid: gallery,
    action,
  },
  blog: {
    hero,
    grid: gallery,
    action,
  },
  contact: {
    intro,
    form,
    faq,
    map,
    newsletter: action,
    action,
  },
  donate: {
    hero,
    why: feature,
    form,
    form2: form,
    action,
  },
  error: {
    error: {
      "bg-center-action": bgCenterAction,
      "simple-action": simpleCenterAction,
      "split-start-action": splitStartAction,
    },
  },
  footer: { footer },
  getInvolved: {
    hero,
    grid: gallery,
    action1: action,
    action2: action,
    action3: action,
    action4: action,
    action5: action,
    action6: action,
  },
  header: { header },
  impact: {
    hero,
    category1: { ...testimonials, ...feature, ...stats },
    category2: { ...testimonials, ...feature, ...stats },
    category3: { ...testimonials, ...feature, ...stats },
    category4: { ...testimonials, ...feature, ...stats },
    goals: { ...feature, ...gallery },
    action,
  },
  landing: {
    hero,
    problem: { ...intro, ...feature },
    guide: feature,
    plan: { ...feature, ...gallery },
    action,
    stakes: { ...intro, ...feature },
    success: { ...testimonials, ...feature },
    freebie: action,
  },
  portfolio: {
    hero,
    grid: gallery,
    testimonials,
    action,
  },
  post: {
    intro,
    copy,
    action,
  },
  program: {
    hero,
    intro,
    approach: { ...intro, ...feature },
    success: { ...testimonials, ...feature, ...stats },
    faq,
    action,
  },
  programs: {
    hero,
    intro,
    program1: action,
    program2: action,
    program3: action,
    program4: action,
    action,
  },
  resources: {
    hero,
    gallery1: gallery,
    gallery2: gallery,
    gallery3: gallery,
    gallery4: gallery,
    resource1: action,
    resource2: action,
    resource3: action,
    resource4: action,
    action,
  },
  service: {
    hero,
    problem: intro,
    description: feature,
    proof: { ...testimonials, ...gallery },
    process: timeline,
    pricing,
    transformation: feature,
    faq,
    action,
  },
  services: {
    hero,
    intro,
    service1: action,
    service2: action,
    service3: action,
    service4: action,
    testimonials,
    action,
  },
};

export const themes = [
  "background",
  "background-inverse",
  "surface",
  "surface-inverse",
  "primary",
  "primary-container",
  "secondary",
  "secondary-container",
  "tertiary",
  "tertiary-container",
  "error",
  "error-container",
];
