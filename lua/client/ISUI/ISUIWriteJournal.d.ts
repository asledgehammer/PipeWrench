/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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
        numberOfPages: any
      );

      close: (() => any) | any;

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      prerender: (() => any) | any;

      render: (() => any) | any;

      setJoypadButtons: ((joypadData: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISUIWriteJournal {}
}
