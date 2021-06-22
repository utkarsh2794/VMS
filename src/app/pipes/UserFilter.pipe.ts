import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class UserFilter implements PipeTransform {
  transform(items: any[], id: string): any {
    if (id) {
      return items.filter((item) => item.id === parseInt(id, 10));
    } else {
      return items;
    }
  }
}
