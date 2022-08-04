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
 * File generated at: 2022-08-04T20:14:39.790Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.BuildingObjects.ISUI {
    export class ISBuildMenu {
      private constructor();

      static [id: string]: any;

      static cheat: any;

      static addToolTip: () => any;

      static buildBarMenu: (subMenu: any, option: any, player: any) => any;

      static buildContainerMenu: (subMenu: any, player: any) => any;

      static buildDoorFrameMenu: (subMenu: any, player: any) => any;

      static buildDoorMenu: (subMenu: any, option: any, player: any) => any;

      static buildFenceMenu: (subMenu: any, option: any, player: any) => any;

      static buildFloorMenu: (subMenu: any, player: any) => any;

      static buildFurnitureMenu: (subMenu: any, context: any, option: any, player: any) => any;

      static buildLightMenu: (subMenu: any, player: any) => any;

      static buildMiscMenu: (subMenu: any, option: any, player: any) => any;

      static buildStairsMenu: (subMenu: any, player: any) => any;

      static buildWallMenu: (subMenu: any, option: any, player: any) => any;

      static buildWindowsFrameMenu: (subMenu: any, player: any) => any;

      static canBuild: (
        plankNb: any,
        nailsNb: any,
        hingeNb: any,
        doorknobNb: any,
        baredWireNb: any,
        carpentrySkill: any,
        option: any,
        player: any
      ) => any;

      static canBuildLogWall: (player: any) => any;

      static canDoStage: (player: any, stage: any) => any;

      static countMaterial: (player: any, fullType: any) => any;

      static doBuildMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      static getBarCornerSprites: (player: any) => any;

      static getBarElementSprites: (player: any) => any;

      static getBedSprite: (player: any) => any;

      static getBookcaseSprite: (player: any) => any;

      static getDoubleShelveSprite: (player: any) => any;

      static GetItemInstance: (type: any) => any;

      static getLargeWoodTableSprites: (player: any) => any;

      static getPillarLampSprite: (player: any) => any;

      static getShelveSprite: (player: any) => any;

      static getSignSprite: (player: any) => any;

      static getSmallBookcaseSprite: (player: any) => any;

      static getSpriteLvl: (player: any) => any;

      static getTableWithDrawerSprites: (player: any) => any;

      static getWoodenChairSprites: (player: any) => any;

      static getWoodenCrateSprites: (player: any) => any;

      static getWoodenDoorFrameSprites: (player: any) => any;

      static getWoodenDoorSprites: (player: any) => any;

      static getWoodenFenceSprites: (player: any) => any;

      static getWoodenFloorSprites: (player: any) => any;

      static getWoodenTableSprites: (player: any) => any;

      static getWoodenWallFrameSprites: (player: any) => any;

      static getWoodenWallSprites: (player: any) => any;

      static getWoodenWindowsFrameSprites: (player: any) => any;

      static haveSomethingtoBuild: (player: any) => any;

      static isMultiStageValid: () => any;

      static isNailsBoxNeededOpening: (nailsRequired: any) => any;

      static onBarbedFence: (worldobjects: any, square: any, player: any) => any;

      static onBarElement: (worldobjects: any, sprite: any, player: any) => any;

      static onBed: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onBookcase: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onBrownWoodenStairs: (worldobjects: any, square: any, player: any) => any;

      static onCompost: (worldobjects: any, player: any, sprite: any) => any;

      static onCreateBarrel: (worldobjects: any, player: any, sprite: any, waterMax: any) => any;

      static onDarkWoodenStairs: (worldobjects: any, square: any, player: any) => any;

      static onDismantle: (worldobjects: any, player: any) => any;

      static onDoubleShelve: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onDoubleWoodenDoor: (worldobjects: any, square: any, sprite: any, spriteIndex: any, player: any) => any;

      static onFarmDoor: (worldobjects: any, square: any, player: any) => any;

      static onGravelBagWall: (worldobjects: any, square: any, player: any) => any;

      static onLargeWoodTable: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onLightBrownWoodenStairs: (worldobjects: any, square: any, player: any) => any;

      static onLogWall: (worldobjects: any, player: any) => any;

      static onMultiStageBuild: (worldobjects: any, stage: any, item: any, player: any) => any;

      static onMultiStageBuildSelected: (cursor: any, square: any) => any;

      static onPillarLamp: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onSangBagWall: (worldobjects: any, square: any, player: any) => any;

      static onShelve: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onSign: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onSmallBookcase: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onSmallWoodTable: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onSmallWoodTableWithDrawer: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onStonePile: (worldobjects: any, square: any, player: any) => any;

      static onWoodChair: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onWoodenBrownFloor: (worldobjects: any, square: any, player: any) => any;

      static onWoodenCrate: (worldobjects: any, square: any, crateSprite: any, player: any) => any;

      static onWoodenCross: (worldobjects: any, square: any, player: any) => any;

      static onWoodenDoor: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onWoodenDoorFrame: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onWoodenFence: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onWoodenFenceStake: (worldobjects: any, square: any, player: any) => any;

      static onWoodenFloor: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static onWoodenLightBrownFloor: (worldobjects: any, square: any, player: any) => any;

      static onWoodenPicket: (worldobjects: any, square: any, player: any) => any;

      static onWoodenPillar: (worldobjects: any, player: any) => any;

      static onWoodenWall: (worldobjects: any, sprite: any, player: any) => any;

      static onWoodenWallFrame: (worldobjects: any, sprite: any, player: any) => any;

      static onWoodenWindowsFrame: (worldobjects: any, square: any, sprite: any, player: any) => any;

      static requireHammer: (option: any) => any;
    }
  }
  export namespace lua.client.BuildingObjects.ISUI.ISBuildMenu {}
}
