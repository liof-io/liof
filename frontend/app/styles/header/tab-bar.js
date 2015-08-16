import StyleSheet from 'react-style';
import { Colors } from 'material-ui/lib/styles';

const tabBarHeight = 48

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
