import { model, Schema } from 'mongoose';

export interface IService {
  Category:
    | 'Day Care'
    | 'Indoor Games'
    | 'Outdoor Games'
    | 'Special Tuitions'
    | 'Special Activities'
    | 'Summer Camp';
  ServiceName: string;
  AcademicYear: string;
  Providers: string;
  isPaid: 'Paid' | 'Unpaid';
  paidBy: string;
}

const ServiceSchema = new Schema<IService>(
  {
    Category: {
      type: 'String',
      required: true,
      enum: [
        'Day Care',
        'Indoor Games',
        'Outdoor Games',
        'Special Tuitions',
        'Special Activities',
        'Summer Camp',
      ],
    },
    ServiceName: { type: 'String', required: true },
    AcademicYear: { type: 'String', required: true },
    Providers: { type: 'String', required: true },
    isPaid: {
      type: 'String',
      required: true,
      enum: ['Paid', 'Unpaid'],
    },
    paidBy: { type: 'String', required: false },
  },
  { timestamps: true }
);

const Service = model<IService>('Service', ServiceSchema);

export default Service;
