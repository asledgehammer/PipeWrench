/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Player {
    /** @customConstructor ISCharacterDebugUI:new */
    export class ISCharacterDebugUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      btnClose: any;

      btnSave: any;

      player: any;

      setFunctionAnimal: any;

      setFunctionDeadBody: any;

      setFunctionPlayer: any;

      setFunctionSelf: any;

      setFunctionZombie: any;

      tcks: any;

      tickBoxAnimal: any;

      tickBoxDeadBody: any;

      tickBoxPlayer: any;

      tickBoxSelf: any;

      tickBoxZombie: any;

      constructor(x: any, y: any, width: any, height: any);

      addOption(
        tickBox: any,
        text: any,
        selected: any,
        setFunction: any,
        tickSetFunction: any,
        ...__args: never[]
      ): any;

      addTickOptions(tickBox: any, tickSetFunction: any, ...__args: never[]): any;

      apply(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onTicked(index: any, selected: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Player.ISCharacterDebugUI {}
}
