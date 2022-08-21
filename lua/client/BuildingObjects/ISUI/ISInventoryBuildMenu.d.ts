/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.ISUI {
    export abstract class ISInventoryBuildMenu {
      static [id: string]: any;

      /** @noSelf */
      static doBuildMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static onSpillDirt: (playerObj: any) => any;

      /** @noSelf */
      static onSpillGravel: (playerObj: any) => any;

      /** @noSelf */
      static onSpillSand: (playerObj: any) => any;

      /** @noSelf */
      static onTakeThing: (playerObj: any, groundType: any) => any;
    }
  }
  export namespace lua.client.BuildingObjects.ISUI.ISInventoryBuildMenu {}
}
