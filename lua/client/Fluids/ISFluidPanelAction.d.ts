/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fluids {
    /** @customConstructor ISFluidPanelAction:new */
    export class ISFluidPanelAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      container: any;

      panelClass: any;

      source: any;

      constructor(character: any, _container: any, _panelClass: any, isSource: any);
    }
  }
  export namespace lua.client.Fluids.ISFluidPanelAction {}
}
