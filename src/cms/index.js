import CMS from "netlify-cms";


import IconSelector from "./widgets/IconSelector";
import IconSelectorMarkup from "./widgets/IconSelector/Markup";


CMS.registerWidget("icon-selector", IconSelector, IconSelectorMarkup);