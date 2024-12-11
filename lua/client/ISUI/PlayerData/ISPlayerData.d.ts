/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PlayerData {
    export abstract class ISPlayerData {
      static [id: string]: any;
    }
  }
  export namespace lua.client.ISUI.PlayerData.ISPlayerData {
    /** @noSelf */
    export const destroyAllPlayerData: () => any;
  }
}
