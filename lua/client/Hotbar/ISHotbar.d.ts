/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Hotbar {
    /** @customConstructor ISHotbar:new */
    export class ISHotbar extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      attachedItems: any;

      availableSlot: any;

      character: any;

      chr: any;

      equippedItemIcon: any;

      font: any;

      margins: any;

      needsRefresh: any;

      playerNum: any;

      replacements: any;

      slotHeight: any;

      slotPad: any;

      slotWidth: any;

      textColor: any;

      wornItems: any;

      constructor(character: any);

      activateSlot: ((slotIndex: any) => any) | any;

      attachItem: ((item: any, slot: any, slotIndex: any, slotDef: any, doAnim: any) => any) | any;

      canBeAttached: ((slot: any, item: any) => any) | any;

      compareWornItems: (() => any) | any;

      doMenu: ((slotIndex: any) => any) | any;

      equipItem: ((item: any) => any) | any;

      getSlotDef: ((slot: any) => any) | any;

      getSlotDefReplacement: ((slot: any) => any) | any;

      getSlotForKey: ((key: any) => any) | any;

      getSlotIndexAt: ((x: any, y: any) => any) | any;

      haveThisSlot: ((slotType: any, list: any) => any) | any;

      isInHotbar: ((item: any) => any) | any;

      isItemAttached: ((item: any) => any) | any;

      loadPosition: (() => any) | any;

      onRadialAttach: ((item: any, slotIndex: any, v: any) => any) | any;

      onRadialRemove: ((item: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      refresh: (() => any) | any;

      reloadIcons: (() => any) | any;

      removeItem: ((item: any, doAnim: any) => any) | any;

      render: (() => any) | any;

      savePosition: (() => any) | any;

      setAttachAnim: ((item: any, slot: any) => any) | any;

      setSizeAndPosition: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static doMenuFromInventory: (playerNum: any, item: any, context: any) => any;

      /** @noSelf */
      static onClothingUpdated: (player: any) => any;

      /** @noSelf */
      static onKeyKeepPressed: (key: any) => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any) => any;
    }
  }
  export namespace lua.client.Hotbar.ISHotbar {}
}
