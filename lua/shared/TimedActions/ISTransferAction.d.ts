/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISTransferAction:new */
    export class ISTransferAction extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      canDropOnFloor(square: any, character: any, ...__args: never[]): any;

      floorHasRoomFor(square: any, character: any, item: any, destContainer: any, ...__args: never[]): any;

      getNotFullFloorSquare(character: any, item: any, destContainer: any, ...__args: never[]): any;

      removeItemOnCharacter(character: any, item: any, ...__args: never[]): any;

      transferItem(
        character: any,
        item: any,
        srcContainer: any,
        destContainer: any,
        dropSquare: any,
        ...__args: never[]
      ): any;

      /** @noSelf */
      static GetDropItemOffset: (character: any, square: any, item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.TimedActions.ISTransferAction {}
}
