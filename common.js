import browserSync from 'browser-sync'

import config from './config'

const common = {
  dir: {
    assets: 'assets',
    // video: 'video',
    images: 'images',
    includes: 'includes',
    pages: 'pages',
    scripts: 'scripts',
    static: 'static',
    styles: 'styles'
  },
  ext: {
    images: '.+(png|jp?(e)g|gif|svg)',
    // video: '.mp4',
    pages: '.ejs',
    scripts: '.js',
    styles: '.scss'
  },
  server: browserSync.create()
}

common.srcPaths = {
  copy: [`${config.srcDir}/${common.dir.static}/**`, '!**/.gitkeep'],
  images: `${config.srcDir}/${common.dir.assets}/${common.dir.images}/**/*${
    common.ext.images
  }`,
  // video: `${config.srcDir}/${common.dir.assets}/${common.dir.video}/**/*${
  //   common.ext.video
  // }`,
  includes: `${config.srcDir}/${common.dir.includes}/**/*${common.ext.pages}`,
  pages: `${config.srcDir}/${common.dir.pages}/**/*${common.ext.pages}`,
  scripts: `${config.srcDir}/${common.dir.assets}/${common.dir.scripts}/**/*${
    common.ext.scripts
  }`,
  styles: `${config.srcDir}/${common.dir.assets}/${common.dir.styles}/**/*${
    common.ext.styles
  }`
}

export default common
