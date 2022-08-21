/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISPaintSignAction:new */
    export class ISPaintSignAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      b: any;

      g: any;

      paintPot: any;

      r: any;

      sign: any;

      sound: any;

      wall: any;

      constructor(character: any, wall: any, paintPot: any, sign: any, r: any, g: any, b: any);
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISPaintSignAction {}
}
