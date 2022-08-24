/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      calculateDimensions: (() => any) | any;

      drawTexture: ((texture: any, x: any, y: any, a: any, r: any, g: any, b: any) => any) | any;

      isMouseOverUI: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setBodyText: ((_bodyTextTable: any, _font: any, _align: any) => any) | any;

      setBodyTextOLD: ((_body: any, _font: any, _align: any) => any) | any;

      setDrag: ((_drag: any) => any) | any;

      setFooterText: ((_footer: any, _font: any) => any) | any;

      setHeaderText: ((_header: any, _font: any) => any) | any;

      setSquare: ((_square: any) => any) | any;

      setTexture: ((_textureName: any, _allow: any, _square: any, _yoffset: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      /** @noSelf */
      static moveablePanelModeKey: (_key: any) => any;

      /** @noSelf */
      static setDisplayPosition: (_position: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISMoveableInfoWindow {}
}
