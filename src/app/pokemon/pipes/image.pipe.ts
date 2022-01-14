import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: Pokemon): string {
    return value.sprites.front_default;
  }

}
