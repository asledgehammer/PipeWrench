/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISVendorSpiral:new */
    export class ISVendorSpiral extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      renderTarget: any;

      rotation: any;

      texture: any;

      constructor(x: any, y: any, width: any, height: any, texture: any);

      render(...__args: never[]): any;

      renderToTarget(_target: any, ...__args: never[]): any;

      setRotation(_rot: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISVendorSpiral {}
}
