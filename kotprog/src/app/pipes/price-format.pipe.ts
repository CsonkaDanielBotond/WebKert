import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '$'): string {
    if (!value) return `${currencySymbol}0`;
    
    // Format with thousand separators
    const formattedPrice = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    return `${currencySymbol}${formattedPrice}`;
  }
}