/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions.Animal {
    /** @customConstructor ISCheckAnimalInsideTrailer:new */
    export class ISCheckAnimalInsideTrailer extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      vehicle: any;

      constructor(character: any, vehicle: any);
    }
  }
  export namespace lua.client.TimedActions.Animal.ISCheckAnimalInsideTrailer {}
}
