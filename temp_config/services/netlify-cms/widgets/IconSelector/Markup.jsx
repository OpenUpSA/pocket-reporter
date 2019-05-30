"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var styled_components_1 = __importDefault(require("styled-components"));
var iconsObject_1 = __importDefault(require("./iconsObject"));
var Wrapper = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  box-shadow: none;\n  background-color: rgb(255, 255, 255);\n  color: rgb(68, 74, 87);\n  position: relative;\n  font-size: 15px;\n  line-height: 1.5;\n  margin: 0px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgb(223, 223, 227);\n  border-image: initial;\n  border-radius: 0px 5px 5px;\n  outline: 0px;\n  transition: border-color 0.2s ease 0s;\n"], ["\n  display: inline-block;\n  box-shadow: none;\n  background-color: rgb(255, 255, 255);\n  color: rgb(68, 74, 87);\n  position: relative;\n  font-size: 15px;\n  line-height: 1.5;\n  margin: 0px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgb(223, 223, 227);\n  border-image: initial;\n  border-radius: 0px 5px 5px;\n  outline: 0px;\n  transition: border-color 0.2s ease 0s;\n"])));
var StyledSelect = styled_components_1.default(Select_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & .select {\n    padding: 14px 28px !important;\n  }\n\n  &::before {\n    border: 0px solid transparent !important;\n  }\n"], ["\n  & .select {\n    padding: 14px 28px !important;\n  }\n\n  &::before {\n    border: 0px solid transparent !important;\n  }\n"])));
var buildIcons = function (icons) {
    return Object.keys(icons).map(function (key) {
        var Icon = icons[key];
        return (<MenuItem_1.default value={key}>
        <Icon />
      </MenuItem_1.default>);
    });
};
var Markup = function (_a) {
    var value = _a.value, onChange = _a.handleChange;
    return (<div>
    <Wrapper>
      <FormControl_1.default>
        <StyledSelect {...{ onChange: onChange, value: value }} classes={{ select: 'select' }}>
          {buildIcons(iconsObject_1.default)}
        </StyledSelect>
      </FormControl_1.default>
    </Wrapper>
  </div>);
};
exports.default = Markup;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Markup.jsx.map