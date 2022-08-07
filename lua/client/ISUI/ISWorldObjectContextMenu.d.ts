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
 * File generated at: 2022-08-07T18:22:56.579Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    export abstract class ISWorldObjectContextMenu {
      static [id: string]: any;

      static blinkOption: any;

      onCheckDigitalCode: ((button: any, player: any, padlock: any, thumpable: any) => any) | any;

      onSetDigitalCode: ((button: any, player: any, padlock: any, thumpable: any) => any) | any;

      onSleepModalClick: ((button: any) => any) | any;

      /** @noSelf */
      static addRemoveCurtainOption: (context: any, worldobjects: any, curtain: any, player: any) => any;

      /** @noSelf */
      static addToolTip: () => any;

      /** @noSelf */
      static addWaterFromItem: (test: any, context: any, worldobjects: any, playerObj: any, playerInv: any) => any;

      /** @noSelf */
      static canCleanBlood: (playerObj: any, square: any) => any;

      /** @noSelf */
      static canStoreWater: (object: any) => any;

      /** @noSelf */
      static checkBlowTorchForBarricade: (chr: any) => any;

      /** @noSelf */
      static checkWeapon: (chr: any) => any;

      /** @noSelf */
      static clearFetch: () => any;

      /** @noSelf */
      static compareClothingBlood: (item1: any, item2: any) => any;

      /** @noSelf */
      static createMenu: (player: any, worldobjects: any, x: any, y: any, test: any) => any;

      /** @noSelf */
      static doChopTree: (playerObj: any, tree: any) => any;

      /** @noSelf */
      static doCleanBlood: (playerObj: any, square: any) => any;

      /** @noSelf */
      static doDrinkWaterMenu: (object: any, player: any, context: any) => any;

      /** @noSelf */
      static doFillWaterMenu: (sink: any, playerNum: any, context: any) => any;

      /** @noSelf */
      static doorCurtainCheck: (argTable: any) => any;

      /** @noSelf */
      static doRecipeUsingWaterMenu: (waterObject: any, playerNum: any, context: any) => any;

      /** @noSelf */
      static doRemoveGrass: (playerObj: any, square: any) => any;

      /** @noSelf */
      static doRemovePlant: (playerObj: any, square: any, wallVine: any) => any;

      /** @noSelf */
      static doScavengeOptions: (context: any, player: any, scavengeZone: any, clickedSquare: any) => any;

      /** @noSelf */
      static doSleepOption: (context: any, bed: any, player: any, playerObj: any) => any;

      /** @noSelf */
      static doWashClothingMenu: (sink: any, player: any, context: any) => any;

      /** @noSelf */
      static emptyRainCollector: (barrel: any, playerObj: any) => any;

      /** @noSelf */
      static equip: (playerObj: any, handItem: any, item: any, primary: any, twoHands: any) => any;

      /** @noSelf */
      static equip2: (player: any, handItem: any, item: any, primary: any) => any;

      /** @noSelf */
      static fetch: (v: any, player: any, doSquare: any) => any;

      /** @noSelf */
      static getFishingLure: (player: any, rod: any) => any;

      /** @noSelf */
      static getFishingRode: (playerObj: any) => any;

      /** @noSelf */
      static getSquaresInRadius: (
        worldX: any,
        worldY: any,
        worldZ: any,
        radius: any,
        doneSquares: any,
        squares: any
      ) => any;

      /** @noSelf */
      static getThumpableName: (thump: any) => any;

      /** @noSelf */
      static getWorldObjectsInRadius: (
        playerNum: any,
        screenX: any,
        screenY: any,
        squares: any,
        radius: any,
        worldObjects: any
      ) => any;

      /** @noSelf */
      static getZone: (x: any, y: any, z: any) => any;

      /** @noSelf */
      static grabItemTime: (playerObj: any, witem: any) => any;

      /** @noSelf */
      static handleCarBatteryCharger: (
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any
      ) => any;

      /** @noSelf */
      static handleCompost: (test: any, context: any, worldobjects: any, playerObj: any, playerInv: any) => any;

      /** @noSelf */
      static handleGrabWorldItem: (
        x: any,
        y: any,
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any
      ) => any;

      /** @noSelf */
      static handleInteraction: (
        x: any,
        y: any,
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any
      ) => any;

      /** @noSelf */
      static handleRainCollector: (test: any, context: any, worldobjects: any, playerObj: any, playerInv: any) => any;

      /** @noSelf */
      static haveWaterContainer: (playerId: any) => any;

      /** @noSelf */
      static isSomethingTo: (item: any, player: any) => any;

      /** @noSelf */
      static isThumpDoor: (thumpable: any) => any;

      /** @noSelf */
      static isTrappedAdjacentToWindow: (player: any, window: any) => any;

      /** @noSelf */
      static onActivateGenerator: (worldobjects: any, enable: any, generator: any, player: any) => any;

      /** @noSelf */
      static onAddCompost: (compost: any, item: any, playerObj: any) => any;

      /** @noSelf */
      static onAddFuel: (worldobjects: any, petrolCan: any, generator: any, player: any) => any;

      /** @noSelf */
      static onAddPlayerToSafehouse: (worldobjects: any, safehouse: any, player: any) => any;

      /** @noSelf */
      static onAddSheet: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onAddSheetRope: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onAddWaterFromItem: (worldobjects: any, waterObject: any, waterItem: any, playerObj: any) => any;

      /** @noSelf */
      static onBarricade: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onBurnCorpse: (worldobjects: any, player: any, corpse: any) => any;

      /** @noSelf */
      static onBuryCorpse: (grave: any, player: any, shovel: any) => any;

      /** @noSelf */
      static onCheckFishingNet: (worldobjects: any, player: any, trap: any, hours: any) => any;

      /** @noSelf */
      static onCheckStats: (worldobjects: any, player: any, otherPlayer: any) => any;

      /** @noSelf */
      static onChooseSafehouse: (worldobjects: any, building: any) => any;

      /** @noSelf */
      static onChopTree: (worldobjects: any, playerObj: any, tree: any) => any;

      /** @noSelf */
      static onCleanBlood: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onClearAshes: (worldobjects: any, player: any, ashes: any) => any;

      /** @noSelf */
      static onClimbOverFence: (worldobjects: any, fence: any, player: any) => any;

      /** @noSelf */
      static onClimbSheetRope: (worldobjects: any, square: any, down: any, player: any) => any;

      /** @noSelf */
      static onClimbThroughWindow: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onConfirmSleep: (this: any, button: any, player: any, bed: any) => any;

      /** @noSelf */
      static onDestroy: (worldobjects: any, player: any, sledgehammer: any) => any;

      /** @noSelf */
      static onDigGraves: (worldobjects: any, player: any, shovel: any) => any;

      /** @noSelf */
      static onDrink: (worldobjects: any, waterObject: any, player: any) => any;

      /** @noSelf */
      static onFillGrave: (grave: any, player: any, shovel: any) => any;

      /** @noSelf */
      static onFishing: (worldobjects: any, player: any) => any;

      /** @noSelf */
      static onFishingNet: (worldobjects: any, player: any) => any;

      /** @noSelf */
      static onFixGenerator: (worldobjects: any, generator: any, player: any) => any;

      /** @noSelf */
      static onFollow: (worldobjects: any, survivor: any) => any;

      /** @noSelf */
      static onGetCompost: (compost: any, item: any, playerObj: any) => any;

      /** @noSelf */
      static onGetDoorKey: (worldobjects: any, player: any, door: any, doorKeyId: any) => any;

      /** @noSelf */
      static onGrabAllWItems: (worldobjects: any, WItems: any, player: any) => any;

      /** @noSelf */
      static onGrabCorpseItem: (worldobjects: any, WItem: any, player: any) => any;

      /** @noSelf */
      static onGrabHalfWItems: (worldobjects: any, WItems: any, player: any) => any;

      /** @noSelf */
      static onGrabWItem: (worldobjects: any, WItem: any, player: any) => any;

      /** @noSelf */
      static onGuard: (worldobjects: any, survivor: any) => any;

      /** @noSelf */
      static onInfoGenerator: (worldobjects: any, generator: any, player: any) => any;

      /** @noSelf */
      static onInsertFuel: (lightSource: any, fuel: any, playerObj: any) => any;

      /** @noSelf */
      static onLightBattery: (worldobjects: any, light: any, player: any, remove: any, battery: any) => any;

      /** @noSelf */
      static onLightBulb: (worldobjects: any, light: any, player: any, remove: any, bulbitem: any) => any;

      /** @noSelf */
      static onLightModify: (worldobjects: any, light: any, player: any, scrapitem: any) => any;

      /** @noSelf */
      static onLockDoor: (worldobjects: any, player: any, door: any) => any;

      /** @noSelf */
      static onMedicalCheck: (worldobjects: any, player: any, otherPlayer: any) => any;

      /** @noSelf */
      static onMetalBarBarricade: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onMetalBarricade: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onMicrowaveSetting: (worldobjects: any, stove: any, player: any) => any;

      /** @noSelf */
      static onOpenCloseCurtain: (worldobjects: any, curtain: any, player: any) => any;

      /** @noSelf */
      static onOpenCloseDoor: (worldobjects: any, door: any, player: any) => any;

      /** @noSelf */
      static onOpenCloseWindow: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onPickupBrokenGlass: (worldobjects: any, brokenGlass: any, player: any) => any;

      /** @noSelf */
      static onPlugGenerator: (worldobjects: any, generator: any, player: any, plug: any) => any;

      /** @noSelf */
      static onPlumbItem: (worldobjects: any, player: any, itemToPipe: any) => any;

      /** @noSelf */
      static onPutDigitalPadlock: (worldobjects: any, player: any, thump: any, padlock: any) => any;

      /** @noSelf */
      static onPutDigitalPadlockWalkToComplete: (player: any, thump: any, padlock: any) => any;

      /** @noSelf */
      static onPutPadlock: (worldobjects: any, player: any, thump: any, padlock: any) => any;

      /** @noSelf */
      static onReleaseSafeHouse: (worldobjects: any, safehouse: any, player: any) => any;

      /** @noSelf */
      static onRemoveBrokenGlass: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onRemoveCurtain: (worldobjects: any, curtain: any, player: any) => any;

      /** @noSelf */
      static onRemoveDigitalPadlock: (worldobjects: any, player: any, thump: any) => any;

      /** @noSelf */
      static onRemoveDigitalPadlockWalkToComplete: (player: any, thump: any) => any;

      /** @noSelf */
      static onRemoveFire: (worldobjects: any, firetile: any, extinguisher: any, player: any) => any;

      /** @noSelf */
      static onRemoveFishingNet: (worldobjects: any, player: any, trap: any) => any;

      /** @noSelf */
      static onRemoveFuel: (lightSource: any, player: any) => any;

      /** @noSelf */
      static onRemoveGrass: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onRemovePadlock: (worldobjects: any, player: any, thump: any) => any;

      /** @noSelf */
      static onRemovePlant: (worldobjects: any, square: any, wallVine: any, player: any) => any;

      /** @noSelf */
      static onRemovePlayerFromSafehouse: (worldobjects: any, safehouse: any, playerName: any, playerNum: any) => any;

      /** @noSelf */
      static onRemoveSheetRope: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onRemoveWallVine: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onRest: (bed: any, player: any) => any;

      /** @noSelf */
      static onScavenge: (worldobjects: any, player: any, zone: any, clickedSquare: any) => any;

      /** @noSelf */
      static onSetComboWasherDryerMode: (playerObj: any, object: any, mode: any) => any;

      /** @noSelf */
      static onSit: (worldobjects: any, chair: any, player: any) => any;

      /** @noSelf */
      static onSitOnGround: (player: any) => any;

      /** @noSelf */
      static onSleep: (bed: any, player: any) => any;

      /** @noSelf */
      static onSleepWalkToComplete: (player: any, bed: any) => any;

      /** @noSelf */
      static onSmashWindow: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onStay: (worldobjects: any, survivor: any) => any;

      /** @noSelf */
      static onStoveSetting: (worldobjects: any, stove: any, player: any) => any;

      /** @noSelf */
      static onTakeFuel: (worldobjects: any, playerObj: any, fuelStation: any) => any;

      /** @noSelf */
      static onTakeGenerator: (worldobjects: any, generator: any, player: any) => any;

      /** @noSelf */
      static onTakeSafeHouse: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onTakeTrap: (worldobjects: any, trap: any, player: any) => any;

      /** @noSelf */
      static onTakeWater: (
        worldobjects: any,
        waterObject: any,
        waterContainerList: any,
        waterContainer: any,
        player: any
      ) => any;

      /** @noSelf */
      static onTalkTo: (worldobjects: any, survivor: any) => any;

      /** @noSelf */
      static onTeamUp: (worldobjects: any, survivor: any) => any;

      /** @noSelf */
      static onTeleport: () => any;

      /** @noSelf */
      static onToggleClothingDryer: (worldobjects: any, object: any, playerId: any) => any;

      /** @noSelf */
      static onToggleClothingWasher: (worldobjects: any, object: any, playerId: any) => any;

      /** @noSelf */
      static onToggleComboWasherDryer: (playerObj: any, object: any) => any;

      /** @noSelf */
      static onToggleLight: (worldobjects: any, light: any, player: any) => any;

      /** @noSelf */
      static onToggleStove: (worldobjects: any, stove: any, player: any) => any;

      /** @noSelf */
      static onToggleThumpableLight: (lightSource: any, player: any) => any;

      /** @noSelf */
      static onTrade: (worldobjects: any, player: any, otherPlayer: any) => any;

      /** @noSelf */
      static onUnbarricade: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onUnbarricadeMetal: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onUnbarricadeMetalBar: (worldobjects: any, window: any, player: any) => any;

      /** @noSelf */
      static onUnLockDoor: (worldobjects: any, player: any, door: any, doorKeyId: any) => any;

      /** @noSelf */
      static onViewSafeHouse: (worldobjects: any, safehouse: any, player: any) => any;

      /** @noSelf */
      static onWakeOther: (worldobjects: any, player: any, otherPlayer: any) => any;

      /** @noSelf */
      static onWalkTo: (worldobjects: any, item: any, playerNum: any) => any;

      /** @noSelf */
      static onWashClothing: (
        playerObj: any,
        sink: any,
        soapList: any,
        washList: any,
        singleClothing: any,
        noSoap: any
      ) => any;

      /** @noSelf */
      static onWashYourself: (playerObj: any, sink: any, soapList: any) => any;

      /** @noSelf */
      static restoreDoor: (playerObj: any, door: any, isOpen: any) => any;

      /** @noSelf */
      static setTest: () => any;

      /** @noSelf */
      static toggleClothingDryer: (context: any, worldobjects: any, playerId: any, object: any) => any;

      /** @noSelf */
      static toggleClothingWasher: (context: any, worldobjects: any, playerId: any, object: any) => any;

      /** @noSelf */
      static toggleComboWasherDryer: (context: any, playerObj: any, object: any) => any;

      /** @noSelf */
      static transferIfNeeded: (playerObj: any, item: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISWorldObjectContextMenu {}
}
