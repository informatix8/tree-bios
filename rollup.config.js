import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const config = [

    //
    // DEV BUNDLE
    //

    {
        input: 'src/js/TreeBIOS.js',
        output: {
            name: 'TreeBIOS',
            file: 'public/generated/TreeBIOS.js',
            format: 'iife', // immediately-invoked function expression — suitable for <script> tags
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs()
        ]
    },
    {
        input: 'src/js/ExampleTreeDataService',
        output: {
            name: 'TreeDataService',
            file: 'public/generated/ExampleTreeDataService.js',
            format: 'iife', // immediately-invoked function expression — suitable for <script> tags
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs()
        ]
    },

    //
    // PROD BUNDLE
    //

    {
        input: 'src/js/bundle.js',
        output: {
            name: 'TreeBIOS',
            file: 'dist/tree-bios.umd.js',
            format: 'umd',
            compact: true,
            sourcemap: true
        },
        external: [
            'lodash'
        ],
        plugins: [
            resolve(),
            commonjs(),
            terser({
                ecma: 5
            }),
            filesize()
        ]
    },
    {
        input: 'src/js/bundle.js',
        output: {
            name: 'TreeBIOS',
            file: 'dist/tree-bios.all.umd.js',
            format: 'umd',
            compact: true,
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs(),
            terser({
                ecma: 5
            }),
            filesize()
        ]
    },
    {
        input: 'src/js/bundle.js',
        external: [
            'lodash'
        ],
        output: [
            {
                file: pkg.main,
                compact: true,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: pkg.module,
                compact: true,
                format: 'es',
                sourcemap: true
            }
        ],
        plugins: [
            terser({
                ecma: 5
            }),
            filesize()
        ]
    }
];

export default config;
