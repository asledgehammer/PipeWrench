/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.SurvivalGuide {
    /** @customConstructor SurvivalGuideManager:new */
    export class SurvivalGuideManager extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      static blockSurvivalGuide: any;

      panel: any;

      constructor();

      RestoreLayout: ((name: any, layout: any) => any) | any;

      SaveLayout: ((name: any, layout: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnGameStart: () => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static OnNewGame: () => any;
    }
  }
  export namespace lua.client.SurvivalGuide.SurvivalGuideManager {
    /** @noSelf */
    export const doSurvivalGuide: () => any;
  }
}
