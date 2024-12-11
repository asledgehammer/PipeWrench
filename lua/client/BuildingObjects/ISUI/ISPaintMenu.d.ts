/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.ISUI {
    export abstract class ISPaintMenu {
      static [id: string]: any;

      /** @noSelf */
      static addSignOption: (
        subMenuPaint: any,
        name: any,
        wall: any,
        painting: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doPaintMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPaint: (worldobjects: any, player: any, thumpable: any, painting: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPaintSign: (
        wall: any,
        player: any,
        painting: any,
        sign: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onPlaster: (worldobjects: any, player: any, thumpable: any, square: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.BuildingObjects.ISUI.ISPaintMenu {}
}
