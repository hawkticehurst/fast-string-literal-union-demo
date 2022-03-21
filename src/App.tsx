import {
  VSCodeDataGrid,
  VSCodeDataGridCell,
  VSCodeDataGridRow,
  VSCodeDivider,
  VSCodeDropdown,
  VSCodeOption,
  VSCodeRadio,
  VSCodeRadioGroup,
  VSCodeTextArea,
  VSCodeTextField,
} from "@vscode/webview-ui-toolkit/react";
import {
  DataGridCellTypes,
  DataGridRowTypes,
  DividerRole,
  DropdownPosition,
  GenerateHeaderOptions,
  RadioGroupOrientation,
  TextAreaResize,
  TextFieldType,
} from "@vscode/webview-ui-toolkit";
import './App.css';

function App() {
  return (
    <main>
      <h1>Demo With Enums</h1>
      <VSCodeDataGrid generate-header={GenerateHeaderOptions.none}>
        <VSCodeDataGridRow row-type={DataGridRowTypes.header}>
          <VSCodeDataGridCell cell-type={DataGridCellTypes.columnHeader} grid-column="1">
            Header 1
          </VSCodeDataGridCell>
          <VSCodeDataGridCell cell-type={DataGridCellTypes.columnHeader} grid-column="2">
            Header 2
          </VSCodeDataGridCell>
        </VSCodeDataGridRow>
        <VSCodeDataGridRow>
          <VSCodeDataGridCell grid-column="1">Cell Data</VSCodeDataGridCell>
          <VSCodeDataGridCell grid-column="2">Cell Data</VSCodeDataGridCell>
        </VSCodeDataGridRow>
      </VSCodeDataGrid>
      <VSCodeDivider role={DividerRole.separator}></VSCodeDivider>
      <VSCodeDropdown position={DropdownPosition.below} open>
        <VSCodeOption>Item 1</VSCodeOption>
        <VSCodeOption>Item 2</VSCodeOption>
        <VSCodeOption>Item 3</VSCodeOption>
      </VSCodeDropdown>
      <VSCodeRadioGroup orientation={RadioGroupOrientation.vertical}>
        <label slot="label">Radio Group Label</label>
        <VSCodeRadio>Radio Label</VSCodeRadio>
        <VSCodeRadio>Radio Label</VSCodeRadio>
      </VSCodeRadioGroup>
      <VSCodeTextArea resize={TextAreaResize.both}>Text Area Label</VSCodeTextArea>
      <VSCodeTextField type={TextFieldType.password}>Text Field Label</VSCodeTextField>
      
      <h1>Demo With String Literals</h1>
      <VSCodeDataGrid generate-header="none">
        <VSCodeDataGridRow row-type="header">
          <VSCodeDataGridCell cell-type="columnheader" grid-column="1">
            Header 1
          </VSCodeDataGridCell>
          <VSCodeDataGridCell cell-type="columnheader" grid-column="2">
            Header 2
          </VSCodeDataGridCell>
        </VSCodeDataGridRow>
        <VSCodeDataGridRow>
          <VSCodeDataGridCell grid-column="1">Cell Data</VSCodeDataGridCell>
          <VSCodeDataGridCell grid-column="2">Cell Data</VSCodeDataGridCell>
        </VSCodeDataGridRow>
      </VSCodeDataGrid>
      <VSCodeDivider role="separator"></VSCodeDivider>
      <VSCodeDropdown position="below" open>
        <VSCodeOption>Item 1</VSCodeOption>
        <VSCodeOption>Item 2</VSCodeOption>
        <VSCodeOption>Item 3</VSCodeOption>
      </VSCodeDropdown>
      <VSCodeRadioGroup orientation="vertical">
        <label slot="label">Radio Group Label</label>
        <VSCodeRadio>Radio Label</VSCodeRadio>
        <VSCodeRadio>Radio Label</VSCodeRadio>
      </VSCodeRadioGroup>
      <VSCodeTextArea resize="both">Text Area Label</VSCodeTextArea>
      <VSCodeTextField type="password">Text Field Label</VSCodeTextField>
    </main>
  );
}

export default App;
