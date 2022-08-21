/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping {
    /** @customConstructor CCampfireSystem:new */
    export class CCampfireSystem extends lua.client.Map.CGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();
    }
  }
  export namespace lua.client.Camping.CCampfireSystem {}
}
