/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddFuel:new */
    export class ISAddFuel extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      petrol: any;

      sound: any;

      constructor(character: any, generator: any, petrolCan: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISAddFuel {}
}
