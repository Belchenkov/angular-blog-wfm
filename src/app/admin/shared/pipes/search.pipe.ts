import {Pipe, PipeTransform} from '@angular/core';

import {Post} from '../../../shared/interfaces';

@Pipe({
    name: 'searchPosts'
})

export class SearchPipe implements PipeTransform {
    transform(posts: Post[], search = ''): Post[] {
        return posts.filter(post => {
            return post.title
                .toLowerCase()
                .includes(search.toLocaleLowerCase());
        });
    }

}
