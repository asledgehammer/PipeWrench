/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.worldMap {
    /**
     * @customConstructor ImagePyramid.new
     * @
     * [CLASS] zombie.worldMap.ImagePyramid
     */
    export class ImagePyramid {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      generateFiles(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      generateZip(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.core.textures.Texture
       */
      getImage(arg0: number, arg1: number, arg2: number): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.core.textures.TextureID
       */
      getTexture(arg0: number, arg1: number, arg2: number): zombie.core.textures.TextureID;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.file.FileSystem
       */
      openZipFile(): java.nio.file.FileSystem;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDirectory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setZipFile(arg0: string): void;
    }
    /**
     * @customConstructor PyramidTexture.new
     * @
     * [CLASS] zombie.worldMap.ImagePyramid$PyramidTexture
     */
    export class ImagePyramid$PyramidTexture {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor UIWorldMap.new
     * @
     * [CLASS] zombie.worldMap.UIWorldMap extends zombie.ui.UIElement
     */
    export class UIWorldMap {
      /**
       * Constructors: 
       *  - (KahluaTable arg0)
       */
      constructor(arg0: se.krka.kahlua.vm.KahluaTable);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawItemIcon(arg0: zombie.inventory.InventoryItem, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, float arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawLine(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (Item arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawScriptItemIcon(arg0: zombie.scripting.objects.Item, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawSymbol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextSdf(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureIcon(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawTextureIconMask(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawTexturePercentage(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawTexturePercentageBottomUp(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect3(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledYOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      EndOutline(): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      StartOutline(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.UIWorldMapV2
       */
      getAPI(): zombie.worldMap.UIWorldMapV2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.UIWorldMapV1
       */
      getAPIv1(): zombie.worldMap.UIWorldMapV1;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.UIWorldMapV2
       */
      getAPIv2(): zombie.worldMap.UIWorldMapV2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.UIWorldMapV2
       */
      getAPIv3(): zombie.worldMap.UIWorldMapV2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       *  - (Empty): zombie.ui.UIElementInterface
       */
      getParent(): zombie.ui.UIElement | zombie.ui.UIElementInterface;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysOnTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBackMost(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isOverElement(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReallyVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantExtraMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      onConsumeKeyPress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      onConsumeKeyRelease(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      onConsumeKeyRepeat(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, double arg1, double arg2): boolean
       */
      onConsumeMouseButtonDown(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, double arg1, double arg2): boolean
       */
      onConsumeMouseButtonUp(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): boolean
       */
      onConsumeMouseMove(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2): boolean
       */
      onConsumeMouseWheel(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      onExtendMouseMoveOutside(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, double arg1, double arg2): void
       */
      onMouseButtonDown(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, double arg1, double arg2): void
       */
      onMouseButtonDownOutside(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, double arg1, double arg2): void
       */
      onMouseButtonUpOutside(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      scaleWidthToHeight(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoStencil(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantExtraMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Exposer arg0): void
       */
      static setExposed(arg0: zombie.Lua.LuaManager$Exposer): void;
    }
    /**
     * @customConstructor UIWorldMapV1.new
     * @
     * [CLASS] zombie.worldMap.UIWorldMapV1
     */
    export class UIWorldMapV1 {
      /**
       * Constructors: 
       *  - (UIWorldMap arg0)
       */
      constructor(arg0: zombie.worldMap.UIWorldMap);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addData(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addImages(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      centerOn(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endDirectoryData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseZoom(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCenterWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCenterWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getDataFileByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): number
       */
      getDouble(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImagesCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.markers.WorldMapMarkers
       */
      getMarkers(): zombie.worldMap.markers.WorldMapMarkers;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.markers.WorldMapMarkersV1
       */
      getMarkersAPI(): zombie.worldMap.markers.WorldMapMarkersV1;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.WorldMapRenderer
       */
      getRenderer(): zombie.worldMap.WorldMapRenderer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.styles.WorldMapStyle
       */
      getStyle(): zombie.worldMap.styles.WorldMapStyle;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.styles.WorldMapStyleV1
       */
      getStyleAPI(): zombie.worldMap.styles.WorldMapStyleV1;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbolsV1
       */
      getSymbolsAPI(): zombie.worldMap.symbols.WorldMapSymbolsV1;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoomF(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      mouseToWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      mouseToWorldY(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      moveView(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetView(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setBackgroundRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBoundsFromData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBoundsFromWorld(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInCells(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): void
       */
      setDouble(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDropShadowWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (MapItem arg0): void
       */
      setMapItem(arg0: zombie.inventory.types.MapItem): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setUnvisitedGridRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setUnvisitedRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       */
      uiToWorldX(arg0: number, arg1: number, arg2?: number, arg3?: number, arg4?: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       */
      uiToWorldY(arg0: number, arg1: number, arg2?: number, arg3?: number, arg4?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      worldOriginX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      worldOriginY(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      worldToUIX(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      worldToUIY(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      zoomAt(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor UIWorldMapV2.new
     * @
     * [CLASS] zombie.worldMap.UIWorldMapV2 extends zombie.worldMap.UIWorldMapV1
     */
    export class UIWorldMapV2 {
      /**
       * Constructors: 
       *  - (UIWorldMap arg0)
       */
      constructor(arg0: zombie.worldMap.UIWorldMap);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addData(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addImages(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      centerOn(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endDirectoryData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseZoom(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCenterWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCenterWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getDataFileByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): number
       */
      getDouble(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImagesCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.markers.WorldMapMarkers
       */
      getMarkers(): zombie.worldMap.markers.WorldMapMarkers;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.markers.WorldMapMarkersV1
       */
      getMarkersAPI(): zombie.worldMap.markers.WorldMapMarkersV1;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.WorldMapRenderer
       */
      getRenderer(): zombie.worldMap.WorldMapRenderer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.styles.WorldMapStyle
       */
      getStyle(): zombie.worldMap.styles.WorldMapStyle;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.styles.WorldMapStyleV1
       */
      getStyleAPI(): zombie.worldMap.styles.WorldMapStyleV1;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbolsV1
       */
      getSymbolsAPI(): zombie.worldMap.symbols.WorldMapSymbolsV1;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbolsV2
       */
      getSymbolsAPIv2(): zombie.worldMap.symbols.WorldMapSymbolsV2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoomF(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDimUnsharedSymbols(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      mouseToWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      mouseToWorldY(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      moveView(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetView(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setBackgroundRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBoundsFromData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBoundsFromWorld(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInCells(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): void
       */
      setDouble(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDropShadowWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (MapItem arg0): void
       */
      setMapItem(arg0: zombie.inventory.types.MapItem): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setUnvisitedGridRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setUnvisitedRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       */
      uiToWorldX(arg0: number, arg1: number, arg2?: number, arg3?: number, arg4?: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       */
      uiToWorldY(arg0: number, arg1: number, arg2?: number, arg3?: number, arg4?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      worldOriginX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      worldOriginY(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      worldToUIX(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      worldToUIY(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      zoomAt(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor UIWorldMapV3.new
     * @
     * [CLASS] zombie.worldMap.UIWorldMapV3 extends zombie.worldMap.UIWorldMapV2
     */
    export class UIWorldMapV3 {
      /**
       * Constructors: 
       *  - (UIWorldMap arg0)
       */
      constructor(arg0: zombie.worldMap.UIWorldMap);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addData(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addImagePyramid(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addImages(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      centerOn(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearImages(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endDirectoryData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseZoom(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCenterWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCenterWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getDataFileByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataHeightInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataWidthInCells(): number;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): number
       */
      getDouble(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInSquares(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getImagePyramidHeightInSquares(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getImagePyramidMaxX(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getImagePyramidMaxY(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getImagePyramidMinX(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getImagePyramidMinY(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getImagePyramidWidthInSquares(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImagesCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.markers.WorldMapMarkers
       */
      getMarkers(): zombie.worldMap.markers.WorldMapMarkers;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.markers.WorldMapMarkersV1
       */
      getMarkersAPI(): zombie.worldMap.markers.WorldMapMarkersV1;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.WorldMapRenderer
       */
      getRenderer(): zombie.worldMap.WorldMapRenderer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.styles.WorldMapStyle
       */
      getStyle(): zombie.worldMap.styles.WorldMapStyle;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.styles.WorldMapStyleV1
       */
      getStyleAPI(): zombie.worldMap.styles.WorldMapStyleV1;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbolsV1
       */
      getSymbolsAPI(): zombie.worldMap.symbols.WorldMapSymbolsV1;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbolsV2
       */
      getSymbolsAPIv2(): zombie.worldMap.symbols.WorldMapSymbolsV2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoomF(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDataLoaded(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDimUnsharedSymbols(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      mouseToWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      mouseToWorldY(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      moveView(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetView(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setBackgroundRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBoundsFromData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBoundsFromWorld(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInCells(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setDisplayedArea(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): void
       */
      setDouble(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDropShadowWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (MapItem arg0): void
       */
      setMapItem(arg0: zombie.inventory.types.MapItem): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setUnvisitedGridRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setUnvisitedRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      transitionTo(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       */
      uiToWorldX(arg0: number, arg1: number, arg2?: number, arg3?: number, arg4?: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       */
      uiToWorldY(arg0: number, arg1: number, arg2?: number, arg3?: number, arg4?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      worldOriginX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      worldOriginY(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      worldToUIX(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      worldToUIY(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      zoomAt(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor WorldMap.new
     * @
     * [CLASS] zombie.worldMap.WorldMap
     */
    export class WorldMap {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addData(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addImagePyramid(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addImages(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearImages(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endDirectoryData(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.worldMap.WorldMapCell
       */
      getCell(arg0: number, arg1: number): zombie.worldMap.WorldMapCell;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.WorldMapData
       */
      getDataByIndex(arg0: number): zombie.worldMap.WorldMapData;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataHeightInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataHeightInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataWidthInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataWidthInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInSquares(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.WorldMapImages
       */
      getImagesByIndex(arg0: number): zombie.worldMap.WorldMapImages;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImagesCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInSquares(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.WorldMapImages
       */
      getWorldMapImagesByFileName(arg0: string): zombie.worldMap.WorldMapImages;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasData(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasImages(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDataLoaded(): boolean;
      /**
       * Method Parameters: 
       *  - (WorldMapData arg0): boolean
       */
      isLastDataInDirectory(arg0: zombie.worldMap.WorldMapData): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0, State arg1, Asset arg2): void
       */
      onStateChanged(arg0: zombie.asset.Asset$State, arg1: zombie.asset.Asset$State, arg2: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBoundsFromData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBoundsFromWorld(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInCells(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
    }
    /**
     * @customConstructor WorldMapCell.new
     * @
     * [CLASS] zombie.worldMap.WorldMapCell
     */
    export class WorldMapCell {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dispose(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, ArrayList arg2): void
       */
      hitTest(arg0: number, arg1: number, arg2: java.util.ArrayList<zombie.worldMap.WorldMapFeature>): void;
    }
    /**
     * @customConstructor WorldMapData.new
     * @
     * [CLASS] zombie.worldMap.WorldMapData extends zombie.asset.Asset
     */
    export class WorldMapData {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;
      /** java.util.HashMap<java.lang.String, zombie.worldMap.WorldMapData> */
      static readonly s_fileNameToData?: java.util.HashMap<string, zombie.worldMap.WorldMapData>;

      /**
       * Constructors: 
       *  - (AssetPath arg0, AssetManager arg1)
       *  - (AssetPath arg0, AssetManager arg1, AssetParams arg2)
       */
      constructor(arg0: zombie.asset.AssetPath, arg1: zombie.asset.AssetManager, arg2?: zombie.asset.AssetManager$AssetParams);
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.worldMap.WorldMapCell
       */
      getCell(arg0: number, arg1: number): zombie.worldMap.WorldMapCell;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRefCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$State
       */
      getState(): zombie.asset.Asset$State;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInCells(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInSquares(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, ArrayList arg2): void
       */
      hitTest(arg0: number, arg1: number, arg2: java.util.ArrayList<zombie.worldMap.WorldMapFeature>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFailure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      onCreated(arg0: zombie.asset.Asset$State): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onLoaded(): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.WorldMapData
       */
      static getOrCreateData(arg0: string): zombie.worldMap.WorldMapData;
    }
    /**
     * @customConstructor WorldMapFeature.new
     * @
     * [CLASS] zombie.worldMap.WorldMapFeature
     */
    export class WorldMapFeature {
      /**
       * Constructors: 
       *  - (WorldMapCell arg0)
       */
      constructor(arg0: zombie.worldMap.WorldMapCell);
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       */
      containsPoint(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dispose(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasLineString(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasPoint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasPolygon(): boolean;
    }
    /**
     * @customConstructor WorldMapImages.new
     * @
     * [CLASS] zombie.worldMap.WorldMapImages
     */
    export class WorldMapImages {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAbsolutePath(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.ImagePyramid
       */
      getPyramid(): zombie.worldMap.ImagePyramid;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getResolution(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInSquares(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      getZoom(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.WorldMapImages
       */
      static getOrCreate(arg0: string): zombie.worldMap.WorldMapImages;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.WorldMapImages
       */
      static getOrCreateWithFileName(arg0: string): zombie.worldMap.WorldMapImages;
    }
    /**
     * @customConstructor WorldMapRenderer.new
     * @
     * [CLASS] zombie.worldMap.WorldMapRenderer
     */
    export class WorldMapRenderer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      centerOn(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseZoom(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCenterWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCenterWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayZoomF(): number;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): number
       */
      getDouble(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Matrix4f
       */
      getModelViewMatrix(): org.joml.Matrix4f;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Matrix4f
       */
      getProjectionMatrix(): org.joml.Matrix4f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.WorldMap
       */
      getWorldMap(): zombie.worldMap.WorldMap;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      getWorldScale(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoomF(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDimUnsharedSymbols(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      log2(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      moveView(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): void
       */
      render(arg0: zombie.worldMap.UIWorldMap): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetView(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, Matrix4f arg3, Matrix4f arg4, Vector3f arg5): org.joml.Vector3f
       */
      sceneToUI(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix4f, arg4: org.joml.Matrix4f, arg5: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): void
       */
      setDouble(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDropShadowWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (WorldMap arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setMap(arg0: zombie.worldMap.WorldMap, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (WorldMapVisited arg0): void
       */
      setVisited(arg0: zombie.worldMap.WorldMapVisited): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      transitionTo(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, Matrix4f arg2, Matrix4f arg3, Vector3f arg4): org.joml.Vector3f
       */
      uiToScene(arg0: number, arg1: number, arg2: org.joml.Matrix4f, arg3: org.joml.Matrix4f, arg4: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, Matrix4f arg5, Matrix4f arg6): number
       */
      uiToWorldX(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5?: org.joml.Matrix4f, arg6?: org.joml.Matrix4f): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, Matrix4f arg5, Matrix4f arg6): number
       */
      uiToWorldY(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5?: org.joml.Matrix4f, arg6?: org.joml.Matrix4f): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateView(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      worldOriginUIX(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      worldOriginUIY(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, Matrix4f arg5, Matrix4f arg6): number
       */
      worldToUIX(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: org.joml.Matrix4f, arg6: org.joml.Matrix4f): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, Matrix4f arg5, Matrix4f arg6): number
       */
      worldToUIY(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: org.joml.Matrix4f, arg6: org.joml.Matrix4f): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      zoomAt(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): number
       */
      zoomMult(arg0?: number): number;
    }
    /**
     * @customConstructor Drawer.new
     * @
     * [CLASS] zombie.worldMap.WorldMapRenderer$Drawer extends zombie.core.textures.TextureDraw$GenericDrawer
     */
    export class WorldMapRenderer$Drawer {

      /**
       * Method Parameters: 
       *  - (RenderArgs arg0, WorldMapFeature arg1, RGBAf arg2, float arg3): void
       */
      drawLineString(arg0: zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs, arg1: zombie.worldMap.WorldMapFeature, arg2: zombie.worldMap.styles.WorldMapStyleLayer$RGBAf, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (RenderArgs arg0, WorldMapFeature arg1, RGBAf arg2, float arg3, Texture arg4): void
       */
      drawLineStringTexture(arg0: zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs, arg1: zombie.worldMap.WorldMapFeature, arg2: zombie.worldMap.styles.WorldMapStyleLayer$RGBAf, arg3: number, arg4: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (RenderArgs arg0, WorldMapFeature arg1, RGBAf arg2, float arg3): void
       */
      drawLineStringXXX(arg0: zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs, arg1: zombie.worldMap.WorldMapFeature, arg2: zombie.worldMap.styles.WorldMapStyleLayer$RGBAf, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (RenderArgs arg0, WorldMapFeature arg1, RGBAf arg2, float arg3): void
       */
      drawLineStringYYY(arg0: zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs, arg1: zombie.worldMap.WorldMapFeature, arg2: zombie.worldMap.styles.WorldMapStyleLayer$RGBAf, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, RGBAf arg1, int arg2, int arg3, int arg4, int arg5): void
       */
      drawTexture(arg0: zombie.core.textures.Texture, arg1: zombie.worldMap.styles.WorldMapStyleLayer$RGBAf, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, RGBAf arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7): void
       *  - (Texture arg0, RGBAf arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8, int arg9): void
       */
      drawTextureTiled(arg0: zombie.core.textures.Texture, arg1: zombie.worldMap.styles.WorldMapStyleLayer$RGBAf, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8?: number, arg9?: number): void;
      /**
       * Method Parameters: 
       *  - (RenderArgs arg0, WorldMapFeature arg1, RGBAf arg2): void
       *  - (RenderArgs arg0, WorldMapFeature arg1, RGBAf arg2, Texture arg3, float arg4, TextureScaling arg5): void
       */
      fillPolygon(arg0: zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs, arg1: zombie.worldMap.WorldMapFeature, arg2: zombie.worldMap.styles.WorldMapStyleLayer$RGBAf, arg3?: zombie.core.textures.Texture, arg4?: number, arg5?: zombie.worldMap.styles.WorldMapStyleLayer$TextureScaling): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      uiToWorldX(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      uiToWorldY(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      worldOriginUIX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      worldOriginUIY(arg0: number): number;
    }
    /**
     * @customConstructor WorldMapBooleanOption.new
     * @
     * [CLASS] zombie.worldMap.WorldMapRenderer$WorldMapBooleanOption extends zombie.config.BooleanConfigOption
     */
    export class WorldMapRenderer$WorldMapBooleanOption {
      /**
       * Constructors: 
       *  - (WorldMapRenderer arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.worldMap.WorldMapRenderer, arg1: string, arg2: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDefaultValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor WorldMapDoubleOption.new
     * @
     * [CLASS] zombie.worldMap.WorldMapRenderer$WorldMapDoubleOption extends zombie.config.DoubleConfigOption
     */
    export class WorldMapRenderer$WorldMapDoubleOption {
      /**
       * Constructors: 
       *  - (WorldMapRenderer arg0, String arg1, double arg2, double arg3, double arg4)
       */
      constructor(arg0: zombie.worldMap.WorldMapRenderer, arg1: string, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDefaultValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor WorldMapSettings.new
     * @
     * [CLASS] zombie.worldMap.WorldMapSettings
     */
    export class WorldMapSettings {
      /** int */
      static VERSION: number;
      /** int */
      static VERSION1: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): number
       */
      getDouble(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFileVersion(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): void
       */
      setDouble(arg0: string, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.WorldMapSettings
       */
      static getInstance(): zombie.worldMap.WorldMapSettings;
    }
    /**
     * @customConstructor MiniMap.new
     * @
     * [CLASS] zombie.worldMap.WorldMapSettings$MiniMap
     */
    export class WorldMapSettings$MiniMap {
      /**
       * Constructors: 
       *  - (WorldMapSettings arg0)
       */
      constructor(arg0: zombie.worldMap.WorldMapSettings);
    }
    /**
     * @customConstructor WorldMap.new
     * @
     * [CLASS] zombie.worldMap.WorldMapSettings$WorldMap
     */
    export class WorldMapSettings$WorldMap {
      /**
       * Constructors: 
       *  - (WorldMapSettings arg0)
       */
      constructor(arg0: zombie.worldMap.WorldMapSettings);
    }
    /**
     * @customConstructor WorldMapVisited.new
     * @
     * [CLASS] zombie.worldMap.WorldMapVisited
     */
    export class WorldMapVisited {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      clearKnownInCells(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      clearKnownInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      clearVisitedInCells(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      clearVisitedInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forget(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinY(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isVisited(arg0: number, arg1: number, arg2?: number, arg3?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2, int arg3, int arg4, int arg5, float arg6, boolean arg7): void
       */
      render(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2, int arg3, int arg4, int arg5, float arg6, float arg7): void
       */
      renderGrid(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderMain(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setKnownInCells(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setKnownInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setVisitedInCells(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setVisitedInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static SaveAll(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.WorldMapVisited
       */
      static getInstance(): zombie.worldMap.WorldMapVisited;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
  }
}
