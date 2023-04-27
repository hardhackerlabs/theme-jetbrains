const tinycolor = require('tinycolor2');

function c(colorStr) {
  return `#${colorStr}`;
} 

function getTheme(name, colorConfig, controlsOpt) {
  const controls = Object.assign(
    {
      highContrast: false,
    },
    controlsOpt || {}
  );

  const { originColors, colors } = colorConfig;

  return {
    name,
    dark: true,
    author: "HardHacker Labs",
    editorScheme: "/theme/normal.xml",
    colors: {
      accentColor: c(colors.themePrimary),
      foreground: c(colors.text),
      background: c(colors.darkerBackground),
      secondaryBackground: c(colors.background),
      hoverBackground: c(colors.hoverBackground),
      selectionBackground: c(colors.highlightBackground),
      borderColor: c(colors.highlightBackground),
      disabledColor: c(colors.highlightBackground),
      errorColor: c(colors.error),
    },
    ui: {
      "*": {
        foreground: "foreground",
        background: "background",
        selectionForeground: "foreground",
        selectionInactiveForeground: "foreground",
        selectionBackground: "selectionBackground",
        selectionInactiveBackground: "selectionBackground",
        inactiveBackground: "background",
        disabledBackground: "background",
        disabledForeground: "disabledColor",
        disabledText: "disabledColor",
        errorForeground: "errorColor",
        borderColor: "borderColor",
        disabledBorderColor: "disabledColor",
        separatorColor: "borderColor",
        focusColor: tinycolor.mix(originColors.black, originColors.red, 50).toHexString(),
        focusedBorderColor: "accentColor",

      },
      Borders: {
        color: "borderColor",
        ContrastBorderColor: "borderColor"
      },
      ActionButton: {
        hoverBackground: "hoverBackground",
        hoverBorderColor: "hoverBackground",
        pressedBackground: "selectionBackground",
        pressedBorderColor: "selectionBackground"
      },
      Button: {
        foreground: "accentColor",
        startBorderColor: "accentColor",
        endBorderColor: "accentColor",
        startBackground: "background",
        endBackground: "background",
        default: {
          foreground: "background",
          startBackground: "accentColor",
          endBackground: "accentColor",
          startBorderColor: "accentColor",
          endBorderColor: "accentColor",
        }
      },
      Counter: {
        foreground: "background",
        background: c(colors.green),
      },
      CheckBox: {
        background: "secondaryBackground",
      },
      CheckBoxMenuItem: {
        background: "secondaryBackground",
        acceleratorSelectionForeground: "accentColor"
      },
      ComboBox: {
        modifiedItemForeground: "accentColor",
        ArrowButton: {
          background: "secondaryBackground",
          nonEditableBackground: "secondaryBackground",
          disabledIconColor: "disabledColor",
        },
        nonEditableBackground: "secondaryBackground"
      },
      CompletionPopup: {
        selectionBackground: "selectionBackground",
        selectionInactiveBackground: "selectionBackground",
        matchForeground: "accentColor"
      },
      Component: {
        borderColor: "selectionBackground",
        focusColor: tinycolor.mix(originColors.black, originColors.red, 50).toHexString(),
        focusedBorderColor: "accentColor",
        disabledBorderColor: "selectionBackground",
        errorFocusColor: "errorColor",
        inactiveErrorFocusColor: "errorColor",
        warningFocusColor: c(colors.yellow),
        inactiveWarningFocusColor: c(colors.yellow)
      },
      DragAndDrop: {
        borderColor: "hoverBackground"
      },
      Editor: {
        background: "background",
        shortcutForeground: "accentColor"
      },
      EditorTabs: {
        background: "background",
        underlinedTabBackground: "secondaryBackground",
        underlineHeight: 2
      },
      FileColor: {
        Blue: tinycolor.mix(originColors.black, originColors.blue, 20).toHexString(),
        Green: tinycolor.mix(originColors.black, originColors.green, 20).toHexString(),
        Orange: tinycolor.mix(originColors.black, originColors.orange, 20).toHexString(),
        Yellow: tinycolor.mix(originColors.black, originColors.yellow, 20).toHexString(),
        Rose: tinycolor.mix(originColors.black, originColors.red, 20).toHexString(),
        Violet: tinycolor.mix(originColors.black, originColors.purple, 20).toHexString(),
      },
      Label: {
        errorForeground: "errorColor"
      },
      Link: {
        activeForeground: "accentColor",
        hoverForeground: "accentColor",
      },
      MainToolbar: {
        background: "secondaryBackground",
        Dropdown: {
          background: "secondaryBackground",
          hoverBackground: "background",
          pressedBackground: "background",
        },
        Icon: {
          hoverBackground: "background",
          pressedBackground: "background",
        }
      },
      Notification: {
        borderColor: "selectionBackground",
        errorBorderColor: "errorColor",
        errorBackground: "background",
        errorForeground: "foreground",
        ToolWindow: {
          warningForeground: "foreground",
          warningBackground: "background",
          warningBorderColor: c(colors.yellow),
          errorForeground: "foreground",
          errorBorderColor: "errorColor",
          errorBackground: "background",
          informativeForeground: "foreground",
          informativeBackground: "background",
          informativeBorderColor: c(colors.blue),
        }
      },
      NotificationsToolwindow: {
        newNotification: {
          background: "secondaryBackground",
          hoverBackground: "hoverBackground",
        }
      },
      PasswordField: {
        background: "secondaryBackground"
      },
      Plugins: {
        SearchField: {
          background: "secondaryBackground"
        },
        SectionHeader: {
          foreground: "foreground"
        },
        hoverBackground: "hoverBackground",
        lightSelectionBackground: "secondaryBackground",
        Button: {
          installBackground: "background",
          installFillForeground: "background",
          installFocusedBackground: "background",
          updateBorderColor: "accentColor",
          updateForeground: c(colors.black),
          updateBackground: "accentColor"
        },
        Tab: {
          selectedBackground: "hoverBackground",
          selectedForeground: "foreground",
          hoverBackground: "hoverBackground"
        }
      },
      ProgressBar: {
        failedColor: "errorColor",
        failedEndColor: "errorColor",
        trackColor: "selectionBackground",
        progressColor: "accentColor",
        indeterminateStartColor: c(colors.purple),
        indeterminateEndColor: c(colors.blue),
        passedColor: c(colors.blue),
        passedEndColor: c(colors.blue)
      },
      Popup: {
        Header: {
          activeBackground: "secondaryBackground",
          inactiveBackground: "secondaryBackground"
        }
      },
      ScrollBar: {
        Mac: {
          hoverThumbColor: "accentColor",
          Transparent: {
            hoverThumbColor: "accentColor",
          }
        }
      },
      SearchEverywhere: {
        SearchField: {
          background: "secondaryBackground"
        },
        Tab: {
          selectedBackground: "hoverBackground",
          selectedForeground: "foreground"
        }
      },
      SearchMatch: {
        startBackground: "accentColor",
        endBackground: "accentColor"
      },
      Separator: {
        separatorColor: "borderColor"
      },
      SidePanel: {
        background: "secondaryBackground"
      },
      TabbedPane: {
        tabSelectionHeight: 1,
        focusColor: "hoverBackground",
        hoverColor: "hoverBackground",
        underlineColor: "accentColor",
        contentAreaColor: "hoverBackground",
      },
      Table: {
        gridColor: "selectionBackground",
        hoverBackground: "selectionBackground",
        lightSelectionBackground: "secondaryBackground"
      },
      TableHeader: {
        bottomSeparatorColor: "borderColor"
      },
      TextField: {
        background: "secondaryBackground"
      },
      ToggleButton: {
        onBackground: "accentColor",
        onForeground: c(colors.black),
        offBackground: "secondaryBackground",
        offForeground: c(colors.secondaryText),
        buttonColor: "foreground"
      },
      ToolWindow: {
        Button: {
          hoverBackground: "hoverBackground"
        },
        Header: {
          background: "background",
          inactiveBackground: "background"
        },
        HeaderTab: {
          underlineColor: "accentColor",
          underlineHeight: 2,
          underlinedTabBackground: "secondaryBackground",
          underlinedTabInactiveBackground: "secondaryBackground"
        }
      },
      Tree: {
        modifiedItemForeground: "accentColor",
        selectionBackground: "selectionBackground",
        selectionInactiveBackground: "selectionBackground"
      },
      ValidationTooltip: {
        errorBackground: tinycolor.mix(originColors.black, originColors.errorRed, 20).toHexString(),
        warningBackground: tinycolor.mix(originColors.black, originColors.yellow, 20).toHexString(),
      },
      VersionControl: {
        FileHistory: {
          Commit: {
            selectedBranchBackground: "secondaryBackground"
          }
        },
        GitLog: {
          headIconColor: c(colors.yellow),
          localBranchIconColor: c(colors.green),
          tagIconColor: "accentColor",
          otherIconColor: c(colors.cyan)
        },
        Log: {
          Commit: {
            hoveredBackground: "selectionBackground",
            currentBranchBackground: "secondaryBackground"
          }
        },
        RefLabel: {
          foreground: "foreground"
        }
      },
      WelcomeScreen: {
        SidePanel: {
          background: "secondaryBackground"
        },
        separatorColor: "borderColor",
        Projects: {
          background: "hoverBackground",
          selectionBackground: "secondaryBackground",
          selectionInactiveBackground: "secondaryBackground",
          actions: {
            background: "secondaryBackground"
          }
        },
        Details: {
          background: "hoverBackground"
        }
      }
    },
    icons: {
      ColorPalette: {
        "Actions.Blue": c(colors.blue),
        "Actions.Green": c(colors.green),
        "Actions.Grey": c(colors.secondaryText),
        "Actions.GreyInline.Dark": c(colors.hoverBackground),
        "Actions.GreyInline": c(colors.hoverBackground),
        "Actions.Red": c(colors.red),
        "Actions.Yellow": c(colors.yellow),
        "Objects.Blue": c(colors.blue),
        "Objects.Green": c(colors.green),
        "Objects.GreenAndroid": c(colors.green),
        "Objects.Grey": c(colors.secondaryText),
        "Objects.Pink": c(colors.red),
        "Objects.Purple": c(colors.purple),
        "Objects.Red": c(colors.red),
        "Objects.RedStatus": c(colors.errorRed),
        "Objects.Yellow": c(colors.yellow),
        "Objects.YellowDark": c(colors.yellow),
        "Objects.BlackText": c(colors.black),
        "Checkbox.Foreground.Selected.Dark": "foreground",
        "Checkbox.Border.Default.Dark": "accentColor",
        "Checkbox.Border.Selected.Dark": "accentColor",
        "Checkbox.Border.Disabled.Dark": "disabledColor",
        "Checkbox.Background.Default.Dark": "secondaryBackground",
        "Checkbox.Background.Disabled.Dark": "background",
        "Checkbox.Focus.Wide.Dark": "accentColor",
        "Checkbox.Focus.Thin.Selected.Dark": "accentColor",
        "Checkbox.Focus.Thin.Default.Dark": "accentColor"
      }
    }
  };
}

module.exports = getTheme;
