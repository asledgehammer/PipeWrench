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
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />

declare module '@shughesuk/pipewrench' {
  export namespace lua.client.BuildingObjects.ISUI {
    export abstract class ISBuildMenu {
      static [id: string]: any;

      static cheat: any;

      /** @noSelf */
      static addToolTip: () => any;

      /** @noSelf */
      static buildBarMenu: (subMenu: any, option: any, player: any) => any;

      /** @noSelf */
      static buildContainerMenu: (subMenu: any, player: any) => any;

      /** @noSelf */
      static buildDoorFrameMenu: (subMenu: any, player: any) => any;

      /** @noSelf */
      static buildDoorMenu: (subMenu: any, option: any, player: any) => any;

      /** @noSelf */
      static buildFenceMenu: (subMenu: any, option: any, player: any) => any;

      /** @noSelf */
      static buildFloorMenu: (subMenu: any, player: any) => any;

      /** @noSelf */
      static buildFurnitureMenu: (subMenu: any, context: any, option: any, player: any) => any;

      /** @noSelf */
      static buildLightMenu: (subMenu: any, player: any) => any;

      /** @noSelf */
      static buildMiscMenu: (subMenu: any, option: any, player: any) => any;

      /** @noSelf */
      static buildStairsMenu: (subMenu: any, player: any) => any;

      /** @noSelf */
      static buildWallMenu: (subMenu: any, option: any, player: any) => any;

      /** @noSelf */
      static buildWindowsFrameMenu: (subMenu: any, player: any) => any;

      /** @noSelf */
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

      /** @noSelf */
      static canBuildLogWall: (player: any) => any;

      /** @noSelf */
      static canDoStage: (player: any, stage: any) => any;

      /** @noSelf */
      static countMaterial: (player: any, fullType: any) => any;

      /** @noSelf */
      static doBuildMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static getBarCornerSprites: (player: any) => any;

      /** @noSelf */
      static getBarElementSprites: (player: any) => any;

      /** @noSelf */
      static getBedSprite: (player: any) => any;

      /** @noSelf */
      static getBookcaseSprite: (player: any) => any;

      /** @noSelf */
      static getDoubleShelveSprite: (player: any) => any;

      /** @noSelf */
      static GetItemInstance: (type: any) => any;

      /** @noSelf */
      static getLargeWoodTableSprites: (player: any) => any;

      /** @noSelf */
      static getPillarLampSprite: (player: any) => any;

      /** @noSelf */
      static getShelveSprite: (player: any) => any;

      /** @noSelf */
      static getSignSprite: (player: any) => any;

      /** @noSelf */
      static getSmallBookcaseSprite: (player: any) => any;

      /** @noSelf */
      static getSpriteLvl: (player: any) => any;

      /** @noSelf */
      static getTableWithDrawerSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenChairSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenCrateSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenDoorFrameSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenDoorSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenFenceSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenFloorSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenTableSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenWallFrameSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenWallSprites: (player: any) => any;

      /** @noSelf */
      static getWoodenWindowsFrameSprites: (player: any) => any;

      /** @noSelf */
      static haveSomethingtoBuild: (player: any) => any;

      /** @noSelf */
      static isMultiStageValid: () => any;

      /** @noSelf */
      static isNailsBoxNeededOpening: (nailsRequired: any) => any;

      /** @noSelf */
      static onBarbedFence: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onBarElement: (worldobjects: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onBed: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onBookcase: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onBrownWoodenStairs: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onCompost: (worldobjects: any, player: any, sprite: any) => any;

      /** @noSelf */
      static onCreateBarrel: (worldobjects: any, player: any, sprite: any, waterMax: any) => any;

      /** @noSelf */
      static onDarkWoodenStairs: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onDismantle: (worldobjects: any, player: any) => any;

      /** @noSelf */
      static onDoubleShelve: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onDoubleWoodenDoor: (worldobjects: any, square: any, sprite: any, spriteIndex: any, player: any) => any;

      /** @noSelf */
      static onFarmDoor: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onGravelBagWall: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onLargeWoodTable: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onLightBrownWoodenStairs: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onLogWall: (worldobjects: any, player: any) => any;

      /** @noSelf */
      static onMultiStageBuild: (worldobjects: any, stage: any, item: any, player: any) => any;

      /** @noSelf */
      static onMultiStageBuildSelected: (cursor: any, square: any) => any;

      /** @noSelf */
      static onPillarLamp: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onSangBagWall: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onShelve: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onSign: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onSmallBookcase: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onSmallWoodTable: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onSmallWoodTableWithDrawer: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onStonePile: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onWoodChair: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onWoodenBrownFloor: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onWoodenCrate: (worldobjects: any, square: any, crateSprite: any, player: any) => any;

      /** @noSelf */
      static onWoodenCross: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onWoodenDoor: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onWoodenDoorFrame: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onWoodenFence: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onWoodenFenceStake: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onWoodenFloor: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onWoodenLightBrownFloor: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onWoodenPicket: (worldobjects: any, square: any, player: any) => any;

      /** @noSelf */
      static onWoodenPillar: (worldobjects: any, player: any) => any;

      /** @noSelf */
      static onWoodenWall: (worldobjects: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onWoodenWallFrame: (worldobjects: any, sprite: any, player: any) => any;

      /** @noSelf */
      static onWoodenWindowsFrame: (worldobjects: any, square: any, sprite: any, player: any) => any;

      /** @noSelf */
      static requireHammer: (option: any) => any;
    }
  }
  export namespace lua.client.BuildingObjects.ISUI.ISBuildMenu { }
}
