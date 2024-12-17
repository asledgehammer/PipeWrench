/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.PZAPI {}
  export namespace lua.client.PZAPI.ModOptions {
    /** @noSelf */
    export const load: () => any;

    /** @noSelf */
    export const save: () => any;
  }
}
