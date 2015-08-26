import StyleSheet from 'react-style';
import { Spacing } from 'material-ui/lib/styles';

export default StyleSheet.create({

  list: {
    marginTop: Spacing.desktopGutter,
    marginBottom: 5
  },

  listitem: {
    padding: `0 ${Spacing.desktopGutterLess}px`
  }

});
