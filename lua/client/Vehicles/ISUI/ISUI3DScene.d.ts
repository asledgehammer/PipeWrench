/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISUI3DScene:new */
    export class ISUI3DScene extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      borderColor: any;

      mouseDown: any;

      constructor(x: any, y: any, width: any, height: any);

      getView(...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      setView(name: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISUI3DScene {}
}
