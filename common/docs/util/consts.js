// ? Component Imports
import accordion from '../../macros/components/accordion.njk'
import banner from '../../macros/components/banner.njk'
import blurb from '../../macros/components/blurb.njk'
import breadcrumb from '../../macros/components/breadcrumb.njk'
import buttonGroup from '../../macros/components/button-group.njk'
import card from '../../macros/components/card.njk'
import darkMode from '../../macros/components/dark-mode.njk'
import inputGroup from '../../macros/components/input-group.njk'
import navbar from '../../macros/components/navbar.njk'
import strip from '../../macros/components/strip.njk'

// ? Region Imports
import bgCenterAction from '../../macros/regions/action/bg-center.njk'
import bgEndAction from '../../macros/regions/action/bg-end.njk'
import bgPatternAction from '../../macros/regions/action/bg-pattern.njk'
import bgStartAction from '../../macros/regions/action/bg-start.njk'
import gradientCenterAction from '../../macros/regions/action/gradient-center.njk'
import gradientEndAction from '../../macros/regions/action/gradient-end.njk'
import gradientStartAction from '../../macros/regions/action/gradient-start.njk'
import imgCenterAction from '../../macros/regions/action/img-center.njk'
import imgEndAction from '../../macros/regions/action/img-end.njk'
import imgStartAction from '../../macros/regions/action/img-start.njk'
import inlineAction from '../../macros/regions/action/inline.njk'
import simpleEndAction from '../../macros/regions/action/simple-end.njk'
import simpleStartAction from '../../macros/regions/action/simple-start.njk'
import simpleCenterAction from '../../macros/regions/action/simple-center.njk'
import splitEndAction from '../../macros/regions/action/split-end.njk'
import splitStartAction from '../../macros/regions/action/split-start.njk'
import tiles2EndAction from '../../macros/regions/action/tiles-2-end.njk'
import tiles2StartAction from '../../macros/regions/action/tiles-2-start.njk'
import tiles3EndAction from '../../macros/regions/action/tiles-3-end.njk'
import tiles3StartAction from '../../macros/regions/action/tiles-3-start.njk'
import listStartAction from '../../macros/regions/action/list-start.njk'
import listEndAction from '../../macros/regions/action/list-end.njk'

import accordionFaq from '../../macros/regions/faq/accordion.njk'
import blurbGrid2Faq from '../../macros/regions/faq/blurb-grid-2.njk'
import blurbGrid3Faq from '../../macros/regions/faq/blurb-grid-3.njk'
import cardGrid2Faq from '../../macros/regions/faq/card-grid-2.njk'
import cardGrid3Faq from '../../macros/regions/faq/card-grid-3.njk'
import inlineFaq from '../../macros/regions/faq/inline.njk'
import offsetFaq from '../../macros/regions/faq/offset.njk'

import bgPatternFeature from '../../macros/regions/feature/bg-pattern.njk'
import blurbGridFeature from '../../macros/regions/feature/blurb-grid.njk'
import cardGridFeature from '../../macros/regions/feature/card-grid.njk'
import descriptionFeature from '../../macros/regions/feature/description.njk'
import imgEndFeature from '../../macros/regions/feature/img-end.njk'
import listStartFeature from '../../macros/regions/feature/list-start.njk'
import listEndFeature from '../../macros/regions/feature/list-end.njk'
import listFeature from '../../macros/regions/feature/list.njk'
import offsetGridFeature from '../../macros/regions/feature/offset-grid.njk'
import offsetListStartFeature from '../../macros/regions/feature/offset-list-start.njk'
import offsetListEndFeature from '../../macros/regions/feature/offset-list-end.njk'
import imgStartFeature from '../../macros/regions/feature/img-start.njk'

import inlineFooter from '../../macros/regions/footer/inline.njk'
import missionBgFooter from '../../macros/regions/footer/mission-bg.njk'
import missionFooter from '../../macros/regions/footer/mission.njk'
import newsletterBgFooter from '../../macros/regions/footer/newsletter-bg.njk'
import newsletterFooter from '../../macros/regions/footer/newsletter.njk'
import simpleBgFooter from '../../macros/regions/footer/simple-bg.njk'
import simpleFooter from '../../macros/regions/footer/simple.njk'

import centerForm from '../../macros/regions/form/center.njk'
import splitEndForm from '../../macros/regions/form/split-end.njk'
import splitStartForm from '../../macros/regions/form/split-start.njk'

import cardGridGallery from '../../macros/regions/gallery/card-grid.njk'
import imgGridGallery from '../../macros/regions/gallery/img-grid.njk'
import masonryGallery from '../../macros/regions/gallery/masonry.njk'
import startGallery from '../../macros/regions/gallery/start.njk'
import stackGallery from '../../macros/regions/gallery/stack.njk'
import textGridGallery from '../../macros/regions/gallery/text-grid.njk'

import centerHeader from '../../macros/regions/header/center.njk'
import endHeader from '../../macros/regions/header/end.njk'
import spacedHeader from '../../macros/regions/header/spaced.njk'
import stackedHeader from '../../macros/regions/header/stacked.njk'
import startHeader from '../../macros/regions/header/start.njk'

import angledBlockEndStartHero from '../../macros/regions/hero/angled-block-end-start.njk'
import angledBlockEndEndHero from '../../macros/regions/hero/angled-block-end-end.njk'
import angledBlockStartStartHero from '../../macros/regions/hero/angled-block-start-start.njk'
import angledBlockStartEndHero from '../../macros/regions/hero/angled-block-start-end.njk'
import bgCenterHero from '../../macros/regions/hero/bg-center.njk'
import bgEndHero from '../../macros/regions/hero/bg-end.njk'
import bgStartHero from '../../macros/regions/hero/bg-start.njk'
import gradientCenterHero from '../../macros/regions/hero/gradient-center.njk'
import gradientEndHero from '../../macros/regions/hero/gradient-end.njk'
import gradientStartHero from '../../macros/regions/hero/gradient-start.njk'
import imgCenterHero from '../../macros/regions/hero/img-center.njk'
import imgEndHero from '../../macros/regions/hero/img-end.njk'
import imgStartHero from '../../macros/regions/hero/img-start.njk'
import splitEndHero from '../../macros/regions/hero/split-end.njk'
import splitStartHero from '../../macros/regions/hero/split-start.njk'
import tiles2StartHero from '../../macros/regions/hero/tiles-2-start.njk'
import tiles2EndHero from '../../macros/regions/hero/tiles-2-end.njk'
import tiles3StartHero from '../../macros/regions/hero/tiles-3-start.njk'
import tiles3EndHero from '../../macros/regions/hero/tiles-3-end.njk'

import centerIntro from '../../macros/regions/intro/center.njk'
import startIntro from '../../macros/regions/intro/start.njk'
import endIntro from '../../macros/regions/intro/end.njk'
import imgStartIntro from '../../macros/regions/intro/img-start.njk'
import imgEndIntro from '../../macros/regions/intro/img-end.njk'

import gridLogos from '../../macros/regions/logos/grid.njk'
import simpleLogos from '../../macros/regions/logos/simple.njk'
import splitLogos from '../../macros/regions/logos/split.njk'

// pricing single, tiers-dividers, tiers

import descriptionStartStats from '../../macros/regions/stats/description-start.njk'
import descriptionEndStats from '../../macros/regions/stats/description-end.njk'
import imgEndStats from '../../macros/regions/stats/img-end.njk'
import imgStartStats from '../../macros/regions/stats/img-start.njk'
import inlineStats from '../../macros/regions/stats/inline.njk'
import splitEndStats from '../../macros/regions/stats/split-end.njk'
import splitStartStats from '../../macros/regions/stats/split-start.njk'

import avatarEndTestimonials from '../../macros/regions/testimonials/avatar-end.njk'
import avatarStartTestimonials from '../../macros/regions/testimonials/avatar-start.njk'
import quoteCenterTestimonials from '../../macros/regions/testimonials/quote-center.njk'
import quoteSimpleTestimonials from '../../macros/regions/testimonials/quote-simple.njk'

import blockStaggeredTimeline from '../../macros/regions/timeline/block-staggered.njk'
import blockStartTimeline from '../../macros/regions/timeline/block-start.njk'
import inlineStaggeredTimeline from '../../macros/regions/timeline/inline-staggered.njk'
import inlineStartTimeline from '../../macros/regions/timeline/inline-start.njk'

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
  strip
}

export const regions = {
  gallery: {
    'card-grid-gallery': cardGridGallery,
    'masonry-gallery': masonryGallery,
    'img-grid-gallery': imgGridGallery,
    'start-gallery': startGallery,
    'stack-gallery': stackGallery,
    'text-grid-gallery': textGridGallery
  },
  form: {
    'center-form': centerForm,
    'split-start-form': splitStartForm,
    'split-end-form': splitEndForm
  },
  action: {
    'bg-pattern-action': bgPatternAction,
    'bg-center-action': bgCenterAction,
    'gradient-center-action': gradientCenterAction,
    'img-center-action': imgCenterAction,
    'inline-action': inlineAction,
    'bg-start-action': bgStartAction,
    'gradient-start-action': gradientStartAction,
    'img-start-action': imgStartAction,
    'bg-end-action': bgEndAction,
    'gradient-end-action': gradientEndAction,
    'img-end-action': imgEndAction,
    'simple-start-action': simpleStartAction,
    'simple-end-action': simpleEndAction,
    'simple-center-action': simpleCenterAction,
    'split-start-action': splitStartAction,
    'split-end-action': splitEndAction,
    'tiles-2-start-action': tiles2StartAction,
    'tiles-2-end-action': tiles2EndAction,
    'tiles-3-start-action': tiles3StartAction,
    'tiles-3-end-action': tiles3EndAction,
    'list-start-action': listStartAction,
    'list-end-action': listEndAction
  },
  faq: {
    'accordion-faq': accordionFaq,
    'blurb-grid-2-faq': blurbGrid2Faq,
    'blurb-grid-3-faq': blurbGrid3Faq,
    'card-grid-2-faq': cardGrid2Faq,
    'card-grid-3-faq': cardGrid3Faq,
    'inline-faq': inlineFaq,
    'offset-faq': offsetFaq
  },
  footer: {
    'inline-footer': inlineFooter,
    'mission-bg-footer': missionBgFooter,
    'mission-footer': missionFooter,
    'newsletter-bg-footer': newsletterBgFooter,
    'newsletter-footer': newsletterFooter,
    'simple-bg-footer': simpleBgFooter,
    'simple-footer': simpleFooter
  },
  intro: {
    'center-intro': centerIntro,
    'end-intro': endIntro,
    'start-intro': startIntro,
    'img-end-intro': imgEndIntro,
    'img-start-intro': imgStartIntro
  },
  hero: {
    'angled-block-end-end-hero': angledBlockEndEndHero,
    'angled-block-end-start-hero': angledBlockEndStartHero,
    'angled-block-start-end-hero': angledBlockStartEndHero,
    'angled-block-start-start-hero': angledBlockStartStartHero,
    'bg-center-hero': bgCenterHero,
    'gradient-center-hero': gradientCenterHero,
    'img-center-hero': imgCenterHero,
    'bg-start-hero': bgStartHero,
    'gradient-start-hero': gradientStartHero,
    'img-start-hero': imgStartHero,
    'bg-end-hero': bgEndHero,
    'gradient-end-hero': gradientEndHero,
    'img-end-hero': imgEndHero,
    'split-start-hero': splitStartHero,
    'split-end-hero': splitEndHero,
    'tiles-2-start-hero': tiles2StartHero,
    'tiles-2-end-hero': tiles2EndHero,
    'tiles-3-start-hero': tiles3StartHero,
    'tiles-3-end-hero': tiles3EndHero
  },
  feature: {
    'bg-pattern-feature': bgPatternFeature,
    'blurb-grid-feature': blurbGridFeature,
    'card-grid-feature': cardGridFeature,
    'description-feature': descriptionFeature,
    'img-start-feature': imgStartFeature,
    'list-feature': listFeature,
    'offset-grid-feature': offsetGridFeature,
    'offset-list-start-feature': offsetListStartFeature,
    'offset-list-end-feature': offsetListEndFeature,
    'img-end-feature': imgEndFeature,
    'list-start-feature': listStartFeature,
    'list-end-feature': listEndFeature
  },
  logos: {
    'grid-logos': gridLogos,
    'simple-logos': simpleLogos,
    'split-logos': splitLogos
  },
  header: {
    'center-header': centerHeader,
    'end-header': endHeader,
    'spaced-header': spacedHeader,
    'stacked-header': stackedHeader,
    'start-header': startHeader
  },
  stats: {
    'description-start-stats': descriptionStartStats,
    'description-end-stats': descriptionEndStats,
    'img-end-stats': imgEndStats,
    'img-start-stats': imgStartStats,
    'inline-stats': inlineStats,
    'split-end-stats': splitEndStats,
    'split-start-stats': splitStartStats
  },
  testimonials: {
    'avatar-end-testimonials': avatarEndTestimonials,
    'avatar-start-testimonials': avatarStartTestimonials,
    'quote-center-testimonials': quoteCenterTestimonials,
    'quote-simple-testimonials': quoteSimpleTestimonials
  },
  timeline: {
    'block-staggered-timeline': blockStaggeredTimeline,
    'block-start-timeline': blockStartTimeline,
    'inline-staggered-timeline': inlineStaggeredTimeline,
    'inline-start-timeline': inlineStartTimeline
  },
  pricing: {},
  map: {},
  social: {}
}

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
  footer
} = regions

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
    action
  },
  blog: {
    hero,
    grid: gallery,
    action
  },
  contact: {
    intro,
    form,
    faq,
    map,
    newsletter: action,
    action
  },
  donate: {
    hero,
    why: feature,
    form,
    form2: form,
    action
  },
  error: {
    error: {
      'bg-center-action': bgCenterAction,
      'simple-action': simpleCenterAction,
      'split-start-action': splitStartAction
    }
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
    action6: action
  },
  header: { header },
  impact: {
    hero,
    category1: { ...testimonials, ...feature, ...stats },
    category2: { ...testimonials, ...feature, ...stats },
    category3: { ...testimonials, ...feature, ...stats },
    category4: { ...testimonials, ...feature, ...stats },
    goals: { ...feature, ...gallery },
    action
  },
  landing: {
    hero,
    problem: { ...intro, ...feature },
    guide: feature,
    plan: { ...feature, ...gallery },
    action,
    stakes: { ...intro, ...feature },
    success: { ...testimonials, ...feature },
    freebie: action
  },
  portfolio: {
    hero,
    grid: gallery,
    testimonials,
    action
  },
  post: {
    intro,
    copy,
    action
  },
  program: {
    hero,
    intro,
    approach: { ...intro, ...feature },
    success: { ...testimonials, ...feature, ...stats },
    faq,
    action
  },
  programs: {
    hero,
    intro,
    program1: action,
    program2: action,
    program3: action,
    program4: action,
    action
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
    action
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
    action
  },
  services: {
    hero,
    intro,
    service1: action,
    service2: action,
    service3: action,
    service4: action,
    testimonials,
    action
  }
}

export const themes = [
  'background',
  'background-inverse',
  'surface',
  'surface-inverse',
  'primary',
  'primary-container',
  'secondary',
  'secondary-container',
  'tertiary',
  'tertiary-container',
  'error',
  'error-container'
]
