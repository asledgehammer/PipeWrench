/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Foraging {
    export abstract class forageServer {
      static [id: string]: any;

      /** @noSelf */
      static addZone: (_zoneData: any, ...__args: never[]) => any;

      /** @noSelf */
      static clearData: (...__args: never[]) => any;

      /** @noSelf */
      static OnClientCommand: (
        _module: any,
        _command: any,
        _plObj: any,
        _packet: any,
        _clientID: any,
        ...__args: never[]
      ) => any;

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
  }
  export namespace lua.server.Foraging.forageServer {}
}
