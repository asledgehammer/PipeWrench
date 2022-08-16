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
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Foraging {
    export abstract class forageSystem {
      static [id: string]: any;

      /** @noSelf */
      static addCatDef: (_catDef: any, _overwrite: any) => any;

      /** @noSelf */
      static addItemDef: (_itemDef: any) => any;

      /** @noSelf */
      static addOrDropItems: (_character: any, _inventory: any, _items: any, _discardItems: any) => any;

      /** @noSelf */
      static addSkillDef: (_skillDef: any, _overwrite: any) => any;

      /** @noSelf */
      static addZoneDef: (_zoneDef: any, _overwrite: any) => any;

      /** @noSelf */
      static checkIfRecreateIcons: () => any;

      /** @noSelf */
      static checkMetaZone: (_zoneData: any) => any;

      /** @noSelf */
      static checkRefillZone: (_zoneData: any) => any;

      /** @noSelf */
      static createForageIcons: (_zoneData: any, _recreate: any, _count: any) => any;

      /** @noSelf */
      static createForageZone: (_x: any, _y: any, _defZone: any) => any;

      /** @noSelf */
      static createZoneData: (_forageZone: any, _zoneDef: any) => any;

      /** @noSelf */
      static doEndurancePenalty: (_character: any, _amount: any) => any;

      /** @noSelf */
      static doFatiguePenalty: (_character: any, _amount: any) => any;

      /** @noSelf */
      static fillZone: (_zoneData: any) => any;

      /** @noSelf */
      static generateLootTable: () => any;

      /** @noSelf */
      static getAimVisionBonus: (_character: any) => any;

      /** @noSelf */
      static getBodyPenalty: (_character: any) => any;

      /** @noSelf */
      static getCategoryBonus: (_character: any, _catDef: any) => any;

      /** @noSelf */
      static getClothingPenalty: (_character: any) => any;

      /** @noSelf */
      static getDarknessEffectReduction: (_character: any) => any;

      /** @noSelf */
      static getDefinedZoneAt: (_x: any, _y: any) => any;

      /** @noSelf */
      static getDifficultyPenalty: (_perkLevel: any) => any;

      /** @noSelf */
      static getExhaustionPenalty: (_character: any) => any;

      /** @noSelf */
      static getForageZoneAt: (_x: any, _y: any) => any;

      /** @noSelf */
      static getHungerBonus: (_character: any, _itemDef: any) => any;

      /** @noSelf */
      static getItemDefSize: (_itemDef: any) => any;

      /** @noSelf */
      static getItemSizePenalty: (_itemSize: any) => any;

      /** @noSelf */
      static getLevelVisionBonus: (_perkLevel: any) => any;

      /** @noSelf */
      static getLightLevelPenalty: (_character: any, _square: any, _doReduction: any) => any;

      /** @noSelf */
      static getMonthBonus: (_itemDef: any, _month: any) => any;

      /** @noSelf */
      static getMovementVisionPenalty: (_character: any) => any;

      /** @noSelf */
      static getPanicPenalty: (_character: any) => any;

      /** @noSelf */
      static getPerkLevel: (_character: any, _itemDef: any) => any;

      /** @noSelf */
      static getProfessionVisionBonus: (_character: any) => any;

      /** @noSelf */
      static getRandomCoord: (_x1: any, _x2: any, _y1: any, _y2: any) => any;

      /** @noSelf */
      static getRefillBonus: (_zoneData: any) => any;

      /** @noSelf */
      static getSneakVisionBonus: (_character: any) => any;

      /** @noSelf */
      static getTimeOfDay: () => any;

      /** @noSelf */
      static getTimeOfDayBonus: (_def: any, _isDay: any) => any;

      /** @noSelf */
      static getTraitVisionBonus: (_character: any) => any;

      /** @noSelf */
      static getWeatherBonus: (_def: any, _isRaining: any, _isSnowing: any, _hasRained: any) => any;

      /** @noSelf */
      static getWeatherEffectReduction: (_character: any) => any;

      /** @noSelf */
      static getWeatherPenalty: (_character: any, _square: any) => any;

      /** @noSelf */
      static getWeatherType: () => any;

      /** @noSelf */
      static getWorldAge: () => any;

      /** @noSelf */
      static getZoneData: (_forageZone: any, _zoneDef: any, _x: any, _y: any) => any;

      /** @noSelf */
      static getZoneDef: (_definedZone: any) => any;

      /** @noSelf */
      static getZoneDefByType: (_zoneName: any) => any;

      /** @noSelf */
      static getZoneRandomCoord: (_zoneData: any) => any;

      /** @noSelf */
      static getZoneRandomCoordNearPoint: (_zoneData: any, _minDist: any, _x: any, _y: any) => any;

      /** @noSelf */
      static giveItemXP: (_character: any, _itemDef: any, _amount: any) => any;

      /** @noSelf */
      static hasNeededPerks: (_character: any, _itemDef: any, _zoneDef: any) => any;

      /** @noSelf */
      static hasNeededRecipes: (_character: any, _itemDef: any) => any;

      /** @noSelf */
      static hasNeededTraits: (_character: any, _itemDef: any) => any;

      /** @noSelf */
      static hasRequiredItems: (_character: any, _itemDef: any) => any;

      /** @noSelf */
      static importDef: (_def: any, _defaultDef: any) => any;

      /** @noSelf */
      static init: () => any;

      /** @noSelf */
      static integrityCheck: () => any;

      /** @noSelf */
      static isForageable: (_character: any, _itemDef: any, _zoneDef: any) => any;

      /** @noSelf */
      static isItemExist: (_character: any, _itemDef: any, _zoneDef: any) => any;

      /** @noSelf */
      static isItemInZone: (_character: any, _itemDef: any, _zoneDef: any) => any;

      /** @noSelf */
      static isItemTypeExist: (_itemType: any) => any;

      /** @noSelf */
      static isValidFloor: (_square: any, _itemDef: any, _catDef: any) => any;

      /** @noSelf */
      static isValidMonth: (arg0: any, _itemDef: any, _zoneDef: any, _month: any) => any;

      /** @noSelf */
      static isValidSkillDefEffect: (_character: any, _skillDef: any, _bonusEffect: any) => any;

      /** @noSelf */
      static isValidSquare: (_square: any, _itemDef: any, _catDef: any) => any;

      /** @noSelf */
      static lootTableUpdate: () => any;

      /** @noSelf */
      static modifyItemDef: (_itemDef: any) => any;

      /** @noSelf */
      static pickRandomItemType: (_lootTable: any) => any;

      /** @noSelf */
      static populateCatDefs: (_catDefs: any) => any;

      /** @noSelf */
      static populateItemDefs: (_itemDefs: any, _clearAllExisting: any) => any;

      /** @noSelf */
      static populateScavengeDefs: () => any;

      /** @noSelf */
      static populateSkillDefs: (_skillDefs: any) => any;

      /** @noSelf */
      static populateZoneDefs: (_zoneDefs: any) => any;

      /** @noSelf */
      static recreateIcons: () => any;

      /** @noSelf */
      static removeItemDef: (_itemDef: any) => any;

      /** @noSelf */
      static takeItem: (_zoneData: any, _number: any) => any;

      /** @noSelf */
      static updateTimeValues: () => any;

      /** @noSelf */
      static updateZone: (_zoneData: any) => any;

      /** @noSelf */
      static zoneContains: (_zoneData: any, _x: any, _y: any, _z: any) => any;

      /** @noSelf */
      static zoneIntersects: (_zoneData: any, _x: any, _y: any, _z: any, _w: any, _h: any) => any;
    }
  }
  export namespace lua.shared.Foraging.forageSystem { }
}
