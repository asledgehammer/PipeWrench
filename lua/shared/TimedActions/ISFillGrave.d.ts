/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISFillGrave:new */
    export class ISFillGrave extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      graves: any;

      item: any;

      sound: any;

      constructor(character: any, graves: any, shovel: any);

      changeSprite(square: any, ...__args: never[]): any;

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISFillGrave {}
}
