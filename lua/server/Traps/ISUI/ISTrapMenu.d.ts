/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Traps.ISUI {
    export abstract class ISTrapMenu {
      static [id: string]: any;

      /** @noSelf */
      static addAnimalDebug: (trap: any, player: any, animal: any, ...__args: never[]) => any;

      /** @noSelf */
      static doTrapMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddBait: (worldobjects: any, bait: any, trap: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheckTrap: (worldobjects: any, trap: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPlaceTrap: (worldobjects: any, trap: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveBait: (worldobjects: any, trap: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveTrap: (worldobjects: any, trap: any, player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Traps.ISUI.ISTrapMenu {}
}
