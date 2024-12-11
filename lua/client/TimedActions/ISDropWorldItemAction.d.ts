/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDropWorldItemAction:new */
    export class ISDropWorldItemAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isMultiple: any;

      item: any;

      rotation: any;

      sound: any;

      sq: any;

      srcContainer: any;

      xoffset: any;

      yoffset: any;

      zoffset: any;

      constructor(
        character: any,
        item: any,
        sq: any,
        xoffset: any,
        yoffset: any,
        zoffset: any,
        rotation: any,
        isMultiple: any,
      );
    }
  }
  export namespace lua.client.TimedActions.ISDropWorldItemAction {}
}
