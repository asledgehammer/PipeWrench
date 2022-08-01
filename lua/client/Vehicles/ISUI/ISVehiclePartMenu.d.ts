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
 *
 * File generated at: 2022-08-01T06:43:10.779Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Vehicles.ISUI {
    export class ISVehiclePartMenu {
      private constructor();

      static [id: string]: any;

      static doAddFuelMenu: ((playerObj: any, part: any, context: any) => any) | any;

      static doSiphonFuelMenu: ((playerObj: any, part: any, context: any) => any) | any;

      static equipRequiredItems: ((playerObj: any, part: any, tbl: any) => any) | any;

      static getGasCanNotEmpty: ((playerObj: any, typeToItem: any) => any) | any;

      static getGasCanNotFull: ((playerObj: any, typeToItem: any) => any) | any;

      static getNearbyFuelPump: ((vehicle: any) => any) | any;

      static onAddFuelNew:
        | ((worldobjects: any, part: any, fuelContainerList: any, fuelContainer: any, player: any) => any)
        | any;

      static onAddGasoline: ((playerObj: any, part: any) => any) | any;

      static onDebugFill: ((playerObj: any, part: any) => any) | any;

      static onDeflateTire: ((playerObj: any, part: any) => any) | any;

      static onDeviceOptions: ((playerObj: any, part: any) => any) | any;

      static onInflateTire: ((playerObj: any, part: any) => any) | any;

      static onInstallPart: ((playerObj: any, part: any, item: any) => any) | any;

      static onLockDoor: ((playerObj: any, part: any) => any) | any;

      static onLockDoors: ((playerObj: any, vehicle: any, lock: any) => any) | any;

      static onOpenCloseWindow: ((playerObj: any, part: any, open: any) => any) | any;

      static onPumpGasoline: ((playerObj: any, part: any) => any) | any;

      static onPumpGasolinePathFail: ((playerObj: any) => any) | any;

      static onSmashWindow: ((playerObj: any, part: any, open: any) => any) | any;

      static onTakeFuelNew:
        | ((worldobjects: any, part: any, fuelContainerList: any, fuelContainer: any, player: any) => any)
        | any;

      static onTakeGasoline: ((playerObj: any, part: any) => any) | any;

      static onUninstallPart: ((playerObj: any, part: any) => any) | any;

      static onUnlockDoor: ((playerObj: any, part: any) => any) | any;

      static toPlayerInventory: ((playerObj: any, item: any) => any) | any;

      static transferRequiredItems: ((playerObj: any, part: any, tbl: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehiclePartMenu {}
}
