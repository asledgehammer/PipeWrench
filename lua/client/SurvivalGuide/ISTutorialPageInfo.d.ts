/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.SurvivalGuide {
    /** @customConstructor ISTutorialPageInfo:new */
    export class ISTutorialPageInfo extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      data: any;

      moreTextInfo: any;

      nextcondition: any;

      text: any;

      title: any;

      constructor(title: any, text: any, moreTextInfo: any, nextcondition: any);
    }

    /** @customConstructor ISTutorialSetInfo:new */
    export class ISTutorialSetInfo extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      currentPage: any;

      pageCount: any;

      pages: any;

      constructor();

      addPage: ((pagetitle: any, pagetext: any, moreTextInfo: any, pagenextcondition: any) => any) | any;

      applyPageToRichTextPanel: ((tutorialPanel: any) => any) | any;

      getCurrent: (() => any) | any;

      hasNext: (() => any) | any;

      hasPrevious: (() => any) | any;

      update: ((tutorialPanel: any) => any) | any;
    }
  }
  export namespace lua.client.SurvivalGuide.ISTutorialPageInfo {}
}
