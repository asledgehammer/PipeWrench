/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    export abstract class ReloadManager {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.Reloading.stormysReload {
    /** @noSelf */
    export const addShotgun: () => any;
  }
}
