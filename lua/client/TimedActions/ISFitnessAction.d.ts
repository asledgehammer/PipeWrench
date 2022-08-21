/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFitnessAction:new */
    export class ISFitnessAction extends lua.shared.TimedActions.ISBaseTimedAction {
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

      animEvent: ((event: any, parameter: any) => any) | any;

      exeLooped: (() => any) | any;

      setFitnessSpeed: (() => any) | any;

      showHandModel: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISFitnessAction {}
}
