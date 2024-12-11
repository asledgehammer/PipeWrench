/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISItemDropBox:new */
    export class ISItemDropBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      backDropTex: any;

      backDropTexCol: any;

      backgroundColorHL: any;

      backgroundColorHLInv: any;

      backgroundColorHLVal: any;

      borderColorHL: any;

      borderColorHLInv: any;

      borderColorHLVal: any;

      boxOccupied: any;

      doBackDropTex: any;

      doHighlight: any;

      doInvalidHighlight: any;

      doToolTip: any;

      doValidHighlight: any;

      functionTarget: any;

      mouseEnabled: any;

      mouseOverState: any;

      onDragSelf: any;

      onItemDropped: any;

      onItemRemove: any;

      onVerifyItem: any;

      storedItem: any;

      storedItemTex: any;

      storeItem: any;

      toolTip: any;

      toolTipText: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        storeItem: any,
        target: any,
        onItemDropped: any,
        onItemRemove: any,
        onVerifyItem: any,
        onDragSelf: any,
      );

      activateToolTip(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      deactivateToolTip(...__args: never[]): any;

      defaultVerifyItem(_item: any, ...__args: never[]): any;

      hasValidItemInDrag(...__args: never[]): any;

      itemDropped(_items: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setBackDropTex(_tex: any, _a: any, _r: any, _g: any, _b: any, ...__args: never[]): any;

      setDoBackDropTex(_b: any, ...__args: never[]): any;

      setHighlight(
        arg0: any,
        _a: any,
        _r: any,
        _g: any,
        _b: any,
        _a2: any,
        _r2: any,
        _g2: any,
        _b2: any,
        ...__args: never[]
      ): any;

      setInvalidHighlight(
        arg0: any,
        _a: any,
        _r: any,
        _g: any,
        _b: any,
        _a2: any,
        _r2: any,
        _g2: any,
        _b2: any,
        ...__args: never[]
      ): any;

      setStoredItem(_item: any, ...__args: never[]): any;

      setStoredItemFake(_itemTex: any, ...__args: never[]): any;

      setToolTip(_b: any, _text: any, ...__args: never[]): any;

      setValidHighlight(
        arg0: any,
        _a: any,
        _r: any,
        _g: any,
        _b: any,
        _a2: any,
        _r2: any,
        _g2: any,
        _b2: any,
        ...__args: never[]
      ): any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISItemDropBox {}
}
