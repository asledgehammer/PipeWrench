/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRichTextLayout:new */
    export class ISRichTextLayout extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      b: any;

      clip: any;

      currentLine: any;

      defaultFont: any;

      font: any;

      fonts: any;

      g: any;

      height: any;

      imageCount: any;

      imageH: any;

      images: any;

      imageW: any;

      imageX: any;

      imageY: any;

      indent: any;

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

      text: any;

      textDirty: any;

      width: any;

      constructor(width: any);

      getHeight: (() => any) | any;

      getWidth: (() => any) | any;

      paginate: (() => any) | any;

      processCommand: ((command: any, x: any, y: any, lineImageHeight: any, lineHeight: any) => any) | any;

      render: ((x: any, y: any, ui: any) => any) | any;

      setMargins: ((left: any, top: any, right: any, bottom: any) => any) | any;

      setText: ((text: any) => any) | any;

      setWidth: ((width: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.RichTextLayout {}
}
