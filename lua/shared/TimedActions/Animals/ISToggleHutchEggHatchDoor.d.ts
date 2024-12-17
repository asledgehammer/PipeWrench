/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISToggleHutchEggHatchDoor:new */
    export class ISToggleHutchEggHatchDoor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hutch: any;

      sound: any;

      constructor(character: any, hutch: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISToggleHutchEggHatchDoor {}
}
