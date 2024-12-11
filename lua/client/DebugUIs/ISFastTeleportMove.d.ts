/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    export abstract class ISFastTeleportMove {
      static [id: string]: any;

      /** @noSelf */
      static moveXY: (player: any, dx: any, dy: any, ...__args: never[]) => any;

      /** @noSelf */
      static moveZ: (player: any, dz: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnKeyKeepPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnKeyStartPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnTick: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.ISFastTeleportMove {}
}
