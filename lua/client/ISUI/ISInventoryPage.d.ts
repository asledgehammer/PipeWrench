/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISInventoryPage:new */
    export class ISInventoryPage extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static bagSoundTime: any;

      static floorContainer: any;

      static renderDirty: any;

      backpackChoice: any;

      backpacks: any;

      blinkAlpha: any;

      blinkAlphaContainer: any;

      blinkAlphaIncrease: any;

      blinkAlphaIncreaseContainer: any;

      blinkContainer: any;

      blinkContainerType: any;

      buttonPool: any;

      buttonSize: any;

      capacity: any;

      closebutton: any;

      closeButton: any;

      collapsebutton: any;

      collapseButton: any;

      collapseCounter: any;

      coloredInv: any;

      conDefault: any;

      containerIconMaps: any;

      forceSelectedContainer: any;

      forceSelectedContainerTime: any;

      highlightColors: any;

      infoBtn: any;

      infoButton: any;

      infoRichText: any;

      infoText: any;

      invbasic: any;

      inventory: any;

      inventoryPane: any;

      isCollapsed: any;

      lastDir: any;

      lastSquare: any;

      lookDir: any;

      minimumHeight: any;

      minimumWidth: any;

      mouseOverButton: any;

      onCharacter: any;

      pin: any;

      pinbutton: any;

      pinButton: any;

      render3DItemRot: any;

      render3DItemXOffset: any;

      render3DItemYOffset: any;

      render3DItemZOffset: any;

      resizeimage: any;

      resizeWidget: any;

      resizeWidget2: any;

      selectedButton: any;

      selectedSqDrop: any;

      statusbarbkg: any;

      title: any;

      titlebarbkg: any;

      titleFont: any;

      titleFontHgt: any;

      totalWeight: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any, inventory: any, onCharacter: any, zoom: any);

      addContainerButton(container: any, texture: any, name: any, tooltip: any, ...__args: never[]): any;

      canPutIn(...__args: never[]): any;

      checkExplored(container: any, playerObj: any, ...__args: never[]): any;

      collapse(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      dropItemsInContainer(button: any, ...__args: never[]): any;

      ensureVisible(index: any, ...__args: never[]): any;

      getCurrentBackpackIndex(...__args: never[]): any;

      isCycleContainerKeyDown(...__args: never[]): any;

      isRemoveButtonVisible(...__args: never[]): any;

      lootAll(...__args: never[]): any;

      nextUnlockedContainer(index: any, wrap: any, ...__args: never[]): any;

      onBackpackClick(button: any, ...__args: never[]): any;

      onBackpackMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onBackpackMouseUp(x: any, y: any, ...__args: never[]): any;

      onBackpackRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onChangeFilter(selected: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onInfo(...__args: never[]): any;

      onInventoryContainerSizeChanged(...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onMouseOutButton(button: any, x: any, y: any, ...__args: never[]): any;

      onMouseOverButton(button: any, x: any, y: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onRightMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      prevUnlockedContainer(index: any, wrap: any, ...__args: never[]): any;

      refreshBackpacks(...__args: never[]): any;

      refreshWeight(...__args: never[]): any;

      removeAll(...__args: never[]): any;

      render(...__args: never[]): any;

      render3DItemPreview(...__args: never[]): any;

      RestoreLayout(name: any, layout: any, ...__args: never[]): any;

      SaveLayout(name: any, layout: any, ...__args: never[]): any;

      selectButtonForContainer(container: any, ...__args: never[]): any;

      selectContainer(button: any, ...__args: never[]): any;

      selectNextContainer(...__args: never[]): any;

      selectPrevContainer(...__args: never[]): any;

      setBlinkingContainer(blinking: any, containerType: any, ...__args: never[]): any;

      setForceSelectedContainer(container: any, ...__args: never[]): any;

      setInfo(text: any, ...__args: never[]): any;

      setNewContainer(inventory: any, ...__args: never[]): any;

      setPinned(...__args: never[]): any;

      syncToggleStove(...__args: never[]): any;

      titleBarHeight(selected: any, ...__args: never[]): any;

      toggleStove(...__args: never[]): any;

      transferAll(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static ContainerSizeChanged: (...__args: never[]) => any;

      /** @noSelf */
      static dirtyUI: (...__args: never[]) => any;

      /** @noSelf */
      static GetFloorContainer: (playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadWeight: (inv: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnContainerUpdate: (object: any, ...__args: never[]) => any;

      /** @noSelf */
      static ongamestart: (...__args: never[]) => any;

      /** @noSelf */
      static onInventoryFontChanged: (...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static toggleInventory: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISInventoryPage {}
}
