const requireContext = require.context('@/assets/icons', false, /\.svg$/);

const icons: { [key: string]: any } = {};

requireContext.keys().forEach((fileName: string) => {
  const iconName = fileName.replace('./', '').replace('.svg', '');
  icons[iconName] = requireContext(fileName).default;
});

export default icons;
