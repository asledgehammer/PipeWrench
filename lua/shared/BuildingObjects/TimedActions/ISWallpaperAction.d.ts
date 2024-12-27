/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.BuildingObjects.TimedActions {
    /** @customConstructor ISWallpaperAction:new */
    export class ISWallpaperAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isThump: any;

      papering: any;

      sound: any;

      sprite: any;

      thumpable: any;

      wallpaper: any;

      wallType: any;

      constructor(character: any, thumpable: any, wallpaper: any, papering: any);

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.BuildingObjects.TimedActions.ISWallpaperAction {}
}
