/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISBuildAction:new */
    export class ISBuildAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      static worldSoundTime: any;

      craftingBank: any;

      craftingSound: any;

      doSaw: any;

      hammer: any;

      hammerSound: any;

      item: any;

      north: any;

      sawSound: any;

      soundTime: any;

      spriteName: any;

      square: any;

      x: any;

      y: any;

      z: any;

      constructor(character: any, item: any, x: any, y: any, z: any, north: any, spriteName: any, time: any);

      faceLocation(...__args: never[]): any;

      isReachableThroughWindow(_square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISBuildAction {}
}
