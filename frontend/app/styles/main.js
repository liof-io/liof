import StyleSheet from 'react-style';
import { Styles } from 'material-ui';

let { Spacing } = Styles;

document.body.style.backgroundColor = '#F9F9F9';

export default StyleSheet.create({

  root: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '0 8px'
  },

  content: {
    margin: `${Spacing.desktopGutterMini}px auto`
  },

  list: {
    margin: `${Spacing.desktopGutterMini}px auto`
  }

});
