/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISFitnessUI:new */
    export class ISFitnessUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      barHgt: any;

      barY: any;

      buttonBorderColor: any;

      cancel: any;

      clickedSquare: any;

      close: any;

      exeData: any;

      exercises: any;

      exeTime: any;

      fgBar: any;

      fgBarOrange: any;

      fgBarRed: any;

      fitness: any;

      minusBtn: any;

      ok: any;

      player: any;

      plusBtn: any;

      regularityProgressBarWidth: any;

      selectedExe: any;

      timeLbl: any;

      titleY: any;

      tooltipLbl: any;

      zoneProgress: any;

      constructor(x: any, y: any, width: any, height: any, player: any, clickedSquare: any);

      addExerciseToList(type: any, data: any, ...__args: never[]): any;

      clickedExe(buttons: any, index: any, ...__args: never[]): any;

      equipItems(...__args: never[]): any;

      getCurrentRegularity(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onClickTime(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      selectedNewExercise(...__args: never[]): any;

      updateButtons(currentAction: any, ...__args: never[]): any;

      updateExercises(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISFitnessUI {}
}
