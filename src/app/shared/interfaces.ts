// showing tab values 
export interface SingleSectionName {
  key: string;
  labelValue: string;
}

// single tab section
export interface SingleSectionTab {
    singleSectionName: SingleSectionName;
    inputFormsToAccept: InputForm[];
    ViewOnlyFormsToAccept: ViewOnlyForm[];
}

// single input form in the tab
export interface InputForm {
    label: string;
    inputRecordsToAccept: RecordInput[];
}

// single view only form in the tab
export interface ViewOnlyForm {
    viewOnlyRecordsToShow: ViewRecordsForm[];
}

// single record input in the form
export interface RecordInput {
    type: string;
    label: string;
    isMandatory: boolean;
    valueToBind?: any;
}

// view only record TODO
export interface ViewRecordsForm {
    [key:string]: string;
}