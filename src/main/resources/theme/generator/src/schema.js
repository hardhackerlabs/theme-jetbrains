const { Schema } = require("./sdk");
const tinycolor = require("tinycolor2");

function getSchema(name, colorConfig, controlsOpt) {
  const controls = Object.assign(
    {
      highContrast: false,
    },
    controlsOpt || {}
  );

  const { originColors, colors } = colorConfig;

  const schema = new Schema(name, "Darcula", "142");

  // colors
  schema.addColor("SELECTION_BACKGROUND", colors.highlightBackground);
  schema.addColor("CARET_ROW_COLOR", colors.hoverBackground);
  schema.addColor("CONSOLE_BACKGROUND_KEY", colors.background);
  schema.addColor("GUTTER_BACKGROUND", colors.background);
  schema.addColor("LINE_NUMBERS_COLOR", colors.secondaryText);
  schema.addColor("LINE_NUMBER_ON_CARET_ROW_COLOR", colors.text);
  schema.addColor("DOC_COMMENT_LINK", colors.purple);
  schema.addColor("VCS_ANNOTATIONS_COLOR_1", tinycolor.mix(originColors.black, originColors.purple, 20).toHex());
  schema.addColor("VCS_ANNOTATIONS_COLOR_2", tinycolor.mix(originColors.black, originColors.red, 20).toHex());
  schema.addColor("VCS_ANNOTATIONS_COLOR_3", tinycolor.mix(originColors.black, originColors.yellow, 20).toHex());
  schema.addColor("VCS_ANNOTATIONS_COLOR_4", tinycolor.mix(originColors.black, originColors.green, 20).toHex());
  schema.addColor("VCS_ANNOTATIONS_COLOR_5", tinycolor.mix(originColors.black, originColors.cyan, 20).toHex());
  schema.addColor("ANNOTATIONS_COLOR", tinycolor.mix(originColors.black, originColors.white, 90).toHex());
  schema.addColor("ADDED_LINES_COLOR", tinycolor.mix(originColors.black, originColors.green, 60).toHex());
  schema.addColor("DELETED_LINES_COLOR", tinycolor.mix(originColors.black, originColors.errorRed, 60).toHex());
  schema.addColor("MODIFIED_LINES_COLOR", tinycolor.mix(originColors.black, originColors.blue.clone().saturate(100), 60).toHex());
  schema.addColor("WHITESPACES_MODIFIED_LINES_COLOR", tinycolor.mix(originColors.black, originColors.yellow, 60).toHex());
  schema.addColor("TAB_UNDERLINE", colors.themePrimary);
  schema.addColor("ScrollBar.Mac.thumbColor", originColors.red.clone().setAlpha(0.5).toHex8());
  schema.addColor("ScrollBar.Mac.hoverThumbColor", colors.themePrimary);
  schema.addColor("DOCUMENTATION_COLOR", colors.darkerBackground);
  schema.addColor("LOOKUP_COLOR", colors.darkerBackground);
  schema.addColor("INFORMATION_HINT", colors.darkerBackground);


  // attributes

  // general
  schema.addAttribute("HYPERLINK_ATTRIBUTES", {
    FOREGROUND: colors.purple,
    EFFECT_TYPE: "1",
    EFFECT_COLOR: colors.purple,
  });
  schema.addAttribute("INACTIVE_HYPERLINK_ATTRIBUTES", {
    FOREGROUND: colors.purple,
    EFFECT_TYPE: "1",
    EFFECT_COLOR: colors.purple,
  });
  schema.addAttribute("FOLLOWED_HYPERLINK_ATTRIBUTES", {
    FOREGROUND: colors.purple,
    EFFECT_TYPE: "1",
    EFFECT_COLOR: colors.purple,
  });
  schema.addAttribute("TEMPLATE_VARIABLE_ATTRIBUTES", {
    FOREGROUND: colors.variable,
  });

  schema.addAttribute("SEARCH_RESULT_ATTRIBUTES", { BACKGROUND: "4F4F82" }); // TODO no idea
  schema.addAttribute("MATCHED_BRACE_ATTRIBUTES", { BACKGROUND: tinycolor.mix(originColors.black, originColors.cyan, 20).toHex() });
  schema.addAttribute("UNMATCHED_BRACE_ATTRIBUTES", { BACKGROUND: tinycolor.mix(originColors.black, originColors.errorRed, 20).toHex() });
  schema.addAttribute("TEXT_SEARCH_RESULT_ATTRIBUTES", {
    BACKGROUND: tinycolor.mix(originColors.black, originColors.cyan, 20).toHex(),
    ERROR_STRIPE_COLOR: tinycolor.mix(originColors.black, originColors.cyan, 20).toHex(),
  });
  schema.addAttribute("WRITE_SEARCH_RESULT_ATTRIBUTES", { // TODO no idea
    BACKGROUND: "623062",
  });

  schema.addAttribute("FOLDED_TEXT_ATTRIBUTES", { FOREGROUND: colors.secondaryText, BACKGROUND: colors.hoverBackground });
  schema.addAttribute("INJECTED_LANGUAGE_FRAGMENT", { BACKGROUND: colors.darkerBackground });

  schema.addAttribute("ERRORS_ATTRIBUTES", {
    EFFECT_TYPE: "2",
    EFFECT_COLOR: colors.error,
    ERROR_STRIPE_COLOR: colors.error,
  });
  schema.addAttribute("WARNING_ATTRIBUTES", {
    EFFECT_TYPE: "2",
    EFFECT_COLOR: colors.warning,
    ERROR_STRIPE_COLOR: colors.warning,
  });
  schema.addAttribute("DEPRECATED_ATTRIBUTES", {
    EFFECT_TYPE: "3",
    EFFECT_COLOR: colors.secondaryText,
  });
  schema.addAttribute("MARKED_FOR_REMOVAL_ATTRIBUTES", {
    EFFECT_TYPE: "3",
    EFFECT_COLOR: colors.error,
  });
  schema.addAttribute("WRONG_REFERENCES_ATTRIBUTES", {
    FOREGROUND: colors.error,
    EFFECT_COLOR: colors.error,
    EFFECT_TYPE: "2"
  });
  schema.addAttribute("RUNTIME_ERROR", {
    EFFECT_COLORF: colors.warning,
    ERROR_STRIPE_COLOR: colors.warning,
    EFFECT_TYPE: "5",
  });
  schema.addAttribute("TYPO", {
    EFFECT_TYPE: "2",
    EFFECT_COLOR: colors.cyan,
  });
  schema.addAttribute("TAG_ATTR_KEY", { FOREGROUND: colors.keyword });
  schema.addAttribute("TEXT", { FOREGROUND: colors.text, BACKGROUND: colors.background });
  schema.addAttribute("TODO_DEFAULT_ATTRIBUTES", {
    FOREGROUND: colors.themePrimary,
    FONT_TYPE: "2",
    ERROR_STRIPE_COLOR: colors.themePrimary,
  });
  schema.addAttribute("TYPEDEF", { FOREGROUND: colors.variable });

  // default
  schema.addAttribute("DEFAULT_LABEL", { FOREGROUND: colors.string });
  schema.addAttribute("DEFAULT_BRACES", { FOREGROUND: colors.text });
  schema.addAttribute("DEFAULT_BRACKETS", { FOREGROUND: colors.text });
  schema.addAttribute("DEFAULT_CLASS_NAME", { FOREGROUND: colors.cyan });
  schema.addAttribute("DEFAULT_COMMA", { FOREGROUND: colors.text });
  schema.addAttribute("DEFAULT_CONSTANT", { FOREGROUND: colors.variable, FONT_TYPE: "1" });
  schema.addAttribute("DEFAULT_DOC_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("DEFAULT_DOC_COMMENT_TAG", {
    FOREGROUND: colors.keyword,
    FONT_TYPE: "2",
  });
  schema.addAttribute("DEFAULT_DOC_COMMENT_TAG_VALUE", {
    FOREGROUND: colors.parameter,
    FONT_TYPE: "2",
  });
  schema.addAttribute("DEFAULT_DOC_MARKUP", {
    FOREGROUND: colors.keyword,
  });
  schema.addAttribute("DEFAULT_DOT", { FOREGROUND: colors.text });
  schema.addAttribute("DEFAULT_ENTITY", { FOREGROUND: colors.number });
  schema.addAttribute("DEFAULT_FUNCTION_CALL", { FOREGROUND: colors.method });
  schema.addAttribute("DEFAULT_FUNCTION_DECLARATION", { FOREGROUND: colors.method });
  schema.addAttribute("DEFAULT_GLOBAL_VARIABLE", {
    FOREGROUND: colors.variable,
    FONT_TYPE: "2",
  });
  schema.addBaseAttribute("DEFAULT_IDENTIFIER", "TEXT");
  schema.addAttribute("DEFAULT_INSTANCE_FIELD", { FOREGROUND: colors.variable });
  schema.addAttribute("DEFAULT_INSTANCE_METHOD", { FOREGROUND: colors.method });
  schema.addAttribute("DEFAULT_INTERFACE_NAME", { FOREGROUND: colors.cyan });
  schema.addAttribute("DEFAULT_INVALID_STRING_ESCAPE", {
    FOREGROUND: colors.error,
    EFFECT_COLOR: colors.error,
    EFFECT_TYPE: "2",
  });
  schema.addAttribute("DEFAULT_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addBaseAttribute("DEFAULT_LABEL", "DEFAULT_IDENTIFIER");
  schema.addAttribute("DEFAULT_LINE_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("DEFAULT_LOCAL_VARIABLE", { FOREGROUND: colors.variable });
  schema.addAttribute("DEFAULT_REASSIGNED_LOCAL_VARIABLE", { FOREGROUND: colors.variable, EFFECT_COLOR: colors.variable, EFFECT_TYPE: "1" });
  schema.addAttribute("DEFAULT_METADATA", { FOREGROUND: colors.string });
  schema.addAttribute("DEFAULT_NUMBER", { FOREGROUND: colors.number });
  schema.addAttribute("DEFAULT_OPERATION_SIGN", { FOREGROUND: colors.operator });
  schema.addAttribute("DEFAULT_PARAMETER", { FOREGROUND: colors.parameter });
  schema.addAttribute("DEFAULT_REASSIGNED_PARAMETER", { FOREGROUND: colors.parameter, EFFECT_COLOR: colors.parameter, EFFECT_TYPE: "1" });
  schema.addAttribute("DEFAULT_PARENTHS", { FOREGROUND: colors.text });
  schema.addAttribute("DEFAULT_PREDEFINED_SYMBOL", { FOREGROUND: colors.cyan });
  schema.addAttribute("DEFAULT_SEMICOLON", { FOREGROUND: colors.text });
  schema.addAttribute("DEFAULT_STATIC_FIELD", {
    FOREGROUND: colors.variable,
    FONT_TYPE: "2",
  });
  schema.addAttribute("DEFAULT_STATIC_METHOD", { FOREGROUND: colors.method });
  schema.addAttribute("DEFAULT_STRING", { FOREGROUND: colors.string });
  schema.addAttribute("DEFAULT_TAG", { FOREGROUND: colors.text });
  schema.addBaseAttribute("DEFAULT_TEMPLATE_LANGUAGE_COLOR", "TEXT");
  schema.addAttribute("DEFAULT_VALID_STRING_ESCAPE", { FOREGROUND: colors.cyan });
  schema.addAttribute("DEFAULT_HIGHLIGHTED_REFERENCE", {
    FOREGROUND: colors.string,
    EFFECT_COLOR: colors.string,
    EFFECT_TYPE: "1",
  });
  schema.addAttribute("DEFAULT_ATTRIBUTE", { FOREGROUND: colors.class });
  schema.addAttribute("DEFAULT_BLOCK_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("INLINE_PARAMETER_HINT", {
    FOREGROUND: colors.secondaryText,
    BACKGROUND: colors.hoverBackground,
  });
  schema.addAttribute("INLINE_PARAMETER_HINT_HIGHLIGHTED", {
    FOREGROUND: colors.text,
    BACKGROUND: colors.highlightBackground,
  });

  schema.addAttribute("BAD_CHARACTER", { FOREGROUND: colors.error });

  // console
  schema.addAttribute("CONSOLE_BLACK_OUTPUT", { FOREGROUND: colors.black });
  schema.addAttribute("CONSOLE_BLACK_BRIGHT_OUTPUT", { FOREGROUND: colors.brightBlack });
  schema.addAttribute("CONSOLE_BLUE_OUTPUT", { FOREGROUND: colors.blue });
  schema.addAttribute("CONSOLE_BLUE_BRIGHT_OUTPUT", { FOREGROUND: colors.blue });
  schema.addAttribute("CONSOLE_CYAN_OUTPUT", { FOREGROUND: colors.cyan });
  schema.addAttribute("CONSOLE_CYAN_BRIGHT_OUTPUT", { FOREGROUND: colors.cyan });
  schema.addAttribute("CONSOLE_ERROR_OUTPUT", { FOREGROUND: colors.error });
  schema.addAttribute("CONSOLE_GRAY_OUTPUT", { FOREGROUND: colors.brightBlack });
  schema.addAttribute("CONSOLE_DARKGRAY_OUTPUT", { FOREGROUND: colors.brightBlack });
  schema.addAttribute("CONSOLE_GREEN_OUTPUT", { FOREGROUND: colors.green });
  schema.addAttribute("CONSOLE_GREEN_BRIGHT_OUTPUT", { FOREGROUND: colors.green });
  schema.addAttribute("CONSOLE_MAGENTA_OUTPUT", { FOREGROUND: colors.purple });
  schema.addAttribute("CONSOLE_MAGENTA_BRIGHT_OUTPUT", { FOREGROUND: colors.purple });
  schema.addAttribute("CONSOLE_NORMAL_OUTPUT", { FOREGROUND: colors.text });
  schema.addAttribute("CONSOLE_RED_OUTPUT", { FOREGROUND: colors.red });
  schema.addAttribute("CONSOLE_RED_BRIGHT_OUTPUT", { FOREGROUND: colors.red });
  schema.addAttribute("CONSOLE_SYSTEM_OUTPUT", { FOREGROUND: colors.text });
  schema.addAttribute("CONSOLE_USER_INPUT", {
    FOREGROUND: colors.green,
    FONT_TYPE: "2",
  });
  schema.addAttribute("CONSOLE_YELLOW_OUTPUT", { FOREGROUND: colors.yellow });
  schema.addAttribute("CONSOLE_YELLOW_BRIGHT_OUTPUT", { FOREGROUND: colors.yellow });
  schema.addAttribute("CONSOLE_WHITE_OUTPUT", { FOREGROUND: colors.text });

  // log
  schema.addAttribute("LOG_DEBUG_OUTPUT", { FOREGROUND: colors.blue });
  schema.addAttribute("LOG_ERROR_OUTPUT", { FOREGROUND: colors.error });
  schema.addAttribute("LOG_INFO_OUTPUT", { FOREGROUND: colors.green });
  schema.addAttribute("LOG_VERBOSE_OUTPUT", { FOREGROUND: colors.cyan });
  schema.addAttribute("LOG_WARNING_OUTPUT", { FOREGROUND: colors.yellow });

  // diff
  schema.addAttribute("DIFF_CONFLICT", {
    BACKGROUND: tinycolor.mix(originColors.black, originColors.errorRed, 30).toHex(),
    ERROR_STRIPE_COLOR: colors.errorRed,
  });
  schema.addAttribute("DIFF_INSERTED", {
    BACKGROUND: tinycolor.mix(originColors.black, originColors.green, 30).toHex(),
    ERROR_STRIPE_COLOR: colors.green,
  });
  schema.addAttribute("DIFF_MODIFIED", {
    BACKGROUND: tinycolor.mix(originColors.black, originColors.blue.clone().saturate(100), 30).toHex(),
    ERROR_STRIPE_COLOR: originColors.blue.clone().saturate(100).toHex(),
  });
  schema.addAttribute("DIFF_DELETED", {
    BACKGROUND: tinycolor.mix(originColors.black, originColors.black.clone().lighten(20), 30).toHex(),
    ERROR_STRIPE_COLOR: originColors.black.clone().lighten(20).toHex(),
  });

  // custom
  schema.addAttribute("CUSTOM_INVALID_STRING_ESCAPE_ATTRIBUTES", {
    FOREGROUND: colors.method,
  });
  schema.addAttribute("CUSTOM_KEYWORD1_ATTRIBUTES", {
    FOREGROUND: colors.red,
    FONT_TYPE: "1",
  });
  schema.addAttribute("CUSTOM_KEYWORD2_ATTRIBUTES", {
    FOREGROUND: colors.purple,
    FONT_TYPE: "1",
  });
  schema.addAttribute("CUSTOM_KEYWORD3_ATTRIBUTES", {
    FOREGROUND: colors.cyan,
    FONT_TYPE: "1",
  });
  schema.addAttribute("CUSTOM_KEYWORD4_ATTRIBUTES", {
    FOREGROUND: colors.green,
    FONT_TYPE: "1",
  });
  schema.addAttribute("CUSTOM_LINE_COMMENT_ATTRIBUTES", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("CUSTOM_MULTI_LINE_COMMENT_ATTRIBUTES", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("CUSTOM_NUMBER_ATTRIBUTES", { FOREGROUND: colors.number });
  schema.addAttribute("CUSTOM_STRING_ATTRIBUTES", {
    FOREGROUND: colors.string,
    FONT_TYPE: "1",
  });
  schema.addAttribute("CUSTOM_VALID_STRING_ESCAPE_ATTRIBUTES", {
    FOREGROUND: colors.cyan,
    FONT_TYPE: "1",
  });

  schema.addAttribute("BREAKPOINT_ATTRIBUTES", { BACKGROUND: "743D3D" });
  schema.addAttribute("BUILDOUT.KEY", { FOREGROUND: colors.keyword });
  schema.addAttribute("BUILDOUT.KEY_VALUE_SEPARATOR", { FOREGROUND: colors.keyword });
  schema.addAttribute("BUILDOUT.LINE_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("BUILDOUT.SECTION_NAME", { FOREGROUND: colors.number });
  schema.addAttribute("BUILDOUT.VALUE", { FOREGROUND: colors.string });
  schema.addBaseAttribute("CLASS_NAME_ATTRIBUTES", "TEXT");
  schema.addAttribute("CLASS_REFERENCE", { FOREGROUND: colors.cyan });

  // Java
  schema.addBaseAttribute("ANNOTATION_NAME_ATTRIBUTES", "DEFAULT_METADATA");
  schema.addBaseAttribute("ANNOTATION_ATTRIBUTE_NAME_ATTRIBUTES", "DEFAULT_CLASS");
  schema.addAttribute("IMPLICIT_ANONYMOUS_CLASS_PARAMETER_ATTRIBUTES", {
    FOREGROUND: colors.text,
  });
  schema.addAttribute("STATIC_METHOD_ATTRIBUTES", { FOREGROUND: colors.method, FONT_TYPE: "2" });
  schema.addAttribute("TYPE_PARAMETER_NAME_ATTRIBUTES", { FOREGROUND: colors.class });

  // Groovy
  schema.addBaseAttribute("Class", "CLASS_NAME_ATTRIBUTES");
  schema.addBaseAttribute("List/map to object conversion", "JAVA_NUMBER");
  schema.addBaseAttribute("Groovy method declaration", "METHOD_DECLARATION_ATTRIBUTES");
  schema.addBaseAttribute("Static method access", "STATIC_METHOD_ATTRIBUTES");
  schema.addBaseAttribute("Static property reference ID", "STATIC_FINAL_FIELD_ATTRIBUTES");

  // HTML
  schema.addBaseAttribute("HTML_ATTRIBUTE_NAME", "DEFAULT_ATTRIBUTE");
  schema.addBaseAttribute("HTML_ATTRIBUTE_VALUE", "DEFAULT_STRING");
  schema.addBaseAttribute("HTML_ENTITY_REFERENCE", "DEFAULT_ENTITY");
  schema.addBaseAttribute("HTML_TAG", "DEFAULT_TAG");
  schema.addBaseAttribute("HTML_TAG_NAME", "DEFAULT_KEYWORD");

  // kotlin
  schema.addAttribute("KOTLIN_DYNAMIC_FUNCTION_CALL", { FOREGROUND: colors.method, FONT_TYPE: "2" });
  schema.addAttribute("KOTLIN_DYNAMIC_PROPERTY_CALL", { FOREGROUND: colors.variable, FONT_TYPE: "2" });
  schema.addAttribute("KOTLIN_SMART_CAST_RECEIVER", { BACKGROUND: tinycolor.mix(originColors.black, originColors.green, 10).toHex() });
  schema.addAttribute("KOTLIN_SMART_CONSTANT", { BACKGROUND: tinycolor.mix(originColors.black, originColors.green, 10).toHex() });
  schema.addAttribute("KOTLIN_SMART_CAST_VALUE", { BACKGROUND: tinycolor.mix(originColors.black, originColors.green, 10).toHex() });
  schema.addBaseAttribute("KOTLIN_PACKAGE_FUNCTION_CALL", "DEFAULT_STATIC_METHOD");
  schema.addBaseAttribute("KOTLIN_LABEL", "DEFAULT_LABEL");

  // properties
  schema.addBaseAttribute("PROPERTIES.INVALID_STRING_ESCAPE", "DEFAULT_INVALID_STRING_ESCAPE");
  schema.addBaseAttribute("PROPERTIES.KEY", "DEFAULT_KEYWORD");

  // regexp
  schema.addBaseAttribute("REGEXP.CHAR_CLASS", "DEFAULT_ENTITY");
  schema.addBaseAttribute("REGEXP.ESC_CHARACTER", "DEFAULT_VALID_STRING_ESCAPE");
  schema.addBaseAttribute("REGEXP.META", "DEFAULT_KEYWORD");
  schema.addBaseAttribute("REGEXP.QUOTE_CHARACTER", "DEFAULT_VALID_STRING_ESCAPE");
  schema.addBaseAttribute("REGEXP.REDUNDANT_ESCAPE", "DEFAULT_VALID_STRING_ESCAPE");
  schema.addAttribute("REGEXP.BRACES", { FOREGROUND: colors.red });
  schema.addAttribute("REGEXP.BRACKETS", { FOREGROUND: colors.red });
  schema.addAttribute("REGEXP.PARENTHS", { FOREGROUND: colors.red });

  // shell
  schema.addAttribute("BASH.EXTERNAL_COMMAND", { FOREGROUND: colors.cyan });

  // yml
  schema.addAttribute("YAML_ANCHOR", { FOREGROUND: colors.red });
  schema.addAttribute("YAML_SCALAR_KEY", { FOREGROUND: colors.cyan });
  schema.addAttribute("YAML_SCALAR_LIST", { FOREGROUND: colors.purple });
  schema.addAttribute("YAML_SCALAR_VALUE", { FOREGROUND: colors.purple });
  schema.addAttribute("YAML_SIGN", { FOREGROUND: colors.text });
  schema.addAttribute("YAML_TEXT", { FOREGROUND: colors.yellow });

  // xpath
  schema.addAttribute("XPATH.FUNCTION", { FOREGROUND: colors.method });
  schema.addAttribute("XPATH.XPATH_NAME", { FOREGROUND: colors.variable });
  schema.addBaseAttribute("XPATH.KEYWORD", "DEFAULT_KEYWORD");


  // TODO Important!!! 从这开始下面的都是没调试过的

  // coffeescript
  schema.addAttribute("COFFEESCRIPT.BAD_CHARACTER", { FOREGROUND: colors.error });
  schema.addAttribute("COFFEESCRIPT.BLOCK_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("COFFEESCRIPT.BOOLEAN", { FOREGROUND: colors.number });
  schema.addAttribute("COFFEESCRIPT.BRACE", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.BRACKET", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.CLASS_NAME", { FOREGROUND: colors.method });
  schema.addAttribute("COFFEESCRIPT.COLON", { FOREGROUND: colors.keyword });
  schema.addAttribute("COFFEESCRIPT.COMMA", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.DOT", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.ESCAPE_SEQUENCE", { FOREGROUND: colors.cyan });
  schema.addAttribute("COFFEESCRIPT.EXISTENTIAL", { FOREGROUND: colors.keyword });
  schema.addAttribute("COFFEESCRIPT.EXPRESSIONS_SUBSTITUTION_MARK", {
    FOREGROUND: colors.text,
  });
  schema.addAttribute("COFFEESCRIPT.FUNCTION", { FOREGROUND: colors.variable });
  schema.addAttribute("COFFEESCRIPT.FUNCTION_BINDING", {
    FOREGROUND: colors.variable,
  });
  schema.addAttribute("COFFEESCRIPT.FUNCTION_NAME", { FOREGROUND: colors.method });
  schema.addAttribute("COFFEESCRIPT.GLOBAL_VARIABLE", { FOREGROUND: colors.variable });
  schema.addAttribute("COFFEESCRIPT.HEREDOC_CONTENT", { FOREGROUND: colors.string });
  schema.addAttribute("COFFEESCRIPT.HEREDOC_ID", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.HEREGEX_CONTENT", { FOREGROUND: colors.cyan });
  schema.addAttribute("COFFEESCRIPT.HEREGEX_ID", { FOREGROUND: colors.cyan });
  schema.addBaseAttribute("COFFEESCRIPT.IDENTIFIER", "TEXT");
  schema.addBaseAttribute("COFFEESCRIPT.JAVASCRIPT_CONTENT", "DEFAULT_STRING");
  schema.addAttribute("COFFEESCRIPT.JAVASCRIPT_ID", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("COFFEESCRIPT.LINE_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addBaseAttribute(
    "COFFEESCRIPT.LOCAL_VARIABLE",
    "COFFEESCRIPT.IDENTIFIER"
  );
  schema.addAttribute("COFFEESCRIPT.NUMBER", { FOREGROUND: colors.number });
  schema.addAttribute("COFFEESCRIPT.OBJECT_KEY", { FOREGROUND: colors.variable });
  schema.addAttribute("COFFEESCRIPT.OPERATIONS", { FOREGROUND: colors.keyword });
  schema.addAttribute("COFFEESCRIPT.PARENTHESIS", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.PROTOTYPE", { FOREGROUND: colors.method });
  schema.addAttribute("COFFEESCRIPT.RANGE", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.REGULAR_EXPRESSION_CONTENT", {
    FOREGROUND: colors.cyan,
  });
  schema.addAttribute("COFFEESCRIPT.REGULAR_EXPRESSION_FLAG", {
    FOREGROUND: colors.cyan,
  });
  schema.addAttribute("COFFEESCRIPT.REGULAR_EXPRESSION_ID", {
    FOREGROUND: colors.cyan,
  });
  schema.addAttribute("COFFEESCRIPT.SEMICOLON", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.SPLAT", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.STRING", { FOREGROUND: colors.string });
  schema.addAttribute("COFFEESCRIPT.STRING_LITERAL", { FOREGROUND: colors.text });
  schema.addAttribute("COFFEESCRIPT.THIS", {
    FOREGROUND: colors.method,
    FONT_TYPE: "2",
  });
  schema.addAttribute("CONDITIONALLY_NOT_COMPILED", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });

  // CSS
  schema.addAttribute("CSS.COMMENT", { FOREGROUND: colors.comment, FONT_TYPE: "2" });
  schema.addAttribute("CSS.FUNCTION", { FOREGROUND: colors.method });
  schema.addAttribute("CSS.IDENT", { FOREGROUND: colors.cyan });
  schema.addAttribute("CSS.NUMBER", { FOREGROUND: colors.number });
  schema.addAttribute("CSS.PROPERTY_NAME", { FOREGROUND: colors.cyan });
  schema.addAttribute("CSS.PROPERTY_VALUE", {
    FOREGROUND: "68E868",
    FONT_TYPE: "1",
  });
  schema.addAttribute("CSS.TAG_NAME", { FOREGROUND: colors.cyan });
  schema.addAttribute("CSS.URL", { FOREGROUND: colors.number });

  // clojure
  schema.addAttribute("Clojure Atom", { FOREGROUND: colors.keyword });
  schema.addAttribute("Clojure Character", { FOREGROUND: colors.string });
  schema.addAttribute("Clojure Keyword", { FOREGROUND: colors.variable });
  schema.addAttribute("Clojure Line comment", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("Clojure Literal", { FOREGROUND: colors.variable });
  schema.addAttribute("Clojure Numbers", { FOREGROUND: colors.number });
  schema.addAttribute("Clojure Strings", { FOREGROUND: colors.string });
  
  // django
  schema.addAttribute("DJANGO_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("DJANGO_FILTER", { FOREGROUND: colors.method });
  schema.addAttribute("DJANGO_ID", { FOREGROUND: colors.keyword });
  schema.addAttribute("DJANGO_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("DJANGO_NUMBER", { FOREGROUND: colors.number });
  schema.addAttribute("DJANGO_STRING_LITERAL", { FOREGROUND: colors.string });
  schema.addAttribute("DJANGO_TAG_NAME", { FOREGROUND: colors.cyan });
  schema.addAttribute("DJANGO_TAG_START_END", { FOREGROUND: colors.text });
  schema.addAttribute("DUPLICATE_FROM_SERVER", { BACKGROUND: "30322B" });
  schema.addAttribute("ENUM_CONST", { FOREGROUND: colors.string });
  schema.addAttribute("First symbol in list", {
    FOREGROUND: colors.variable,
    FONT_TYPE: "1",
  });
  schema.addAttribute("GENERIC_SERVER_ERROR_OR_WARNING", {
    EFFECT_TYPE: "2",
    EFFECT_COLOR: "AA4E00",
    ERROR_STRIPE_COLOR: "F49810",
  });
  schema.addAttribute("GHERKIN_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("GHERKIN_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("GHERKIN_OUTLINE_PARAMETER_SUBSTITUTION", {
    FOREGROUND: colors.variable,
  });
  schema.addAttribute("GHERKIN_PYSTRING", { FOREGROUND: colors.string });
  schema.addAttribute("GHERKIN_REGEXP_PARAMETER", { FOREGROUND: colors.string });
  schema.addBaseAttribute("GHERKIN_TABLE_CELL", "GHERKIN_TEXT");
  schema.addAttribute("GHERKIN_TABLE_HEADER_CELL", { FOREGROUND: colors.variable });
  schema.addAttribute("GHERKIN_TABLE_PIPE", { FOREGROUND: colors.keyword });
  schema.addAttribute("GHERKIN_TAG", { FOREGROUND: colors.variable });
  schema.addBaseAttribute("GHERKIN_TEXT", "TEXT");
  schema.addAttribute("GO_BLOCK_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addBaseAttribute("GO_BUILTIN_CONSTANT", "DEFAULT_CONSTANT");
  schema.addAttribute("GO_BUILTIN_FUNCTION_CALL", { FOREGROUND: colors.method });
  schema.addAttribute("GO_BUILTIN_TYPE_REFERENCE", { FOREGROUND: colors.cyan });
  schema.addAttribute("GO_BUILTIN_VARIABLE", {
    FOREGROUND: colors.variable,
    FONT_TYPE: "2",
  });
  schema.addAttribute("GO_EXPORTED_FUNCTION", { FOREGROUND: colors.method });
  schema.addAttribute("GO_EXPORTED_FUNCTION_CALL", { FOREGROUND: colors.method });
  schema.addAttribute("GO_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("GO_LINE_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addBaseAttribute("GO_LOCAL_CONSTANT", "DEFAULT_CONSTANT");
  schema.addAttribute("GO_LOCAL_FUNCTION", { FOREGROUND: colors.method });
  schema.addAttribute("GO_LOCAL_FUNCTION_CALL", { FOREGROUND: colors.method });
  schema.addAttribute("GO_METHOD_RECEIVER", { FOREGROUND: colors.variable });
  schema.addBaseAttribute("GO_PACKAGE", "DEFAULT_IDENTIFIER");
  schema.addBaseAttribute("GO_PACKAGE_EXPORTED_CONSTANT", "DEFAULT_CONSTANT");
  schema.addBaseAttribute("GO_PACKAGE_LOCAL_CONSTANT", "DEFAULT_CONSTANT");
  schema.addAttribute("GO_TYPE_REFERENCE", { FOREGROUND: colors.cyan });
  schema.addAttribute("GQL_ID", { FOREGROUND: colors.number });
  schema.addAttribute("GQL_INT_LITERAL", { FOREGROUND: colors.number });
  schema.addAttribute("GQL_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("GQL_STRING_LITERAL", { FOREGROUND: colors.string });
  schema.addAttribute("HAML_CLASS", { FOREGROUND: colors.cyan });
  schema.addAttribute("HAML_COMMENT", { FOREGROUND: colors.comment, FONT_TYPE: "2" });
  schema.addBaseAttribute("HAML_FILTER", "HAML_TEXT");
  schema.addBaseAttribute("HAML_FILTER_CONTENT", "HAML_TEXT");
  schema.addAttribute("HAML_ID", { FOREGROUND: colors.cyan });
  schema.addBaseAttribute("HAML_LINE_CONTINUATION", "HAML_TEXT");
  schema.addAttribute("HAML_PARENTHS", { FOREGROUND: colors.text });
  schema.addBaseAttribute("HAML_RUBY_CODE", "HAML_TEXT");
  schema.addBaseAttribute("HAML_RUBY_START", "HAML_TEXT");
  schema.addAttribute("HAML_STRING", { FOREGROUND: colors.string });
  schema.addAttribute("HAML_STRING_INTERPOLATED", { FOREGROUND: colors.string });
  schema.addAttribute("HAML_TAG", { FOREGROUND: colors.text });
  schema.addAttribute("HAML_TAG_NAME", { FOREGROUND: colors.text });
  schema.addBaseAttribute("HAML_TEXT", "TEXT");
  schema.addAttribute("HAML_WS_REMOVAL", { FOREGROUND: colors.text });
  schema.addBaseAttribute("HAML_XHTML", "HAML_TEXT");
  schema.addAttribute("IDENTIFIER_UNDER_CARET_ATTRIBUTES", {
    BACKGROUND: "3C3C57",
    ERROR_STRIPE_COLOR: "CCCCFF",
  });
  
  schema.addAttribute("INFO_ATTRIBUTES", {
    EFFECT_TYPE: "2",
    EFFECT_COLOR: "333434",
    ERROR_STRIPE_COLOR: "FFFFCC",
  });
  schema.addAttribute("IVAR", { FOREGROUND: colors.variable });
  schema.addAttribute("JADE_FILE_PATH", { FOREGROUND: colors.string });
  schema.addBaseAttribute("JADE_FILTER_NAME", "DEFAULT_LABEL");
  schema.addBaseAttribute("JADE_JS_BLOCK", "DEFAULT_IDENTIFIER");
  schema.addAttribute("JADE_STATEMENTS", { FOREGROUND: colors.keyword });
  schema.addAttribute("JS.GLOBAL_VARIABLE", {
    FOREGROUND: colors.variable,
    FONT_TYPE: "2",
  });
  schema.addAttribute("JS.INSTANCE_MEMBER_FUNCTION", { FOREGROUND: colors.method });
  schema.addAttribute("JS.LOCAL_VARIABLE", { FOREGROUND: colors.variable });
  schema.addAttribute("JS.PARAMETER", { FOREGROUND: colors.number });
  schema.addAttribute("JS.REGEXP", { FOREGROUND: colors.cyan });
  schema.addAttribute("LABEL", { FOREGROUND: colors.keyword });
  schema.addBaseAttribute("LESS_INJECTED_CODE", "TEXT");
  schema.addBaseAttribute("LESS_JS_CODE_DELIM", "TEXT");
  schema.addAttribute("LESS_VARIABLE", { FOREGROUND: colors.variable });
  schema.addBaseAttribute("LOCAL_VARIABLE_ATTRIBUTES", "TEXT");
  schema.addAttribute("MACRONAME", { FOREGROUND: colors.method });
  schema.addBaseAttribute("MACRO_PARAMETER", "TEXT");
  schema.addAttribute("NOT_USED_ELEMENT_ATTRIBUTES", { FOREGROUND: "80807F" });
  schema.addAttribute("OC.BADCHARACTER", { FOREGROUND: colors.method });
  schema.addAttribute("OC.BLOCK_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addBaseAttribute("OC.BRACES", "OC.DOT");
  schema.addBaseAttribute("OC.BRACKETS", "OC.DOT");
  schema.addBaseAttribute("OC.COMMA", "OC.DOT");
  schema.addAttribute("OC.CPP_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("OC.DIRECTIVE", { FOREGROUND: colors.keyword });
  schema.addBaseAttribute("OC.DOT", "TEXT");
  schema.addAttribute("OC.EXTERN_VARIABLE", { FOREGROUND: colors.variable });
  schema.addAttribute("OC.GLOBAL_VARIABLE", { FOREGROUND: colors.variable });
  schema.addAttribute("OC.KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("OC.LINE_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("OC.LOCAL_VARIABLE", { FOREGROUND: colors.variable });
  schema.addAttribute("OC.MESSAGE_ARGUMENT", { FOREGROUND: colors.method });
  schema.addAttribute("OC.METHOD_DECLARATION", { FOREGROUND: colors.method });
  schema.addAttribute("OC.NUMBER", { FOREGROUND: colors.number });
  schema.addBaseAttribute("OC.OPERATION_SIGN", "OC.DOT");
  schema.addAttribute("OC.PARAMETER", { FOREGROUND: colors.number });
  schema.addBaseAttribute("OC.PARENTHS", "OC.DOT");
  schema.addAttribute("OC.PROPERTY", { FOREGROUND: colors.variable });
  schema.addAttribute("OC.SELFSUPERTHIS", {
    FOREGROUND: colors.method,
    FONT_TYPE: "2",
  });
  schema.addBaseAttribute("OC.SEMICOLON", "OC.DOT");
  schema.addAttribute("OC.STRING", { FOREGROUND: colors.string });
  schema.addAttribute("OC.STRUCT_FIELD", { FOREGROUND: colors.string });
  schema.addAttribute("OC_FORMAT_TOKEN", { FOREGROUND: colors.string });
  schema.addBaseAttribute("PARAMETER_ATTRIBUTES", "TEXT");
  schema.addAttribute("PHP_PARAMETER", { FOREGROUND: colors.number });
  schema.addAttribute("PHP_VAR", { FOREGROUND: colors.variable });
  schema.addAttribute("PROTOCOL_REFERENCE", { FOREGROUND: colors.cyan });
  schema.addAttribute("PUPPET_BAD_CHARACTER", { FOREGROUND: colors.method });
  schema.addAttribute("PUPPET_BLOCK_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("PUPPET_BRACES", { FOREGROUND: colors.text });
  schema.addAttribute("PUPPET_BRACKETS", { FOREGROUND: colors.text });
  schema.addAttribute("PUPPET_CLASS", { FOREGROUND: colors.cyan });
  schema.addAttribute("PUPPET_COMMA", { FOREGROUND: colors.text });
  schema.addAttribute("PUPPET_DOT", { FOREGROUND: colors.text });
  schema.addAttribute("PUPPET_ESCAPE_SEQUENCE", { FOREGROUND: colors.cyan });
  schema.addAttribute("PUPPET_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("PUPPET_NUMBER", { FOREGROUND: colors.number });
  schema.addAttribute("PUPPET_OPERATION_SIGN", { FOREGROUND: colors.keyword });
  schema.addAttribute("PUPPET_PARENTH", { FOREGROUND: colors.text });
  schema.addAttribute("PUPPET_REGEX", { FOREGROUND: colors.cyan });
  schema.addBaseAttribute("PUPPET_RESOURCE_REFERENCE", "TEXT");
  schema.addAttribute("PUPPET_SEMICOLON", { FOREGROUND: colors.text });
  schema.addAttribute("PUPPET_SQ_STRING", { FOREGROUND: colors.string });
  schema.addAttribute("PUPPET_STRING", { FOREGROUND: colors.string });
  schema.addAttribute("PUPPET_VARIABLE", { FOREGROUND: colors.text });
  schema.addAttribute("PUPPET_VARIABLE_INTERPOLATION", {
    FOREGROUND: colors.string,
  });
  schema.addAttribute("PY.BRACES", { FOREGROUND: colors.text });
  schema.addAttribute("PY.BRACKETS", { FOREGROUND: colors.text });
  schema.addAttribute("PY.BUILTIN_NAME", { FOREGROUND: colors.method });
  schema.addAttribute("PY.CLASS_DEFINITION", { FOREGROUND: colors.cyan });
  schema.addAttribute("PY.COMMA", { FOREGROUND: colors.text });
  schema.addAttribute("PY.DECORATOR", { FOREGROUND: colors.method });
  schema.addAttribute("PY.DOC_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("PY.DOT", { FOREGROUND: colors.text });
  schema.addAttribute("PY.FUNC_DEFINITION", { FOREGROUND: colors.method });
  schema.addAttribute("PY.INVALID_STRING_ESCAPE", { FOREGROUND: colors.method });
  schema.addAttribute("PY.KEYWORD", { FOREGROUND: colors.variable });
  schema.addAttribute("PY.LINE_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("PY.NUMBER", { FOREGROUND: colors.number });
  schema.addAttribute("PY.OPERATION_SIGN", { FOREGROUND: colors.keyword });
  schema.addAttribute("PY.PARENTHS", { FOREGROUND: colors.text });
  schema.addBaseAttribute("PY.PREDEFINED_DEFINITION", "TEXT");
  schema.addAttribute("PY.PREDEFINED_USAGE", { FOREGROUND: colors.method });
  schema.addAttribute("PY.STRING", { FOREGROUND: colors.string });
  schema.addAttribute("PY.VALID_STRING_ESCAPE", { FOREGROUND: colors.cyan });
  schema.addAttribute("REST.BOLD", { FONT_TYPE: "1" });
  schema.addAttribute("REST.EXPLICIT", { FOREGROUND: colors.keyword });
  schema.addAttribute("REST.FIELD", { FOREGROUND: colors.keyword });
  schema.addAttribute("REST.FIXED", { BACKGROUND: "48485F" });
  schema.addAttribute("REST.INLINE", { BACKGROUND: "273627" });
  schema.addAttribute("REST.INTERPRETED", { BACKGROUND: "4D5D3D" });
  schema.addAttribute("REST.ITALIC", { FONT_TYPE: "2" });
  schema.addAttribute("REST.LINE_COMMENT", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("REST.REF.NAME", { FOREGROUND: colors.string });
  schema.addAttribute("REST.SECTION.HEADER", { FOREGROUND: colors.number });
  schema.addAttribute("RHTML_COMMENT_ID", {
    FOREGROUND: colors.comment,
    FONT_TYPE: "2",
  });
  schema.addAttribute("RHTML_EXPRESSION_END_ID", { FOREGROUND: colors.text });
  schema.addAttribute("RHTML_EXPRESSION_START_ID", { FOREGROUND: colors.text });
  schema.addAttribute("RHTML_OMIT_NEW_LINE_ID", { FOREGROUND: colors.text });
  schema.addAttribute("RHTML_SCRIPTING_BACKGROUND_ID", {
    FOREGROUND: colors.text,
  });
  schema.addAttribute("RHTML_SCRIPTLET_END_ID", { FOREGROUND: colors.text });
  schema.addAttribute("RHTML_SCRIPTLET_START_ID", { FOREGROUND: colors.text });
  schema.addAttribute("RUBY_BAD_CHARACTER", { FOREGROUND: colors.method });
  schema.addAttribute("RUBY_BRACKETS", { FOREGROUND: colors.text });
  schema.addAttribute("RUBY_COLON", { FOREGROUND: colors.text });
  schema.addAttribute("RUBY_COMMA", { FOREGROUND: colors.text });
  schema.addAttribute("RUBY_COMMENT", { FOREGROUND: colors.comment, FONT_TYPE: "2" });
  schema.addAttribute("RUBY_CONSTANT", { FOREGROUND: colors.variable });
  schema.addAttribute("RUBY_CONSTANT_DECLARATION", { FOREGROUND: colors.cyan });
  schema.addAttribute("RUBY_CVAR", { FOREGROUND: colors.variable });
  schema.addAttribute("RUBY_DOT", { FOREGROUND: colors.text });
  schema.addAttribute("RUBY_ESCAPE_SEQUENCE", { FOREGROUND: colors.cyan });
  schema.addAttribute("RUBY_EXPR_IN_STRING", { FOREGROUND: colors.string });
  schema.addAttribute("RUBY_GVAR", { FOREGROUND: colors.variable });
  schema.addAttribute("RUBY_HASH_ASSOC", { FOREGROUND: colors.text });
  schema.addAttribute("RUBY_HEREDOC_CONTENT", { FOREGROUND: colors.string });
  schema.addAttribute("RUBY_HEREDOC_ID", { FOREGROUND: colors.text });
  schema.addAttribute("RUBY_IDENTIFIER", { FOREGROUND: colors.variable });
  schema.addAttribute("RUBY_INTERPOLATED_STRING", { FOREGROUND: colors.string });
  schema.addAttribute("RUBY_INVALID_ESCAPE_SEQUENCE", { FOREGROUND: colors.method });
  schema.addAttribute("RUBY_IVAR", { FOREGROUND: colors.variable });
  schema.addAttribute("RUBY_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("RUBY_LINE_CONTINUATION", { FOREGROUND: colors.keyword });
  schema.addAttribute("RUBY_LOCAL_VAR_ID", { FOREGROUND: colors.variable });
  schema.addAttribute("RUBY_METHOD_NAME", { FOREGROUND: colors.method });
  schema.addBaseAttribute("RUBY_NTH_REF", "TEXT");
  schema.addAttribute("RUBY_NUMBER", { FOREGROUND: colors.number });
  schema.addAttribute("RUBY_OPERATION_SIGN", { FOREGROUND: colors.keyword });
  schema.addAttribute("RUBY_PARAMDEF_CALL", { FOREGROUND: colors.method });
  schema.addAttribute("RUBY_PARAMETER_ID", { FOREGROUND: colors.number });
  schema.addAttribute("RUBY_REGEXP", { FOREGROUND: colors.cyan });
  schema.addAttribute("RUBY_SEMICOLON", { FOREGROUND: colors.text });
  schema.addAttribute("RUBY_SPECIFIC_CALL", { FOREGROUND: colors.variable });
  schema.addAttribute("RUBY_STRING", { FOREGROUND: colors.string });
  schema.addAttribute("RUBY_SYMBOL", { FOREGROUND: colors.string });
  schema.addAttribute("RUBY_WORDS", { FOREGROUND: colors.string });
  schema.addAttribute("SASS_COMMENT", { FOREGROUND: colors.comment, FONT_TYPE: "2" });
  schema.addAttribute("SASS_DEFAULT", { FOREGROUND: colors.keyword });
  schema.addAttribute("SASS_EXTEND", { FOREGROUND: colors.keyword });
  schema.addAttribute("SASS_FUNCTION", { FOREGROUND: colors.number });
  schema.addAttribute("SASS_IDENTIFIER", { FOREGROUND: colors.cyan });
  schema.addAttribute("SASS_IMPORTANT", { FOREGROUND: colors.keyword });
  schema.addAttribute("SASS_KEYWORD", { FOREGROUND: colors.keyword });
  schema.addAttribute("SASS_MIXIN", { FOREGROUND: colors.keyword });
  schema.addAttribute("SASS_NUMBER", { FOREGROUND: colors.number });
  schema.addAttribute("SASS_PROPERTY_NAME", { FOREGROUND: colors.cyan });
  schema.addAttribute("SASS_PROPERTY_VALUE", { FOREGROUND: colors.number });
  schema.addAttribute("SASS_STRING", { FOREGROUND: colors.string });
  schema.addAttribute("SASS_TAG_NAME", { FOREGROUND: colors.cyan });
  schema.addAttribute("SASS_URL", { FOREGROUND: colors.number });
  schema.addAttribute("SASS_VARIABLE", { FOREGROUND: colors.number });
  schema.addAttribute("SLIM_BAD_CHARACTER", { FOREGROUND: colors.method });
  schema.addBaseAttribute("SLIM_CALL", "SLIM_STATIC_CONTENT");
  schema.addAttribute("SLIM_CLASS", { FOREGROUND: colors.cyan });
  schema.addAttribute("SLIM_COMMENT", { FOREGROUND: colors.comment, FONT_TYPE: "2" });
  schema.addAttribute("SLIM_DOCTYPE_KWD", { FOREGROUND: colors.cyan });
  schema.addAttribute("SLIM_FILTER", { FOREGROUND: colors.cyan });
  schema.addBaseAttribute("SLIM_FILTER_CONTENT", "SLIM_STATIC_CONTENT");
  schema.addAttribute("SLIM_ID", { FOREGROUND: colors.cyan });
  schema.addAttribute("SLIM_INTERPOLATION", { FOREGROUND: colors.string });
  schema.addAttribute("SLIM_PARENTHS", { FOREGROUND: colors.text });
  schema.addBaseAttribute("SLIM_RUBY_CODE", "HAML_TEXT");
  schema.addBaseAttribute("SLIM_STATIC_CONTENT", "TEXT");
  schema.addAttribute("SLIM_STRING_INTERPOLATED", { FOREGROUND: colors.string });
  schema.addAttribute("SLIM_TAG", { FOREGROUND: colors.cyan });
  schema.addAttribute("SLIM_TAG_ATTR_KEY", { FOREGROUND: colors.keyword });
  schema.addAttribute("SLIM_TAG_START", { FOREGROUND: colors.text });
  schema.addAttribute("SPY-JS.EXCEPTION", {
    BACKGROUND: "DAD6E5",
    EFFECT_TYPE: "2",
    EFFECT_COLOR: colors.text,
  });
  schema.addAttribute("SPY-JS.FUNCTION_SCOPE", {
    BACKGROUND: "DAD6E5",
    EFFECT_TYPE: "2",
    EFFECT_COLOR: colors.text,
  });
  schema.addAttribute("SPY-JS.PATH_LEVEL_ONE", {
    BACKGROUND: "DAD6E5",
    EFFECT_TYPE: "2",
    EFFECT_COLOR: colors.text,
  });
  schema.addAttribute("SPY-JS.PATH_LEVEL_TWO", {
    EFFECT_TYPE: "1",
    EFFECT_COLOR: colors.text,
  });
  schema.addAttribute("SPY-JS.PROGRAM_SCOPE", {
    BACKGROUND: "DAD6E5",
    EFFECT_TYPE: "2",
    EFFECT_COLOR: colors.text,
  });
  schema.addBaseAttribute("SPY-JS.VALUE_HINT", "TEXT");
  
  schema.addAttribute("WRITE_IDENTIFIER_UNDER_CARET_ATTRIBUTES", {
    BACKGROUND: "472C47",
    ERROR_STRIPE_COLOR: "FFCDFF",
  });
  schema.addAttribute("XML_ATTRIBUTE_NAME", { FOREGROUND: colors.keyword });
  schema.addAttribute("XML_ATTRIBUTE_VALUE", { FOREGROUND: colors.string });
  schema.addAttribute("XML_ENTITY_REFERENCE", { FOREGROUND: colors.number });
  schema.addAttribute("XML_PROLOGUE", { FONT_TYPE: "2" });
  schema.addAttribute("XML_TAG", { FOREGROUND: colors.text });
  schema.addAttribute("XML_TAG_DATA", { FONT_TYPE: "1" });
  schema.addAttribute("XML_TAG_NAME", { FOREGROUND: colors.cyan });

  return schema;
}

module.exports = getSchema;
