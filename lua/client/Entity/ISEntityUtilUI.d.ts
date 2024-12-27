/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity {
    export abstract class ISEntityUtilUI {
      static [id: string]: any;

      /** @noSelf */
      static GetVendingAlphabeticalButtonTexture: (_index: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetVendingAlphabeticalLabelTexture: (_index: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetVendingInteriorTextures: (...__args: never[]) => any;

      /** @noSelf */
      static GetVendingInteriorUnlitTextures: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISEntityUtilUI {}
}
