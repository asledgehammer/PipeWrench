/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      doBagOptions(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setItemScavenged(item: any, ...__args: never[]): any;

      updateButtons(currentAction: any, ...__args: never[]): any;

      updateZoneProgress(zoneClicked: any, ...__args: never[]): any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISScavengeUI {}
}
