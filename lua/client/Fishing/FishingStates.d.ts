/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fishing {}
  export namespace lua.client.Fishing.FishingStates {
    /** @noSelf */
    export const start: () => any;

    /** @noSelf */
    export const stop: () => any;

    /** @noSelf */
    export const update: () => any;
  }
}
