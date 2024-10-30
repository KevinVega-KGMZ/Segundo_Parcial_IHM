import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row_container}>
          <Image
            source={require('./assets/pinpoint.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.header}>9185 Mayflower Drive Atlanta</Text>
        </View>
        <View style={styles.row_container}>
          <Image
            source={require('./assets/sushi.png')}
            style={styles.sushi_conf}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.special_row_container}>
          <Text style={styles.title}>All Restaurants</Text>
          <Text style={styles.submenu}>See All</Text>
        </View>
        <View style={styles.row_container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.col_container}>
              <Image
              source={require('./assets/burrito.png')}
              style={styles.burrito_conf}
              resizeMode="stretch"
              />
              <View style={styles.row_container}>
                <Text style={styles.subtitle1}>Groceries</Text>
                <Image
                  source={require('./assets/star.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.sub_submenu}>4.7</Text>
              </View>
              <View style={styles.no_padding_row_container1}>
                <Text style={styles.food_options_text1}>burger,dessert</Text>
                <Text style={styles.delivery_text}>15-20 min</Text>
              </View>
            </View>
            <View style={styles.col_container}>
              <Image
              source={require('./assets/burrito.png')}
              style={styles.burrito_conf}
              resizeMode="stretch"
              />
              <View style={styles.row_container}>
                <Text style={styles.subtitle1}>Groceries</Text>
                <Image
                  source={require('./assets/star.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.sub_submenu}>4.7</Text>
              </View>
              <View style={styles.no_padding_row_container1}>
                <Text style={styles.food_options_text1}>burger,dessert</Text>
                <Text style={styles.delivery_text}>15-20 min</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.special_row_container}>
          <Text style={styles.title}>All Groceries</Text>
          <Text style={styles.submenu}>See All</Text>
        </View>
        <View style={styles.row_container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.col_container}>
              <Image
              source={require('./assets/vegetables.png')}
              style={styles.vegetables_conf}
              resizeMode="stretch"
              />
              <View style={styles.row_container}>
                <Text style={styles.subtitle2}>Groceries</Text>
                <Image
                  source={require('./assets/star.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.sub_submenu}>4.7</Text>
              </View>
              <View style={styles.no_padding_row_container2}>
                <Text style={styles.food_options_text2}>15-20 min</Text>
              </View>
            </View>
            <View style={styles.col_container}>
              <Image
              source={require('./assets/vegetables.png')}
              style={styles.vegetables_conf}
              resizeMode="stretch"
              />
              <View style={styles.row_container}>
                <Text style={styles.subtitle2}>Groceries</Text>
                <Image
                  source={require('./assets/star.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.sub_submenu}>4.7</Text>
              </View>
              <View style={styles.no_padding_row_container2}>
                <Text style={styles.food_options_text2}>15-20 min</Text>
              </View>
            </View>
            <View style={styles.col_container}>
              <Image
              source={require('./assets/vegetables.png')}
              style={styles.vegetables_conf}
              resizeMode="stretch"
              />
              <View style={styles.row_container}>
                <Text style={styles.subtitle2}>Groceries</Text>
                <Image
                  source={require('./assets/star.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.sub_submenu}>4.7</Text>
              </View>
              <View style={styles.no_padding_row_container2}>
                <Text style={styles.food_options_text2}>15-20 min</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.special_row_container}>
          <Text style={styles.title}>Specials</Text>
        </View>
        <View style={styles.row_container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.col_container}>
              <Image
              source={require('./assets/winery.png')}
              style={styles.winery_conf}
              resizeMode="stretch"
              />
            </View>
            <View style={styles.col_container}>
              <Image
              source={require('./assets/winery.png')}
              style={styles.winery_conf}
              resizeMode="stretch"
              />
            </View>
            <View style={styles.col_container}>
              <Image
              source={require('./assets/winery.png')}
              style={styles.winery_conf}
              resizeMode="stretch"
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  icon : {
    width:20,
    height:60
  },
  row_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 0
  },
  header: {
    fontSize: 16,
    paddingLeft: 10
  }, 
  sushi_conf : {
    width:300,
    height:200,
    borderRadius: 40,
    overflow: 'hidden'
  }, 
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  submenu: {
    fontSize: 20,
    paddingLeft: 65,
    fontWeight: 'bold',
    color: 'gray'
  },
  col_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
    paddingLeft: 30
  },
  burrito_conf : {
    width:200,
    height:150,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    marginBottom: -35 
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 65
  },
  sub_submenu: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray'
  },
  food_options_text1: {
    fontSize: 16,
    paddingRight: 20,
    color: 'gray'
  },
  delivery_text: {
    fontSize: 16,
    color: '#d3d3d3'
  },
  no_padding_row_container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0
  },
  vegetables_conf : {
    width:170,
    height:150,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    marginBottom: -35 
  },
  subtitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 35
  },
  no_padding_row_container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  },
  food_options_text2: {
    fontSize: 16,
    color: 'gray'
  },
  special_row_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingLeft: 30
  },
  winery_conf : {
    width:500,
    height:300,
    borderRadius: 50 
  },
});
