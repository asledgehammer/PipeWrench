/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.BodyParts {
    /** @customConstructor ISBodyPartPanel:new */
    export class ISBodyPartPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      backgroundAlpha: any;

      baseTexture: any;

      bFemale: any;

      bps: any;

      cacheColor: any;

      canSelect: any;

      colorScheme: any;

      defaultAlpha: any;

      deselectedAlpha: any;

      doToolTip: any;

      drawDebugLines: any;

      drawSelectedHitbox: any;

      functionTarget: any;

      lockedSelection: any;

      maxValue: any;

      minValue: any;

      nodeAlpha: any;

      nodes: any;

      onPartSelected: any;

      outlineTex: any;

      player: any;

      playerNum: any;

      selectedAlpha: any;

      selectedBp: any;

      selectlines: any;

      toolTipText: any;

      constructor(player: any, x: any, y: any, target: any, onPartSelected: any);

      activateToolTip(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      deactivateToolTip(...__args: never[]): any;

      deselect(...__args: never[]): any;

      drawLineLeft(x: any, y: any, ...__args: never[]): any;

      enableNodes(_nodeTex: any, _nodeOutlineTex: any, ...__args: never[]): any;

      getBodyPartColor(_bodyPartType: any, ...__args: never[]): any;

      getPartForCoordinate(mx: any, my: any, ...__args: never[]): any;

      getRgbForValue(_val: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      overrideNodeTexture(_bodyPartType: any, _nodeTex: any, _nodeOutlineTex: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setAlphas(
        _defaultAlpha: any,
        _nodeAlpha: any,
        _selectedAlpha: any,
        _deselectedAlpha: any,
        _backgroundAlpha: any,
        ...__args: never[]
      ): any;

      setColorForValue(_val: any, _color: any, ...__args: never[]): any;

      setColorScheme(_colorScheme: any, ...__args: never[]): any;

      setEnableSelectLines(_b: any, _defaultAnchorX: any, _defaultAnchorY: any, ...__args: never[]): any;

      setSelected(mx: any, my: any, bLock: any, ...__args: never[]): any;

      setSelectLinesAnchor(_anchorX: any, _anchorY: any, ...__args: never[]): any;

      setToolTip(_b: any, _text: any, ...__args: never[]): any;

      setValue(_bodyPartType: any, _value: any, _force: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.BodyParts.ISBodyPartPanel {}
}
