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

declare module '@shughesuk/pipewrench' {
  export namespace lua.client.Tutorial {
    /** @customConstructor BandageStep:new */
    export class BandageStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static blink: any;

      static brother1: any;

      static brother2: any;

      static containers: any;

      static extTimer: any;

      static fences: any;

      static finished: any;

      static isBrothersDead: any;

      static oneDead: any;

      static runned: any;

      static spawnedItems: any;

      static sqDoor: any;

      static sqWindow: any;

      static vaulted: any;

      static vaultedWindow: any;

      static vaultedWrong: any;

      static vaultedWrongZoom: any;

      static window: any;

      constructor();

      OnBrothersDead: (() => any) | any;

      /** @noSelf */
      static BandageYourself: () => any;

      /** @noSelf */
      static CheckWindow: () => any;

      /** @noSelf */
      static HealthOpen: () => any;

      /** @noSelf */
      static OpenCurtain: () => any;

      /** @noSelf */
      static spawnBrothers: () => any;

      /** @noSelf */
      static ThroughDoor: () => any;

      /** @noSelf */
      static ThroughWindow: () => any;

      /** @noSelf */
      static Vault: () => any;
    }

    /** @customConstructor FightStep:new */
    export class FightStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static climbThrough: any;

      static finished: any;

      static floor: any;

      static floor1SQ: any;

      static floor2SQ: any;

      static markerDone: any;

      static momDead: any;

      static momzombie: any;

      static pinInv: any;

      static playerX: any;

      static playerY: any;

      static stopHighlight: any;

      static wasOpen: any;

      static window: any;

      constructor();

      ClimbThroughWindow: (() => any) | any;

      HitZombie: (() => any) | any;

      IsAiming: (() => any) | any;

      KillZombie: (() => any) | any;

      LootKnife: (() => any) | any;

      OnMomDead: ((zed: any) => any) | any;

      OpenWindow: (() => any) | any;

      spawnMom: (() => any) | any;

      WalkToWindow: (() => any) | any;
    }

    /** @customConstructor InventoryLootingStep:new */
    export class InventoryLootingStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static container: any;

      static finished: any;

      constructor();

      focusCorrectPanel: (() => any) | any;

      focusLootingPanel: (() => any) | any;

      haveItem: (() => any) | any;

      haveWater: (() => any) | any;

      openInventoryJoypad: (() => any) | any;
    }

    /** @customConstructor InventoryUseStep:new */
    export class InventoryUseStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static bloodMouse1: any;

      static dontTurn: any;

      static finished: any;

      static lastInventory: any;

      static panContainer: any;

      static sink: any;

      constructor();

      eat: (() => any) | any;

      fillBottle: (() => any) | any;

      focusLootingPanel: (() => any) | any;

      InLocJoypad: (() => any) | any;

      lootWeapon: (() => any) | any;

      seeWeapon: (() => any) | any;

      selectInventory: (() => any) | any;

      /** @noSelf */
      static spawnPan: () => any;
    }

    /** @customConstructor ShotgunStep:new */
    export class ShotgunStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static brotherWakeupTimer: any;

      static finished: any;

      static forceSpawnHorde: any;

      static hassprintedTimer: any;

      static lockedX: any;

      static lockedY: any;

      static outhouseSQ: any;

      static sneaked: any;

      static soundDone: any;

      static soundTimer: any;

      static spawnedHorde: any;

      static squares: any;

      static timeOfDeath: any;

      static vaulted: any;

      constructor();

      Aiming: (() => any) | any;

      isPlayedDead: (() => any) | any;

      isPlayedDeadJoypad: (() => any) | any;

      Shout: (() => any) | any;

      /** @noSelf */
      static BackOverFence: () => any;

      /** @noSelf */
      static BrothersDead: () => any;

      /** @noSelf */
      static ClimbedFence: () => any;

      /** @noSelf */
      static OnSquare: () => any;

      /** @noSelf */
      static Outhouse: () => any;

      /** @noSelf */
      static Sprinted: () => any;

      /** @noSelf */
      static SurvivalGuideOpen: () => any;

      /** @noSelf */
      static TheEnd: () => any;
    }

    /** @customConstructor SneakStep:new */
    export class SneakStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static bag: any;

      static dadzombie: any;

      static finished: any;

      static isDadDead: any;

      static pinInv: any;

      static shotgun: any;

      static sqGate: any;

      static wasSneaking: any;

      constructor();

      CheckBag: (() => any) | any;

      DadDead: (() => any) | any;

      EquippedBag: (() => any) | any;

      EquipShotgun: (() => any) | any;

      GoThroughDoor: (() => any) | any;

      OnDadDead: (() => any) | any;

      OpenGate: (() => any) | any;

      SneakingGate: (() => any) | any;

      spawnDad: (() => any) | any;

      /** @noSelf */
      static OnSwingAtDad: (owner: any, weapon: any, zed: any, dmg: any) => any;

      /** @noSelf */
      static setZoom: (depth: any) => any;

      /** @noSelf */
      static Sneak: () => any;

      /** @noSelf */
      static spawnShotgun: () => any;
    }

    /** @customConstructor WalkToAdjacent:new */
    export class WalkToAdjacent extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static appleContainer: any;

      static finished: any;

      static lastPlayerX: any;

      static lastPlayerY: any;

      static sneaked: any;

      constructor();

      inLoc: (() => any) | any;

      inLoc2: (() => any) | any;

      strafed: (() => any) | any;
    }

    /** @customConstructor WelcomeStep:new */
    export class WelcomeStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static finished: any;

      constructor();
    }

    export abstract class TutorialTests {
      static [id: string]: any;

      /** @noSelf */
      static addHoming: (sq: any, yoffset: any, xoffset: any, color: any) => any;

      /** @noSelf */
      static addMarker: (sq: any, size: any) => any;

      /** @noSelf */
      static HealthOpen: () => any;

      /** @noSelf */
      static highlight: (obj: any, thickness: any) => any;

      /** @noSelf */
      static LookedAround: () => any;

      /** @noSelf */
      static NotSkillsPage: () => any;

      /** @noSelf */
      static PlayerInfoOpen: () => any;

      /** @noSelf */
      static RemoveMarkers: () => any;

      /** @noSelf */
      static SkillsPage: () => any;

      /** @noSelf */
      static stopHighlight: (obj: any) => any;

      /** @noSelf */
      static ZoomedIn: () => any;

      /** @noSelf */
      static ZoomedOut: () => any;
    }
  }
  export namespace lua.client.Tutorial.Steps { }
}
