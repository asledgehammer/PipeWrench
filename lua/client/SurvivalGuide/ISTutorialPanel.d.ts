/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.SurvivalGuide {
    /** @customConstructor ISSurvivalGuideListBox:new */
    export class ISSurvivalGuideListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;
    }

    /** @customConstructor ISSurvivalGuideRichText:new */
    export class ISSurvivalGuideRichText extends lua.client.ISUI.ISRichTextPanel {
      [id: string]: any;
      static [id: string]: any;

      smoothScrollTargetY: any;

      smoothScrollY: any;

      yScrollDelta: any;

      constructor(x: any, y: any, width: any, height: any);

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft(joypadData: any, ...__args: never[]): any;

      onJoypadDirRight(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      updateSmoothScrolling(...__args: never[]): any;
    }

    /** @customConstructor ISSurvivalGuideRightPanel:new */
    export class ISSurvivalGuideRightPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      richText: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;
    }

    /** @customConstructor ISTutorialPanel:new */
    export class ISTutorialPanel extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      centerText: any;

      chapterList: any;

      content: any;

      moreInfo: any;

      rightPanel: any;

      rightPanelText: any;

      tutorialSetInfo: any;

      visibleFunction: any;

      visibleTarget: any;

      constructor(x: any, y: any, width: any, height: any);

      close(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      fillChapterList(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onToggleVisible(...__args: never[]): any;

      prerender(...__args: never[]): any;

      reload(...__args: never[]): any;

      render(...__args: never[]): any;

      setPage(pageNum: any, ...__args: never[]): any;

      setUseJoypad(useJoypad: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.SurvivalGuide.ISTutorialPanel {}
}
