/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISShovelGround:new */
    export class ISShovelGround extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      emptyBag: any;

      newBag: any;

      newSprite: any;

      sandTile: any;

      sound: any;

      constructor(character: any, emptyBag: any, sandTile: any, newSprite: any, newBag: any);
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISShovelGround {}
}
