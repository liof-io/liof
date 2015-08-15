import StyleSheet from 'react-style';
import { Styles } from 'material-ui';

let { Spacing } = Styles;

export default StyleSheet.create({

  content: {
    marginTop: Spacing.desktopGutterMini,
    marginBottom: Spacing.desktopGutter,
    maxWidth: 900,
    margin: 'auto'
  },

  list: {
    marginTop: Spacing.desktopGutter,
    marginBottom: 5
  },

  listitem: {
    padding: `0 ${Spacing.desktopGutterLess}px`
  }

});
