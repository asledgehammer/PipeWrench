/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Fluids {
    /** @customConstructor ISFluidContainer:new */
    export class ISFluidContainer extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      fluidContainer: any;

      fluidResource: any;

      isFluidResource: any;

      isInventoryItem: any;

      isoPanel: any;

      constructor(_fluidObject: any);

      copy(...__args: never[]): any;

      getFluidContainer(...__args: never[]): any;

      getFluidObject(...__args: never[]): any;

      getFluidResource(...__args: never[]): any;

      getOwner(...__args: never[]): any;

      initFromObject(_fluidObject: any, ...__args: never[]): any;

      isIsoPanel(...__args: never[]): any;

      isItem(...__args: never[]): any;

      isResource(...__args: never[]): any;

      isValid(...__args: never[]): any;

      resetObject(...__args: never[]): any;

      sync(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Fluids.ISFluidContainer {}
}
