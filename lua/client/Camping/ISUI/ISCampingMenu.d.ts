/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping.ISUI {
    export abstract class ISCampingMenu {
      static [id: string]: any;

      /** @noSelf */
      static doCampingMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static doSleepOption: (context: any, bed: any, player: any, playerObj: any) => any;

      /** @noSelf */
      static getFuelDurationForItem: (item: any) => any;

      /** @noSelf */
      static getFuelItemUses: (item: any) => any;

      /** @noSelf */
      static isValidCampfire: (campfire: any) => any;

      /** @noSelf */
      static isValidFuel: (item: any) => any;

      /** @noSelf */
      static isValidTinder: (item: any) => any;

      /** @noSelf */
      static onAddAllFuel: (playerObj: any, campfire: any) => any;

      /** @noSelf */
      static onAddFuel: (playerObj: any, campfire: any, fuelType: any) => any;

      /** @noSelf */
      static onAddMultipleFuel: (playerObj: any, campfire: any, fuelType: any) => any;

      /** @noSelf */
      static onAddTent: (worldobjects: any, player: any, tentKit: any) => any;

      /** @noSelf */
      static onDisplayInfo: (worldobjects: any, player: any, isoCampfireObject: any, campfire: any) => any;

      /** @noSelf */
      static onLightFromKindle: (
        worldobjects: any,
        player: any,
        percedWood: any,
        stickOrBranch: any,
        campfire: any
      ) => any;

      /** @noSelf */
      static onLightFromLiterature: (playerObj: any, itemType: any, lighter: any, campfire: any, fuelAmt: any) => any;

      /** @noSelf */
      static onLightFromPetrol: (worldobjects: any, player: any, lighter: any, petrol: any, campfire: any) => any;

      /** @noSelf */
      static onPlaceCampfire: (worldobjects: any, player: any, campfireKit: any) => any;

      /** @noSelf */
      static onPutOutCampfire: (worldobjects: any, player: any, campfire: any) => any;

      /** @noSelf */
      static onRemoveCampfire: (worldobjects: any, player: any, campfire: any) => any;

      /** @noSelf */
      static onRemoveTent: (worldobjects: any, player: any, tent: any) => any;

      /** @noSelf */
      static onRest: (worldobjects: any, player: any, tent: any) => any;

      /** @noSelf */
      static onSleep: (worldobjects: any, player: any, tent: any) => any;

      /** @noSelf */
      static timeString: (timeInMinutes: any) => any;

      /** @noSelf */
      static toPlayerInventory: (playerObj: any, item: any) => any;

      /** @noSelf */
      static walkToCampfire: (playerObj: any, square: any) => any;
    }
  }
  export namespace lua.client.Camping.ISUI.ISCampingMenu {}
}
