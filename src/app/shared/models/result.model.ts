interface attributes {
  amount: number;
  unit: string;
  type?: string;
  timeUnit?: string;
  caption: {
    text: string;
  };
  content: {
    text: string;
  };
}

interface signupAttributes {
  url: string;
  caption: {
    text: string;
  };
  content: {
    text: string;
  };
}

interface remarks {
  type: string;
  isOneTimeBonusType: boolean;
  printHeaderInBold: boolean;
  highlightMode: number;
  caption: {
    text: string;
  };
  content: {
    tooltip: {
      header: string;
      body: string;
    };
  };
}

interface contracTerms {
  canBeCancelled: boolean;
  baseFee: attributes;
  timeFrame: {
    startMonth: number;
    endMonth: number;
  };
  cancellationPeriod: attributes;
}

interface options {
  costsIncluded: boolean;
  type: string;
  subType: string;
  optionId: string;
  isMandatory: boolean;
  caption: {
    text: string;
  };
  content: {
    text: string;
  };
  costDetails: {
    oneTimeCost: attributes[];
    recurringCost: attributes[];
  };
  contractTerms: contracTerms[];
  shortRemark: string;
  remark: string;
}

export interface resultModel {
  rank: number;
  provider: {
    id: number;
    logoUrl: string;
    caption: {
      text: string;
    };
    content: {
      text: string;
    };
  };
  product: {
    id: number;
    hasPhoneFlatrate: boolean;
    isTHomeAccess: boolean;
    isForStudents: boolean;
    positionZeroStatus: number;
    isSpecialOffer: boolean;
    isForBusinessCustomers: boolean;
    caption: {
      text: string;
    };
    content: {
      text: string;
    };
    accessModes: {
      accessMode: {
        type: string;
      };
    };
    numberOfPhoneLines: number;
    numberOfPhoneNumbers: number;
  };
  contractTerm: {
    downloadSpeed: attributes;
    uploadSpeed: attributes;
    contractDuration: attributes;
    cancellationPeriod: attributes;
    prolongationPeriod: attributes;
    flatrates: {
      flatrates: { type: string }[];
    };
  };
  signup: {
    desktop: signupAttributes;
    responsive: signupAttributes;
  };
  campaign: {
    campaignId: number;
    campaignEndDate: Date;
    campaignSavingsTooltip: string;
    campaignSavings: attributes;
  };
  cost: {
    effectiveCost: attributes;
  };
  remarks: remarks[];
  additionalOptions: {
    options: options[];
    additionalOptionsCostExplanation: attributes;
  };
  requiresAvailabilityCheck: boolean;
}

export interface resultList {
  totalResults: number;
  offers: resultModel[];
}
