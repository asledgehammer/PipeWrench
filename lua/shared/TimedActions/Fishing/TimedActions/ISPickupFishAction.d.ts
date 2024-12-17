/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Fishing.TimedActions {
    /** @customConstructor ISPickupFishAction:new */
    export class ISPickupFishAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      finishShowModel: any;

      fishInArm: any;

      fishInInv: any;

      isFish: any;

      rod: any;

      startShowModel: any;

      constructor(character: any, rod: any, fish: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      PickupFishUpdate(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Fishing.TimedActions.ISPickupFishAction {}
}
