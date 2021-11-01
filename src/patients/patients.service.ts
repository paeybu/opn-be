import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}
  async create(createPatientDto: CreatePatientDto) {
    const createdPatient = new this.patientModel(createPatientDto);
    return createdPatient.save();
  }

  async findAll() {
    return this.patientModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  async remove(id: string) {
    return await this.patientModel.findByIdAndRemove(id);
  }
}
