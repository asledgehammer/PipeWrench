/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class ISFireplaceMenu {
      static [id: string]: any;

      /** @noSelf */
      static onAddAllFuel: (playerObj: any, fireplace: any) => any;

      /** @noSelf */
      static onAddFuel: (playerObj: any, fireplace: any, fuelType: any) => any;

      /** @noSelf */
      static onAddMultipleFuel: (playerObj: any, fireplace: any, fuelType: any) => any;

      /** @noSelf */
      static onDisplayInfo: (worldobjects: any, player: any, bbq: any) => any;

      /** @noSelf */
      static onExtinguish: (worldobjects: any, player: any, fireplace: any) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static onLightFromKindle: (
        worldobjects: any,
        player: any,
        percedWood: any,
        stickOrBranch: any,
        fireplace: any
      ) => any;

      /** @noSelf */
      static onLightFromLiterature: (playerObj: any, itemType: any, lighter: any, fireplace: any, fuelAmt: any) => any;

      /** @noSelf */
      static onLightFromPetrol: (worldobjects: any, player: any, lighter: any, petrol: any, fireplace: any) => any;

      /** @noSelf */
      static toPlayerInventory: (playerObj: any, item: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISFireplaceMenu {}
}
