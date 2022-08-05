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
 * File generated at: 2022-08-04T23:00:34.110Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.shared.Foraging {
    export class forageSystem {
      private constructor();

      static [id: string]: any;

      static addCatDef: (_catDef: any, _overwrite: any) => any;

      static addItemDef: (_itemDef: any) => any;

      static addOrDropItems: (_character: any, _inventory: any, _items: any, _discardItems: any) => any;

      static addSkillDef: (_skillDef: any, _overwrite: any) => any;

      static addZoneDef: (_zoneDef: any, _overwrite: any) => any;

      static checkIfRecreateIcons: () => any;

      static checkMetaZone: (_zoneData: any) => any;

      static checkRefillZone: (_zoneData: any) => any;

      static createForageIcons: (_zoneData: any, _recreate: any, _count: any) => any;

      static createForageZone: (_x: any, _y: any, _defZone: any) => any;

      static createZoneData: (_forageZone: any, _zoneDef: any) => any;

      static doEndurancePenalty: (_character: any, _amount: any) => any;

      static doFatiguePenalty: (_character: any, _amount: any) => any;

      static fillZone: (_zoneData: any) => any;

      static generateLootTable: () => any;

      static getAimVisionBonus: (_character: any) => any;

      static getBodyPenalty: (_character: any) => any;

      static getCategoryBonus: (_character: any, _catDef: any) => any;

      static getClothingPenalty: (_character: any) => any;

      static getDarknessEffectReduction: (_character: any) => any;

      static getDefinedZoneAt: (_x: any, _y: any) => any;

      static getDifficultyPenalty: (_perkLevel: any) => any;

      static getExhaustionPenalty: (_character: any) => any;

      static getForageZoneAt: (_x: any, _y: any) => any;

      static getHungerBonus: (_character: any, _itemDef: any) => any;

      static getItemDefSize: (_itemDef: any) => any;

      static getItemSizePenalty: (_itemSize: any) => any;

      static getLevelVisionBonus: (_perkLevel: any) => any;

      static getLightLevelPenalty: (_character: any, _square: any, _doReduction: any) => any;

      static getMonthBonus: (_itemDef: any, _month: any) => any;

      static getMovementVisionPenalty: (_character: any) => any;

      static getPanicPenalty: (_character: any) => any;

      static getPerkLevel: (_character: any, _itemDef: any) => any;

      static getProfessionVisionBonus: (_character: any) => any;

      static getRandomCoord: (_x1: any, _x2: any, _y1: any, _y2: any) => any;

      static getRefillBonus: (_zoneData: any) => any;

      static getSneakVisionBonus: (_character: any) => any;

      static getTimeOfDay: () => any;

      static getTimeOfDayBonus: (_def: any, _isDay: any) => any;

      static getTraitVisionBonus: (_character: any) => any;

      static getWeatherBonus: (_def: any, _isRaining: any, _isSnowing: any, _hasRained: any) => any;

      static getWeatherEffectReduction: (_character: any) => any;

      static getWeatherPenalty: (_character: any, _square: any) => any;

      static getWeatherType: () => any;

      static getWorldAge: () => any;

      static getZoneData: (_forageZone: any, _zoneDef: any, _x: any, _y: any) => any;

      static getZoneDef: (_definedZone: any) => any;

      static getZoneDefByType: (_zoneName: any) => any;

      static getZoneRandomCoord: (_zoneData: any) => any;

      static getZoneRandomCoordNearPoint: (_zoneData: any, _minDist: any, _x: any, _y: any) => any;

      static giveItemXP: (_character: any, _itemDef: any, _amount: any) => any;

      static hasNeededPerks: (_character: any, _itemDef: any, _zoneDef: any) => any;

      static hasNeededRecipes: (_character: any, _itemDef: any) => any;

      static hasNeededTraits: (_character: any, _itemDef: any) => any;

      static hasRequiredItems: (_character: any, _itemDef: any) => any;

      static importDef: (_def: any, _defaultDef: any) => any;

      static init: () => any;

      static integrityCheck: () => any;

      static isForageable: (_character: any, _itemDef: any, _zoneDef: any) => any;

      static isItemExist: (_character: any, _itemDef: any, _zoneDef: any) => any;

      static isItemInZone: (_character: any, _itemDef: any, _zoneDef: any) => any;

      static isItemTypeExist: (_itemType: any) => any;

      static isValidFloor: (_square: any, _itemDef: any, _catDef: any) => any;

      static isValidMonth: (arg0: any, _itemDef: any, _zoneDef: any, _month: any) => any;

      static isValidSkillDefEffect: (_character: any, _skillDef: any, _bonusEffect: any) => any;

      static isValidSquare: (_square: any, _itemDef: any, _catDef: any) => any;

      static lootTableUpdate: () => any;

      static modifyItemDef: (_itemDef: any) => any;

      static pickRandomItemType: (_lootTable: any) => any;

      static populateCatDefs: (_catDefs: any) => any;

      static populateItemDefs: (_itemDefs: any, _clearAllExisting: any) => any;

      static populateScavengeDefs: () => any;

      static populateSkillDefs: (_skillDefs: any) => any;

      static populateZoneDefs: (_zoneDefs: any) => any;

      static recreateIcons: () => any;

      static removeItemDef: (_itemDef: any) => any;

      static takeItem: (_zoneData: any, _number: any) => any;

      static updateTimeValues: () => any;

      static updateZone: (_zoneData: any) => any;

      static zoneContains: (_zoneData: any, _x: any, _y: any, _z: any) => any;

      static zoneIntersects: (_zoneData: any, _x: any, _y: any, _z: any, _w: any, _h: any) => any;
    }
  }
  export namespace lua.shared.Foraging.forageSystem {}
}
