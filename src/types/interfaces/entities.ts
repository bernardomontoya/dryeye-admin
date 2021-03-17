import {
  EntityType,
  InputType,
  MaskType,
  FieldGroupType,
  SelectAutocompleteList,
  ColumnsKey,
} from "../commons/commons";

export interface Column {
  column: string;
  label: string;
  type: "text" | "number" | "date" | "boolean";
  sort: boolean;
}

export interface FieldSet {
  id: string;
  label: string;
  placeholder: string;
  type: InputType;
  list?: SelectAutocompleteList;
  dependsOf?: SelectAutocompleteList;
  mask?: MaskType;
  group: FieldGroupType;
}

export interface FieldSetGroup {
  id: string;
  label: string;
}

export interface DashboardLang {
  title: string;
  searchBar: string;
  addEntityButton: string;
}

export interface FormLang {
  createEntityTitle: string;
  createEntityButton: string;
  updateEntityTitle(name: string): string;
  updateEntityButton: string;
}

export interface Entity {
  id: EntityType;
  label: string;
  route: string;
  columnsKey: ColumnsKey;
  columns: Column[];
  fieldSet: FieldSet[];
  fieldSetGroups: FieldSetGroup[];
  lang: {
    dashboard: DashboardLang;
    form: FormLang;
    dialogs: {
      deleteEntityTitle: string;
      deleteEntityDescription: string;
    };
    userFeedback: {
      entityCreatedTitle: string;
      entityCreatedDescription(name: string): string;
      entityUpdatedTitle: string;
      entityUpdatedDescription(name: string): string;
      entityDeletedTitle: string;
      entityDeletedDescription(name: string): string;
    };
  };
}
