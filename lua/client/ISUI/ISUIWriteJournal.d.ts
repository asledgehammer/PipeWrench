/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISUIWriteJournal:new */
    export class ISUIWriteJournal extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      currentPage: any;

      defaultEntryText: any;

      deleteButton: any;

      editable: any;

      entry: any;

      fontHgt: any;

      ISButtonA: any;

      ISButtonB: any;

      isUnlocked: any;

      joypadButtons: any;

      joypadButtonsY: any;

      joypadIndex: any;

      joypadIndexY: any;

      lineNumber: any;

      lockButton: any;

      locked: any;

      maxTextLength: any;

      name: any;

      newPage: any;

      nextPage: any;

      no: any;

      notebook: any;

      numberOfPages: any;

      onclick: any;

      pageLabel: any;

      playerNum: any;

      previousPage: any;

      target: any;

      text: any;

      yes: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        target: any,
        onclick: any,
        character: any,
        notebook: any,
        defaultEntryText: any,
        title: any,
        lineNumber: any,
        editable: any,
        numberOfPages: any,
      );

      close(...__args: never[]): any;

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;

      setJoypadButtons(joypadData: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISUIWriteJournal {}
}
