/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      activateSlot(slotIndex: any, ...__args: never[]): any;

      attachItem(item: any, slot: any, slotIndex: any, slotDef: any, doAnim: any, ...__args: never[]): any;

      canBeAttached(slot: any, item: any, ...__args: never[]): any;

      compareWornItems(...__args: never[]): any;

      doMenu(slotIndex: any, ...__args: never[]): any;

      equipItem(item: any, ...__args: never[]): any;

      getSlotDef(slot: any, ...__args: never[]): any;

      getSlotDefReplacement(slot: any, ...__args: never[]): any;

      getSlotForKey(key: any, ...__args: never[]): any;

      getSlotIndexAt(x: any, y: any, ...__args: never[]): any;

      haveThisSlot(slotType: any, list: any, ...__args: never[]): any;

      isInHotbar(item: any, ...__args: never[]): any;

      isItemAttached(item: any, ...__args: never[]): any;

      loadPosition(...__args: never[]): any;

      onRadialAttach(item: any, slotIndex: any, v: any, ...__args: never[]): any;

      onRadialRemove(item: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      refresh(...__args: never[]): any;

      reloadIcons(...__args: never[]): any;

      removeItem(item: any, doAnim: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      savePosition(...__args: never[]): any;

      setAttachAnim(item: any, slot: any, ...__args: never[]): any;

      setSizeAndPosition(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static doMenuFromInventory: (playerNum: any, item: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static onClothingUpdated: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyKeepPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Hotbar.ISHotbar {}
}
