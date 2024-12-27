/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Fluids {
    /** @customConstructor ISFluidTransferAction:new */
    export class ISFluidTransferAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      amount: any;

      sound: any;

      sourceFluidObject: any;

      sourceOwner: any;

      targetFluidObject: any;

      targetOwner: any;

      constructor(
        character: any,
        sourceContainer: any,
        sourceFluidObject: any,
        targetContainer: any,
        targetFluidObject: any,
        amount: any,
      );

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Fluids.ISFluidTransferAction {}
}
