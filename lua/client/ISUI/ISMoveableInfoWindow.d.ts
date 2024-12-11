/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISMoveableInfoWindow:new */
    export class ISMoveableInfoWindow extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static displayPosition: any;

      allowCurrent: any;

      bodyText: any;

      character: any;

      customBodyAlign: any;

      description: any;

      drag: any;

      drawJoypadFocus: any;

      footer: any;

      header: any;

      infoBody: any;

      mouseOverUI: any;

      moveableTexture: any;

      name: any;

      playerNum: any;

      square: any;

      textureList: any;

      texYOffset: any;

      constructor(x: any, y: any, character: any, drag: any);

      calculateDimensions(...__args: never[]): any;

      drawTexture(texture: any, x: any, y: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      isMouseOverUI(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setBodyText(_bodyTextTable: any, _font: any, _align: any, ...__args: never[]): any;

      setBodyTextOLD(_body: any, _font: any, _align: any, ...__args: never[]): any;

      setDrag(_drag: any, ...__args: never[]): any;

      setFooterText(_footer: any, _font: any, ...__args: never[]): any;

      setHeaderText(_header: any, _font: any, ...__args: never[]): any;

      setSquare(_square: any, ...__args: never[]): any;

      setTexture(_textureName: any, _allow: any, _square: any, _yoffset: any, ...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      /** @noSelf */
      static moveablePanelModeKey: (_key: any, ...__args: never[]) => any;

      /** @noSelf */
      static setDisplayPosition: (_position: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISMoveableInfoWindow {}
}
