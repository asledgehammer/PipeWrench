/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.BuildingObjects.TimedActions {
    /** @customConstructor ISPaintAction:new */
    export class ISPaintAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isThump: any;

      painting: any;

      paintPot: any;

      sound: any;

      thumpable: any;

      constructor(character: any, thumpable: any, paintPot: any, painting: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.BuildingObjects.TimedActions.ISPaintAction {}
}
