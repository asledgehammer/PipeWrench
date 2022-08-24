/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISComboBox:new */
    export class ISComboBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static SharedPopup: any;

      backgroundColorMouseOver: any;

      baseHeight: any;

      disabled: any;

      editable: any;

      editor: any;

      expanded: any;

      fade: any;

      filterText: any;

      font: any;

      image: any;

      isCombobox: any;

      joypadFocused: any;

      onChange: any;

      onChangeArgs: any;

      options: any;

      popup: any;

      sawMouseDown: any;

      selected: any;

      target: any;

      textColor: any;

      tooltip: any;

      tooltipUI: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        target: any,
        onChange: any,
        onChangeArg1: any,
        onChangeArg2: any
      );

      addOption: ((option: any) => any) | any;

      addOptionWithData: ((option: any, data: any) => any) | any;

      clear: (() => any) | any;

      contains: ((text: any) => any) | any;

      createChildren: (() => any) | any;

      find: ((func: any, arg1: any, arg2: any) => any) | any;

      forceClick: (() => any) | any;

      getFilterText: (() => any) | any;

      getOptionData: ((index: any) => any) | any;

      getOptionText: ((index: any) => any) | any;

      getOptionTooltip: ((index: any) => any) | any;

      getSelectedText: (() => any) | any;

      hasFilterText: (() => any) | any;

      hidePopup: (() => any) | any;

      isEditable: (() => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      select: ((option: any) => any) | any;

      selectData: ((data: any) => any) | any;

      setEditable: ((editable: any) => any) | any;

      setFilterText: ((text: any) => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setToolTipMap: ((tooltipmap: any) => any) | any;

      setWidthToOptions: ((minWidth: any) => any) | any;

      showPopup: (() => any) | any;
    }

    /** @customConstructor ISComboBoxEditor:new */
    export class ISComboBoxEditor extends lua.client.ISUI.ISTextEntryBox {
      [id: string]: any;
      static [id: string]: any;

      parentCombo: any;

      constructor(x: any, y: any, width: any, height: any, comboBox: any);

      onOtherKey: ((key: any) => any) | any;
    }

    /** @customConstructor ISComboBoxPopup:new */
    export class ISComboBoxPopup extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      parentCombo: any;

      tooWide: any;

      tooWideY: any;

      constructor(x: any, y: any, width: any, height: any);

      setComboBox: ((comboBox: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISComboBox {}
}
