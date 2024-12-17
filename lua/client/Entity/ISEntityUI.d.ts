/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity {
    export abstract class ISEntityUI {
      static [id: string]: any;

      /** @noSelf */
      static CanOpenWindowFor: (_player: any, _entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static CanPlayerUseEntity: (_player: any, _entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static CloseWindows: (...__args: never[]) => any;

      /** @noSelf */
      static FindCraftSurface: (_player: any, _radius: any, ...__args: never[]) => any;

      /** @noSelf */
      static GenericCraftStart: (
        _player: any,
        _entity: any,
        _component: any,
        _funcCanStart: any,
        _funcStart: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static GetComponentPanelClass: (_player: any, _entity: any, _componentType: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetComponentPanels: (_player: any, _entity: any, _dontInstantiate: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetCustomCanOpenWindowFunc: (_entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetCustomOpenWindowFunc: (_entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetEntityUiConfig: (_entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetEntityUiSkin: (_entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetEntityUiStyle: (_entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetReloadTable: (...__args: never[]) => any;

      /** @noSelf */
      static GetWindowClass: (_entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetWindowStyleName: (_entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static HandcraftStart: (
        _player: any,
        _handcraftLogic: any,
        force: any,
        addToQueue: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static HandcraftStartMultiple: (
        _player: any,
        _handcraftLogic: any,
        force: any,
        qty: any,
        addToQueue: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static HasComponentPanels: (_player: any, _entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static ItemSlotAddItems: (_player: any, _entity: any, _itemSlot: any, _itemList: any, ...__args: never[]) => any;

      /** @noSelf */
      static ItemSlotRemoveItems: (_player: any, _entity: any, _itemSlot: any, ...__args: never[]) => any;

      /** @noSelf */
      static ItemSlotRemoveSingleItem: (
        _player: any,
        _entity: any,
        _itemSlot: any,
        _item: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static OnCloseWindow: (_window: any, ...__args: never[]) => any;

      /** @noSelf */
      static OpenBuildWindow: (
        _player: any,
        _isoObject: any,
        _queryOverride: any,
        _ignoreFindSurface: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static OpenHandcraftWindow: (
        _player: any,
        _isoObject: any,
        _queryOverride: any,
        _ignoreFindSurface: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static OpenWindow: (_player: any, _entity: any, ...__args: never[]) => any;

      /** @noSelf */
      static WalkToEntity: (_player: any, _entity: any, _dist: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISEntityUI {}
}
