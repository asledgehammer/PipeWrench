/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISGarmentUI:new */
    export class ISGarmentUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      actionToBodyPart: any;

      addedHeight: any;

      biteColumn: any;

      bodyPartAction: any;

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

      addTextures(type: any, textureName: any, overlayName: any, ...__args: never[]): any;

      calcColumnWidths(...__args: never[]): any;

      calcProgressPositions(...__args: never[]): any;

      calcProgressWidths(...__args: never[]): any;

      calculateHeight(doListHeight: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      doContextMenu(part: any, x: any, y: any, ...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      doPatch(fabric: any, thread: any, needle: any, part: any, context: any, submenu: any, ...__args: never[]): any;

      drawBar(x: any, y: any, width: any, height: any, percent: any, highGood: any, ...__args: never[]): any;

      getPaddablePartsNumber(clothing: any, parts: any, ...__args: never[]): any;

      onBodyPartListRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      setBodyPartAction(bodyPart: any, args: any, ...__args: never[]): any;

      setBodyPartForAction(action: any, bodyPart: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static setBodyPartActionForPlayer: (
        playerObj: any,
        bodyPart: any,
        action: any,
        jobType: any,
        args: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static setBodyPartForLastAction: (playerObj: any, bodyPart: any, ...__args: never[]) => any;

      /** @noSelf */
      static setOtherActionForPlayer: (playerObj: any, bodyPart: any, action: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISGarmentUI {}
}
