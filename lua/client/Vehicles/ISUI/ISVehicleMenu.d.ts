/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    export abstract class ISVehicleMenu {
      static [id: string]: any;

      /** @noSelf */
      static addSetScriptMenu: (context: any, playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static doTowingMenu: (playerObj: any, vehicle: any, menu: any) => any;

      /** @noSelf */
      static FillMenuOutsideVehicle: (player: any, context: any, vehicle: any, test: any) => any;

      /** @noSelf */
      static FillPartMenu: (playerIndex: any, context: any, slice: any, vehicle: any) => any;

      /** @noSelf */
      static getBestSwitchSeatEnter: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static getBestSwitchSeatExit: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static getNextTire: (currentTire: any) => any;

      /** @noSelf */
      static getVehicleDisplayName: (vehicle: any) => any;

      /** @noSelf */
      static getVehicleToInteractWith: (playerObj: any) => any;

      /** @noSelf */
      static moveItemsFromSeat: (playerObj: any, vehicle: any, seat: any, moveThem: any, doEnter: any) => any;

      /** @noSelf */
      static moveItemsOnSeat: (seat: any, newSeat: any, playerObj: any, moveThem: any, itemListIndex: any) => any;

      /** @noSelf */
      static onAttachTrailer: (playerObj: any, vehicle: any, attachmentA: any, attachmentB: any) => any;

      /** @noSelf */
      static onCloseDoor: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onConfirmSleep: (this: any, button: any, player: any, bed: any) => any;

      /** @noSelf */
      static onDebugAngles: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onDebugBlood: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onDebugColor: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onDebugEditor: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onDebugSetScript: (playerObj: any, vehicle: any, scriptName: any) => any;

      /** @noSelf */
      static onDetachTrailer: (playerObj: any, vehicle: any, attachmentA: any) => any;

      /** @noSelf */
      static onDisableAlarm: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onEnableAlarm: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onEnter: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static onEnter2: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static onEnterAux: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static onEnterAux2: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static onExit: (playerObj: any, seatFrom: any) => any;

      /** @noSelf */
      static onExitAux: (playerObj: any, seat: any) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static onHorn: (playerObj: any) => any;

      /** @noSelf */
      static onHornStart: (playerObj: any) => any;

      /** @noSelf */
      static onHornStop: (playerObj: any) => any;

      /** @noSelf */
      static onHotwire: (playerObj: any) => any;

      /** @noSelf */
      static onInfo: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any) => any;

      /** @noSelf */
      static onLightbar: (playerObj: any) => any;

      /** @noSelf */
      static onLockDoor: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onMechanic: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onOpenDoor: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onRemoveBurntVehicle: (player: any, vehicle: any) => any;

      /** @noSelf */
      static onRoadtrip: (playerObj: any) => any;

      /** @noSelf */
      static onShowSeatUI: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onShutOff: (playerObj: any) => any;

      /** @noSelf */
      static onSignalDevice: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onSleep: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onStartEngine: (playerObj: any) => any;

      /** @noSelf */
      static onSwitchSeat: (playerObj: any, seatTo: any) => any;

      /** @noSelf */
      static onToggleHeadlights: (playerObj: any) => any;

      /** @noSelf */
      static onToggleHeater: (playerObj: any) => any;

      /** @noSelf */
      static onToggleTrunkLocked: (playerObj: any) => any;

      /** @noSelf */
      static onUnlockDoor: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onWalkPath: (playerObj: any) => any;

      /** @noSelf */
      static onWash: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static processEnter: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static processEnter2: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static processShiftEnter: (playerObj: any, vehicle: any, seat: any) => any;

      /** @noSelf */
      static showRadialMenu: (playerObj: any) => any;

      /** @noSelf */
      static showRadialMenuOutside: (playerObj: any) => any;

      /** @noSelf */
      static tryMoveItemsFromSeat: (
        playerObj: any,
        vehicle: any,
        seat: any,
        moveThem: any,
        doEnter: any,
        seatTo: any,
        itemListIndex: any
      ) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleMenu {}
}
