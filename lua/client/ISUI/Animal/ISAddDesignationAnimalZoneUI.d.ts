/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISAddDesignationAnimalZoneUI:new */
    export class ISAddDesignationAnimalZoneUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      cancel: any;

      drawTileMouse: any;

      endX: any;

      endY: any;

      heightCorrect: any;

      player: any;

      selectedSq: any;

      startingX: any;

      startingY: any;

      startRenderTile: any;

      titleEntry: any;

      waitingConfirm: any;

      widthCorrect: any;

      zoneColor: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addZone(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onCreateZone(button: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      pickSquare(x: any, y: any, ...__args: never[]): any;

      reset(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISAddDesignationAnimalZoneUI {}
}
