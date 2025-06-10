const axiosFiles  = import.meta.globEager('./modules/*.ts') 
const modules: any = {}
 
for (const key in axiosFiles) {
  modules[key.replace(/(\.\/modules\/|\.ts)/g, '')] = axiosFiles[key].default
}

export default {
  ...modules
}
