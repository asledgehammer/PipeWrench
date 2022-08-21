/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISReloadableWeapon:new */
    export class ISReloadableWeapon extends lua.shared.Reloading.ISReloadable {
      [id: string]: any;
      static [id: string]: any;

      defaultAmmo: any;

      constructor();
    }
  }
  export namespace lua.shared.Reloading.ISReloadableWeapon {}
}
