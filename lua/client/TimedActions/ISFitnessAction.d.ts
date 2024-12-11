/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFitnessAction:new */
    export class ISFitnessAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      endMS: any;

      exeData: any;

      exercise: any;

      fitness: any;

      fitnessUI: any;

      repnb: any;

      startMS: any;

      switchHandUsed: any;

      switchTime: any;

      timeToExe: any;

      constructor(character: any, exercise: any, timeToExe: any, fitnessUI: any, exeData: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      exeLooped(...__args: never[]): any;

      setFitnessSpeed(...__args: never[]): any;

      showHandModel(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISFitnessAction {}
}
