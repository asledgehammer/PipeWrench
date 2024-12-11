/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISUIElement:new */
    export class ISUIElement extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      static IDMax: any;

      anchorBottom: any;

      anchorLeft: any;

      anchorRight: any;

      anchorTop: any;

      children: any;

      controller: any;

      dock: any;

      enabled: any;

      forceCursorVisible: any;

      height: any;

      hscroll: any;

      ID: any;

      javaObject: any;

      joyfocus: any;

      minimumHeight: any;

      minimumWidth: any;

      onMouseDoubleClick(x: any, y: any, ...__args: never[]): any;

      removed: any;

      scrollwidth: any;

      target: any;

      vscroll: any;

      wantKeyEvents: any;

      width: any;

      x: any;

      y: any;

      constructor(x: any, y: any, width: any, height: any);

      addChild(otherElement: any, ...__args: never[]): any;

      addScrollBars(addHorizontal: any, ...__args: never[]): any;

      addToUIManager(...__args: never[]): any;

      backMost(...__args: never[]): any;

      bringToTop(...__args: never[]): any;

      clampStencilRectToParent(x: any, y: any, w: any, h: any, ...__args: never[]): any;

      clearChildren(...__args: never[]): any;

      clearMaxDrawHeight(...__args: never[]): any;

      clearStencilRect(...__args: never[]): any;

      containsPoint(x: any, y: any, ...__args: never[]): any;

      containsPointLocal(x: any, y: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      drawLine2(x: any, y: any, x2: any, y2: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      drawProgressBar(x: any, y: any, w: any, h: any, f: any, fg: any, ...__args: never[]): any;

      drawRect(x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      drawRectBorder(x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      drawRectBorderStatic(x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      drawRectStatic(x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      drawText(str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any, ...__args: never[]): any;

      drawTextCentre(str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any, ...__args: never[]): any;

      drawTextCentreStatic(
        str: any,
        x: any,
        y: any,
        r: any,
        g: any,
        b: any,
        a: any,
        font: any,
        ...__args: never[]
      ): any;

      drawTextRight(str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any, ...__args: never[]): any;

      drawTextRightStatic(str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any, ...__args: never[]): any;

      drawTextStatic(str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any, ...__args: never[]): any;

      drawTextUntrimmed(str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any, ...__args: never[]): any;

      drawTexture(texture: any, x: any, y: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      drawTextureAllPoint(
        texture: any,
        tlx: any,
        tly: any,
        trx: any,
        _try_: any,
        brx: any,
        bry: any,
        blx: any,
        bly: any,
        r: any,
        g: any,
        b: any,
        a: any,
        ...__args: never[]
      ): any;

      DrawTextureAngle(tex: any, centerX: any, centerY: any, angle: any, ...__args: never[]): any;

      drawTextureScaled(
        texture: any,
        x: any,
        y: any,
        w: any,
        h: any,
        a: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ): any;

      drawTextureScaledAspect(
        texture: any,
        x: any,
        y: any,
        w: any,
        h: any,
        a: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ): any;

      drawTextureScaledAspect2(
        texture: any,
        x: any,
        y: any,
        w: any,
        h: any,
        a: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ): any;

      drawTextureScaledStatic(
        texture: any,
        x: any,
        y: any,
        w: any,
        h: any,
        a: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ): any;

      drawTextureScaledUniform(
        texture: any,
        x: any,
        y: any,
        scale: any,
        a: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ): any;

      drawTextureStatic(texture: any, x: any, y: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      drawTextureTiledX(
        texture: any,
        x: any,
        y: any,
        w: any,
        h: any,
        r: any,
        g: any,
        b: any,
        a: any,
        ...__args: never[]
      ): any;

      drawTextureTiledY(
        texture: any,
        x: any,
        y: any,
        w: any,
        h: any,
        r: any,
        g: any,
        b: any,
        a: any,
        ...__args: never[]
      ): any;

      drawTextZoomed(
        str: any,
        x: any,
        y: any,
        zoom: any,
        r: any,
        g: any,
        b: any,
        a: any,
        font: any,
        ...__args: never[]
      ): any;

      getAbsoluteX(...__args: never[]): any;

      getAbsoluteY(...__args: never[]): any;

      getBottom(...__args: never[]): any;

      getCentreX(...__args: never[]): any;

      getCentreY(...__args: never[]): any;

      getChildren(...__args: never[]): any;

      getController(...__args: never[]): any;

      getHeight(...__args: never[]): any;

      getIsCaptured(...__args: never[]): any;

      getIsFollowGameWorld(...__args: never[]): any;

      getIsVisible(...__args: never[]): any;

      getJavaObject(...__args: never[]): any;

      getKeepOnScreen(...__args: never[]): any;

      getMaxDrawHeight(...__args: never[]): any;

      getMouseX(...__args: never[]): any;

      getMouseY(...__args: never[]): any;

      getParent(...__args: never[]): any;

      getRenderThisPlayerOnly(...__args: never[]): any;

      getRight(...__args: never[]): any;

      getScrollAreaHeight(...__args: never[]): any;

      getScrollAreaWidth(...__args: never[]): any;

      getScrollChildren(...__args: never[]): any;

      getScrollHeight(...__args: never[]): any;

      getScrollWidth(...__args: never[]): any;

      getScrollWithParent(...__args: never[]): any;

      getUIName(name: any, ...__args: never[]): any;

      getWidth(...__args: never[]): any;

      getX(...__args: never[]): any;

      getXScroll(...__args: never[]): any;

      getY(...__args: never[]): any;

      getYScroll(...__args: never[]): any;

      ignoreHeightChange(...__args: never[]): any;

      ignoreWidthChange(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      isEnabled(...__args: never[]): any;

      isFollowGameWorld(...__args: never[]): any;

      isMouseOver(...__args: never[]): any;

      isReallyVisible(...__args: never[]): any;

      isRemoved(...__args: never[]): any;

      isVisible(...__args: never[]): any;

      isVScrollBarVisible(...__args: never[]): any;

      onFocus(x: any, y: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDirUp(...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onMouseMove(dx: any, dy: any, ...__args: never[]): any;

      onMouseMoveOutside(dx: any, dy: any, ...__args: never[]): any;

      onMouseUp(x: any, y: any, ...__args: never[]): any;

      onMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onRightMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      recalcSize(...__args: never[]): any;

      removeChild(otherElement: any, ...__args: never[]): any;

      removeFromUIManager(...__args: never[]): any;

      render(...__args: never[]): any;

      repaintStencilRect(x: any, y: any, w: any, h: any, ...__args: never[]): any;

      resumeStencil(...__args: never[]): any;

      setAlwaysOnTop(b: any, ...__args: never[]): any;

      setAnchorBottom(bAnchor: any, ...__args: never[]): any;

      setAnchorLeft(bAnchor: any, ...__args: never[]): any;

      setAnchorRight(bAnchor: any, ...__args: never[]): any;

      setAnchorTop(bAnchor: any, ...__args: never[]): any;

      setCapture(bCapture: any, ...__args: never[]): any;

      setController(c: any, ...__args: never[]): any;

      setEnabled(en: any, ...__args: never[]): any;

      setFollowGameWorld(bFollow: any, ...__args: never[]): any;

      setForceCursorVisible(force: any, ...__args: never[]): any;

      setHeight(h: any, ...__args: never[]): any;

      setHeightAndParentHeight(h: any, ...__args: never[]): any;

      setMaxDrawHeight(height: any, ...__args: never[]): any;

      setOnMouseDoubleClick(target: any, onmousedblclick: any, ...__args: never[]): any;

      setRemoved(bremove: any, ...__args: never[]): any;

      setRenderThisPlayerOnly(playerNum: any, ...__args: never[]): any;

      setScrollChildren(b: any, ...__args: never[]): any;

      setScrollHeight(h: any, ...__args: never[]): any;

      setScrollWidth(w: any, ...__args: never[]): any;

      setScrollWithParent(b: any, ...__args: never[]): any;

      setStencilRect(x: any, y: any, w: any, h: any, ...__args: never[]): any;

      setUIName(name: any, ...__args: never[]): any;

      setVisible(bVisible: any, ...__args: never[]): any;

      setWantKeyEvents(want: any, ...__args: never[]): any;

      setWidth(w: any, ...__args: never[]): any;

      setWidthAndParentWidth(wi: any, ...__args: never[]): any;

      setX(x: any, ...__args: never[]): any;

      setXScroll(x: any, ...__args: never[]): any;

      setY(y: any, ...__args: never[]): any;

      setYScroll(y: any, ...__args: never[]): any;

      shrinkX(x: any, ...__args: never[]): any;

      shrinkY(y: any, ...__args: never[]): any;

      stayOnSplitScreen(playerNum: any, ...__args: never[]): any;

      suspendStencil(...__args: never[]): any;

      update(...__args: never[]): any;

      updateScrollbars(...__args: never[]): any;

      wrapInCollapsableWindow(title: any, resizable: any, subClass: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISUIElement {}
}
