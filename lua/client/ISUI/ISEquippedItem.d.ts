/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addMouseOverToolTipItem: ((_object: any, _displayString: any) => any) | any;

      checkBounds: ((_boundsItem: any, _x: any, _y: any) => any) | any;

      checkToolTip: (() => any) | any;

      doToolTip: ((_state: any, _text: any) => any) | any;

      getDraggedEquippableItem: (() => any) | any;

      getDraggedEquippableItems: (() => any) | any;

      onMouseUpPrimary: ((x: any, y: any) => any) | any;

      onMouseUpSecondary: ((x: any, y: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      removeFromUIManager: (() => any) | any;

      render: (() => any) | any;

      renderFPS: (() => any) | any;

      rightClickPrimary: ((x: any, y: any) => any) | any;

      rightClickSecondary: ((x: any, y: any) => any) | any;

      shrinkWrap: (() => any) | any;
    }

    /** @customConstructor ISMapPopup:new */
    export class ISMapPopup extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      texMap: any;

      texMiniMap: any;

      constructor(x: any, y: any, width: any, height: any);

      render: (() => any) | any;
    }

    /** @customConstructor ISMoveablesIconPopup:new */
    export class ISMoveablesIconPopup extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISEquippedItem {}
}
