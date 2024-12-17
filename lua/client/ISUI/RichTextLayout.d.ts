/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRichTextLayout:new */
    export class ISRichTextLayout extends sharedLua.shared.ISBaseObject.ISBaseObject {
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

      rgbCurrent: any;

      text: any;

      textDirty: any;

      width: any;

      constructor(width: any);

      getHeight(...__args: never[]): any;

      getWidth(...__args: never[]): any;

      paginate(...__args: never[]): any;

      processCommand(command: any, x: any, y: any, lineImageHeight: any, lineHeight: any, ...__args: never[]): any;

      render(x: any, y: any, ui: any, ...__args: never[]): any;

      setMargins(left: any, top: any, right: any, bottom: any, ...__args: never[]): any;

      setText(text: any, ...__args: never[]): any;

      setWidth(width: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.RichTextLayout {}
}
