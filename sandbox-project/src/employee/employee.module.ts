import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './schema/employee-schema';
import { EmployeeService } from './employee.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Employee',
        schema: EmployeeSchema,
        collection: 'Employee',
      },
    ]),
  ],
  providers: [EmployeeService],
})
export class EmployeeModule {}