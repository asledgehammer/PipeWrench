/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Traps {
    /** @customConstructor CTrapSystem:new */
    export class CTrapSystem extends lua.client.Map.CGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      /** @noSelf */
      static initObjectModData: (isoObject: any, trapDef: any, north: any, player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Traps.CTrapSystem {}
}
