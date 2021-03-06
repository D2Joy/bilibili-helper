import path from 'path'
import scssToString from 'rollup-plugin-scss-string'
import typescript from '@rollup/plugin-typescript'
import template from '../rollup-plugin-output-template/index'

export default {
    input: path.resolve(__dirname, 'src/main.js'),
    output: {
        file: path.resolve(__dirname, '../../scripts/bilibili_bangumi_area_limit_hack.user.js'),
        format: 'es',
    },
    plugins: [
        scssToString({
            include: '**/*.scss'
        }),
        typescript({
            // 这个版本会"编译"async函数
            target: 'ES2016',
        }),
        template({
            filePath: path.resolve(__dirname, 'src/main.user.js'),
        }),
    ]
}
