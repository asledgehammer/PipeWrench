/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      OnBrothersDead(...__args: never[]): any;

      /** @noSelf */
      static BandageYourself: (...__args: never[]) => any;

      /** @noSelf */
      static CheckWindow: (...__args: never[]) => any;

      /** @noSelf */
      static HealthOpen: (...__args: never[]) => any;

      /** @noSelf */
      static OpenCurtain: (...__args: never[]) => any;

      /** @noSelf */
      static spawnBrothers: (...__args: never[]) => any;

      /** @noSelf */
      static ThroughDoor: (...__args: never[]) => any;

      /** @noSelf */
      static ThroughWindow: (...__args: never[]) => any;

      /** @noSelf */
      static Vault: (...__args: never[]) => any;
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

      ClimbThroughWindow(...__args: never[]): any;

      HitZombie(...__args: never[]): any;

      IsAiming(...__args: never[]): any;

      KillZombie(...__args: never[]): any;

      LootKnife(...__args: never[]): any;

      OnMomDead(zed: any, ...__args: never[]): any;

      OpenWindow(...__args: never[]): any;

      spawnMom(...__args: never[]): any;

      WalkToWindow(...__args: never[]): any;
    }

    /** @customConstructor InventoryLootingStep:new */
    export class InventoryLootingStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static container: any;

      static finished: any;

      constructor();

      focusCorrectPanel(...__args: never[]): any;

      focusLootingPanel(...__args: never[]): any;

      haveItem(...__args: never[]): any;

      haveWater(...__args: never[]): any;

      openInventoryJoypad(...__args: never[]): any;
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

      eat(...__args: never[]): any;

      fillBottle(...__args: never[]): any;

      focusLootingPanel(...__args: never[]): any;

      InLocJoypad(...__args: never[]): any;

      lootWeapon(...__args: never[]): any;

      seeWeapon(...__args: never[]): any;

      selectInventory(...__args: never[]): any;

      /** @noSelf */
      static spawnPan: (...__args: never[]) => any;
    }

    /** @customConstructor ShotgunStep:new */
    export class ShotgunStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static brotherWakeupTimer: any;

      static finished: any;

      static forcedShoutBinding: any;

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

      Aiming(...__args: never[]): any;

      isPlayedDead(...__args: never[]): any;

      isPlayedDeadJoypad(...__args: never[]): any;

      Shout(...__args: never[]): any;

      /** @noSelf */
      static BackOverFence: (...__args: never[]) => any;

      /** @noSelf */
      static BrothersDead: (...__args: never[]) => any;

      /** @noSelf */
      static ClimbedFence: (...__args: never[]) => any;

      /** @noSelf */
      static OnSquare: (...__args: never[]) => any;

      /** @noSelf */
      static Outhouse: (...__args: never[]) => any;

      /** @noSelf */
      static Sprinted: (...__args: never[]) => any;

      /** @noSelf */
      static SurvivalGuideOpen: (...__args: never[]) => any;

      /** @noSelf */
      static TheEnd: (...__args: never[]) => any;
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

      CheckBag(...__args: never[]): any;

      DadDead(...__args: never[]): any;

      EquippedBag(...__args: never[]): any;

      EquipShotgun(...__args: never[]): any;

      GoThroughDoor(...__args: never[]): any;

      OnDadDead(...__args: never[]): any;

      OpenGate(...__args: never[]): any;

      SneakingGate(...__args: never[]): any;

      spawnDad(...__args: never[]): any;

      /** @noSelf */
      static OnSwingAtDad: (owner: any, weapon: any, zed: any, dmg: any, ...__args: never[]) => any;

      /** @noSelf */
      static setZoom: (depth: any, ...__args: never[]) => any;

      /** @noSelf */
      static Sneak: (...__args: never[]) => any;

      /** @noSelf */
      static spawnShotgun: (...__args: never[]) => any;
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

      inLoc(...__args: never[]): any;

      inLoc2(...__args: never[]): any;

      strafed(...__args: never[]): any;
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
      static addHoming: (sq: any, yoffset: any, xoffset: any, color: any, ...__args: never[]) => any;

      /** @noSelf */
      static addMarker: (sq: any, size: any, ...__args: never[]) => any;

      /** @noSelf */
      static HealthOpen: (...__args: never[]) => any;

      /** @noSelf */
      static highlight: (obj: any, thickness: any, ...__args: never[]) => any;

      /** @noSelf */
      static LookedAround: (...__args: never[]) => any;

      /** @noSelf */
      static NotSkillsPage: (...__args: never[]) => any;

      /** @noSelf */
      static PlayerInfoOpen: (...__args: never[]) => any;

      /** @noSelf */
      static RemoveMarkers: (...__args: never[]) => any;

      /** @noSelf */
      static SkillsPage: (...__args: never[]) => any;

      /** @noSelf */
      static stopHighlight: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static ZoomedIn: (...__args: never[]) => any;

      /** @noSelf */
      static ZoomedOut: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Tutorial.Steps {}
}
