/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.ISUI {
    export abstract class ISCampingMenu {
      static [id: string]: any;

      /** @noSelf */
      static doCampingMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doSleepOption: (context: any, bed: any, player: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static getFuelDurationForItem: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static getFuelDurationForItemInHours: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static getFuelItemUses: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static isValidCampfire: (campfire: any, ...__args: never[]) => any;

      /** @noSelf */
      static isValidFuel: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static isValidTinder: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddAllFuel: (playerObj: any, campfire: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddFuel: (playerObj: any, campfire: any, fuelType: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddMultipleFuel: (playerObj: any, campfire: any, fuelType: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDisplayInfo: (
        worldobjects: any,
        player: any,
        isoCampfireObject: any,
        campfire: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onDropCorpse: (
        worldobjects: any,
        player: any,
        isoCampfireObject: any,
        campfire: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onLightFromKindle: (
        worldobjects: any,
        player: any,
        percedWood: any,
        stickOrBranch: any,
        campfire: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onLightFromLiterature: (
        playerObj: any,
        itemType: any,
        lighter: any,
        campfire: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onLightFromPetrol: (
        worldobjects: any,
        player: any,
        lighter: any,
        petrol: any,
        campfire: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onPlaceCampfire: (worldobjects: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPutOutCampfire: (worldobjects: any, player: any, campfire: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveCampfire: (worldobjects: any, player: any, campfire: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRest: (worldobjects: any, player: any, tent: any, ...__args: never[]) => any;

      /** @noSelf */
      static shouldBurn: (item: any, playersChoice: any, ...__args: never[]) => any;

      /** @noSelf */
      static timeString: (timeInMinutes: any, ...__args: never[]) => any;

      /** @noSelf */
      static toPlayerInventory: (playerObj: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkToCampfire: (playerObj: any, square: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Camping.ISUI.ISCampingMenu {}
}
