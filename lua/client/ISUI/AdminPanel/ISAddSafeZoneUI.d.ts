/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      checkIfAdmin: (() => any) | any;

      checkIfIntersectingAnotherZone: (() => any) | any;

      highlightZone: ((_x1: any, _x2: any, _y1: any, _y2: any, _fullHighlight: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onClickClaimOptions: ((_clickedOption: any, _ticked: any) => any) | any;

      redefineStartingPoint: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAddSafeZoneUI {}
}
