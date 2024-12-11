/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISEquippedItem:new */
    export class ISEquippedItem extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static text: any;

      adminBtn: any;

      adminIcon: any;

      adminIconOn: any;

      chr: any;

      clientBtn: any;

      clientIcon: any;

      clientIconOn: any;

      craftingBtn: any;

      craftingIcon: any;

      craftingIconOn: any;

      debugBtn: any;

      debugIcon: any;

      debugIconOn: any;

      handMainTexture: any;

      HandSecondaryTexture: any;

      healthBtn: any;

      healthIconOscillator: any;

      healthIconOscillatorDecelerator: any;

      healthIconOscillatorLevel: any;

      healthIconOscillatorRate: any;

      healthIconOscillatorScalar: any;

      healthIconOscillatorStartLevel: any;

      healthIconOscillatorStep: any;

      heartIcon: any;

      heartIconOn: any;

      infopanel: any;

      invBtn: any;

      inventory: any;

      inventoryTexture: any;

      inventoryTextureOn: any;

      loot: any;

      mainHand: any;

      mapBtn: any;

      mapIconOff: any;

      mapIconOn: any;

      mapPopup: any;

      mouseOverList: any;

      movableBtn: any;

      movableIcon: any;

      movableIconPickup: any;

      movableIconPlace: any;

      movableIconRotate: any;

      movableIconScrap: any;

      movablePopup: any;

      movableTooltip: any;

      offHand: any;

      previousHealth: any;

      searchBtn: any;

      searchIconOff: any;

      searchIconOn: any;

      toolTip: any;

      constructor(x: any, y: any, width: any, height: any, chr: any);

      addMouseOverToolTipItem(_object: any, _displayString: any, ...__args: never[]): any;

      checkBounds(_boundsItem: any, _x: any, _y: any, ...__args: never[]): any;

      checkToolTip(...__args: never[]): any;

      doToolTip(_state: any, _text: any, ...__args: never[]): any;

      getDraggedEquippableItem(...__args: never[]): any;

      getDraggedEquippableItems(...__args: never[]): any;

      onMouseUpPrimary(x: any, y: any, ...__args: never[]): any;

      onMouseUpSecondary(x: any, y: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      removeFromUIManager(...__args: never[]): any;

      render(...__args: never[]): any;

      renderFPS(...__args: never[]): any;

      rightClickPrimary(x: any, y: any, ...__args: never[]): any;

      rightClickSecondary(x: any, y: any, ...__args: never[]): any;

      shrinkWrap(...__args: never[]): any;
    }

    /** @customConstructor ISMapPopup:new */
    export class ISMapPopup extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      texMap: any;

      texMiniMap: any;

      constructor(x: any, y: any, width: any, height: any);

      render(...__args: never[]): any;
    }

    /** @customConstructor ISMoveablesIconPopup:new */
    export class ISMoveablesIconPopup extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISEquippedItem {}
}
