declare namespace AboutPageModuleScssNamespace {
  export interface IAboutPageModuleScss {
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    content: string;
    'dark-blue': string;
    fadeIn: string;
    header: string;
    'img-profile': string;
    'page-background': string;
    separator: string;
    'smellsense-link': string;
    'subtitle-personality': string;
    'subtitle-profession': string;
    title: string;
    'title-header': string;
    wrapper: string;
  }
}

declare const AboutPageModuleScssModule: AboutPageModuleScssNamespace.IAboutPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutPageModuleScssNamespace.IAboutPageModuleScss;
};

export = AboutPageModuleScssModule;
