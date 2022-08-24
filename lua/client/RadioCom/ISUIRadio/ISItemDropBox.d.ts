/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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
        onDragSelf: any
      );

      activateToolTip: (() => any) | any;

      createChildren: (() => any) | any;

      deactivateToolTip: (() => any) | any;

      defaultVerifyItem: ((_item: any) => any) | any;

      hasValidItemInDrag: (() => any) | any;

      itemDropped: ((_items: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setBackDropTex: ((_tex: any, _a: any, _r: any, _g: any, _b: any) => any) | any;

      setDoBackDropTex: ((_b: any) => any) | any;

      setHighlight:
        | ((arg0: any, _a: any, _r: any, _g: any, _b: any, _a2: any, _r2: any, _g2: any, _b2: any) => any)
        | any;

      setInvalidHighlight:
        | ((arg0: any, _a: any, _r: any, _g: any, _b: any, _a2: any, _r2: any, _g2: any, _b2: any) => any)
        | any;

      setStoredItem: ((_item: any) => any) | any;

      setStoredItemFake: ((_itemTex: any) => any) | any;

      setToolTip: ((_b: any, _text: any) => any) | any;

      setValidHighlight:
        | ((arg0: any, _a: any, _r: any, _g: any, _b: any, _a2: any, _r2: any, _g2: any, _b2: any) => any)
        | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISItemDropBox {}
}
