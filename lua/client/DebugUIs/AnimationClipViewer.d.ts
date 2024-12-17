/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor AnimationClipViewer:new */
    export class AnimationClipViewer extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      animalScriptByModelScript: any;

      animalScriptByName: any;

      animate: any;

      bottomPanel: any;

      buttonOptions: any;

      comboAnimal: any;

      currentAnimalScript: any;

      currentObjectName: any;

      filter: any;

      filterText: any;

      listBox: any;

      optionsPanel: any;

      scene: any;

      soundBar: any;

      soundPanel: any;

      speedScale: any;

      timeline: any;

      toolBar: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      createToolbar(...__args: never[]): any;

      fillAnimalCombo(...__args: never[]): any;

      getCurrentFrame(...__args: never[]): any;

      getCurrentTime(...__args: never[]): any;

      getDuration(...__args: never[]): any;

      getFPS(...__args: never[]): any;

      getLastFrame(...__args: never[]): any;

      initAnimalModelScripts(...__args: never[]): any;

      java0(func: any, ...__args: never[]): any;

      java1(func: any, arg0: any, ...__args: never[]): any;

      java2(func: any, arg0: any, arg1: any, ...__args: never[]): any;

      java3(func: any, arg0: any, arg1: any, arg2: any, ...__args: never[]): any;

      java4(func: any, arg0: any, arg1: any, arg2: any, arg3: any, ...__args: never[]): any;

      java5(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      java6(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, ...__args: never[]): any;

      java9(
        func: any,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
        ...__args: never[]
      ): any;

      onComboAnimalModel(...__args: never[]): any;

      onExit(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onOptions(...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSpeedScaleChanged(speed: any, slider: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      resetView(...__args: never[]): any;

      setClipList(...__args: never[]): any;

      showUI(...__args: never[]): any;

      update(...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_ListBox:new */
    export class AnimationClipViewer_ListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      selectedClipName: any;

      constructor(x: any, y: any, width: any, height: any);

      indexOf(text: any, ...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_OptionsPanel:new */
    export class AnimationClipViewer_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_Scene:new */
    export class AnimationClipViewer_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      rotate: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any);

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_SoundBar:new */
    export class AnimationClipViewer_SoundBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragIndex: any;

      mouseDown: any;

      prevFraction: any;

      soundList: any;

      constructor(x: any, y: any, width: any, height: any);

      getSoundBounds(sound: any, ...__args: never[]): any;

      hitTest(x: any, y: any, ...__args: never[]): any;

      playSound(index: any, soundName: any, ...__args: never[]): any;

      playSounds(...__args: never[]): any;

      render(...__args: never[]): any;

      renderSound(index: any, sound: any, ...__args: never[]): any;

      stopSound(index: any, ...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_SoundPanel:new */
    export class AnimationClipViewer_SoundPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      comboHgt: any;

      soundCombos: any;

      soundTickBoxes: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      createSoundCombo(index: any, y: any, ...__args: never[]): any;

      fillSoundCombo(combo: any, ...__args: never[]): any;

      onSoundComboSelected(combo: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, soundIndex: any, ...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_Timeline:new */
    export class AnimationClipViewer_Timeline extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      keyframeTimes: any;

      selectedClipName: any;

      constructor(x: any, y: any, width: any, height: any);

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.AnimationClipViewer {
    /** @noSelf */
    export const AnimationViewerState_InitUI: () => any;
  }
}
