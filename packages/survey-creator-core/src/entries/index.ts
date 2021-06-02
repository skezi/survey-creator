export let Version: string;
Version = `${process.env.VERSION}`;

export { enStrings } from "../localization/english";
export { editorLocalization, defaultStrings } from "../editorLocalization";
export { editorLocalization as localization } from "../editorLocalization";
export * from "../settings";

export * from "../creator-base";

export * from "../components/tabs/embed";
export * from "../components/tabs/json-editor-ace";
export * from "../components/tabs/json-editor-plugin";
export * from "../components/tabs/json-editor-textarea";
export * from "../components/tabs/test";
export * from "../components/tabs/logic";
export * from "../components/tabs/logic-ui";
export * from "../components/tabs/translation";
export * from "../components/tabs/designer";

export * from "../components/toolbox/toolbox-item";
export * from "../components/page-navigator/page-navigator";
export * from "../components/page";
export * from "../components/row";
export * from "../components/question";
export * from "../components/question-image";
export * from "../components/item-value";
export * from "../components/image-item-value";
export * from "../components/simulator";
export * from "../components/results";
export * from "../json5";
export * from "../property-grid";
export * from "../property-grid/condition";
export * from "../property-grid/matrices";
export * from "../property-grid/property-grid-view-model";
//export * from "../property-grid/modal-action";
export * from "../property-grid/restfull";
export * from "../property-grid/values";
export { propertyGridCss } from "../property-grid-theme/property-grid";
export * from "../questionconverter";
export * from "../svgbundle";
export * from "../textWorker";
export * from "../toolbox";
export * from "../utils/events";
export * from "../utils/utils";
export * from "../questionEditors/questionEditorDefinition";

import "../components/button.scss";
import "../components/property-panel/property-panel-item.scss";
import "../components/property-panel/property-panel.scss";
import "../components/tabbed-menu/tabbed-menu-item.scss";
import "../components/tabbed-menu/tabbed-menu.scss";
import "../components/toolbox/toolbox-item.scss";
import "../components/button.scss";
import "../components/question-dropdown.scss";
import "../components/toolbox/toolbox.scss";
import "../property-grid-theme/property-grid.scss";
import "../utils/design.scss";
import "../utils/layout.scss";

//localization
import "../localization/danish";
import "../localization/french";
import "../localization/german";
import "../localization/italian";
import "../localization/indonesian";
import "../localization/korean";
import "../localization/persian";
import "../localization/polish";
import "../localization/portuguese";
import "../localization/simplified-chinese";
import "../localization/spanish";
import "../localization/swedish";
import "../localization/traditional-chinese";
import "../localization/turkish";
import "../localization/norwegian";
import "../localization/hungarian";
import "../localization/russian";
import "../localization/tajik";
import "../localization/dutch";
import "../localization/croatian";

import { settings } from "survey-core";
settings.supportCreatorV2 = true;
