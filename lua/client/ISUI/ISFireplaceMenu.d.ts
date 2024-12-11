/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISFireplaceMenu {
      static [id: string]: any;

      /** @noSelf */
      static onAddAllFuel: (playerObj: any, fireplace: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddFuel: (playerObj: any, fireplace: any, fuelType: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddMultipleFuel: (playerObj: any, fireplace: any, fuelType: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDisplayInfo: (worldobjects: any, player: any, bbq: any, ...__args: never[]) => any;

      /** @noSelf */
      static onExtinguish: (worldobjects: any, player: any, fireplace: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (
        player: any,
        context: any,
        worldobjects: any,
        test: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onLightFromKindle: (
        worldobjects: any,
        player: any,
        percedWood: any,
        stickOrBranch: any,
        fireplace: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onLightFromLiterature: (
        playerObj: any,
        itemType: any,
        lighter: any,
        fireplace: any,
        fuelAmt: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onLightFromPetrol: (
        worldobjects: any,
        player: any,
        lighter: any,
        petrol: any,
        fireplace: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static toPlayerInventory: (playerObj: any, item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISFireplaceMenu {}
}
