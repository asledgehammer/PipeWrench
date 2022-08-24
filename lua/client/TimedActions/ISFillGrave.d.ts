/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFillGrave:new */
    export class ISFillGrave extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      graves: any;

      shovel: any;

      sound: any;

      constructor(character: any, graves: any, time: any, shovel: any);

      changeSprite: ((square: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISFillGrave {}
}
