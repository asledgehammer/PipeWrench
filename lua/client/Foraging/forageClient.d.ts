/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    export abstract class forageClient {
      static [id: string]: any;

      /** @noSelf */
      static addZone: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static clearData: (...__args: never[]) => any;

      /** @noSelf */
      static getZones: (...__args: never[]) => any;

      /** @noSelf */
      static init: (...__args: never[]) => any;

      /** @noSelf */
      static removeZone: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static syncForageData: (...__args: never[]) => any;

      /** @noSelf */
      static updateData: (...__args: never[]) => any;

      /** @noSelf */
      static updateIcon: (_zoneData: any, _iconID: any, _icon: any, ...__args: never[]) => any;

      /** @noSelf */
      static updateZone: (_zoneData: any, ...__args: never[]) => any;
    }

    export abstract class forageData {
      static [id: string]: any;
    }
  }
  export namespace lua.client.Foraging.forageClient {}
}
