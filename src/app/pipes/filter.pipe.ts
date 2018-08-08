import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(item: any[], searchText: string): any[] {
    
    if(!item) return [];
    if(!searchText) return item;

    searchText = searchText.toLowerCase();
    //console.log(item)

    return item.filter( it => {
      return JSON.stringify(it).toLowerCase().includes(searchText);
    });
  }

}
