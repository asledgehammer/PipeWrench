/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISProgressBar:new */
    export class ISProgressBar extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      borderColor: any;

      doRenderTexture: any;

      doTextBackdrop: any;

      font: any;

      horizontalTexture: any;

      isVertical: any;

      moveWithMouse: any;

      paddingBottom: any;

      paddingLeft: any;

      paddingRight: any;

      paddingTop: any;

      progress: any;

      progressColor: any;

      text: any;

      textBackColor: any;

      textColor: any;

      textH: any;

      textW: any;

      verticalTexture: any;

      constructor(x: any, y: any, width: any, height: any, text: any, font: any);

      getRenderTexture(...__args: never[]): any;

      noBackground(...__args: never[]): any;

      renderTexture(_x: any, _y: any, _w: any, _h: any, _vertical: any, ...__args: never[]): any;

      setProgress(_p: any, ...__args: never[]): any;

      setText(_text: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISProgressBar {}
}
