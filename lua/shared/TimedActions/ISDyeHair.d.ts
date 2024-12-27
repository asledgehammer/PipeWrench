/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDyeHair:new */
    export class ISDyeHair extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      beard: any;

      hairDye: any;

      constructor(character: any, hairDye: any, beard: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDyeHair {}
}
