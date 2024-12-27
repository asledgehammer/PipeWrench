/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISFitnessAction:new */
    export class ISFitnessAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      endMS: any;

      exeData: any;

      exeDataType: any;

      exercise: any;

      fitness: any;

      repnb: any;

      startMS: any;

      switchHandUsed: any;

      switchTime: any;

      timeToExe: any;

      constructor(character: any, exercise: any, timeToExe: any, exeData: any, exeDataType: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      exeLooped(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      serverStop(...__args: never[]): any;

      setFitnessSpeed(...__args: never[]): any;

      showHandModel(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISFitnessAction {}
}
