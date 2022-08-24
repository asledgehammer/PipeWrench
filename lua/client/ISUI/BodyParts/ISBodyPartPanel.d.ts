/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      activateToolTip: (() => any) | any;

      createChildren: (() => any) | any;

      deactivateToolTip: (() => any) | any;

      deselect: (() => any) | any;

      drawLineLeft: ((x: any, y: any) => any) | any;

      enableNodes: ((_nodeTex: any, _nodeOutlineTex: any) => any) | any;

      getBodyPartColor: ((_bodyPartType: any) => any) | any;

      getPartForCoordinate: ((mx: any, my: any) => any) | any;

      getRgbForValue: ((_val: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      overrideNodeTexture: ((_bodyPartType: any, _nodeTex: any, _nodeOutlineTex: any) => any) | any;

      render: (() => any) | any;

      setAlphas:
        | ((
            _defaultAlpha: any,
            _nodeAlpha: any,
            _selectedAlpha: any,
            _deselectedAlpha: any,
            _backgroundAlpha: any
          ) => any)
        | any;

      setColorForValue: ((_val: any, _color: any) => any) | any;

      setColorScheme: ((_colorScheme: any) => any) | any;

      setEnableSelectLines: ((_b: any, _defaultAnchorX: any, _defaultAnchorY: any) => any) | any;

      setSelected: ((mx: any, my: any, bLock: any) => any) | any;

      setSelectLinesAnchor: ((_anchorX: any, _anchorY: any) => any) | any;

      setToolTip: ((_b: any, _text: any) => any) | any;

      setValue: ((_bodyPartType: any, _value: any, _force: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.BodyParts.ISBodyPartPanel {}
}
