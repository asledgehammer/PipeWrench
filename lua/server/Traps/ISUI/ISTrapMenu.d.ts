/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Traps.ISUI {
    export abstract class ISTrapMenu {
      static [id: string]: any;

      /** @noSelf */
      static doTrapMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static onAddBait: (worldobjects: any, bait: any, trap: any, player: any) => any;

      /** @noSelf */
      static onCheckTrap: (worldobjects: any, trap: any, player: any) => any;

      /** @noSelf */
      static onPlaceTrap: (worldobjects: any, trap: any, player: any) => any;

      /** @noSelf */
      static onRemoveBait: (worldobjects: any, trap: any, player: any) => any;

      /** @noSelf */
      static onRemoveTrap: (worldobjects: any, trap: any, player: any) => any;
    }
  }
  export namespace lua.server.Traps.ISUI.ISTrapMenu {}
}
