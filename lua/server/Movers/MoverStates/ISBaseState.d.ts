/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Movers.MoverStates {
    /** @customConstructor ISBaseState:new */
    export class ISBaseState extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      during(...__args: never[]): any;

      enter(...__args: never[]): any;

      exit(...__args: never[]): any;

      isFinished(...__args: never[]): any;
    }
  }
  export namespace lua.server.Movers.MoverStates.ISBaseState {}
}
