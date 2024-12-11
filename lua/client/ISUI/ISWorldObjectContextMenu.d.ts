/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISWorldObjectContextMenu {
      static [id: string]: any;

      static blinkOption: any;

      onCheckDigitalCode: ((button: any, player: any, padlock: any, thumpable: any) => any) | any;

      onSetDigitalCode: ((button: any, player: any, padlock: any, thumpable: any) => any) | any;

      onSleepModalClick: ((button: any) => any) | any;

      /** @noSelf */
      static addRemoveCurtainOption: (
        context: any,
        worldobjects: any,
        curtain: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static addToolTip: (...__args: never[]) => any;

      /** @noSelf */
      static addWaterFromItem: (
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static canCleanBlood: (playerObj: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static canStoreWater: (object: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkBlowTorchForBarricade: (chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkWeapon: (chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static clearFetch: (...__args: never[]) => any;

      /** @noSelf */
      static compareClothingBlood: (item1: any, item2: any, ...__args: never[]) => any;

      /** @noSelf */
      static createMenu: (player: any, worldobjects: any, x: any, y: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doAddFuelGenerator: (
        worldobjects: any,
        generator: any,
        fuelContainerList: any,
        fuelContainer: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doBrushToolOptions: (context: any, worldobjects: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static doChopTree: (playerObj: any, tree: any, ...__args: never[]) => any;

      /** @noSelf */
      static doCleanBlood: (playerObj: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static doDrinkWaterMenu: (object: any, player: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static doFillFuelMenu: (source: any, playerNum: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static doFillWaterMenu: (sink: any, playerNum: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static doorCurtainCheck: (argTable: any, ...__args: never[]) => any;

      /** @noSelf */
      static doRecipeUsingWaterMenu: (waterObject: any, playerNum: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static doRemoveGrass: (playerObj: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static doRemovePlant: (playerObj: any, square: any, wallVine: any, ...__args: never[]) => any;

      /** @noSelf */
      static doScavengeOptions: (
        context: any,
        player: any,
        scavengeZone: any,
        clickedSquare: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doSleepOption: (context: any, bed: any, player: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doWashClothingMenu: (sink: any, player: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static emptyRainCollector: (barrel: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static equip: (playerObj: any, handItem: any, item: any, primary: any, twoHands: any, ...__args: never[]) => any;

      /** @noSelf */
      static equip2: (player: any, handItem: any, item: any, primary: any, ...__args: never[]) => any;

      /** @noSelf */
      static fetch: (v: any, player: any, doSquare: any, ...__args: never[]) => any;

      /** @noSelf */
      static getFishingLure: (player: any, rod: any, ...__args: never[]) => any;

      /** @noSelf */
      static getFishingRode: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static getSquaresInRadius: (
        worldX: any,
        worldY: any,
        worldZ: any,
        radius: any,
        doneSquares: any,
        squares: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static getThumpableName: (thump: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWorldObjectsInRadius: (
        playerNum: any,
        screenX: any,
        screenY: any,
        squares: any,
        radius: any,
        worldObjects: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static getZone: (x: any, y: any, z: any, ...__args: never[]) => any;

      /** @noSelf */
      static grabItemTime: (playerObj: any, witem: any, ...__args: never[]) => any;

      /** @noSelf */
      static handleCarBatteryCharger: (
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static handleCompost: (
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static handleGrabWorldItem: (
        x: any,
        y: any,
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static handleInteraction: (
        x: any,
        y: any,
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static handleRainCollector: (
        test: any,
        context: any,
        worldobjects: any,
        playerObj: any,
        playerInv: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static haveWaterContainer: (playerId: any, ...__args: never[]) => any;

      /** @noSelf */
      static isSomethingTo: (item: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static isThumpDoor: (thumpable: any, ...__args: never[]) => any;

      /** @noSelf */
      static isTrappedAdjacentToWindow: (player: any, window: any, ...__args: never[]) => any;

      /** @noSelf */
      static onActivateGenerator: (
        worldobjects: any,
        enable: any,
        generator: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onAddCompost: (compost: any, item: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddFuel: (worldobjects: any, petrolCan: any, generator: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddFuelGenerator: (
        worldobjects: any,
        petrolCan: any,
        generator: any,
        player: any,
        context: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onAddPlayerToSafehouse: (worldobjects: any, safehouse: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddSheet: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddSheetRope: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddWaterFromItem: (
        worldobjects: any,
        waterObject: any,
        waterItem: any,
        playerObj: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onBarricade: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBurnCorpse: (worldobjects: any, player: any, corpse: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBuryCorpse: (grave: any, player: any, shovel: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheckFishingNet: (worldobjects: any, player: any, trap: any, hours: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheckStats: (worldobjects: any, player: any, otherPlayer: any, ...__args: never[]) => any;

      /** @noSelf */
      static onChooseSafehouse: (worldobjects: any, building: any, ...__args: never[]) => any;

      /** @noSelf */
      static onChopTree: (worldobjects: any, playerObj: any, tree: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCleanBlood: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onClearAshes: (worldobjects: any, player: any, ashes: any, ...__args: never[]) => any;

      /** @noSelf */
      static onClimbOverFence: (worldobjects: any, fence: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onClimbSheetRope: (worldobjects: any, square: any, down: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onClimbThroughWindow: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onConfirmSleep: (this: any, button: any, player: any, bed: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDestroy: (worldobjects: any, player: any, sledgehammer: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDigGraves: (worldobjects: any, player: any, shovel: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDrink: (worldobjects: any, waterObject: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFillGrave: (grave: any, player: any, shovel: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFishing: (worldobjects: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFishingNet: (worldobjects: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFixGenerator: (worldobjects: any, generator: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFollow: (worldobjects: any, survivor: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGetCompost: (compost: any, item: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGetDoorKey: (worldobjects: any, player: any, door: any, doorKeyId: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGrabAllWItems: (worldobjects: any, WItems: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGrabCorpseItem: (worldobjects: any, WItem: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGrabHalfWItems: (worldobjects: any, WItems: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGrabWItem: (worldobjects: any, WItem: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGuard: (worldobjects: any, survivor: any, ...__args: never[]) => any;

      /** @noSelf */
      static onInfoGenerator: (worldobjects: any, generator: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onInsertFuel: (lightSource: any, fuel: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLightBattery: (
        worldobjects: any,
        light: any,
        player: any,
        remove: any,
        battery: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onLightBulb: (
        worldobjects: any,
        light: any,
        player: any,
        remove: any,
        bulbitem: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onLightModify: (worldobjects: any, light: any, player: any, scrapitem: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLockDoor: (worldobjects: any, player: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMedicalCheck: (worldobjects: any, player: any, otherPlayer: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMetalBarBarricade: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMetalBarricade: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMicrowaveSetting: (worldobjects: any, stove: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onOpenCloseCurtain: (worldobjects: any, curtain: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onOpenCloseDoor: (worldobjects: any, door: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onOpenCloseWindow: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPickupBrokenGlass: (worldobjects: any, brokenGlass: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPlugGenerator: (worldobjects: any, generator: any, player: any, plug: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPlumbItem: (worldobjects: any, player: any, itemToPipe: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPutDigitalPadlock: (worldobjects: any, player: any, thump: any, padlock: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPutDigitalPadlockWalkToComplete: (player: any, thump: any, padlock: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPutPadlock: (worldobjects: any, player: any, thump: any, padlock: any, ...__args: never[]) => any;

      /** @noSelf */
      static onReleaseSafeHouse: (worldobjects: any, safehouse: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveBrokenGlass: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveCurtain: (worldobjects: any, curtain: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveDigitalPadlock: (worldobjects: any, player: any, thump: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveDigitalPadlockWalkToComplete: (player: any, thump: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveFire: (
        worldobjects: any,
        firetile: any,
        extinguisher: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onRemoveFishingNet: (worldobjects: any, player: any, trap: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveFuel: (lightSource: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveGrass: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemovePadlock: (worldobjects: any, player: any, thump: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemovePlant: (worldobjects: any, square: any, wallVine: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemovePlayerFromSafehouse: (
        worldobjects: any,
        safehouse: any,
        playerName: any,
        playerNum: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onRemoveSheetRope: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveWallVine: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRest: (bed: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onScavenge: (worldobjects: any, player: any, zone: any, clickedSquare: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSetComboWasherDryerMode: (playerObj: any, object: any, mode: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSit: (worldobjects: any, chair: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSitOnGround: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSleep: (bed: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSleepWalkToComplete: (player: any, bed: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSmashWindow: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onStay: (worldobjects: any, survivor: any, ...__args: never[]) => any;

      /** @noSelf */
      static onStoveSetting: (worldobjects: any, stove: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTakeFuel: (worldobjects: any, playerObj: any, fuelStation: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTakeFuelNew: (
        worldobjects: any,
        fuelObject: any,
        fuelContainerList: any,
        fuelContainer: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onTakeGenerator: (worldobjects: any, generator: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTakeSafeHouse: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTakeTrap: (worldobjects: any, trap: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTakeWater: (
        worldobjects: any,
        waterObject: any,
        waterContainerList: any,
        waterContainer: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onTalkTo: (worldobjects: any, survivor: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTeamUp: (worldobjects: any, survivor: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTeleport: (...__args: never[]) => any;

      /** @noSelf */
      static onToggleClothingDryer: (worldobjects: any, object: any, playerId: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleClothingWasher: (worldobjects: any, object: any, playerId: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleComboWasherDryer: (playerObj: any, object: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleLight: (worldobjects: any, light: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleStove: (worldobjects: any, stove: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleThumpableLight: (lightSource: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTrade: (worldobjects: any, player: any, otherPlayer: any, ...__args: never[]) => any;

      /** @noSelf */
      static onUnbarricade: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onUnbarricadeMetal: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onUnbarricadeMetalBar: (worldobjects: any, window: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onUnLockDoor: (worldobjects: any, player: any, door: any, doorKeyId: any, ...__args: never[]) => any;

      /** @noSelf */
      static onViewSafeHouse: (worldobjects: any, safehouse: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWakeOther: (worldobjects: any, player: any, otherPlayer: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWalkTo: (worldobjects: any, item: any, playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWashClothing: (
        playerObj: any,
        sink: any,
        soapList: any,
        washList: any,
        singleClothing: any,
        noSoap: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onWashYourself: (playerObj: any, sink: any, soapList: any, ...__args: never[]) => any;

      /** @noSelf */
      static restoreDoor: (playerObj: any, door: any, isOpen: any, ...__args: never[]) => any;

      /** @noSelf */
      static setTest: (...__args: never[]) => any;

      /** @noSelf */
      static toggleClothingDryer: (
        context: any,
        worldobjects: any,
        playerId: any,
        object: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static toggleClothingWasher: (
        context: any,
        worldobjects: any,
        playerId: any,
        object: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static toggleComboWasherDryer: (context: any, playerObj: any, object: any, ...__args: never[]) => any;

      /** @noSelf */
      static transferIfNeeded: (playerObj: any, item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISWorldObjectContextMenu {}
}
