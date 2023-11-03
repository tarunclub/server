import { Request, Response } from 'express';
import Service from '../models/service.modal';

export const addService = async (req: Request, res: Response) => {
  try {
    const { Category, ServiceName, AcademicYear, Providers, isPaid, paidBy } =
      req.body;

    const service = await Service.create({
      Category,
      ServiceName,
      AcademicYear,
      Providers,
      isPaid,
      paidBy,
    });

    res.status(201).json({ service });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find();

    res.status(200).json({ services });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findById(req.params.id);

    res.status(200).json({ service });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateService = async (req: Request, res: Response) => {
  try {
    const { Category, ServiceName, AcademicYear, Providers, isPaid, paidBy } =
      req.body;

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { Category, ServiceName, AcademicYear, Providers, isPaid, paidBy },
      { new: true }
    );

    res.status(200).json({ service });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    res.status(201).json({ service });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
