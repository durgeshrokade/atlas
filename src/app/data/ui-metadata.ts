import { CommonConstants } from '../shared/constants';
import { InputForm, RecordInput, SingleSectionTab } from '../shared/interfaces';

const getInputForms = () => {
  const inputForms: InputForm[] = [
    {
      label: 'Loan Information',
      inputRecordsToAccept: [
        {
          type: CommonConstants.numberType,
          label: 'Interest Rate',
          isMandatory: true,
        },
        {
          type: CommonConstants.numberType,
          label: 'Loan Amount',
          isMandatory: true,
        },
        {
          type: CommonConstants.dropdownType,
          label: 'Loan Purpose',
          isMandatory: true,
          valueToBind: ['Cashout', 'Cashout2', 'Cashout3'],
        },
        {
          type: CommonConstants.numberType,
          label: 'FICO',
          isMandatory: false,
        },
        {
          type: CommonConstants.dropdownType,
          label: 'PPP',
          isMandatory: true,
          valueToBind: ['Cashout', 'Cashout2', 'Cashout3'],
        },
        {
          type: CommonConstants.percentType,
          label: 'Origination %',
          isMandatory: false,
        },
        {
          type: CommonConstants.percentType,
          label: 'Broker %',
          isMandatory: false,
        },
      ] as RecordInput[],
    },
    {
      label: 'Property Details',
      inputRecordsToAccept: [
        {
          type: CommonConstants.dropdownType,
          label: 'Property Type',
          isMandatory: false,
          valueToBind: ['SFR', 'SFR2', 'SFR3'],
        },
        {
          type: CommonConstants.numberType,
          label: '# of Units',
          isMandatory: true,
        },
        {
          type: CommonConstants.numberType,
          label: 'Zip Code',
          isMandatory: true,
        },
        {
          type: CommonConstants.numberType,
          label: 'Appraised Value',
          isMandatory: true,
        },
        {
          type: CommonConstants.numberType,
          label: 'UPB',
          isMandatory: true,
        },
        {
          type: CommonConstants.numberType,
          label: 'Annual Taxes',
          isMandatory: false,
        },
        {
          type: CommonConstants.currencyType,
          label: 'Annual HOI',
          isMandatory: false,
        },
        {
          type: CommonConstants.currencyType,
          label: 'Annual Other',
          isMandatory: false,
        },
      ] as RecordInput[],
    },
    {
      label: 'Property Economics',
      inputRecordsToAccept: [
        {
          type: CommonConstants.numberType,
          label: 'Market Rent',
          isMandatory: false,
        },
        {
          type: CommonConstants.numberType,
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
