/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISFireplaceExtinguish:new */
    export class ISFireplaceExtinguish extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      constructor(character: any, fireplace: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISFireplaceExtinguish {}
}
