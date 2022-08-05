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
 * File generated at: 2022-08-05T02:36:33.477Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.Vehicles {
    export abstract class Vehicles {
      static [id: string]: any;

      /** @noSelf */
      static LowerCondition: (vehicle: any, part: any, elapsedMinutes: any) => any;
    }

    export abstract class VehicleUtils {
      static [id: string]: any;

      /** @noSelf */
      static anyWorkingHeadlights: (vehicle: any) => any;

      /** @noSelf */
      static calculateInstallationSuccess: (perks: any, chr: any, chrPerks: any) => any;

      /** @noSelf */
      static callLua: (functionName: any, arg1: any, arg2: any, arg3: any, arg4: any) => any;

      /** @noSelf */
      static chargeBattery: (vehicle: any, delta: any) => any;

      /** @noSelf */
      static CheckForUnlockedDoorsWindows: (vehicle: any) => any;

      /** @noSelf */
      static compareFloats: (a: any, b: any, precision: any) => any;

      /** @noSelf */
      static createPartInventoryItem: (part: any) => any;

      /** @noSelf */
      static createPartInventoryItem_HAMRadio: (part: any) => any;

      /** @noSelf */
      static createPartInventoryItem_Radio: (part: any) => any;

      /** @noSelf */
      static getChildWindow: (part: any) => any;

      /** @noSelf */
      static getContainers: (playerNum: any) => any;

      /** @noSelf */
      static getInsideTemperature: (player: any) => any;

      /** @noSelf */
      static getItems: (playerNum: any) => any;

      /** @noSelf */
      static getPerksTableForChr: (perks: any, chr: any) => any;

      /** @noSelf */
      static InstallPart: (part: any, item: any, chr: any) => any;

      /** @noSelf */
      static lowerUninstalledItemCondition: (part: any, item: any, mechanicSkill: any, chr: any) => any;

      /** @noSelf */
      static OnUseVehicle: (character: any, vehicle: any, pressedNotTapped: any) => any;

      /** @noSelf */
      static OnVehicleHorn: (character: any, vehicle: any, pressed: any) => any;

      /** @noSelf */
      static RemoveTire: (part: any, explosion: any) => any;

      /** @noSelf */
      static RequiredKeyNotFound: (part: any, chr: any) => any;

      /** @noSelf */
      static split: (string: any, pattern: any) => any;

      /** @noSelf */
      static testItems: (chr: any, items: any, typeToItem: any) => any;

      /** @noSelf */
      static testPerks: (chr: any, perks: any) => any;

      /** @noSelf */
      static testProfession: (chr: any, professions: any) => any;

      /** @noSelf */
      static testRecipes: (chr: any, recipes: any) => any;

      /** @noSelf */
      static testTraits: (chr: any, traits: any) => any;

      /** @noSelf */
      static UninstallPart: (part: any, chr: any) => any;
    }
  }
  export namespace lua.server.Vehicles.Vehicles {}
}
