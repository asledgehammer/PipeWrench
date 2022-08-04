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
 * File generated at: 2022-08-04T20:14:43.574Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    export class ISInventoryPaneContextMenu {
      private constructor();

      static [id: string]: any;

      static blinkOption: any;

      static dontCreateMenu: any;

      onRenameBagClick: ((button: any, player: any, item: any) => any) | any;

      onRenameFoodClick: ((button: any, player: any, item: any) => any) | any;

      onSetBombTimerClick: ((button: any, player: any, item: any) => any) | any;

      onWriteSomethingClick: ((button: any) => any) | any;

      static addDynamicalContextMenu: (
        selectedItem: any,
        context: any,
        recipeList: any,
        player: any,
        containerList: any
      ) => any;

      static addEatTooltip: (option: any, items: any, percent: any) => any;

      static addFixerSubOption: (
        brokenObject: any,
        player: any,
        fixing: any,
        fixer: any,
        subMenuFix: any,
        vehiclePart: any
      ) => any;

      static addItemInEvoRecipe: (
        subMenuRecipe: any,
        baseItem: any,
        evoItem: any,
        extraInfo: any,
        evorecipe2: any,
        player: any
      ) => any;

      static addToolTip: () => any;

      static applyBandage: (item: any, bodyPart: any, player: any) => any;

      static buildFixingMenu: (
        brokenObject: any,
        player: any,
        fixing: any,
        fixOption: any,
        subMenuFix: any,
        vehiclePart: any
      ) => any;

      static canAddManyItems: (recipe: any, selectedItem: any, playerObj: any) => any;

      static canMoveTo: (items: any, dest: any, player: any) => any;

      static canReplaceStoreWater: (item: any) => any;

      static canReplaceStoreWater2: (itemType: any) => any;

      static canRipItem: (playerObj: any, item: any) => any;

      static canUnpack: (items: any, player: any) => any;

      static checkConsolidate: (drainable: any, player: any, context: any, previousPourInto: any) => any;

      static createMenu: (player: any, isInPlayerInventory: any, items: any, x: any, y: any, origin: any) => any;

      static createMenuNoItems: (playerNum: any, isLoot: any, x: any, y: any) => any;

      static doBandageMenu: (context: any, items: any, player: any) => any;

      static doBulletMenu: (playerObj: any, weapon: any, context: any) => any;

      static doChangeFireModeMenu: (playerObj: any, weapon: any, context: any) => any;

      static doClothingItemExtraMenu: (context: any, clothingItemExtra: any, playerObj: any) => any;

      static doClothingPatchMenu: (player: any, clothing: any, context: any) => any;

      static doClothingRecipeMenu: (playerObj: any, clothing: any, items: any, context: any) => any;

      static doDrinkForThirstMenu: (context: any, playerObj: any, waterContainer: any) => any;

      static doEatOption: (context: any, cmd: any, items: any, player: any, playerObj: any, foodItems: any) => any;

      static doEquipOption: (context: any, playerObj: any, isWeapon: any, items: any, player: any) => any;

      static doEvorecipeMenu: (
        context: any,
        items: any,
        player: any,
        evorecipe: any,
        baseItem: any,
        containerList: any
      ) => any;

      static doGrabMenu: (context: any, items: any, player: any) => any;

      static doLiteratureMenu: (context: any, items: any, player: any) => any;

      static doMagazineMenu: (playerObj: any, magazine: any, context: any) => any;

      static doMakeUpMenu: (context: any, makeup: any, playerObj: any) => any;

      static doPlace3DItemOption: (items: any, player: any, context: any) => any;

      static doReloadMenuForBullets: (playerObj: any, bullet: any, context: any) => any;

      static doReloadMenuForMagazine: (playerObj: any, magazine: any, context: any) => any;

      static doReloadMenuForWeapon: (playerObj: any, weapon: any, context: any) => any;

      static doStoveMenu: (context: any, playerNum: any) => any;

      static doTrashCanMenu: (context: any, playerNum: any) => any;

      static doWearClothingMenu: (player: any, clothing: any, items: any, context: any) => any;

      static doWearClothingTooltip: (playerObj: any, newItem: any, currentItem: any, option: any) => any;

      static dropItem: (item: any, player: any) => any;

      static dryMyself: (item: any, player: any) => any;

      static eatItem: (item: any, percentage: any, player: any) => any;

      static equipHeavyItem: (playerObj: any, item: any) => any;

      static equipWeapon: (weapon: any, primary: any, twoHands: any, player: any) => any;

      static getContainers: (character: any) => any;

      static getEvoItemCategories: (items: any, evorecipe: any) => any;

      static getItemInstance: (type: any) => any;

      static getRealEvolvedItemUse: (evoItem: any, evorecipe2: any, cookingLvl: any) => any;

      static hasRoomForAny: (playerObj: any, container: any, items: any) => any;

      static haveDamagePart: (playerId: any) => any;

      static information: (item: any) => any;

      static isAllFav: (items: any) => any;

      static isAllNoDropMoveable: (items: any) => any;

      static isAnyAllowed: (container: any, items: any) => any;

      static litCandleExtinguish: (item: any, player: any) => any;

      static onActivateItem: (light: any, player: any) => any;

      static onAddItemInEvoRecipe: (recipe: any, baseItem: any, usedItem: any, player: any) => any;

      static onApplyBandage: (bandages: any, bodyPart: any, player: any) => any;

      static onChangefiremode: (playerObj: any, weapon: any, newfiremode: any) => any;

      static onCheckMap: (map: any, player: any) => any;

      static onClothingItemExtra: (item: any, extra: any, playerObj: any) => any;

      static onConsolidate: (drainable: any, intoItem: any, player: any) => any;

      static onConsolidateAll: (drainable: any, consolidateList: any, player: any) => any;

      static OnCraft: (selectedItem: any, recipe: any, player: any, all: any) => any;

      static OnCraftComplete: (
        completedAction: any,
        recipe: any,
        playerObj: any,
        container: any,
        containers: any,
        selectedItem: any
      ) => any;

      static onCraftSheetRope: (playerObj: any, items: any) => any;

      static onDrink: (items: any, waterContainer: any, percentage: any, player: any) => any;

      static onDrinkForThirst: (waterContainer: any, playerObj: any) => any;

      static onDropItems: (items: any, player: any) => any;

      static onDryMyself: (towels: any, player: any) => any;

      static onDumpContents: (items: any, item: any, time: any, player: any) => any;

      static onDyeHair: (hairDye: any, playerObj: any, beard: any) => any;

      static onEatItems: (items: any, percentage: any, player: any) => any;

      static onEditItem: (items: any, player: any, item: any) => any;

      static onEjectMagazine: (playerObj: any, weapon: any) => any;

      static onEmptyWaterContainer: (items: any, waterSource: any, player: any) => any;

      static onFavorite: (items: any, item2: any, fav: any) => any;

      static onFix: (brokenObject: any, player: any, fixing: any, fixer: any, vehiclePart: any) => any;

      static onGrabHalfItems: (items: any, player: any) => any;

      static onGrabItems: (items: any, player: any) => any;

      static onGrabOneItems: (items: any, player: any) => any;

      static onInformationItems: (items: any) => any;

      static onInsertMagazine: (playerObj: any, weapon: any, magazine: any) => any;

      static onInspectClothing: (playerObj: any, clothing: any) => any;

      static onInspectClothingUI: (player: any, clothing: any) => any;

      static OnLinkRemoteController: (itemToLink: any, remoteController: any, player: any) => any;

      static onLiteratureItems: (items: any, player: any) => any;

      static onLoadBulletsInMagazine: (playerObj: any, magazine: any, ammoCount: any) => any;

      static onLoadBulletsIntoFirearm: (playerObj: any, weapon: any) => any;

      static onMakeUp: (makeup: any, playerObj: any) => any;

      static onMoveItemsTo: (items: any, dest: any, player: any) => any;

      static onPillsItems: (items: any, player: any) => any;

      static onPlaceCarBatteryCharger: (playerObj: any, carBatteryCharger: any) => any;

      static onPlaceItemOnGround: (items: any, playerObj: any) => any;

      static onPlaceTrap: (weapon: any, player: any) => any;

      static OnPrimaryWeapon: (items: any, player: any) => any;

      static onPutItems: (items: any, player: any) => any;

      static onRackGun: (playerObj: any, weapon: any) => any;

      static OnReload: (items: any, player: any) => any;

      static onRemoveUpgradeWeapon: (weapon: any, part: any, playerObj: any) => any;

      static onRenameBag: (bag: any, player: any) => any;

      static onRenameFood: (food: any, player: any) => any;

      static onRenameMap: (map: any, player: any) => any;

      static OnResetRemoteControlID: (item: any, player: any) => any;

      static onRipClothing: (playerObj: any, items: any) => any;

      static OnSecondWeapon: (items: any, player: any) => any;

      static onSetAlarm: (alarm: any, player: any) => any;

      static onSetBombTimer: (trap: any, player: any) => any;

      static onStopAlarm: (alarm: any, player: any) => any;

      static onTransferWater: (items: any, itemFrom: any, itemTo: any, player: any) => any;

      static OnTriggerRemoteController: (remoteController: any, player: any) => any;

      static OnTwoHandsEquip: (items: any, player: any) => any;

      static onUnEquip: (items: any, player: any) => any;

      static onUnloadBulletsFromFirearm: (playerObj: any, weapon: any) => any;

      static onUnloadBulletsFromMagazine: (playerObj: any, magazine: any) => any;

      static onUpgradeWeapon: (weapon: any, part: any, player: any) => any;

      static onWearItems: (items: any, player: any) => any;

      static onWriteSomething: (notebook: any, editable: any, player: any) => any;

      static readItem: (item: any, player: any) => any;

      static removeAllPatches: (player: any, clothing: any, parts: any, needle: any) => any;

      static removePatch: (player: any, clothing: any, part: any, needle: any) => any;

      static removeToolTip: () => any;

      static repairAllClothing: (
        player: any,
        clothing: any,
        parts: any,
        fabric: any,
        thread: any,
        needle: any,
        onlyHoles: any
      ) => any;

      static repairClothing: (player: any, clothing: any, part: any, fabric: any, thread: any, needle: any) => any;

      static startWith: (String: any, Start: any) => any;

      static takePill: (item: any, player: any) => any;

      static transferBullets: (playerObj: any, ammoType: any, currentAmmo: any, maxAmmo: any) => any;

      static transferIfNeeded: (playerObj: any, item: any) => any;

      static transferItems: (items: any, playerInv: any, player: any, dontWalk: any) => any;

      static unequipItem: (item: any, player: any) => any;

      static wearItem: (item: any, player: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISInventoryPaneContextMenu {}
}
