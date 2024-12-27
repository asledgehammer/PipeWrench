/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens.ModSelector {}
  export namespace lua.client.OptionScreens.ModSelector.ModSelectorModel {
    /** @noSelf */
    export const acceptChanges: () => any;

    /** @noSelf */
    export const checkMapConflicts: () => any;

    /** @noSelf */
    export const getActiveMods: () => any;

    /** @noSelf */
    export const getAllMapsInOrder: () => any;

    /** @noSelf */
    export const loadModDataFromFile: () => any;

    /** @noSelf */
    export const refreshMods: () => any;

    /** @noSelf */
    export const reloadMods: () => any;

    /** @noSelf */
    export const saveModDataToFile: () => any;
  }
}
