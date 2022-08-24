/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISPaintAction:new */
    export class ISPaintAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isThump: any;

      painting: any;

      paintPot: any;

      sound: any;

      thumpable: any;

      constructor(character: any, thumpable: any, paintPot: any, painting: any, time: any);
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISPaintAction {}
}
