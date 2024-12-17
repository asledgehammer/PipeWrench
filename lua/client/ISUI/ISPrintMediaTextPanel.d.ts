/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISPrintMediaMap:new */
    export class ISPrintMediaMap extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      mapAPI: any;

      constructor(x: any, y: any, width: any, height: any);
    }

    /** @customConstructor ISPrintMediaTextPanel:new */
    export class ISPrintMediaTextPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autosetheight: any;

      b: any;

      clip: any;

      contentTransparency: any;

      currentLine: any;

      defaultFont: any;

      font: any;

      fonts: any;

      g: any;

      imageCount: any;

      imageH: any;

      images: any;

      imageW: any;

      imageX: any;

      imageY: any;

      indent: any;

      keybinds: any;

      lines: any;

      lineX: any;

      lineY: any;

      maps: any;

      mapUI: any;

      marginBottom: any;

      marginLeft: any;

      marginRight: any;

      marginTop: any;

      maxLines: any;

      orient: any;

      r: any;

      rgb: any;

      rgbCurrent: any;

      rgbStack: any;

      text: any;

      textB: any;

      textDirty: any;

      textG: any;

      textR: any;

      constructor(x: any, y: any, width: any, height: any);

      onMouseWheel(del: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      paginate(...__args: never[]): any;

      processCommand(command: any, x: any, y: any, lineImageHeight: any, lineHeight: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderMap(index: any, map: any, ...__args: never[]): any;

      replaceKeyName(text: any, offset: any, ...__args: never[]): any;

      replaceKeyNames(text: any, ...__args: never[]): any;

      setContentTransparency(alpha: any, ...__args: never[]): any;

      setMargins(left: any, top: any, right: any, bottom: any, ...__args: never[]): any;

      setText(text: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISPrintMediaTextPanel {}
}
