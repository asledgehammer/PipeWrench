/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISCraftInventoryPanel:new */
    export class ISCraftInventoryPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      colBad: any;

      colGood: any;

      inputScriptFilter: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      isDirty: any;

      itemListBox: any;

      logic: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      selectedItem: any;

      unavailablesExpanded: any;

      constructor(x: any, y: any, width: any, height: any, player: any, logic: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createListHeader(_text: any, hasExpandArrow: any, ...__args: never[]): any;

      createListItemEntree(_node: any, _inventoryItem: any, _index: any, ...__args: never[]): any;

      createListItemNode(_node: any, ...__args: never[]): any;

      createUnavailableListItemEntree(_item: any, _index: any, ...__args: never[]): any;

      drawListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      onListSelected(_item: any, ...__args: never[]): any;

      onRebuildItemNodes(_inputItems: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      populate(...__args: never[]): any;

      render(...__args: never[]): any;

      selectFirst(...__args: never[]): any;

      update(...__args: never[]): any;

      updateContainers(_containers: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISCraftInventoryPanel {}
}
