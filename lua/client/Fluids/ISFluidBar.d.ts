/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fluids {
    /** @customConstructor ISFluidBar:new */
    export class ISFluidBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      bubblesAlpha: any;

      bubblesTex: any;

      container: any;

      containerAdd: any;

      containerMixed: any;

      detailInnerColor: any;

      differenceAlpha: any;

      doToolTip: any;

      drawMeasures: any;

      fluidAddColor: any;

      fluidColor: any;

      gradientAlpha: any;

      gradientTex: any;

      innerH: any;

      innerW: any;

      innerX: any;

      innerY: any;

      player: any;

      ratioNew: any;

      ratioOrig: any;

      resource: any;

      showMixed: any;

      toolTip: any;

      triangleWidth: any;

      constructor(x: any, y: any, width: any, height: any, _player: any, _resource: any);

      activateToolTip(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      deactivateToolTip(...__args: never[]): any;

      drawAmountLine(_y: any, ...__args: never[]): any;

      drawBubbles(_x: any, _y: any, _w: any, _h: any, _alpha: any, ...__args: never[]): any;

      drawTriangle(_size: any, _sx: any, _y: any, _col: any, _xmod: any, ...__args: never[]): any;

      getRatioY(_ratio: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      resetRatioNew(...__args: never[]): any;

      setContainer(_fluidContainer: any, ...__args: never[]): any;

      setContainerAdd(_fluidContainer: any, ...__args: never[]): any;

      setContainerMixed(_fluidContainer: any, _showMixed: any, ...__args: never[]): any;

      setRatioNew(_ratio: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Fluids.ISFluidBar {}
}
