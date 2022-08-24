/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps {
    export abstract class LootMaps {
      static [id: string]: any;

      /** @noSelf */
      static callLua: (functionName: any, mapUI: any, arg1: any, arg2: any, arg3: any, arg4: any) => any;
    }

    export abstract class MapUtils {
      static [id: string]: any;

      /** @noSelf */
      static initDefaultMapData: (mapUI: any) => any;

      /** @noSelf */
      static initDefaultStyleV1: (mapUI: any) => any;

      /** @noSelf */
      static initDirectoryMapData: (mapUI: any, directory: any) => any;

      /** @noSelf */
      static overlayPaper: (mapUI: any) => any;

      /** @noSelf */
      static revealKnownArea: (mapUI: any) => any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISMapDefinitions {}
}
