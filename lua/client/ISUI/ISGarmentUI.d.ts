/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISGarmentUI:new */
    export class ISGarmentUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      addedHeight: any;

      biteColumn: any;

      bodyPartColumn: any;

      bulletColumn: any;

      chr: any;

      clothing: any;

      drawJoypadFocus: any;

      listbox: any;

      noRepairWidth: any;

      parts: any;

      playerNum: any;

      progressHeight: any;

      progressWidth: any;

      progressWidth1: any;

      progressWidth2: any;

      progressWidth3: any;

      progressWidthTotal: any;

      progressX1: any;

      progressX2: any;

      progressX3: any;

      progressY: any;

      scratchColumn: any;

      sex: any;

      textures: any;

      texturesHeight: any;

      texturesY: any;

      texturesYOffset: any;

      constructor(x: any, y: any, character: any, clothing: any);

      addTextures: ((type: any, textureName: any, overlayName: any) => any) | any;

      calcColumnWidths: (() => any) | any;

      calcProgressPositions: (() => any) | any;

      calcProgressWidths: (() => any) | any;

      calculateHeight: ((doListHeight: any) => any) | any;

      create: (() => any) | any;

      doContextMenu: ((part: any, x: any, y: any) => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      doPatch: ((fabric: any, thread: any, needle: any, part: any, context: any, submenu: any) => any) | any;

      drawBar: ((x: any, y: any, width: any, height: any, percent: any, highGood: any) => any) | any;

      getPaddablePartsNumber: ((clothing: any, parts: any) => any) | any;

      onBodyPartListRightMouseUp: ((x: any, y: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISGarmentUI {}
}
