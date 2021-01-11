'use strict';

/**
 @interface TreeDataService
 @summary Base class for tree service
**/
export class TreeDataService {

    /**
     * @summary Fetch the entire hierarchy which includes all child nodes to infinity depth
     * @method fetchHierarchyAll
     * @memberOf TreeDataService
     * @instance
     * @description Endpoint `/api/v1/tree/hierarchy/all/:name`
     * @returns {TaTreeBIOS.NodeSource[]}
     * @example
     *  [
     *      {
     *          "tmid": "423788e2-dac1-4146-9b10-2a10ab996896",
     *          "text": "Velit Laboris Irure Ea Officia Nisi Exercitation Reprehenderit Voluptate Id",
     *          "loadingContent": false,
     *          "children": [
     *              {
     *                  "tmid": "731fca19-4204-465b-a225-1d79065e5e9f",
     *                  "text": "Sunt Ex Tempor Qui Ipsum Amet Sit Cillum Deserunt Ea Esse Eu",
     *                  "loadingContent": false,
     *                  "children": [
     *                      {
     *                          "tmid": "de197474-dfb4-4426-b66b-8334018f62d5",
     *                          "text": "Adipisicing Amet Laboris Laboris Nulla Esse"
     *                      }
     *                  ]
     *              }
     *          ]
     *      }
     *  ]
     */
    fetchHierarchyAll() {
        throw 'Not implemented';
    }

    /**
     * @summary Fetch the root node hierarchy and only report that children exist without any details of them
     * @method fetchHierarchyRoot
     * @memberOf TreeDataService
     * @instance
     * @description Endpoint `/api/v1/tree/hierarchy/root/:name`
     * @returns {TaTreeBIOS.NodeSource[]}
     * @example
     *  [
     *      {
     *          "tmid": "423788e2-dac1-4146-9b10-2a10ab996896",
     *          "text": "Velit Laboris Irure Ea Officia Nisi Exercitation Reprehenderit Voluptate Id",
     *          "loadingContent": false,
     *          "children": true
     *      }
     *  ]
     */
    fetchHierarchyRoot() {
        throw 'Not implemented';
    }

    /**
     * @summary Fetch the hiearchy of a particular node given the id, only return one level of details of children
     * @method fetchHierarchyNode
     * @memberOf TreeDataService
     * @instance
     * @description Endpoint `/api/v1/tree/hierarchy/node/:name/:tmid`
     * @param tmid {String} UUID “tree model id”
     * @returns {TaTreeBIOS.NodeSource}
     * @example
     *  {
     *      "tmid": "7bd15c1b-772f-4a14-8a6f-a39a03a3a080",
     *      "text": "Nisi Nisi Dolore Nostrud Commodo Non In Reprehenderit Eiusmod Incididunt In Occaecat",
     *      "loadingContent": false,
     *      "children": [
     *          {
     *              "tmid": "f82d6ffd-d914-416a-a9cc-d4857553c2e0",
     *              "text": "Anim Magna Eu Nostrud Proident Consequat",
     *              "loadingContent": false,
     *              "children": false
     *          }
     *      ]
     *  }
     */
    fetchHierarchyNode(tmid) {
        throw 'Not implemented';
    }

    /**
     * @summary Fetch the details of a particular node given the id, only return the details not given by the hierarchy queries
     * @method fetchDetailsNode
     * @memberOf TreeDataService
     * @instance
     * @description Endpoint `/api/v1/tree/details/node/:name/:tmid`
     * @param tmid {String} UUID “tree model id”
     * @returns {Object.<String, String>}
     * @example
     *  {
     *      "content": "Laboris ut velit sunt dolor ea adipisicing exercitation laborum. Reprehenderit deserunt quis cillum velit laboris. Fugiat aliqua minim ea quis ut ex est dolore nostrud. Velit in aliqua deserunt laborum id dolor mollit est elit nostrud.\n\nVoluptate labore exercitation veniam amet sint cupidatat duis eiusmod pariatur nulla ea ea. Sunt id elit reprehenderit fugiat consectetur in. Occaecat in culpa eiusmod qui ullamco id ipsum. Reprehenderit mollit exercitation proident nisi labore."
     *  }
     */
    async fetchDetailsNode(tmid) {
        throw 'Not implemented';
    }

}
