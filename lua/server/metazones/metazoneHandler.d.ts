/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.metazones {}
  export namespace lua.server.metazones.metazoneHandler {
    /** @noSelf */
    export const doMapZones: () => any;

    /** @noSelf */
    export const doSpawnOrigins: () => any;
  }
}
