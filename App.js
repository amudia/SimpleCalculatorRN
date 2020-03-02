import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, CheckBox} from 'react-native';
import {Button} from 'react-native-paper';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  wrapcontent: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapinput: {width: 250},
  wrapcheck: {marginLeft: 20},
  textinput: {
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  wrapbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {margin: 5},
  wraptext: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {fontSize: 20},
  text2: {fontSize: 20, fontWeight: 'bold'},
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: null,
      input2: null,
      input3: null,
      checked1: false,
      checked2: false,
      checked3: false,
      result: '',
      error: null,
    };
  }

  add = () => {
    if (this.state.checked1 && this.state.checked2 && this.state.checked3) {
      if (this.state.input1 && this.state.input2 && this.state.input3) {
        this.setState({
          result: this.state.input1 + this.state.input2 + this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked1 && this.state.checked2) {
      if (this.state.input1 && this.state.input2) {
        this.setState({
          result: this.state.input1 + this.state.input2,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked1 && this.state.checked3) {
      if (this.state.input1 && this.state.input3) {
        this.setState({
          result: this.state.input1 + this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked2 && this.state.checked3) {
      if (this.state.input2 && this.state.input3) {
        this.setState({
          result: this.state.input2 + this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else {
      this.setState({
        result: 'Please check 2 or more checklist!',
      });
    }
  };

  min = () => {
    if (this.state.checked1 && this.state.checked2 && this.state.checked3) {
      if (this.state.input1 && this.state.input2 && this.state.input3) {
        this.setState({
          result: this.state.input1 - this.state.input2 - this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked1 && this.state.checked2) {
      if (this.state.input1 && this.state.input2) {
        this.setState({
          result: this.state.input1 - this.state.input2,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked1 && this.state.checked3) {
      if (this.state.input1 && this.state.input3) {
        this.setState({
          result: this.state.input1 - this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked2 && this.state.checked3) {
      if (this.state.input2 && this.state.input3) {
        this.setState({
          result: this.state.input2 - this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else {
      this.setState({
        result: 'Please check 2 or more checklist!',
      });
    }
  };

  multiply = () => {
    if (this.state.checked1 && this.state.checked2 && this.state.checked3) {
      if (this.state.input1 && this.state.input2 && this.state.input3) {
        this.setState({
          result: this.state.input1 * this.state.input2 * this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked1 && this.state.checked2) {
      if (this.state.input1 && this.state.input2) {
        this.setState({
          result: this.state.input1 * this.state.input2,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked1 && this.state.checked3) {
      if (this.state.input1 && this.state.input3) {
        this.setState({
          result: this.state.input1 * this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked2 && this.state.checked3) {
      if (this.state.input2 && this.state.input3) {
        this.setState({
          result: this.state.input2 * this.state.input3,
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else {
      this.setState({
        result: 'Please check 2 or more checklist!',
      });
    }
  };

  divide = () => {
    if (this.state.checked1 && this.state.checked2 && this.state.checked3) {
      if (this.state.input1 && this.state.input2 && this.state.input3) {
        this.setState({
          result: parseFloat(
            this.state.input1 / this.state.input2 / this.state.input3,
          ).toFixed(8),
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked1 && this.state.checked2) {
      if (this.state.input1 && this.state.input2) {
        this.setState({
          result: parseFloat(this.state.input1 / this.state.input2).toFixed(8),
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked1 && this.state.checked3) {
      if (this.state.input1 && this.state.input3) {
        this.setState({
          result: parseFloat(this.state.input1 / this.state.input3).toFixed(8),
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else if (this.state.checked2 && this.state.checked3) {
      if (this.state.input2 && this.state.input3) {
        this.setState({
          result: parseFloat(this.state.input2 / this.state.input3).toFixed(8),
        });
      } else {
        this.setState({
          result: 'Please check 2 or more checklist!',
        });
      }
    } else {
      this.setState({
        result: 'Please check 2 or more checklist!',
      });
    }
  };

  checkBoxtTest = () => {
    this.setState(prevState => ({checked1: !prevState.checked1}));
  };
  checkBoxtTest2 = () => {
    this.setState(prevState => ({checked2: !prevState.checked2}));
  };
  checkBoxtTest3 = () => {
    this.setState(prevState => ({checked3: !prevState.checked3}));
  };

  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}> SIMPLE CALCULATOR </Text>
        </View>
        <View style={styles.wrapcontent}>
          <View style={styles.wrapinput}>
            <TextInput
              keyboardType="numeric"
              style={styles.textinput}
              name="num1"
              onChangeText={input => this.setState({input1: parseInt(input)})}
            />
          </View>
          <View style={styles.wrapcheck}>
            <CheckBox
              color="#7b38c2"
              value={this.state.checked1}
              onChange={() => this.checkBoxtTest()}
            />
          </View>
        </View>
        <View style={styles.wrapcontent}>
          <View style={styles.wrapinput}>
            <TextInput
              keyboardType="numeric"
              style={styles.textinput}
              name="num1"
              onChangeText={input => this.setState({input2: parseInt(input)})}
            />
          </View>
          <View style={styles.wrapcheck}>
            <CheckBox
              color="#7b38c2"
              value={this.state.checked2}
              onChange={() => this.checkBoxtTest2()}
            />
          </View>
        </View>
        <View style={styles.wrapcontent}>
          <View style={styles.wrapinput}>
            <TextInput
              keyboardType="numeric"
              style={styles.textinput}
              name="num1"
              onChangeText={input => this.setState({input3: parseInt(input)})}
            />
          </View>
          <View style={styles.wrapcheck}>
            <CheckBox
              color="#7b38c2"
              value={this.state.checked3}
              onChange={() => this.checkBoxtTest3()}
            />
          </View>
        </View>
        <View style={styles.wrapbtn}>
          <Button mode="outlined" onPress={this.add} style={styles.btn}>
            +
          </Button>
          <Button mode="outlined" onPress={this.min} style={styles.btn}>
            -
          </Button>
          <Button mode="outlined" onPress={this.multiply} style={styles.btn}>
            x
          </Button>
          <Button mode="outlined" onPress={this.divide} style={styles.btn}>
            /
          </Button>
        </View>
        <View style={styles.wraptext}>
          <Text style={styles.text1}>Hasil: </Text>
          <Text style={styles.text2}>{this.state.result}</Text>
        </View>
      </View>
    );
  }
}
