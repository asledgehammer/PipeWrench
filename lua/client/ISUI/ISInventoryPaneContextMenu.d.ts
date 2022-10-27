/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class ISInventoryPaneContextMenu {
      static [id: string]: any;

      static blinkOption: any;

      static dontCreateMenu: any;

      onRenameBagClick: ((button: any, player: any, item: any) => any) | any;

      onRenameFoodClick: ((button: any, player: any, item: any) => any) | any;

      onSetBombTimerClick: ((button: any, player: any, item: any) => any) | any;

      onWriteSomethingClick: ((button: any) => any) | any;

      /** @noSelf */
      static addDynamicalContextMenu: (
        selectedItem: any,
        context: any,
        recipeList: any,
        player: any,
        containerList: any
      ) => any;

      /** @noSelf */
      static addEatTooltip: (option: any, items: any, percent: any) => any;

      /** @noSelf */
      static addFixerSubOption: (
        brokenObject: any,
        player: any,
        fixing: any,
        fixer: any,
        subMenuFix: any,
        vehiclePart: any
      ) => any;

      /** @noSelf */
      static addItemInEvoRecipe: (
        subMenuRecipe: any,
        baseItem: any,
        evoItem: any,
        extraInfo: any,
        evorecipe2: any,
        player: any
      ) => any;

      /** @noSelf */
      static addToolTip: () => any;

      /** @noSelf */
      static applyBandage: (item: any, bodyPart: any, player: any) => any;

      /** @noSelf */
      static AutoDrinkOff: (waterContainer: any) => any;

      /** @noSelf */
      static AutoDrinkOn: (waterContainer: any) => any;

      /** @noSelf */
      static buildFixingMenu: (
        brokenObject: any,
        player: any,
        fixing: any,
        fixOption: any,
        subMenuFix: any,
        vehiclePart: any
      ) => any;

      /** @noSelf */
      static canAddManyItems: (recipe: any, selectedItem: any, playerObj: any) => any;

      /** @noSelf */
      static canMoveTo: (items: any, dest: any, player: any) => any;

      /** @noSelf */
      static canReplaceStoreWater: (item: any) => any;

      /** @noSelf */
      static canReplaceStoreWater2: (itemType: any) => any;

      /** @noSelf */
      static canRipItem: (playerObj: any, item: any) => any;

      /** @noSelf */
      static canUnpack: (items: any, player: any) => any;

      /** @noSelf */
      static checkConsolidate: (drainable: any, player: any, context: any, previousPourInto: any) => any;

      /** @noSelf */
      static createMenu: (player: any, isInPlayerInventory: any, items: any, x: any, y: any, origin: any) => any;

      /** @noSelf */
      static createMenuNoItems: (playerNum: any, isLoot: any, x: any, y: any) => any;

      /** @noSelf */
      static doBandageMenu: (context: any, items: any, player: any) => any;

      /** @noSelf */
      static doBulletMenu: (playerObj: any, weapon: any, context: any) => any;

      /** @noSelf */
      static doChangeFireModeMenu: (playerObj: any, weapon: any, context: any) => any;

      /** @noSelf */
      static doClothingItemExtraMenu: (context: any, clothingItemExtra: any, playerObj: any) => any;

      /** @noSelf */
      static doClothingPatchMenu: (player: any, clothing: any, context: any) => any;

      /** @noSelf */
      static doClothingRecipeMenu: (playerObj: any, clothing: any, items: any, context: any) => any;

      /** @noSelf */
      static doDrinkForThirstMenu: (context: any, playerObj: any, waterContainer: any) => any;

      /** @noSelf */
      static doEatOption: (context: any, cmd: any, items: any, player: any, playerObj: any, foodItems: any) => any;

      /** @noSelf */
      static doEquipOption: (context: any, playerObj: any, isWeapon: any, items: any, player: any) => any;

      /** @noSelf */
      static doEvorecipeMenu: (
        context: any,
        items: any,
        player: any,
        evorecipe: any,
        baseItem: any,
        containerList: any
      ) => any;

      /** @noSelf */
      static doGrabMenu: (context: any, items: any, player: any) => any;

      /** @noSelf */
      static doLiteratureMenu: (context: any, items: any, player: any) => any;

      /** @noSelf */
      static doMagazineMenu: (playerObj: any, magazine: any, context: any) => any;

      /** @noSelf */
      static doMakeUpMenu: (context: any, makeup: any, playerObj: any) => any;

      /** @noSelf */
      static doPlace3DItemOption: (items: any, player: any, context: any) => any;

      /** @noSelf */
      static doReloadMenuForBullets: (playerObj: any, bullet: any, context: any) => any;

      /** @noSelf */
      static doReloadMenuForMagazine: (playerObj: any, magazine: any, context: any) => any;

      /** @noSelf */
      static doReloadMenuForWeapon: (playerObj: any, weapon: any, context: any) => any;

      /** @noSelf */
      static doStoveMenu: (context: any, playerNum: any) => any;

      /** @noSelf */
      static doTrashCanMenu: (context: any, playerNum: any) => any;

      /** @noSelf */
      static doWearClothingMenu: (player: any, clothing: any, items: any, context: any) => any;

      /** @noSelf */
      static doWearClothingTooltip: (playerObj: any, newItem: any, currentItem: any, option: any) => any;

      /** @noSelf */
      static dropItem: (item: any, player: any) => any;

      /** @noSelf */
      static dryMyself: (item: any, player: any) => any;

      /** @noSelf */
      static eatItem: (item: any, percentage: any, player: any) => any;

      /** @noSelf */
      static equipHeavyItem: (playerObj: any, item: any) => any;

      /** @noSelf */
      static equipWeapon: (weapon: any, primary: any, twoHands: any, player: any) => any;

      /** @noSelf */
      static getContainers: (character: any) => any;

      /** @noSelf */
      static getEvoItemCategories: (items: any, evorecipe: any) => any;

      /** @noSelf */
      static getItemInstance: (type: any) => any;

      /** @noSelf */
      static getRealEvolvedItemUse: (evoItem: any, evorecipe2: any, cookingLvl: any) => any;

      /** @noSelf */
      static hasRoomForAny: (playerObj: any, container: any, items: any) => any;

      /** @noSelf */
      static haveDamagePart: (playerId: any) => any;

      /** @noSelf */
      static information: (item: any) => any;

      /** @noSelf */
      static isAllFav: (items: any) => any;

      /** @noSelf */
      static isAllNoDropMoveable: (items: any) => any;

      /** @noSelf */
      static isAnyAllowed: (container: any, items: any) => any;

      /** @noSelf */
      static litCandleExtinguish: (item: any, player: any) => any;

      /** @noSelf */
      static onActivateItem: (light: any, player: any) => any;

      /** @noSelf */
      static onAddItemInEvoRecipe: (recipe: any, baseItem: any, usedItem: any, player: any) => any;

      /** @noSelf */
      static onApplyBandage: (bandages: any, bodyPart: any, player: any) => any;

      /** @noSelf */
      static onChangefiremode: (playerObj: any, weapon: any, newfiremode: any) => any;

      /** @noSelf */
      static onCheckMap: (map: any, player: any) => any;

      /** @noSelf */
      static onClothingItemExtra: (item: any, extra: any, playerObj: any) => any;

      /** @noSelf */
      static onConsolidate: (drainable: any, intoItem: any, player: any) => any;

      /** @noSelf */
      static onConsolidateAll: (drainable: any, consolidateList: any, player: any) => any;

      /** @noSelf */
      static OnCraft: (selectedItem: any, recipe: any, player: any, all: any) => any;

      /** @noSelf */
      static OnCraftComplete: (
        completedAction: any,
        recipe: any,
        playerObj: any,
        container: any,
        containers: any,
        selectedItemType: any,
        selectedItemContainer: any
      ) => any;

      /** @noSelf */
      static onCraftSheetRope: (playerObj: any, items: any) => any;

      /** @noSelf */
      static onDrink: (items: any, waterContainer: any, percentage: any, player: any) => any;

      /** @noSelf */
      static onDrinkForThirst: (waterContainer: any, playerObj: any) => any;

      /** @noSelf */
      static onDropItems: (items: any, player: any) => any;

      /** @noSelf */
      static onDryMyself: (towels: any, player: any) => any;

      /** @noSelf */
      static onDumpContents: (items: any, item: any, time: any, player: any) => any;

      /** @noSelf */
      static onDyeHair: (hairDye: any, playerObj: any, beard: any) => any;

      /** @noSelf */
      static onEatItems: (items: any, percentage: any, player: any) => any;

      /** @noSelf */
      static onEditItem: (items: any, player: any, item: any) => any;

      /** @noSelf */
      static onEjectMagazine: (playerObj: any, weapon: any) => any;

      /** @noSelf */
      static onEmptyWaterContainer: (items: any, waterSource: any, player: any) => any;

      /** @noSelf */
      static onFavorite: (items: any, item2: any, fav: any) => any;

      /** @noSelf */
      static onFix: (brokenObject: any, player: any, fixing: any, fixer: any, vehiclePart: any) => any;

      /** @noSelf */
      static onGrabHalfItems: (items: any, player: any) => any;

      /** @noSelf */
      static onGrabItems: (items: any, player: any) => any;

      /** @noSelf */
      static onGrabOneItems: (items: any, player: any) => any;

      /** @noSelf */
      static onInformationItems: (items: any) => any;

      /** @noSelf */
      static onInsertMagazine: (playerObj: any, weapon: any, magazine: any) => any;

      /** @noSelf */
      static onInspectClothing: (playerObj: any, clothing: any) => any;

      /** @noSelf */
      static onInspectClothingUI: (player: any, clothing: any) => any;

      /** @noSelf */
      static OnLinkRemoteController: (itemToLink: any, remoteController: any, player: any) => any;

      /** @noSelf */
      static onLiteratureItems: (items: any, player: any) => any;

      /** @noSelf */
      static onLoadBulletsInMagazine: (playerObj: any, magazine: any, ammoCount: any) => any;

      /** @noSelf */
      static onLoadBulletsIntoFirearm: (playerObj: any, weapon: any) => any;

      /** @noSelf */
      static onMakeUp: (makeup: any, playerObj: any) => any;

      /** @noSelf */
      static onMoveItemsTo: (items: any, dest: any, player: any) => any;

      /** @noSelf */
      static onPillsItems: (items: any, player: any) => any;

      /** @noSelf */
      static onPlaceCarBatteryCharger: (playerObj: any, carBatteryCharger: any) => any;

      /** @noSelf */
      static onPlaceItemOnGround: (items: any, playerObj: any) => any;

      /** @noSelf */
      static onPlaceTrap: (weapon: any, player: any) => any;

      /** @noSelf */
      static OnPrimaryWeapon: (items: any, player: any) => any;

      /** @noSelf */
      static onPutItems: (items: any, player: any) => any;

      /** @noSelf */
      static onRackGun: (playerObj: any, weapon: any) => any;

      /** @noSelf */
      static OnReload: (items: any, player: any) => any;

      /** @noSelf */
      static onRemoveUpgradeWeapon: (weapon: any, part: any, playerObj: any) => any;

      /** @noSelf */
      static onRenameBag: (bag: any, player: any) => any;

      /** @noSelf */
      static onRenameFood: (food: any, player: any) => any;

      /** @noSelf */
      static onRenameMap: (map: any, player: any) => any;

      /** @noSelf */
      static OnResetRemoteControlID: (item: any, player: any) => any;

      /** @noSelf */
      static onRipClothing: (playerObj: any, items: any) => any;

      /** @noSelf */
      static OnSecondWeapon: (items: any, player: any) => any;

      /** @noSelf */
      static onSetAlarm: (alarm: any, player: any) => any;

      /** @noSelf */
      static onSetBombTimer: (trap: any, player: any) => any;

      /** @noSelf */
      static onStopAlarm: (alarm: any, player: any) => any;

      /** @noSelf */
      static onTransferWater: (items: any, itemFrom: any, itemTo: any, player: any) => any;

      /** @noSelf */
      static OnTriggerRemoteController: (remoteController: any, player: any) => any;

      /** @noSelf */
      static OnTwoHandsEquip: (items: any, player: any) => any;

      /** @noSelf */
      static onUnEquip: (items: any, player: any) => any;

      /** @noSelf */
      static onUnloadBulletsFromFirearm: (playerObj: any, weapon: any) => any;

      /** @noSelf */
      static onUnloadBulletsFromMagazine: (playerObj: any, magazine: any) => any;

      /** @noSelf */
      static onUpgradeWeapon: (weapon: any, part: any, player: any) => any;

      /** @noSelf */
      static onWearItems: (items: any, player: any) => any;

      /** @noSelf */
      static onWriteSomething: (notebook: any, editable: any, player: any) => any;

      /** @noSelf */
      static readItem: (item: any, player: any) => any;

      /** @noSelf */
      static removeAllPatches: (player: any, clothing: any, parts: any, needle: any) => any;

      /** @noSelf */
      static removePatch: (player: any, clothing: any, part: any, needle: any) => any;

      /** @noSelf */
      static removeToolTip: () => any;

      /** @noSelf */
      static repairAllClothing: (
        player: any,
        clothing: any,
        parts: any,
        fabric: any,
        thread: any,
        needle: any,
        onlyHoles: any
      ) => any;

      /** @noSelf */
      static repairClothing: (player: any, clothing: any, part: any, fabric: any, thread: any, needle: any) => any;

      /** @noSelf */
      static startWith: (String: any, Start: any) => any;

      /** @noSelf */
      static takePill: (item: any, player: any) => any;

      /** @noSelf */
      static transferBullets: (playerObj: any, ammoType: any, currentAmmo: any, maxAmmo: any) => any;

      /** @noSelf */
      static transferIfNeeded: (playerObj: any, item: any) => any;

      /** @noSelf */
      static transferItems: (items: any, playerInv: any, player: any, dontWalk: any) => any;

      /** @noSelf */
      static unequipItem: (item: any, player: any) => any;

      /** @noSelf */
      static wearItem: (item: any, player: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISInventoryPaneContextMenu {}
}
