/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISEquipWeaponAction:new */
    export class ISEquipWeaponAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fromHotbar: any;

      ignoreHandsWounds: any;

      item: any;

      primary: any;

      sound: any;

      twoHands: any;

      useProgressBar: any;

      constructor(character: any, item: any, maxTime: any, primary: any, twoHands: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      isAlreadyEquipped(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISEquipWeaponAction {}
}
