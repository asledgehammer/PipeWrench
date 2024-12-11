/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    export abstract class ISVehicleMenu {
      static [id: string]: any;

      /** @noSelf */
      static addSetScriptMenu: (context: any, playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static doTowingMenu: (playerObj: any, vehicle: any, menu: any, ...__args: never[]) => any;

      /** @noSelf */
      static FillMenuOutsideVehicle: (player: any, context: any, vehicle: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static FillPartMenu: (playerIndex: any, context: any, slice: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBestSwitchSeatEnter: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBestSwitchSeatExit: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static getNextTire: (currentTire: any, ...__args: never[]) => any;

      /** @noSelf */
      static getVehicleDisplayName: (vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static getVehicleToInteractWith: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static moveItemsFromSeat: (
        playerObj: any,
        vehicle: any,
        seat: any,
        moveThem: any,
        doEnter: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static moveItemsOnSeat: (
        seat: any,
        newSeat: any,
        playerObj: any,
        moveThem: any,
        itemListIndex: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onAttachTrailer: (
        playerObj: any,
        vehicle: any,
        attachmentA: any,
        attachmentB: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onCloseDoor: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onConfirmSleep: (this: any, button: any, player: any, bed: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugAngles: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugBlood: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugColor: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugEditor: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugSetScript: (playerObj: any, vehicle: any, scriptName: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDetachTrailer: (playerObj: any, vehicle: any, attachmentA: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDisableAlarm: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEnableAlarm: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEnter: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEnter2: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEnterAux: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEnterAux2: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static onExit: (playerObj: any, seatFrom: any, ...__args: never[]) => any;

      /** @noSelf */
      static onExitAux: (playerObj: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (
        player: any,
        context: any,
        worldobjects: any,
        test: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onHorn: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onHornStart: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onHornStop: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onHotwire: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onInfo: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLightbar: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLockDoor: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMechanic: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onOpenDoor: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveBurntVehicle: (player: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRoadtrip: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onShowSeatUI: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onShutOff: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSignalDevice: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSleep: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onStartEngine: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSwitchSeat: (playerObj: any, seatTo: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleHeadlights: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleHeater: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleTrunkLocked: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onUnlockDoor: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWalkPath: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWash: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static processEnter: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static processEnter2: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static processShiftEnter: (playerObj: any, vehicle: any, seat: any, ...__args: never[]) => any;

      /** @noSelf */
      static showRadialMenu: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static showRadialMenuOutside: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static tryMoveItemsFromSeat: (
        playerObj: any,
        vehicle: any,
        seat: any,
        moveThem: any,
        doEnter: any,
        seatTo: any,
        itemListIndex: any,
        ...__args: never[]
      ) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleMenu {}
}
