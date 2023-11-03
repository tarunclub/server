import { Request, Response } from 'express';
import { ServiceFeePlan } from '../models/servicefee.modal';

export const addServiceFee = async (req: Request, res: Response) => {
  try {
    const {
      PlanName,
      SubscriberTypes,
      ApplicationPlanDate,
      ProviderName,
      Location,
      FeeAccountName,
      Amount,
    } = req.body;

    const servicefee = await ServiceFeePlan.create({
      PlanName,
      SubscriberTypes,
      ApplicationPlanDate,
      ProviderName,
      Location,
      FeeAccountName,
      Amount,
    });

    res.status(201).json({ servicefee });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getServiceFees = async (req: Request, res: Response) => {
  try {
    const servicefees = await ServiceFeePlan.find();

    res.status(200).json({ servicefees });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getServiceFee = async (req: Request, res: Response) => {
  try {
    const servicefee = await ServiceFeePlan.findById(req.params.id);

    res.status(200).json({ servicefee });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateServiceFee = async (req: Request, res: Response) => {
  try {
    const {
      PlanName,
      SubscriberTypes,
      ApplicationPlanDate,
      ProviderName,
      Location,
      FeeAccountName,
      Amount,
    } = req.body;

    const servicefee = await ServiceFeePlan.findById(req.params.id);

    if (servicefee) {
      servicefee.PlanName = PlanName;
      servicefee.SubscriberTypes = SubscriberTypes;
      servicefee.ApplicationPlanDate = ApplicationPlanDate;
      servicefee.ProviderName = ProviderName;
      servicefee.Location = Location;
      servicefee.FeeAccountName = FeeAccountName;
      servicefee.Amount = Amount;

      const updatedServiceFee = await servicefee.save();

      res.status(200).json({ servicefee: updatedServiceFee });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteServiceFee = async (req: Request, res: Response) => {
  try {
    const servicefee = await ServiceFeePlan.findByIdAndDelete(req.params.id);

    res.status(200).json({ servicefee });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
