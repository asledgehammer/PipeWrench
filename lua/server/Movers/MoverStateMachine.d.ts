/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Movers {
    /** @customConstructor ISMoverStateMachine:new */
    export class ISMoverStateMachine extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      mover: any;

      moverInst: any;

      state: any;

      constructor(mover: any);

      changeState(_new_: any, ...__args: never[]): any;

      getCurrent(...__args: never[]): any;

      init(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.server.Movers.MoverStateMachine {}
}
