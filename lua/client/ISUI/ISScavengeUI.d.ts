/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISScavengeUI:new */
    export class ISScavengeUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      bagOptions: any;

      barHgt: any;

      barPadY: any;

      barY: any;

      buttonBorderColor: any;

      cancel: any;

      clickedSquare: any;

      close: any;

      fgBar: any;

      fgBarOrange: any;

      fgBarRed: any;

      itemsScavenged: any;

      maxItem: any;

      ok: any;

      options: any;

      player: any;

      titleY: any;

      zone: any;

      zoneProgress: any;

      constructor(x: any, y: any, width: any, height: any, player: any, zone: any, clickedSquare: any);

      doBagOptions: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setItemScavenged: ((item: any) => any) | any;

      updateButtons: ((currentAction: any) => any) | any;

      updateZoneProgress: ((zoneClicked: any) => any) | any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISScavengeUI {}
}
