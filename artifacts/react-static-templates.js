

import React from 'react'
import universal, { setHasBabelPlugin } from '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/lel.jsx'), universalOptions)
      t_1.template = '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/lel.jsx'
      
const t_2 = universal(import('/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.en.jsx'), universalOptions)
      t_2.template = '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.en.jsx'
      
const t_3 = universal(import('/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.zht.jsx'), universalOptions)
      t_3.template = '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.zht.jsx'
      
const t_4 = universal(import('/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.zhs.jsx'), universalOptions)
      t_4.template = '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.zhs.jsx'
      
const t_5 = universal(import('/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/billing/PlanPicker.jsx'), universalOptions)
      t_5.template = '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/billing/PlanPicker.jsx'
      
const t_6 = universal(import('/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/billing/Success.jsx'), universalOptions)
      t_6.template = '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/billing/Success.jsx'
      

// Template Map
export default {
  '/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/node_modules/react-static/lib/browser/components/Default404': t_0,
'/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/lel.jsx': t_1,
'/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.en.jsx': t_2,
'/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.zht.jsx': t_3,
'/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/Main.zhs.jsx': t_4,
'/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/billing/PlanPicker.jsx': t_5,
'/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/src/billing/Success.jsx': t_6
}
// Not Found Template
export const notFoundTemplate = "/tank/encrypted/homedirs/miyuruasuka/GEPH4/next.geph.io/node_modules/react-static/lib/browser/components/Default404"

