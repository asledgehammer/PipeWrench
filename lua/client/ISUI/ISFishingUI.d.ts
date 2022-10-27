/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      checkInventory: (() => any) | any;

      checkInventoryBags: (() => any) | any;

      checkInventoryLures: (() => any) | any;

      checkInventoryRods: (() => any) | any;

      checkPlayerPosition: (() => any) | any;

      clickedRod: ((buttons: any, index: any) => any) | any;

      doBagOptions: (() => any) | any;

      equipItems: (() => any) | any;

      getSelectedBag: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeReactivate: ((joypadData: any) => any) | any;

      pickBestSquare: ((squares: any) => any) | any;

      render: (() => any) | any;

      setFish: ((item: any) => any) | any;

      updateButtons: ((currentAction: any) => any) | any;

      updateLures: (() => any) | any;

      updateRods: (() => any) | any;

      updateSelectedRod: (() => any) | any;

      updateSize: (() => any) | any;

      updateZoneProgress: ((zoneClicked: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISFishingUI {}
}
