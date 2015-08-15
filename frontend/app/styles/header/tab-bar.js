import StyleSheet from 'react-style';
import { Styles } from 'material-ui';

let { Colors } = Styles;
let tabBarHeight = 48

export default StyleSheet.create({

  tabs: {
    marginLeft: 170
  },

  tabContainer: {
    height: tabBarHeight
  },

  tab: {
    color: Colors.blueGrey900,
    fontSize: 16,
    fontWeight: '300',
    height: tabBarHeight
  }

});
