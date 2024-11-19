import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes';

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ToastService from 'primevue/toastservice';


const app = createApp(App)

const defaultPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    formField: {
      // paddingX: '1rem',
      // paddingY: '1rem',
    },
  },
  components: {
    button: {
      colorScheme: {
        dark: {
          root: {
            primary: {
              background: '{ primary-850 }',
              color: '#fff',
              borderColor: '#3f3f46'
            },
          },
        },
      },
    },
    datatable: {
      rowBackground: '{ primary-850 }',
      headerCellBackground: '{ primary-850 }'
    },
    menubar: {
      background: '{ primary-850 }',
    },
    card: {
      background: '{ primary-850 }',
      shadow: 'none'
    },
    listbox: {
      background: '{ primary-850 }',
      shadow: 'none'
    }
  }
});

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}'
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.950}',
          activeColor: '{zinc.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});


app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: defaultPreset,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
})

app.use(ToastService)

app.mount('#app')
