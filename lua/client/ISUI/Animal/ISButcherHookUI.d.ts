/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISButcherHookUI:new */
    export class ISButcherHookUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static ui: any;

      actionText: any;

      addCorpseBtn: any;

      animal3D: any;

      animalPanel: any;

      animalSize: any;

      avatarHeight: any;

      avatarPanel: any;

      avatarWidth: any;

      avatarX: any;

      avatarY: any;

      biggestLabelWidth: any;

      biggestWidth: any;

      blood: any;

      bloodInfoLabel: any;

      bloodLabel: any;

      chr: any;

      corpse: any;

      doingAction: any;

      head: any;

      headInfoLabel: any;

      headLabel: any;

      hook: any;

      knife: any;

      leather: any;

      leatherInfoLabel: any;

      leatherLabel: any;

      meat: any;

      meatInfoLabel: any;

      meatLabel: any;

      noAnimalPanel: any;

      originalAnimalPanelHeight: any;

      playerNum: any;

      progress: any;

      progressBar: any;

      removeBloodBtn: any;

      removeCorpseBtn: any;

      removeHeadBtn: any;

      removeLeatherBtn: any;

      removeMeatBtn: any;

      constructor(x: any, y: any, width: any, height: any, hook: any, player: any);

      addCorpseAction(corpse: any, ...__args: never[]): any;

      checkDistance(...__args: never[]): any;

      create(...__args: never[]): any;

      createCorpse(item: any, ...__args: never[]): any;

      getBuckets(...__args: never[]): any;

      isCorpseValid(corpse: any, ...__args: never[]): any;

      lookForCorpse(...__args: never[]): any;

      onAddedCorpse(corpse: any, ...__args: never[]): any;

      onBleedAnimal(...__args: never[]): any;

      onClickAddCorpse(...__args: never[]): any;

      onClickRemoveCorpse(...__args: never[]): any;

      onCutCorpse(...__args: never[]): any;

      onRemoveBlood(...__args: never[]): any;

      onRemoveHead(...__args: never[]): any;

      onRemoveLeather(...__args: never[]): any;

      onRemoveMeat(...__args: never[]): any;

      onSelectBucketForBlood(bucket: any, ...__args: never[]): any;

      removeCorpseAction(...__args: never[]): any;

      renderDebugStuff(yoffset: any, ...__args: never[]): any;

      resetCorpse(...__args: never[]): any;

      setAnimalAvatar(newModData: any, newCorpse: any, ...__args: never[]): any;

      setVisible(vis: any, ...__args: never[]): any;

      updateCorpseDatas(...__args: never[]): any;

      updateLabelAndButtons(...__args: never[]): any;

      updatePositions(test: any, button: any, label: any, infoLabel: any, yoffset: any, ...__args: never[]): any;

      updateProgressBar(progress: any, ...__args: never[]): any;

      /** @noSelf */
      static onReattachAnimal: (hook: any, animal: any, ...__args: never[]) => any;

      /** @noSelf */
      static onStopBleedingAnimal: (self: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISButcherHookUI {}
}
