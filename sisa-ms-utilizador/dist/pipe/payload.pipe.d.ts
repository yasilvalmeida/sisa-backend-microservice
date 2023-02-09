import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class PayloadPipe implements PipeTransform {
    transform(value: any, _metadata: ArgumentMetadata): any;
}
