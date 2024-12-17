/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.BuildingObjects.TimedActions {
    /** @customConstructor ISShovelGround:new */
    export class ISShovelGround extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      emptyBag: any;

      item: any;

      newBag: any;

      newSprite: any;

      sandTile: any;

      sound: any;

      constructor(character: any, emptyBag: any, sandTile: any, newSprite: any, newBag: any);

      complete(...__args: never[]): any;

      shovelGround(sq: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.BuildingObjects.TimedActions.ISShovelGround {}
}
