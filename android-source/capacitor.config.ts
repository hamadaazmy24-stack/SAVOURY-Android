import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.savoury.platform',
  appName: 'SAVOURY',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#ffffff'
  }
};

export default config;
