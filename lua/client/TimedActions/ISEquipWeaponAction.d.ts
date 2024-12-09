/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISEquipWeaponAction:new */
    export class ISEquipWeaponAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fromHotbar: any;

      hotbar: any;

      ignoreHandsWounds: any;

      item: any;

      primary: any;

      sound: any;

      twoHands: any;

      useProgressBar: any;

      constructor(character: any, item: any, time: any, primary: any, twoHands: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      isAlreadyEquipped(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISEquipWeaponAction {}
}
