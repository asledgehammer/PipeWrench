/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleMechanics:new */
    export class ISVehicleMechanics extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static alphaOverlay: any;

      static alphaOverlayInc: any;

      static cheat: any;

      bodyworklist: any;

      checkEngine: any;

      chr: any;

      context: any;

      drawJoypadFocus: any;

      flashFailure: any;

      flashTimer: any;

      flashTimerAlpha: any;

      flashTimerAlphaInc: any;

      generalCondition: any;

      generalCondRGB: any;

      hidetooltip: any;

      leftListHasFocus: any;

      leftListSelection: any;

      listbox: any;

      listWidth: any;

      minimumHeight: any;

      partCatRGB: any;

      partRGB: any;

      playerNum: any;

      rightListSelection: any;

      selected: any;

      tooltip: any;

      usedHood: any;

      vehicle: any;

      vehiclePart: any;

      xCarTexOffset: any;

      constructor(x: any, y: any, character: any, vehicle: any);

      checkEngineFull(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      doMenuTooltip(part: any, option: any, lua: any, name: any, ...__args: never[]): any;

      doPartContextMenu(part: any, x: any, y: any, ...__args: never[]): any;

      getConditionRGB(condition: any, ...__args: never[]): any;

      getMouseOverPart(x: any, y: any, ...__args: never[]): any;

      initParts(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      isMouseOverPart(x: any, y: any, part: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDirUp(...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onListboxJoypadDirDown(listbox: any, ...__args: never[]): any;

      onListboxJoypadDirUp(listbox: any, ...__args: never[]): any;

      onListMouseDown(x: any, y: any, ...__args: never[]): any;

      onListRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      recalculGeneralCondition(...__args: never[]): any;

      renderCarOverlay(...__args: never[]): any;

      renderCarOverlayTooltip(partProps: any, part: any, carType: any, ...__args: never[]): any;

      renderPartDetail(part: any, ...__args: never[]): any;

      roundContainerContentAmount(part: any, ...__args: never[]): any;

      selectPart(part: any, ...__args: never[]): any;

      setVisible(bVisible: any, joypadData: any, ...__args: never[]): any;

      startFlashGreen(...__args: never[]): any;

      startFlashRed(...__args: never[]): any;

      update(...__args: never[]): any;

      updateLayout(...__args: never[]): any;

      /** @noSelf */
      static onCheatGetKey: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatHotwire: (playerObj: any, vehicle: any, hotwired: any, broken: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatRemove: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatRemoveAux: (dummy: any, button: any, playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatRepair: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatRepairPart: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatSetCondition: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatSetConditionAux: (target: any, button: any, playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatSetContentAmount: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatSetContentAmountAux: (
        target: any,
        button: any,
        playerObj: any,
        part: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onCheatSetRust: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatSetRustAux: (target: any, button: any, playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatToggle: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onConfigHeadlight: (playerObj: any, part: any, dir: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnMechanicActionDone: (chr: any, success: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRepairEngine: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRepairLightbar: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTakeEngineParts: (playerObj: any, part: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleMechanics {}
}
