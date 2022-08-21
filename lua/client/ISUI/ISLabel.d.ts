/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISLabel:new */
    export class ISLabel extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      a: any;

      b: any;

      backgroundColor: any;

      borderColor: any;

      center: any;

      font: any;

      g: any;

      joypadFocused: any;

      joypadTexture: any;

      left: any;

      mouseOver: any;

      name: any;

      originalX: any;

      r: any;

      tooltip: any;

      tooltipUI: any;

      translation: any;

      constructor(x: any, y: any, height: any, name: any, r: any, g: any, b: any, a: any, font: any, bLeft: any);

      getName: (() => any) | any;

      setColor: ((r: any, g: any, b: any) => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setName: ((name: any) => any) | any;

      setTooltip: ((tooltip: any) => any) | any;

      setTranslation: ((translation: any) => any) | any;

      setWidthToName: ((minWidth: any) => any) | any;

      updateTooltip: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISLabel {}
}
