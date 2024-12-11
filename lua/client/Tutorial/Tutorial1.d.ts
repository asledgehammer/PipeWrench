/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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
      static Add: (...__args: never[]) => any;

      /** @noSelf */
      static addBarricade: (x: any, y: any, z: any, ...__args: never[]) => any;

      /** @noSelf */
      static addMetalBarricade: (x: any, y: any, z: any, ...__args: never[]) => any;

      /** @noSelf */
      static AddPlayer: (p: any, ...__args: never[]) => any;

      /** @noSelf */
      static closeBothInv: (...__args: never[]) => any;

      /** @noSelf */
      static closeInv: (...__args: never[]) => any;

      /** @noSelf */
      static closeLoot: (...__args: never[]) => any;

      /** @noSelf */
      static collapseInv: (inv: any, ...__args: never[]) => any;

      /** @noSelf */
      static createInventoryContextMenu: (
        player: any,
        isInPlayerInventory: any,
        items: any,
        x: any,
        y: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static createWorldContextMenu: (player: any, worldobjects: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static createWorldContextMenuFromContext: (context: any, worldobjects: any, ...__args: never[]) => any;

      /** @noSelf */
      static doubleClickInventory: (
        inventoryPane: any,
        x: any,
        y: any,
        mouseOverOption: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static FillContainers: (...__args: never[]) => any;

      /** @noSelf */
      static Init: (...__args: never[]) => any;

      /** @noSelf */
      static lockDoor: (x: any, y: any, z: any, ...__args: never[]) => any;

      /** @noSelf */
      static openDoor: (x: any, y: any, z: any, north: any, ...__args: never[]) => any;

      /** @noSelf */
      static PreloadInit: (...__args: never[]) => any;

      /** @noSelf */
      static removeFences: (...__args: never[]) => any;

      /** @noSelf */
      static Render: (...__args: never[]) => any;

      /** @noSelf */
      static replaceFence: (sq: any, north: any, ...__args: never[]) => any;

      /** @noSelf */
      static SpawnZombies: (count: any, ...__args: never[]) => any;

      /** @noSelf */
      static Tick: (...__args: never[]) => any;

      /** @noSelf */
      static unlockDoor: (x: any, y: any, z: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Tutorial.Tutorial1 {}
}
