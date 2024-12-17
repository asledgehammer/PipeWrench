/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAddSafeZoneUI:new */
    export class ISAddSafeZoneUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      cancel: any;

      character: any;

      claimOptions: any;

      creatingZone: any;

      fullHighlight: any;

      notIntersecting: any;

      ok: any;

      ownerEntry: any;

      size: any;

      startingPoint: any;

      startingX: any;

      startingY: any;

      titleEntry: any;

      X1: any;

      X2: any;

      Y1: any;

      Y2: any;

      zoneheight: any;

      zonewidth: any;

      constructor(x: any, y: any, width: any, height: any, character: any);

      checkIfIntersectingAnotherZone(...__args: never[]): any;

      highlightZone(_x1: any, _x2: any, _y1: any, _y2: any, _fullHighlight: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onClickClaimOptions(_clickedOption: any, _ticked: any, ...__args: never[]): any;

      redefineStartingPoint(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAddSafeZoneUI {}
}
