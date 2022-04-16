// react
import type {
  ReactElement,
  ChangeEvent,
  JSXElementConstructor,
  ReactNode,
} from "react";
// mui
import type { DialogContentProps } from "@mui/material/DialogContent/DialogContent";
import type { DialogProps } from "@mui/material/Dialog/Dialog";
import type { ButtonProps } from "@mui/material/Button/Button";
import type { BoxProps } from "@mui/material/Box";
import type { PopoverProps } from "@mui/material/Popover";
import type { IconButtonProps } from "@mui/material/IconButton";
import type { TextFieldProps } from "@mui/material/TextField";
import type { SelectProps } from "@mui/material/Select";
import type { FormControlProps } from "@mui/material/FormControl";
import type { FormControlLabelProps } from "@mui/material/FormControlLabel";
import type { RadioProps } from "@mui/material/Radio";
import type { RadioGroupProps } from "@mui/material/RadioGroup";
import type { FormGroupProps } from "@mui/material/FormGroup";
import type { DatePickerProps } from "@mui/lab/DatePicker/DatePicker";
import type { DateTimePickerProps } from "@mui/lab/DateTimePicker/DateTimePicker";
import type { TimePickerProps } from "@mui/lab/TimePicker/TimePicker";
import type { TableCellProps } from "@mui/material/TableCell";
import type { TypographyProps } from "@mui/material/Typography";
import type { CardProps } from "@mui/material/Card";

// notistack
import type {
  OptionsObject as NotiStackOptionsObject,
  SnackbarMessage as NotiStackSnackbarMessage,
} from "notistack";

// querystring
import type { ParsedUrlQueryInput } from "querystring";

// material-ui-phone-number
import type { MuiPhoneNumberProps } from "material-ui-phone-number";

// recursive container
import type { Overwrite } from "./custom-models";
import type MaskInput from "react-input-mask";
import type { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import type { SliderProps } from "@mui/material/Slider";
import type { NumberFormatProps } from "react-number-format";

// redux

// auth
// #rbac-setup
export type ROLE = "admin" | "employee";
export type ROLES = ["admin", "employee"];
export interface AUTH_DATA<T = "admin"> {
  name: string;
  email: string;
  token: string;
  // #rbac-setup
  roles: ROLES;
  profile?: USER_PROFILE<T> | null;
}

export interface AUTH_STATE {
  isAuthenticated: boolean;
  isInitialized: boolean;
  data: AUTH_DATA | null;
}

export interface INITIALIZE_ACTION {
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}

export interface LOGIN_DATA {
  email: string;
  password: string;
}

export interface USER_PROFILE<T = "admin"> {
  name: string;
  email: string;
  image?: string | null;
}

// contexts
// sidebar-context
export interface SIDEBAR_CONTEXT {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

// components

// custom-table

type singleDataObject<T = {}> = { [key: string]: any } & T;

export type CUSTOM_TABLE_HEADING_PROPS = {
  isRowsSelected: boolean;
  selectedRows: CUSTOM_TABLE_PROPS["data"];
  isSelectable: boolean;
};

export interface CUSTOM_TABLE_PROPS {
  idAccessor?: string;
  data: Array<singleDataObject>;
  tableHeading?: React.FC<CUSTOM_TABLE_HEADING_PROPS> | string;
  tableHeadingProps?: any;
  isSelectable?: boolean;
  emptyMessage?: JSX.Element | string | null;
  columns: Array<{
    Header: JSX.Element | string | null;
    accessor: string;
    headerCellProps?: TableCellProps;
    bodyCellProps?: TableCellProps;
  }>;
  renderAs?: {
    [key: string]: React.FC<{
      value: any;
      Component: React.FC<TableCellProps>;
    }>;
  } | null;
  loading?: boolean;
}

export interface TABLE_HEADER_PROPS extends BoxProps {
  header?:
    | JSX.Element
    | string
    | null
    | {
        title: string | React.FC | JSX.Element;
        props?: TypographyProps & { [key: string]: any };
        containerProps?: BoxProps;
        description?:
          | JSX.Element
          | string
          | null
          | { title: string; props?: TypographyProps };
      };
  actions?: JSX.Element | string | null;
}

// custom-card

export interface CUSTOM_CARD_HEADER_PROPS extends TABLE_HEADER_PROPS {
  headerInsideCard?: boolean;
}

export interface CUSTOM_CARD_PROPS extends CardProps {
  cardHeader?: CUSTOM_CARD_HEADER_PROPS | null;
  loading?: boolean;
  containerProps?: BoxProps;
  cardBodyProps?: BoxProps;
}

// custom-icon-button props
interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

interface UrlObject {
  auth?: string | null | undefined;
  hash?: string | null | undefined;
  host?: string | null | undefined;
  hostname?: string | null | undefined;
  href?: string | null | undefined;
  pathname?: string | null | undefined;
  protocol?: string | null | undefined;
  search?: string | null | undefined;
  slashes?: boolean | null | undefined;
  port?: string | number | null | undefined;
  query?: string | null | ParsedUrlQueryInput | undefined;
  replace?: boolean;
}

export interface CUSTOM_ICON_BUTTON_PROPS
  extends Omit<IconButtonProps, "href"> {
  href?:
    | UrlObject
    | string
    | {
        url: UrlObject | string;
        as?: (UrlObject | string) | undefined;
        options?: (TransitionOptions & { replace?: boolean }) | undefined;
      };
}

// custom button props
export interface CUSTOM_BUTTON_PROPS extends Omit<ButtonProps, "href"> {
  loading?: boolean | null;
  href?:
    | UrlObject
    | string
    | {
        url: UrlObject | string;
        as?: (UrlObject | string) | undefined;
        options?: (TransitionOptions & { replace?: boolean }) | undefined;
      };
}

// custom-popover
export interface CUSTOM_POPOVER_PROPS
  extends Omit<PopoverProps, "open" | "ref"> {
  trigger?: { component: JSX.Element | null } | null;
  triggerContainerProps?: Omit<BoxProps, "ref">;
  open?: boolean;
  closeOnClick?: boolean;
}

// form-elements / recursive-container

// phone input props

export interface PHONE_INPUT_PROPS
  extends Omit<MuiPhoneNumberProps, "value" | "onChange"> {
  value?: string | number | null;
  pattern?: string | null;
  onChange?: (
    e: number | string
    // ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => any;
}

// phone input props

export interface SELECT_INPUT_PROPS
  extends Omit<SelectProps, "value" | "onChange" | "options" | "multiple"> {
  containerProps?: FormControlProps;
  value?: string | { value: any; label: any }[] | string[] | null;
  onChange?: (
    value: string | { value: any; label: any }[] | string[] | null
  ) => any;
  labelAccessor?: string;
  valueAccessor?: string;
  isString?: boolean;
  valueIsString?: boolean;
  optionIsString?: boolean;
  retriveOtherKeys?: boolean;
  helperText?: any;
  options:
    | {
        [
          label:
            | SELECT_INPUT_PROPS["labelAccessor"]
            | SELECT_INPUT_PROPS["valueAccessor"]
        ]: any;
      }[]
    | string[];
  formik?: any;
  multiple?: boolean;
}

// file input

export interface FILE_INPUT_PROPS {
  onChange?: (e: File | null) => any;
  value?: File | null;
  supportedFormats?: Array<string>;
  downloadName?: string;
  isDownloadable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  convertToBase64?: boolean;
  name?: string;
  containerProps?: BoxProps;
}

// slider props
export interface SLIDER_INPUT_PROPS extends SliderProps {
  containerProps?: BoxProps;
}

// checkbox input
export interface CHECKBOX_INPUT_PROPS extends CheckboxProps {
  containerProps?: Omit<FormControlLabelProps, "control" | "label">;
}
// checkbox-multiple input
export interface CHECKBOX_MULTIPLE_INPUT_PROPS {
  containerProps?: FormControlProps;
  checkboxInputsContainerProps?: FormGroupProps;
  orientation?: "row" | "column";
  name?: string;
  children: Omit<CHECKBOX_INPUT_FIELD_PROPS, "name">[];
  value?: object | Array<string> | Array<number> | null;
  label?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
  asArray?: boolean;
  className?: string;
  showSelectedOnly?: boolean;
}
// radio input
export interface RADIO_INPUT_PROPS extends Omit<RadioProps, "name"> {
  containerProps?: FormControlLabelProps;
  name?: string;
}
// radio-multiple input
export interface RADIO_MULTIPLE_INPUT_PROPS {
  containerProps?: FormControlProps;
  radioInputsContainerProps?: RadioGroupProps;
  orientation?: "row" | "column";
  name?: string;
  children: Omit<RADIO_INPUT_FIELD_PROPS, "name">[];
  value?: object | string | number | null;
  label?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
  asObject?: boolean;
  className?: string;
}

// date input
interface DATE_INPUT_PROPS
  extends Omit<DatePickerProps, "renderInput" | "onChange" | "value"> {
  value?: unknown;
  onChange?(date: unknown, keyboardInputValue?: string | undefined): void;
  renderInput?:
    | ((
        props: TextFieldProps
      ) => ReactElement<any, string | JSXElementConstructor<any>>)
    | { props: TextFieldProps };
  className?: string;
}
// date-time input
interface DATE_TIME_INPUT_PROPS
  extends Omit<DateTimePickerProps, "renderInput" | "onChange" | "value"> {
  value?: unknown;
  onChange?(date: unknown, keyboardInputValue?: string | undefined): void;
  renderInput?:
    | ((
        props: TextFieldProps
      ) => ReactElement<any, string | JSXElementConstructor<any>>)
    | { props: TextFieldProps };
  className?: string;
}
// time input
interface TIME_INPUT_PROPS
  extends Omit<TimePickerProps, "renderInput" | "onChange" | "value"> {
  value?: unknown;
  onChange?(date: unknown, keyboardInputValue?: string | undefined): void;
  renderInput?:
    | ((
        props: TextFieldProps
      ) => ReactElement<any, string | JSXElementConstructor<any>>)
    | { props: TextFieldProps };
  className?: string;
}
// component input props
interface COMPONENT_INPUT_PROPS {
  component: JSX.Element | string | null;
  containerProps?: BoxProps;
}
// number input props
type NUMBER_INPUT_PROPS = TextFieldProps & {
  containerProps?: NumberFormatProps<unknown>;
  saveAs?: "floatValue" | "formattedValue" | "value";
};
// masked-text input props
type MASKED_TEXT_PROPS = TextFieldProps & {
  containerProps?: MaskInput.Props;
};

// Recursive component

interface CONFIG_BASE {
  name?: string;
  label?: string | null;
}

// field
// interface FIELD_TYPE {
//   type?:
//     | "text"
//     | "password"
//     | "select"
//     | "email"
//     | "color"
//     | "number"
//     | "phone"
//     | "file"
//     | "array"
//     | "date"
//     | "checkbox"
//     | "radio"
//     | "radio-multiple"
//     | "image"
//     | "component"
//     | null;
// }

// type property for each field type component
interface TEXT_FIELD_TYPE {
  type?: "text" | "password" | "email" | "color" | "";
}
interface PHONE_FIELD_TYPE {
  type?: "phone";
}
interface SELECT_FIELD_TYPE {
  type?: "select";
}
interface FILE_INPUT_FIELD_TYPE {
  type?: "file";
}
interface CHECKBOX_INPUT_FIELD_TYPE {
  type?: "checkbox";
}
interface CHECKBOX_MULTIPLE_INPUT_FIELD_TYPE {
  type?: "checkbox-multiple";
}
interface RADIO_INPUT_FIELD_TYPE {
  type?: "radio";
}
interface RADIO_MULTIPLE_INPUT_FIELD_TYPE {
  type?: "radio-multiple";
}
interface DATE_INPUT_FIELD_TYPE {
  type?: "date";
}
interface DATE_TIME_INPUT_FIELD_TYPE {
  type?: "date-time";
}
interface TIME_INPUT_FIELD_TYPE {
  type?: "time";
}
interface COMPONENT_INPUT_FIELD_TYPE {
  type?: "component";
}
interface NUMBER_INPUT_FIELD_TYPE {
  type?: "number";
}
interface MASKED_TEXT_FIELD_TYPE {
  type?: "masked-text";
}
interface SLIDER_INPUT_FIELD_TYPE {
  type?: "slider";
}

// text field
type TEXT_FIELD_PROPS = Overwrite<
  TextFieldProps & CONFIG_BASE,
  TEXT_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: null | {
    position?: "end" | "start" | null;
    component: null | ReactElement;
  };
};
// phone field
type PHONE_FIELD_PROPS = Overwrite<
  PHONE_INPUT_PROPS & CONFIG_BASE,
  PHONE_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: null | {
    position?: "end" | "start" | null;
    component: null | ReactElement;
  };
};
// select field
type SELECT_FIELD_PROPS = Overwrite<
  SELECT_INPUT_PROPS & CONFIG_BASE,
  SELECT_FIELD_TYPE
>;
// & {
//   // other manually defined properties
//   addon?: null | {
//     position?: "end" | "start" | null;
//     component: null | ReactElement;
//   };
// };

// file field
type FILE_INPUT_FIELD_PROPS = Overwrite<
  FILE_INPUT_PROPS & CONFIG_BASE,
  FILE_INPUT_FIELD_TYPE
>;
// checkbox field
type CHECKBOX_INPUT_FIELD_PROPS = Overwrite<
  CHECKBOX_INPUT_PROPS & CONFIG_BASE,
  CHECKBOX_INPUT_FIELD_TYPE
>;
// checkbox-multiple field
type CHECKBOX_MULTIPLE_INPUT_FIELD_PROPS = Overwrite<
  CHECKBOX_MULTIPLE_INPUT_PROPS & CONFIG_BASE,
  CHECKBOX_MULTIPLE_INPUT_FIELD_TYPE
>;
// radio field
type RADIO_INPUT_FIELD_PROPS = Overwrite<
  RADIO_INPUT_PROPS & CONFIG_BASE,
  RADIO_INPUT_FIELD_TYPE
>;
// radio-multiple field
type RADIO_MULTIPLE_INPUT_FIELD_PROPS = Overwrite<
  RADIO_MULTIPLE_INPUT_PROPS & CONFIG_BASE,
  RADIO_MULTIPLE_INPUT_FIELD_TYPE
>;
// date field
type DATE_INPUT_FIELD_PROPS = Overwrite<
  DATE_INPUT_PROPS & CONFIG_BASE,
  DATE_INPUT_FIELD_TYPE
>;
// date-time field
type DATE_TIME_INPUT_FIELD_PROPS = Overwrite<
  DATE_TIME_INPUT_PROPS & CONFIG_BASE,
  DATE_TIME_INPUT_FIELD_TYPE
>;
// time field
type TIME_INPUT_FIELD_PROPS = Overwrite<
  TIME_INPUT_PROPS & CONFIG_BASE,
  TIME_INPUT_FIELD_TYPE
>;
// component type
type COMPONENT_FIELD_PROPS = Overwrite<
  COMPONENT_INPUT_PROPS & CONFIG_BASE,
  COMPONENT_INPUT_FIELD_TYPE
>;
// slider type
type SLIDER_FIELD_PROPS = Overwrite<
  SLIDER_INPUT_PROPS & CONFIG_BASE,
  SLIDER_INPUT_FIELD_TYPE
>;
// number field
type NUMBER_FIELD_PROPS = Overwrite<
  NUMBER_INPUT_PROPS & CONFIG_BASE,
  NUMBER_INPUT_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: null | {
    position?: "end" | "start" | null;
    component: null | ReactElement;
  };
};
// masked-text field
type MASKED_TEXT_FIELD_PROPS = Overwrite<
  MASKED_TEXT_PROPS & CONFIG_BASE,
  MASKED_TEXT_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: null | {
    position?: "end" | "start" | null;
    component: null | ReactElement;
  };
};

// field props
export type FIELD_PROPS = (
  | TEXT_FIELD_PROPS
  | PHONE_FIELD_PROPS
  | SELECT_FIELD_PROPS
  | FILE_INPUT_FIELD_PROPS
  | CHECKBOX_INPUT_FIELD_PROPS
  | CHECKBOX_MULTIPLE_INPUT_FIELD_PROPS
  | RADIO_INPUT_FIELD_PROPS
  | RADIO_MULTIPLE_INPUT_FIELD_PROPS
  | DATE_INPUT_FIELD_PROPS
  | DATE_TIME_INPUT_FIELD_PROPS
  | TIME_INPUT_FIELD_PROPS
  | COMPONENT_FIELD_PROPS
  | NUMBER_FIELD_PROPS
  | MASKED_TEXT_FIELD_PROPS
  | SLIDER_FIELD_PROPS
) & {
  // other manually defined properties
  validationSchema?: any;
  formik?: any;
  isRequired?: boolean | null;
};

export type CONFIG_TYPE = FIELD_PROPS[];

export interface RECURSIVE_CONTAINER_PROPS {
  config: CONFIG_TYPE;
  formik: any;
  validationSchema?: any;
  formContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  formContainer?: null | React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > & { form: ReactElement<any, any> }
  >;
}

// layouts
// extended-sidebar-layout

export interface EXTENDED_SIDEBAR_LAYOUT_PROPS {
  headerProps?: HEADER_PROPS;
  sidebarRoutes?: SIDEBAR_MENU_ITEMS_STRUCTURE;
}

export interface SIDEBAR_MENU_ITEM_STRUCTURE {
  link?: string;
  label?: string;
  icon?: React.ReactNode;
  items?: SIDEBAR_MENU_ITEM_STRUCTURE[];
}

export type SIDEBAR_MENU_ITEMS_STRUCTURE = {
  heading?: string;
  items?: SIDEBAR_MENU_ITEM_STRUCTURE[];
}[];

// header
interface HEADER_USER_ACTION extends CUSTOM_BUTTON_PROPS {
  label?: string | JSX.Element;
}
export type HEADER_USER_ACTIONS = HEADER_USER_ACTION[];

export interface HEADER_PROPS {
  avatar?: {
    image?: string | null;
    name?: string;
    email?: string;
    actions?: HEADER_USER_ACTIONS;
    logout?: (params: any) => any;
  };
}

// ----------------------------------------------------------- //

// custom-event-models

// flash event
export interface FLASH_EVENT_PROPS extends NotiStackOptionsObject {
  message?: NotiStackSnackbarMessage;
}

// popup event
export interface POPUP_EVENT_PROPS {
  title?: string;
  message?: string;
  type?: "success" | "error";
  closeButton?: {
    label: string;
    onClick: Function;
  };
  onConfirm?: Function;
  onCancel?: Function;
  component?: ReactNode;
}

// modal event
interface MODAL_CONTAINER_PROPS extends Omit<DialogProps, "open"> {
  closeOnClick?: boolean;
  open?: boolean;
}
export interface MODAL_EVENT_PROPS_1 {
  containerProps?: MODAL_CONTAINER_PROPS;
  contentContainerProps?: DialogContentProps;
  component?: CUSTOM_MODAL_COMPONENT;
  type?: "custom";
}
export interface MODAL_EVENT_PROPS_2 extends CONFIRMATION_MODAL_PROPS {
  containerProps?: MODAL_CONTAINER_PROPS;
  contentContainerProps?: DialogContentProps;
  type?: "confirmation";
}

export type MODAL_EVENT_PROPS = MODAL_EVENT_PROPS_1 | MODAL_EVENT_PROPS_2;

export interface CONFIRMATION_MODAL_PROPS {
  onConfirm?: Function;
  onCancel?: Function;
  title?: JSX.Element | string | null;
  description?: JSX.Element | string | null;
  confirmButton?:
    | JSX.Element
    | { label: any; props?: CUSTOM_BUTTON_PROPS }
    | null;
  cancelButton?:
    | JSX.Element
    | { label: any; props?: CUSTOM_BUTTON_PROPS }
    | null;
}

export type CUSTOM_MODAL_COMPONENT = React.FC<{ onCancel: Function }>;
export interface CUSTOM_MODAL_COMPONENT_PROPS {
  [key: string]: any;
  onCancel: Function;
}

declare global {
  interface Window {
    flash: (params: FLASH_EVENT_PROPS) => any;
    modal: (params: MODAL_EVENT_PROPS) => any;
    popup: (params: POPUP_EVENT_PROPS) => any;
  }
}

// --------------------------------------------------------------------------- //

// hooks
///// auth
export interface USE_AUTH_OPTIONS {
  updateRedux?: boolean;
}

export interface LOGIN_AUTH_PROPS {
  email: string;
  password: string;
}

// ---------------------------------------------------------------------------- //

// employees
export type EMPLOYEE_DETAILS = {
  name: string;
  email: string;
  password: string;
  _id: string;
  phone: string;
  role: ROLE;
};
export type ADD_EMPLOYEE = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: ROLE;
};
export type EDIT_EMPLOYEE = Partial<EMPLOYEE_DETAILS>;
export type EMPLOYEES = EMPLOYEE_DETAILS[];

// place
export type PLACE_DETAILS = {
  name: string;
  _id: string;
};
export type ADD_PLACE = {
  name: string;
};
export type EDIT_PLACE = Partial<PLACE_DETAILS>;
export type PLACES = PLACE_DETAILS[];

// custom-models
export * from "./custom-models";
