/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISItemSlot:new */
    export class ISItemSlot extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      actionAddColor: any;

      actionRemoveColor: any;

      backDropTex: any;

      backDropTexCol: any;

      backgroundEmpty: any;

      backgroundHover: any;

      bBlinkBorder: any;

      borderColorOrig: any;

      borderInvalid: any;

      borderLockedColor: any;

      borderValid: any;

      boxOccupied: any;

      character: any;

      countColor: any;

      doBackDropTex: any;

      doToolTip: any;

      drawBorderLocked: any;

      drawInnerBorder: any;

      drawProgress: any;

      functionTarget: any;

      hideItem: any;

      locked: any;

      mouseEnabled: any;

      mouseOverState: any;

      onBoxClicked: any;

      onItemDropped: any;

      onItemRemove: any;

      onVerifyItem: any;

      progressColor: any;

      renderItemCount: any;

      resource: any;

      storedItem: any;

      storedItemTex: any;

      storeItem: any;

      toolTip: any;

      toolTipText: any;

      toolTipTextItem: any;

      toolTipTextLocked: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        resource: any,
        target: any,
        onItemDropped: any,
        onItemRemove: any,
        onVerifyItem: any,
        onBoxClicked: any,
      );

      activateToolTip(...__args: never[]): any;

      boxClicked(_isRightClick: any, _isShift: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      deactivateToolTip(...__args: never[]): any;

      defaultVerifyItem(_itemSlot: any, _item: any, ...__args: never[]): any;

      hasValidItemInDrag(...__args: never[]): any;

      isLocked(...__args: never[]): any;

      itemDropped(_items: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setBackDropTex(_tex: any, _a: any, _r: any, _g: any, _b: any, ...__args: never[]): any;

      setCharacter(_character: any, ...__args: never[]): any;

      setDoBackDropTex(_b: any, ...__args: never[]): any;

      setLocked(_b: any, ...__args: never[]): any;

      setResource(_resource: any, ...__args: never[]): any;

      setStoredItem(_item: any, ...__args: never[]): any;

      setToolTip(_b: any, _text: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISItemSlot {}
}
