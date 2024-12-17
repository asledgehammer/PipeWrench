/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISWidgetTitleHeader:new */
    export class ISWidgetTitleHeader extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      canBeDoneInDark: any;

      canBeDoneInDarkIcon: any;

      colBad: any;

      colGood: any;

      colWhite: any;

      enableIcon: any;

      errorLabel: any;

      favouritesIcon: any;

      icon: any;

      iconSize: any;

      iconTex: any;

      isCanWalk: any;

      isCanWalkIcon: any;

      isFavourite: any;

      logic: any;

      marginBottom: any;

      marginLeft: any;

      marginRight: any;

      marginTop: any;

      needToBeLearn: any;

      needToBeLearnIcon: any;

      paddingBottom: any;

      paddingLeft: any;

      paddingRight: any;

      paddingTop: any;

      player: any;

      propertyIconSize: any;

      recipe: any;

      requiredSkillList: any;

      requiresSurface: any;

      requiresSurfaceIcon: any;

      showPropertyIcons: any;

      timeIcon: any;

      title: any;

      titleLabel: any;

      tooltipLabel: any;

      constructor(x: any, y: any, width: any, height: any, recipe: any, player: any, logic: any, isFavourite: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onFavouritesClick(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      updateLabels(...__args: never[]): any;

      updatePropertyIcons(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISWidgetTitleHeader {}
}
