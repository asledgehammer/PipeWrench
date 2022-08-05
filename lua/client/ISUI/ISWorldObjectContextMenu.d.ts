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
 * File generated at: 2022-08-04T23:00:35.235Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    export class ISWorldObjectContextMenu {
      private constructor();

      static [id: string]: any;

      static blinkOption: any;

      onCheckDigitalCode: ((button: any, player: any, padlock: any, thumpable: any) => any) | any;

      onSetDigitalCode: ((button: any, player: any, padlock: any, thumpable: any) => any) | any;

      onSleepModalClick: ((button: any) => any) | any;

      static addRemoveCurtainOption: (context: any, worldobjects: any, curtain: any, player: any) => any;

      static addToolTip: () => any;

      static addWaterFromItem: (test: any, context: any, worldobjects: any, playerObj: any, playerInv: any) => any;

      static canCleanBlood: (playerObj: any, square: any) => any;

      static canStoreWater: (object: any) => any;

      static checkBlowTorchForBarricade: (chr: any) => any;

      static checkWeapon: (chr: any) => any;

      static clearFetch: () => any;

      static compareClothingBlood: (item1: any, item2: any) => any;

      static createMenu: (player: any, worldobjects: any, x: any, y: any, test: any) => any;

      static doAddFuelGenerator: (
        worldobjects: any,
        generator: any,
        fuelContainerList: any,
        fuelContainer: any,
        player: any
      ) => any;

      static doBrushToolOptions: (context: any, worldobjects: any, player: any) => any;

      static doChopTree: (playerObj: any, tree: any) => any;

      static doCleanBlood: (playerObj: any, square: any) => any;

      static doDrinkWaterMenu: (object: any, player: any, context: any) => any;

      static doFillFuelMenu: (source: any, playerNum: any, context: any) => any;

      static doFillWaterMenu: (sink: any, playerNum: any, context: any) => any;

      static doorCurtainCheck: (argTable: any) => any;

      static doRecipeUsingWaterMenu: (waterObject: any, playerNum: any, context: any) => any;

      static doRemoveGrass: (playerObj: any, square: any) => any;

      static doRemovePlant: (playerObj: any, square: any, wallVine: any) => any;

      static doScavengeOptions: (context: any, player: any, scavengeZone: any, clickedSquare: any) => any;

      static doSleepOption: (context: any, bed: any, player: any, playerObj: any) => any;

      static doWashClothingMenu: (sink: any, player: any, context: any) => any;

      static emptyRainCollector: (barrel: any, playerObj: any) => any;

      static equip: (playerObj: any, handItem: any, item: any, primary: any, twoHands: any) => any;

      static equip2: (player: any, handItem: any, item: any, primary: any) => any;

      static fetch: (v: any, player: any, doSquare: any) => any;

      static getFishingLure: (player: any, rod: any) => any;

      static getFishingRode: (playerObj: any) => any;

      static getSquaresInRadius: (
        worldX: any,
        worldY: any,
        worldZ: any,
        radius: any,
        doneSquares: any,
        squares: any
      ) => any;

      static getThumpableName: (thump: any) => any;

      static getWorldObjectsInRadius: (
        playerNum: any,
        screenX: any,
        screenY: any,
        squares: any,
        radius: any,
        worldObjects: any
      ) => any;

      static getZone: (x: any, y: any, z: any) => any;

      static grabItemTime: (playerObj: any, witem: any) => any;

      static handleCarBatteryCharger: (
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any
      ) => any;

      static handleCompost: (test: any, context: any, worldobjects: any, playerObj: any, playerInv: any) => any;

      static handleGrabWorldItem: (
        x: any,
        y: any,
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any
      ) => any;

      static handleInteraction: (
        x: any,
        y: any,
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any
      ) => any;

      static handleRainCollector: (test: any, context: any, worldobjects: any, playerObj: any, playerInv: any) => any;

      static haveWaterContainer: (playerId: any) => any;

      static isSomethingTo: (item: any, player: any) => any;

      static isThumpDoor: (thumpable: any) => any;

      static isTrappedAdjacentToWindow: (player: any, window: any) => any;

      static onActivateGenerator: (worldobjects: any, enable: any, generator: any, player: any) => any;

      static onAddCompost: (compost: any, item: any, playerObj: any) => any;

      static onAddFuel: (worldobjects: any, petrolCan: any, generator: any, player: any) => any;

      static onAddFuelGenerator: (worldobjects: any, petrolCan: any, generator: any, player: any, context: any) => any;

      static onAddPlayerToSafehouse: (worldobjects: any, safehouse: any, player: any) => any;

      static onAddSheet: (worldobjects: any, window: any, player: any) => any;

      static onAddSheetRope: (worldobjects: any, window: any, player: any) => any;

      static onAddWaterFromItem: (worldobjects: any, waterObject: any, waterItem: any, playerObj: any) => any;

      static onBarricade: (worldobjects: any, window: any, player: any) => any;

      static onBurnCorpse: (worldobjects: any, player: any, corpse: any) => any;

      static onBuryCorpse: (grave: any, player: any, shovel: any) => any;

      static onCheckFishingNet: (worldobjects: any, player: any, trap: any, hours: any) => any;

      static onCheckStats: (worldobjects: any, player: any, otherPlayer: any) => any;

      static onChooseSafehouse: (worldobjects: any, building: any) => any;

      static onChopTree: (worldobjects: any, playerObj: any, tree: any) => any;

      static onCleanBlood: (worldobjects: any, square: any, player: any) => any;

      static onClearAshes: (worldobjects: any, player: any, ashes: any) => any;

      static onClimbOverFence: (worldobjects: any, fence: any, player: any) => any;

      static onClimbSheetRope: (worldobjects: any, square: any, down: any, player: any) => any;

      static onClimbThroughWindow: (worldobjects: any, window: any, player: any) => any;

      static onConfirmSleep: (this: any, button: any, player: any, bed: any) => any;

      static onDestroy: (worldobjects: any, player: any, sledgehammer: any) => any;

      static onDigGraves: (worldobjects: any, player: any, shovel: any) => any;

      static onDrink: (worldobjects: any, waterObject: any, player: any) => any;

      static onFillGrave: (grave: any, player: any, shovel: any) => any;

      static onFishing: (worldobjects: any, player: any) => any;

      static onFishingNet: (worldobjects: any, player: any) => any;

      static onFixGenerator: (worldobjects: any, generator: any, player: any) => any;

      static onFollow: (worldobjects: any, survivor: any) => any;

      static onGetCompost: (compost: any, item: any, playerObj: any) => any;

      static onGetDoorKey: (worldobjects: any, player: any, door: any, doorKeyId: any) => any;

      static onGrabAllWItems: (worldobjects: any, WItems: any, player: any) => any;

      static onGrabCorpseItem: (worldobjects: any, WItem: any, player: any) => any;

      static onGrabHalfWItems: (worldobjects: any, WItems: any, player: any) => any;

      static onGrabWItem: (worldobjects: any, WItem: any, player: any) => any;

      static onGuard: (worldobjects: any, survivor: any) => any;

      static onInfoGenerator: (worldobjects: any, generator: any, player: any) => any;

      static onInsertFuel: (lightSource: any, fuel: any, playerObj: any) => any;

      static onLightBattery: (worldobjects: any, light: any, player: any, remove: any, battery: any) => any;

      static onLightBulb: (worldobjects: any, light: any, player: any, remove: any, bulbitem: any) => any;

      static onLightModify: (worldobjects: any, light: any, player: any, scrapitem: any) => any;

      static onLockDoor: (worldobjects: any, player: any, door: any) => any;

      static onMedicalCheck: (worldobjects: any, player: any, otherPlayer: any) => any;

      static onMetalBarBarricade: (worldobjects: any, window: any, player: any) => any;

      static onMetalBarricade: (worldobjects: any, window: any, player: any) => any;

      static onMicrowaveSetting: (worldobjects: any, stove: any, player: any) => any;

      static onOpenCloseCurtain: (worldobjects: any, curtain: any, player: any) => any;

      static onOpenCloseDoor: (worldobjects: any, door: any, player: any) => any;

      static onOpenCloseWindow: (worldobjects: any, window: any, player: any) => any;

      static onPickupBrokenGlass: (worldobjects: any, brokenGlass: any, player: any) => any;

      static onPlugGenerator: (worldobjects: any, generator: any, player: any, plug: any) => any;

      static onPlumbItem: (worldobjects: any, player: any, itemToPipe: any) => any;

      static onPutDigitalPadlock: (worldobjects: any, player: any, thump: any, padlock: any) => any;

      static onPutDigitalPadlockWalkToComplete: (player: any, thump: any, padlock: any) => any;

      static onPutPadlock: (worldobjects: any, player: any, thump: any, padlock: any) => any;

      static onReleaseSafeHouse: (worldobjects: any, safehouse: any, player: any) => any;

      static onRemoveBrokenGlass: (worldobjects: any, window: any, player: any) => any;

      static onRemoveCurtain: (worldobjects: any, curtain: any, player: any) => any;

      static onRemoveDigitalPadlock: (worldobjects: any, player: any, thump: any) => any;

      static onRemoveDigitalPadlockWalkToComplete: (player: any, thump: any) => any;

      static onRemoveFire: (worldobjects: any, firetile: any, extinguisher: any, player: any) => any;

      static onRemoveFishingNet: (worldobjects: any, player: any, trap: any) => any;

      static onRemoveFuel: (lightSource: any, player: any) => any;

      static onRemoveGrass: (worldobjects: any, square: any, player: any) => any;

      static onRemovePadlock: (worldobjects: any, player: any, thump: any) => any;

      static onRemovePlant: (worldobjects: any, square: any, wallVine: any, player: any) => any;

      static onRemovePlayerFromSafehouse: (worldobjects: any, safehouse: any, playerName: any, playerNum: any) => any;

      static onRemoveSheetRope: (worldobjects: any, window: any, player: any) => any;

      static onRemoveWallVine: (worldobjects: any, square: any, player: any) => any;

      static onRest: (bed: any, player: any) => any;

      static onScavenge: (worldobjects: any, player: any, zone: any, clickedSquare: any) => any;

      static onSetComboWasherDryerMode: (playerObj: any, object: any, mode: any) => any;

      static onSit: (worldobjects: any, chair: any, player: any) => any;

      static onSitOnGround: (player: any) => any;

      static onSleep: (bed: any, player: any) => any;

      static onSleepWalkToComplete: (player: any, bed: any) => any;

      static onSmashWindow: (worldobjects: any, window: any, player: any) => any;

      static onStay: (worldobjects: any, survivor: any) => any;

      static onStoveSetting: (worldobjects: any, stove: any, player: any) => any;

      static onTakeFuel: (worldobjects: any, playerObj: any, fuelStation: any) => any;

      static onTakeFuelNew: (
        worldobjects: any,
        fuelObject: any,
        fuelContainerList: any,
        fuelContainer: any,
        player: any
      ) => any;

      static onTakeGenerator: (worldobjects: any, generator: any, player: any) => any;

      static onTakeSafeHouse: (worldobjects: any, square: any, player: any) => any;

      static onTakeTrap: (worldobjects: any, trap: any, player: any) => any;

      static onTakeWater: (
        worldobjects: any,
        waterObject: any,
        waterContainerList: any,
        waterContainer: any,
        player: any
      ) => any;

      static onTalkTo: (worldobjects: any, survivor: any) => any;

      static onTeamUp: (worldobjects: any, survivor: any) => any;

      static onTeleport: () => any;

      static onToggleClothingDryer: (worldobjects: any, object: any, playerId: any) => any;

      static onToggleClothingWasher: (worldobjects: any, object: any, playerId: any) => any;

      static onToggleComboWasherDryer: (playerObj: any, object: any) => any;

      static onToggleLight: (worldobjects: any, light: any, player: any) => any;

      static onToggleStove: (worldobjects: any, stove: any, player: any) => any;

      static onToggleThumpableLight: (lightSource: any, player: any) => any;

      static onTrade: (worldobjects: any, player: any, otherPlayer: any) => any;

      static onUnbarricade: (worldobjects: any, window: any, player: any) => any;

      static onUnbarricadeMetal: (worldobjects: any, window: any, player: any) => any;

      static onUnbarricadeMetalBar: (worldobjects: any, window: any, player: any) => any;

      static onUnLockDoor: (worldobjects: any, player: any, door: any, doorKeyId: any) => any;

      static onViewSafeHouse: (worldobjects: any, safehouse: any, player: any) => any;

      static onWakeOther: (worldobjects: any, player: any, otherPlayer: any) => any;

      static onWalkTo: (worldobjects: any, item: any, playerNum: any) => any;

      static onWashClothing: (
        playerObj: any,
        sink: any,
        soapList: any,
        washList: any,
        singleClothing: any,
        noSoap: any
      ) => any;

      static onWashYourself: (playerObj: any, sink: any, soapList: any) => any;

      static restoreDoor: (playerObj: any, door: any, isOpen: any) => any;

      static setTest: () => any;

      static toggleClothingDryer: (context: any, worldobjects: any, playerId: any, object: any) => any;

      static toggleClothingWasher: (context: any, worldobjects: any, playerId: any, object: any) => any;

      static toggleComboWasherDryer: (context: any, playerObj: any, object: any) => any;

      static transferIfNeeded: (playerObj: any, item: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISWorldObjectContextMenu {}
}
