import StyleSheet from 'react-style';
import { Styles } from 'material-ui';

let { Typography, Spacing } = Styles;

export default StyleSheet.create({

  root: {
    fontWeight: Typography.fontWeightLight,
    maxWidth: '1000px',
    margin: 'auto'
  },

  content: {
    marginTop: Spacing.desktopGutterMini,
    marginBottom: Spacing.desktopGutter,
  },

  list: {
    marginTop: Spacing.desktopGutter
  },

  listitem: {
    padding: `0 ${Spacing.desktopGutterLess}px`
  }

});
