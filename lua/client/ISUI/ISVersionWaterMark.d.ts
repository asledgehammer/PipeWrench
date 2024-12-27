/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor WaterMarkUI:new */
    export class WaterMarkUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      refreshNeeded: any;

      constructor(x: any, y: any, width: any, height: any);

      render(...__args: never[]): any;
    }

    export abstract class ISVersionWaterMark {
      static [id: string]: any;

      /** @noSelf */
      static doMsg: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISVersionWaterMark {}
}
