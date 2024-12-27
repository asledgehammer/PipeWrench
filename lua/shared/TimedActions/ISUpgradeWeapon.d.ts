/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISUpgradeWeapon:new */
    export class ISUpgradeWeapon extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      part: any;

      weapon: any;

      constructor(character: any, weapon: any, part: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISUpgradeWeapon {}
}
