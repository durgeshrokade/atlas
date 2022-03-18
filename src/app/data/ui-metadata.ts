import { CommonConstants } from '../shared/constants';
import { InputForm, RecordInput, SingleSectionTab } from '../shared/interfaces';

const getInputForms = () => {
  const inputForms: InputForm[] = [
    {
      label: 'Step 1',
      inputRecordsToAccept: [
        {
          type: CommonConstants.numberType,
          label: 'FICO',
          isMandatory: true,
        },
        {
          type: CommonConstants.dropdownType,
          label: 'Loan Purpose',
          isMandatory: true,
          valueToBind: ['Purchase', 'Delayed Purchase', 'Cash Out'],
        },
        {
          type: CommonConstants.numberType,
          label: 'Experience',
          isMandatory: true,
          infoMessage: "No. properties currently under management"
        },
        {
          type: CommonConstants.dropdownType,
          label: 'Property Type',
          isMandatory: false,
          valueToBind: ['SFR', 'Condo', '2-4 Unit', '5+ Units'],
        },
        {
          type: CommonConstants.currencyType,
          label: 'Appraised Value',
          isMandatory: true,
        },
        {
          type: CommonConstants.currencyType,
          label: 'Purchase Price',
          isMandatory: false,
        },
        {
          type: CommonConstants.numberType,
          label: 'No. Units',
          isMandatory: false,
        },
        {
          type: CommonConstants.numberType,
          label: 'Zip Code',
          isMandatory: false,
        },
        {
          type: CommonConstants.numberType,
          label: 'Acquisition Date',
          isMandatory: false,
        },
      ] as RecordInput[],
    },
    {
      label: 'Step 2',
      disabledDiv: true,
      inputRecordsToAccept: [
        {
          type: CommonConstants.currencyType,
          label: 'Loan Amount',
          isMandatory: false,
        },
        {
          type: CommonConstants.dropdownType,
          label: 'PPP Type',
          isMandatory: true,
          valueToBind: ['Hard', 'Declining', '1%'],
          infoMessage: "The penalty is the same all years"
        },
        {
          type: CommonConstants.dropdownType,
          label: 'PPP Term',
          isMandatory: true,
          valueToBind: ['60 Mos.', '48 Mos.', '36 Mos.', '24 Mos.', '12 Mos.', 'No PPP'],
        },
        {
          type: CommonConstants.currencyType,
          label: 'Annaul Taxes',
          isMandatory: true,
        },
        {
          type: CommonConstants.currencyType,
          label: 'Annual HOI',
          isMandatory: true,
        },
        {
          type: CommonConstants.currencyType,
          label: 'Annual Other',
          isMandatory: false,
          infoMessage: "HOA, Flood, Management Fees"
        },
        {
          type: CommonConstants.numberType,
          label: 'Orig. Pts',
          isMandatory: false,
        },
        {
          type: CommonConstants.numberType,
          label: 'Broker Pts',
          isMandatory: false,
        },
        {
          type: CommonConstants.currencyType,
          label: 'Other Costs',
          isMandatory: false,
          infoMessage: "$1,250 Processing & Underwriting + est. $2,500 other fees + est. 1% for title"
        },
      ] as RecordInput[],
    },
    {
      label: 'Property Economics',
      disabledDiv: true,
      twoColumnLayout: true,
      inputRecordsToAccept: [
        {
          type: CommonConstants.currencyType,
          label: 'Market Rent',
          isMandatory: false,
        },
        {
          type: CommonConstants.currencyType,
          label: 'In-Place Rent',
          isMandatory: false,
        },
        {
          type: CommonConstants.numberType,
          label: 'Sq Ft',
          isMandatory: false,
        },
        {
          type: CommonConstants.dropdownType,
          label: 'Lease Type',
          isMandatory: false,
        },
      ] as RecordInput[],
    },
  ];
  return inputForms;
};

export const data = [
  {
    inputFormsToAccept: getInputForms(),
    singleSectionName: { key: 'ltr', labelValue: 'LTR' }
  },
  {
    inputFormsToAccept: getInputForms(),
    singleSectionName: { key: 'bridgeLoan', labelValue: 'Bridge Loan' }
  }
] as SingleSectionTab[];
