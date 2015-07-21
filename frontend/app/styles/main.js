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
    maxWidth: '1000px',
    margin: 'auto'
  },

  content: {
    marginTop: Spacing.desktopGutterMini,
    marginBottom: Spacing.desktopGutter,
    maxWidth: '1000px',
    margin: 'auto'
  },

  list: {
    marginTop: Spacing.desktopGutter,
    // border: `1px solid ${Colors.grey300}`
  },

  listitem: {
    padding: `0 ${Spacing.desktopGutterLess}px`
  }

});
