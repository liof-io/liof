import StyleSheet from 'react-style';
import { Styles } from 'material-ui';

let { Typography, Spacing, Colors } = Styles;

export default StyleSheet.create({

  root: {
    fontWeight: Typography.fontWeightLight
  },

  header: {
    backgroundColor: Colors.white
  },

  center: {
    maxWidth: 900,
    margin: 'auto'
  },

  content: {
    marginTop: Spacing.desktopGutterMini,
    marginBottom: Spacing.desktopGutter,
    maxWidth: 900,
    margin: 'auto'
  },

  list: {
    marginTop: Spacing.desktopGutter
  },

  listitem: {
    padding: `0 ${Spacing.desktopGutterLess}px`
  }

});
