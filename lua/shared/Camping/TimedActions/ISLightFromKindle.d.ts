/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Camping.TimedActions {
    /** @customConstructor ISLightFromKindle:new */
    export class ISLightFromKindle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      isOutdoorsMan: any;

      item: any;

      plank: any;

      sound: any;

      constructor(character: any, plank: any, item: any, campfire: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      updateKindling(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Camping.TimedActions.ISLightFromKindle {}
}
