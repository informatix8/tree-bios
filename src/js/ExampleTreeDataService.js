'use strict';

import {TreeDataService} from './interfaces';

/**
 * Example TreeDataService implementation
 */
export default class ExampleTreeDataService extends TreeDataService {

    async fetchHierarchyAll() {
        return [
            {
                'tmid': '423788e2-dac1-4146-9b10-2a10ab996896',
                'text': 'Velit Laboris Irure Ea Officia Nisi Exercitation Reprehenderit Voluptate Id',
                'loadingContent': false,
                'children': [
                    {
                        'tmid': '731fca19-4204-465b-a225-1d79065e5e9f',
                        'text': 'Sunt Ex Tempor Qui Ipsum Amet Sit Cillum Deserunt Ea Esse Eu',
                        'loadingContent': false,
                        'children': [
                            {
                                'tmid': 'de197474-dfb4-4426-b66b-8334018f62d5',
                                'text': 'Adipisicing Amet Laboris Laboris Nulla Esse'
                            }
                        ]
                    }
                ]
            }
        ]
    }


    async fetchHierarchyRoot() {
        return [
            {
                'tmid': '423788e2-dac1-4146-9b10-2a10ab996896',
                'text': 'Velit Laboris Irure Ea Officia Nisi Exercitation Reprehenderit Voluptate Id',
                'loadingContent': false,
                'children': true
            }
        ];
    }

    async fetchHierarchyNode(tmid) {
        return {
            'tmid': '7bd15c1b-772f-4a14-8a6f-a39a03a3a080',
            'text': 'Nisi Nisi Dolore Nostrud Commodo Non In Reprehenderit Eiusmod Incididunt In Occaecat',
            'loadingContent': false,
            'children': [
                {
                    'tmid': 'f82d6ffd-d914-416a-a9cc-d4857553c2e0',
                    'text': 'Anim Magna Eu Nostrud Proident Consequat',
                    'loadingContent': false,
                    'children': false
                }
            ]
        };
    }

    async fetchDetailsNode(tmid) {
        return {
            'content': 'Laboris ut velit sunt dolor ea adipisicing exercitation laborum. Reprehenderit deserunt quis cillum velit laboris. Fugiat aliqua minim ea quis ut ex est dolore nostrud. Velit in aliqua deserunt laborum id dolor mollit est elit nostrud.\n\nVoluptate labore exercitation veniam amet sint cupidatat duis eiusmod pariatur nulla ea ea. Sunt id elit reprehenderit fugiat consectetur in. Occaecat in culpa eiusmod qui ullamco id ipsum. Reprehenderit mollit exercitation proident nisi labore.'
        }
    };
}
