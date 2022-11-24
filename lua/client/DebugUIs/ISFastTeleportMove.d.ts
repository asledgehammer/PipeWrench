/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    export abstract class ISFastTeleportMove {
      static [id: string]: any;

      /** @noSelf */
      static moveXY: (player: any, dx: any, dy: any) => any;

      /** @noSelf */
      static moveZ: (player: any, dz: any) => any;

      /** @noSelf */
      static OnKeyKeepPressed: (key: any) => any;

      /** @noSelf */
      static OnKeyStartPressed: (key: any) => any;

      /** @noSelf */
      static OnTick: () => any;
    }
  }
  export namespace lua.client.DebugUIs.ISFastTeleportMove {}
}
