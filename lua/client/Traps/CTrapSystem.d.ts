/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Traps {
    /** @customConstructor CTrapSystem:new */
    export class CTrapSystem extends lua.client.Map.CGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();
    }
  }
  export namespace lua.client.Traps.CTrapSystem {}
}
