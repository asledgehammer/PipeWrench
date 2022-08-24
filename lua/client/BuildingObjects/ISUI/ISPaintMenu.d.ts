/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.ISUI {
    export abstract class ISPaintMenu {
      static [id: string]: any;

      /** @noSelf */
      static addSignOption: (subMenuPaint: any, name: any, wall: any, painting: any, r: any, g: any, b: any) => any;

      /** @noSelf */
      static doPaintMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static onPaint: (worldobjects: any, player: any, thumpable: any, painting: any) => any;

      /** @noSelf */
      static onPaintSign: (wall: any, player: any, painting: any, sign: any, r: any, g: any, b: any) => any;

      /** @noSelf */
      static onPlaster: (worldobjects: any, player: any, thumpable: any, square: any) => any;
    }
  }
  export namespace lua.client.BuildingObjects.ISUI.ISPaintMenu {}
}
