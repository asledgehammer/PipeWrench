/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps {
    export abstract class LootMaps {
      static [id: string]: any;

      /** @noSelf */
      static callLua: (
        functionName: any,
        mapUI: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        ...__args: never[]
      ) => any;
    }

    export abstract class MapUtils {
      static [id: string]: any;

      /** @noSelf */
      static initDefaultMapData: (mapUI: any, ...__args: never[]) => any;

      /** @noSelf */
      static initDefaultStyleV1: (mapUI: any, ...__args: never[]) => any;

      /** @noSelf */
      static initDirectoryMapData: (mapUI: any, directory: any, ...__args: never[]) => any;

      /** @noSelf */
      static overlayPaper: (mapUI: any, ...__args: never[]) => any;

      /** @noSelf */
      static revealKnownArea: (mapUI: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISMapDefinitions {}
}
