/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISEnergyBar:new */
    export class ISEnergyBar extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      borderColor: any;

      doRenderTexture: any;

      doToolTip: any;

      horizontalTexture: any;

      isVertical: any;

      moveWithMouse: any;

      padding: any;

      player: any;

      progressColor: any;

      resource: any;

      toolTip: any;

      verticalTexture: any;

      constructor(x: any, y: any, width: any, height: any, player: any, resource: any);

      activateToolTip(...__args: never[]): any;

      deactivateToolTip(...__args: never[]): any;

      getRenderTexture(...__args: never[]): any;

      noBackground(...__args: never[]): any;

      renderTexture(_x: any, _y: any, _w: any, _h: any, _vertical: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISEnergyBar {}
}
