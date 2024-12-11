/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.ISUI {
    export abstract class ISInventoryBuildMenu {
      static [id: string]: any;

      /** @noSelf */
      static doBuildMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSpillDirt: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSpillGravel: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSpillSand: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTakeThing: (playerObj: any, groundType: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.BuildingObjects.ISUI.ISInventoryBuildMenu {}
}
