/*
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**  @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module '@shughesuk/pipewrench' {
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
  export namespace lua.client.Vehicles.ISUI.ISVehicleMenu { }
}
