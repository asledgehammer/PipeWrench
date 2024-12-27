/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISContextMenu:new */
    export class ISContextMenu extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static globalPlayerContext: any;

      addedDefaultOptions: any;

      arrowDown: any;

      arrowUp: any;

      backgroundColorMouseOver: any;

      blinkAlpha: any;

      blinkAlphaIncrease: any;

      currentOptionRect: any;

      font: any;

      fontHgt: any;

      forceVisible: any;

      itemHgt: any;

      keepOnScreen: any;

      mouseOut: any;

      numOptions: any;

      optionPool: any;

      options: any;

      padTopBottom: any;

      padY: any;

      parent: any;

      player: any;

      scrollAreaHeight: any;

      scrollIndicatorHgt: any;

      slideGoalDY: any;

      slideGoalTime: any;

      slideGoalX: any;

      slideGoalY: any;

      subMenu: any;

      subOptionNums: any;

      tickTexture: any;

      toolTip: any;

      visibleCheck: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any, zoom: any);

      addActionsOption(
        text: any,
        getActionsFunction: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
        arg9: any,
        arg10: any,
        ...__args: never[]
      ): any;

      addColorBoxOption(
        name: any,
        target: any,
        onSelect: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
        param5: any,
        param6: any,
        param7: any,
        param8: any,
        param9: any,
        param10: any,
        ...__args: never[]
      ): any;

      addDebugOption(
        name: any,
        target: any,
        onSelect: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
        param5: any,
        param6: any,
        param7: any,
        param8: any,
        param9: any,
        param10: any,
        ...__args: never[]
      ): any;

      addDefaultOptions(...__args: never[]): any;

      addGetUpOption(
        text: any,
        target: any,
        onSelect: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any,
        p6: any,
        p7: any,
        p8: any,
        p9: any,
        p10: any,
        undefined: any,
        ...__args: never[]
      ): any;

      addOption(
        name: any,
        target: any,
        onSelect: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
        param5: any,
        param6: any,
        param7: any,
        param8: any,
        param9: any,
        param10: any,
        ...__args: never[]
      ): any;

      addOptionOnTop(
        name: any,
        target: any,
        onSelect: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
        param5: any,
        param6: any,
        param7: any,
        param8: any,
        param9: any,
        param10: any,
        ...__args: never[]
      ): any;

      addSubMenu(option: any, menu: any, ...__args: never[]): any;

      allocOption(
        name: any,
        target: any,
        onSelect: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
        param5: any,
        param6: any,
        param7: any,
        param8: any,
        param9: any,
        param10: any,
        ...__args: never[]
      ): any;

      calcHeight(...__args: never[]): any;

      calcWidth(...__args: never[]): any;

      clear(...__args: never[]): any;

      closeAll(...__args: never[]): any;

      displayAncestor(ancestor: any, ...__args: never[]): any;

      displaySubMenu(subMenu: any, option: any, ...__args: never[]): any;

      ensureVisible(...__args: never[]): any;

      getDefaultOptionCount(...__args: never[]): any;

      getIndexAt(x: any, y: any, ...__args: never[]): any;

      getIndexForSubMenu(subMenu: any, ...__args: never[]): any;

      getItemY(index: any, ...__args: never[]): any;

      getMenuOptionNames(...__args: never[]): any;

      getNew(parentContext: any, ...__args: never[]): any;

      getOptionFromName(name: any, ...__args: never[]): any;

      getRootY(...__args: never[]): any;

      getScrollAreaHeight(...__args: never[]): any;

      getSubInstance(num: any, ...__args: never[]): any;

      getSubMenu(num: any, ...__args: never[]): any;

      hideAndChildren(...__args: never[]): any;

      hideSelf(...__args: never[]): any;

      hideSelfAndChildren2(...__args: never[]): any;

      hideToolTip(...__args: never[]): any;

      insertOptionAfter(
        prevOptionName: any,
        name: any,
        target: any,
        onSelect: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
        param5: any,
        param6: any,
        param7: any,
        param8: any,
        param9: any,
        param10: any,
        ...__args: never[]
      ): any;

      insertOptionBefore(
        nextOptionName: any,
        name: any,
        target: any,
        onSelect: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
        param5: any,
        param6: any,
        param7: any,
        param8: any,
        param9: any,
        param10: any,
        ...__args: never[]
      ): any;

      isAnyVisible(...__args: never[]): any;

      isEmpty(...__args: never[]): any;

      isMouseOut(...__args: never[]): any;

      isOptionSingleMenu(...__args: never[]): any;

      onFocus(x: any, y: any, ...__args: never[]): any;

      onGetUpAndThen(
        onSelect: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any,
        p6: any,
        p7: any,
        p8: any,
        p9: any,
        p10: any,
        undefined: any,
        ...__args: never[]
      ): any;

      onJoypadDirDown(...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDirUp(...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      removeLastOption(...__args: never[]): any;

      removeOptionByName(optName: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setFont(font: any, ...__args: never[]): any;

      setFontFromOption(...__args: never[]): any;

      setOptionChecked(option: any, checked: any, ...__args: never[]): any;

      setSlideGoalX(startX: any, finalX: any, ...__args: never[]): any;

      setSlideGoalY(startY: any, finalY: any, ...__args: never[]): any;

      showTooltip(option: any, ...__args: never[]): any;

      topmostMenuWithMouse(x: any, y: any, ...__args: never[]): any;

      updateSlideGoalX(...__args: never[]): any;

      updateSlideGoalY(...__args: never[]): any;

      /** @noSelf */
      static get: (player: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static noise: (msg: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISContextMenu {}
}
