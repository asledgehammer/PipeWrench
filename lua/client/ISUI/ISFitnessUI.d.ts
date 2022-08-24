/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addExerciseToList: ((type: any, data: any) => any) | any;

      clickedExe: ((buttons: any, index: any) => any) | any;

      equipItems: (() => any) | any;

      getCurrentRegularity: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onClickTime: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      selectedNewExercise: (() => any) | any;

      updateButtons: ((currentAction: any) => any) | any;

      updateExercises: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISFitnessUI {}
}
