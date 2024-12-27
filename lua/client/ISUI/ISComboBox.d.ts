/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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
        onChangeArg2: any,
      );

      addOption(option: any, ...__args: never[]): any;

      addOptionWithData(option: any, data: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      contains(text: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      find(func: any, arg1: any, arg2: any, ...__args: never[]): any;

      forceClick(...__args: never[]): any;

      getFilterText(...__args: never[]): any;

      getOptionCount(...__args: never[]): any;

      getOptionData(index: any, ...__args: never[]): any;

      getOptionText(index: any, ...__args: never[]): any;

      getOptionTooltip(index: any, ...__args: never[]): any;

      getSelected(...__args: never[]): any;

      getSelectedText(...__args: never[]): any;

      hasFilterText(...__args: never[]): any;

      hidePopup(...__args: never[]): any;

      isEditable(...__args: never[]): any;

      isEmpty(...__args: never[]): any;

      isEnabled(...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      pointOnItem(index: any, ...__args: never[]): any;

      select(option: any, ...__args: never[]): any;

      selectData(data: any, ...__args: never[]): any;

      setEditable(editable: any, ...__args: never[]): any;

      setEnabled(enabled: any, ...__args: never[]): any;

      setFilterText(text: any, ...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setSelected(value: any, ...__args: never[]): any;

      setToolTipMap(tooltipmap: any, ...__args: never[]): any;

      setWidthToOptions(minWidth: any, ...__args: never[]): any;

      showPopup(...__args: never[]): any;
    }

    /** @customConstructor ISComboBoxEditor:new */
    export class ISComboBoxEditor extends lua.client.ISUI.ISTextEntryBox {
      [id: string]: any;
      static [id: string]: any;

      parentCombo: any;

      constructor(x: any, y: any, width: any, height: any, comboBox: any);

      onOtherKey(key: any, ...__args: never[]): any;
    }

    /** @customConstructor ISComboBoxPopup:new */
    export class ISComboBoxPopup extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      parentCombo: any;

      tooWide: any;

      tooWideY: any;

      constructor(x: any, y: any, width: any, height: any);

      setComboBox(comboBox: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISComboBox {}
}
