/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRichTextPanel:new */
    export class ISRichTextPanel extends lua.client.ISUI.ISPanel {
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

      onMouseWheel: ((del: any) => any) | any;

      onResize: (() => any) | any;

      paginate: (() => any) | any;

      processCommand: ((command: any, x: any, y: any, lineImageHeight: any, lineHeight: any) => any) | any;

      render: (() => any) | any;

      replaceKeyName: ((text: any, offset: any) => any) | any;

      replaceKeyNames: ((text: any) => any) | any;

      setContentTransparency: ((alpha: any) => any) | any;

      setMargins: ((left: any, top: any, right: any, bottom: any) => any) | any;

      setText: ((text: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRichTextPanel {}
}
