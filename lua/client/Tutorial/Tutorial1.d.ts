/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Tutorial {
    export abstract class Tutorial1 {
      static [id: string]: any;

      static contextMenuEat: any;

      static contextMenuEquip2Hand: any;

      static contextMenuEquipBag: any;

      static contextMenuEquipPrimary: any;

      static contextMenuFillBottle: any;

      static contextMenuOpenCurtain: any;

      static contextMenuWear: any;

      static DeadMouse: any;

      /** @noSelf */
      static Add: () => any;

      /** @noSelf */
      static addBarricade: (x: any, y: any, z: any) => any;

      /** @noSelf */
      static addMetalBarricade: (x: any, y: any, z: any) => any;

      /** @noSelf */
      static AddPlayer: (p: any) => any;

      /** @noSelf */
      static closeBothInv: () => any;

      /** @noSelf */
      static closeInv: () => any;

      /** @noSelf */
      static closeLoot: () => any;

      /** @noSelf */
      static collapseInv: (inv: any) => any;

      /** @noSelf */
      static createInventoryContextMenu: (player: any, isInPlayerInventory: any, items: any, x: any, y: any) => any;

      /** @noSelf */
      static createWorldContextMenu: (player: any, worldobjects: any, x: any, y: any) => any;

      /** @noSelf */
      static createWorldContextMenuFromContext: (context: any, worldobjects: any) => any;

      /** @noSelf */
      static doubleClickInventory: (inventoryPane: any, x: any, y: any, mouseOverOption: any) => any;

      /** @noSelf */
      static FillContainers: () => any;

      /** @noSelf */
      static Init: () => any;

      /** @noSelf */
      static lockDoor: (x: any, y: any, z: any) => any;

      /** @noSelf */
      static openDoor: (x: any, y: any, z: any, north: any) => any;

      /** @noSelf */
      static PreloadInit: () => any;

      /** @noSelf */
      static removeFences: () => any;

      /** @noSelf */
      static Render: () => any;

      /** @noSelf */
      static replaceFence: (sq: any, north: any) => any;

      /** @noSelf */
      static SpawnZombies: (count: any) => any;

      /** @noSelf */
      static Tick: () => any;

      /** @noSelf */
      static unlockDoor: (x: any, y: any, z: any) => any;
    }
  }
  export namespace lua.client.Tutorial.Tutorial1 {}
}
