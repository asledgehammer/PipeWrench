/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Foraging {
    export abstract class forageSystem {
      static [id: string]: any;

      /** @noSelf */
      static addCatDef: (_catDef: any, _overwrite: any, ...__args: never[]) => any;

      /** @noSelf */
      static addItemDef: (_itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static addOrDropItems: (
        _character: any,
        _inventory: any,
        _items: any,
        _discardItems: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static addSkillDef: (_skillDef: any, _overwrite: any, ...__args: never[]) => any;

      /** @noSelf */
      static addZoneDef: (_zoneDef: any, _overwrite: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkIfRecreateIcons: (...__args: never[]) => any;

      /** @noSelf */
      static checkMetaZone: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkRefillZone: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static createForageIcons: (_zoneData: any, _recreate: any, _count: any, ...__args: never[]) => any;

      /** @noSelf */
      static createForageZone: (_x: any, _y: any, _defZone: any, ...__args: never[]) => any;

      /** @noSelf */
      static createZoneData: (_forageZone: any, _zoneDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static doClothingItemSpawn: (
        _character: any,
        _inventory: any,
        _itemDef: any,
        _items: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doDeadTrapAnimalSpawn: (
        _character: any,
        _inventory: any,
        _itemDef: any,
        _items: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doEndurancePenalty: (_character: any, _amount: any, ...__args: never[]) => any;

      /** @noSelf */
      static doFatiguePenalty: (_character: any, _amount: any, ...__args: never[]) => any;

      /** @noSelf */
      static doGenericItemSpawn: (
        _character: any,
        _inventory: any,
        _itemDef: any,
        _items: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doGlassesCheck: (_character: any, _skillDef: any, _bonusEffect: any, ...__args: never[]) => any;

      /** @noSelf */
      static doItemDefCheck: (...__args: never[]) => any;

      /** @noSelf */
      static doJunkWeaponSpawn: (
        _character: any,
        _inventory: any,
        _itemDef: any,
        _items: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doPoisonItemSpawn: (
        _character: any,
        _inventory: any,
        _itemDef: any,
        _items: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doRandomAgeSpawn: (
        _character: any,
        _inventory: any,
        _itemDef: any,
        _items: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doWildCropSpawn: (_character: any, _inventory: any, _itemDef: any, _items: any, ...__args: never[]) => any;

      /** @noSelf */
      static doWildFoodSpawn: (_character: any, _inventory: any, _itemDef: any, _items: any, ...__args: never[]) => any;

      /** @noSelf */
      static doWorldAgeSpawn: (_character: any, _inventory: any, _itemDef: any, _items: any, ...__args: never[]) => any;

      /** @noSelf */
      static fillZone: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static generateLootTable: (...__args: never[]) => any;

      /** @noSelf */
      static getAimVisionBonus: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBodyPenalty: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getCategoryBonus: (_character: any, _catDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static getClothingPenalty: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getDarknessEffectReduction: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getDefinedZoneAt: (_x: any, _y: any, ...__args: never[]) => any;

      /** @noSelf */
      static getDifficultyPenalty: (_perkLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getExhaustionPenalty: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getForageZoneAt: (_x: any, _y: any, ...__args: never[]) => any;

      /** @noSelf */
      static getHungerBonus: (_character: any, _itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static getItemDefSize: (_itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static getItemSizePenalty: (_itemSize: any, ...__args: never[]) => any;

      /** @noSelf */
      static getLevelVisionBonus: (_perkLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getLightLevelPenalty: (_character: any, _square: any, _doReduction: any, ...__args: never[]) => any;

      /** @noSelf */
      static getMonthBonus: (_itemDef: any, _month: any, ...__args: never[]) => any;

      /** @noSelf */
      static getMovementVisionPenalty: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getPanicPenalty: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getPerkLevel: (_character: any, _itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static getProfessionVisionBonus: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getRandomCoord: (_x1: any, _x2: any, _y1: any, _y2: any, ...__args: never[]) => any;

      /** @noSelf */
      static getRefillBonus: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static getSneakVisionBonus: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getTimeOfDay: (...__args: never[]) => any;

      /** @noSelf */
      static getTimeOfDayBonus: (_def: any, _isDay: any, ...__args: never[]) => any;

      /** @noSelf */
      static getTraitVisionBonus: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWeatherBonus: (_def: any, _isRaining: any, _isSnowing: any, _hasRained: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWeatherEffectReduction: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWeatherPenalty: (_character: any, _square: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWeatherType: (...__args: never[]) => any;

      /** @noSelf */
      static getWorldAge: (...__args: never[]) => any;

      /** @noSelf */
      static getZoneData: (_forageZone: any, _zoneDef: any, _x: any, _y: any, ...__args: never[]) => any;

      /** @noSelf */
      static getZoneDef: (_definedZone: any, ...__args: never[]) => any;

      /** @noSelf */
      static getZoneDefByType: (_zoneName: any, ...__args: never[]) => any;

      /** @noSelf */
      static getZoneRandomCoord: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static getZoneRandomCoordNearPoint: (_zoneData: any, _minDist: any, _x: any, _y: any, ...__args: never[]) => any;

      /** @noSelf */
      static giveItemXP: (_character: any, _itemDef: any, _amount: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasNeededPerks: (_character: any, _itemDef: any, _zoneDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasNeededRecipes: (_character: any, _itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasNeededTraits: (_character: any, _itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasRequiredItems: (_character: any, _itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static importDef: (_def: any, _defaultDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static init: (...__args: never[]) => any;

      /** @noSelf */
      static integrityCheck: (...__args: never[]) => any;

      /** @noSelf */
      static isForageable: (_character: any, _itemDef: any, _zoneDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static isItemExist: (_character: any, _itemDef: any, _zoneDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static isItemInZone: (_character: any, _itemDef: any, _zoneDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static isItemScriptValid: (_character: any, _itemDef: any, _zoneDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static isItemTypeExist: (_itemType: any, ...__args: never[]) => any;

      /** @noSelf */
      static isValidFloor: (_square: any, _itemDef: any, _catDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static isValidMonth: (arg0: any, _itemDef: any, _zoneDef: any, _month: any, ...__args: never[]) => any;

      /** @noSelf */
      static isValidSkillDefEffect: (_character: any, _skillDef: any, _bonusEffect: any, ...__args: never[]) => any;

      /** @noSelf */
      static isValidSquare: (_square: any, _itemDef: any, _catDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static itemFound: (_character: any, _itemType: any, _amount: any, ...__args: never[]) => any;

      /** @noSelf */
      static lootTableUpdate: (...__args: never[]) => any;

      /** @noSelf */
      static modifyItemDef: (_itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static pickRandomItemType: (_lootTable: any, ...__args: never[]) => any;

      /** @noSelf */
      static populateCatDefs: (_catDefs: any, ...__args: never[]) => any;

      /** @noSelf */
      static populateItemDefs: (_itemDefs: any, _clearAllExisting: any, ...__args: never[]) => any;

      /** @noSelf */
      static populateScavengeDefs: (...__args: never[]) => any;

      /** @noSelf */
      static populateSkillDefs: (_skillDefs: any, ...__args: never[]) => any;

      /** @noSelf */
      static populateZoneDefs: (_zoneDefs: any, ...__args: never[]) => any;

      /** @noSelf */
      static recreateIcons: (...__args: never[]) => any;

      /** @noSelf */
      static removeItemDef: (_itemDef: any, ...__args: never[]) => any;

      /** @noSelf */
      static setOptionValues: (...__args: never[]) => any;

      /** @noSelf */
      static takeItem: (_zoneData: any, _number: any, ...__args: never[]) => any;

      /** @noSelf */
      static updateTimeValues: (...__args: never[]) => any;

      /** @noSelf */
      static updateZone: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static zoneContains: (_zoneData: any, _x: any, _y: any, _z: any, ...__args: never[]) => any;

      /** @noSelf */
      static zoneIntersects: (_zoneData: any, _x: any, _y: any, _z: any, _w: any, _h: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Foraging.forageSystem {}
}
