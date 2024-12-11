/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISFishingUI:new */
    export class ISFishingUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      barHgt: any;

      barPadY: any;

      barY: any;

      btnHgt: any;

      buttonBorderColor: any;

      cancel: any;

      canFishDistance: any;

      checkPlayerX: any;

      checkPlayerY: any;

      checkStuffTime: any;

      clickedSquare: any;

      clickedSquareX: any;

      clickedSquareY: any;

      clickedSquareZ: any;

      close: any;

      containers: any;

      containerSelector: any;

      containersLbl: any;

      fishes: any;

      items_array: any;

      lures: any;

      luresEnabled: any;

      maxFish: any;

      ok: any;

      padBottom: any;

      player: any;

      rod: any;

      rods: any;

      selectedLure: any;

      selectedRod: any;

      squareWithOtherZone: any;

      squareWithoutZone: any;

      squareWithSameZone: any;

      titleY: any;

      usingSpear: any;

      zoneProgress: any;

      constructor(x: any, y: any, width: any, height: any, player: any, clickedSquare: any);

      checkInventory(...__args: never[]): any;

      checkInventoryBags(...__args: never[]): any;

      checkInventoryLures(...__args: never[]): any;

      checkInventoryRods(...__args: never[]): any;

      checkPlayerPosition(...__args: never[]): any;

      clickedRod(buttons: any, index: any, ...__args: never[]): any;

      doBagOptions(...__args: never[]): any;

      equipItems(...__args: never[]): any;

      getSelectedBag(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeReactivate(joypadData: any, ...__args: never[]): any;

      pickBestSquare(squares: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setFish(item: any, ...__args: never[]): any;

      updateButtons(currentAction: any, ...__args: never[]): any;

      updateLures(...__args: never[]): any;

      updateRods(...__args: never[]): any;

      updateSelectedRod(...__args: never[]): any;

      updateSize(...__args: never[]): any;

      updateZoneProgress(zoneClicked: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISFishingUI {}
}
