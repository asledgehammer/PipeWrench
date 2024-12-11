/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Items {
    export abstract class NoContainerFillRooms {
      static [id: string]: any;
    }

    export abstract class WeaponUpgrades {
      static [id: string]: any;
    }
  }
  export namespace lua.server.Items.SuburbsDistributions {}
}
