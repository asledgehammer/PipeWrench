/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISRevolverWeapon:new */
    export class ISRevolverWeapon extends lua.shared.Reloading.ISReloadableWeapon {
      [id: string]: any;
      static [id: string]: any;

      currentChamber: any;

      constructor();

      rotateCylinder: (() => any) | any;

      spinCylinder: (() => any) | any;
    }
  }
  export namespace lua.shared.Reloading.ISRevolverWeapon {}
}
