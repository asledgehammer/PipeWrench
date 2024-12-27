/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Fluids {
    export abstract class ISFluidUtil {
      static [id: string]: any;

      getLuaFluidContainer: ((container: any) => any) | any;

      /** @noSelf */
      static doWalkTo: (_player: any, _container: any, _dist: any, ...__args: never[]) => any;

      /** @noSelf */
      static getContainerOwner: (_container: any, ...__args: never[]) => any;

      /** @noSelf */
      static getMinTransferActionTime: (...__args: never[]) => any;

      /** @noSelf */
      static getTransferActionTimePerLiter: (...__args: never[]) => any;

      /** @noSelf */
      static validateContainer: (_container: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Fluids.ISFluidUtil {}
}
