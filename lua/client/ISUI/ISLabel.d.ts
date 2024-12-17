/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      textColor: any;

      tooltip: any;

      tooltipUI: any;

      translation: any;

      constructor(x: any, y: any, height: any, name: any, r: any, g: any, b: any, a: any, font: any, bLeft: any);

      getFontHeight(...__args: never[]): any;

      getName(...__args: never[]): any;

      setColor(r: any, g: any, b: any, ...__args: never[]): any;

      setHeightToFont(minHeight: any, ...__args: never[]): any;

      setHeightToName(minHeight: any, ...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setName(name: any, ...__args: never[]): any;

      setTooltip(tooltip: any, ...__args: never[]): any;

      setTranslation(translation: any, ...__args: never[]): any;

      setWidthToName(minWidth: any, ...__args: never[]): any;

      updateTooltip(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISLabel {}
}
