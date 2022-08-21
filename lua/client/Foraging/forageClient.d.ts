/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Foraging {
    export abstract class forageClient {
      static [id: string]: any;

      /** @noSelf */
      static addZone: (_zoneData: any) => any;

      /** @noSelf */
      static clearData: () => any;

      /** @noSelf */
      static getZones: () => any;

      /** @noSelf */
      static init: () => any;

      /** @noSelf */
      static removeZone: (_zoneData: any) => any;

      /** @noSelf */
      static syncForageData: () => any;

      /** @noSelf */
      static updateData: () => any;

      /** @noSelf */
      static updateIcon: (_zoneData: any, _iconID: any, _icon: any) => any;

      /** @noSelf */
      static updateZone: (_zoneData: any) => any;
    }

    export abstract class forageData {
      static [id: string]: any;
    }
  }
  export namespace lua.client.Foraging.forageClient {}
}
