/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming {
    export abstract class CFarming_Interact {
      static [id: string]: any;

      /** @noSelf */
      static ChangeClimbDirection: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static FastDropItem: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static getObjectClutterType: (v: any, ...__args: never[]) => any;

      /** @noSelf */
      static onContextKey: (player: any, timePressedContext: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Farming.CFarming_Interact {}
}
