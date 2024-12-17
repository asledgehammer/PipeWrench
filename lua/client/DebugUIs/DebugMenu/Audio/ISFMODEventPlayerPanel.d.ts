/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Audio {
    /** @customConstructor ISFMODEventPlayerPanel:new */
    export class ISFMODEventPlayerPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      buttonPlay: any;

      buttonStop: any;

      combo: any;

      javaPlayer: any;

      parameterEditors: any;

      parameterY: any;

      sliderDuration: any;

      sliderTimeline: any;

      sliderVolume: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      createChildren(...__args: never[]): any;

      createParameterEditorUI(editor: any, parameterName: any, y: any, ...__args: never[]): any;

      initParameterEditors(eventPath: any, ...__args: never[]): any;

      onButtonPlay(...__args: never[]): any;

      onButtonStop(...__args: never[]): any;

      onCombo(...__args: never[]): any;

      onSliderDuration(value: any, slider: any, ...__args: never[]): any;

      onSliderTimeline(value: any, slider: any, ...__args: never[]): any;

      onSliderVolume(value: any, slider: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;
    }

    /** @customConstructor ISFMODEventPlayerParameterEditor:new */
    export class ISFMODEventPlayerParameterEditor extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      currentValue: any;

      eventPath: any;

      eventPlayer: any;

      isGlobal: any;

      parameterIndex: any;

      parameterName: any;

      ui: any;

      constructor(eventPlayer: any, eventPath: any, parameterIndex: any);

      getEntryText(value: any, ...__args: never[]): any;

      onCombo(...__args: never[]): any;

      onCommandEntered(...__args: never[]): any;

      setCurrentValue(value: any, ...__args: never[]): any;

      setUI(ui: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Audio.ISFMODEventPlayerPanel {}
}
