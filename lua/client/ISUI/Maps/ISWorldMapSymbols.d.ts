/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISWorldMapSymbols:new */
    export class ISWorldMapSymbols extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      addNoteBtn: any;

      blackColor: any;

      buttonList: any;

      character: any;

      colorButtonInfo: any;

      colorButtons: any;

      currentColor: any;

      currentTool: any;

      editNoteBtn: any;

      ignoreRightMouseUp: any;

      keyPressConsumed: any;

      mapAPI: any;

      mapUI: any;

      mouseOverNote: any;

      mouseOverSymbol: any;

      moveBtn: any;

      noteX: any;

      noteY: any;

      playerNum: any;

      removeBtn: any;

      selectedSymbol: any;

      showTranslationOption: any;

      symbolList: any;

      symbolsAPI: any;

      symbolTexList: any;

      textCursor: any;

      tools: any;

      wasCanErase: any;

      wasCanWrite: any;

      constructor(x: any, y: any, width: any, height: any, mapUI: any);

      canErase(...__args: never[]): any;

      canWrite(...__args: never[]): any;

      checkAnnotationForMoveJoypad(...__args: never[]): any;

      checkAnnotationForMoveMouse(...__args: never[]): any;

      checkAnnotationForRemoveJoypad(...__args: never[]): any;

      checkAnnotationForRemoveMouse(...__args: never[]): any;

      checkInventory(...__args: never[]): any;

      checkTextForEditJoypad(...__args: never[]): any;

      checkTextForEditMouse(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getJoypadAButtonText(...__args: never[]): any;

      hitTestAnnotations(x: any, y: any, mode: any, filter: any, ...__args: never[]): any;

      initTools(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onButtonClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDownInMap(button: any, joypadData: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseDownMap(x: any, y: any, ...__args: never[]): any;

      onMouseMoveMap(x: any, y: any, ...__args: never[]): any;

      onMouseUpMap(x: any, y: any, ...__args: never[]): any;

      onRightMouseDownMap(x: any, y: any, ...__args: never[]): any;

      onRightMouseUpMap(x: any, y: any, ...__args: never[]): any;

      populateSymbolList(...__args: never[]): any;

      render(...__args: never[]): any;

      renderNoteBeingAddedOrEdited(modal: any, ...__args: never[]): any;

      renderSymbol(symbol: any, x: any, y: any, ...__args: never[]): any;

      setCurrentTool(tool: any, ...__args: never[]): any;

      toggleTool(tool: any, ...__args: never[]): any;

      undisplay(...__args: never[]): any;

      updateSymbolColors(...__args: never[]): any;

      /** @noSelf */
      static RequiredWidth: (...__args: never[]) => any;
    }

    /** @customConstructor ISWorldMapSymbolTool:new */
    export class ISWorldMapSymbolTool extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      dragMoved: any;

      dragStartX: any;

      dragStartY: any;

      mapAPI: any;

      mapUI: any;

      symbolsAPI: any;

      symbolsUI: any;

      constructor(symbolsUI: any);

      activate(...__args: never[]): any;

      deactivate(...__args: never[]): any;

      getJoypadAButtonText(...__args: never[]): any;

      getMouseX(...__args: never[]): any;

      getMouseY(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onJoypadDownInMap(button: any, joypadData: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      onMouseMove(dx: any, dy: any, ...__args: never[]): any;

      onMouseUp(x: any, y: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor ISWorldMapSymbolTool_AddNote:new */
    export class ISWorldMapSymbolTool_AddNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      modal: any;

      constructor(symbolsUI: any);

      addNote(x: any, y: any, ...__args: never[]): any;

      onAddNote(button: any, playerNum: any, ...__args: never[]): any;
    }

    /** @customConstructor ISWorldMapSymbolTool_AddSymbol:new */
    export class ISWorldMapSymbolTool_AddSymbol extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      constructor(symbolsUI: any);

      addSymbol(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor ISWorldMapSymbolTool_EditNote:new */
    export class ISWorldMapSymbolTool_EditNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      modal: any;

      constructor(symbolsUI: any);

      editNote(x: any, y: any, ...__args: never[]): any;

      onEditNote(button: any, symbol: any, ...__args: never[]): any;
    }

    /** @customConstructor ISWorldMapSymbolTool_MoveAnnotation:new */
    export class ISWorldMapSymbolTool_MoveAnnotation extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      deltaX: any;

      deltaY: any;

      originalX: any;

      originalY: any;

      constructor(symbolsUI: any);

      cancelDrag(...__args: never[]): any;
    }

    /** @customConstructor ISWorldMapSymbolTool_RemoveAnnotation:new */
    export class ISWorldMapSymbolTool_RemoveAnnotation extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      constructor(symbolsUI: any);

      removeAnnotation(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISWorldMapSymbols {}
}
