/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.SurvivalGuide {
    /** @customConstructor SurvivalGuideManager:new */
    export class SurvivalGuideManager extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      static blockSurvivalGuide: any;

      panel: any;

      constructor();

      RestoreLayout(name: any, layout: any, ...__args: never[]): any;

      SaveLayout(name: any, layout: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnNewGame: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.SurvivalGuide.SurvivalGuideManager {
    /** @noSelf */
    export const doSurvivalGuide: () => any;
  }
}
