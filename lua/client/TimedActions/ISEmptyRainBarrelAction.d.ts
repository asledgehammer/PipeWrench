/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISEmptyRainBarrelAction:new */
    export class ISEmptyRainBarrelAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      sound: any;

      constructor(character: any, object: any);

      stopSound: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISEmptyRainBarrelAction {}
}
