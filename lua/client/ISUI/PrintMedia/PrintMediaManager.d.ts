/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PrintMedia {
    /** @customConstructor PrintMediaManager:new */
    export class PrintMediaManager extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      panel: any;

      constructor();

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.PrintMedia.PrintMediaManager {
    /** @noSelf */
    export const doPrintMediaDebug: () => any;
  }
}
