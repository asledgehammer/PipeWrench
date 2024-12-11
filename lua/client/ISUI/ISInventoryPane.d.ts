/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISInventoryPane:new */
    export class ISInventoryPane extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      blinkAlpha: any;

      blinkAlphaIncrease: any;

      brokenItemIcon: any;

      buttonOption: any;

      clickedScrollBar: any;

      collapsed: any;

      collapseicon: any;

      column2: any;

      column3: any;

      column4: any;

      contextButton1: any;

      contextButton2: any;

      contextButton3: any;

      draggedItems: any;

      dragging: any;

      draggingMarquis: any;

      draggingMarquisX: any;

      draggingMarquisY: any;

      draggingX: any;

      draggingY: any;

      dragStarted: any;

      equippedInHotbar: any;

      equippedItemIcon: any;

      expandicon: any;

      favoriteStar: any;

      filtericon: any;

      filterMenu: any;

      firstSelect: any;

      font: any;

      fontHgt: any;

      frozenItemIcon: any;

      headerHgt: any;

      hotbar: any;

      inventory: any;

      itemHgt: any;

      itemindex: any;

      items: any;

      itemslist: any;

      itemSortFunc: any;

      joyselection: any;

      minimumHeight: any;

      minimumWidth: any;

      mode: any;

      mouseOverOption: any;

      nameHeader: any;

      poisonIcon: any;

      previousMouseUp: any;

      removeAllDialog: any;

      selected: any;

      smoothScrollTargetY: any;

      smoothScrollY: any;

      texScale: any;

      toolRender: any;

      treecolicon: any;

      treeexpicon: any;

      typeHeader: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any, inventory: any, zoom: any);

      canPutIn(...__args: never[]): any;

      collapseAll(button: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doButtons(y: any, ...__args: never[]): any;

      doContextOnJoypadSelected(...__args: never[]): any;

      doContextualDblClick(item: any, ...__args: never[]): any;

      doGrabOnJoypadSelected(...__args: never[]): any;

      doJoypadExpandCollapse(...__args: never[]): any;

      drawItemDetails(item: any, y: any, xoff: any, yoff: any, red: any, ...__args: never[]): any;

      drawProgressBar(x: any, y: any, w: any, h: any, f: any, fg: any, ...__args: never[]): any;

      drawTextAndProgressBar(
        text: any,
        fraction: any,
        xoff: any,
        top: any,
        fgText: any,
        fgBar: any,
        ...__args: never[]
      ): any;

      expandAll(button: any, ...__args: never[]): any;

      hideButtons(...__args: never[]): any;

      isMouseOverScrollBar(...__args: never[]): any;

      lootAll(...__args: never[]): any;

      onConfirmDelete(button: any, ...__args: never[]): any;

      onContext(button: any, ...__args: never[]): any;

      onFilterMenu(button: any, ...__args: never[]): any;

      onInventoryFontChanged(...__args: never[]): any;

      onMouseDoubleClick(x: any, y: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      onResizeColumn(button: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      refreshContainer(...__args: never[]): any;

      removeAll(player: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderdetails(doDragged: any, ...__args: never[]): any;

      rendericons(...__args: never[]): any;

      RestoreLayout(name: any, layout: any, ...__args: never[]): any;

      restoreSelection(selected: any, ...__args: never[]): any;

      rowAt(x: any, y: any, ...__args: never[]): any;

      SaveLayout(name: any, layout: any, ...__args: never[]): any;

      saveSelection(selected: any, ...__args: never[]): any;

      selectIndex(index: any, ...__args: never[]): any;

      setMode(mode: any, ...__args: never[]): any;

      sortByName(button: any, ...__args: never[]): any;

      sortByType(button: any, ...__args: never[]): any;

      sortByWeight(_isAscending: any, ...__args: never[]): any;

      sortItemsByType(items: any, ...__args: never[]): any;

      sortItemsByTypeAndWeight(items: any, ...__args: never[]): any;

      sortItemsByWeight(items: any, ...__args: never[]): any;

      toggleStove(...__args: never[]): any;

      topOfItem(index: any, ...__args: never[]): any;

      transferAll(...__args: never[]): any;

      transferItemsByWeight(items: any, container: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateSmoothScrolling(...__args: never[]): any;

      updateTooltip(...__args: never[]): any;

      /** @noSelf */
      static getActualItems: (items: any, ...__args: never[]) => any;

      /** @noSelf */
      static itemSortByCatDesc: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static itemSortByCatInc: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static itemSortByNameDesc: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static itemSortByNameInc: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static itemSortByWeightAsc: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static itemSortByWeightDesc: (a: any, b: any, ...__args: never[]) => any;
    }

    export abstract class ISInventoryPaneDraggedItems {
      static [id: string]: any;
    }
  }
  export namespace lua.client.ISUI.ISInventoryPane {}
}
