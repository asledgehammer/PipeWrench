/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISRemoveWeaponUpgrade:new */
    export class ISRemoveWeaponUpgrade extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      partType: any;

      weapon: any;

      constructor(character: any, weapon: any, partType: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISRemoveWeaponUpgrade {}
}
