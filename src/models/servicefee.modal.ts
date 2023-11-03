import { model, Schema, Types } from 'mongoose';

export interface IAmount {
  OneTime: number;
  Weekly: number;
  BiWeeks: number;
  TriWeeks: number;
  Monthly: number;
  Days45: number;
  BiMonthly: number;
  Quarterly: number;
  InstallmentWise: number;
  HalfYearly: number;
  Yearly: number;
}

export interface IServiceFeePlan {
  PlanName: string;
  SubscriberTypes: string;
  ApplicationPlanDate: Date;
  ProviderName: string;
  Location: string;
  FeeAccountName: string;
  Amount: IAmount;
}

export const AmountSchema = new Schema<IAmount>(
  {
    OneTime: { type: 'Number', required: true },
    Weekly: { type: 'Number', required: true },
    BiWeeks: { type: 'Number', required: true },
    TriWeeks: { type: 'Number', required: true },
    Monthly: { type: 'Number', required: true },
    Days45: { type: 'Number', required: true },
    BiMonthly: { type: 'Number', required: true },
    Quarterly: { type: 'Number', required: true },
    InstallmentWise: { type: 'Number', required: true },
    HalfYearly: { type: 'Number', required: true },
    Yearly: { type: 'Number', required: true },
  },
  { timestamps: true }
);

export const ServiceFeePlanSchema = new Schema<IServiceFeePlan>(
  {
    PlanName: { type: 'String', required: true },
    SubscriberTypes: { type: 'String', required: true },
    ApplicationPlanDate: { type: 'Date', required: true },
    ProviderName: { type: 'String', required: true },
    Location: { type: 'String', required: true },
    FeeAccountName: { type: 'String', required: true },
    Amount: { type: AmountSchema, required: true },
  },
  { timestamps: true }
);

export const ServiceFeePlan = model<IServiceFeePlan>(
  'ServiceFeePlan',
  ServiceFeePlanSchema
);
