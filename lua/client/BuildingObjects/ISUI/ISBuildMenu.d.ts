/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.ISUI {
    export abstract class ISBuildMenu {
      static [id: string]: any;

      static cheat: any;

      /** @noSelf */
      static buildRampsMenu: (subMenu: any, option: any, playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static doBuildMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCreateRamp: (playerNum: any, which: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDismantle: (worldobjects: any, player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.BuildingObjects.ISUI.ISBuildMenu {}
}
