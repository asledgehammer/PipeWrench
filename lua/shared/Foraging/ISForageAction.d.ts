/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Foraging {
    /** @customConstructor ISForageAction:new */
    export class ISForageAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      currentTime: any;

      discardItems: any;

      iconID: any;

      itemDef: any;

      itemType: any;

      started: any;

      targetContainer: any;

      constructor(character: any, iconID: any, targetContainer: any, discardItems: any, itemType: any);

      complete(...__args: never[]): any;

      forage(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Foraging.ISForageAction {}
}
